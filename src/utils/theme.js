export const Colors = {
  // Primary — Kente Terracotta/Copper (warm, earthy, unmistakably African)
  primary:       '#C05A1A',
  primaryDark:   '#8B3A0E',
  primaryLight:  '#E07A40',
  primaryFaint:  '#FEF0E6',

  // Kente Gold
  gold:          '#D4921C',
  goldLight:     '#F4C452',
  goldFaint:     '#FFF8E6',

  // Forest Green (Nigerian heritage / nature)
  accent:        '#2D6A4F',
  accentLight:   '#52B788',
  accentFaint:   '#D8F3DC',

  // Surfaces — warm cream/ivory (not cold white)
  background:    '#F9F4EE',
  surface:       '#FFFFFF',
  surfaceAlt:    '#F4EDE4',
  surfaceWarm:   '#FDF7F2',

  // Dark (for onboarding, overlays, hero sections)
  dark:          '#0A0E18',
  darkWarm:      '#0D0907',
  darkTerra:     '#160804',
  darkForest:    '#060E08',
  darkSurface:   '#1A1F2E',

  // Text
  textPrimary:   '#1A0A00',
  textSecondary: '#5C3A1E',
  textMuted:     '#9B7F6B',
  textInverse:   '#FFFFFF',

  // Semantic
  success:       '#2D6A4F',
  warning:       '#D4921C',
  error:         '#D62828',

  // UI
  border:        '#E8D5C4',
  borderLight:   '#F0E4D8',
  star:          '#D4921C',
  starEmpty:     '#E8D5C4',
  tourGuide:     '#1B4332',
  tourGuideLight:'#D8F3DC',
  overlay:       'rgba(26,10,0,0.65)',
};

export const Typography = {
  sizes: { xs: 11, sm: 13, md: 15, lg: 17, xl: 20, xxl: 24, xxxl: 30, hero: 38 },
  weights: { regular: '400', medium: '500', semibold: '600', bold: '700', heavy: '800' },
};

export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 64 };

export const Radius = { sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, full: 999 };

export const Shadow = {
  sm: { shadowColor: '#1A0A00', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 3,  elevation: 2 },
  md: { shadowColor: '#1A0A00', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.10, shadowRadius: 8,  elevation: 4 },
  lg: { shadowColor: '#1A0A00', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 16, elevation: 8 },
  xl: { shadowColor: '#1A0A00', shadowOffset: { width: 0, height: 10}, shadowOpacity: 0.20, shadowRadius: 24, elevation: 12 },
};
