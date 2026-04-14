import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ActivityIndicator,
  TextInput, Image
} from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '../utils/theme';

// --- BUTTON ---
export function Button({ title, onPress, variant = 'primary', size = 'md', loading, disabled, style, icon }) {
  const styles = buttonStyles;
  const variantStyle = styles[variant] || styles.primary;
  const sizeStyle = styles[`size_${size}`] || styles.size_md;
  const textVariant = styles[`${variant}Text`] || styles.primaryText;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.base, variantStyle, sizeStyle, (disabled || loading) && styles.disabled, style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? Colors.textInverse : Colors.primary} size="small" />
      ) : (
        <View style={styles.row}>
          {icon && <Text style={[textVariant, { marginRight: 6 }]}>{icon}</Text>}
          <Text style={textVariant}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  base: { borderRadius: Radius.md, alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  primary:   { backgroundColor: Colors.primary },
  secondary: { backgroundColor: Colors.surface, borderWidth: 1.5, borderColor: Colors.primary },
  ghost:     { backgroundColor: 'transparent' },
  danger:    { backgroundColor: Colors.error },
  accent:    { backgroundColor: Colors.accent },
  gold:      { backgroundColor: Colors.gold },
  primaryText:   { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold },
  secondaryText: { color: Colors.primary,     fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold },
  ghostText:     { color: Colors.primary,     fontSize: Typography.sizes.md, fontWeight: Typography.weights.medium },
  dangerText:    { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold },
  accentText:    { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold },
  goldText:      { color: Colors.textInverse, fontSize: Typography.sizes.md, fontWeight: Typography.weights.semibold },
  size_sm: { paddingHorizontal: 12, paddingVertical: 8 },
  size_md: { paddingHorizontal: Spacing.lg, paddingVertical: 13 },
  size_lg: { paddingHorizontal: Spacing.xl, paddingVertical: 17 },
  disabled: { opacity: 0.5 },
});

// --- INPUT ---
export function Input({ label, error, style, containerStyle, ...props }) {
  return (
    <View style={[inputStyles.container, containerStyle]}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      <TextInput
        style={[inputStyles.input, error && inputStyles.inputError, style]}
        placeholderTextColor={Colors.textMuted}
        {...props}
      />
      {error && <Text style={inputStyles.error}>{error}</Text>}
    </View>
  );
}

const inputStyles = StyleSheet.create({
  container: { marginBottom: Spacing.md },
  label: { fontSize: Typography.sizes.sm, fontWeight: Typography.weights.medium, color: Colors.textSecondary, marginBottom: 6 },
  input: {
    borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.md,
    paddingHorizontal: Spacing.md, paddingVertical: 13,
    fontSize: Typography.sizes.md, color: Colors.textPrimary,
    backgroundColor: Colors.surface,
  },
  inputError: { borderColor: Colors.error },
  error: { fontSize: Typography.sizes.xs, color: Colors.error, marginTop: 4 },
});

// --- CARD ---
export function Card({ children, style, onPress }) {
  const Inner = onPress ? TouchableOpacity : View;
  return (
    <Inner
      style={[cardStyles.card, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {children}
    </Inner>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    ...Shadow.sm,
    overflow: 'hidden',
  },
});

// --- STAR RATING ---
export function StarRating({ rating, size = 16, onRate, readonly = true }) {
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity key={star} disabled={readonly} onPress={() => onRate?.(star)} activeOpacity={0.7}>
          <Text style={{ fontSize: size, color: star <= Math.round(rating) ? Colors.star : Colors.starEmpty }}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// --- BADGE ---
export function Badge({ label, color, textColor, style }) {
  return (
    <View style={[badgeStyles.badge, { backgroundColor: color || Colors.primaryFaint }, style]}>
      <Text style={[badgeStyles.text, { color: textColor || Colors.primary }]}>{label}</Text>
    </View>
  );
}

const badgeStyles = StyleSheet.create({
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full },
  text: { fontSize: Typography.sizes.xs, fontWeight: Typography.weights.semibold },
});

// --- AVATAR ---
export function Avatar({ uri, name, size = 40, style }) {
  const initials = name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?';
  return (
    <View style={[avatarStyles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      {uri ? (
        <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
      ) : (
        <Text style={[avatarStyles.initials, { fontSize: size * 0.38 }]}>{initials}</Text>
      )}
    </View>
  );
}

const avatarStyles = StyleSheet.create({
  container: { backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  initials: { color: Colors.textInverse, fontWeight: Typography.weights.bold },
});

// --- SECTION HEADER ---
export function SectionHeader({ title, subtitle, action, onAction }) {
  return (
    <View style={shStyles.row}>
      <View style={{ flex: 1 }}>
        <Text style={shStyles.title}>{title}</Text>
        {subtitle && <Text style={shStyles.subtitle}>{subtitle}</Text>}
      </View>
      {action && (
        <TouchableOpacity onPress={onAction} activeOpacity={0.7}>
          <Text style={shStyles.action}>{action}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const shStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.md },
  title: { fontSize: Typography.sizes.lg, fontWeight: Typography.weights.bold, color: Colors.textPrimary, fontFamily: 'Georgia' },
  subtitle: { fontSize: Typography.sizes.sm, color: Colors.textMuted, marginTop: 2 },
  action: { fontSize: Typography.sizes.sm, color: Colors.primary, fontWeight: Typography.weights.semibold },
});

// --- EMPTY STATE ---
export function EmptyState({ icon, title, subtitle, action, onAction }) {
  return (
    <View style={emptyStyles.container}>
      <Text style={emptyStyles.icon}>{icon || '🗺️'}</Text>
      <Text style={emptyStyles.title}>{title}</Text>
      {subtitle && <Text style={emptyStyles.subtitle}>{subtitle}</Text>}
      {action && (
        <Button title={action} onPress={onAction} style={{ marginTop: Spacing.lg, paddingHorizontal: Spacing.xl }} />
      )}
    </View>
  );
}

const emptyStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.xl, paddingTop: Spacing.xxl },
  icon: { fontSize: 52, marginBottom: Spacing.md },
  title: { fontSize: Typography.sizes.xl, fontWeight: Typography.weights.bold, color: Colors.textPrimary, textAlign: 'center', fontFamily: 'Georgia' },
  subtitle: { fontSize: Typography.sizes.md, color: Colors.textMuted, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22 },
});

// --- LOADING SCREEN ---
export function LoadingScreen() {
  return (
    <View style={loadingStyles.container}>
      {/* Diagonal stripe texture */}
      {Array.from({ length: 14 }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute', top: -100, bottom: -100,
            left: i * 52 - 12, width: 20,
            backgroundColor: '#C1440E', opacity: 0.05,
            transform: [{ rotate: '22deg' }],
          }}
        />
      ))}

      <View style={loadingStyles.inner}>
        {/* Outer adinkra-inspired ring */}
        <View style={loadingStyles.outerRing}>
          <View style={loadingStyles.innerRing}>
            <View style={loadingStyles.logoCircle}>
              <Text style={{ fontSize: 14, color: '#D4921C' }}>✦</Text>
            </View>
          </View>
        </View>

        <Text style={loadingStyles.brand}>Ajala</Text>
        <Text style={loadingStyles.tagline}>The world is yours to explore</Text>

        <View style={loadingStyles.dotsRow}>
          <View style={[loadingStyles.dot, { opacity: 1,   backgroundColor: '#D4921C' }]} />
          <View style={[loadingStyles.dot, { opacity: 0.6, backgroundColor: '#C05A1A' }]} />
          <View style={[loadingStyles.dot, { opacity: 0.3, backgroundColor: '#2D6A4F' }]} />
        </View>
      </View>

      <Text style={loadingStyles.footer}>Ajala Travel · Explore · Discover</Text>
    </View>
  );
}

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0907',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
    overflow: 'hidden',
  },
  inner: { alignItems: 'center', zIndex: 1 },
  outerRing: {
    width: 120, height: 120, borderRadius: 60,
    borderWidth: 1.5, borderColor: 'rgba(212,146,28,0.25)',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 28,
  },
  innerRing: {
    width: 96, height: 96, borderRadius: 48,
    borderWidth: 1, borderColor: 'rgba(212,146,28,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  logoCircle: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: 'rgba(212,146,28,0.12)',
    borderWidth: 1.5, borderColor: 'rgba(212,146,28,0.35)',
    alignItems: 'center', justifyContent: 'center',
  },
  brand: {
    fontSize: 44, fontFamily: 'Georgia', color: '#FFFFFF',
    fontWeight: 'bold', letterSpacing: 4, marginBottom: 8,
  },
  tagline: {
    fontSize: 11, color: 'rgba(255,255,255,0.45)',
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 40,
  },
  dotsRow: { flexDirection: 'row', gap: 10 },
  dot: { width: 9, height: 9, borderRadius: 5 },
  footer: {
    position: 'absolute', bottom: 32,
    fontSize: 10, color: 'rgba(255,255,255,0.2)',
    letterSpacing: 2, textTransform: 'uppercase', zIndex: 1,
  },
});

// --- ROLE BADGE ---
export function RoleBadge({ role }) {
  if (role === 'tourguide') {
    return <Badge label="🧭 Tour Guide" color={Colors.tourGuideLight} textColor={Colors.tourGuide} />;
  }
  return <Badge label="✦ Explorer" color={Colors.primaryFaint} textColor={Colors.primary} />;
}

// --- DIVIDER ---
export function Divider({ style }) {
  return <View style={[{ height: 1, backgroundColor: Colors.borderLight, marginVertical: Spacing.md }, style]} />;
}
