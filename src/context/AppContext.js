import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../utils/supabase';
import { isSubscriptionActive } from '../utils/paystack';

export const AppContext = createContext(null);
export const TOUR_GUIDE_REQ = { minItineraries: 3, minReviews: 10, minRating: 4.0 };

// Safe camelCase converter — handles plain objects only, no recursion on non-plain objects
function camelize(key) {
  return key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
function toCamel(input) {
  try {
    if (input === null || input === undefined) return input;
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(toCamel);
    // Only convert plain objects
    const result = {};
    for (const key of Object.keys(input)) {
      result[camelize(key)] = toCamel(input[key]);
    }
    return result;
  } catch {
    return input;
  }
}
function toSnake(input) {
  try {
    if (input === null || input === undefined) return input;
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(toSnake);
    const result = {};
    for (const key of Object.keys(input)) {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[snakeKey] = toSnake(input[key]);
    }
    return result;
  } catch {
    return input;
  }
}

// Safely run any supabase query — never throws
async function sq(promise) {
  try {
    const result = await promise;
    return result || { data: null, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
}

export function AppProvider({ children }) {
  const [currentUser,   setCurrentUser]   = useState(null);
  const [users,         setUsers]         = useState([]);
  const [itineraries,   setItineraries]   = useState([]);
  const [reviews,       setReviews]       = useState([]);
  const [messages,      setMessages]      = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [trips,            setTrips]            = useState([]);
  const [bookings,         setBookings]         = useState([]);
  const [pendingLocations, setPendingLocations] = useState([]);
  const [loading,          setLoading]          = useState(true);

  const isLoadingRef = useRef(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    init();
    return () => { isMountedRef.current = false; };
  }, []);

  const init = async () => {
    try {
      const { data } = await sq(supabase.auth.getSession());
      const uid = data?.session?.user?.id;
      if (uid) {
        await loadAll(uid);
      } else {
        if (isMountedRef.current) setLoading(false);
      }
    } catch {
      if (isMountedRef.current) setLoading(false);
    }

    // Listen for sign in / sign out
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (!isMountedRef.current) return;
        if (event === 'SIGNED_IN' && session?.user?.id && !isLoadingRef.current) {
          loadAll(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          resetState();
        }
      });
      // Store cleanup ref
      isMountedRef._unsub = () => subscription?.unsubscribe();
    } catch {}
  };

  const resetState = () => {
    isLoadingRef.current = false;
    setCurrentUser(null);
    setUsers([]); setItineraries([]); setReviews([]);
    setMessages([]); setNotifications([]); setTrips([]); setBookings([]);
    setPendingLocations([]);
    setLoading(false);
  };

  const loadAll = async (uid) => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    if (isMountedRef.current) setLoading(true);

    try {
      // Step 1: Get profile
      let profileData = null;
      const p1 = await sq(supabase.from('profiles').select('*').eq('id', uid).single());
      if (p1.data) {
        profileData = p1.data;
      } else {
        // Wait and retry once — trigger may be slow
        await new Promise(r => setTimeout(r, 2000));
        const p2 = await sq(supabase.from('profiles').select('*').eq('id', uid).single());
        if (p2.data) profileData = p2.data;
      }

      if (!profileData) {
        // Profile row missing — try to create it from auth user metadata
        const { data: authData } = await sq(supabase.auth.getUser());
        const authUser = authData?.user;
        if (authUser) {
          const fallbackName = authUser.user_metadata?.name || authUser.email?.split('@')[0] || 'User';
          const { data: created } = await sq(
            supabase.from('profiles').upsert({
              id: authUser.id,
              email: authUser.email,
              name: fallbackName,
              role: 'explorer',
            }).select().single()
          );
          if (created) profileData = created;
        }
      }

      if (!profileData) {
        // Still no profile — sign out and show login
        await sq(supabase.auth.signOut());
        if (isMountedRef.current) resetState();
        return;
      }

      if (!isMountedRef.current) return;
      setCurrentUser(toCamel(profileData));

      // Step 2: Load all data one by one (safer than Promise.all for debugging)
      const iti  = await sq(supabase.from('itineraries').select('*').order('created_at', { ascending: false }));
      const rev  = await sq(supabase.from('reviews').select('*').order('created_at', { ascending: false }));
      const msg  = await sq(supabase.from('messages').select('*').or(`from_id.eq.${uid},to_id.eq.${uid}`).order('created_at', { ascending: true }));
      const notf = await sq(supabase.from('notifications').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(50));
      const trp  = await sq(supabase.from('trips').select('*').order('created_at', { ascending: false }));
      const bk   = await sq(supabase.from('bookings').select('*').or(`user_id.eq.${uid},guide_id.eq.${uid}`).order('created_at', { ascending: false }));
      const usr  = await sq(supabase.from('profiles').select('id, name, email, role, bio, avatar_url, dm_open, guide_score, followers, following, itinerary_count, created_at, username, messaging_visible'));
      // pending_locations is optional — table may not exist yet, silently skip
      const pend = await sq(supabase.from('pending_locations').select('*').order('created_at', { ascending: false })).catch(() => ({ data: null, error: null }));

      if (!isMountedRef.current) return;

      if (iti.data)  setItineraries(toCamel(iti.data));
      if (rev.data)  setReviews(toCamel(rev.data));
      if (msg.data)  setMessages(toCamel(msg.data));
      if (notf.data) setNotifications(toCamel(notf.data));
      if (trp.data)  setTrips(toCamel(trp.data));
      if (bk.data)   setBookings(toCamel(bk.data));
      if (usr.data)  setUsers(toCamel(usr.data));
      if (pend.data) setPendingLocations(toCamel(pend.data));

    } catch (e) {
      console.warn('loadAll error:', String(e));
    } finally {
      isLoadingRef.current = false;
      if (isMountedRef.current) setLoading(false);
    }
  };

  // ── AUTH ──────────────────────────────────────────────────────────────────
  const register = async ({ name, email, password, bio, currency }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { name: name.trim() },
        emailRedirectTo: 'ajala://auth/verified',
      },
    });
    if (error) throw new Error(error.message);
    if (data?.user) {
      await new Promise(r => setTimeout(r, 1000));
      await sq(supabase.from('profiles').upsert({
        id: data.user.id,
        email: email.trim().toLowerCase(),
        name: name.trim(),
        bio: (bio || '').trim(),
        currency: currency || 'NGN',
        role: 'explorer',
      }));
    }
    return data?.user;
  };

  const login = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (error) throw new Error(error.message);
  };

  const logout = async () => {
    await sq(supabase.auth.signOut());
    resetState();
  };

  const updateUser = async (updates) => {
    const snaked = toSnake(updates);
    const { data, error } = await supabase
      .from('profiles').update(snaked).eq('id', currentUser.id).select().single();
    if (error) throw new Error(error.message);
    const updated = toCamel(data);
    setCurrentUser(updated);
    setUsers(prev => prev.map(u => u.id === updated.id ? updated : u));
    return updated;
  };

  const subscriptionActive = currentUser ? isSubscriptionActive(currentUser) : false;

  // ── TOUR GUIDE UPGRADE ────────────────────────────────────────────────────
  const checkUpgrade = async (creatorId) => {
    try {
      const myItis = itineraries.filter(i => i.creatorId === creatorId && i.visibility === 'public');
      const myRevs = reviews.filter(r => itineraries.find(i => i.id === r.itineraryId && i.creatorId === creatorId));
      const avg = myRevs.length ? myRevs.reduce((s, r) => s + r.rating, 0) / myRevs.length : 0;
      const ok = myItis.length >= TOUR_GUIDE_REQ.minItineraries
        && myRevs.length >= TOUR_GUIDE_REQ.minReviews
        && avg >= TOUR_GUIDE_REQ.minRating;
      const target = users.find(u => u.id === creatorId);
      if (ok && target && target.role !== 'tourguide') {
        await sq(supabase.from('profiles').update({ role: 'tourguide', dm_open: true }).eq('id', creatorId));
        const upgraded = { ...target, role: 'tourguide', dmOpen: true };
        setUsers(prev => prev.map(u => u.id === creatorId ? upgraded : u));
        if (currentUser?.id === creatorId) setCurrentUser(upgraded);
      }
    } catch {}
  };

  // ── ITINERARIES ──────────────────────────────────────────────────────────
  const createItinerary = async ({ title, description, countryId, stateId, placeIds, visibility, invitedEmails }) => {
    const { data, error } = await supabase.from('itineraries').insert({
      title, description: description || '',
      country_id: countryId, state_id: stateId,
      place_ids: placeIds, visibility,
      invited_emails: invitedEmails || [],
      creator_id: currentUser.id,
      creator_name: currentUser.name,
      creator_role: currentUser.role,
    }).select().single();
    if (error) throw new Error(error.message);
    const iti = toCamel(data);
    setItineraries(prev => [iti, ...prev]);
    await sq(supabase.from('profiles').update({ itinerary_count: (currentUser.itineraryCount || 0) + 1 }).eq('id', currentUser.id));
    setCurrentUser(prev => ({ ...prev, itineraryCount: (prev.itineraryCount || 0) + 1 }));
    return iti;
  };

  const updateItinerary = async (id, updates) => {
    const { data, error } = await supabase.from('itineraries').update(toSnake(updates)).eq('id', id).select().single();
    if (error) throw new Error(error.message);
    setItineraries(prev => prev.map(i => i.id === id ? toCamel(data) : i));
  };

  const deleteItinerary = async (id) => {
    await sq(supabase.from('itineraries').delete().eq('id', id));
    setItineraries(prev => prev.filter(i => i.id !== id));
  };

  const getPublicItineraries = () => itineraries.filter(i => i.visibility === 'public');
  const getUserItineraries   = (uid) => itineraries.filter(i => i.creatorId === uid);
  const getItineraryById     = (id)  => itineraries.find(i => i.id === id);
  const canAccess = (iti) => {
    if (!iti) return false;
    if (iti.visibility === 'public') return true;
    if (!currentUser) return false;
    if (iti.creatorId === currentUser.id) return true;
    return !!(iti.invitedEmails || []).includes(currentUser.email);
  };

  // ── REVIEWS ──────────────────────────────────────────────────────────────
  const addReview = async ({ itineraryId, placeId, comment, rating, photos }) => {
    const urls = await Promise.all((photos || []).map(async (uri) => {
      try {
        const fn = `${currentUser.id}/${Date.now()}.jpg`;
        const res = await fetch(uri);
        const blob = await res.blob();
        const { error: ue } = await supabase.storage.from('review-photos').upload(fn, blob, { contentType: 'image/jpeg' });
        if (ue) return uri;
        return supabase.storage.from('review-photos').getPublicUrl(fn).data.publicUrl;
      } catch { return uri; }
    }));

    const { data, error } = await supabase.from('reviews').insert({
      itinerary_id: itineraryId || null,
      place_id: placeId || null,
      comment, rating, photos: urls,
      author_id: currentUser.id,
      author_name: currentUser.name,
      author_role: currentUser.role,
    }).select().single();
    if (error) throw new Error(error.message);
    const rev = toCamel(data);
    setReviews(prev => [rev, ...prev]);
    if (itineraryId) {
      const all = [...reviews, rev].filter(r => r.itineraryId === itineraryId);
      const avg = parseFloat((all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(2));
      await updateItinerary(itineraryId, { reviewCount: all.length, avgRating: avg });
    }
    await sq(supabase.from('profiles').update({ review_count: (currentUser.reviewCount || 0) + 1 }).eq('id', currentUser.id));
    setCurrentUser(prev => ({ ...prev, reviewCount: (prev.reviewCount || 0) + 1 }));
    const iti = itineraries.find(i => i.id === itineraryId);
    if (iti) await checkUpgrade(iti.creatorId);
    return rev;
  };

  const likeReview = async (id) => {
    const r = reviews.find(r => r.id === id); if (!r) return;
    const liked = (r.likes || []).includes(currentUser.id);
    const likes = liked ? r.likes.filter(x => x !== currentUser.id) : [...(r.likes || []), currentUser.id];
    await sq(supabase.from('reviews').update({ likes }).eq('id', id));
    setReviews(prev => prev.map(r => r.id === id ? { ...r, likes } : r));
  };

  const getPlaceReviews     = (pid) => reviews.filter(r => r.placeId === pid);
  const getItineraryReviews = (iid) => reviews.filter(r => r.itineraryId === iid);

  // ── MESSAGES ─────────────────────────────────────────────────────────────
  const sendMessage = async ({ toUserId, text, attachmentType, attachmentId, attachmentData }) => {
    const to = users.find(u => u.id === toUserId);
    if (!to) throw new Error('User not found');
    // Respect messaging_visible — if recipient has turned it off, no messages
    if (to.messagingVisible === false) throw new Error('This user has turned off messaging');
    // My own visibility — if I turned off visibility I can't initiate either
    if (currentUser.messagingVisible === false) throw new Error('You have disabled messaging. Enable it in Settings to send messages.');

    // Content moderation — clean profanity before sending
    let cleanText = text || '';
    try {
      const { Filter } = require('bad-words');
      const filter = new Filter();
      cleanText = filter.clean(cleanText);
    } catch {}

    const { data, error } = await supabase.from('messages').insert({
      from_id: currentUser.id, from_name: currentUser.name,
      to_id: toUserId, to_name: to.name,
      text: cleanText,
      attachment_type: attachmentType || null,
      attachment_id: attachmentId || null,
      attachment_data: attachmentData || null,
    }).select().single();
    if (error) throw new Error(error.message);
    const msg = toCamel(data);
    setMessages(prev => [...prev, msg]);
    return msg;
  };

  // Search users by @username or display name. Respects messaging_visible.
  const searchUsers = (query) => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().replace(/^@/, '');
    return users.filter(u =>
      u.id !== currentUser?.id &&
      u.messagingVisible !== false &&
      (
        (u.username && u.username.toLowerCase().includes(q)) ||
        u.name.toLowerCase().includes(q)
      )
    ).slice(0, 20);
  };

  const updateUsername = async (username) => {
    const cleaned = (username || '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 30);
    if (!cleaned) throw new Error('Invalid username — use letters, numbers and underscores only');
    const { data, error } = await supabase.from('profiles').update({ username: cleaned }).eq('id', currentUser.id).select().single();
    if (error) {
      if (error.message?.includes('unique') || error.code === '23505') throw new Error('That username is already taken');
      throw new Error(error.message);
    }
    const updated = toCamel(data);
    setCurrentUser(updated);
    setUsers(prev => prev.map(u => u.id === currentUser.id ? updated : u));
    return updated;
  };

  const updateMessagingVisibility = async (visible) => {
    const { data, error } = await supabase.from('profiles').update({ messaging_visible: visible }).eq('id', currentUser.id).select().single();
    if (error) throw new Error(error.message);
    const updated = toCamel(data);
    setCurrentUser(updated);
    setUsers(prev => prev.map(u => u.id === currentUser.id ? updated : u));
    return updated;
  };

  const getConversations = () => {
    if (!currentUser) return [];
    const mine = messages.filter(m => m.fromId === currentUser.id || m.toId === currentUser.id);
    const pids = [...new Set(mine.map(m => m.fromId === currentUser.id ? m.toId : m.fromId))];
    return pids.map(pid => {
      const thread = mine.filter(m => m.fromId === pid || m.toId === pid);
      return {
        partner: users.find(u => u.id === pid),
        lastMsg: thread[thread.length - 1],
        unread: thread.filter(m => m.toId === currentUser.id && !m.read).length,
      };
    }).sort((a, b) => {
      const ta = a.lastMsg?.createdAt || 0;
      const tb = b.lastMsg?.createdAt || 0;
      return new Date(tb) - new Date(ta);
    });
  };

  const markThreadRead = async (partnerId) => {
    await sq(supabase.from('messages').update({ read: true }).eq('to_id', currentUser.id).eq('from_id', partnerId).eq('read', false));
    setMessages(prev => prev.map(m =>
      m.toId === currentUser.id && m.fromId === partnerId ? { ...m, read: true } : m
    ));
  };

  const getThread = (pid) => {
    if (!currentUser) return [];
    return messages
      .filter(m => (m.fromId === currentUser.id && m.toId === pid) || (m.fromId === pid && m.toId === currentUser.id))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  };

  // ── FOLLOW ────────────────────────────────────────────────────────────────
  const followUser = async (targetId) => {
    if (!currentUser || targetId === currentUser.id) return;
    const target = users.find(u => u.id === targetId); if (!target) return;
    const already = (currentUser.following || []).includes(targetId);
    const myF  = already ? (currentUser.following || []).filter(id => id !== targetId) : [...(currentUser.following || []), targetId];
    const thF  = already ? (target.followers || []).filter(id => id !== currentUser.id) : [...(target.followers || []), currentUser.id];
    await Promise.all([
      sq(supabase.from('profiles').update({ following: myF }).eq('id', currentUser.id)),
      sq(supabase.from('profiles').update({ followers: thF }).eq('id', targetId)),
    ]);
    const me = { ...currentUser, following: myF };
    setCurrentUser(me);
    setUsers(prev => prev.map(u => u.id === currentUser.id ? me : u.id === targetId ? { ...u, followers: thF } : u));
  };
  const isFollowing = (tid) => (currentUser?.following || []).includes(tid);

  // ── TRIPS ─────────────────────────────────────────────────────────────────
  const createTrip = async (d) => {
    const activities = (d.placeIds || []).map((pid, i) => ({ id: `a${i}`, placeId: pid, status: 'pending' }));
    const { data, error } = await supabase.from('trips').insert({
      guide_id: currentUser.id, guide_name: currentUser.name,
      guide_score: currentUser.guideScore ?? 100,
      itinerary_id: d.itineraryId || null, country_id: d.countryId,
      place_ids: d.placeIds || [], title: d.title,
      public_description: d.publicDescription || '',
      private_details: d.privateDetails || '',
      duration_days: d.durationDays || 1, group_size: d.groupSize || null,
      price: d.price, currency: d.currency || 'NGN',
      highlights: d.highlights || [], includes: d.includes || [],
      excludes: d.excludes || [], cover_photo: d.coverPhoto || null,
      status: d.status || 'draft', activities,
    }).select().single();
    if (error) throw new Error(error.message);
    const trip = toCamel(data);
    setTrips(prev => [trip, ...prev]);
    return trip;
  };

  const updateTrip = async (id, updates) => {
    const { data, error } = await supabase.from('trips').update(toSnake(updates)).eq('id', id).select().single();
    if (error) throw new Error(error.message);
    setTrips(prev => prev.map(t => t.id === id ? toCamel(data) : t));
  };

  const startTrip = async (tripId) => {
    const trip = trips.find(t => t.id === tripId); if (!trip) return;
    const activities = (trip.placeIds || []).map((pid, i) => ({ id: `a${i}`, placeId: pid, status: 'pending' }));
    await updateTrip(tripId, { status: 'live', startedAt: new Date().toISOString(), activities });
  };

  const updateActivity = async (tripId, idx, status) => {
    const trip = trips.find(t => t.id === tripId); if (!trip) return;
    const activities = (trip.activities || []).map((a, i) => i === idx ? { ...a, status } : a);
    await updateTrip(tripId, { activities });
  };

  const endTrip = async (tripId, score) => {
    const trip = trips.find(t => t.id === tripId); if (!trip) return;
    await updateTrip(tripId, { status: 'ended', endedAt: new Date().toISOString(), finalScore: score });
    const done = trips.filter(t => t.guideId === trip.guideId && t.status === 'ended' && t.finalScore != null);
    const rolling = Math.round([...done.map(t => t.finalScore), score].reduce((s, v) => s + v, 0) / (done.length + 1));
    await sq(supabase.from('profiles').update({ guide_score: rolling }).eq('id', trip.guideId));
    setUsers(prev => prev.map(u => u.id === trip.guideId ? { ...u, guideScore: rolling } : u));
    if (currentUser?.id === trip.guideId) setCurrentUser(prev => ({ ...prev, guideScore: rolling }));
  };

  const getTripBookings = (tripId) => bookings.filter(b => b.tripId === tripId);

  // ── BOOKINGS ──────────────────────────────────────────────────────────────
  const bookTrip = async ({ tripId, guideId, amount, guideAmount, platformCut, currency, reference, paystackRef }) => {
    const { data, error } = await supabase.from('bookings').insert({
      trip_id: tripId, guide_id: guideId,
      user_id: currentUser.id, user_name: currentUser.name, user_email: currentUser.email,
      amount, guide_amount: guideAmount, platform_cut: platformCut,
      currency, reference, paystack_ref: paystackRef,
    }).select().single();
    if (error) throw new Error(error.message);
    const bk = toCamel(data);
    setBookings(prev => [bk, ...prev]);
    const trip = trips.find(t => t.id === tripId);
    if (trip) await updateTrip(tripId, { bookingCount: (trip.bookingCount || 0) + 1 });
    return bk;
  };

  // ── COMMUNITY LOCATIONS ───────────────────────────────────────────────────────
  const submitLocation = async ({ countryId, countryName, stateId, stateName, name, description, category, tags }) => {
    const { data, error } = await supabase.from('pending_locations').insert({
      submitted_by: currentUser.id,
      submitter_name: currentUser.name,
      country_id: countryId,
      country_name: countryName,
      state_id: stateId || null,
      state_name: stateName || '',
      name,
      description,
      category,
      tags: tags || [],
      confirm_count: 0,
      confirmed_by: [],
      status: 'pending',
    }).select().single();
    if (error) throw new Error(error.message);
    const loc = toCamel(data);
    setPendingLocations(prev => [loc, ...prev]);
    return loc;
  };

  const confirmLocation = async (locationId) => {
    const loc = pendingLocations.find(l => l.id === locationId);
    if (!loc) throw new Error('Location not found');
    if (loc.submittedBy === currentUser.id) throw new Error("You can't confirm your own submission");
    if ((loc.confirmedBy || []).includes(currentUser.id)) throw new Error('Already confirmed');
    const newConfirmedBy = [...(loc.confirmedBy || []), currentUser.id];
    const newCount = newConfirmedBy.length;
    const newStatus = newCount >= 5 ? 'approved' : 'pending';
    const { data, error } = await supabase.from('pending_locations')
      .update({ confirmed_by: newConfirmedBy, confirm_count: newCount, status: newStatus })
      .eq('id', locationId).select().single();
    if (error) throw new Error(error.message);
    const updated = toCamel(data);
    setPendingLocations(prev => prev.map(l => l.id === locationId ? updated : l));
    return updated;
  };

  const getApprovedLocations = () => pendingLocations.filter(l => l.status === 'approved');
  const getPendingLocations  = () => pendingLocations.filter(l => l.status === 'pending');
  const getMySubmissions     = () => pendingLocations.filter(l => l.submittedBy === currentUser?.id);

  // ── NOTIFICATIONS ─────────────────────────────────────────────────────────
  const markNotifsRead = async () => {
    if (!currentUser) return;
    await sq(supabase.from('notifications').update({ read: true }).eq('user_id', currentUser.id).eq('read', false));
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };
  const unreadCount = notifications.filter(n => !n.read).length;

  // ── USER HELPERS ──────────────────────────────────────────────────────────
  const getUserById    = (id) => users.find(u => u.id === id);
  const getPublicUsers = ()   => users.filter(u => u.role === 'tourguide' || (u.itineraryCount || 0) > 0);

  return (
    <AppContext.Provider value={{
      currentUser, users, itineraries, reviews, messages, notifications,
      trips, bookings, loading, subscriptionActive,
      TOUR_GUIDE_REQUIREMENTS: TOUR_GUIDE_REQ,
      register, login, logout, updateUser,
      createItinerary, updateItinerary, deleteItinerary,
      getPublicItineraries, getUserItineraries, getItineraryById, canAccess,
      addReview, likeReview, getPlaceReviews, getItineraryReviews,
      sendMessage, getConversations, getThread, markThreadRead,
      searchUsers, updateUsername, updateMessagingVisibility,
      followUser, isFollowing,
      createTrip, updateTrip, startTrip, updateActivity, endTrip, getTripBookings,
      bookTrip,
      markNotifsRead, unreadCount,
      getUserById, getPublicUsers,
      pendingLocations, submitLocation, confirmLocation,
      getApprovedLocations, getPendingLocations, getMySubmissions,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp outside AppProvider');
  return ctx;
};
