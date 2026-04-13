import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Alert, Modal, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paystack } from 'react-native-paystack-webview';
import { useApp } from '../../context/AppContext';
import { Button, Avatar } from '../../components/UI';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../utils/theme';
import {
  PAYSTACK_PUBLIC_KEY, calcSubscription,
  generateRef, getTrialStatus, TRIAL_DAYS,
} from '../../utils/paystack';

const { width } = Dimensions.get('window');

// ── SUBSCRIPTION GATE BANNER (shown inside screens when trial expired) ──────
export function SubscriptionBanner({ onSubscribe }) {
  return (
    <View style={bannerStyles.container}>
      <Text style={bannerStyles.icon}>🔒</Text>
      <View style={{ flex: 1 }}>
        <Text style={bannerStyles.title}>Your free trial has ended</Text>
        <Text style={bannerStyles.sub}>Subscribe to keep exploring Ajala</Text>
      </View>
      <TouchableOpacity style={bannerStyles.btn} onPress={onSubscribe} activeOpacity={0.85}>
        <Text style={bannerStyles.btnText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
}

const bannerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.primary, padding: Spacing.md,
    gap: Spacing.sm,
  },
  icon: { fontSize: 22 },
  title: { fontSize: Typography.sizes.sm, fontWeight: '700', color: '#fff' },
  sub: { fontSize: Typography.sizes.xs, color: 'rgba(255,255,255,0.8)', marginTop: 1 },
  btn: { backgroundColor: '#fff', paddingHorizontal: 14, paddingVertical: 7, borderRadius: Radius.full },
  btnText: { color: Colors.primary, fontWeight: '700', fontSize: Typography.sizes.sm },
});

// ── TRIAL COUNTDOWN PILL (shown on home when trial is active) ───────────────
export function TrialPill({ onSubscribe }) {
  const { currentUser } = useApp();
  const trial = getTrialStatus(currentUser);
  if (trial.subscribed || !trial.active) return null;

  return (
    <TouchableOpacity style={pillStyles.container} onPress={onSubscribe} activeOpacity={0.85}>
      <Text style={pillStyles.text}>
        🎁 {trial.daysLeft} day{trial.daysLeft !== 1 ? 's' : ''} left in free trial · Subscribe now
      </Text>
    </TouchableOpacity>
  );
}

const pillStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accentFaint, borderRadius: Radius.full,
    paddingHorizontal: Spacing.md, paddingVertical: 7,
    marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1, borderColor: Colors.accent,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  text: { fontSize: Typography.sizes.sm, color: Colors.accent, fontWeight: '600' },
});

// ── PAYWALL SCREEN (full-screen block when trial expired) ────────────────────
export function PaywallScreen({ navigation }) {
  const { currentUser, updateUser } = useApp();
  const [showPaystack, setShowPaystack] = useState(false);
  const [currency, setCurrency] = useState(currentUser?.currency || 'NGN');
  const [loading, setLoading] = useState(false);

  const pricing = calcSubscription(currency);
  const reference = generateRef('subscription', { userId: currentUser?.id });

  const handleSuccess = async (response) => {
    setShowPaystack(false);
    setLoading(true);
    try {
      await updateUser({
        subscriptionStatus: 'active',
        subscriptionCurrency: currency,
        subscriptionReference: reference,
        subscriptionStartDate: new Date().toISOString(),
        subscriptionNextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        paystackAuthCode: response?.data?.authorization?.authorization_code || null,
        cardLast4: response?.data?.authorization?.last4 || null,
        cardBrand: response?.data?.authorization?.card_type || null,
      });
      Alert.alert(
        '🎉 Welcome to Ajala!',
        'Your subscription is now active. Explore the world!',
        [{ text: 'Let\'s Go!', onPress: () => navigation?.goBack?.() }]
      );
    } catch (e) {
      Alert.alert('Error', 'Payment received but profile update failed. Contact support.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setShowPaystack(false);
  };

  const FEATURES = [
    { icon: '🌍', text: 'Explore 38+ countries & 264 places' },
    { icon: '🗺️', text: 'Create unlimited itineraries' },
    { icon: '⭐', text: 'Read & write community reviews' },
    { icon: '🧭', text: 'Book trips with verified Tour Guides' },
    { icon: '💬', text: 'Message guides directly' },
    { icon: '📷', text: 'Share travel photos with the world' },
    { icon: '🏆', text: 'Earn Tour Guide status & get bookings' },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Paystack Modal */}
      {showPaystack && (
        <Modal animationType="slide" visible={showPaystack} onRequestClose={handleCancel}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.paystackHeader}>
              <TouchableOpacity onPress={handleCancel} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Text style={styles.paystackClose}>✕ Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.paystackTitle}>Secure Payment</Text>
              <View style={{ width: 80 }} />
            </View>
            <Paystack
              paystackKey={PAYSTACK_PUBLIC_KEY}
              amount={pricing.userPaysKobo}
              billingEmail={currentUser?.email}
              billingName={currentUser?.name}
              currency={currency}
              refNumber={reference}
              channels={['card', 'bank', 'ussd', 'qr', 'mobile_money']}
              onCancel={handleCancel}
              onSuccess={handleSuccess}
              autoStart={true}
            />
          </SafeAreaView>
        </Modal>
      )}

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>✈️</Text>
          <Text style={styles.heroTitle}>Ajala</Text>
          <Text style={styles.heroTagline}>Your free trial has ended</Text>
          <Text style={styles.heroSub}>Subscribe to continue your journey</Text>
        </View>

        {/* Currency Toggle */}
        <View style={styles.currencyToggle}>
          <TouchableOpacity
            style={[styles.currencyBtn, currency === 'NGN' && styles.currencyBtnActive]}
            onPress={() => setCurrency('NGN')}
          >
            <Text style={[styles.currencyBtnText, currency === 'NGN' && styles.currencyBtnTextActive]}>🇳🇬 Naira</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.currencyBtn, currency === 'USD' && styles.currencyBtnActive]}
            onPress={() => setCurrency('USD')}
          >
            <Text style={[styles.currencyBtnText, currency === 'USD' && styles.currencyBtnTextActive]}>🌐 USD</Text>
          </TouchableOpacity>
        </View>

        {/* Pricing Card */}
        <View style={styles.pricingCard}>
          <View style={styles.pricingBadge}>
            <Text style={styles.pricingBadgeText}>MONTHLY</Text>
          </View>
          <Text style={styles.pricingAmount}>
            {pricing.symbol}{pricing.base.toLocaleString()}
          </Text>
          <Text style={styles.pricingPer}>per month</Text>
          <View style={styles.pricingFeeRow}>
            <Text style={styles.pricingFeeText}>
              + {pricing.symbol}{pricing.paystackFee.toFixed(2)} processing fee
            </Text>
          </View>
          <View style={styles.pricingDivider} />
          <Text style={styles.pricingTotal}>
            You pay: {pricing.symbol}{pricing.userPays.toFixed(2)}/month
          </Text>
          <Text style={styles.pricingNote}>Processing fees are passed to you, not us</Text>
        </View>

        {/* Features */}
        <View style={styles.featuresCard}>
          <Text style={styles.featuresTitle}>Everything included</Text>
          {FEATURES.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <Text style={styles.featureIcon}>{f.icon}</Text>
              <Text style={styles.featureText}>{f.text}</Text>
            </View>
          ))}
        </View>

        {/* Trust row */}
        <View style={styles.trustRow}>
          <Text style={styles.trustItem}>🔒 Secured by Paystack</Text>
          <Text style={styles.trustItem}>🔄 Cancel anytime</Text>
        </View>

        {/* CTA */}
        <Button
          title={`Subscribe · ${pricing.symbol}${pricing.userPays.toFixed(2)}/month`}
          onPress={() => setShowPaystack(true)}
          loading={loading}
          size="lg"
          style={styles.cta}
        />

        <Text style={styles.disclaimer}>
          By subscribing you agree to be charged {pricing.symbol}{pricing.userPays.toFixed(2)} monthly.
          Your card details are securely handled by Paystack and never stored on our servers.
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ── MANAGE SUBSCRIPTION SCREEN ───────────────────────────────────────────────
export function ManageSubscriptionScreen({ navigation }) {
  const { currentUser, updateUser } = useApp();
  const trial = getTrialStatus(currentUser);
  const pricing = calcSubscription(currentUser?.subscriptionCurrency || 'NGN');

  const handleCancel = () => {
    Alert.alert(
      'Cancel Subscription',
      'Your subscription will remain active until the end of the current billing period, then you\'ll lose access to new content.',
      [
        { text: 'Keep Subscription', style: 'cancel' },
        {
          text: 'Cancel Anyway', style: 'destructive',
          onPress: async () => {
            await updateUser({ subscriptionStatus: 'cancelled' });
            Alert.alert('Subscription cancelled', 'Access continues until end of billing period.');
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.md }}>
        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.md, marginBottom: Spacing.md }}>
            <View style={[styles.statusDot, {
              backgroundColor: trial.subscribed ? Colors.accent :
                trial.active ? Colors.warning : Colors.error
            }]} />
            <Text style={styles.statusLabel}>
              {trial.subscribed ? 'Active Subscription' :
                trial.active ? `Free Trial — ${trial.daysLeft} days left` : 'Trial Expired'}
            </Text>
          </View>

          {trial.subscribed && (
            <>
              <View style={styles.statusRow}>
                <Text style={styles.statusKey}>Plan</Text>
                <Text style={styles.statusVal}>Monthly — {pricing.symbol}{pricing.userPays.toFixed(2)}</Text>
              </View>
              {currentUser?.cardLast4 && (
                <View style={styles.statusRow}>
                  <Text style={styles.statusKey}>Card</Text>
                  <Text style={styles.statusVal}>{currentUser.cardBrand} •••• {currentUser.cardLast4}</Text>
                </View>
              )}
              {currentUser?.subscriptionNextBillingDate && (
                <View style={styles.statusRow}>
                  <Text style={styles.statusKey}>Next billing</Text>
                  <Text style={styles.statusVal}>
                    {new Date(currentUser.subscriptionNextBillingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </Text>
                </View>
              )}
              {currentUser?.subscriptionReference && (
                <View style={styles.statusRow}>
                  <Text style={styles.statusKey}>Reference</Text>
                  <Text style={[styles.statusVal, { fontSize: Typography.sizes.xs, fontFamily: 'monospace' }]}>
                    {currentUser.subscriptionReference}
                  </Text>
                </View>
              )}
            </>
          )}
        </View>

        {trial.subscribed && (
          <Button
            title="Cancel Subscription"
            onPress={handleCancel}
            variant="danger"
            style={{ marginTop: Spacing.lg }}
          />
        )}

        {!trial.subscribed && (
          <Button
            title="Subscribe Now"
            onPress={() => navigation.navigate('Paywall')}
            style={{ marginTop: Spacing.lg }}
            size="lg"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  container: { padding: Spacing.md },

  paystackHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.surface,
  },
  paystackClose: { color: Colors.error, fontSize: Typography.sizes.md, fontWeight: '600', width: 80 },
  paystackTitle: { fontSize: Typography.sizes.md, fontWeight: 'bold', color: Colors.textPrimary, fontFamily: 'Georgia' },

  hero: { alignItems: 'center', paddingVertical: Spacing.xl },
  heroEmoji: { fontSize: 52 },
  heroTitle: { fontSize: 38, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.primary, letterSpacing: 2, marginTop: 8 },
  heroTagline: { fontSize: Typography.sizes.lg, color: Colors.textPrimary, fontWeight: '600', marginTop: Spacing.sm },
  heroSub: { fontSize: Typography.sizes.md, color: Colors.textMuted, marginTop: 4 },

  currencyToggle: {
    flexDirection: 'row', backgroundColor: Colors.surfaceAlt,
    borderRadius: Radius.full, padding: 4,
    marginBottom: Spacing.lg, alignSelf: 'center',
  },
  currencyBtn: { paddingHorizontal: Spacing.lg, paddingVertical: 8, borderRadius: Radius.full },
  currencyBtnActive: { backgroundColor: Colors.primary },
  currencyBtnText: { fontSize: Typography.sizes.sm, color: Colors.textSecondary, fontWeight: '600' },
  currencyBtnTextActive: { color: Colors.textInverse },

  pricingCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.xl,
    padding: Spacing.xl, alignItems: 'center', ...Shadow.md,
    marginBottom: Spacing.lg, borderWidth: 2, borderColor: Colors.primary,
  },
  pricingBadge: {
    backgroundColor: Colors.primary, borderRadius: Radius.full,
    paddingHorizontal: 12, paddingVertical: 4, marginBottom: Spacing.md,
  },
  pricingBadgeText: { color: '#fff', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  pricingAmount: { fontSize: 52, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },
  pricingPer: { fontSize: Typography.sizes.md, color: Colors.textMuted, marginTop: 4 },
  pricingFeeRow: { marginTop: Spacing.sm },
  pricingFeeText: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  pricingDivider: { width: '100%', height: 1, backgroundColor: Colors.borderLight, marginVertical: Spacing.md },
  pricingTotal: { fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.primary },
  pricingNote: { fontSize: Typography.sizes.xs, color: Colors.textMuted, marginTop: 4, fontStyle: 'italic' },

  featuresCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.xl,
    padding: Spacing.lg, ...Shadow.sm, marginBottom: Spacing.md,
  },
  featuresTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.md },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, marginBottom: 12 },
  featureIcon: { fontSize: 22, width: 30, textAlign: 'center' },
  featureText: { fontSize: Typography.sizes.md, color: Colors.textSecondary, flex: 1 },

  trustRow: { flexDirection: 'row', justifyContent: 'center', gap: Spacing.xl, marginBottom: Spacing.lg },
  trustItem: { fontSize: Typography.sizes.sm, color: Colors.textMuted },

  cta: { marginBottom: Spacing.md },
  disclaimer: { fontSize: Typography.sizes.xs, color: Colors.textMuted, textAlign: 'center', lineHeight: 18 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.md, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.surface,
  },
  back: { color: Colors.primary, fontSize: Typography.sizes.md, width: 60 },
  headerTitle: { fontSize: Typography.sizes.lg, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary },

  statusCard: {
    backgroundColor: Colors.surface, borderRadius: Radius.xl,
    padding: Spacing.lg, ...Shadow.sm,
  },
  statusDot: { width: 12, height: 12, borderRadius: 6 },
  statusLabel: { fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.textPrimary },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderTopWidth: 1, borderTopColor: Colors.borderLight },
  statusKey: { fontSize: Typography.sizes.sm, color: Colors.textMuted },
  statusVal: { fontSize: Typography.sizes.sm, fontWeight: '600', color: Colors.textPrimary, maxWidth: '60%', textAlign: 'right' },
});
