import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './src/context/AppContext';
import { RootNavigator } from './src/navigation/RootNavigator';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.warn('ErrorBoundary caught:', error?.message);
  }
  render() {
    if (this.state.hasError) {
      return (
        <View style={s.container}>
          <Text style={s.emoji}>⚠️</Text>
          <Text style={s.title}>Something went wrong</Text>
          <Text style={s.msg}>{String(this.state.error?.message || 'Unexpected error')}</Text>
          <TouchableOpacity style={s.btn} onPress={() => this.setState({ hasError: false, error: null })}>
            <Text style={s.btnText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const s = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, backgroundColor: '#FAFAF8' },
  emoji:   { fontSize: 52, marginBottom: 16 },
  title:   { fontSize: 22, fontWeight: 'bold', color: '#1A1208', marginBottom: 8 },
  msg:     { fontSize: 14, color: '#6B5E4E', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn:     { backgroundColor: '#C8813A', paddingHorizontal: 32, paddingVertical: 14, borderRadius: 999 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </AppProvider>
    </ErrorBoundary>
  );
}