import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, TextInput, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { TrialPill, SubscriptionBanner } from '../payment/SubscriptionScreens';
import { getTrialStatus } from '../../utils/paystack';
import { Button, Avatar, RoleBadge, Badge, Divider, EmptyState, StarRating, Input } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

// My Profile
export function ProfileScreen({ navigation }) {
  const { currentUser, logout, getUserItineraries, itineraries, reviews, TOUR_GUIDE_REQUIREMENTS } = useApp();
  const [loggingOut, setLoggingOut] = useState(false);

  if (!currentUser) return null;

  const myItineraries = getUserItineraries(currentUser.id);
  const publicItineraries = myItineraries.filter(i => i.visibility === 'public');
  const myReviewsReceived = reviews.filter(r => {
    const iti = itineraries.find(i => i.id === r.itineraryId && i.creatorId === currentUser.id);
    return !!iti;
  });
  const avgRating = myReviewsReceived.length > 0
    ? myReviewsReceived.reduce((s, r) => s + r.rating, 0) / myReviewsReceived.length
    : 0;

  const isTourGuide = currentUser.role === 'tourguide';

  // Progress toward tour guide
  const itiProgress = Math.min(publicItineraries.length / TOUR_GUIDE_REQUIREMENTS.minItineraries, 1);
  const revProgress = Math.min(myReviewsReceived.length / TOUR_GUIDE_REQUIREMENTS.minReviews, 1);
  const ratingProgress = Math.min(avgRating / TOUR_GUIDE_REQUIREMENTS.minAvgRating, 1);

  const handleLogout = async () => {
    Alert.alert('Log out?', 'You will need to sign in again.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out', style: 'destructive',
        onPress: async () => {
          setLoggingOut(true);
          await logout();
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Profile hero */}
        <View style={styles.profileHero}>
          <Avatar name={currentUser.name} size={80} />
          <Text style={styles.profileName}>{currentUser.name}</Text>
          <Text style={styles.profileEmail}>{currentUser.email}</Text>
          {currentUser.bio ? <Text style={styles.profileBio}>{currentUser.bio}</Text> : null}
          <View style={{ marginTop: Spacing.sm }}>
            <RoleBadge role={currentUser.role} />
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          {/* Trial/subscription status */}
          <TrialPill onSubscribe={() => navigation.navigate('Paywall')} />
          {getTrialStatus(currentUser).expired && !getTrialStatus(currentUser).subscribed && (
            <SubscriptionBanner onSubscribe={() => navigation.navigate('Paywall')} />
          )}

          {/* Stats */}
          <View style={styles.statsRow}>
            <StatBox label="Itineraries" value={myItineraries.length} icon="🗺️" />
            <StatBox label="Reviews" value={myReviewsReceived.length} icon="⭐" />
            <StatBox label="Avg Rating" value={avgRating > 0 ? avgRating.toFixed(1) : '—'} icon="📊" />
          </View>

          {/* Tour Guide Progress (only if not already one) */}
          {!isTourGuide && (
            <View style={styles.progressCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: Spacing.md }}>
                <Text style={{ fontSize: 24 }}>🧭</Text>
                <View>
                  <Text style={styles.progressTitle}>Tour Guide Journey</Text>
                  <Text style={styles.progressSub}>Meet these targets to earn Tour Guide status</Text>
                </View>
              </View>

              <ProgressItem
                label="Public Itineraries"
                current={publicItineraries.length}
                target={TOUR_GUIDE_REQUIREMENTS.minItineraries}
                progress={itiProgress}
              />
              <ProgressItem
                label="Reviews Received"
                current={myReviewsReceived.length}
                target={TOUR_GUIDE_REQUIREMENTS.minReviews}
                progress={revProgress}
              />
              <ProgressItem
                label="Average Rating"
                current={avgRating.toFixed(1)}
                target={TOUR_GUIDE_REQUIREMENTS.minAvgRating}
                progress={ratingProgress}
                isRating
              />

              <Text style={styles.progressHint}>
                🌟 Once achieved, your DM will open for travel partnership opportunities!
              </Text>
            </View>
          )}

          {isTourGuide && (
            <View style={styles.guideCard}>
              <Text style={{ fontSize: 36 }}>🧭</Text>
              <Text style={styles.guideTitle}>You're a Tour Guide!</Text>
              <Text style={styles.guideSub}>
                Your DM is open for travel partnerships and bookings. Keep sharing great itineraries to grow your audience.
              </Text>
            </View>
          )}

          {/* Quick actions */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={{ gap: Spacing.sm }}>
            <ActionRow icon="🗺️" label="My Itineraries" onPress={() => navigation.navigate('MyItineraries')} />
            <ActionRow icon="🎒" label="My Bookings" onPress={() => navigation.navigate('MyBookings')} />
            {currentUser?.role === 'tourguide' && (
              <ActionRow icon="💰" label="Guide Earnings" onPress={() => navigation.navigate('GuideEarnings')} />
            )}
            {currentUser?.role === 'tourguide' && (
              <ActionRow icon="🏦" label="Bank Account" onPress={() => navigation.navigate('BankAccount')} />
            )}
            <ActionRow icon="💬" label="Messages" onPress={() => navigation.navigate('MessagesInbox')} />
            <ActionRow icon="🔔" label="Notifications" onPress={() => navigation.navigate('Notifications')} />
            <ActionRow icon="💳" label="Subscription" onPress={() => navigation.navigate('ManageSubscription')} />
            <ActionRow icon="✏️" label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
          </View>

          <Divider style={{ marginTop: Spacing.xl }} />

          <Button title="Log Out" onPress={handleLogout} variant="secondary" loading={loggingOut} style={{ marginTop: Spacing.md }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <View style={styles.statBox}>
      <Text style={{ fontSize: 24 }}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ProgressItem({ label, current, target, progress, isRating }) {
  const done = progress >= 1;
  return (
    <View style={styles.progressItem}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
        <Text style={styles.progressLabel}>{done ? '✅ ' : ''}{label}</Text>
        <Text style={[styles.progressValue, done && { color: Colors.accent }]}>
          {current}{isRating ? '' : `/${target}`}
          {!isRating && <Text style={{ color: Colors.textMuted }}> / {target}</Text>}
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${Math.min(progress * 100, 100)}%`, backgroundColor: done ? Colors.accent : Colors.primary }]} />
      </View>
    </View>
  );
}

function ActionRow({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.actionRow} onPress={onPress} activeOpacity={0.8}>
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
      <Text style={{ color: Colors.textMuted, fontSize: 18 }}>→</Text>
    </TouchableOpacity>
  );
}

// Public user profile
export function UserProfileScreen({ route, navigation }) {
  const { userId } = route.params;
  const { getUserById, getUserItineraries, currentUser, sendMessage, followUser, isFollowing } = useApp();
  const user = getUserById(userId);
  const theirItineraries = getUserItineraries(userId).filter(i => i.visibility === 'public');

  if (!user) return <SafeAreaView style={styles.safe}><EmptyState icon="👤" title="User not found" /></SafeAreaView>;

  const isSelf = currentUser?.id === userId;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <TouchableOpacity style={styles.backRow} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.profileHero}>
          <Avatar name={user.name} size={72} />
          <Text style={styles.profileName}>{user.name}</Text>
          {user.bio ? <Text style={styles.profileBio}>{user.bio}</Text> : null}
          <RoleBadge role={user.role} />

          <View style={{ flexDirection: 'row', gap: 10, marginTop: Spacing.md }}>
            {!isSelf && currentUser && (
              <Button
                title={isFollowing(userId) ? '✓ Following' : '+ Follow'}
                onPress={() => followUser(userId)}
                variant={isFollowing(userId) ? 'secondary' : 'primary'}
                style={{ flex: 1 }}
              />
            )}
            {!isSelf && user.dmOpen && currentUser && (
              <Button
                title="💬 Message"
                onPress={() => navigation.navigate('Messages', { toUserId: userId })}
                variant="secondary"
                style={{ flex: 1 }}
              />
            )}
          </View>
          <View style={{ flexDirection: 'row', gap: Spacing.xl, marginTop: Spacing.md }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: Typography.sizes.xl, fontWeight: 'bold', color: Colors.textPrimary }}>{(user.followers || []).length}</Text>
              <Text style={{ fontSize: Typography.sizes.xs, color: Colors.textMuted }}>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: Typography.sizes.xl, fontWeight: 'bold', color: Colors.textPrimary }}>{(user.following || []).length}</Text>
              <Text style={{ fontSize: Typography.sizes.xs, color: Colors.textMuted }}>Following</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          <Text style={styles.sectionTitle}>{theirItineraries.length} Public Itineraries</Text>
          {theirItineraries.length === 0 ? (
            <EmptyState icon="🗺️" title="No public itineraries" subtitle="This explorer hasn't shared any trips yet." />
          ) : (
            theirItineraries.map(iti => {
              const { getCountryById } = require('../../data/worldData');
              const country = getCountryById(iti.countryId);
              return (
                <TouchableOpacity
                  key={iti.id}
                  style={styles.publicItiCard}
                  onPress={() => navigation.navigate('ItineraryDetail', { itineraryId: iti.id })}
                  activeOpacity={0.85}
                >
                  <Text style={{ fontSize: 28 }}>{country?.flag || '🌍'}</Text>
                  <View style={{ flex: 1, marginLeft: Spacing.md }}>
                    <Text style={styles.publicItiTitle}>{iti.title}</Text>
                    <Text style={styles.publicItiMeta}>{country?.name} · {iti.placeIds.length} places · ⭐{iti.avgRating?.toFixed(1) || '—'}</Text>
                  </View>
                  <Text style={{ color: Colors.primary }}>→</Text>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Messages Inbox
export function MessagesInboxScreen({ navigation }) {
  const { getConversations, currentUser } = useApp();
  const conversations = getConversations();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <FlatList
        data={conversations}
        keyExtractor={c => c.partner?.id || 'unknown'}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 100 }}
        ListEmptyComponent={
          <EmptyState
            icon="💬"
            title="No messages yet"
            subtitle="Become a Tour Guide or connect with tour guides to start conversations"
          />
        }
        renderItem={({ item: conv }) => conv.partner ? (
          <TouchableOpacity
            style={styles.convoCard}
            onPress={() => navigation.navigate('Messages', { toUserId: conv.partner.id })}
            activeOpacity={0.85}
          >
            <Avatar name={conv.partner.name} size={48} />
            <View style={{ flex: 1, marginLeft: Spacing.md }}>
              <Text style={styles.convoName}>{conv.partner.name}</Text>
              <Text style={styles.convoLast} numberOfLines={1}>{conv.lastMsg?.text || ''}</Text>
            </View>
            {conv.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{conv.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        ) : null}
      />
    </SafeAreaView>
  );
}

// Message Thread
export function MessageThreadScreen({ route, navigation }) {
  const { toUserId } = route.params;
  const { currentUser, getUserById, getThread, sendMessage } = useApp();
  const toUser = getUserById(toUserId);
  const thread = getThread(toUserId);
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!text.trim()) return;
    setSending(true);
    try {
      await sendMessage({ toUserId, text: text.trim() });
      setText('');
    } catch (e) {
      Alert.alert('Cannot send message', e.message);
    } finally {
      setSending(false);
    }
  };

  if (!toUser) return <SafeAreaView style={styles.safe}><EmptyState icon="👤" title="User not found" /></SafeAreaView>;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.threadHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Avatar name={toUser.name} size={32} />
          <Text style={styles.threadName}>{toUser.name}</Text>
        </View>
        <RoleBadge role={toUser.role} />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
        <FlatList
          data={thread}
          keyExtractor={m => m.id}
          contentContainerStyle={{ padding: Spacing.md, gap: Spacing.sm }}
          renderItem={({ item: msg }) => {
            const isMe = msg.fromId === currentUser?.id;
            return (
              <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleThem]}>
                <Text style={[styles.bubbleText, isMe && styles.bubbleTextMe]}>{msg.text}</Text>
                <Text style={[styles.bubbleTime, isMe && { color: 'rgba(255,255,255,0.6)' }]}>
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </View>
            );
          }}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', paddingTop: 40 }}>
              <Text style={{ fontSize: 40 }}>👋</Text>
              <Text style={{ color: Colors.textMuted, marginTop: 8, textAlign: 'center' }}>
                Start a conversation with {toUser.name}
              </Text>
            </View>
          }
        />

        <View style={styles.inputBar}>
          <TextInput
            style={styles.msgInput}
            value={text}
            onChangeText={setText}
            placeholder="Type a message..."
            placeholderTextColor={Colors.textMuted}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendBtn, (!text.trim() || sending) && { opacity: 0.5 }]}
            onPress={handleSend}
            disabled={!text.trim() || sending}
            activeOpacity={0.8}
          >
            <Text style={{ fontSize: 20 }}>→</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Edit Profile
export function EditProfileScreen({ navigation }) {
  const { currentUser, updateUser } = useApp();
  const [name, setName] = useState(currentUser?.name || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) { Alert.alert('Name required'); return; }
    setLoading(true);
    try {
      await updateUser({ name, bio });
      Alert.alert('Profile updated!', '', [{ text: 'OK', onPress: () => navigation.goBack() }]);
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 60 }} />
      </View>
      <ScrollView contentContainerStyle={{ padding: Spacing.md }} keyboardShouldPersistTaps="handled">
        <Input label="Full Name" value={name} onChangeText={setName} placeholder="Your name" />
        <Input
          label="Bio"
          value={bio}
          onChangeText={setBio}
          placeholder="Travel enthusiast, foodie, adventurer..."
          multiline
          numberOfLines={3}
          style={{ height: 90, textAlignVertical: 'top' }}
        />
        <Button title="Save Changes" onPress={handleSave} loading={loading} size="lg" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Spacing.md, paddingTop: Spacing.sm, paddingBottom: Spacing.md,
  },
  headerTitle: { fontSize: Typography.sizes.xxxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },

  profileHero: {
    backgroundColor: Colors.surface, padding: Spacing.xl,
    alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },
  profileName: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginTop: Spacing.md },
  profileEmail: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 4 },
  profileBio: { fontSize: Typography.sizes.md, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22 },

  statsRow: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.lg },
  statBox: {
    flex: 1, backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, alignItems: 'center', ...Shadow.sm, gap: 4,
  },
  statValue: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  statLabel: { fontSize: Typography.sizes.xs, color: Colors.textMuted, textAlign: 'center' },

  progressCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.lg, ...Shadow.sm,
  },
  progressTitle: { fontSize: Typography.sizes.md, fontWeight: 'bold', color: Colors.textPrimary },
  progressSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  progressItem: { marginBottom: Spacing.md },
  progressLabel: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '500' },
  progressValue: { fontSize: Typography.sizes.sm, fontWeight: 'bold', color: Colors.primary },
  progressBar: { height: 8, backgroundColor: Colors.borderLight, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: 8, borderRadius: 4 },
  progressHint: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: Spacing.sm, fontStyle: 'italic', lineHeight: 20 },

  guideCard: {
    backgroundColor: Colors.tourGuideLight, borderRadius: Radius.lg,
    padding: Spacing.lg, alignItems: 'center', marginBottom: Spacing.lg, gap: 8,
  },
  guideTitle: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.tourGuide },
  guideSub: { fontSize: Typography.sizes.md, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 },

  sectionTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.md },

  actionRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, gap: Spacing.md, ...Shadow.sm,
  },
  actionLabel: { flex: 1, fontSize: Typography.sizes.md, color: Colors.textPrimary, fontWeight: '500' },

  backRow: { padding: Spacing.md },
  backText: { color: Colors.primary, fontSize: Typography.sizes.md },

  publicItiCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  publicItiTitle: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  publicItiMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  // Messages
  convoCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  convoName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  convoLast: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  unreadBadge: {
    width: 22, height: 22, borderRadius: 11,
    backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center',
  },
  unreadText: { fontSize: 11, color: Colors.textInverse, fontWeight: 'bold' },

  threadHeader: {
    flexDirection: 'row', alignItems: 'center',
    padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.surface,
  },
  threadName: { fontSize: Typography.sizes.sm, color: Colors.textPrimary, fontWeight: '600' },

  bubble: {
    maxWidth: '75%', borderRadius: Radius.lg, padding: Spacing.md,
  },
  bubbleMe: {
    alignSelf: 'flex-end', backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  bubbleThem: {
    alignSelf: 'flex-start', backgroundColor: Colors.surface,
    borderBottomLeftRadius: 4, ...Shadow.sm,
  },
  bubbleText: { fontSize: Typography.sizes.md, color: Colors.textPrimary, lineHeight: 21 },
  bubbleTextMe: { color: Colors.textInverse },
  bubbleTime: { fontSize: 10, color: Colors.textMuted, marginTop: 4, textAlign: 'right' },

  inputBar: {
    flexDirection: 'row', alignItems: 'flex-end',
    padding: Spacing.md, gap: Spacing.sm,
    backgroundColor: Colors.surface, borderTopWidth: 1, borderTopColor: Colors.borderLight,
  },
  msgInput: {
    flex: 1, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg,
    paddingHorizontal: Spacing.md, paddingVertical: 10,
    fontSize: Typography.sizes.md, color: Colors.textPrimary,
    maxHeight: 100,
  },
  sendBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center',
  },
});
