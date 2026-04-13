import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Alert, TextInput, Image, Modal, FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paystack } from 'react-native-paystack-webview';
import { useApp } from '../../context/AppContext';
import { getCountryById, getPlaceById } from '../../data/worldData';
import { Button, Badge, StarRating, Avatar, RoleBadge, EmptyState, Input } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import {
  PAYSTACK_PUBLIC_KEY, calcTripPayment, generateRef,
  isSubscriptionActive,
} from '../../utils/paystack';
import { pickPhotos } from '../../utils/photoUtils';

// USD/NGN approximate rate (update periodically)
const USD_TO_NGN = 1580;

function formatPrice(price, currency) {
  if (!price) return { usd: '$0', ngn: '₦0' };
  const usdAmount = currency === 'USD' ? price : price / USD_TO_NGN;
  const ngnAmount = currency === 'USD' ? price * USD_TO_NGN : price;
  return {
    usd: `$${Math.round(usdAmount).toLocaleString()}`,
    ngn: `₦${Math.round(ngnAmount).toLocaleString()}`,
    usdNum: Math.round(usdAmount),
  };
}

const TIER_CONFIG = {
  all:     { emoji: '🌍', label: 'All Trips',  desc: 'Every adventure',  color: '#2D6A4F', bg: '#D8F3DC', textColor: '#1B4332' },
  budget:  { emoji: '🎒', label: 'Budget',     desc: 'Under $300',       color: '#40916C', bg: '#B7E4C7', textColor: '#1B4332' },
  mid:     { emoji: '⭐', label: 'Mid-Range',  desc: '$300 – $1,000',    color: '#E07A32', bg: '#FFF3E0', textColor: '#7C4700' },
  premium: { emoji: '💎', label: 'Premium',    desc: 'Above $1,000',     color: '#7B5EA7', bg: '#F0E6FF', textColor: '#4A2080' },
};

// ── MARKETPLACE ───────────────────────────────────────────────────────────────
export function TripsMarketplaceScreen({ navigation }) {
  const { trips, currentUser } = useApp();
  const [filter, setFilter] = useState('all');

  const published = (trips || []).filter(t => t.status === 'published' || t.status === 'live' || t.status === 'ended');

  const usdPrice = (t) => t.currency === 'USD' ? t.price : t.price / USD_TO_NGN;

  const counts = {
    all:     published.length,
    budget:  published.filter(t => usdPrice(t) < 300).length,
    mid:     published.filter(t => usdPrice(t) >= 300 && usdPrice(t) < 1000).length,
    premium: published.filter(t => usdPrice(t) >= 1000).length,
  };

  const filtered = published.filter(t => {
    const p = usdPrice(t);
    if (filter === 'budget')  return p < 300;
    if (filter === 'mid')     return p >= 300 && p < 1000;
    if (filter === 'premium') return p >= 1000;
    return true;
  });

  const tier = TIER_CONFIG[filter];

  const ListHeader = () => (
    <>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.headerTitle}>Trips</Text>
          <Text style={s.headerSub}>Guided adventures & solo journeys</Text>
        </View>
        <Text style={{ fontSize: 28 }}>🧭</Text>
      </View>

      {/* Filter Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Spacing.md, gap: 10, paddingBottom: Spacing.md, paddingTop: 4 }}>
        {Object.entries(TIER_CONFIG).map(([key, cfg]) => {
          const active = filter === key;
          return (
            <TouchableOpacity
              key={key}
              style={[s.filterCard, active && { backgroundColor: cfg.color, borderColor: cfg.color }]}
              onPress={() => setFilter(key)}
              activeOpacity={0.82}
            >
              <Text style={s.filterEmoji}>{cfg.emoji}</Text>
              <Text style={[s.filterLabel, active && { color: '#fff' }]}>{cfg.label}</Text>
              <Text style={[s.filterDesc, active && { color: 'rgba(255,255,255,0.8)' }]}>{cfg.desc}</Text>
              <View style={[s.filterBadge, active && { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
                <Text style={[s.filterBadgeText, active && { color: '#fff' }]}>{counts[key]}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Active filter label */}
      <View style={{ paddingHorizontal: Spacing.md, paddingBottom: Spacing.sm, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <View style={[s.tierDot, { backgroundColor: tier.color }]} />
        <Text style={[s.tierLabel, { color: tier.color }]}>{tier.label}</Text>
        <Text style={s.tierCount}>{filtered.length} trip{filtered.length !== 1 ? 's' : ''}</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <FlatList
        data={filtered}
        keyExtractor={t => t.id}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingHorizontal: Spacing.md, paddingBottom: 120 }}
        ListEmptyComponent={
          <View style={s.emptyCard}>
            <Text style={{ fontSize: 48, marginBottom: Spacing.sm }}>{tier.emoji}</Text>
            <Text style={s.emptyTitle}>No {tier.label.toLowerCase()} trips yet</Text>
            <Text style={s.emptySub}>
              {filter === 'all'
                ? 'Tour guides haven\'t published any trips yet. Check back soon!'
                : `No trips in the ${tier.label} tier yet. Try another category.`}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TripCard trip={item} onPress={() => navigation.navigate('TripDetail', { tripId: item.id })} />
        )}
      />

      {currentUser?.role === 'tourguide' && (
        <TouchableOpacity style={s.fab} onPress={() => navigation.navigate('CreateTrip')} activeOpacity={0.9}>
          <Text style={s.fabText}>+ Create Trip Package</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

function getTierInfo(price, currency) {
  const usd = currency === 'USD' ? price : price / USD_TO_NGN;
  if (usd < 300)  return TIER_CONFIG.budget;
  if (usd < 1000) return TIER_CONFIG.mid;
  return TIER_CONFIG.premium;
}

function TripCard({ trip, onPress }) {
  const country = getCountryById(trip.countryId);
  const p = formatPrice(trip.price || 0, trip.currency || 'USD');
  const tier = getTierInfo(trip.price || 0, trip.currency || 'USD');

  return (
    <TouchableOpacity style={s.tripCard} onPress={onPress} activeOpacity={0.88}>
      {/* Cover Image */}
      {trip.coverPhoto
        ? <Image source={{ uri: trip.coverPhoto }} style={s.tripCover} />
        : <View style={[s.tripCover, s.tripCoverFallback]}>
            <Text style={{ fontSize: 56 }}>{country?.flag || '🌍'}</Text>
          </View>
      }

      {/* Top badges */}
      <View style={{ position: 'absolute', top: Spacing.sm, left: Spacing.sm, right: Spacing.sm, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[s.tierPill, { backgroundColor: tier.color }]}>
          <Text style={s.tierPillText}>{tier.emoji} {tier.label}</Text>
        </View>
        <View style={s.reliabilityBadge}>
          <Text style={s.reliabilityText}>{trip.guideScore != null ? `${trip.guideScore}% reliable` : '🆕 New'}</Text>
        </View>
      </View>

      <View style={s.tripBody}>
        <Text style={s.tripTitle}>{trip.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <Text style={s.tripMeta}>{country?.flag} {country?.name}</Text>
          <Text style={s.tripMetaDot}>·</Text>
          <Text style={s.tripMeta}>{trip.durationDays || 1}d</Text>
          <Text style={s.tripMetaDot}>·</Text>
          <Text style={s.tripMeta}>{(trip.placeIds || []).length} stops</Text>
          {trip.groupSize ? (<><Text style={s.tripMetaDot}>·</Text><Text style={s.tripMeta}>Max {trip.groupSize}</Text></>) : null}
        </View>
        <Text style={s.tripDesc} numberOfLines={2}>{trip.publicDescription}</Text>
        <View style={s.tripFooter}>
          <View>
            <Text style={s.tripFromLabel}>From</Text>
            <Text style={s.tripPrice}>{p.usd}</Text>
            <Text style={s.tripNgn}>{p.ngn} per person</Text>
          </View>
          <View style={{ alignItems: 'flex-end', gap: 4 }}>
            {(trip.avgRating || 0) > 0 && <StarRating rating={trip.avgRating} size={13} />}
            <Text style={s.tripBookings}>{trip.bookingCount || 0} bookings</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ── TRIP DETAIL ───────────────────────────────────────────────────────────────
export function TripDetailScreen({ route, navigation }) {
  const { tripId } = route.params;
  const { trips, currentUser, bookTrip, getUserById, getTripBookings } = useApp();
  const trip = (trips || []).find(t => t.id === tripId);
  const [showPaystack, setShowPaystack] = useState(false);

  if (!trip) return <SafeAreaView style={s.safe}><EmptyState icon="❓" title="Trip not found" /></SafeAreaView>;

  const guide = getUserById(trip.guideId);
  const country = getCountryById(trip.countryId);
  const p = formatPrice(trip.price || 0, trip.currency || 'USD');
  const pay = calcTripPayment(trip.price || 0, trip.currency || 'USD');
  const myBooking = getTripBookings(tripId).find(b => b.userId === currentUser?.id);
  const hasBooked = !!myBooking;
  const isGuide = currentUser?.id === trip.guideId;
  const subscribed = isSubscriptionActive(currentUser);

  const bookingRef = generateRef('booking', {
    bookingId: `b${Date.now()}`,
    guideId: trip.guideId,
    tripId: trip.id,
    amount: trip.price,
    currency: trip.currency || 'USD',
  });

  const onPaySuccess = async (res) => {
    setShowPaystack(false);
    try {
      await bookTrip({
        tripId: trip.id, guideId: trip.guideId,
        amount: pay.total, guideAmount: trip.price,
        platformCut: pay.platformCut, currency: trip.currency || 'USD',
        reference: bookingRef, paystackRef: res?.data?.reference,
      });
      Alert.alert('🎉 Booking Confirmed!',
        `You're booked on "${trip.title}". The full itinerary is now unlocked!`,
        [{ text: 'View My Bookings', onPress: () => navigation.navigate('MyBookings') }]
      );
    } catch (e) {
      Alert.alert('Error', 'Payment received but booking failed. Contact support with ref: ' + bookingRef);
    }
  };

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      {showPaystack && (
        <Modal animationType="slide" visible onRequestClose={() => setShowPaystack(false)}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={s.modalHeader}>
              <TouchableOpacity onPress={() => setShowPaystack(false)}>
                <Text style={s.modalClose}>✕ Cancel</Text>
              </TouchableOpacity>
              <Text style={s.modalTitle}>Book Trip</Text>
              <View style={{ width: 80 }} />
            </View>
            <Paystack
              paystackKey={PAYSTACK_PUBLIC_KEY}
              amount={pay.totalKobo}
              billingEmail={currentUser?.email || ''}
              billingName={currentUser?.name || ''}
              currency={trip.currency || 'NGN'}
              refNumber={bookingRef}
              onCancel={() => setShowPaystack(false)}
              onSuccess={onPaySuccess}
              autoStart
            />
          </SafeAreaView>
        </Modal>
      )}

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {trip.coverPhoto
          ? <Image source={{ uri: trip.coverPhoto }} style={s.detailCover} />
          : <View style={[s.detailCover, { backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' }]}>
              <Text style={{ fontSize: 80 }}>{country?.flag || '🌍'}</Text>
            </View>
        }
        <TouchableOpacity style={s.backOverlay} onPress={() => navigation.goBack()}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>←</Text>
        </TouchableOpacity>

        <View style={{ padding: Spacing.md }}>
          <Text style={s.detailTitle}>{trip.title}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: Spacing.md }}>
            <Badge label={`${country?.flag || ''} ${country?.name || ''}`} />
            <Badge label={`${trip.durationDays || 1} days`} />
            <Badge label={`${(trip.placeIds || []).length} stops`} />
            {trip.groupSize ? <Badge label={`Max ${trip.groupSize}`} /> : null}
          </View>

          {guide && (
            <TouchableOpacity style={s.guideCard} onPress={() => navigation.navigate('UserProfile', { userId: guide.id })} activeOpacity={0.85}>
              <Avatar name={guide.name} size={48} />
              <View style={{ flex: 1, marginLeft: Spacing.md }}>
                <Text style={s.guideName}>{guide.name}</Text>
                <RoleBadge role="tourguide" />
                {trip.guideScore != null && (
                  <Text style={{ fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 4 }}>
                    {trip.guideScore}% trip completion rate
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          )}

          <Text style={s.sectionTitle}>About This Trip</Text>
          <Text style={s.descText}>{trip.publicDescription}</Text>

          {(trip.highlights || []).length > 0 && (
            <>
              <Text style={s.sectionTitle}>Highlights</Text>
              {trip.highlights.map((h, i) => (
                <View key={i} style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
                  <Text style={{ color: Colors.primary }}>✦</Text>
                  <Text style={{ flex: 1, fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 22 }}>{h}</Text>
                </View>
              ))}
            </>
          )}

          {(trip.includes || []).length > 0 && (
            <>
              <Text style={s.sectionTitle}>What's Included</Text>
              {trip.includes.map((item, i) => <Text key={i} style={s.includeItem}>✅ {item}</Text>)}
            </>
          )}

          {(trip.excludes || []).length > 0 && (
            <>
              <Text style={s.sectionTitle}>Not Included</Text>
              {trip.excludes.map((item, i) => <Text key={i} style={s.excludeItem}>❌ {item}</Text>)}
            </>
          )}

          <Text style={s.sectionTitle}>Itinerary</Text>
          {hasBooked || isGuide ? (
            <>
              <Text style={{ fontSize: Typography.sizes.sm, color: Colors.accent, fontWeight: '600', marginBottom: Spacing.sm }}>🔓 Full itinerary unlocked</Text>
              {(trip.placeIds || []).map((pid, idx) => {
                const place = getPlaceById(pid);
                if (!place) return null;
                return (
                  <TouchableOpacity key={pid} style={s.stopRow} onPress={() => navigation.navigate('PlaceDetail', { placeId: pid })} activeOpacity={0.8}>
                    <View style={s.stopNum}><Text style={s.stopNumText}>{idx + 1}</Text></View>
                    <View style={{ flex: 1 }}>
                      <Text style={s.stopName}>{place.name}</Text>
                      <Text style={{ fontSize: Typography.sizes.sm, color: Colors.textMuted }}>{place.stateName} · {place.category}</Text>
                    </View>
                    <Text style={{ color: Colors.primary }}>→</Text>
                  </TouchableOpacity>
                );
              })}
              {trip.privateDetails ? (
                <View style={s.privateBox}>
                  <Text style={s.privateTitle}>📋 Guide Notes</Text>
                  <Text style={{ fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 22 }}>{trip.privateDetails}</Text>
                </View>
              ) : null}
            </>
          ) : (
            <View style={s.lockedBox}>
              <Text style={{ fontSize: 36 }}>🔒</Text>
              <Text style={s.lockedTitle}>Full itinerary unlocks after booking</Text>
              <Text style={s.lockedSub}>This trip has {(trip.placeIds || []).length} stops. Book to see every location and guide notes.</Text>
            </View>
          )}

          <Text style={s.sectionTitle}>Price Breakdown</Text>
          <View style={s.priceBox}>
            <PRow label="Guide fee" value={p.usd} />
            <PRow label="≈ in Naira" value={p.ngn} muted />
            <PRow label="Platform fee (10%)" value={`$${(p.usdNum * 0.1).toFixed(2)}`} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: Spacing.sm }}>
              <Text style={{ fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.textPrimary }}>Total</Text>
              <Text style={{ fontSize: Typography.sizes.lg, fontWeight: '800', color: Colors.primary }}>${(p.usdNum * 1.1).toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={s.bookBar}>
        <TouchableOpacity
          style={s.soloBtn}
          onPress={() => navigation.navigate('CreateItinerary', {
            countryId: trip.countryId,
          })}
          activeOpacity={0.85}
        >
          <Text style={s.soloBtnText}>🚶 Solo</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          {isGuide ? (
            <Button title="▶ Start Trip" onPress={() => navigation.navigate('LiveTrip', { tripId: trip.id })} />
          ) : hasBooked ? (
            <Button title="✅ Booked" variant="secondary" disabled />
          ) : !subscribed ? (
            <Button title="Subscribe to Book" onPress={() => navigation.navigate('Paywall')} />
          ) : (
            <Button title="Book with Guide 🎒" onPress={() => setShowPaystack(true)} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

function PRow({ label, value, muted }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: Colors.borderLight }}>
      <Text style={{ fontSize: Typography.sizes.md, color: muted ? Colors.textMuted : Colors.textSecondary }}>{label}</Text>
      <Text style={{ fontSize: Typography.sizes.md, fontWeight: '600', color: muted ? Colors.textMuted : Colors.textPrimary }}>{value}</Text>
    </View>
  );
}

// ── CREATE TRIP ───────────────────────────────────────────────────────────────
export function CreateTripScreen({ route, navigation }) {
  const { createTrip, updateTrip, trips, currentUser, getUserItineraries } = useApp();
  const editId = route.params?.editId;
  const existing = editId ? (trips || []).find(t => t.id === editId) : null;
  const myItineraries = getUserItineraries(currentUser?.id) || [];

  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(existing?.title || '');
  const [publicDesc, setPublicDesc] = useState(existing?.publicDescription || '');
  const [privateDetails, setPrivateDetails] = useState(existing?.privateDetails || '');
  const [days, setDays] = useState(existing?.durationDays?.toString() || '');
  const [groupSize, setGroupSize] = useState(existing?.groupSize?.toString() || '');
  const [price, setPrice] = useState(existing?.price?.toString() || '');
  const [currency, setCurrency] = useState(existing?.currency || 'NGN');
  const [itiId, setItiId] = useState(existing?.itineraryId || '');
  const [highlights, setHighlights] = useState(existing?.highlights || ['', '', '']);
  const [includes, setIncludes] = useState((existing?.includes || []).join('\n'));
  const [excludes, setExcludes] = useState((existing?.excludes || []).join('\n'));
  const [cover, setCover] = useState(existing?.coverPhoto || null);
  const [loading, setLoading] = useState(false);

  const selectedIti = myItineraries.find(i => i.id === itiId);
  const sym = currency === 'NGN' ? '₦' : '$';

  const pickCover = async () => {
    const uris = await pickPhotos(0, 1);
    if (uris.length) setCover(uris[0]);
  };

  const save = async (status = 'draft') => {
    if (!title.trim()) { Alert.alert('Title required'); return; }
    if (!itiId) { Alert.alert('Select an itinerary'); return; }
    if (!price || isNaN(parseFloat(price))) { Alert.alert('Valid price required'); return; }
    setLoading(true);
    try {
      const data = {
        title, publicDescription: publicDesc, privateDetails,
        durationDays: parseInt(days) || 1, groupSize: parseInt(groupSize) || null,
        price: parseFloat(price), currency,
        itineraryId: itiId, countryId: selectedIti?.countryId,
        placeIds: selectedIti?.placeIds || [],
        highlights: highlights.filter(h => h.trim()),
        includes: includes.split('\n').map(s => s.trim()).filter(Boolean),
        excludes: excludes.split('\n').map(s => s.trim()).filter(Boolean),
        coverPhoto: cover, status,
      };
      if (existing) { await updateTrip(editId, data); Alert.alert('Updated!'); }
      else { await createTrip(data); Alert.alert(status === 'published' ? '🎉 Published!' : '📝 Saved as Draft'); }
      navigation.goBack();
    } catch (e) { Alert.alert('Error', e.message); }
    finally { setLoading(false); }
  };

  // steps: ['Trip Info', 'Pricing & Route', 'Private Details']

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.modalHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ fontSize: 20, color: Colors.textSecondary }}>✕</Text></TouchableOpacity>
        <Text style={s.modalTitle}>{existing ? 'Edit Trip' : 'Create Trip'}</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Spacing.md }}>
        {[1, 2, 3].map(n => (
          <React.Fragment key={n}>
            <TouchableOpacity style={[s.stepDot, step >= n && s.stepDotActive]} onPress={() => n < step && setStep(n)}>
              <Text style={[s.stepNum, step >= n && s.stepNumActive]}>{n}</Text>
            </TouchableOpacity>
            {n < 3 && <View style={[s.stepLine, step > n && s.stepLineActive]} />}
          </React.Fragment>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 140 }} keyboardShouldPersistTaps="handled">
        {step === 1 && (
          <>
            <Text style={s.stepTitle}>Trip Details</Text>
            <Text style={s.stepSub}>What travellers see before booking</Text>
            <TouchableOpacity style={s.coverPick} onPress={pickCover} activeOpacity={0.8}>
              {cover
                ? <Image source={{ uri: cover }} style={s.coverImg} />
                : <View style={s.coverPlaceholder}><Text style={{ fontSize: 36 }}>📸</Text><Text style={s.coverPickText}>Add Cover Photo</Text></View>
              }
            </TouchableOpacity>
            <Input label="Trip Title" value={title} onChangeText={setTitle} placeholder="e.g. 3 Days in Ghana — Gold & Culture" />
            <Text style={s.fieldLabel}>Public Description</Text>
            <TextInput style={s.textarea} value={publicDesc} onChangeText={setPublicDesc} placeholder="What makes this trip special?" placeholderTextColor={Colors.textMuted} multiline numberOfLines={4} textAlignVertical="top" maxLength={500} />
            <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
              <Input label="Duration (days)" value={days} onChangeText={setDays} keyboardType="number-pad" containerStyle={{ flex: 1 }} placeholder="3" />
              <Input label="Max Group Size" value={groupSize} onChangeText={setGroupSize} keyboardType="number-pad" containerStyle={{ flex: 1 }} placeholder="10" />
            </View>
            <Text style={s.fieldLabel}>Highlights</Text>
            {highlights.map((h, i) => (
              <TextInput key={i} style={[s.inputField, { marginBottom: 8 }]} value={h}
                onChangeText={v => setHighlights(prev => prev.map((x, idx) => idx === i ? v : x))}
                placeholder={`Highlight ${i + 1}`} placeholderTextColor={Colors.textMuted} />
            ))}
            <Button title="Next →" onPress={() => setStep(2)} style={{ marginTop: Spacing.md }} />
          </>
        )}

        {step === 2 && (
          <>
            <Text style={s.stepTitle}>Pricing & Route</Text>
            <Text style={s.stepSub}>Set your price and link your itinerary</Text>
            <Text style={s.fieldLabel}>Currency</Text>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: Spacing.md }}>
              {['NGN', 'USD'].map(c => (
                <TouchableOpacity key={c} style={[s.chip, currency === c && s.chipActive]} onPress={() => setCurrency(c)}>
                  <Text style={[s.chipText, currency === c && s.chipTextActive]}>{c === 'NGN' ? '🇳🇬 NGN' : '🌐 USD'}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Input label={`Your Price (${sym}) per person`} value={price} onChangeText={setPrice} keyboardType="number-pad" placeholder={currency === 'NGN' ? '50000' : '200'} />
            {price && !isNaN(parseFloat(price)) && (() => {
              const fp = formatPrice(parseFloat(price), currency);
              return (
                <View style={s.pricePreview}>
                  <Text style={{ fontSize: Typography.sizes.sm, fontWeight: '700', color: Colors.primary, marginBottom: 8 }}>What travellers pay</Text>
                  <PRow label="Your fee" value={fp.usd} />
                  <PRow label="≈ in Naira" value={fp.ngn} muted />
                  <PRow label="Platform (10%)" value={`$${(fp.usdNum * 0.1).toFixed(2)}`} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8 }}>
                    <Text style={{ fontWeight: '700', color: Colors.textPrimary }}>Total</Text>
                    <Text style={{ fontWeight: '800', color: Colors.primary }}>${(fp.usdNum * 1.1).toFixed(2)}</Text>
                  </View>
                </View>
              );
            })()}
            <Text style={[s.fieldLabel, { marginTop: Spacing.md }]}>Link an Itinerary</Text>
            {myItineraries.length === 0
              ? <View style={{ backgroundColor: Colors.surfaceAlt, borderRadius: Radius.lg, padding: Spacing.lg, alignItems: 'center' }}>
                  <Text style={{ color: Colors.textMuted }}>Create an itinerary first</Text>
                  <Button title="Create Itinerary" onPress={() => navigation.navigate('CreateItinerary', {})} variant="secondary" size="sm" style={{ marginTop: 8 }} />
                </View>
              : myItineraries.map(iti => {
                  const c = getCountryById(iti.countryId);
                  return (
                    <TouchableOpacity key={iti.id} style={[s.itiOption, itiId === iti.id && s.itiOptionActive]} onPress={() => setItiId(iti.id)} activeOpacity={0.8}>
                      <Text style={{ fontSize: 24 }}>{c?.flag || '🌍'}</Text>
                      <View style={{ flex: 1, marginLeft: Spacing.sm }}>
                        <Text style={{ fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary }}>{iti.title}</Text>
                        <Text style={{ fontSize: Typography.sizes.sm, color: Colors.textMuted }}>{(iti.placeIds || []).length} places</Text>
                      </View>
                      {itiId === iti.id && <Text style={{ color: Colors.primary, fontSize: 20 }}>✓</Text>}
                    </TouchableOpacity>
                  );
                })
            }
            <Button title="Next →" onPress={() => setStep(3)} disabled={!price || !itiId} style={{ marginTop: Spacing.lg }} />
          </>
        )}

        {step === 3 && (
          <>
            <Text style={s.stepTitle}>Private Details</Text>
            <Text style={s.stepSub}>Only visible to bookers</Text>
            <Text style={s.fieldLabel}>Guide Notes (meeting point, what to bring, day schedule…)</Text>
            <TextInput style={[s.textarea, { minHeight: 110 }]} value={privateDetails} onChangeText={setPrivateDetails} placeholder="Meeting point, accommodation, contact number, day-by-day schedule..." placeholderTextColor={Colors.textMuted} multiline textAlignVertical="top" maxLength={1000} />
            <Text style={s.fieldLabel}>What's Included (one per line)</Text>
            <TextInput style={[s.textarea, { minHeight: 80 }]} value={includes} onChangeText={setIncludes} placeholder={"Airport pickup\nAccommodation\nPark entry fees"} placeholderTextColor={Colors.textMuted} multiline textAlignVertical="top" />
            <Text style={s.fieldLabel}>What's Not Included (one per line)</Text>
            <TextInput style={[s.textarea, { minHeight: 60 }]} value={excludes} onChangeText={setExcludes} placeholder={"International flights\nLunch and dinner"} placeholderTextColor={Colors.textMuted} multiline textAlignVertical="top" />
            <View style={{ flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.lg }}>
              <Button title="💾 Save Draft" onPress={() => save('draft')} variant="secondary" loading={loading} style={{ flex: 1 }} />
              <Button title="🚀 Publish" onPress={() => save('published')} loading={loading} style={{ flex: 1 }} />
            </View>
          </>
        )}
      </ScrollView>

      {step > 1 && (
        <TouchableOpacity style={{ position: 'absolute', bottom: 24, left: Spacing.md, padding: 10 }} onPress={() => setStep(s => s - 1)}>
          <Text style={{ color: Colors.textMuted, fontSize: Typography.sizes.md }}>← Previous</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: Spacing.md, paddingBottom: Spacing.sm },
  headerTitle: { fontSize: Typography.sizes.xxxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  headerSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  // Filter Cards
  filterCard: { width: 110, borderRadius: Radius.xl, backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, padding: Spacing.md, alignItems: 'center', gap: 4, ...Shadow.sm },
  filterEmoji: { fontSize: 26, marginBottom: 2 },
  filterLabel: { fontSize: Typography.sizes.sm, fontWeight: '700', color: Colors.textPrimary, textAlign: 'center' },
  filterDesc: { fontSize: 10, color: Colors.textMuted, textAlign: 'center' },
  filterBadge: { marginTop: 4, backgroundColor: Colors.surfaceAlt, borderRadius: Radius.full, paddingHorizontal: 8, paddingVertical: 2 },
  filterBadgeText: { fontSize: 11, fontWeight: '700', color: Colors.textSecondary },
  tierDot: { width: 8, height: 8, borderRadius: 4 },
  tierLabel: { fontSize: Typography.sizes.sm, fontWeight: '700' },
  tierCount: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginLeft: 2 },

  // Trip cards
  chip: { paddingHorizontal: Spacing.md, paddingVertical: 8, borderRadius: Radius.full, backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '500' },
  chipTextActive: { color: Colors.textInverse, fontWeight: '600' },
  tripCard: { backgroundColor: Colors.surface, borderRadius: Radius.xl, marginBottom: Spacing.md, ...Shadow.md, overflow: 'hidden' },
  tripCover: { width: '100%', height: 190 },
  tripCoverFallback: { backgroundColor: Colors.primaryFaint, alignItems: 'center', justifyContent: 'center' },
  tierPill: { borderRadius: Radius.full, paddingHorizontal: 10, paddingVertical: 4 },
  tierPillText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  reliabilityBadge: { backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: Radius.full, paddingHorizontal: 10, paddingVertical: 4 },
  reliabilityText: { color: '#fff', fontSize: Typography.sizes.xs, fontWeight: '700' },
  tripBody: { padding: Spacing.md },
  tripTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 4 },
  tripMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  tripMetaDot: { fontSize: Typography.sizes.sm, color: Colors.borderLight },
  tripDesc: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 20, marginBottom: Spacing.md, marginTop: 6 },
  tripFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderTopWidth: 1, borderTopColor: Colors.borderLight, paddingTop: Spacing.sm },
  tripFromLabel: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  tripPrice: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.primary },
  tripNgn: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 1 },
  tripPerPerson: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  tripBookings: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  emptyCard: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.xl, alignItems: 'center', marginTop: Spacing.lg, ...Shadow.sm },
  emptyTitle: { fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.textPrimary, fontFamily: 'Georgia', marginBottom: 6 },
  emptySub: { fontSize: Typography.sizes.md, color: Colors.textMuted, textAlign: 'center', lineHeight: 22 },
  fab: { position: 'absolute', bottom: 24, right: 20, left: 20, backgroundColor: Colors.primary, borderRadius: Radius.full, paddingVertical: 15, alignItems: 'center', ...Shadow.lg },
  fabText: { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: 'bold' },
  modalHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, backgroundColor: Colors.surface },
  modalClose: { color: Colors.error, fontSize: Typography.sizes.md, fontWeight: '600', width: 80 },
  modalTitle: { fontSize: Typography.sizes.md, fontWeight: 'bold', color: Colors.textPrimary, fontFamily: 'Georgia' },
  detailCover: { width: '100%', height: 260 },
  backOverlay: { position: 'absolute', top: 50, left: 16, backgroundColor: 'rgba(0,0,0,0.4)', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  detailTitle: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.sm },
  guideCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, ...Shadow.sm, marginBottom: Spacing.lg },
  guideName: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary, marginBottom: 4 },
  sectionTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginTop: Spacing.lg, marginBottom: Spacing.sm },
  descText: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 24 },
  includeItem: { fontSize: Typography.sizes.md, color: Colors.accent, marginBottom: 6 },
  excludeItem: { fontSize: Typography.sizes.md, color: Colors.textSecondary, marginBottom: 6 },
  stopRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm, gap: Spacing.sm },
  stopNum: { width: 28, height: 28, borderRadius: 14, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  stopNumText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  stopName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  privateBox: { backgroundColor: Colors.accentFaint, borderRadius: Radius.lg, padding: Spacing.md, marginTop: Spacing.md },
  privateTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.accent, marginBottom: 6 },
  lockedBox: { backgroundColor: Colors.surfaceAlt, borderRadius: Radius.xl, padding: Spacing.xl, alignItems: 'center', gap: 8, borderWidth: 2, borderColor: Colors.borderLight, borderStyle: 'dashed' },
  lockedTitle: { fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.textPrimary, fontFamily: 'Georgia', textAlign: 'center' },
  lockedSub: { fontSize: Typography.sizes.md, color: Colors.textMuted, textAlign: 'center', lineHeight: 22 },
  priceBox: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md, ...Shadow.sm, marginTop: Spacing.sm },
  bookBar:     { position: 'absolute', bottom: 0, left: 0, right: 0, padding: Spacing.md, backgroundColor: Colors.surface, borderTopWidth: 1, borderTopColor: Colors.borderLight, flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  soloBtn:     { paddingVertical: 14, paddingHorizontal: 16, borderRadius: Radius.lg, borderWidth: 2, borderColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  soloBtnText: { fontSize: Typography.sizes.sm, fontWeight: '700', color: Colors.primary },
  stepDot: { width: 32, height: 32, borderRadius: 16, backgroundColor: Colors.borderLight, alignItems: 'center', justifyContent: 'center' },
  stepDotActive: { backgroundColor: Colors.primary },
  stepNum: { fontSize: Typography.sizes.sm, fontWeight: 'bold', color: Colors.textMuted },
  stepNumActive: { color: Colors.textInverse },
  stepLine: { width: 40, height: 2, backgroundColor: Colors.borderLight, marginHorizontal: 4 },
  stepLineActive: { backgroundColor: Colors.primary },
  stepTitle: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 4 },
  stepSub: { fontSize: Typography.sizes.md, color: Colors.textMuted, marginBottom: Spacing.lg },
  fieldLabel: { fontSize: 11, fontWeight: '700', color: Colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6, marginTop: Spacing.md },
  textarea: { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg, padding: Spacing.md, fontSize: Typography.sizes.md, color: Colors.textPrimary, minHeight: 90, lineHeight: 22, textAlignVertical: 'top', marginBottom: Spacing.sm },
  inputField: { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: Spacing.md, paddingVertical: 12, fontSize: Typography.sizes.md, color: Colors.textPrimary },
  coverPick: { borderRadius: Radius.xl, overflow: 'hidden', marginBottom: Spacing.md, height: 160 },
  coverImg: { width: '100%', height: 160 },
  coverPlaceholder: { backgroundColor: Colors.surfaceAlt, height: 160, alignItems: 'center', justifyContent: 'center', gap: 8, borderWidth: 2, borderColor: Colors.borderLight, borderStyle: 'dashed', borderRadius: Radius.xl },
  coverPickText: { fontSize: Typography.sizes.md, color: Colors.textSecondary, fontWeight: '600' },
  pricePreview: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.md },
  itiOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1.5, borderColor: Colors.borderLight },
  itiOptionActive: { borderColor: Colors.primary, backgroundColor: Colors.primaryFaint },
});
