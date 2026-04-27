import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext, useApp } from '../context/AppContext';
import { Colors } from '../utils/theme';
import { LoadingScreen } from '../components/UI';

import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { LoginScreen, RegisterScreen } from '../screens/auth/AuthScreens';
import { ExploreScreen, CountryDetailScreen } from '../screens/explore/ExploreScreens';
import { PlaceDetailScreen } from '../screens/explore/PlaceDetailScreen';
import { ItineraryMapScreen, CountryMapScreen } from '../screens/explore/MapScreens';
import { FeedScreen, MyItinerariesScreen, CreateItineraryScreen, ItineraryDetailScreen } from '../screens/itinerary/ItineraryScreens';
import { AddReviewScreen } from '../screens/reviews/AddReviewScreen';
import { SubmitLocationScreen, CommunityLocationsScreen } from '../screens/explore/CommunityLocationsScreen';
import { ProfileScreen, UserProfileScreen, MessagesInboxScreen, MessageThreadScreen, EditProfileScreen } from '../screens/profile/ProfileScreens';
import { AttachPickerScreen } from '../screens/profile/AttachPickerScreen';
import { NotificationsScreen } from '../screens/profile/NotificationsScreen';
import { PaywallScreen, ManageSubscriptionScreen } from '../screens/payment/SubscriptionScreens';
import { TripsMarketplaceScreen, TripDetailScreen, CreateTripScreen } from '../screens/trips/TripScreens';
import { LiveTripScreen, MyBookingsScreen, GuideEarningsScreen, BankAccountScreen } from '../screens/trips/LiveTripScreens';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();
const S1    = createNativeStackNavigator();
const S2    = createNativeStackNavigator();
const S3    = createNativeStackNavigator();
const S4    = createNativeStackNavigator();

function Shared(Nav) {
  return (
    <>
      <Nav.Screen name="PlaceDetail"      component={PlaceDetailScreen} />
      <Nav.Screen name="ItineraryDetail"  component={ItineraryDetailScreen} />
      <Nav.Screen name="ItineraryMap"     component={ItineraryMapScreen} />
      <Nav.Screen name="CountryMap"       component={CountryMapScreen} />
      <Nav.Screen name="UserProfile"      component={UserProfileScreen} />
      <Nav.Screen name="CreateItinerary"  component={CreateItineraryScreen} />
      <Nav.Screen name="AddReview"        component={AddReviewScreen} />
      <Nav.Screen name="Messages"         component={MessageThreadScreen} />
      <Nav.Screen name="TripDetail"       component={TripDetailScreen} />
      <Nav.Screen name="LiveTrip"         component={LiveTripScreen} />
      <Nav.Screen name="Paywall"            component={PaywallScreen} />
      <Nav.Screen name="CommunityLocations" component={CommunityLocationsScreen} />
      <Nav.Screen name="SubmitLocation"     component={SubmitLocationScreen} />
      <Nav.Screen name="ConfirmLocation"    component={CommunityLocationsScreen} />
      <Nav.Screen name="AttachPicker"        component={AttachPickerScreen} />
    </>
  );
}

function ExploreNav() {
  return (
    <S1.Navigator screenOptions={{ headerShown: false }}>
      <S1.Screen name="ExploreHome"   component={ExploreScreen} />
      <S1.Screen name="CountryDetail" component={CountryDetailScreen} />
      {Shared(S1)}
    </S1.Navigator>
  );
}

function CommunityNav() {
  return (
    <S2.Navigator screenOptions={{ headerShown: false }}>
      <S2.Screen name="FeedHome"      component={FeedScreen} />
      <S2.Screen name="MyItineraries" component={MyItinerariesScreen} />
      {Shared(S2)}
    </S2.Navigator>
  );
}

function TripsNav() {
  return (
    <S3.Navigator screenOptions={{ headerShown: false }}>
      <S3.Screen name="TripsHome"     component={TripsMarketplaceScreen} />
      <S3.Screen name="CreateTrip"    component={CreateTripScreen} />
      <S3.Screen name="MyBookings"    component={MyBookingsScreen} />
      <S3.Screen name="GuideEarnings" component={GuideEarningsScreen} />
      <S3.Screen name="BankAccount"   component={BankAccountScreen} />
      {Shared(S3)}
    </S3.Navigator>
  );
}

function ProfileNav() {
  return (
    <S4.Navigator screenOptions={{ headerShown: false }}>
      <S4.Screen name="ProfileHome"        component={ProfileScreen} />
      <S4.Screen name="MyItineraries"      component={MyItinerariesScreen} />
      <S4.Screen name="MessagesInbox"      component={MessagesInboxScreen} />
      <S4.Screen name="EditProfile"        component={EditProfileScreen} />
      <S4.Screen name="Notifications"      component={NotificationsScreen} />
      <S4.Screen name="ManageSubscription" component={ManageSubscriptionScreen} />
      <S4.Screen name="MyBookings"         component={MyBookingsScreen} />
      <S4.Screen name="GuideEarnings"      component={GuideEarningsScreen} />
      <S4.Screen name="BankAccount"        component={BankAccountScreen} />
      {Shared(S4)}
    </S4.Navigator>
  );
}

const TAB_ICONS = {
  Explore:  { on: '🌍', off: '🗺️', label: 'Explore'  },
  Journeys: { on: '✈️',  off: '🛫', label: 'Journeys' },
  Trips:    { on: '🧭', off: '🧭', label: 'Trips'    },
  Profile:  { on: '👤', off: '🧑', label: 'Profile'  },
};

// Tab icon with circular active highlight
function TabIcon({ name, focused }) {
  const icons = TAB_ICONS[name];
  return (
    <View style={[st.iconWrap, focused && st.iconWrapActive]}>
      <Text style={{ fontSize: 21 }}>{focused ? icons?.on : icons?.off}</Text>
    </View>
  );
}

// Profile icon with unread badge
function ProfileTabIcon({ focused }) {
  const ctx = React.useContext(AppContext);
  const unreadCount = ctx?.unreadCount || 0;
  return (
    <View style={[st.iconWrap, focused && st.iconWrapActive]}>
      <Text style={{ fontSize: 21 }}>{focused ? '👤' : '🧑'}</Text>
      {unreadCount > 0 && (
        <View style={st.badge}>
          <Text style={st.badgeText}>{unreadCount > 9 ? '9+' : unreadCount}</Text>
        </View>
      )}
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: st.bar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: st.label,
        tabBarIcon: ({ focused }) =>
          route.name === 'Profile'
            ? <ProfileTabIcon focused={focused} />
            : <TabIcon name={route.name} focused={focused} />,
      })}
    >
      <Tab.Screen name="Explore"   component={ExploreNav} />
      <Tab.Screen name="Journeys"  component={CommunityNav} />
      <Tab.Screen name="Trips"     component={TripsNav} />
      <Tab.Screen name="Profile"   component={ProfileNav} />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  const { currentUser, loading } = useApp();
  const [checkingOnboarding, setCheckingOnboarding] = React.useState(true);
  const [onboardingDone, setOnboardingDone]         = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem('ajala_onboarding_done')
      .then(val => {
        setOnboardingDone(!!val);
        setCheckingOnboarding(false);
      })
      .catch(() => setCheckingOnboarding(false));
  }, []);

  if (loading || checkingOnboarding) return <LoadingScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {currentUser ? (
          <Stack.Screen name="Main" component={Tabs} />
        ) : (
          <>
            {!onboardingDone && (
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
            <Stack.Screen name="Login"    component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const st = StyleSheet.create({
  bar: {
    backgroundColor: Colors.surface,
    borderTopWidth: 0,
    height: 74,
    paddingBottom: 10,
    paddingTop: 6,
    // Floating shadow instead of border
    shadowColor: '#1A0A00',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 16,
  },
  label: { fontSize: 11, fontWeight: '600', marginTop: 2 },
  iconWrap: {
    width: 44, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: Colors.primaryFaint,
  },
  badge: {
    position: 'absolute', top: -2, right: -4,
    backgroundColor: '#E63946', borderRadius: 8,
    minWidth: 16, height: 16,
    alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },
});
