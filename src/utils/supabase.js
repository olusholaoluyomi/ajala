import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ── Replace with your Supabase project credentials ────────────────────────────
// supabase.com → your project → Settings → API
const SUPABASE_URL  = 'https://pucvpnjekfsaziucthol.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1Y3Zwbmpla2ZzYXppdWN0aG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTExMjcsImV4cCI6MjA5MDk2NzEyN30.brO15gEqSlLt_s-7uxdfhS8CI5tm5gLhpfIkm1OVZrU';
// ─────────────────────────────────────────────────────────────────────────────

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  // Disable realtime globally — not needed, causes crashes on some Android builds
  realtime: {
    params: { eventsPerSecond: 0 },
  },
  global: {
    fetch: fetch.bind(globalThis),
  },
});
