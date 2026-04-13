import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Alert, TextInput, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { getPlaceById } from '../../data/worldData';
import { Button, StarRating, Badge } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import { pickPhotos, takePhoto, showPhotoSource } from '../../utils/photoUtils';
import { sendLocalNotification, NotifTemplates } from '../../utils/notifications';

const MAX_PHOTOS = 4;

export function AddReviewScreen({ route, navigation }) {
  const { itineraryId, placeId: prefillPlaceId } = route.params || {};
  const { addReview, getItineraryById, getUserById } = useApp();
  const iti = itineraryId ? getItineraryById(itineraryId) : null;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedPlaceId, setSelectedPlaceId] = useState(prefillPlaceId || '');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const availablePlaces = iti
    ? iti.placeIds.map(pid => getPlaceById(pid)).filter(Boolean)
    : prefillPlaceId ? [getPlaceById(prefillPlaceId)].filter(Boolean) : [];

  const selectedPlace = selectedPlaceId ? getPlaceById(selectedPlaceId) : null;

  const sentimentColor = rating === 0 ? Colors.textMuted : rating >= 4 ? Colors.accent : rating >= 3 ? Colors.warning : Colors.error;
  const sentimentLabel = rating === 0 ? 'Tap a star to rate' : rating === 1 ? '😔 Terrible' : rating === 2 ? '😞 Poor' : rating === 3 ? '😐 Average' : rating === 4 ? '😊 Good' : '🤩 Amazing!';

  const addPhotosHandler = async (fromCamera) => {
    if (photos.length >= MAX_PHOTOS) { Alert.alert('Photo limit', `Max ${MAX_PHOTOS} photos.`); return; }
    if (fromCamera) {
      const uri = await takePhoto();
      if (uri) setPhotos(prev => [...prev, uri].slice(0, MAX_PHOTOS));
    } else {
      const uris = await pickPhotos(photos.length);
      if (uris.length) setPhotos(prev => [...prev, ...uris].slice(0, MAX_PHOTOS));
    }
  };

  const handleAddPhoto = () => showPhotoSource(() => addPhotosHandler(false), () => addPhotosHandler(true));
  const removePhoto = (i) => setPhotos(prev => prev.filter((_, idx) => idx !== i));

  const handleSubmit = async () => {
    if (rating === 0) { Alert.alert('Rating required', 'Please give a star rating'); return; }
    if (!comment.trim()) { Alert.alert('Review required', 'Please write about your experience'); return; }
    setLoading(true);
    try {
      await addReview({ itineraryId: itineraryId || null, placeId: selectedPlaceId || prefillPlaceId || null, comment, rating, photos });
      if (iti) await sendLocalNotification(NotifTemplates.newReview('A traveller', iti.title));
      Alert.alert(rating >= 4 ? '🌟 Great Review!' : '📝 Review Posted!',
        rating >= 4 ? 'Thanks for sharing! The community loves it.' : 'Thanks for your honest feedback!',
        [{ text: 'OK', onPress: () => navigation.goBack() }]);
    } catch (e) { Alert.alert('Error', e.message); } finally { setLoading(false); }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Write a Review</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {iti && (
          <View style={styles.contextCard}>
            <Text style={styles.contextLabel}>Reviewing itinerary</Text>
            <Text style={styles.contextTitle}>{iti.title}</Text>
          </View>
        )}
        {selectedPlace && (
          <View style={[styles.contextCard, { backgroundColor: Colors.accentFaint, borderLeftColor: Colors.accent }]}>
            <Text style={[styles.contextLabel, { color: Colors.accent }]}>Place</Text>
            <Text style={styles.contextTitle}>{selectedPlace.name}</Text>
            <Text style={styles.contextSub}>{selectedPlace.stateName} · {selectedPlace.countryName}</Text>
          </View>
        )}

        {availablePlaces.length > 1 && !prefillPlaceId && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Which place?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingBottom: 4 }}>
              <TouchableOpacity style={[styles.placeChip, !selectedPlaceId && styles.placeChipActive]} onPress={() => setSelectedPlaceId('')}>
                <Text style={[styles.placeChipText, !selectedPlaceId && styles.placeChipTextActive]}>Overall Trip</Text>
              </TouchableOpacity>
              {availablePlaces.map(p => (
                <TouchableOpacity key={p.id} style={[styles.placeChip, selectedPlaceId === p.id && styles.placeChipActive]} onPress={() => setSelectedPlaceId(prev => prev === p.id ? '' : p.id)}>
                  <Text style={[styles.placeChipText, selectedPlaceId === p.id && styles.placeChipTextActive]}>{p.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Your Rating *</Text>
          <View style={styles.ratingBox}>
            <StarRating rating={rating} size={48} onRate={setRating} readonly={false} />
            <Text style={[styles.sentimentLabel, { color: sentimentColor }]}>{sentimentLabel}</Text>
            {rating > 0 && (
              <View style={[styles.sentimentPill, { backgroundColor: rating >= 4 ? Colors.accentFaint : rating >= 3 ? Colors.warning + '20' : Colors.error + '15' }]}>
                <Text style={[styles.sentimentPillText, { color: sentimentColor }]}>
                  {rating >= 4 ? '👍 Positive' : rating >= 3 ? '😐 Mixed' : '👎 Negative'}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Your Experience *</Text>
          <TextInput
            style={styles.textarea} value={comment} onChangeText={setComment}
            placeholder="Share the details of your visit. What did you love? Tips for other travellers?"
            placeholderTextColor={Colors.textMuted} multiline numberOfLines={5}
            textAlignVertical="top" maxLength={1000}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
            <Text style={styles.charHint}>Be specific and helpful</Text>
            <Text style={[styles.charCount, comment.length > 900 && { color: Colors.error }]}>{comment.length}/1000</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.photoHeader}>
            <Text style={styles.sectionLabel}>Photos ({photos.length}/{MAX_PHOTOS})</Text>
            {photos.length < MAX_PHOTOS && (
              <TouchableOpacity style={styles.addPhotoBtn} onPress={handleAddPhoto} activeOpacity={0.8}>
                <Text style={styles.addPhotoBtnText}>+ Add Photo</Text>
              </TouchableOpacity>
            )}
          </View>

          {photos.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
              {photos.map((uri, index) => (
                <View key={index} style={styles.photoThumb}>
                  <Image source={{ uri }} style={styles.photoImage} />
                  <TouchableOpacity style={styles.removePhotoBtn} onPress={() => removePhoto(index)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Text style={styles.removePhotoBtnText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
              {photos.length < MAX_PHOTOS && (
                <TouchableOpacity style={styles.addPhotoThumb} onPress={handleAddPhoto} activeOpacity={0.8}>
                  <Text style={{ fontSize: 28 }}>📷</Text>
                  <Text style={styles.addPhotoThumbText}>Add More</Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          ) : (
            <TouchableOpacity style={styles.photoPlaceholder} onPress={handleAddPhoto} activeOpacity={0.8}>
              <Text style={{ fontSize: 36 }}>📷</Text>
              <Text style={styles.photoPlaceholderTitle}>Add photos of your visit</Text>
              <Text style={styles.photoPlaceholderSub}>Up to {MAX_PHOTOS} photos · Library or Camera</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>💡 Great review tips</Text>
          <Text style={styles.tipItem}>• Be specific — what made it special or disappointing?</Text>
          <Text style={styles.tipItem}>• Best time to visit, costs, crowd levels</Text>
          <Text style={styles.tipItem}>• Honest reviews help real travellers make decisions</Text>
        </View>

        <Button
          title={loading ? 'Posting…' : `Post Review${photos.length > 0 ? ` · ${photos.length} photo${photos.length > 1 ? 's' : ''}` : ''} 🌟`}
          onPress={handleSubmit} loading={loading}
          disabled={rating === 0 || comment.trim().length < 5}
          size="lg" style={{ marginTop: Spacing.lg }}
        />
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, backgroundColor: Colors.surface },
  close: { fontSize: 20, color: Colors.textSecondary, fontWeight: '600' },
  title: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  container: { padding: Spacing.md },
  contextCard: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.md, borderLeftWidth: 3, borderLeftColor: Colors.primary },
  contextLabel: { fontSize: 10, color: Colors.primary, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 3 },
  contextTitle: { fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.textPrimary, fontFamily: 'Georgia' },
  contextSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  section: { marginBottom: Spacing.xl },
  sectionLabel: { fontSize: 11, fontWeight: '700', color: Colors.textSecondary, marginBottom: Spacing.sm, textTransform: 'uppercase', letterSpacing: 0.5 },
  placeChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: Radius.full, backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border },
  placeChipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  placeChipText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '500' },
  placeChipTextActive: { color: Colors.textInverse, fontWeight: '600' },
  ratingBox: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.xl, alignItems: 'center', gap: 12, ...Shadow.sm },
  sentimentLabel: { fontSize: Typography.sizes.md, fontWeight: '600' },
  sentimentPill: { paddingHorizontal: 16, paddingVertical: 6, borderRadius: Radius.full, marginTop: 4 },
  sentimentPillText: { fontSize: Typography.sizes.sm, fontWeight: '700' },
  textarea: { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg, padding: Spacing.md, fontSize: Typography.sizes.md, color: Colors.textPrimary, minHeight: 130, lineHeight: 22, textAlignVertical: 'top' },
  charHint: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  charCount: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  photoHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Spacing.sm },
  addPhotoBtn: { backgroundColor: Colors.primaryFaint, paddingHorizontal: 12, paddingVertical: 6, borderRadius: Radius.full },
  addPhotoBtnText: { color: Colors.primary, fontSize: Typography.sizes.sm, fontWeight: '600' },
  photoThumb: { width: 100, height: 100, borderRadius: Radius.md, overflow: 'hidden', position: 'relative' },
  photoImage: { width: 100, height: 100 },
  removePhotoBtn: { position: 'absolute', top: 4, right: 4, backgroundColor: 'rgba(0,0,0,0.65)', width: 22, height: 22, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  removePhotoBtnText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  addPhotoThumb: { width: 100, height: 100, borderRadius: Radius.md, backgroundColor: Colors.surface, borderWidth: 2, borderColor: Colors.borderLight, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', gap: 4 },
  addPhotoThumbText: { fontSize: Typography.sizes.xs, color: Colors.textMuted },
  photoPlaceholder: { backgroundColor: Colors.surface, borderRadius: Radius.xl, borderWidth: 2, borderColor: Colors.borderLight, borderStyle: 'dashed', paddingVertical: Spacing.xl, alignItems: 'center', gap: 8 },
  photoPlaceholderTitle: { fontSize: Typography.sizes.md, color: Colors.textSecondary, fontWeight: '600' },
  photoPlaceholderSub: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  tipsCard: { backgroundColor: Colors.accentFaint, borderRadius: Radius.lg, padding: Spacing.md, gap: 4 },
  tipsTitle: { fontSize: Typography.sizes.sm, fontWeight: '700', color: Colors.accent, marginBottom: 4 },
  tipItem: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 22 },
});
