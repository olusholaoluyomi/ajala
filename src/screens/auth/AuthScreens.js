import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import { useApp } from '../../context/AppContext';
import { Button, Input } from '../../components/UI';
import { Colors, Typography, Spacing, Radius } from '../../utils/theme';

// ── LOGIN ─────────────────────────────────────────────────────────────────────
export function LoginScreen({ navigation }) {
  const { login } = useApp();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Invalid email address';
    if (!password) e.password = 'Password is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await login({ email: email.trim().toLowerCase(), password });
      // Navigation handled automatically by AppContext onAuthStateChange
    } catch (err) {
      const msg = err.message || '';
      if (msg.toLowerCase().includes('email not confirmed') || msg.toLowerCase().includes('not confirmed')) {
        Alert.alert(
          '📧 Email Not Verified',
          'Please check your inbox and click the verification link before logging in. Check your spam folder too.',
          [{ text: 'OK' }]
        );
      } else if (msg.toLowerCase().includes('invalid login') || msg.toLowerCase().includes('invalid credentials')) {
        Alert.alert('Login Failed', 'Incorrect email or password. Please try again.');
      } else {
        Alert.alert('Login Failed', msg || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">
        <View style={s.hero}>
          <Text style={s.logo}>✈️</Text>
          <Text style={s.brand}>Ajala</Text>
          <Text style={s.tagline}>The world is yours to explore</Text>
        </View>

        <View style={s.form}>
          <Text style={s.title}>Welcome back</Text>
          <Text style={s.subtitle}>Sign in to continue your journey</Text>

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="you@example.com"
            error={errors.email}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Your password"
            error={errors.password}
          />

          <Button title="Sign In" onPress={handleLogin} loading={loading} style={s.cta} size="lg" />

          <View style={s.footer}>
            <Text style={s.footerText}>New to Ajala? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={s.link}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ── REGISTER ──────────────────────────────────────────────────────────────────
export function RegisterScreen({ navigation }) {
  const { register } = useApp();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', bio: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState({});
  const [done, setDone]       = useState(false); // show success state

  const set = (field) => (val) => setForm(f => ({ ...f, [field]: val }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())   e.name    = 'Name is required';
    if (!form.email.trim())  e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.password)      e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'At least 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        bio: form.bio.trim(),
      });
      // Show success screen — email verification required
      setDone(true);
    } catch (err) {
      const msg = err.message || '';
      if (msg.toLowerCase().includes('already registered') || msg.toLowerCase().includes('already exists')) {
        Alert.alert('Account Exists', 'This email is already registered. Try logging in instead.');
      } else {
        Alert.alert('Registration Failed', msg || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ── SUCCESS STATE ─────────────────────────────────────────────────────────
  if (done) {
    return (
      <View style={s.flex}>
        <View style={s.successContainer}>
          <Text style={s.successEmoji}>📧</Text>
          <Text style={s.successTitle}>Check your inbox!</Text>
          <Text style={s.successBody}>
            We sent a verification email to:
          </Text>
          <Text style={s.successEmail}>{form.email}</Text>
          <Text style={s.successBody}>
            Click the link in that email to verify your account, then come back here to log in.
          </Text>
          <Text style={s.successHint}>
            Don't see it? Check your spam or junk folder.
          </Text>

          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: Spacing.xl, width: '100%' }}
            size="lg"
          />

          <TouchableOpacity
            style={{ marginTop: Spacing.lg }}
            onPress={() => setDone(false)}
          >
            <Text style={{ color: Colors.textMuted, fontSize: Typography.sizes.sm, textAlign: 'center' }}>
              Wrong email? Go back and try again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ── REGISTER FORM ─────────────────────────────────────────────────────────
  return (
    <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">
        <View style={[s.hero, { paddingVertical: Spacing.xl }]}>
          <Text style={s.logo}>✈️</Text>
          <Text style={s.brand}>Ajala</Text>
          <Text style={s.tagline}>Begin your journey</Text>
        </View>

        <View style={s.form}>
          <Text style={s.title}>Create your account</Text>
          <Text style={s.subtitle}>Join explorers worldwide</Text>

          <Input label="Full Name"        value={form.name}     onChangeText={set('name')}     placeholder="Amara Okafor"                    error={errors.name} />
          <Input label="Email"            value={form.email}    onChangeText={set('email')}    keyboardType="email-address" autoCapitalize="none" autoCorrect={false} placeholder="you@example.com" error={errors.email} />
          <Input label="Password"         value={form.password} onChangeText={set('password')} secureTextEntry placeholder="Minimum 6 characters" error={errors.password} />
          <Input label="Confirm Password" value={form.confirm}  onChangeText={set('confirm')}  secureTextEntry placeholder="Repeat password"     error={errors.confirm} />
          <Input label="Bio (optional)"   value={form.bio}      onChangeText={set('bio')}      placeholder="Travel enthusiast, lover of cultures..." multiline numberOfLines={2} style={{ height: 70, textAlignVertical: 'top' }} />

          <View style={s.upgradeInfo}>
            <Text style={s.upgradeIcon}>🧭</Text>
            <Text style={s.upgradeText}>
              Plan 3+ public itineraries with 10+ reviews and a 4.0+ rating to earn{' '}
              <Text style={{ color: Colors.tourGuide, fontWeight: '700' }}>Tour Guide</Text> status
            </Text>
          </View>

          <Button title="Create Account" onPress={handleRegister} loading={loading} style={s.cta} size="lg" />

          <View style={s.footer}>
            <Text style={s.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={s.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.background },
  scroll: { flexGrow: 1 },
  hero: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: Spacing.xxl,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logo:    { fontSize: 52 },
  brand:   { fontSize: 40, fontFamily: 'Georgia', color: Colors.textInverse, fontWeight: 'bold', marginTop: Spacing.sm, letterSpacing: 2 },
  tagline: { fontSize: Typography.sizes.md, color: 'rgba(255,255,255,0.85)', marginTop: Spacing.sm, fontStyle: 'italic' },
  form:    { padding: Spacing.lg, paddingTop: Spacing.xl },
  title:   { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, marginBottom: Spacing.xs },
  subtitle:{ fontSize: Typography.sizes.md, color: Colors.textMuted, marginBottom: Spacing.xl },
  cta:     { marginTop: Spacing.sm },
  footer:  { flexDirection: 'row', justifyContent: 'center', marginTop: Spacing.lg, paddingBottom: Spacing.xl },
  footerText: { color: Colors.textSecondary, fontSize: Typography.sizes.md },
  link:    { color: Colors.primary, fontSize: Typography.sizes.md, fontWeight: '600' },
  upgradeInfo: { flexDirection: 'row', backgroundColor: Colors.tourGuideLight, borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.md, alignItems: 'flex-start', gap: Spacing.sm },
  upgradeIcon: { fontSize: 20 },
  upgradeText: { flex: 1, fontSize: Typography.sizes.sm, color: Colors.textSecondary, lineHeight: 20 },

  // Success state
  successContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: Spacing.xl, paddingHorizontal: Spacing.xl,
  },
  successEmoji: { fontSize: 72, marginBottom: Spacing.lg },
  successTitle: { fontSize: Typography.sizes.xxl, fontFamily: 'Georgia', fontWeight: 'bold', color: Colors.textPrimary, textAlign: 'center', marginBottom: Spacing.md },
  successBody:  { fontSize: Typography.sizes.md, color: Colors.textSecondary, textAlign: 'center', lineHeight: 24, marginBottom: Spacing.sm },
  successEmail: { fontSize: Typography.sizes.lg, fontWeight: '700', color: Colors.primary, textAlign: 'center', marginBottom: Spacing.md },
  successHint:  { fontSize: Typography.sizes.sm, color: Colors.textMuted, textAlign: 'center', marginTop: Spacing.sm, fontStyle: 'italic' },
});
