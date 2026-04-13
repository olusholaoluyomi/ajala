import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Alert, Modal, TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { getPlaceById } from '../../data/worldData';
import { Button, Avatar, EmptyState, Badge } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

// Activity status options
const ACTIVITY_STATUS = {
  PENDING:    { key: 'pending',    label: 'Upcoming',         color: Colors.textMuted,    icon: '○' },
  DONE:       { key: 'done',       label: 'Completed',        color: Colors.accent,       icon: '✅' },
  USER_SKIP:  { key: 'user_skip',  label: 'I sat this out',   color: Colors.warning,      icon: '⏭️' },
  GUIDE_MISS: { key: 'guide_miss', label: 'Guide skipped it', color: Colors.error,        icon: '❌' },
};

function completionScore(activities) {
  if (!activities || activities.length === 0) return 100;
  // Exclude user-skipped from total (their choice)
  const relevant = activities.filter(a => a.status !== ACTIVITY_STATUS.USER_SKIP.key);
  if (relevant.length === 0) return 100;
  const done = relevant.filter(a => a.status === ACTIVITY_STATUS.DONE.key).length;
  return Math.round((done / relevant.length) * 100);
}

// ── LIVE TRIP SCREEN ─────────────────────────────────────────────────────────
export function LiveTripScreen({ route, navigation }) {
  const { tripId } = route.params;
  const { trips, currentUser, startTrip, updateActivity, endTrip, getTripBookings } = useApp();
  const trip = (trips || []).find(t => t.id === tripId);
  const [statusModal, setStatusModal] = useState(null); // { activityIdx }
  const [endingTrip, setEndingTrip] = useState(false);

  if (!trip) return <SafeAreaView style={s.safe}><EmptyState icon="❓" title="Trip not found" /></SafeAreaView>;

  const isGuide = currentUser?.id === trip.guideId;
  const myBooking = (getTripBookings ? getTripBookings(tripId) : [])
    .find(b => b.userId === currentUser?.id);
  const canInteract = isGuide || !!myBooking;

  const activities = trip.activities || trip.placeIds?.map((pid, i) => ({
    id: `act_${pid}`,
    placeId: pid,
    label: getPlaceById(pid)?.name || `Stop ${i + 1}`,
    status: 'pending',
  })) || [];

  const score = completionScore(activities);
  const totalDone = activities.filter(a => a.status === 'done').length;
  const totalActivities = activities.length;
  const isLive = trip.status === 'live';
  const isEnded = trip.status === 'ended';

  const handleStart = () => {
    Alert.alert(
      '▶️ Start Trip?',
      'This will notify all booked travellers that the trip has begun.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Start Trip', onPress: async () => {
          await startTrip(tripId);
        }}
      ]
    );
  };

  const handleUpdateStatus = async (activityIdx, status) => {
    setStatusModal(null);
    await updateActivity(tripId, activityIdx, status);
  };

  const handleEndTrip = async () => {
    Alert.alert(
      '🏁 End This Trip?',
      `Trip completion: ${score}%. This will be recorded in your guide score and all bookers will be prompted to leave reviews.`,
      [
        { text: 'Not Yet', style: 'cancel' },
        { text: 'End Trip', style: 'destructive', onPress: async () => {
          setEndingTrip(true);
          try {
            await endTrip(tripId, score);
            Alert.alert(
              '🎉 Trip Completed!',
              `Final score: ${score}%. Bookers have been notified to leave reviews.`,
              [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
          } catch (e) {
            Alert.alert('Error', e.message);
          } finally {
            setEndingTrip(false);
          }
        }}
      ]
    );
  };

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      {/* Status selection modal */}
      {statusModal !== null && (
        <Modal transparent animationType="fade" visible onRequestClose={() => setStatusModal(null)}>
          <TouchableOpacity style={s.modalOverlay} activeOpacity={1} onPress={() => setStatusModal(null)}>
            <View style={s.modalCard}>
              <Text style={s.modalTitle}>Mark this activity as:</Text>
              {Object.values(ACTIVITY_STATUS).filter(st => st.key !== 'pending').map(st => (
                <TouchableOpacity
                  key={st.key}
                  style={s.modalOption}
                  onPress={() => handleUpdateStatus(statusModal, st.key)}
                  activeOpacity={0.8}
                >
                  <Text style={s.modalOptionIcon}>{st.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={[s.modalOptionLabel, { color: st.color }]}>{st.label}</Text>
                    {st.key === 'guide_miss' && (
                      <Text style={s.modalOptionSub}>This will affect the guide's completion score</Text>
                    )}
                    {st.key === 'user_skip' && (
                      <Text style={s.modalOptionSub}>Won't count against the guide's score</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={s.modalCancel} onPress={() => setStatusModal(null)}>
                <Text style={{ color: Colors.textMuted, fontWeight: '600' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={s.headerTitle} numberOfLines={1}>{trip.title}</Text>
          <View style={[s.statusPill, {
            backgroundColor: isLive ? Colors.accent + '20' : isEnded ? Colors.textMuted + '15' : Colors.warning + '20'
          }]}>
            <Text style={[s.statusPillText, {
              color: isLive ? Colors.accent : isEnded ? Colors.textMuted : Colors.warning
            }]}>
              {isLive ? '🔴 LIVE' : isEnded ? '✅ ENDED' : '⏳ Not started'}
            </Text>
          </View>
        </View>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* Score ring */}
        <View style={s.scoreSection}>
          <View style={s.scoreRing}>
            <Text style={s.scoreNum}>{score}%</Text>
            <Text style={s.scoreLabel}>completion</Text>
          </View>
          <View style={s.scoreDetails}>
            <Text style={s.scoreTitle}>Trip Progress</Text>
            <Text style={s.scoreStat}>✅ {activities.filter(a => a.status === 'done').length} completed</Text>
            <Text style={s.scoreStat}>⏭️ {activities.filter(a => a.status === 'user_skip').length} user-skipped</Text>
            <Text style={s.scoreStat}>❌ {activities.filter(a => a.status === 'guide_miss').length} guide-skipped</Text>
            <Text style={s.scoreStat}>○  {activities.filter(a => a.status === 'pending').length} remaining</Text>
          </View>
        </View>

        {/* Progress bar */}
        <View style={s.progressBarContainer}>
          <View style={[s.progressBarFill, { width: `${score}%`, backgroundColor: score >= 80 ? Colors.accent : score >= 60 ? Colors.warning : Colors.error }]} />
        </View>
        <Text style={s.progressNote}>
          {score >= 90 ? '🌟 Excellent — you\'re delivering a great trip!' :
           score >= 70 ? '👍 On track — keep it up!' :
           score < 50 && (isLive || isEnded) ? '⚠️ Low completion — bookers will be notified' : ''}
        </Text>

        {/* Guide actions */}
        {isGuide && !isLive && !isEnded && (
          <View style={{ padding: Spacing.md }}>
            <View style={s.infoBox}>
              <Text style={s.infoBoxTitle}>Ready to go?</Text>
              <Text style={s.infoBoxText}>
                Starting the trip notifies all {(getTripBookings ? getTripBookings(tripId) : []).length} booked travellers
                and opens the live checklist for everyone.
              </Text>
            </View>
            <Button title="▶️ Start Trip Now" onPress={handleStart} size="lg" style={{ marginTop: Spacing.sm }} />
          </View>
        )}

        {/* Activities checklist */}
        <View style={{ padding: Spacing.md }}>
          <Text style={s.sectionTitle}>Activities ({totalDone}/{totalActivities})</Text>
          {activities.length === 0 && (
            <EmptyState icon="📋" title="No activities" subtitle="Link an itinerary to your trip to see activities here." />
          )}
          {activities.map((activity, idx) => {
            const st = ACTIVITY_STATUS[activity.status?.toUpperCase()] || ACTIVITY_STATUS.PENDING;
            const place = getPlaceById(activity.placeId);

            return (
              <TouchableOpacity
                key={activity.id || idx}
                style={[s.activityCard, activity.status === 'done' && s.activityDone, activity.status === 'guide_miss' && s.activityMiss]}
                onPress={() => canInteract && (isLive || isGuide) && setStatusModal(idx)}
                activeOpacity={canInteract ? 0.8 : 1}
              >
                <View style={[s.activityStatusIcon, { backgroundColor: st.color + '20' }]}>
                  <Text style={{ fontSize: 22 }}>{st.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[s.activityName, activity.status === 'done' && { textDecorationLine: 'line-through', color: Colors.textMuted }]}>
                    {activity.label}
                  </Text>
                  {place && (
                    <Text style={s.activityMeta}>{place.category} · {place.stateName}</Text>
                  )}
                  <Text style={[s.activityStatusLabel, { color: st.color }]}>{st.label}</Text>
                </View>
                {(isLive || isGuide) && canInteract && (
                  <Text style={s.activityChevron}>›</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bookers list (guide only) */}
        {isGuide && (
          <View style={{ paddingHorizontal: Spacing.md }}>
            <Text style={s.sectionTitle}>Bookers ({(getTripBookings ? getTripBookings(tripId) : []).length})</Text>
            {(getTripBookings ? getTripBookings(tripId) : []).map(booking => (
              <View key={booking.id} style={s.bookerRow}>
                <Avatar name={booking.userName || 'Traveller'} size={36} />
                <View style={{ flex: 1, marginLeft: Spacing.sm }}>
                  <Text style={s.bookerName}>{booking.userName || 'Traveller'}</Text>
                  <Text style={s.bookerRef}>{booking.reference}</Text>
                </View>
                <Badge label="✅ Paid" color={Colors.accentFaint} textColor={Colors.accent} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Bottom actions */}
      {isGuide && isLive && (
        <View style={s.bottomBar}>
          <Button
            title="🏁 End Trip"
            onPress={handleEndTrip}
            loading={endingTrip}
            variant="danger"
            style={{ flex: 1 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

// ── MY BOOKINGS SCREEN ───────────────────────────────────────────────────────
export function MyBookingsScreen({ navigation }) {
  const { currentUser, bookings, trips } = useApp();
  const myBookings = (bookings || []).filter(b => b.userId === currentUser?.id);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>My Bookings</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 80 }}>
        {myBookings.length === 0 ? (
          <EmptyState
            icon="🎒"
            title="No bookings yet"
            subtitle="Browse guided trips and book your first adventure!"
            action="Browse Trips"
            onAction={() => navigation.navigate('Trips')}
          />
        ) : (
          myBookings.map(booking => {
            const trip = (trips || []).find(t => t.id === booking.tripId);
            if (!trip) return null;
            const isLive = trip.status === 'live';
            const isEnded = trip.status === 'ended';
            return (
              <TouchableOpacity
                key={booking.id}
                style={s.bookingCard}
                onPress={() => navigation.navigate('LiveTrip', { tripId: trip.id })}
                activeOpacity={0.85}
              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <Text style={s.bookingTitle}>{trip.title}</Text>
                    {isLive && <Badge label="🔴 LIVE" color={Colors.accent + '20'} textColor={Colors.accent} />}
                    {isEnded && <Badge label="✅ Done" color={Colors.accentFaint} textColor={Colors.accent} />}
                  </View>
                  <Text style={s.bookingGuide}>Guide: {trip.guideName}</Text>
                  <Text style={s.bookingRef}>Ref: {booking.reference}</Text>
                  <Text style={s.bookingAmount}>Paid: {booking.currency === 'NGN' ? '₦' : '$'}{booking.amount?.toLocaleString()}</Text>
                </View>
                <Text style={{ color: Colors.primary, fontSize: 20 }}>→</Text>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── GUIDE EARNINGS SCREEN ────────────────────────────────────────────────────
export function GuideEarningsScreen({ navigation }) {
  const { currentUser, bookings, trips } = useApp();
  const myTrips = (trips || []).filter(t => t.guideId === currentUser?.id);
  const myBookings = (bookings || []).filter(b => myTrips.some(t => t.id === b.tripId));

  const totalEarned = myBookings.reduce((sum, b) => sum + (b.guideAmount || 0), 0);
  const pendingPayout = myBookings.filter(b => !b.disbursed).reduce((sum, b) => sum + (b.guideAmount || 0), 0);
  const disbursed = myBookings.filter(b => b.disbursed).reduce((sum, b) => sum + (b.guideAmount || 0), 0);
  const currency = currentUser?.currency === 'USD' ? '$' : '₦';

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Earnings</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 80 }}>
        {/* Summary cards */}
        <View style={s.earningsGrid}>
          <EarningsCard label="Total Earned" value={`${currency}${totalEarned.toLocaleString()}`} icon="💰" color={Colors.accent} />
          <EarningsCard label="Pending Payout" value={`${currency}${pendingPayout.toLocaleString()}`} icon="⏳" color={Colors.warning} />
        </View>
        <EarningsCard label="Total Disbursed" value={`${currency}${disbursed.toLocaleString()}`} icon="✅ Sent to your account" color={Colors.primary} wide />

        <View style={s.payoutInfoBox}>
          <Text style={s.payoutInfoTitle}>💳 Payout Schedule</Text>
          <Text style={s.payoutInfoText}>
            Payouts are processed every 2 weeks to your registered bank account.
            Ensure your account details are up to date in your profile.
          </Text>
          <TouchableOpacity
            style={s.payoutInfoBtn}
            onPress={() => navigation.navigate('BankAccount')}
            activeOpacity={0.8}
          >
            <Text style={s.payoutInfoBtnText}>Update Bank Account →</Text>
          </TouchableOpacity>
        </View>

        {/* Per-booking breakdown */}
        <Text style={s.sectionTitle}>Booking History</Text>
        {myBookings.length === 0 ? (
          <EmptyState icon="💳" title="No bookings yet" subtitle="Publish trips to start earning" />
        ) : (
          myBookings.map(booking => {
            const trip = myTrips.find(t => t.id === booking.tripId);
            return (
              <View key={booking.id} style={s.bookingCard}>
                <View style={{ flex: 1 }}>
                  <Text style={s.bookingTitle}>{trip?.title || 'Trip'}</Text>
                  <Text style={s.bookingRef}>{booking.reference}</Text>
                  <Text style={s.bookingDate}>{new Date(booking.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={s.earningAmount}>{currency}{booking.guideAmount?.toLocaleString()}</Text>
                  <Badge
                    label={booking.disbursed ? '✅ Paid out' : '⏳ Pending'}
                    color={booking.disbursed ? Colors.accentFaint : Colors.warning + '20'}
                    textColor={booking.disbursed ? Colors.accent : Colors.warning}
                    style={{ marginTop: 4 }}
                  />
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function EarningsCard({ label, value, icon, color, wide }) {
  return (
    <View style={[s.earningsCard, wide && { marginHorizontal: 0 }]}>
      <Text style={{ fontSize: 28, marginBottom: 8 }}>{icon}</Text>
      <Text style={[s.earningsValue, { color }]}>{value}</Text>
      <Text style={s.earningsLabel}>{label}</Text>
    </View>
  );
}

// ── BANK ACCOUNT SCREEN ───────────────────────────────────────────────────────
export function BankAccountScreen({ navigation }) {
  const { currentUser, updateUser } = useApp();
  const [bankName, setBankName] = useState(currentUser?.bankName || '');
  const [accountNumber, setAccountNumber] = useState(currentUser?.accountNumber || '');
  const [accountName, setAccountName] = useState(currentUser?.accountName || '');
  const [loading, setLoading] = useState(false);
  const { NIGERIAN_BANKS } = require('../../utils/paystack');
  const [showBankPicker, setShowBankPicker] = useState(false);

  const handleSave = async () => {
    if (!bankName) { Alert.alert('Select a bank'); return; }
    if (accountNumber.length < 10) { Alert.alert('Enter a valid 10-digit account number'); return; }
    if (!accountName.trim()) { Alert.alert('Enter the account name'); return; }

    setLoading(true);
    try {
      await updateUser({ bankName, accountNumber, accountName });
      Alert.alert('✅ Bank details saved', 'Your payout account has been updated.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Bank Account</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md }} keyboardShouldPersistTaps="handled">
        <View style={s.bankInfoBox}>
          <Text style={s.bankInfoText}>
            💳 This account will receive your guide earnings every 2 weeks.
            Make sure the details are exactly correct.
          </Text>
        </View>

        {/* Bank picker */}
        <Text style={s.fieldLabel}>Bank Name</Text>
        <TouchableOpacity
          style={s.bankPickerBtn}
          onPress={() => setShowBankPicker(true)}
          activeOpacity={0.8}
        >
          <Text style={[s.bankPickerBtnText, !bankName && { color: Colors.textMuted }]}>
            {bankName || 'Select your bank'}
          </Text>
          <Text style={{ color: Colors.textMuted }}>▼</Text>
        </TouchableOpacity>

        {showBankPicker && (
          <Modal animationType="slide" visible onRequestClose={() => setShowBankPicker(false)}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight }}>
                <TouchableOpacity onPress={() => setShowBankPicker(false)}>
                  <Text style={{ color: Colors.primary, fontSize: Typography.sizes.md }}>✕ Close</Text>
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontFamily: 'Georgia', fontWeight: 'bold', fontSize: Typography.sizes.lg }}>Select Bank</Text>
                <View style={{ width: 60 }} />
              </View>
              <ScrollView>
                {NIGERIAN_BANKS.map(bank => (
                  <TouchableOpacity
                    key={bank.code}
                    style={{ padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => { setBankName(bank.name); setShowBankPicker(false); }}
                    activeOpacity={0.7}
                  >
                    <Text style={{ flex: 1, fontSize: Typography.sizes.md, color: Colors.textPrimary }}>{bank.name}</Text>
                    {bankName === bank.name && <Text style={{ color: Colors.primary, fontSize: 18 }}>✓</Text>}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </SafeAreaView>
          </Modal>
        )}

        <Text style={[s.fieldLabel, { marginTop: Spacing.md }]}>Account Number</Text>
        <TextInput
          style={s.inputField}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder="0123456789"
          placeholderTextColor={Colors.textMuted}
          keyboardType="number-pad"
          maxLength={10}
        />

        <Text style={[s.fieldLabel, { marginTop: Spacing.sm }]}>Account Name</Text>
        <TextInput
          style={s.inputField}
          value={accountName}
          onChangeText={setAccountName}
          placeholder="As it appears on your bank statement"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="words"
        />

        <Button title="Save Bank Details" onPress={handleSave} loading={loading} size="lg" style={{ marginTop: Spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, backgroundColor: Colors.surface },
  back: { color: Colors.primary, fontSize: Typography.sizes.md, width: 60 },
  headerTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  statusPill: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: Radius.full, marginTop: 3 },
  statusPillText: { fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  scoreSection: { flexDirection: 'row', alignItems: 'center', padding: Spacing.lg, gap: Spacing.lg },
  scoreRing: { width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.primaryFaint, borderWidth: 6, borderColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  scoreNum: { fontSize: 28, fontWeight: 'bold', color: Colors.primary, fontFamily: 'Georgia' },
  scoreLabel: { fontSize: 10, color: Colors.textMuted, marginTop: 1 },
  scoreDetails: { flex: 1 },
  scoreTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 6 },
  scoreStat: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, marginBottom: 3 },
  progressBarContainer: { height: 8, backgroundColor: Colors.borderLight, marginHorizontal: Spacing.lg, borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: 8, borderRadius: 4 },
  progressNote: { fontSize: Typography.sizes.sm, color: Colors.textMuted, paddingHorizontal: Spacing.lg, marginTop: 6, marginBottom: Spacing.md },
  infoBox: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm },
  infoBoxTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.primary, marginBottom: 4 },
  infoBoxText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 20 },
  sectionTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.md },
  activityCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm, gap: Spacing.md },
  activityDone: { opacity: 0.7 },
  activityMiss: { borderLeftWidth: 3, borderLeftColor: Colors.error },
  activityStatusIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  activityName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  activityMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 1 },
  activityStatusLabel: { fontSize: Typography.sizes.xs, fontWeight: '600', marginTop: 3 },
  activityChevron: { fontSize: 22, color: Colors.textMuted },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: Colors.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: Spacing.lg, paddingBottom: 36 },
  modalTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.lg },
  modalOption: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md, padding: Spacing.md, borderRadius: Radius.lg, marginBottom: Spacing.sm, backgroundColor: Colors.surfaceAlt },
  modalOptionIcon: { fontSize: 24 },
  modalOptionLabel: { fontSize: Typography.sizes.md, fontWeight: '700' },
  modalOptionSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2, lineHeight: 18 },
  modalCancel: { alignItems: 'center', padding: Spacing.md, marginTop: Spacing.sm },
  bookerRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm },
  bookerName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  bookerRef: { fontSize: Typography.sizes.xs, color: Colors.textMuted, fontFamily: 'monospace' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: Spacing.md, backgroundColor: Colors.surface, borderTopWidth: 1, borderTopColor: Colors.borderLight },
  bookingCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm },
  bookingTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary },
  bookingGuide: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  bookingRef: { fontSize: Typography.sizes.xs, color: Colors.textMuted, fontFamily: 'monospace', marginTop: 2 },
  bookingAmount: { fontSize: Typography.sizes.sm, color: Colors.accent, fontWeight: '600', marginTop: 2 },
  bookingDate: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 2 },
  earningsGrid: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.sm },
  earningsCard: { flex: 1, backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.lg, ...Shadow.sm, alignItems: 'center' },
  earningsValue: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold' },
  earningsLabel: { fontSize: Typography.sizes.sm, color: Colors.textMuted, textAlign: 'center', marginTop: 4 },
  earningAmount: { fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.primary },
  payoutInfoBox: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.lg },
  payoutInfoTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.primary, marginBottom: 6 },
  payoutInfoText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 20 },
  payoutInfoBtn: { marginTop: Spacing.sm },
  payoutInfoBtnText: { color: Colors.primary, fontWeight: '700', fontSize: Typography.sizes.sm },
  bankInfoBox: { backgroundColor: Colors.accentFaint, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.lg },
  bankInfoText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 20 },
  fieldLabel: { fontSize: 11, fontWeight: '700', color: Colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  bankPickerBtn: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: Spacing.md, paddingVertical: 13, marginBottom: Spacing.md },
  bankPickerBtnText: { fontSize: Typography.sizes.md, color: Colors.textPrimary },
  inputField: { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: Spacing.md, paddingVertical: 13, fontSize: Typography.sizes.md, color: Colors.textPrimary, marginBottom: Spacing.sm },
});
