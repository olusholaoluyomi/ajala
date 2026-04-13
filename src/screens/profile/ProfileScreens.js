import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, TextInput, Alert, KeyboardAvoidingView, Platform,
  Switch, Image, Modal, ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { TrialPill, SubscriptionBanner } from '../payment/SubscriptionScreens';
import { getTrialStatus } from '../../utils/paystack';
import { Button, Avatar, RoleBadge, Badge, Divider, EmptyState, StarRating, Input } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import { pickPhotos } from '../../utils/photoUtils';
import { getCountryById } from '../../data/worldData';

// ── MY PROFILE ────────────────────────────────────────────────────────────────
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
  const itiProgress    = Math.min(publicItineraries.length / TOUR_GUIDE_REQUIREMENTS.minItineraries, 1);
  const revProgress    = Math.min(myReviewsReceived.length / TOUR_GUIDE_REQUIREMENTS.minReviews, 1);
  const ratingProgress = Math.min(avgRating / TOUR_GUIDE_REQUIREMENTS.minAvgRating, 1);

  const handleLogout = async () => {
    Alert.alert('Log out?', 'You will need to sign in again.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log out', style: 'destructive', onPress: async () => { setLoggingOut(true); await logout(); } },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.profileHero}>
          <Avatar name={currentUser.name} size={80} />
          <Text style={styles.profileName}>{currentUser.name}</Text>
          {currentUser.username
            ? <Text style={styles.profileUsername}>@{currentUser.username}</Text>
            : <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.setUsername}>Set a username →</Text>
              </TouchableOpacity>
          }
          <Text style={styles.profileEmail}>{currentUser.email}</Text>
          {currentUser.bio ? <Text style={styles.profileBio}>{currentUser.bio}</Text> : null}
          <View style={{ marginTop: Spacing.sm }}>
            <RoleBadge role={currentUser.role} />
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          <TrialPill onSubscribe={() => navigation.navigate('Paywall')} />
          {getTrialStatus(currentUser).expired && !getTrialStatus(currentUser).subscribed && (
            <SubscriptionBanner onSubscribe={() => navigation.navigate('Paywall')} />
          )}

          <View style={styles.statsRow}>
            <StatBox label="Itineraries" value={myItineraries.length} icon="🗺️" />
            <StatBox label="Reviews" value={myReviewsReceived.length} icon="⭐" />
            <StatBox label="Avg Rating" value={avgRating > 0 ? avgRating.toFixed(1) : '—'} icon="📊" />
          </View>

          {!isTourGuide && (
            <View style={styles.progressCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: Spacing.md }}>
                <Text style={{ fontSize: 24 }}>🧭</Text>
                <View>
                  <Text style={styles.progressTitle}>Tour Guide Journey</Text>
                  <Text style={styles.progressSub}>Meet these targets to earn Tour Guide status</Text>
                </View>
              </View>
              <ProgressItem label="Public Itineraries" current={publicItineraries.length} target={TOUR_GUIDE_REQUIREMENTS.minItineraries} progress={itiProgress} />
              <ProgressItem label="Reviews Received" current={myReviewsReceived.length} target={TOUR_GUIDE_REQUIREMENTS.minReviews} progress={revProgress} />
              <ProgressItem label="Average Rating" current={avgRating.toFixed(1)} target={TOUR_GUIDE_REQUIREMENTS.minAvgRating} progress={ratingProgress} isRating />
              <Text style={styles.progressHint}>🌟 Once achieved, your DM will open for travel partnership opportunities!</Text>
            </View>
          )}

          {isTourGuide && (
            <View style={styles.guideCard}>
              <Text style={{ fontSize: 36 }}>🧭</Text>
              <Text style={styles.guideTitle}>You're a Tour Guide!</Text>
              <Text style={styles.guideSub}>Keep sharing great itineraries to grow your audience.</Text>
            </View>
          )}

          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={{ gap: Spacing.sm }}>
            <ActionRow icon="🗺️" label="My Itineraries"   onPress={() => navigation.navigate('MyItineraries')} />
            <ActionRow icon="🎒" label="My Bookings"       onPress={() => navigation.navigate('MyBookings')} />
            {currentUser?.role === 'tourguide' && <ActionRow icon="💰" label="Guide Earnings"  onPress={() => navigation.navigate('GuideEarnings')} />}
            {currentUser?.role === 'tourguide' && <ActionRow icon="🏦" label="Bank Account"    onPress={() => navigation.navigate('BankAccount')} />}
            <ActionRow icon="💬" label="Messages"          onPress={() => navigation.navigate('MessagesInbox')} />
            <ActionRow icon="🔔" label="Notifications"     onPress={() => navigation.navigate('Notifications')} />
            <ActionRow icon="💳" label="Subscription"      onPress={() => navigation.navigate('ManageSubscription')} />
            <ActionRow icon="✏️" label="Edit Profile"      onPress={() => navigation.navigate('EditProfile')} />
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
          {current}{!isRating && <Text style={{ color: Colors.textMuted }}> / {target}</Text>}
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

// ── PUBLIC USER PROFILE ───────────────────────────────────────────────────────
export function UserProfileScreen({ route, navigation }) {
  const { userId } = route.params;
  const { getUserById, getUserItineraries, currentUser, followUser, isFollowing } = useApp();
  const user = getUserById(userId);
  const theirItineraries = getUserItineraries(userId).filter(i => i.visibility === 'public');

  if (!user) return <SafeAreaView style={styles.safe}><EmptyState icon="👤" title="User not found" /></SafeAreaView>;

  const isSelf = currentUser?.id === userId;
  const canMessage = !isSelf && currentUser && user.messagingVisible !== false;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <TouchableOpacity style={styles.backRow} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.profileHero}>
          <Avatar name={user.name} size={72} />
          <Text style={styles.profileName}>{user.name}</Text>
          {user.username && <Text style={styles.profileUsername}>@{user.username}</Text>}
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
            {canMessage && (
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

// ── MESSAGES INBOX ────────────────────────────────────────────────────────────
export function MessagesInboxScreen({ navigation }) {
  const { getConversations, currentUser, searchUsers } = useApp();
  const conversations = getConversations();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const results = searchUsers(query);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity
          style={styles.newMsgBtn}
          onPress={() => setShowSearch(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.newMsgBtnText}>✏️ New</Text>
        </TouchableOpacity>
      </View>

      {/* New message search modal */}
      <Modal visible={showSearch} animationType="slide" onRequestClose={() => { setShowSearch(false); setQuery(''); }}>
        <SafeAreaView style={styles.safe}>
          <View style={styles.searchModalHeader}>
            <TouchableOpacity onPress={() => { setShowSearch(false); setQuery(''); }}>
              <Text style={styles.backText}>✕ Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.searchModalTitle}>New Message</Text>
            <View style={{ width: 60 }} />
          </View>
          <View style={styles.searchBar}>
            <Text style={{ fontSize: 16, marginRight: 8 }}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
              placeholder="Search by @username or name..."
              placeholderTextColor={Colors.textMuted}
              autoFocus
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.searchHint}>
            Only users with messaging enabled appear here. Share your @username for others to find you.
          </Text>
          <FlatList
            data={results}
            keyExtractor={u => u.id}
            contentContainerStyle={{ padding: Spacing.md }}
            ListEmptyComponent={
              query.length > 1
                ? <EmptyState icon="🔍" title="No users found" subtitle="Try a different username or name" />
                : <View style={{ padding: Spacing.xl, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, marginBottom: 12 }}>💬</Text>
                    <Text style={{ color: Colors.textMuted, textAlign: 'center', lineHeight: 22 }}>
                      Type a name or @username to find someone to message
                    </Text>
                  </View>
            }
            renderItem={({ item: u }) => (
              <TouchableOpacity
                style={styles.userResult}
                onPress={() => {
                  setShowSearch(false);
                  setQuery('');
                  navigation.navigate('Messages', { toUserId: u.id });
                }}
                activeOpacity={0.85}
              >
                <Avatar name={u.name} size={44} />
                <View style={{ flex: 1, marginLeft: Spacing.md }}>
                  <Text style={styles.userResultName}>{u.name}</Text>
                  {u.username
                    ? <Text style={styles.userResultHandle}>@{u.username}</Text>
                    : <Text style={styles.userResultMeta}>{u.role === 'tourguide' ? '🧭 Tour Guide' : '🌍 Explorer'}</Text>
                  }
                </View>
                <RoleBadge role={u.role} />
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>

      <FlatList
        data={conversations}
        keyExtractor={c => c.partner?.id || 'unknown'}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 100 }}
        ListEmptyComponent={
          <EmptyState
            icon="💬"
            title="No messages yet"
            subtitle={'Tap "New" to find someone to chat with using their @username or name'}
            action="Start a Conversation"
            onAction={() => setShowSearch(true)}
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
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={styles.convoName}>{conv.partner.name}</Text>
                {conv.partner.username && <Text style={styles.convoHandle}>@{conv.partner.username}</Text>}
              </View>
              <Text style={styles.convoLast} numberOfLines={1}>
                {conv.lastMsg?.attachmentType ? `📎 ${attachmentLabel(conv.lastMsg.attachmentType)}` : conv.lastMsg?.text || ''}
              </Text>
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

function attachmentLabel(type) {
  if (type === 'trip')      return 'Shared a trip package';
  if (type === 'itinerary') return 'Shared an itinerary';
  if (type === 'live_trip') return 'Shared a live trip';
  if (type === 'image')     return 'Sent a photo';
  return 'Attachment';
}

// ── MESSAGE THREAD ────────────────────────────────────────────────────────────
export function MessageThreadScreen({ route, navigation }) {
  const { toUserId } = route.params;
  const { currentUser, getUserById, getThread, sendMessage, markThreadRead, trips, itineraries } = useApp();
  const toUser = getUserById(toUserId);
  const thread = getThread(toUserId);
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const [showAttach, setShowAttach] = useState(false);
  const flatRef = useRef(null);

  // Mark thread as read when opened
  useEffect(() => {
    markThreadRead?.(toUserId);
  }, [toUserId]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (thread.length > 0) {
      setTimeout(() => flatRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [thread.length]);

  const handleSend = async (opts = {}) => {
    const msgText = opts.text ?? text;
    if (!msgText.trim() && !opts.attachmentType) return;
    setSending(true);
    try {
      await sendMessage({
        toUserId,
        text: msgText.trim(),
        attachmentType: opts.attachmentType,
        attachmentId: opts.attachmentId,
        attachmentData: opts.attachmentData,
      });
      setText('');
      setShowAttach(false);
    } catch (e) {
      Alert.alert('Cannot send message', e.message);
    } finally {
      setSending(false);
    }
  };

  const handlePickPhoto = async () => {
    try {
      const uris = await pickPhotos(1);
      if (!uris || uris.length === 0) return;
      setShowAttach(false);
      await handleSend({
        text: '',
        attachmentType: 'image',
        attachmentId: null,
        attachmentData: { uri: uris[0] },
      });
    } catch (e) {
      Alert.alert('Photo error', e.message);
    }
  };

  const handleAttachTrip = () => {
    setShowAttach(false);
    // Show trip picker
    navigation.navigate('AttachPicker', {
      type: 'trip',
      onSelect: (item) => {
        const country = getCountryById(item.countryId);
        handleSend({
          text: '',
          attachmentType: 'trip',
          attachmentId: item.id,
          attachmentData: {
            title: item.title,
            country: country?.name || '',
            flag: country?.flag || '🌍',
            price: item.price,
            currency: item.currency || 'USD',
            durationDays: item.durationDays,
          },
        });
      },
    });
  };

  const handleAttachItinerary = () => {
    setShowAttach(false);
    navigation.navigate('AttachPicker', {
      type: 'itinerary',
      onSelect: (item) => {
        const country = getCountryById(item.countryId);
        handleSend({
          text: '',
          attachmentType: 'itinerary',
          attachmentId: item.id,
          attachmentData: {
            title: item.title,
            country: country?.name || '',
            flag: country?.flag || '🌍',
            places: item.placeIds?.length || 0,
          },
        });
      },
    });
  };

  if (!toUser) return <SafeAreaView style={styles.safe}><EmptyState icon="👤" title="User not found" /></SafeAreaView>;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Header */}
      <TouchableOpacity
        style={styles.threadHeader}
        onPress={() => navigation.navigate('UserProfile', { userId: toUserId })}
        activeOpacity={0.85}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingRight: Spacing.md }}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Avatar name={toUser.name} size={36} />
        <View style={{ flex: 1, marginLeft: Spacing.sm }}>
          <Text style={styles.threadName}>{toUser.name}</Text>
          {toUser.username && <Text style={styles.threadHandle}>@{toUser.username}</Text>}
        </View>
        <RoleBadge role={toUser.role} />
      </TouchableOpacity>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
        <FlatList
          ref={flatRef}
          data={thread}
          keyExtractor={m => m.id}
          contentContainerStyle={{ padding: Spacing.md, gap: Spacing.sm, paddingBottom: 8 }}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', paddingTop: 60 }}>
              <Avatar name={toUser.name} size={64} />
              <Text style={{ fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.textPrimary, marginTop: Spacing.md }}>{toUser.name}</Text>
              {toUser.username && <Text style={{ color: Colors.textMuted, fontSize: Typography.sizes.sm }}>@{toUser.username}</Text>}
              <Text style={{ color: Colors.textMuted, marginTop: 12, textAlign: 'center', paddingHorizontal: Spacing.xl }}>
                Start a conversation. Share a trip, itinerary, or just say hi!
              </Text>
            </View>
          }
          renderItem={({ item: msg }) => <MessageBubble msg={msg} isMe={msg.fromId === currentUser?.id} navigation={navigation} />}
        />

        {/* Attachment tray */}
        {showAttach && (
          <View style={styles.attachTray}>
            <Text style={styles.attachTrayTitle}>Share something</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: Spacing.sm, paddingHorizontal: Spacing.sm }}>
              <AttachOption emoji="📸" label="Photo"       onPress={handlePickPhoto} />
              <AttachOption emoji="🧭" label="Trip"        onPress={handleAttachTrip} />
              <AttachOption emoji="🗺️" label="Itinerary"  onPress={handleAttachItinerary} />
            </ScrollView>
          </View>
        )}

        {/* Input bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity
            style={[styles.attachBtn, showAttach && { backgroundColor: Colors.primaryFaint }]}
            onPress={() => setShowAttach(v => !v)}
            activeOpacity={0.8}
          >
            <Text style={{ fontSize: 20 }}>{showAttach ? '✕' : '+'}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.msgInput}
            value={text}
            onChangeText={setText}
            placeholder="Message..."
            placeholderTextColor={Colors.textMuted}
            multiline
            maxLength={1000}
          />
          <TouchableOpacity
            style={[styles.sendBtn, (!text.trim() || sending) && { opacity: 0.4 }]}
            onPress={() => handleSend()}
            disabled={!text.trim() || sending}
            activeOpacity={0.8}
          >
            {sending
              ? <ActivityIndicator color="#fff" size="small" />
              : <Text style={{ fontSize: 18, color: '#fff' }}>↑</Text>
            }
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function AttachOption({ emoji, label, onPress }) {
  return (
    <TouchableOpacity style={styles.attachOption} onPress={onPress} activeOpacity={0.8}>
      <Text style={{ fontSize: 28 }}>{emoji}</Text>
      <Text style={styles.attachOptionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function MessageBubble({ msg, isMe, navigation }) {
  const hasAttachment = !!msg.attachmentType;
  const d = msg.attachmentData || {};

  return (
    <View style={[styles.bubbleWrap, isMe ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
      {/* Text bubble (skip if attachment-only with no text) */}
      {!!msg.text && (
        <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleThem]}>
          <Text style={[styles.bubbleText, isMe && styles.bubbleTextMe]}>{msg.text}</Text>
        </View>
      )}

      {/* Attachment card */}
      {hasAttachment && (
        <TouchableOpacity
          style={[styles.attachCard, isMe && { borderColor: Colors.primaryLight }]}
          onPress={() => {
            if (msg.attachmentType === 'trip' && msg.attachmentId)
              navigation.navigate('TripDetail', { tripId: msg.attachmentId });
            else if (msg.attachmentType === 'itinerary' && msg.attachmentId)
              navigation.navigate('ItineraryDetail', { itineraryId: msg.attachmentId });
          }}
          activeOpacity={msg.attachmentId ? 0.85 : 1}
        >
          {msg.attachmentType === 'image' && d.uri ? (
            <Image source={{ uri: d.uri }} style={styles.attachImage} resizeMode="cover" />
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.sm }}>
              <Text style={{ fontSize: 32 }}>{d.flag || attachmentIcon(msg.attachmentType)}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.attachCardLabel}>{attachmentLabel(msg.attachmentType)}</Text>
                <Text style={styles.attachCardTitle} numberOfLines={1}>{d.title || ''}</Text>
                {d.country && <Text style={styles.attachCardMeta}>{d.country}{d.durationDays ? ` · ${d.durationDays} days` : ''}{d.places ? ` · ${d.places} places` : ''}</Text>}
                {d.price != null && <Text style={styles.attachCardPrice}>${d.price.toLocaleString()} USD</Text>}
              </View>
              {msg.attachmentId && <Text style={{ color: Colors.primary, fontSize: 16 }}>→</Text>}
            </View>
          )}
        </TouchableOpacity>
      )}

      {/* Timestamp */}
      <Text style={[styles.bubbleTime, isMe && { textAlign: 'right' }]}>
        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );
}

function attachmentIcon(type) {
  if (type === 'trip')      return '🧭';
  if (type === 'itinerary') return '🗺️';
  if (type === 'live_trip') return '📡';
  return '📎';
}

// ── EDIT PROFILE ──────────────────────────────────────────────────────────────
export function EditProfileScreen({ navigation }) {
  const { currentUser, updateUser, updateUsername, updateMessagingVisibility } = useApp();
  const [name, setName]           = useState(currentUser?.name || '');
  const [bio, setBio]             = useState(currentUser?.bio || '');
  const [username, setUsername]   = useState(currentUser?.username || '');
  const [visible, setVisible]     = useState(currentUser?.messagingVisible !== false);
  const [loading, setLoading]     = useState(false);
  const [usernameStatus, setUsernameStatus] = useState(null); // 'saving' | 'ok' | 'error'

  const handleSave = async () => {
    if (!name.trim()) { Alert.alert('Name required'); return; }
    setLoading(true);
    try {
      await updateUser({ name, bio });

      // Update username if changed
      const cleanedNew = (username || '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 30);
      const cleanedOld = (currentUser?.username || '').toLowerCase();
      if (cleanedNew !== cleanedOld) {
        setUsernameStatus('saving');
        try {
          if (cleanedNew) {
            await updateUsername(cleanedNew);
          } else {
            // Clear username
            await updateUser({ username: null });
          }
          setUsernameStatus('ok');
        } catch (e) {
          setUsernameStatus('error');
          Alert.alert('Username error', e.message);
          setLoading(false);
          return;
        }
      }

      // Update messaging visibility if changed
      if (visible !== (currentUser?.messagingVisible !== false)) {
        await updateMessagingVisibility(visible);
      }

      Alert.alert('Profile updated!', '', [{ text: 'OK', onPress: () => navigation.goBack() }]);
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.editHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 60 }} />
      </View>
      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 60 }} keyboardShouldPersistTaps="handled">
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

        {/* Username */}
        <View style={inputStyles.container}>
          <Text style={inputStyles.label}>Username</Text>
          <View style={styles.usernameRow}>
            <Text style={styles.atSign}>@</Text>
            <TextInput
              style={[inputStyles.input, { flex: 1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}
              value={username}
              onChangeText={v => { setUsername(v.toLowerCase().replace(/[^a-z0-9_]/g, '')); setUsernameStatus(null); }}
              placeholder="yourhandle"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={30}
              placeholderTextColor={Colors.textMuted}
            />
            {usernameStatus === 'ok'    && <Text style={{ marginLeft: 8, color: Colors.success }}>✓</Text>}
            {usernameStatus === 'error' && <Text style={{ marginLeft: 8, color: Colors.error }}>✗</Text>}
          </View>
          <Text style={styles.usernameHint}>
            Anyone who knows your @username can message you. Letters, numbers, underscores only.
          </Text>
        </View>

        {/* Messaging visibility */}
        <View style={styles.visibilityCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.visibilityTitle}>
              {visible ? '💬 Messaging On' : '🔇 Messaging Off'}
            </Text>
            <Text style={styles.visibilityDesc}>
              {visible
                ? 'Anyone can find and message you. You can also search and message others.'
                : 'You are hidden from search and cannot send or receive messages.'}
            </Text>
          </View>
          <Switch
            value={visible}
            onValueChange={setVisible}
            trackColor={{ true: Colors.primary, false: Colors.border }}
            thumbColor={Colors.surface}
          />
        </View>

        <Button title="Save Changes" onPress={handleSave} loading={loading} size="lg" style={{ marginTop: Spacing.md }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Reuse input styles from UI.js
const inputStyles = StyleSheet.create({
  container: { marginBottom: Spacing.md },
  label: { fontSize: Typography.sizes.sm, fontWeight: '500', color: Colors.textSecondary, marginBottom: 6 },
  input: {
    borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md,
    paddingHorizontal: Spacing.md, paddingVertical: 13,
    fontSize: Typography.sizes.md, color: Colors.textPrimary,
    backgroundColor: Colors.surface,
  },
});

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Spacing.md, paddingTop: Spacing.sm, paddingBottom: Spacing.md,
  },
  headerTitle: { fontSize: Typography.sizes.xxxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  editHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.md,
    borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },

  profileHero: {
    backgroundColor: Colors.surface, padding: Spacing.xl,
    alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },
  profileName:     { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginTop: Spacing.md },
  profileUsername: { fontSize: Typography.sizes.md, color: Colors.primary, fontWeight: '600', marginTop: 4 },
  setUsername:     { fontSize: Typography.sizes.sm, color: Colors.accent, marginTop: 4 },
  profileEmail:    { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 4 },
  profileBio:      { fontSize: Typography.sizes.md, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22 },

  statsRow:  { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.lg },
  statBox:   { flex: 1, backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, alignItems: 'center', ...Shadow.sm, gap: 4 },
  statValue: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  statLabel: { fontSize: Typography.sizes.xs, color: Colors.textMuted, textAlign: 'center' },

  progressCard:  { backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.lg, ...Shadow.sm },
  progressTitle: { fontSize: Typography.sizes.md, fontWeight: 'bold', color: Colors.textPrimary },
  progressSub:   { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  progressItem:  { marginBottom: Spacing.md },
  progressLabel: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '500' },
  progressValue: { fontSize: Typography.sizes.sm, fontWeight: 'bold', color: Colors.primary },
  progressBar:   { height: 8, backgroundColor: Colors.borderLight, borderRadius: 4, overflow: 'hidden' },
  progressFill:  { height: 8, borderRadius: 4 },
  progressHint:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: Spacing.sm, fontStyle: 'italic', lineHeight: 20 },

  guideCard:  { backgroundColor: Colors.tourGuideLight, borderRadius: Radius.lg, padding: Spacing.lg, alignItems: 'center', marginBottom: Spacing.lg, gap: 8 },
  guideTitle: { fontSize: Typography.sizes.xl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.tourGuide },
  guideSub:   { fontSize: Typography.sizes.md, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 },

  sectionTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.md },
  actionRow:    { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.md, padding: Spacing.md, gap: Spacing.md, ...Shadow.sm },
  actionLabel:  { flex: 1, fontSize: Typography.sizes.md, color: Colors.textPrimary, fontWeight: '500' },

  backRow:  { padding: Spacing.md },
  backText: { color: Colors.primary, fontSize: Typography.sizes.md },

  publicItiCard:  { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm },
  publicItiTitle: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  publicItiMeta:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  // Inbox
  newMsgBtn:     { backgroundColor: Colors.primary, paddingHorizontal: 14, paddingVertical: 8, borderRadius: Radius.full },
  newMsgBtnText: { color: '#fff', fontWeight: '700', fontSize: Typography.sizes.sm },

  searchModalHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  searchModalTitle:  { fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.textPrimary },
  searchBar:         { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, borderWidth: 1.5, borderColor: Colors.border, paddingHorizontal: Spacing.md, margin: Spacing.md },
  searchInput:       { flex: 1, fontSize: Typography.sizes.md, color: Colors.textPrimary, paddingVertical: 12 },
  searchHint:        { fontSize: Typography.sizes.xs, color: Colors.textMuted, paddingHorizontal: Spacing.md, marginBottom: Spacing.sm, lineHeight: 18 },

  userResult:      { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm },
  userResultName:  { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  userResultHandle:{ fontSize: Typography.sizes.sm, color: Colors.primary, marginTop: 2 },
  userResultMeta:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  convoCard:  { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm },
  convoName:  { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  convoHandle:{ fontSize: Typography.sizes.xs, color: Colors.primary },
  convoLast:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  unreadBadge:{ width: 22, height: 22, borderRadius: 11, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  unreadText: { fontSize: 11, color: Colors.textInverse, fontWeight: 'bold' },

  // Thread
  threadHeader: { flexDirection: 'row', alignItems: 'center', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, backgroundColor: Colors.surface },
  threadName:   { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  threadHandle: { fontSize: Typography.sizes.xs, color: Colors.primary },

  bubbleWrap: { marginBottom: 2 },
  bubble:     { maxWidth: '75%', borderRadius: Radius.lg, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  bubbleMe:   { alignSelf: 'flex-end', backgroundColor: Colors.primary, borderBottomRightRadius: 4 },
  bubbleThem: { alignSelf: 'flex-start', backgroundColor: Colors.surface, borderBottomLeftRadius: 4, ...Shadow.sm },
  bubbleText:   { fontSize: Typography.sizes.md, color: Colors.textPrimary, lineHeight: 21 },
  bubbleTextMe: { color: Colors.textInverse },
  bubbleTime:   { fontSize: 10, color: Colors.textMuted, marginTop: 2, paddingHorizontal: 4 },

  attachCard: {
    maxWidth: 260, borderWidth: 1.5, borderColor: Colors.border,
    borderRadius: Radius.lg, padding: Spacing.md, backgroundColor: Colors.surface,
    marginBottom: 2, ...Shadow.sm,
  },
  attachImage:     { width: 220, height: 160, borderRadius: Radius.md },
  attachCardLabel: { fontSize: Typography.sizes.xs, color: Colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },
  attachCardTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary },
  attachCardMeta:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  attachCardPrice: { fontSize: Typography.sizes.sm, color: Colors.primary, fontWeight: '700', marginTop: 4 },

  attachTray:      { backgroundColor: Colors.surface, borderTopWidth: 1, borderTopColor: Colors.borderLight, paddingVertical: Spacing.md },
  attachTrayTitle: { fontSize: Typography.sizes.xs, color: Colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, paddingHorizontal: Spacing.md, marginBottom: Spacing.sm },
  attachOption:    { width: 72, alignItems: 'center', gap: 6, paddingVertical: Spacing.sm, borderRadius: Radius.lg, backgroundColor: Colors.surfaceAlt },
  attachOptionLabel:{ fontSize: Typography.sizes.xs, color: Colors.textSecondary, fontWeight: '500' },

  inputBar: { flexDirection: 'row', alignItems: 'flex-end', padding: Spacing.md, gap: Spacing.sm, backgroundColor: Colors.surface, borderTopWidth: 1, borderTopColor: Colors.borderLight },
  attachBtn:{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.surfaceAlt, alignItems: 'center', justifyContent: 'center' },
  msgInput: { flex: 1, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg, paddingHorizontal: Spacing.md, paddingVertical: 10, fontSize: Typography.sizes.md, color: Colors.textPrimary, maxHeight: 100 },
  sendBtn:  { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },

  // Edit Profile
  usernameRow:  { flexDirection: 'row', alignItems: 'center' },
  atSign:       { backgroundColor: Colors.surfaceAlt, paddingHorizontal: 12, paddingVertical: 14, borderWidth: 1.5, borderRightWidth: 0, borderColor: Colors.border, borderTopLeftRadius: Radius.md, borderBottomLeftRadius: Radius.md, fontSize: Typography.sizes.md, color: Colors.textMuted },
  usernameHint: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 6, lineHeight: 18 },
  visibilityCard:{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: Spacing.md, borderWidth: 1.5, borderColor: Colors.borderLight, marginBottom: Spacing.md, gap: Spacing.md },
  visibilityTitle:{ fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary, marginBottom: 4 },
  visibilityDesc: { fontSize: Typography.sizes.sm, color: Colors.textMuted, lineHeight: 19 },
});
