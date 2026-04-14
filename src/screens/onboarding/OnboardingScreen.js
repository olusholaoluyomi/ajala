import React, { useRef, useState } from 'react';
import {
  View, Text, StyleSheet, Dimensions, ScrollView,
  TouchableOpacity, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Shadow, Radius, Spacing } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

// ── DECORATIVE DIAGONAL STRIPE BACKGROUND ──────────────────────────────────
function DiagonalPattern({ color, opacity = 0.05 }) {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {Array.from({ length: 16 }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            top: -120, bottom: -120,
            left: i * (width / 7) - 24,
            width: 22,
            backgroundColor: color,
            opacity,
            transform: [{ rotate: '22deg' }],
          }}
        />
      ))}
    </View>
  );
}

// ── FLOATING CHIP ────────────────────────────────────────────────────────────
function FloatingChip({ label, icon, style }) {
  return (
    <View style={[chipS.chip, style]}>
      {icon ? <Text style={chipS.icon}>{icon}</Text> : null}
      <Text style={chipS.label}>{label}</Text>
    </View>
  );
}
const chipS = StyleSheet.create({
  chip: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.22)',
    borderRadius: Radius.full,
    paddingHorizontal: 11, paddingVertical: 6,
    gap: 5,
    ...Shadow.sm,
  },
  icon:  { fontSize: 12 },
  label: { color: '#FFFFFF', fontSize: 12, fontWeight: '600', letterSpacing: 0.3 },
});

// ── MAN IN AGBADA ILLUSTRATION ───────────────────────────────────────────────
function AgbadaFigure() {
  const skin  = '#7B4020';
  const robe  = '#C1440E';
  const emb   = '#D4921C';   // kente gold embroidery
  const dark  = '#8B3A0E';

  return (
    <View style={{ alignItems: 'center' }}>

      {/* KUFI / FILA CAP */}
      <View style={{
        width: 60, height: 26,
        backgroundColor: emb,
        borderRadius: 16, borderBottomLeftRadius: 3, borderBottomRightRadius: 3,
        zIndex: 5, marginBottom: -5,
        overflow: 'hidden', ...Shadow.sm,
      }}>
        {[10, 20, 32, 44].map(l => (
          <View key={l} style={{
            position: 'absolute', top: 0, bottom: 0, left: l,
            width: 2, backgroundColor: 'rgba(0,0,0,0.18)',
          }} />
        ))}
      </View>

      {/* HEAD */}
      <View style={{
        width: 82, height: 82, borderRadius: 41,
        backgroundColor: skin, zIndex: 4, overflow: 'hidden', ...Shadow.md,
      }}>
        {/* Eyes */}
        <View style={{
          position: 'absolute', top: 30, left: 0, right: 0,
          flexDirection: 'row', justifyContent: 'center', gap: 22,
        }}>
          <View style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: '#1A0800' }} />
          <View style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: '#1A0800' }} />
        </View>
        {/* Broad nose bridge */}
        <View style={{
          position: 'absolute', top: 46, alignSelf: 'center',
          width: 16, height: 10, borderRadius: 8,
          backgroundColor: 'rgba(0,0,0,0.14)',
        }} />
        {/* Smile */}
        <View style={{
          position: 'absolute', bottom: 17, alignSelf: 'center',
          width: 22, height: 10,
          borderBottomLeftRadius: 11, borderBottomRightRadius: 11,
          borderWidth: 2.5, borderTopWidth: 0,
          borderColor: 'rgba(0,0,0,0.28)',
        }} />
      </View>

      {/* NECK */}
      <View style={{
        width: 24, height: 18, backgroundColor: skin,
        zIndex: 3, marginTop: -3,
      }} />

      {/* AGBADA — iconic wide flowing outer robe */}
      <View style={{
        width: 248, height: 208,
        backgroundColor: robe,
        borderRadius: 24, borderTopLeftRadius: 60, borderTopRightRadius: 60,
        marginTop: -16, zIndex: 1,
        borderWidth: 3, borderColor: emb,
        overflow: 'hidden', alignItems: 'center',
        ...Shadow.xl,
      }}>
        {/* Central embroidery column (aso-oke) */}
        <View style={{
          position: 'absolute', top: 0, bottom: 0,
          width: 9, backgroundColor: `${emb}95`,
        }} />
        {/* Collar horizontal embroidery bars */}
        {[8, 20, 32].map((top, i) => (
          <View key={top} style={{
            position: 'absolute', top,
            width: 72 - i * 12, height: 4,
            backgroundColor: `${emb}85`, borderRadius: 2,
          }} />
        ))}
        {/* Kente geometric blocks - lower portion */}
        <View style={{
          position: 'absolute', bottom: 44,
          left: 0, right: 0,
          flexDirection: 'row', justifyContent: 'space-evenly',
          paddingHorizontal: 24,
        }}>
          {[robe, dark, robe, dark].map((c, i) => (
            <View key={i} style={{
              width: 34, height: 34,
              backgroundColor: c,
              borderWidth: 2, borderColor: `${emb}55`,
            }}>
              <View style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -1, bottom: 0, width: 2, backgroundColor: `${emb}65` }} />
              <View style={{ position: 'absolute', top: '50%', marginTop: -1, left: 0, right: 0, height: 2, backgroundColor: `${emb}65` }} />
            </View>
          ))}
        </View>
        {/* Sokoto (trousers) peeking at bottom */}
        <View style={{
          position: 'absolute', bottom: 0,
          flexDirection: 'row', gap: 10,
        }}>
          <View style={{ width: 50, height: 44, backgroundColor: dark, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
          <View style={{ width: 50, height: 44, backgroundColor: dark, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
        </View>
      </View>

    </View>
  );
}

// ── WOMAN IN IRO AND BUBU ILLUSTRATION ──────────────────────────────────────
function IroBubuFigure() {
  const skin  = '#7B4020';
  const gele  = '#D4921C';   // golden gele headwrap
  const buba  = '#B5451B';   // Ankara terracotta buba (blouse)
  const iro   = '#1B4332';   // forest green iro (wrapper skirt)
  const iroAc = '#52B788';   // iro accent stripe
  const emb   = '#D4921C';

  return (
    <View style={{ alignItems: 'center' }}>

      {/* GELE — large elaborate headwrap, asymmetric shape */}
      <View style={{ position: 'relative', alignItems: 'center', marginBottom: -12, zIndex: 5 }}>
        {/* Main gele body */}
        <View style={{
          width: 110, height: 50,
          backgroundColor: gele,
          borderRadius: 26, borderTopRightRadius: 10,
          overflow: 'hidden', ...Shadow.md,
          transform: [{ rotate: '-3deg' }],
        }}>
          {[16, 28, 42, 56, 70, 86].map(l => (
            <View key={l} style={{
              position: 'absolute', top: 0, bottom: 0, left: l,
              width: 2, backgroundColor: 'rgba(0,0,0,0.14)',
            }} />
          ))}
          {/* Gele top pleat puff */}
          <View style={{
            position: 'absolute', top: 5, right: 8,
            width: 46, height: 24, borderRadius: 12,
            backgroundColor: '#E8A020',
          }} />
        </View>
        {/* Gele side knot */}
        <View style={{
          position: 'absolute', right: -10, top: 8,
          width: 26, height: 26, borderRadius: 13,
          backgroundColor: '#E8A020', zIndex: 6, ...Shadow.sm,
        }} />
        {/* Gele back tail */}
        <View style={{
          position: 'absolute', right: -18, top: 20,
          width: 18, height: 14, borderRadius: 9,
          backgroundColor: gele, zIndex: 4,
        }} />
      </View>

      {/* HEAD */}
      <View style={{
        width: 78, height: 78, borderRadius: 39,
        backgroundColor: skin, zIndex: 4, overflow: 'hidden', ...Shadow.md,
      }}>
        {/* Eyes with lashes */}
        <View style={{
          position: 'absolute', top: 28, left: 0, right: 0,
          flexDirection: 'row', justifyContent: 'center', gap: 20,
        }}>
          <View style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: '#1A0800' }} />
          <View style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: '#1A0800' }} />
        </View>
        {/* Nose */}
        <View style={{
          position: 'absolute', top: 44, alignSelf: 'center',
          width: 14, height: 8, borderRadius: 7,
          backgroundColor: 'rgba(0,0,0,0.13)',
        }} />
        {/* Warm smile */}
        <View style={{
          position: 'absolute', bottom: 15, alignSelf: 'center',
          width: 24, height: 11,
          borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
          borderWidth: 2.5, borderTopWidth: 0,
          borderColor: 'rgba(0,0,0,0.28)',
        }} />
      </View>

      {/* NECK */}
      <View style={{
        width: 20, height: 16, backgroundColor: skin,
        zIndex: 3, marginTop: -3,
      }} />

      {/* BUBA — fitted blouse with Ankara print */}
      <View style={{
        width: 132, height: 94,
        backgroundColor: buba,
        borderRadius: 18, borderTopLeftRadius: 10, borderTopRightRadius: 10,
        marginTop: -7, zIndex: 2,
        borderWidth: 2, borderColor: emb,
        overflow: 'hidden', alignItems: 'center',
        ...Shadow.md,
      }}>
        {/* Neckline opening */}
        <View style={{
          position: 'absolute', top: 5, alignSelf: 'center',
          width: 40, height: 20, borderRadius: 20,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }} />
        {/* Ankara diamond/geometric print */}
        {[0, 1, 2, 3, 4].map(col =>
          [0, 1, 2, 3].map(row => (
            <View key={`${col}-${row}`} style={{
              position: 'absolute',
              top: row * 22 + 24,
              left: col * 25 + 4,
              width: 13, height: 13,
              backgroundColor: (col + row) % 2 === 0
                ? 'rgba(212,146,28,0.55)'
                : 'rgba(255,255,255,0.20)',
              transform: [{ rotate: '45deg' }],
            }} />
          ))
        )}
      </View>

      {/* IRO — long A-line wrapper skirt */}
      <View style={{
        width: 174, height: 158,
        backgroundColor: iro,
        borderRadius: 12,
        borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
        marginTop: 0, zIndex: 1,
        borderWidth: 2, borderColor: iroAc,
        overflow: 'hidden', alignItems: 'center',
        ...Shadow.md,
      }}>
        {/* Iro horizontal stripe pattern (traditional wrapper) */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <View key={i} style={{
            position: 'absolute',
            top: i * 20 + 5,
            width: '90%',
            height: i % 2 === 0 ? 5 : 3,
            backgroundColor: i % 2 === 0
              ? `${iroAc}65`
              : `${emb}40`,
            borderRadius: 2,
          }} />
        ))}
        {/* Tuck/fold shadow on sides */}
        <View style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 22, backgroundColor: 'rgba(0,0,0,0.12)' }} />
        <View style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 16, backgroundColor: 'rgba(0,0,0,0.08)' }} />
      </View>

    </View>
  );
}

// ── COMPASS ILLUSTRATION (Slide 3) ──────────────────────────────────────────
function CompassIllustration() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 280 }}>

      {/* Outer decorative ring */}
      <View style={{
        width: 220, height: 220, borderRadius: 110,
        borderWidth: 1.5, borderColor: 'rgba(212,146,28,0.3)',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Tick marks at 8 positions */}
        {Array.from({ length: 8 }, (_, i) => (
          <View key={i} style={{
            position: 'absolute',
            width: 2, height: 12,
            backgroundColor: 'rgba(212,146,28,0.35)',
            top: 4,
            transform: [{ rotate: `${i * 45}deg` }, { translateY: 96 }],
            transformOrigin: 'center 96px',
          }} />
        ))}

        {/* Middle ring */}
        <View style={{
          width: 172, height: 172, borderRadius: 86,
          borderWidth: 1, borderColor: 'rgba(212,146,28,0.18)',
          alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Compass face */}
          <View style={{
            width: 116, height: 116, borderRadius: 58,
            backgroundColor: 'rgba(212,146,28,0.07)',
            borderWidth: 2, borderColor: 'rgba(212,146,28,0.4)',
            alignItems: 'center', justifyContent: 'center',
          }}>
            {/* North needle — terracotta */}
            <View style={{
              position: 'absolute', top: 8, alignSelf: 'center',
              width: 0, height: 0,
              borderLeftWidth: 11, borderRightWidth: 11, borderBottomWidth: 38,
              borderStyle: 'solid',
              borderLeftColor: 'transparent', borderRightColor: 'transparent',
              borderBottomColor: '#C1440E',
            }} />
            {/* South needle — white/muted */}
            <View style={{
              position: 'absolute', bottom: 8, alignSelf: 'center',
              width: 0, height: 0,
              borderLeftWidth: 11, borderRightWidth: 11, borderTopWidth: 38,
              borderStyle: 'solid',
              borderLeftColor: 'transparent', borderRightColor: 'transparent',
              borderTopColor: 'rgba(255,255,255,0.3)',
            }} />
            {/* Center jewel */}
            <View style={{
              width: 18, height: 18, borderRadius: 9,
              backgroundColor: '#D4921C',
              borderWidth: 2, borderColor: '#FFF8E6',
              ...Shadow.md,
            }} />
          </View>
        </View>

        {/* Cardinal labels */}
        <Text style={{ position: 'absolute', top: 10, color: '#D4921C', fontSize: 13, fontWeight: '800' }}>N</Text>
        <Text style={{ position: 'absolute', bottom: 10, color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: '700' }}>S</Text>
        <Text style={{ position: 'absolute', right: 12, color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: '700' }}>E</Text>
        <Text style={{ position: 'absolute', left: 12, color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: '700' }}>W</Text>
      </View>

      {/* Brand wordmark below compass */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 10, color: '#D4921C', letterSpacing: 5, fontWeight: '600', marginBottom: 4 }}>
          ✦  ✦  ✦
        </Text>
        <Text style={{
          fontSize: 36, fontWeight: '800',
          color: '#D4921C', letterSpacing: 7,
          fontFamily: 'Georgia',
        }}>AJALA</Text>
      </View>

    </View>
  );
}

// ── SLIDE DEFINITIONS ────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 'agbada',
    bg: '#0D0806',
    patternColor: '#C1440E',
    Figure: AgbadaFigure,
    chips: [
      { label: 'Lagos', icon: '🌊', style: { top: 70,  left:  8 } },
      { label: 'Kano',  icon: '🏛️', style: { top: 14,  right: 28 } },
      { label: 'Accra', icon: '✨', style: { bottom: 64, left: 14 } },
      { label: 'Abuja', icon: '🌿', style: { top: 180, right: -6 } },
    ],
    headline: 'AI-Powered\nJourneys,\nSmarter\nTravel Ahead',
    sub: 'Your AI travel companion across Africa and beyond',
    accent: '#D4921C',
    isCTA: false,
  },
  {
    id: 'irobuba',
    bg: '#060A18',
    patternColor: '#2C3E6B',
    Figure: IroBubuFigure,
    chips: [
      { label: 'Heritage', icon: '🏺', style: { top:  50, left:  0 } },
      { label: 'Benin',    icon: '👑', style: { top:  10, right: 18 } },
      { label: 'Culture',  icon: '🎭', style: { bottom: 50, right: 6 } },
      { label: 'Adire',    icon: '🎨', style: { top: 196, left: -8 } },
    ],
    headline: "Discover\nAfrica's\nRichest\nCultures",
    sub: 'From Benin bronzes to Kente cloth — explore it all',
    accent: '#52B788',
    isCTA: false,
  },
  {
    id: 'start',
    bg: '#060E08',
    patternColor: '#2D6A4F',
    Figure: null,
    chips: [
      { label: 'Nairobi',   icon: '🦁', style: { top: 24,  left: 22  } },
      { label: 'Cairo',     icon: '🏔️', style: { top: 80,  right: 10 } },
      { label: 'Cape Town', icon: '🌊', style: { bottom: 80, left: 8  } },
      { label: 'Dakar',     icon: '🎵', style: { bottom: 28, right: 18 } },
    ],
    headline: 'Your\nJourney\nBegins\nHere',
    sub: "Join thousands exploring Africa's most beautiful destinations",
    accent: '#D4921C',
    isCTA: true,
  },
];

// ── MAIN ONBOARDING SCREEN ───────────────────────────────────────────────────
export function OnboardingScreen({ navigation }) {
  const scrollRef = useRef(null);
  const [page, setPage] = useState(0);

  const goNext = () => {
    if (page < SLIDES.length - 1) {
      const next = page + 1;
      scrollRef.current?.scrollTo({ x: next * width, animated: true });
      setPage(next);
    }
  };

  const finish = async (to) => {
    try { await AsyncStorage.setItem('ajala_onboarding_done', '1'); } catch (_) {}
    navigation.replace(to);
  };

  const skip = async () => {
    try { await AsyncStorage.setItem('ajala_onboarding_done', '1'); } catch (_) {}
    navigation.replace('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {SLIDES.map((slide, idx) => (
          <SlideView
            key={slide.id}
            slide={slide}
            slideIndex={idx}
            page={page}
            total={SLIDES.length}
            onNext={goNext}
            onFinish={finish}
            onSkip={skip}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// ── SINGLE SLIDE ─────────────────────────────────────────────────────────────
function SlideView({ slide, slideIndex, page, total, onNext, onFinish, onSkip }) {
  const { bg, patternColor, Figure, chips, headline, sub, accent, isCTA } = slide;

  return (
    <View style={{ width, height, backgroundColor: bg }}>
      <DiagonalPattern color={patternColor} opacity={0.055} />

      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>

        {/* ── TOP BAR ── */}
        <View style={s.topBar}>
          <View style={s.logoRow}>
            <View style={[s.logoMark, { borderColor: `${accent}55`, backgroundColor: `${accent}18` }]}>
              <Text style={{ fontSize: 12, color: accent }}>✦</Text>
            </View>
            <Text style={s.logoText}>AJALA</Text>
          </View>
          {slideIndex < total - 1 && (
            <TouchableOpacity onPress={onSkip} style={s.skipBtn} activeOpacity={0.7}>
              <Text style={s.skipText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ── ILLUSTRATION AREA ── */}
        <View style={s.illustrationArea}>
          {/* Floating chips */}
          {chips.map((chip, i) => (
            <FloatingChip
              key={i}
              label={chip.label}
              icon={chip.icon}
              style={[s.chipAbsolute, chip.style]}
            />
          ))}
          {/* Central figure */}
          <View style={s.figureWrap}>
            {Figure ? <Figure /> : <CompassIllustration />}
          </View>
        </View>

        {/* ── CONTENT AREA ── */}
        <View style={s.content}>
          {/* Accent rule */}
          <View style={[s.accentRule, { backgroundColor: accent }]} />

          {/* Headline */}
          <Text style={s.headline}>{headline}</Text>

          {/* Subtext */}
          <Text style={s.sub}>{sub}</Text>

          {/* Bottom row: dots + action */}
          {isCTA ? (
            <View style={s.ctaBlock}>
              <TouchableOpacity
                style={[s.btnPrimary, { borderColor: accent }]}
                onPress={() => onFinish('Register')}
                activeOpacity={0.85}
              >
                <Text style={s.btnPrimaryText}>Get Started  →</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={s.btnGhost}
                onPress={() => onFinish('Login')}
                activeOpacity={0.7}
              >
                <Text style={s.btnGhostText}>I already have an account</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={s.dotsRow}>
              <View style={s.dots}>
                {Array.from({ length: total }, (_, i) => (
                  <View
                    key={i}
                    style={[
                      s.dot,
                      i === page && s.dotActive,
                      i === page && { backgroundColor: accent, width: 24 },
                    ]}
                  />
                ))}
              </View>
              <TouchableOpacity
                style={[s.nextBtn, { backgroundColor: accent }]}
                onPress={onNext}
                activeOpacity={0.8}
              >
                <Text style={s.nextIcon}>›</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

      </SafeAreaView>
    </View>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  topBar: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
  },
  logoRow:  { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoMark: {
    width: 30, height: 30, borderRadius: 9,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  logoText: {
    fontSize: 16, fontWeight: '800', color: '#FFFFFF',
    letterSpacing: 4, fontFamily: 'Georgia',
  },
  skipBtn: {
    paddingHorizontal: 14, paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: Radius.full,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)',
  },
  skipText: { color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: '500' },

  illustrationArea: {
    flex: 1,
    position: 'relative',
    alignItems: 'center', justifyContent: 'center',
  },
  chipAbsolute: { position: 'absolute' },
  figureWrap: { alignItems: 'center', justifyContent: 'center' },

  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  accentRule: { width: 44, height: 4, borderRadius: 2, marginBottom: 12 },
  headline: {
    fontSize: 33, fontWeight: '800', color: '#FFFFFF',
    lineHeight: 40, marginBottom: 10,
    fontFamily: 'Georgia',
  },
  sub: {
    fontSize: 14, color: 'rgba(255,255,255,0.52)',
    lineHeight: 22, marginBottom: 20,
  },

  dotsRow: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
  },
  dots: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  dot: {
    width: 7, height: 7, borderRadius: 3.5,
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  dotActive: { borderRadius: 4 },

  nextBtn: {
    width: 54, height: 54, borderRadius: 27,
    alignItems: 'center', justifyContent: 'center',
    ...Shadow.md,
  },
  nextIcon: { fontSize: 28, color: '#FFFFFF', marginTop: -2 },

  ctaBlock: { gap: Spacing.sm },
  btnPrimary: {
    backgroundColor: '#C05A1A',
    borderRadius: Radius.xl,
    paddingVertical: 17,
    alignItems: 'center',
    borderWidth: 1.5,
    ...Shadow.md,
  },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700', letterSpacing: 0.4 },
  btnGhost: {
    borderRadius: Radius.xl,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.2)',
  },
  btnGhostText: { color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: '500' },
});
