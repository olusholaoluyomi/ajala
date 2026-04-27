import React, { useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  TextInput, ScrollView, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WORLD_DATA, CONTINENTS, searchPlaces } from '../../data/worldData';
import { Card, Badge, StarRating, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import { useApp } from '../../context/AppContext';
import { SubscriptionBanner, TrialPill } from '../payment/SubscriptionScreens';
import { getTrialStatus } from '../../utils/paystack';

// ── DARK DIAGONAL TEXTURE (shared with Auth/Onboarding) ──────────────────────
function DarkHeroPattern({ color = '#C1440E', opacity = 0.055 }) {
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

export function ExploreScreen({ navigation }) {
  const [query, setQuery]         = useState('');
  const [continent, setContinent] = useState('All');
  const { reviews, currentUser }  = useApp();

  const filtered = WORLD_DATA.filter(c =>
    (continent === 'All' || c.continent === continent) &&
    (query === '' || c.name.toLowerCase().includes(query.toLowerCase()))
  );
  const searchResults = query.length > 1 ? searchPlaces(query) : [];
  const getCountryReviewCount = (countryId) =>
    reviews.filter(r => r.placeId.startsWith(countryId)).length;

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  })();
  const firstName = currentUser?.name?.split(' ')[0] || 'Explorer';

  return (
    <SafeAreaView style={s.safe} edges={['top']}>

      {/* ── DARK HERO HEADER ── */}
      <View style={s.hero}>
        <DarkHeroPattern />
        <View style={s.heroTop}>
          <View>
            <Text style={s.heroGreeting}>{greeting}, {firstName} ✦</Text>
            <Text style={s.heroTitle}>Explore</Text>
          </View>
          <View style={s.heroBadge}>
            <Text style={{ fontSize: 22 }}>🌍</Text>
          </View>
        </View>

        {/* Floating search bar that overlaps the hero bottom */}
        <View style={s.searchCard}>
          <Text style={s.searchIcon}>🔍</Text>
          <TextInput
            style={s.searchInput}
            placeholder="Search countries, cities, places..."
            placeholderTextColor={Colors.textMuted}
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Text style={{ color: Colors.textMuted, fontSize: 17 }}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ── SUBSCRIPTION BANNERS ── */}
      <TrialPill onSubscribe={() => navigation.navigate('Paywall')} />
      {getTrialStatus(currentUser).expired && !getTrialStatus(currentUser).subscribed && (
        <SubscriptionBanner onSubscribe={() => navigation.navigate('Paywall')} />
      )}

      {/* ── SEARCH RESULTS ── */}
      {query.length > 1 && searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={i => i.id}
          contentContainerStyle={{ paddingHorizontal: Spacing.md, paddingTop: Spacing.md }}
          ListHeaderComponent={
            <Text style={s.sectionLabel}>{searchResults.length} places found</Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={s.searchResult}
              onPress={() => navigation.navigate('PlaceDetail', { placeId: item.id })}
              activeOpacity={0.8}
            >
              <View style={{ flex: 1 }}>
                <Text style={s.searchResultName}>{item.name}</Text>
                <Text style={s.searchResultSub}>{item.countryFlag} {item.countryName} · {item.stateName}</Text>
              </View>
              <Badge label={item.category} color={Colors.primaryFaint} textColor={Colors.primary} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={c => c.id}
          ListHeaderComponent={
            <View>
              {/* ── CONTINENT CHIPS ── */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={s.chipScroll}
                contentContainerStyle={{ paddingHorizontal: Spacing.md, gap: 8 }}
              >
                {CONTINENTS.map(con => (
                  <TouchableOpacity
                    key={con}
                    style={[s.chip, continent === con && s.chipActive]}
                    onPress={() => setContinent(con)}
                    activeOpacity={0.8}
                  >
                    <Text style={[s.chipText, continent === con && s.chipTextActive]}>
                      {continentEmoji(con)} {con}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Text style={s.sectionLabel}>
                {filtered.length} {continent === 'All' ? 'countries' : `countries in ${continent}`}
              </Text>
            </View>
          }
          contentContainerStyle={{ paddingHorizontal: Spacing.md, paddingBottom: 110 }}
          renderItem={({ item: country }) => (
            <CountryCard
              country={country}
              reviewCount={getCountryReviewCount(country.id)}
              onPress={() => navigation.navigate('CountryDetail', { countryId: country.id })}
            />
          )}
          ListEmptyComponent={<EmptyState icon="🗺️" title="No countries found" subtitle="Try a different filter" />}
        />
      )}
    </SafeAreaView>
  );
}

// ── PREMIUM COUNTRY CARD ─────────────────────────────────────────────────────
function CountryCard({ country, reviewCount, onPress }) {
  return (
    <TouchableOpacity style={s.countryCard} onPress={onPress} activeOpacity={0.88}>
      {/* Left accent stripe */}
      <View style={s.cardAccent} />

      <View style={s.cardBody}>
        {/* Left: text info */}
        <View style={{ flex: 1 }}>
          <Text style={s.countryName}>{country.name}</Text>
          <Text style={s.countryMeta}>
            {country.continent} · {country.states.length} regions ·{' '}
            {country.states.reduce((acc, st) => acc + st.places.length, 0)} places
          </Text>
          <Text style={s.countryDesc} numberOfLines={2}>{country.description}</Text>

          <View style={s.cardFooter}>
            <View style={s.reviewPill}>
              <Text style={s.reviewPillText}>⭐ {reviewCount} reviews</Text>
            </View>
          </View>
        </View>

        {/* Right: large flag in a warm circle */}
        <View style={s.flagCircle}>
          <Text style={s.flagEmoji}>{country.flag}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ── COUNTRY DETAIL ───────────────────────────────────────────────────────────
export function CountryDetailScreen({ route, navigation }) {
  const { countryId } = route.params;
  const country = WORLD_DATA.find(c => c.id === countryId);
  const [selectedState, setSelectedState] = useState(country?.states[0]?.id || null);
  const { reviews } = useApp();

  if (!country) return null;

  const currentState = country.states.find(st => st.id === selectedState);
  const getPlaceReviews = (placeId) => reviews.filter(r => r.placeId === placeId);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>

        {/* ── HERO ── */}
        <View style={s.countryHero}>
          <DarkHeroPattern color="#D4921C" opacity={0.07} />
          <TouchableOpacity style={s.backBtn} onPress={() => navigation.goBack()}>
            <View style={s.backBtnInner}>
              <Text style={s.backText}>← Back</Text>
            </View>
          </TouchableOpacity>
          <Text style={s.heroFlag}>{country.flag}</Text>
          <Text style={s.heroCountry}>{country.name}</Text>
          <Text style={s.heroDesc}>{country.description}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge label={country.continent}                      color="rgba(255,255,255,0.2)" textColor="#fff" />
            <Badge label={`${country.states.length} regions`}    color="rgba(255,255,255,0.2)" textColor="#fff" />
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          {/* ── REGION TABS ── */}
          <Text style={s.sectionLabel}>Regions</Text>
          <ScrollView
            horizontal showsHorizontalScrollIndicator={false}
            style={{ marginBottom: Spacing.md }}
            contentContainerStyle={{ gap: 8 }}
          >
            {country.states.map(state => (
              <TouchableOpacity
                key={state.id}
                style={[s.chip, selectedState === state.id && s.chipActive]}
                onPress={() => setSelectedState(state.id)}
                activeOpacity={0.8}
              >
                <Text style={[s.chipText, selectedState === state.id && s.chipTextActive]}>
                  {state.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* ── PLACES ── */}
          {currentState && (
            <>
              <Text style={s.sectionLabel}>
                {currentState.places.length} places in {currentState.name}
              </Text>
              {currentState.places.map(place => {
                const placeRevs = getPlaceReviews(place.id);
                const avgRating = placeRevs.length > 0
                  ? placeRevs.reduce((sum, r) => sum + r.rating, 0) / placeRevs.length
                  : place.rating;
                return (
                  <TouchableOpacity
                    key={place.id}
                    style={s.placeCard}
                    onPress={() => navigation.navigate('PlaceDetail', { placeId: place.id })}
                    activeOpacity={0.85}
                  >
                    <View style={s.placeCardContent}>
                      <View style={s.categoryCircle}>
                        <Text style={s.categoryIcon}>{categoryIcon(place.category)}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={s.placeName}>{place.name}</Text>
                        <Text style={s.placeDesc} numberOfLines={2}>{place.description}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 }}>
                          <StarRating rating={avgRating} size={13} />
                          <Text style={s.placeMeta}>{avgRating.toFixed(1)} · {placeRevs.length} reviews</Text>
                        </View>
                        <ScrollView
                          horizontal showsHorizontalScrollIndicator={false}
                          style={{ marginTop: 7 }}
                          contentContainerStyle={{ gap: 4 }}
                        >
                          {place.tags.map(tag => (
                            <Badge key={tag} label={tag} color={Colors.primaryFaint} textColor={Colors.primary} />
                          ))}
                        </ScrollView>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>

      {/* ── FAB ROW ── */}
      <View style={s.fabRow}>
        <TouchableOpacity
          style={[s.fab, s.fabSuggest]}
          onPress={() => navigation.navigate('SubmitLocation', {
            countryId: country.id,
            countryName: country.name,
            stateId: currentState?.id,
            stateName: currentState?.name,
          })}
          activeOpacity={0.9}
        >
          <Text style={s.fabTextSuggest}>📍 Suggest Place</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.fab, { flex: 2 }]}
          onPress={() => navigation.navigate('CreateItinerary', { countryId })}
          activeOpacity={0.9}
        >
          <Text style={s.fabText}>+ Plan Itinerary</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ── HELPERS ──────────────────────────────────────────────────────────────────
function categoryIcon(cat) {
  const map = {
    Nature: '🌿', Culture: '🏛️', History: '📜', Beach: '🏖️',
    Wildlife: '🦁', Adventure: '⛰️', Food: '🍽️', Art: '🎨',
    Shopping: '🛍️', Landmark: '📍', Architecture: '🏗️', Experience: '✨',
    Spiritual: '🕌', 'Food & Wine': '🍷',
  };
  return map[cat] || '📌';
}
function continentEmoji(con) {
  const map = {
    All: '🌐', Africa: '🌍', Europe: '🏰', Asia: '🏯',
    Americas: '🗽', Oceania: '🦘', 'Middle East': '🕌',
  };
  return map[con] || '🌐';
}

// ── STYLES ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },

  // Hero
  hero: {
    backgroundColor: Colors.darkWarm,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xxl + 10,  // extra so search card can overlap
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    overflow: 'hidden',
    ...Shadow.md,
  },
  heroTop: {
    flexDirection: 'row', alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  heroGreeting: { fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.5, marginBottom: 4 },
  heroTitle:    { fontSize: 34, fontFamily: 'Georgia', fontWeight: '800', color: '#FFFFFF' },
  heroBadge: {
    width: 46, height: 46, borderRadius: 23,
    backgroundColor: 'rgba(212,146,28,0.18)',
    borderWidth: 1, borderColor: 'rgba(212,146,28,0.35)',
    alignItems: 'center', justifyContent: 'center',
  },

  // Floating search card overlapping hero bottom
  searchCard: {
    position: 'absolute',
    bottom: -22,
    left: Spacing.md, right: Spacing.md,
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    borderWidth: 1, borderColor: Colors.borderLight,
    ...Shadow.lg,
  },
  searchIcon:  { fontSize: 16, marginRight: 8, color: Colors.textMuted },
  searchInput: {
    flex: 1,
    fontSize: Typography.sizes.md,
    color: Colors.textPrimary,
    paddingVertical: 14,
  },

  chipScroll: { marginTop: Spacing.xxl + 4, marginBottom: Spacing.sm },
  chip: {
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: Radius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1.5, borderColor: Colors.border,
  },
  chipActive:     { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText:       { fontSize: 13, color: Colors.textSecondary, fontWeight: '600' },
  chipTextActive: { color: '#FFFFFF' },

  sectionLabel: {
    fontSize: Typography.sizes.sm, color: Colors.textMuted,
    marginBottom: Spacing.sm, fontWeight: '600',
    paddingHorizontal: 2,
    letterSpacing: 0.3,
  },

  // Country card
  countryCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    overflow: 'hidden',
    ...Shadow.md,
  },
  cardAccent: {
    width: 4,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: Radius.lg,
    borderBottomLeftRadius: Radius.lg,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    gap: Spacing.md,
  },
  countryName: {
    fontSize: Typography.sizes.lg, fontWeight: '700',
    color: Colors.textPrimary, fontFamily: 'Georgia', marginBottom: 2,
  },
  countryMeta: { fontSize: 11, color: Colors.textMuted, marginBottom: 4 },
  countryDesc: { fontSize: 13, color: Colors.textSecondary, lineHeight: 18 },
  cardFooter:  { marginTop: 8, flexDirection: 'row', alignItems: 'center' },
  reviewPill: {
    backgroundColor: Colors.primaryFaint,
    borderRadius: Radius.full, paddingHorizontal: 8, paddingVertical: 3,
  },
  reviewPillText: { fontSize: 11, color: Colors.primary, fontWeight: '600' },
  flagCircle: {
    width: 62, height: 62, borderRadius: 31,
    backgroundColor: Colors.primaryFaint,
    borderWidth: 2, borderColor: Colors.borderLight,
    alignItems: 'center', justifyContent: 'center',
    ...Shadow.sm,
  },
  flagEmoji: { fontSize: 34 },

  searchResult: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  searchResultName: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  searchResultSub:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  // Country detail hero
  countryHero: {
    backgroundColor: Colors.darkWarm,
    padding: Spacing.xl, paddingTop: Spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    ...Shadow.md,
  },
  backBtn: { alignSelf: 'flex-start', marginBottom: Spacing.md },
  backBtnInner: {
    paddingHorizontal: 14, paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.full,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.18)',
  },
  backText:    { color: '#FFFFFF', fontSize: 13, fontWeight: '500' },
  heroFlag:    { fontSize: 64, marginBottom: Spacing.sm },
  heroCountry: { fontSize: 30, fontFamily: 'Georgia', color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' },
  heroDesc:    { fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: 8, lineHeight: 22 },

  // Place card
  placeCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  placeCardContent: { flexDirection: 'row', padding: Spacing.md, gap: Spacing.md, alignItems: 'flex-start' },
  categoryCircle: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: Colors.primaryFaint,
    alignItems: 'center', justifyContent: 'center',
    ...Shadow.sm,
  },
  categoryIcon: { fontSize: 24 },
  placeName:    { fontSize: 15, fontWeight: '700', color: Colors.textPrimary },
  placeDesc:    { fontSize: 13, color: Colors.textSecondary, marginTop: 3, lineHeight: 19 },
  placeMeta:    { fontSize: 11, color: Colors.textMuted },

  fabRow: {
    position: 'absolute', bottom: 24, right: Spacing.md, left: Spacing.md,
    flexDirection: 'row', gap: 10,
  },
  fab: {
    flex: 1, backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 16, alignItems: 'center',
    ...Shadow.lg,
  },
  fabSuggest: { backgroundColor: Colors.accent },
  fabText:       { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  fabTextSuggest:{ color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
});
