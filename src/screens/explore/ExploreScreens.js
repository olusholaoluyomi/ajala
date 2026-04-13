import React, { useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  TextInput, ScrollView, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WORLD_DATA, CONTINENTS, searchPlaces } from '../../data/worldData';
import { Card, Badge, StarRating, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import { useApp } from '../../context/AppContext';
import { SubscriptionBanner, TrialPill } from '../payment/SubscriptionScreens';
import { getTrialStatus } from '../../utils/paystack';

export function ExploreScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const { reviews, currentUser } = useApp();

  const filtered = WORLD_DATA.filter(c =>
    (continent === 'All' || c.continent === continent) &&
    (query === '' || c.name.toLowerCase().includes(query.toLowerCase()))
  );

  const searchResults = query.length > 1 ? searchPlaces(query) : [];

  const getCountryReviewCount = (countryId) =>
    reviews.filter(r => r.placeId.startsWith(countryId)).length;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Explore</Text>
          <Text style={styles.headerSub}>Where do you want to go?</Text>
        </View>
        <Text style={{ fontSize: 28 }}>🌍</Text>
      </View>

      {/* Subscription status */}
      <TrialPill onSubscribe={() => navigation.navigate('Paywall')} />
      {getTrialStatus(currentUser).expired && !getTrialStatus(currentUser).subscribed && (
        <SubscriptionBanner onSubscribe={() => navigation.navigate('Paywall')} />
      )}

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search countries, cities, places..."
          placeholderTextColor={Colors.textMuted}
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Text style={{ color: Colors.textMuted, fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Search Results */}
      {query.length > 1 && searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={i => i.id}
          contentContainerStyle={{ padding: Spacing.md }}
          ListHeaderComponent={<Text style={styles.sectionLabel}>{searchResults.length} places found</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.searchResult}
              onPress={() => navigation.navigate('PlaceDetail', { placeId: item.id })}
              activeOpacity={0.8}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.searchResultName}>{item.name}</Text>
                <Text style={styles.searchResultSub}>{item.countryFlag} {item.countryName} · {item.stateName}</Text>
              </View>
              <Badge label={item.category} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={c => c.id}
          ListHeaderComponent={
            <View>
              {/* Continent filter */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.continentScroll} contentContainerStyle={{ paddingHorizontal: Spacing.md, gap: 8 }}>
                {CONTINENTS.map(con => (
                  <TouchableOpacity
                    key={con}
                    style={[styles.chip, continent === con && styles.chipActive]}
                    onPress={() => setContinent(con)}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.chipText, continent === con && styles.chipTextActive]}>{con}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Text style={[styles.sectionLabel, { paddingHorizontal: Spacing.md }]}>
                {filtered.length} countries
              </Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item: country }) => (
            <TouchableOpacity
              style={styles.countryCard}
              onPress={() => navigation.navigate('CountryDetail', { countryId: country.id })}
              activeOpacity={0.88}
            >
              <View style={styles.countryCardInner}>
                <View style={styles.flagCircle}>
                  <Text style={styles.flag}>{country.flag}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.countryName}>{country.name}</Text>
                  <Text style={styles.countryMeta}>
                    {country.continent} · {country.states.length} regions · {country.states.reduce((s, st) => s + st.places.length, 0)} places
                  </Text>
                  <Text style={styles.countryDesc} numberOfLines={1}>{country.description}</Text>
                </View>
                <View style={styles.reviewPill}>
                  <Text style={styles.reviewPillText}>{getCountryReviewCount(country.id)} reviews</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<EmptyState icon="🗺️" title="No countries found" subtitle="Try a different filter" />}
        />
      )}
    </SafeAreaView>
  );
}

export function CountryDetailScreen({ route, navigation }) {
  const { countryId } = route.params;
  const country = WORLD_DATA.find(c => c.id === countryId);
  const [selectedState, setSelectedState] = useState(country?.states[0]?.id || null);
  const { reviews } = useApp();

  if (!country) return null;

  const currentState = country.states.find(s => s.id === selectedState);

  const getPlaceReviews = (placeId) => reviews.filter(r => r.placeId === placeId);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Hero */}
        <View style={styles.countryHero}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.heroFlag}>{country.flag}</Text>
          <Text style={styles.heroCountry}>{country.name}</Text>
          <Text style={styles.heroDesc}>{country.description}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge label={country.continent} color="rgba(255,255,255,0.25)" textColor="white" />
            <Badge label={`${country.states.length} regions`} color="rgba(255,255,255,0.25)" textColor="white" />
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          {/* State tabs */}
          <Text style={styles.sectionLabel}>Regions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: Spacing.md }} contentContainerStyle={{ gap: 8 }}>
            {country.states.map(state => (
              <TouchableOpacity
                key={state.id}
                style={[styles.chip, selectedState === state.id && styles.chipActive]}
                onPress={() => setSelectedState(state.id)}
                activeOpacity={0.8}
              >
                <Text style={[styles.chipText, selectedState === state.id && styles.chipTextActive]}>{state.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Places */}
          {currentState && (
            <>
              <Text style={styles.sectionLabel}>{currentState.places.length} places in {currentState.name}</Text>
              {currentState.places.map(place => {
                const placeRevs = getPlaceReviews(place.id);
                const avgRating = placeRevs.length > 0
                  ? placeRevs.reduce((s, r) => s + r.rating, 0) / placeRevs.length
                  : place.rating;
                return (
                  <TouchableOpacity
                    key={place.id}
                    style={styles.placeCard}
                    onPress={() => navigation.navigate('PlaceDetail', { placeId: place.id })}
                    activeOpacity={0.85}
                  >
                    <View style={styles.placeCardContent}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.placeName}>{place.name}</Text>
                        <Text style={styles.placeDesc} numberOfLines={2}>{place.description}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 }}>
                          <StarRating rating={avgRating} size={12} />
                          <Text style={styles.placeMeta}>{avgRating.toFixed(1)} · {placeRevs.length} reviews</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 6 }} contentContainerStyle={{ gap: 4 }}>
                          {place.tags.map(tag => (
                            <Badge key={tag} label={tag} style={{ marginRight: 2 }} />
                          ))}
                        </ScrollView>
                      </View>
                      <View style={styles.categoryCircle}>
                        <Text style={styles.categoryIcon}>{categoryIcon(place.category)}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>

      {/* FAB Row */}
      <View style={styles.fabRow}>
        <TouchableOpacity
          style={[styles.fab, styles.fabSuggest]}
          onPress={() => navigation.navigate('SubmitLocation', {
            countryId: country.id,
            countryName: country.name,
            stateId: currentState?.id,
            stateName: currentState?.name,
          })}
          activeOpacity={0.9}
        >
          <Text style={styles.fabTextSuggest}>📍 Missing a place?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.fab, { flex: 2 }]}
          onPress={() => navigation.navigate('CreateItinerary', { countryId })}
          activeOpacity={0.9}
        >
          <Text style={styles.fabText}>+ Plan Itinerary</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
    paddingHorizontal: Spacing.md, paddingTop: Spacing.sm, paddingBottom: Spacing.md,
  },
  headerTitle: { fontSize: Typography.sizes.xxxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  headerSub: { fontSize: Typography.sizes.md, color: Colors.textMuted, marginTop: 2 },

  searchBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg, borderWidth: 1, borderColor: Colors.border,
    paddingHorizontal: Spacing.md, marginHorizontal: Spacing.md, marginBottom: Spacing.md,
    ...Shadow.sm,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: Typography.sizes.md, color: Colors.textPrimary, paddingVertical: 12 },

  continentScroll: { marginBottom: Spacing.sm },
  chip: {
    paddingHorizontal: Spacing.md, paddingVertical: 8,
    borderRadius: Radius.full, backgroundColor: Colors.surface,
    borderWidth: 1.5, borderColor: Colors.border,
  },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: Typography.weights.medium },
  chipTextActive: { color: Colors.textInverse },

  sectionLabel: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginBottom: Spacing.sm, fontWeight: Typography.weights.medium },

  communityBanner: {
    flexDirection: 'row', alignItems: 'center',
    marginHorizontal: Spacing.md, marginBottom: Spacing.md,
    backgroundColor: Colors.primary,
    borderRadius: Radius.xl, padding: Spacing.md,
    ...Shadow.md,
  },
  communityBannerTitle: { fontSize: Typography.sizes.md, fontWeight: '700', color: '#fff', marginBottom: 2 },
  communityBannerSub:   { fontSize: Typography.sizes.sm, color: 'rgba(255,255,255,0.8)' },

  countryCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg, marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
    ...Shadow.sm,
  },
  countryCardInner: { flexDirection: 'row', padding: Spacing.md, alignItems: 'center', gap: Spacing.md },
  flagCircle: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: Colors.primaryFaint,
    alignItems: 'center', justifyContent: 'center',
  },
  flag: { fontSize: 28 },
  countryName: { fontSize: Typography.sizes.lg, fontWeight: Typography.weights.bold, color: Colors.textPrimary, fontFamily: 'Georgia' },
  countryMeta: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 2 },
  countryDesc: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, marginTop: 3 },
  reviewPill: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.full, paddingHorizontal: 8, paddingVertical: 4 },
  reviewPillText: { fontSize: 10, color: Colors.primary, fontWeight: '600' },

  searchResult: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  searchResultName: { fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold, color: Colors.textPrimary },
  searchResultSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  // Country detail
  countryHero: {
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    paddingTop: Spacing.md,
    alignItems: 'center',
  },
  backBtn: { alignSelf: 'flex-start', marginBottom: Spacing.md },
  backText: { color: Colors.textInverse, fontSize: Typography.sizes.md, opacity: 0.9 },
  heroFlag: { fontSize: 60, marginBottom: Spacing.sm },
  heroCountry: { fontSize: Typography.sizes.xxxl, fontFamily: 'Georgia', color: Colors.textInverse, fontWeight: 'bold' },
  heroDesc: { fontSize: Typography.sizes.md, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22 },

  placeCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    marginBottom: Spacing.sm, ...Shadow.sm,
  },
  placeCardContent: { flexDirection: 'row', padding: Spacing.md, gap: Spacing.md, alignItems: 'flex-start' },
  placeName: { fontSize: Typography.sizes.md, fontWeight: Typography.weights.bold, color: Colors.textPrimary },
  placeDesc: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, marginTop: 3, lineHeight: 19 },
  placeMeta: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  categoryCircle: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: Colors.primaryFaint, alignItems: 'center', justifyContent: 'center',
  },
  categoryIcon: { fontSize: 22 },

  fabRow: {
    position: 'absolute', bottom: 24, right: 20, left: 20,
    flexDirection: 'row', gap: 10,
  },
  fab: {
    flex: 1, backgroundColor: Colors.primary, borderRadius: Radius.full,
    paddingVertical: 15, alignItems: 'center',
    ...Shadow.lg,
  },
  fabSuggest: {
    backgroundColor: Colors.accent, borderWidth: 0,
  },
  fabText: { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: Typography.weights.bold },
  fabTextSuggest: { color: '#fff', fontSize: Typography.sizes.sm, fontWeight: Typography.weights.bold },
});
