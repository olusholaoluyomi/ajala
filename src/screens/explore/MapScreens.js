import React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaceById, getCountryById } from '../../data/worldData';
import { useApp } from '../../context/AppContext';
import { StarRating, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

// Note: Full map view (react-native-maps) requires a native build via EAS.
// This screen shows all stops in a clean list — works in Expo Go today.

function catIcon(cat) {
  const m = { Nature:'🌿',Culture:'🏛️',History:'📜',Beach:'🏖️',Wildlife:'🦁',Adventure:'⛰️',Food:'🍽️',Art:'🎨',Shopping:'🛍️',Landmark:'📍',Architecture:'🏗️',Experience:'✨',Spiritual:'🕌','Food & Wine':'🍷',Wellness:'💆' };
  return m[cat] || '📌';
}

export function ItineraryMapScreen({ route, navigation }) {
  const { itineraryId } = route.params;
  const { getItineraryById, getPlaceReviews } = useApp();
  const iti = getItineraryById(itineraryId);

  if (!iti) return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <EmptyState icon="❓" title="Itinerary not found" />
    </SafeAreaView>
  );

  const country = getCountryById(iti.countryId);
  const places = (iti.placeIds || []).map(pid => getPlaceById(pid)).filter(Boolean);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={s.title} numberOfLines={1}>{iti.title}</Text>
          <Text style={s.sub}>{country?.flag} {places.length} stops</Text>
        </View>
        <View style={{ width: 60 }} />
      </View>

      <View style={s.banner}>
        <Text style={{ fontSize: 32 }}>🗺️</Text>
        <View style={{ flex: 1, marginLeft: Spacing.md }}>
          <Text style={s.bannerTitle}>All Trip Stops</Text>
          <Text style={s.bannerSub}>Full map available in native build · EAS Build</Text>
        </View>
      </View>

      <FlatList
        data={places}
        keyExtractor={p => p.id}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 80 }}
        ListEmptyComponent={<EmptyState icon="📍" title="No places mapped" subtitle="Add places to your itinerary" />}
        renderItem={({ item: place, index }) => {
          const revs = getPlaceReviews(place.id);
          const avg = revs.length > 0 ? revs.reduce((s, r) => s + r.rating, 0) / revs.length : place.rating;
          return (
            <TouchableOpacity
              style={s.card}
              onPress={() => navigation.navigate('PlaceDetail', { placeId: place.id })}
              activeOpacity={0.85}
            >
              <View style={s.num}><Text style={s.numText}>{index + 1}</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={s.icon}>{catIcon(place.category)}</Text>
                <Text style={s.placeName}>{place.name}</Text>
                <Text style={s.placeMeta}>{place.stateName} · {place.category}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <StarRating rating={avg} size={12} />
                  <Text style={s.ratingText}>{avg.toFixed(1)} · {revs.length} reviews</Text>
                </View>
              </View>
              <Text style={{ color: Colors.primary, fontSize: 18 }}>→</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

export function CountryMapScreen({ route, navigation }) {
  const { countryId } = route.params;
  const country = getCountryById(countryId);
  if (!country) return null;

  const allPlaces = country.states.flatMap(st => st.places.map(p => ({ ...p, stateName: st.name })));

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.back}>← Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={s.title}>{country.flag} {country.name}</Text>
          <Text style={s.sub}>{allPlaces.length} places</Text>
        </View>
        <View style={{ width: 60 }} />
      </View>

      <View style={s.banner}>
        <Text style={{ fontSize: 32 }}>{country.flag}</Text>
        <View style={{ flex: 1, marginLeft: Spacing.md }}>
          <Text style={s.bannerTitle}>All Places in {country.name}</Text>
          <Text style={s.bannerSub}>Tap any place for details and reviews</Text>
        </View>
      </View>

      <FlatList
        data={allPlaces}
        keyExtractor={p => p.id}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 60 }}
        renderItem={({ item: place }) => (
          <TouchableOpacity
            style={s.card}
            onPress={() => navigation.navigate('PlaceDetail', { placeId: place.id })}
            activeOpacity={0.85}
          >
            <Text style={{ fontSize: 28, marginRight: Spacing.md }}>{catIcon(place.category)}</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.placeName}>{place.name}</Text>
              <Text style={s.placeMeta}>{place.stateName} · {place.category}</Text>
            </View>
            <Text style={{ color: Colors.primary, fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: Spacing.md, paddingVertical: 14,
    backgroundColor: Colors.surface, borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },
  back: { color: Colors.primary, fontSize: Typography.sizes.md, width: 60 },
  title: { fontSize: Typography.sizes.md, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  sub: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 2 },
  banner: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.primaryFaint, margin: Spacing.md,
    borderRadius: Radius.lg, padding: Spacing.md,
    borderWidth: 1.5, borderColor: Colors.border, borderStyle: 'dashed',
  },
  bannerTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary },
  bannerSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  num: { width: 32, height: 32, borderRadius: 16, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: Spacing.md },
  numText: { color: Colors.textInverse, fontSize: 13, fontWeight: 'bold' },
  icon: { fontSize: 20, marginBottom: 2 },
  placeName: { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary },
  placeMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  ratingText: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
});
