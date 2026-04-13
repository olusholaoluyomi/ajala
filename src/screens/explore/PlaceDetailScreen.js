import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, Alert, TextInput, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaceById } from '../../data/worldData';
import { useApp } from '../../context/AppContext';
import { Button, StarRating, Avatar, RoleBadge, Badge, Divider, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

export function PlaceDetailScreen({ route, navigation }) {
  const { placeId } = route.params;
  const place = getPlaceById(placeId);
  const { getPlaceReviews, currentUser, itineraries } = useApp();

  const reviews = getPlaceReviews(placeId);
  const avgRating = reviews.length > 0
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : place?.rating || 0;

  // Itineraries that feature this place (public only)
  const featuredItineraries = itineraries.filter(
    i => i.visibility === 'public' && i.placeIds.includes(placeId)
  );

  if (!place) return null;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Hero */}
        <View style={styles.hero}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.heroBadge}>
            <Text style={styles.heroIcon}>{categoryIcon(place.category)}</Text>
          </View>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.placeLocation}>{place.countryFlag} {place.countryName} · {place.stateName}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 }}>
            <StarRating rating={avgRating} size={18} />
            <Text style={styles.ratingText}>{avgRating.toFixed(1)}</Text>
            <Text style={styles.reviewCount}>({reviews.length} reviews)</Text>
          </View>
        </View>

        <View style={{ padding: Spacing.md }}>
          {/* Description */}
          <Text style={styles.desc}>{place.description}</Text>

          {/* Tags */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: Spacing.lg }}>
            {place.tags.map(tag => <Badge key={tag} label={tag} />)}
          </View>

          {/* Rating breakdown */}
          {reviews.length > 0 && (
            <View style={styles.ratingBreakdown}>
              <Text style={styles.sectionTitle}>Rating Breakdown</Text>
              {[5, 4, 3, 2, 1].map(star => {
                const count = reviews.filter(r => Math.round(r.rating) === star).length;
                const pct = reviews.length > 0 ? count / reviews.length : 0;
                return (
                  <View key={star} style={styles.ratingRow}>
                    <Text style={styles.ratingLabel}>{'★'.repeat(star)}</Text>
                    <View style={styles.ratingBar}>
                      <View style={[styles.ratingBarFill, { width: `${pct * 100}%` }]} />
                    </View>
                    <Text style={styles.ratingCount}>{count}</Text>
                  </View>
                );
              })}
            </View>
          )}

          {/* Itineraries featuring this place */}
          {featuredItineraries.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Itineraries featuring this place</Text>
              {featuredItineraries.map(iti => (
                <TouchableOpacity
                  key={iti.id}
                  style={styles.itiCard}
                  onPress={() => navigation.navigate('ItineraryDetail', { itineraryId: iti.id })}
                  activeOpacity={0.85}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.itiTitle}>{iti.title}</Text>
                    <Text style={styles.itiMeta}>by {iti.creatorName} · {iti.placeIds.length} places · {iti.reviewCount} reviews</Text>
                  </View>
                  <Text style={{ fontSize: 20 }}>→</Text>
                </TouchableOpacity>
              ))}
              <Divider />
            </>
          )}

          {/* Reviews */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.md }}>
            <Text style={styles.sectionTitle}>Community Reviews</Text>
            {currentUser && (
              <TouchableOpacity onPress={() => navigation.navigate('AddReview', { placeId })} activeOpacity={0.8}>
                <Text style={{ color: Colors.primary, fontWeight: '600', fontSize: Typography.sizes.sm }}>+ Write Review</Text>
              </TouchableOpacity>
            )}
          </View>

          {reviews.length === 0 ? (
            <EmptyState
              icon="✍️"
              title="No reviews yet"
              subtitle="Be the first to share your experience at this place"
              action={currentUser ? "Write First Review" : undefined}
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

function ReviewCard({ review, navigation }) {
  const { likeReview, currentUser, getUserById } = useApp();
  const liked = review.likes?.includes(currentUser?.id);
  const reviewer = getUserById(review.authorId);

  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Avatar name={review.authorName} size={36} />
        <View style={{ flex: 1, marginLeft: Spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.reviewAuthor}>{review.authorName}</Text>
            {reviewer && <RoleBadge role={reviewer.role} />}
          </View>
          <Text style={styles.reviewDate}>{new Date(review.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
        </View>
        <StarRating rating={review.rating} size={14} />
      </View>

      <Text style={styles.reviewComment}>{review.comment}</Text>

      {review.photos && review.photos.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: Spacing.sm }} contentContainerStyle={{ gap: 6 }}>
          {review.photos.map((uri, i) => (
            <Image key={i} source={{ uri }} style={{ width: 90, height: 90, borderRadius: 8 }} />
          ))}
        </ScrollView>
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Spacing.sm }}>
        <TouchableOpacity
          style={styles.likeBtn}
          onPress={() => currentUser && likeReview(review.id)}
          activeOpacity={0.7}
        >
          <Text style={[styles.likeText, liked && { color: Colors.error }]}>
            {liked ? '❤️' : '🤍'} {review.likes?.length || 0} helpful
          </Text>
        </TouchableOpacity>

        {/* Sentiment */}
        <View style={[styles.sentimentBadge, { backgroundColor: review.rating >= 4 ? Colors.accentFaint : Colors.error + '15' }]}>
          <Text style={[styles.sentimentText, { color: review.rating >= 4 ? Colors.accent : Colors.error }]}>
            {review.rating >= 4 ? '👍 Positive' : review.rating >= 3 ? '😐 Mixed' : '👎 Negative'}
          </Text>
        </View>
      </View>
    </View>
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
  hero: {
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    paddingTop: Spacing.md,
    alignItems: 'center',
  },
  backBtn: { alignSelf: 'flex-start', marginBottom: Spacing.md },
  backText: { color: Colors.textInverse, fontSize: Typography.sizes.md, opacity: 0.9 },
  heroBadge: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.md,
  },
  heroIcon: { fontSize: 36 },
  placeName: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', color: Colors.textInverse, fontWeight: 'bold', textAlign: 'center' },
  placeLocation: { fontSize: Typography.sizes.sm, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  ratingText: { fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.textInverse },
  reviewCount: { fontSize: Typography.sizes.sm, color: 'rgba(255,255,255,0.7)' },

  desc: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 24, marginBottom: Spacing.md },

  sectionTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.md },

  ratingBreakdown: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.lg, ...Shadow.sm,
  },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  ratingLabel: { width: 50, fontSize: Typography.sizes.sm, color: Colors.star },
  ratingBar: { flex: 1, height: 8, backgroundColor: Colors.borderLight, borderRadius: 4, overflow: 'hidden' },
  ratingBarFill: { height: 8, backgroundColor: Colors.star, borderRadius: 4 },
  ratingCount: { width: 24, fontSize: Typography.sizes.sm, color: Colors.textMuted, textAlign: 'right' },

  itiCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm, ...Shadow.sm,
  },
  itiTitle: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  itiMeta: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },

  reviewCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    padding: Spacing.md, marginBottom: Spacing.md, ...Shadow.sm,
  },
  reviewHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: Spacing.sm },
  reviewAuthor: { fontSize: Typography.sizes.md, fontWeight: '600', color: Colors.textPrimary },
  reviewDate: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 2 },
  reviewComment: { fontSize: Typography.sizes.md, color: Colors.textSecondary, lineHeight: 22 },
  likeBtn: { flexDirection: 'row', alignItems: 'center' },
  likeText: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  sentimentBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  sentimentText: { fontSize: Typography.sizes.xs, fontWeight: '600' },
});
