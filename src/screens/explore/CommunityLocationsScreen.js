import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, Alert, Share, FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';
import { WORLD_DATA } from '../../data/worldData';
import { Button, Badge, EmptyState } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';

const CATEGORIES = ['Nature', 'Culture', 'History', 'Beach', 'Wildlife', 'Adventure', 'Food', 'Art', 'Shopping', 'Landmark'];

// ── SUBMIT LOCATION ───────────────────────────────────────────────────────────
export function SubmitLocationScreen({ navigation }) {
  const { submitLocation } = useApp();
  const [name, setName]           = useState('');
  const [description, setDesc]    = useState('');
  const [category, setCategory]   = useState('');
  const [tagsText, setTagsText]   = useState('');
  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId]     = useState('');
  const [loading, setLoading]     = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showState,   setShowState]   = useState(false);

  const selectedCountry = WORLD_DATA.find(c => c.id === countryId);
  const selectedState   = selectedCountry?.states.find(s => s.id === stateId);

  const handleSubmit = async () => {
    if (!name.trim())        { Alert.alert('Name required'); return; }
    if (!description.trim()) { Alert.alert('Description required'); return; }
    if (!category)           { Alert.alert('Pick a category'); return; }
    if (!countryId)          { Alert.alert('Pick a country'); return; }
    setLoading(true);
    try {
      const tags = tagsText.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
      const loc = await submitLocation({
        countryId,
        countryName: selectedCountry.name,
        stateId: stateId || null,
        stateName: selectedState?.name || '',
        name: name.trim(),
        description: description.trim(),
        category,
        tags,
      });
      Alert.alert(
        '📍 Location Submitted!',
        `"${loc.name}" needs 5 community confirmations to go live. Share the link below with friends who have visited this place!`,
        [
          {
            text: 'Share Confirmation Link',
            onPress: () => shareLocation(loc.id, loc.name),
          },
          { text: 'Done', onPress: () => navigation.goBack() },
        ]
      );
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20, color: Colors.textSecondary }}>✕</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Add a Location</Text>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md, paddingBottom: 120 }} keyboardShouldPersistTaps="handled">
        <View style={s.infoBox}>
          <Text style={s.infoIcon}>💡</Text>
          <Text style={s.infoText}>
            Know a hidden gem? Submit it here. Once 5 Ajala users confirm it exists, it goes live on the map for everyone to discover!
          </Text>
        </View>

        <Text style={s.label}>Location Name *</Text>
        <TextInput
          style={s.input}
          value={name}
          onChangeText={setName}
          placeholder="e.g. Agboville Waterfall"
          placeholderTextColor={Colors.textMuted}
        />

        <Text style={s.label}>Description *</Text>
        <TextInput
          style={[s.input, { minHeight: 80, textAlignVertical: 'top' }]}
          value={description}
          onChangeText={setDesc}
          placeholder="What makes this place special?"
          placeholderTextColor={Colors.textMuted}
          multiline
        />

        <Text style={s.label}>Country *</Text>
        <TouchableOpacity style={s.picker} onPress={() => setShowCountry(!showCountry)}>
          <Text style={countryId ? s.pickerValue : s.pickerPlaceholder}>
            {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : 'Select country...'}
          </Text>
          <Text style={{ color: Colors.textMuted }}>▾</Text>
        </TouchableOpacity>
        {showCountry && (
          <View style={s.dropdown}>
            <ScrollView style={{ maxHeight: 220 }} nestedScrollEnabled>
              {WORLD_DATA.map(c => (
                <TouchableOpacity key={c.id} style={s.dropdownItem} onPress={() => {
                  setCountryId(c.id);
                  setStateId('');
                  setShowCountry(false);
                }}>
                  <Text style={s.dropdownText}>{c.flag} {c.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {selectedCountry && (
          <>
            <Text style={s.label}>Region / State</Text>
            <TouchableOpacity style={s.picker} onPress={() => setShowState(!showState)}>
              <Text style={stateId ? s.pickerValue : s.pickerPlaceholder}>
                {selectedState ? selectedState.name : 'Select region (optional)...'}
              </Text>
              <Text style={{ color: Colors.textMuted }}>▾</Text>
            </TouchableOpacity>
            {showState && (
              <View style={s.dropdown}>
                <ScrollView style={{ maxHeight: 180 }} nestedScrollEnabled>
                  <TouchableOpacity style={s.dropdownItem} onPress={() => { setStateId(''); setShowState(false); }}>
                    <Text style={[s.dropdownText, { color: Colors.textMuted }]}>None (country-level)</Text>
                  </TouchableOpacity>
                  {selectedCountry.states.map(st => (
                    <TouchableOpacity key={st.id} style={s.dropdownItem} onPress={() => { setStateId(st.id); setShowState(false); }}>
                      <Text style={s.dropdownText}>{st.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </>
        )}

        <Text style={s.label}>Category *</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: Spacing.md }}>
          {CATEGORIES.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[s.catChip, category === cat && s.catChipActive]}
              onPress={() => setCategory(cat)}
            >
              <Text style={[s.catChipText, category === cat && s.catChipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={s.label}>Tags (comma-separated)</Text>
        <TextInput
          style={s.input}
          value={tagsText}
          onChangeText={setTagsText}
          placeholder="e.g. hiking, waterfall, scenic"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
        />

        <Button title="📍 Submit Location" onPress={handleSubmit} loading={loading} style={{ marginTop: Spacing.lg }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ── COMMUNITY LOCATIONS LIST ──────────────────────────────────────────────────
export function CommunityLocationsScreen({ navigation, route }) {
  const { pendingLocations, confirmLocation, currentUser } = useApp();
  const [tab, setTab] = useState(route.params?.tab || 'discover');

  const discover  = pendingLocations.filter(l => l.status === 'pending' && l.submittedBy !== currentUser?.id);
  const approved  = pendingLocations.filter(l => l.status === 'approved');
  const mine      = pendingLocations.filter(l => l.submittedBy === currentUser?.id);

  const list = tab === 'discover' ? discover : tab === 'approved' ? approved : mine;

  const handleConfirm = async (loc) => {
    if (loc.submittedBy === currentUser?.id) {
      Alert.alert("Can't confirm", "You can't confirm your own submission.");
      return;
    }
    if ((loc.confirmedBy || []).includes(currentUser?.id)) {
      Alert.alert('Already confirmed', "You've already confirmed this location.");
      return;
    }
    try {
      await confirmLocation(loc.id);
      Alert.alert('✅ Confirmed!', `You confirmed "${loc.name}". ${5 - ((loc.confirmCount || 0) + 1)} more confirmations needed to go live.`);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const handleShare = (loc) => shareLocation(loc.id, loc.name);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20, color: Colors.textSecondary }}>←</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Community Places</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SubmitLocation')}>
          <Text style={{ color: Colors.primary, fontWeight: '700', fontSize: Typography.sizes.md }}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <View style={s.tabs}>
        {[
          { key: 'discover', label: `Discover (${discover.length})` },
          { key: 'approved', label: `✅ Live (${approved.length})` },
          { key: 'mine',     label: `Mine (${mine.length})` },
        ].map(t => (
          <TouchableOpacity key={t.key} style={[s.tab, tab === t.key && s.tabActive]} onPress={() => setTab(t.key)}>
            <Text style={[s.tabText, tab === t.key && s.tabTextActive]}>{t.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={list}
        keyExtractor={l => l.id}
        contentContainerStyle={{ padding: Spacing.md, paddingBottom: 120 }}
        ListEmptyComponent={
          <EmptyState
            icon={tab === 'mine' ? '📍' : '🌍'}
            title={tab === 'mine' ? 'No submissions yet' : tab === 'approved' ? 'No approved places yet' : 'Nothing to confirm yet'}
            subtitle={tab === 'mine' ? 'Tap + Add to submit a hidden gem' : 'Come back soon!'}
          />
        }
        renderItem={({ item }) => (
          <PendingLocationCard
            loc={item}
            currentUserId={currentUser?.id}
            onConfirm={() => handleConfirm(item)}
            onShare={() => handleShare(item)}
            tab={tab}
          />
        )}
      />
    </SafeAreaView>
  );
}

function PendingLocationCard({ loc, currentUserId, onConfirm, onShare, tab }) {
  const confirmed = (loc.confirmedBy || []).includes(currentUserId);
  const isOwn     = loc.submittedBy === currentUserId;
  const progress  = Math.min((loc.confirmCount || 0) / 5, 1);

  return (
    <View style={s.card}>
      <View style={s.cardTop}>
        <View style={{ flex: 1 }}>
          <Text style={s.cardName}>{loc.name}</Text>
          <Text style={s.cardMeta}>
            {loc.countryName}{loc.stateName ? ` · ${loc.stateName}` : ''} · {loc.category}
          </Text>
          <Text style={s.cardDesc} numberOfLines={2}>{loc.description}</Text>
          {(loc.tags || []).length > 0 && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>
              {loc.tags.slice(0, 3).map(t => (
                <Badge key={t} label={t} />
              ))}
            </View>
          )}
        </View>
        <View style={s.confirmBadge}>
          <Text style={s.confirmCount}>{loc.confirmCount || 0}</Text>
          <Text style={s.confirmLabel}>/ 5</Text>
        </View>
      </View>

      {loc.status === 'pending' && (
        <>
          <View style={s.progressBar}>
            <View style={[s.progressFill, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={s.progressLabel}>{loc.confirmCount || 0} of 5 confirmations · Submitted by {loc.submitterName}</Text>
        </>
      )}

      {loc.status === 'approved' && (
        <View style={s.approvedBanner}>
          <Text style={s.approvedText}>✅ Live on Ajala!</Text>
        </View>
      )}

      <View style={s.cardActions}>
        <TouchableOpacity style={s.shareBtn} onPress={onShare}>
          <Text style={s.shareBtnText}>🔗 Share</Text>
        </TouchableOpacity>
        {!isOwn && loc.status === 'pending' && (
          <TouchableOpacity
            style={[s.confirmBtn, confirmed && s.confirmBtnDone]}
            onPress={onConfirm}
            disabled={confirmed}
          >
            <Text style={[s.confirmBtnText, confirmed && { color: Colors.textMuted }]}>
              {confirmed ? '✓ Confirmed' : '✋ I know this place'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function shareLocation(locationId, name) {
  Share.share({
    title: `Confirm "${name}" on Ajala`,
    message: `I just discovered "${name}" and added it to Ajala — the travel app! Have you been there? Open the link to confirm it exists and help it go live on the app.\n\najala://confirm-location/${locationId}\n\n(Don't have Ajala? Download it and join the explorer community!)`,
  });
}

const s = StyleSheet.create({
  safe:       { flex: 1, backgroundColor: Colors.background },
  header:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight, backgroundColor: Colors.surface },
  headerTitle:{ fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.textPrimary, fontFamily: 'Georgia' },
  infoBox:    { flexDirection: 'row', backgroundColor: Colors.primaryFaint, borderRadius: Radius.lg, padding: Spacing.md, marginBottom: Spacing.lg, gap: Spacing.sm, alignItems: 'flex-start' },
  infoIcon:   { fontSize: 20 },
  infoText:   { flex: 1, fontSize: Typography.sizes.sm, color: Colors.primaryDark, lineHeight: 20 },
  label:      { fontSize: 11, fontWeight: '700', color: Colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6, marginTop: Spacing.md },
  input:      { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: Spacing.md, paddingVertical: 12, fontSize: Typography.sizes.md, color: Colors.textPrimary, marginBottom: 4 },
  picker:     { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, paddingHorizontal: Spacing.md, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  pickerValue:{ fontSize: Typography.sizes.md, color: Colors.textPrimary },
  pickerPlaceholder: { fontSize: Typography.sizes.md, color: Colors.textMuted },
  dropdown:   { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md, marginBottom: Spacing.sm, ...Shadow.sm },
  dropdownItem:{ paddingHorizontal: Spacing.md, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  dropdownText:{ fontSize: Typography.sizes.md, color: Colors.textPrimary },
  catChip:    { paddingHorizontal: 14, paddingVertical: 8, borderRadius: Radius.full, backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.border, marginRight: 8 },
  catChipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  catChipText:   { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '500' },
  catChipTextActive: { color: Colors.textInverse, fontWeight: '600' },
  tabs:       { flexDirection: 'row', backgroundColor: Colors.surface, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  tab:        { flex: 1, paddingVertical: Spacing.md, alignItems: 'center' },
  tabActive:  { borderBottomWidth: 2, borderBottomColor: Colors.primary },
  tabText:    { fontSize: Typography.sizes.sm, color: Colors.textMuted, fontWeight: '500' },
  tabTextActive: { color: Colors.primary, fontWeight: '700' },
  card:       { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md, marginBottom: Spacing.md, ...Shadow.sm },
  cardTop:    { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.sm },
  cardName:   { fontSize: Typography.sizes.md, fontWeight: '700', color: Colors.textPrimary, marginBottom: 2 },
  cardMeta:   { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginBottom: 4 },
  cardDesc:   { fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 18 },
  confirmBadge: { alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 26, backgroundColor: Colors.primaryFaint, borderWidth: 2, borderColor: Colors.primary },
  confirmCount: { fontSize: Typography.sizes.lg, fontWeight: 'bold', color: Colors.primary },
  confirmLabel: { fontSize: 9, color: Colors.primaryLight, fontWeight: '600' },
  progressBar:  { height: 4, backgroundColor: Colors.borderLight, borderRadius: 2, marginTop: Spacing.sm, marginBottom: 4 },
  progressFill: { height: 4, backgroundColor: Colors.primary, borderRadius: 2 },
  progressLabel:{ fontSize: Typography.sizes.xs, color: Colors.textMuted },
  approvedBanner: { backgroundColor: Colors.primaryFaint, borderRadius: Radius.sm, paddingHorizontal: Spacing.md, paddingVertical: 6, marginTop: Spacing.sm },
  approvedText:   { fontSize: Typography.sizes.sm, color: Colors.primaryDark, fontWeight: '700', textAlign: 'center' },
  cardActions:  { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.md },
  shareBtn:     { flex: 1, paddingVertical: 10, borderRadius: Radius.md, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center' },
  shareBtnText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '600' },
  confirmBtn:   { flex: 2, paddingVertical: 10, borderRadius: Radius.md, backgroundColor: Colors.primary, alignItems: 'center' },
  confirmBtnDone: { backgroundColor: Colors.borderLight },
  confirmBtnText: { fontSize: Typography.sizes.sm, color: Colors.textInverse, fontWeight: '700' },
});
