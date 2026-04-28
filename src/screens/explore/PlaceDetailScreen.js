import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, Alert, TextInput, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaceById } from '../../data/worldData';
import { useApp } from '../../context/AppContext';
import { Button, StarRating, Avatar, RoleBadge, Badge, Divider, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

// ── DECORATIVE BACKGROUND ─────────────────────────────────────────────────────
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

export function PlaceDetailScreen({ route, navigation }) {
  const { placeId } = route.params;
  const place = getPlaceById(placeId);
  const { getPlaceReviews, currentUser, itineraries } = useApp();

  const reviews = getPlaceReviews(placeId);
  const avgRating = reviews.length > 0
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : place?.rating || 0;

  const featuredItineraries = itineraries.filter(
    i => i.visibility === 'public' && i.placeIds.includes(placeId)
  );

  if (!place) return null;

  const catColor = categoryColor(place.category);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>

        {/* ── HERO ── */}
        <View style={styles.hero}>
          <DarkHeroPattern color={catColor} opacity={0.05} />

          {/* Glass back button */}
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <View style={styles.backBtnInner}>
              <Text style={styles.backText}>← Back</Text>
            </View>
          </TouchableOpacity>

          {/* Category badge */}
          <View style={[styles.heroBadge, { borderColor: `${catColor}60`, backgroundColor: `${catColor}20` }]}>
            <Text style={styles.heroIcon}>{categoryIcon(place.category)}</Text>
          </View>

          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.placeLocation}>{place.countryFlag} {place.countryName} · {place.stateName}</Text>

          {/* Rating row */}
          <View style={styles.ratingRow}>
            <StarRating rating={avgRating} size={18} />
            <Text style={styles.ratingNum}>{avgRating.toFixed(1)}</Text>
            <Text style={styles.reviewCountText}>({reviews.length} review{reviews.length !== 1 ? 's' : ''})</Text>
          </View>

          {/* Category badge pill */}
          <View style={styles.catPill}>
            <Text style={[styles.catPillText, { color: catColor }]}>{place.category}</Text>
          </View>
        </View>

        <View style={styles.body}>

          {/* Description */}
          <Text style={styles.desc}>{place.description}</Text>

          {/* Tags */}
          <View style={styles.tagsRow}>
            {place.tags.map(tag => (
              <Badge key={tag} label={tag} color={Colors.primaryFaint} textColor={Colors.primary} />
            ))}
          </View>

          {/* Rating breakdown */}
          {reviews.length > 0 && (
            <View style={styles.ratingBreakdown}>
              <Text style={styles.sectionTitle}>Ratings</Text>
              {[5, 4, 3, 2, 1].map(star => {
                const count = reviews.filter(r => Math.round(r.rating) === star).length;
                const pct   = reviews.length > 0 ? count / reviews.length : 0;
                return (
                  <View key={star} style={styles.ratingBarRow}>
                    <Text style={styles.ratingStarLabel}>{star}★</Text>
                    <View style={styles.barTrack}>
                      <View style={[styles.barFill, { width: `${pct * 100}%` }]} />
                    </View>
                    <Text style={styles.barCount}>{count}</Text>
                  </View>
                );
              })}
            </View>
          )}

          {/* Itineraries featuring this place */}
          {featuredItineraries.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>
                Featured in {featuredItineraries.length} itinerar{featuredItineraries.length !== 1 ? 'ies' : 'y'}
              </Text>
              {featuredItineraries.map(iti => (
                <TouchableOpacity
                  key={iti.id}
                  style={styles.itiCard}
                  onPress={() => navigation.navigate('ItineraryDetail', { itineraryId: iti.id })}
                  activeOpacity={0.85}
                >
                  <View style={styles.itiAccent} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.itiTitle}>{iti.title}</Text>
                    <Text style={styles.itiMeta}>
                      by {iti.creatorName} · {iti.placeIds.length} places · {iti.reviewCount || 0} reviews
                    </Text>
                  </View>
                  <Text style={{ color: Colors.primary, fontSize: 20 }}>→</Text>
                </TouchableOpacity>
              ))}
              <Divider />
            </>
          )}

          {/* Community Reviews */}
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>Community Reviews</Text>
            {currentUser && (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddReview', { placeId })}
                activeOpacity={0.8}
              >
                <Text style={styles.writeReviewBtn}>+ Write Review</Text>
              </TouchableOpacity>
            )}
          </View>

          {reviews.length === 0 ? (
            <EmptyState
              icon="✍️"
              title="No reviews yet"
              subtitle="Be the first to share your experience at this place"
              action={currentUser ? 'Write First Review' : undefined}
              onAction={() => navigation.navigate('AddReview', { placeId })}
            />
          ) : (
            reviews.map(review => (
              <ReviewCard key={review.id} review={review} navigation={navigation} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── REVIEW CARD ───────────────────────────────────────────────────────────────
function ReviewCard({ review, navigation }) {
  const { likeReview, currentUser, getUserById } = useApp();
  const liked    = review.likes?.includes(currentUser?.id);
  const reviewer = getUserById(review.authorId);

  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Avatar name={review.authorName} size={38} />
        <View style={{ flex: 1, marginLeft: Spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.reviewAuthor}>{review.authorName}</Text>
            {reviewer && <RoleBadge role={reviewer.role} />}
          </View>
          <Text style={styles.reviewDate}>
            {new Date(review.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </Text>
        </View>
        <StarRating rating={review.rating} size={14} />
      </View>

      <Text style={styles.reviewComment}>{review.comment}</Text>

      {review.photos?.length > 0 && (
        <ScrollView
          horizontal showsHorizontalScrollIndicator={false}
          style={{ marginTop: Spacing.sm }}
          contentContainerStyle={{ gap: 6 }}
        >
          {review.photos.map((uri, i) => (
            <Image key={i} source={{ uri }} style={{ width: 90, height: 90, borderRadius: Radius.md }} />
          ))}
        </ScrollView>
      )}

      <View style={styles.reviewFooter}>
        <TouchableOpacity
          style={styles.likeBtn}
          onPress={() => currentUser && likeReview(review.id)}
          activeOpacity={0.7}
        >
          <Text style={[styles.likeText, liked && { color: Colors.error }]}>
            {liked ? '❤️' : '🤍'} {review.likes?.length || 0} helpful
          </Text>
        </TouchableOpacity>

        <View style={[
          styles.sentimentBadge,
          { backgroundColor: review.rating >= 4 ? Colors.accentFaint : Colors.error + '18' },
        ]}>
          <Text style={[
            styles.sentimentText,
            { color: review.rating >= 4 ? Colors.accent : Colors.error },
          ]}>
            {review.rating >= 4 ? '👍 Positive' : review.rating >= 3 ? '😐 Mixed' : '👎 Negative'}
          </Text>
        </View>
      </View>
    </View>
  );
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function categoryIcon(cat) {
  const map = {
    Nature: '🌿', Culture: '🏛️', History: '📜', Beach: '🏖️',
    Wildlife: '🦁', Adventure: '⛰️', Food: '🍽️', Art: '🎨',
    Shopping: '🛍️', Landmark: '📍', Architecture: '🏗️', Experience: '✨',
    Spiritual: '🕌', 'Food & Wine': '🍷',
  };
  return map[cat] || '📌';
}

function categoryColor(cat) {
  const map = {
    Nature: '#2D6A4F', Culture: '#8B3A0E', History: '#6B4226',
    Beach: '#0077B6', Wildlife: '#6B4226', Adventure: '#8B3A0E',
    Food: '#C05A1A', Art: '#7B2D8B', Shopping: '#C05A1A',
    Landmark: '#C05A1A', Architecture: '#6B4226', Experience: '#D4921C',
    Spiritual: '#2C3E6B', 'Food & Wine': '#8B0000',
  };
  return map[cat] || Colors.primary;
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },

  hero: {
    backgroundColor: Colors.darkWarm,
    padding: Spacing.xl, paddingTop: Spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
    ...Shadow.md,
  },
  backBtn: { alignSelf: 'flex-start', marginBottom: Spacing.lg },
  backBtnInner: {
    paddingHorizontal: 14, paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.full,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.18)',
  },
  backText: { color: '#FFFFFF', fontSize: 13, fontWeight: '500' },

  heroBadge: {
    width: 80, height: 80, borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.md, ...Shadow.md,
  },
  heroIcon: { fontSize: 40 },

  placeName: {
    fontSize: 26, fontFamily: 'Georgia', fontWeight: '800',
    color: '#FFFFFF', textAlign: 'center', marginBottom: 6,
  },
  placeLocation: { fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 10 },

  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  ratingNum: { fontSize: 18, fontWeight: '800', color: '#FFFFFF' },
  reviewCountText: { fontSize: 13, color: 'rgba(255,255,255,0.6)' },

  catPill: {
    paddingHorizontal: 14, paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.full,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.18)',
  },
  catPillText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },

  body: { padding: Spacing.md, paddingTop: Spacing.lg },

  desc: { fontSize: 15, color: Colors.textSecondary, lineHeight: 24, marginBottom: Spacing.md },

  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: Spacing.lg },

  sectionTitle: {
    fontSize: 17, fontFamily: 'Georgia', fontWeight: '700',
    color: Colors.textPrimary, marginBottom: Spacing.md,
  },

  ratingBreakdown: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.lg, ...Shadow.sm,
  },
  ratingBarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  ratingStarLabel: { width: 22, fontSize: 12, color: Colors.gold, fontWeight: '700', textAlign: 'right' },
  barTrack: { flex: 1, height: 8, backgroundColor: Colors.borderLight, borderRadius: 4, overflow: 'hidden' },
  barFill:  { height: 8, backgroundColor: Colors.gold, borderRadius: 4 },
  barCount: { width: 20, fontSize: 12, color: Colors.textMuted, textAlign: 'right' },

  itiCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    marginBottom: Spacing.sm, overflow: 'hidden', ...Shadow.sm,
  },
  itiAccent: { width: 4, alignSelf: 'stretch', backgroundColor: Colors.accent },
  itiTitle:  { fontSize: 14, fontWeight: '600', color: Colors.textPrimary, padding: Spacing.md, paddingRight: 0, paddingBottom: 2 },
  itiMeta:   { fontSize: 12, color: Colors.textMuted, paddingHorizontal: Spacing.md, paddingBottom: Spacing.md },

  reviewsHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: Spacing.md,
  },
  writeReviewBtn: { color: Colors.primary, fontWeight: '600', fontSize: 13 },

  reviewCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.md, ...Shadow.sm,
  },
  reviewHeader:  { flexDirection: 'row', alignItems: 'flex-start', marginBottom: Spacing.sm },
  reviewAuthor:  { fontSize: 14, fontWeight: '700', color: Colors.textPrimary },
  reviewDate:    { fontSize: 11, color: Colors.textMuted, marginTop: 2 },
  reviewComment: { fontSize: 14, color: Colors.textSecondary, lineHeight: 22 },
  reviewFooter:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Spacing.sm },
  likeBtn:       { flexDirection: 'row', alignItems: 'center' },
  likeText:      { fontSize: 13, color: Colors.textMuted },
  sentimentBadge:{ paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  sentimentText: { fontSize: 11, fontWeight: '700' },
});
