import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, TextInput, Alert, Switch, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { WORLD_DATA, getCountryById, getPlaceById } from '../../data/worldData';
import { Button, Card, StarRating, EmptyState, Avatar, RoleBadge, Badge, Divider, Input, SectionHeader } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

// ── SHARED DARK HERO HEADER ───────────────────────────────────────────────────
function DarkHeroPattern({ color = '#C1440E', opacity = 0.04 }) {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {Array.from({ length: 16 }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute', top: -80, bottom: -80,
            left: i * 38 - 10, width: 18,
            backgroundColor: color, opacity,
            transform: [{ rotate: '22deg' }],
          }}
        />
      ))}
    </View>
  );
}

function ScreenHeader({ title, subtitle, right, accent = Colors.primary }) {
  return (
    <View style={heroS.header}>
      <View style={[heroS.accentBar, { backgroundColor: accent }]} />
      <View style={heroS.row}>
        <View style={{ flex: 1 }}>
          <Text style={heroS.title}>{title}</Text>
          {subtitle ? <Text style={heroS.sub}>{subtitle}</Text> : null}
        </View>
        {right}
      </View>
    </View>
  );
}

const heroS = StyleSheet.create({
  header: {
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  accentBar: { position: 'absolute', top: 0, left: 0, right: 0, height: 3 },
  row:   { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 28, fontFamily: 'Georgia', fontWeight: '800', color: Colors.textPrimary, marginTop: Spacing.xs },
  sub:   { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
});

// My Itineraries List
export function MyItinerariesScreen({ navigation }) {
  const { currentUser, getUserItineraries } = useApp();
  const myItineraries = currentUser ? getUserItineraries(currentUser.id) : [];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title="My Itineraries"
        subtitle={`${myItineraries.length} trip${myItineraries.length !== 1 ? 's' : ''} planned`}
        accent={Colors.gold}
        right={
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate('CreateItinerary', {})}
            activeOpacity={0.8}
          >
            <Text style={styles.addBtnText}>+ New</Text>
          </TouchableOpacity>
        }
      />

      <FlatList
        data={myItineraries}
        keyExtractor={i => i.id}
        contentContainerStyle={{ padding: Spacing.md, paddingTop: Spacing.lg, paddingBottom: 110 }}
        ListEmptyComponent={
          <EmptyState
            icon="🗺️"
            title="No itineraries yet"
            subtitle="Start planning your next adventure. Select a country and pick the places you want to visit."
            action="Plan Your First Trip"
            onAction={() => navigation.navigate('CreateItinerary', {})}
          />
        }
        renderItem={({ item: iti }) => (
          <ItineraryCard iti={iti} navigation={navigation} showEdit />
        )}
      />
    </SafeAreaView>
  );
}

// Public Feed
export function FeedScreen({ navigation }) {
  const { getPublicItineraries } = useApp();
  const feed = getPublicItineraries();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title="Journeys"
        subtitle={`${feed.length} itinerar${feed.length !== 1 ? 'ies' : 'y'} from Ajala explorers`}
        accent={Colors.accent}
        right={<Text style={{ fontSize: 24, marginTop: Spacing.xs }}>✈️</Text>}
      />

      <FlatList
        data={feed}
        keyExtractor={i => i.id}
        contentContainerStyle={{ padding: Spacing.md, paddingTop: Spacing.lg, paddingBottom: 110 }}
        ListEmptyComponent={
          <EmptyState
            icon="✈️"
            title="No public itineraries yet"
            subtitle="Be the first to share your travel plans with the community!"
          />
        }
        renderItem={({ item: iti }) => (
          <ItineraryCard iti={iti} navigation={navigation} showCreator />
        )}
      />
    </SafeAreaView>
  );
}

// Shared card component
function ItineraryCard({ iti, navigation, showEdit, showCreator }) {
  const country = getCountryById(iti.countryId);
  const { currentUser, deleteItinerary } = useApp();
  const isPublic = iti.visibility === 'public';

  const handleDelete = () => {
    Alert.alert('Delete Itinerary', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: async () => { await deleteItinerary(iti.id); } },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.itiCard}
      onPress={() => navigation.navigate('ItineraryDetail', { itineraryId: iti.id })}
      activeOpacity={0.85}
    >
      {/* Left accent bar */}
      <View style={[styles.itiAccent, { backgroundColor: isPublic ? Colors.accent : Colors.textMuted }]} />

      <View style={styles.itiCardInner}>
        {/* Top row: title + flag */}
        <View style={styles.itiCardHeader}>
          <View style={{ flex: 1, paddingRight: Spacing.sm }}>
            <Text style={styles.itiTitle} numberOfLines={2}>{iti.title}</Text>
            {showCreator && (
              <Text style={styles.itiCreator}>by {iti.creatorName}</Text>
            )}
            <Text style={styles.itiCountry}>{country?.flag} {country?.name || iti.countryId}</Text>
          </View>
          <View style={styles.itiFlag}>
            <Text style={{ fontSize: 30 }}>{country?.flag || '🌍'}</Text>
          </View>
        </View>

        {/* Description */}
        {iti.description ? (
          <Text style={styles.itiDesc} numberOfLines={2}>{iti.description}</Text>
        ) : null}

        {/* Badges row */}
        <View style={styles.itiBadgeRow}>
          <Badge
            label={isPublic ? '🌐 Public' : '🔒 Private'}
            color={isPublic ? Colors.accentFaint : Colors.surfaceAlt}
            textColor={isPublic ? Colors.accent : Colors.textSecondary}
          />
          {iti.creatorRole === 'tourguide' && (
            <Badge label="🧭 Guide" color={Colors.tourGuideLight} textColor={Colors.tourGuide} />
          )}
        </View>

        {/* Meta strip */}
        <View style={styles.itiMeta}>
          <MetaPill icon="📍" label={`${iti.placeIds.length} places`} />
          <MetaPill icon="⭐" label={iti.avgRating?.toFixed(1) || '—'} />
          <MetaPill icon="💬" label={`${iti.reviewCount || 0} reviews`} />
          <Text style={styles.itiDate}>
            {new Date(iti.createdAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </Text>
        </View>

        {/* Edit actions */}
        {showEdit && currentUser?.id === iti.creatorId && (
          <View style={styles.itiActions}>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => navigation.navigate('CreateItinerary', { editId: iti.id })}
              activeOpacity={0.8}
            >
              <Text style={styles.editBtnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.editBtn, { borderColor: Colors.error }]}
              onPress={handleDelete}
              activeOpacity={0.8}
            >
              <Text style={[styles.editBtnText, { color: Colors.error }]}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

function MetaPill({ icon, label }) {
  return (
    <View style={styles.metaPill}>
      <Text style={styles.metaPillText}>{icon} {label}</Text>
    </View>
  );
}

// Create / Edit Itinerary
export function CreateItineraryScreen({ route, navigation }) {
  const { createItinerary, updateItinerary, getItineraryById } = useApp();
  const editId = route.params?.editId;
  const prefillCountry = route.params?.countryId;
  const existing = editId ? getItineraryById(editId) : null;

  const [title, setTitle] = useState(existing?.title || '');
  const [description, setDescription] = useState(existing?.description || '');
  const [countryId, setCountryId] = useState(existing?.countryId || prefillCountry || '');
  const [selectedPlaces, setSelectedPlaces] = useState(existing?.placeIds || []);
  const [isPublic, setIsPublic] = useState(existing ? existing.visibility === 'public' : true);
  const [inviteEmails, setInviteEmails] = useState(existing?.invitedEmails?.join(', ') || '');
  const [step, setStep] = useState(prefillCountry || existing ? 2 : 1);
  const [loading, setLoading] = useState(false);

  const country = getCountryById(countryId);

  const togglePlace = (placeId) => {
    setSelectedPlaces(prev =>
      prev.includes(placeId) ? prev.filter(id => id !== placeId) : [...prev, placeId]
    );
  };

  const handleSave = async () => {
    if (!title.trim()) { Alert.alert('Title required', 'Give your itinerary a name'); return; }
    if (!countryId) { Alert.alert('Country required', 'Select a destination country'); return; }
    if (selectedPlaces.length === 0) { Alert.alert('Places required', 'Select at least one place to visit'); return; }

    setLoading(true);
    try {
      const emails = inviteEmails.split(',').map(e => e.trim()).filter(Boolean);
      if (existing) {
        await updateItinerary(editId, {
          title, description, countryId, placeIds: selectedPlaces,
          visibility: isPublic ? 'public' : 'private',
          invitedEmails: emails,
        });
        Alert.alert('Updated!', 'Your itinerary has been updated.');
      } else {
        await createItinerary({
          title, description, countryId, placeIds: selectedPlaces,
          visibility: isPublic ? 'public' : 'private',
          invitedEmails: emails,
        });
        Alert.alert('🎉 Itinerary Created!', 'Your travel plan is ready. Share it with the community or invite friends to review!');
      }
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.createHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.createTitle}>{existing ? 'Edit Itinerary' : 'Plan a Trip'}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Step indicator */}
      <View style={styles.steps}>
        {[1, 2, 3].map(s => (
          <View key={s} style={styles.stepRow}>
            <TouchableOpacity
              style={[styles.stepDot, step >= s && styles.stepDotActive]}
              onPress={() => s < step && setStep(s)}
            >
              <Text style={[styles.stepNum, step >= s && styles.stepNumActive]}>{s}</Text>
            </TouchableOpacity>
            {s < 3 && <View style={[styles.stepLine, step > s && styles.stepLineActive]} />}
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 120 }} keyboardShouldPersistTaps="handled">
        {step === 1 && (
          <View>
            <Text style={styles.stepTitle}>Choose Destination</Text>
            <Text style={styles.stepSubtitle}>Which country are you planning to visit?</Text>
            <FlatList
              data={WORLD_DATA}
              keyExtractor={c => c.id}
              scrollEnabled={false}
              renderItem={({ item: c }) => (
                <TouchableOpacity
                  style={[styles.countryOption, countryId === c.id && styles.countryOptionActive]}
                  onPress={() => { setCountryId(c.id); setSelectedPlaces([]); setStep(2); }}
                  activeOpacity={0.85}
                >
                  <Text style={{ fontSize: 26 }}>{c.flag}</Text>
                  <View style={{ flex: 1, marginLeft: Spacing.md }}>
                    <Text style={[styles.countryOptionName, countryId === c.id && { color: Colors.primary }]}>{c.name}</Text>
                    <Text style={styles.countryOptionMeta}>{c.continent} · {c.states.reduce((s, st) => s + st.places.length, 0)} places</Text>
                  </View>
                  {countryId === c.id && <Text style={{ color: Colors.primary, fontSize: 20 }}>✓</Text>}
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {step === 2 && country && (
          <View>
            <Text style={styles.stepTitle}>Select Places</Text>
            <Text style={styles.stepSubtitle}>Pick every place you plan to visit in {country.flag} {country.name}</Text>
            <Text style={{ color: Colors.primary, fontWeight: '600', marginBottom: Spacing.md }}>{selectedPlaces.length} places selected</Text>
            {country.states.map(state => (
              <View key={state.id} style={{ marginBottom: Spacing.lg }}>
                <Text style={styles.stateName}>{state.name}</Text>
                {state.places.map(place => (
                  <TouchableOpacity
                    key={place.id}
                    style={[styles.placeOption, selectedPlaces.includes(place.id) && styles.placeOptionActive]}
                    onPress={() => togglePlace(place.id)}
                    activeOpacity={0.8}
                  >
                    <View style={[styles.checkbox, selectedPlaces.includes(place.id) && styles.checkboxActive]}>
                      {selectedPlaces.includes(place.id) && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.placeOptionName}>{place.name}</Text>
                      <Text style={styles.placeOptionDesc} numberOfLines={1}>{place.description}</Text>
                    </View>
                    <Badge label={place.category} />
                  </TouchableOpacity>
                ))}
              </View>
            ))}
            <Button
              title={`Continue with ${selectedPlaces.length} places →`}
              onPress={() => selectedPlaces.length > 0 ? setStep(3) : Alert.alert('Select at least one place')}
              disabled={selectedPlaces.length === 0}
              style={{ marginTop: Spacing.md }}
            />
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.stepTitle}>Itinerary Details</Text>
            <Text style={styles.stepSubtitle}>Name your trip and set its visibility</Text>

            <Input
              label="Itinerary Title"
              value={title}
              onChangeText={setTitle}
              placeholder="e.g. 7 Days in Morocco"
            />
            <Input
              label="Description (optional)"
              value={description}
              onChangeText={setDescription}
              placeholder="Tell the story of this trip..."
              multiline
              numberOfLines={3}
              style={{ height: 90, textAlignVertical: 'top' }}
            />

            {/* Visibility toggle */}
            <View style={styles.visibilityCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.visibilityLabel}>{isPublic ? '🌐 Public Itinerary' : '🔒 Private Itinerary'}</Text>
                <Text style={styles.visibilityDesc}>
                  {isPublic
                    ? 'Anyone on Ajala can see this and leave reviews. This builds your tour guide reputation.'
                    : 'Only invited people can see and review this itinerary.'}
                </Text>
              </View>
              <Switch
                value={isPublic}
                onValueChange={setIsPublic}
                trackColor={{ true: Colors.primary, false: Colors.border }}
                thumbColor={Colors.surface}
              />
            </View>

            {!isPublic && (
              <Input
                label="Invite by Email (comma separated)"
                value={inviteEmails}
                onChangeText={setInviteEmails}
                placeholder="friend@email.com, guide@travel.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}

            {/* Summary */}
            <View style={styles.summary}>
              <Text style={styles.summaryTitle}>Trip Summary</Text>
              <Text style={styles.summaryItem}>🌍 {getCountryById(countryId)?.name}</Text>
              <Text style={styles.summaryItem}>📍 {selectedPlaces.length} places</Text>
              <Text style={styles.summaryItem}>{isPublic ? '🌐 Public' : '🔒 Private'}</Text>
            </View>

            <Button title={existing ? 'Update Itinerary' : 'Create Itinerary 🎉'} onPress={handleSave} loading={loading} size="lg" style={{ marginTop: Spacing.md }} />
          </View>
        )}
      </ScrollView>

      {step > 1 && (
        <TouchableOpacity style={styles.prevBtn} onPress={() => setStep(s => s - 1)}>
          <Text style={styles.prevBtnText}>← Previous Step</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

// Itinerary Detail
export function ItineraryDetailScreen({ route, navigation }) {
  const { itineraryId } = route.params;
  const { getItineraryById, getItineraryReviews, canAccess, currentUser, getUserById } = useApp();
  const iti = getItineraryById(itineraryId);
  const reviews = getItineraryReviews(itineraryId);
  const accessible = canAccess(iti);
  const country = iti ? getCountryById(iti.countryId) : null;
  const creator = iti ? getUserById(iti.creatorId) : null;

  if (!iti) return (
    <SafeAreaView style={styles.safe}>
      <EmptyState icon="❓" title="Itinerary not found" />
    </SafeAreaView>
  );

  if (!accessible) return (
    <SafeAreaView style={styles.safe}>
      <TouchableOpacity style={{ padding: Spacing.lg }} onPress={() => navigation.goBack()}>
        <Text style={{ color: Colors.primary }}>← Back</Text>
      </TouchableOpacity>
      <EmptyState icon="🔒" title="Private Itinerary" subtitle="You need an invitation to view this itinerary." />
    </SafeAreaView>
  );

  const avgRating = reviews.length > 0
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 0;

  const isOwner = currentUser?.id === iti.creatorId;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Hero */}
        <View style={styles.itiHero}>
          <DarkHeroPattern color="#D4921C" opacity={0.05} />
          <TouchableOpacity style={styles.backBtn2} onPress={() => navigation.goBack()}>
            <View style={styles.backBtnInner2}>
              <Text style={styles.backText2}>← Back</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.itiHeroFlag}>{country?.flag || '🌍'}</Text>
          <Text style={styles.itiHeroTitle}>{iti.title}</Text>
          <Text style={styles.itiHeroCountry}>{country?.name}</Text>
          {avgRating > 0 && (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <StarRating rating={avgRating} size={16} />
              <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>{avgRating.toFixed(1)}</Text>
              <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>({reviews.length} reviews)</Text>
            </View>
          )}
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge label={iti.visibility === 'public' ? '🌐 Public' : '🔒 Private'} color="rgba(255,255,255,0.18)" textColor="#fff" />
            <Badge label={`📍 ${iti.placeIds.length} places`} color="rgba(255,255,255,0.18)" textColor="#fff" />
            {iti.creatorRole === 'tourguide' && <Badge label="🧭 Tour Guide" color="rgba(255,255,255,0.18)" textColor="#fff" />}
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          {/* Creator */}
          <TouchableOpacity
            style={styles.creatorCard}
            onPress={() => creator && navigation.navigate('UserProfile', { userId: iti.creatorId })}
            activeOpacity={0.85}
          >
            <Avatar name={iti.creatorName} size={48} />
            <View style={{ flex: 1, marginLeft: Spacing.md }}>
              <Text style={styles.creatorName}>{iti.creatorName}</Text>
              <Text style={styles.creatorLabel}>Itinerary host</Text>
              {creator && <RoleBadge role={creator.role} />}
            </View>
            {creator?.dmOpen && !isOwner && (
              <TouchableOpacity
                style={styles.msgBtn}
                onPress={() => navigation.navigate('Messages', { toUserId: iti.creatorId })}
              >
                <Text style={styles.msgBtnText}>💬 Message</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>

          {iti.description ? <Text style={styles.itiDetailDesc}>{iti.description}</Text> : null}

          {/* Places */}
          <SectionHeader title={`Places (${iti.placeIds.length})`} subtitle="All stops on this journey" />
          {iti.placeIds.map(pid => {
            const place = getPlaceById(pid);
            if (!place) return null;
            return (
              <TouchableOpacity
                key={pid}
                style={styles.placeRow}
                onPress={() => navigation.navigate('PlaceDetail', { placeId: pid })}
                activeOpacity={0.8}
              >
                <Text style={styles.placeRowIcon}>{categoryIcon(place.category)}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.placeRowName}>{place.name}</Text>
                  <Text style={styles.placeRowMeta}>{place.stateName} · {place.category}</Text>
                </View>
                <Text style={{ color: Colors.primary }}>→</Text>
              </TouchableOpacity>
            );
          })}

          <Divider />

          {/* Reviews */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.md }}>
            <SectionHeader title={`Reviews (${reviews.length})`} subtitle={iti.visibility === 'public' ? 'Community feedback' : 'Private reviews'} />
            {currentUser && !isOwner && (
              <TouchableOpacity onPress={() => navigation.navigate('AddReview', { itineraryId })}>
                <Text style={{ color: Colors.primary, fontWeight: '600' }}>+ Review</Text>
              </TouchableOpacity>
            )}
          </View>

          {reviews.length === 0 ? (
            <EmptyState
              icon="✍️"
              title="No reviews yet"
              subtitle={iti.visibility === 'public'
                ? 'Be the first to review this itinerary!'
                : 'Invited reviewers will appear here'}
              action={currentUser && !isOwner ? 'Write Review' : undefined}
              onAction={() => navigation.navigate('AddReview', { itineraryId })}
            />
          ) : (
            reviews.map(rev => (
              <View key={rev.id} style={styles.reviewCard}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm }}>
                  <Avatar name={rev.authorName} size={36} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.revAuthor}>{rev.authorName}</Text>
                    <Text style={styles.revDate}>{new Date(rev.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
                  </View>
                  <StarRating rating={rev.rating} size={14} />
                </View>
                <Text style={styles.revComment}>{rev.comment}</Text>
                {rev.photos && rev.photos.length > 0 && (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }} contentContainerStyle={{ gap: 6 }}>
                    {rev.photos.map((uri, i) => (
                      <Image key={i} source={{ uri }} style={{ width: 80, height: 80, borderRadius: 8 }} />
                    ))}
                  </ScrollView>
                )}
                {rev.placeId && (
                  <Badge label={`📍 ${getPlaceById(rev.placeId)?.name || 'Place'}`} style={{ marginTop: 6, alignSelf: 'flex-start' }} />
                )}
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <View style={styles.floatBar}>
        <Button
          title="🗺️ Map"
          onPress={() => navigation.navigate('ItineraryMap', { itineraryId })}
          variant="secondary"
          style={{ flex: 1 }}
        />
        {!isOwner && currentUser && (
          <Button
            title="📝 Review"
            onPress={() => navigation.navigate('AddReview', { itineraryId })}
            style={{ flex: 1 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

function categoryIcon(cat) {
  const map = {
    Nature: '🌿', Culture: '🏛️', History: '📜', Beach: '🏖️',
    Wildlife: '🦁', Adventure: '⛰️', Food: '🍽️', Art: '🎨',
    Shopping: '🛍️', Landmark: '📍', Architecture: '🏗️', Experience: '✨',
    Spiritual: '🕌', 'Food & Wine': '🍷',
  };
  return map[cat] || '📌';
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  heroBadge: {
    width: 46, height: 46, borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  addBtn: {
    backgroundColor: Colors.gold, paddingHorizontal: 16, paddingVertical: 8,
    borderRadius: Radius.full, ...Shadow.sm,
  },
  addBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: Typography.sizes.sm },

  // Itinerary card — premium redesign
  itiCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    overflow: 'hidden',
    ...Shadow.md,
  },
  itiAccent: { width: 4, borderTopLeftRadius: Radius.lg, borderBottomLeftRadius: Radius.lg },
  itiCardInner: { flex: 1, padding: Spacing.md },
  itiCardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: Spacing.xs },
  itiFlag: {
    width: 58, height: 58, borderRadius: 29,
    backgroundColor: Colors.primaryFaint,
    borderWidth: 2, borderColor: Colors.borderLight,
    alignItems: 'center', justifyContent: 'center',
    ...Shadow.sm,
  },
  itiTitle:   { fontSize: 16, fontFamily: 'Georgia', fontWeight: '700', color: Colors.textPrimary, lineHeight: 22 },
  itiCreator: { fontSize: 12, color: Colors.primary, fontWeight: '600', marginTop: 3 },
  itiCountry: { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
  itiDesc:    { fontSize: 13, color: Colors.textSecondary, lineHeight: 19, marginBottom: Spacing.sm },
  itiBadgeRow:{ flexDirection: 'row', gap: 6, marginBottom: Spacing.sm, flexWrap: 'wrap' },
  itiMeta: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 6,
    paddingTop: Spacing.sm,
    borderTopWidth: 1, borderTopColor: Colors.borderLight,
    alignItems: 'center',
  },
  metaPill: {
    backgroundColor: Colors.background,
    borderRadius: Radius.full,
    paddingHorizontal: 8, paddingVertical: 3,
  },
  metaPillText: { fontSize: 11, color: Colors.textSecondary, fontWeight: '500' },
  itiDate: { fontSize: 11, color: Colors.textMuted, marginLeft: 'auto' },
  itiActions: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.sm },
  editBtn: { borderWidth: 1.5, borderColor: Colors.primary, paddingHorizontal: 14, paddingVertical: 6, borderRadius: Radius.full },
  editBtnText: { color: Colors.primary, fontSize: Typography.sizes.sm, fontWeight: '600' },

  // Create screen
  createHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },
  backText: { fontSize: 20, color: Colors.textSecondary },
  createTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },

  steps: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Spacing.md },
  stepRow: { flexDirection: 'row', alignItems: 'center' },
  stepDot: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: Colors.borderLight, alignItems: 'center', justifyContent: 'center',
  },
  stepDotActive: { backgroundColor: Colors.primary },
  stepNum: { fontSize: Typography.sizes.sm, fontWeight: 'bold', color: Colors.textMuted },
  stepNumActive: { color: Colors.textInverse },
  stepLine: { width: 40, height: 2, backgroundColor: Colors.borderLight, marginHorizontal: 4 },
  stepLineActive: { backgroundColor: Colors.primary },

  stepTitle: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 4 },
  stepSubtitle: { fontSize: Typography.sizes.md, color: Colors.textMuted, marginBottom: Spacing.lg },

  countryOption: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1.5, borderColor: Colors.borderLight,
  },
  countryOptionActive: { borderColor: Colors.primary, backgroundColor: Colors.primaryFaint },
  countryOptionName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  countryOptionMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  stateName: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.sm },
  placeOption: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1.5, borderColor: Colors.borderLight, gap: Spacing.sm,
  },
  placeOptionActive: { borderColor: Colors.primary, backgroundColor: Colors.primaryFaint },
  checkbox: {
    width: 22, height: 22, borderRadius: 6,
    borderWidth: 2, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center',
  },
  checkboxActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  checkmark: { color: Colors.textInverse, fontSize: 14, fontWeight: 'bold' },
  placeOptionName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  placeOptionDesc: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  visibilityCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, borderWidth: 1.5, borderColor: Colors.borderLight,
    marginBottom: Spacing.md, gap: Spacing.md,
  },
  visibilityLabel: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary, marginBottom: 4 },
  visibilityDesc: { fontSize: Typography.sizes.sm, color: Colors.textMuted, lineHeight: 19 },

  summary: {
    backgroundColor: Colors.primaryFaint, borderRadius: Radius.lg,
    padding: Spacing.md, gap: Spacing.sm,
  },
  summaryTitle: { fontSize: Typography.sizes.md, fontWeight: 'bold', color: Colors.primary, marginBottom: 4 },
  summaryItem: { fontSize: Typography.sizes.md, color: Colors.textPrimary },

  prevBtn: {
    position: 'absolute', bottom: 24, left: Spacing.md,
    paddingVertical: 10, paddingHorizontal: Spacing.md,
  },
  prevBtnText: { color: Colors.textMuted, fontSize: Typography.sizes.md },

  // Itinerary Detail hero
  itiHero: {
    backgroundColor: Colors.darkWarm,
    padding: Spacing.xl, paddingTop: Spacing.md,
    alignItems: 'center', overflow: 'hidden',
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    ...Shadow.md,
  },
  backBtn2: { alignSelf: 'flex-start', marginBottom: Spacing.md },
  backBtnInner2: {
    paddingHorizontal: 14, paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.full,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.18)',
  },
  backText2: { color: '#FFFFFF', fontSize: 13, fontWeight: '500' },
  itiHeroFlag:    { fontSize: 60, marginBottom: Spacing.sm },
  itiHeroTitle:   { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' },
  itiHeroCountry: { fontSize: Typography.sizes.md, color: 'rgba(255,255,255,0.65)', marginTop: 4 },

  creatorCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.lg, ...Shadow.sm,
  },
  creatorName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  creatorLabel: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginBottom: 4 },
  msgBtn: { backgroundColor: Colors.primaryFaint, paddingHorizontal: 12, paddingVertical: 8, borderRadius: Radius.full },
  msgBtnText: { color: Colors.primary, fontWeight: '600', fontSize: Typography.sizes.sm },

  itiDetailDesc: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 24, marginBottom: Spacing.lg },

  placeRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm, gap: Spacing.sm,
  },
  placeRowIcon: { fontSize: 24 },
  placeRowName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  placeRowMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted },

  reviewCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.md, ...Shadow.sm,
  },
  revAuthor: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  revDate: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 2 },
  revComment: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 22, marginTop: Spacing.sm },

  floatBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: Spacing.md, backgroundColor: Colors.surface,
    borderTopWidth: 1, borderTopColor: Colors.borderLight,
    flexDirection: 'row', gap: Spacing.sm,
  },
});
