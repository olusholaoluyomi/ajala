import React, { useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

const NOTIF_ICONS = {
  review:     '⭐',
  tourguide:  '🧭',
  message:    '💬',
  follow:     '🌍',
  like:       '❤️',
  system:     '📢',
};

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60)    return 'just now';
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function NotificationsScreen({ navigation }) {
  const { notifications, markNotifsRead } = useApp();

  useEffect(() => {
    // Mark all read when screen is opened
    markNotifsRead();
  }, []);

  const handlePress = (notif) => {
    if (notif.itineraryId) navigation.navigate('ItineraryDetail', { itineraryId: notif.itineraryId });
    else if (notif.placeId) navigation.navigate('PlaceDetail', { placeId: notif.placeId });
    else if (notif.userId) navigation.navigate('UserProfile', { userId: notif.userId });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <View style={{ width: 60 }} />
      </View>

      <FlatList
        data={notifications}
        keyExtractor={n => n.id}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 60 }}
        ListEmptyComponent={
          <EmptyState
            icon="🔔"
            title="No notifications yet"
            subtitle="When people review your itineraries, follow you, or message you — it'll show up here."
          />
        }
        renderItem={({ item: notif }) => (
          <TouchableOpacity
            style={[styles.notifCard, !notif.read && styles.notifUnread]}
            onPress={() => handlePress(notif)}
            activeOpacity={0.85}
          >
            <View style={styles.notifIconCircle}>
              <Text style={styles.notifIcon}>{NOTIF_ICONS[notif.type] || '📢'}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.notifTitle}>{notif.title}</Text>
              {notif.body ? <Text style={styles.notifBody}>{notif.body}</Text> : null}
              <Text style={styles.notifTime}>{timeAgo(notif.createdAt)}</Text>
            </View>
            {!notif.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: Spacing.sm }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.md, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.surface,
  },
  back: { color: Colors.primary, fontSize: Typography.sizes.md, width: 60 },
  title: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },

  notifCard: {
    flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md,
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, ...Shadow.sm,
  },
  notifUnread: {
    backgroundColor: Colors.primaryFaint,
    borderLeftWidth: 3, borderLeftColor: Colors.primary,
  },
  notifIconCircle: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: Colors.primaryFaint,
    alignItems: 'center', justifyContent: 'center',
  },
  notifIcon: { fontSize: 22 },
  notifTitle: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary, lineHeight: 20 },
  notifBody: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, marginTop: 2, lineHeight: 18 },
  notifTime: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 4 },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary, marginTop: 6 },
});
