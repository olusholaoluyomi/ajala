import React, { useMemo } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { useApp } from '../../context/AppContext';
import { Avatar } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import { getCountryById } from '../../data/worldData';

// ── ATTACH PICKER ─────────────────────────────────────────────────────────────
// Shows the user's trips or itineraries so they can share one in a message.
// Params:
//   type     — 'trip' | 'itinerary'
//   onSelect — function(item) called with the selected item; screen then goes back
export function AttachPickerScreen({ navigation, route }) {
  const { type, onSelect } = route.params;
  const { currentUser, trips, getUserItineraries } = useApp();

  const items = useMemo(() => {
    if (type === 'trip') {
      return trips.filter(t => t.guideId === currentUser?.id);
    }
    // itinerary — show user's own public itineraries
    const mine = getUserItineraries(currentUser?.id || '');
    return mine.filter(i => i.visibility === 'public');
  }, [type, trips, currentUser]);

  const handleSelect = (item) => {
    onSelect?.(item);
    navigation.goBack();
  };

  const title = type === 'trip' ? 'Share a Trip' : 'Share an Itinerary';
  const emptyMsg = type === 'trip'
    ? "You haven't created any trips yet."
    : "You have no public itineraries to share.";

  return (
    <SafeAreaView style={s.safe}>
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={s.backBtn}>
          <Text style={s.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>{title}</Text>
        <View style={{ width: 64 }} />
      </View>

      {items.length === 0 ? (
        <View style={s.empty}>
          <Text style={s.emptyIcon}>{type === 'trip' ? '🧭' : '🗺️'}</Text>
          <Text style={s.emptyText}>{emptyMsg}</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={i => i.id}
          contentContainerStyle={{ padding: Spacing.md, gap: Spacing.sm }}
          renderItem={({ item }) => (
            <TouchableOpacity style={s.card} onPress={() => handleSelect(item)} activeOpacity={0.8}>
              <ItemCard item={item} type={type} />
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

function ItemCard({ item, type }) {
  const country = getCountryById(item.countryId);
  const flag    = country?.flag || '🌍';
  const name    = country?.name || '';

  if (type === 'trip') {
    const price = item.price != null ? `$${Number(item.price).toLocaleString()} USD` : '';
    return (
      <View style={s.cardInner}>
        <Text style={s.cardIcon}>{flag}</Text>
        <View style={s.cardBody}>
          <Text style={s.cardTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={s.cardMeta}>{name}{item.durationDays ? ` · ${item.durationDays} days` : ''}</Text>
          {!!price && <Text style={s.cardPrice}>{price} per person</Text>}
        </View>
        <Text style={s.cardArrow}>→</Text>
      </View>
    );
  }

  // itinerary
  const places = item.placeIds?.length || 0;
  return (
    <View style={s.cardInner}>
      <Text style={s.cardIcon}>{flag}</Text>
      <View style={s.cardBody}>
        <Text style={s.cardTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={s.cardMeta}>{name}{places ? ` · ${places} places` : ''}</Text>
        {item.avgRating > 0 && (
          <Text style={s.cardMeta}>⭐ {Number(item.avgRating).toFixed(1)}</Text>
        )}
      </View>
      <Text style={s.cardArrow}>→</Text>
    </View>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EBE3',
  },
  backBtn: { padding: 4 },
  backText: { color: Colors.primary, fontSize: Typography.sizes.sm, fontWeight: Typography.weights.semibold },
  headerTitle: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimary,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    padding: Spacing.xl,
  },
  emptyIcon: { fontSize: 48 },
  emptyText: { fontSize: Typography.sizes.sm, color: Colors.textMuted, textAlign: 'center' },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    ...Shadow.sm,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  cardIcon: { fontSize: 36 },
  cardBody: { flex: 1, gap: 2 },
  cardTitle: { fontSize: Typography.sizes.sm, fontWeight: Typography.weights.semibold, color: Colors.text },
  cardMeta:  { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  cardPrice: { fontSize: Typography.sizes.xs, fontWeight: Typography.weights.semibold, color: Colors.primary },
  cardArrow: { fontSize: 18, color: Colors.primary },
});
