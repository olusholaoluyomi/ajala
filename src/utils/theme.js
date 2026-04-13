export const Colors = {
  // Primary — forest green (was orange)
  primary:       '#2D6A4F',
  primaryDark:   '#1B4332',
  primaryLight:  '#52B788',
  primaryFaint:  '#D8F3DC',

  // Accent — warm amber (was the accent green)
  accent:        '#F4A261',
  accentLight:   '#FFB347',
  accentFaint:   '#FFF3E0',

  // Surfaces
  background:    '#F6FAF7',
  surface:       '#FFFFFF',
  surfaceAlt:    '#EEF5F0',

  // Text
  textPrimary:   '#0D2B1A',
  textSecondary: '#4A6B55',
  textMuted:     '#8AAD95',
  textInverse:   '#FFFFFF',

  // Semantic
  success:       '#2D6A4F',
  warning:       '#F4A261',
  error:         '#D62828',

  // UI
  border:        '#C8DDD0',
  borderLight:   '#DFF0E4',
  star:          '#F4A261',
  starEmpty:     '#C8DDD0',
  tourGuide:     '#6B2FA0',
  tourGuideLight:'#F0E6FA',
  overlay:       'rgba(13,43,26,0.6)',
};

export const Typography = {
  sizes: { xs: 11, sm: 13, md: 15, lg: 17, xl: 20, xxl: 24, xxxl: 30 },
  weights: { regular: '400', medium: '500', semibold: '600', bold: '700' },
};

export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 };

export const Radius = { sm: 8, md: 12, lg: 16, xl: 24, full: 999 };

export const Shadow = {
  sm: { shadowColor: '#0D2B1A', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 3, elevation: 2 },
  md: { shadowColor: '#0D2B1A', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1,  shadowRadius: 8, elevation: 4 },
  lg: { shadowColor: '#0D2B1A', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 16, elevation: 8 },
};
