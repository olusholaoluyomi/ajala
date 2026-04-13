# Ajala — Travel the World

> **The world is yours to explore.**

Ajala is a community-powered travel app for discovering destinations, planning itineraries, booking guided trips, and sharing your journeys with fellow explorers worldwide.

---

## Features

| Area | What it does |
|---|---|
| **Explore** | Browse countries, regions and places with ratings, reviews and category tags |
| **Journeys** | Community-created itineraries — public or invite-only, with star ratings |
| **Trips** | Book curated trip packages from verified guides, with Paystack payments |
| **Suggest a Place** | Know somewhere not yet on the map? Submit it for community approval |
| **Tour Guide Status** | Earn guide status automatically by publishing 3+ itineraries with 10+ reviews at 4.0+ |
| **Messaging** | Direct messages between travellers and guides |
| **Live Trips** | Real-time trip tracking for booked experiences |
| **Notifications** | Push notifications for bookings, reviews, and messages |

---

## Tech Stack

- **React Native** (Expo SDK 54, bare workflow)
- **Supabase** — Postgres database, auth, real-time, storage
- **Paystack** — payment processing (NGN + multi-currency)
- **React Navigation** v7 — bottom tabs + native stack
- **Expo Notifications** — push notifications
- **Expo Image Picker** — review photos

---

## Project Structure

```
ajala/
├── src/
│   ├── components/       # Shared UI components (Button, Card, LoadingScreen, …)
│   ├── context/          # AppContext — global state, Supabase calls
│   ├── data/             # Static world data (countries, regions, places)
│   ├── navigation/       # RootNavigator, tab & stack setup
│   ├── screens/
│   │   ├── auth/         # Login, Register
│   │   ├── explore/      # Explore, CountryDetail, PlaceDetail, Maps, CommunityLocations
│   │   ├── itinerary/    # Feed, MyItineraries, CreateItinerary, ItineraryDetail
│   │   ├── trips/        # Marketplace, TripDetail, CreateTrip, LiveTrip, Bookings
│   │   ├── profile/      # Profile, EditProfile, Messages, Notifications
│   │   ├── reviews/      # AddReview
│   │   └── payment/      # Paywall, ManageSubscription
│   └── utils/            # supabase.js, theme.js, paystack.js, notifications.js
├── android/              # Native Android project
├── assets/               # App icons, splash screen
├── app.json              # Expo config
└── supabase_schema.sql   # Full database schema
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g expo`
- Android Studio (for Android builds) or Xcode (for iOS)
- A [Supabase](https://supabase.com) project
- A [Paystack](https://paystack.com) account

### Install

```bash
git clone https://github.com/olusholaoluyomi/ajala.git
cd ajala
npm install
```

### Configure environment

The Supabase URL and anon key are in `src/utils/supabase.js`. Replace with your own project credentials:

```js
const SUPABASE_URL  = 'https://your-project.supabase.co';
const SUPABASE_ANON = 'your-anon-key';
```

The Paystack public key is in `src/utils/paystack.js`.

### Database

Run `supabase_schema.sql` against your Supabase project to create all tables, policies, and triggers.

### Run (development)

```bash
# Start Metro bundler
npx expo start

# Run on Android device/emulator
npx expo run:android

# Run on iOS simulator
npx expo run:ios
```

---

## Building a Release APK

A signed release APK is required to install outside the Play Store.

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

> The release keystore (`ajala-release.keystore`) is stored in `android/app/`. Keep it safe — you need the same keystore to publish updates to the Play Store. **Do not lose it.**

---

## Pricing & Currency

All trip prices are stored in **USD** in the database. The app displays:
- The USD price prominently (`$3,800`)
- The NGN equivalent beneath it (`₦6,004,000 per person`)

The conversion rate is defined in `src/screens/trips/TripScreens.js` as `USD_TO_NGN`. Update this constant when the exchange rate changes significantly.

---

## Community Places

Users can suggest places not yet in the database by tapping **"📍 Missing a place?"** in any country/region view. Suggestions go through a peer-approval flow — a configured number of community confirmations are required before a place goes live.

---

## Tour Guide Upgrade

Explorers are automatically promoted to **Tour Guide** when they:
- Publish **3 or more** public itineraries
- Receive **10 or more** reviews across those itineraries
- Maintain an average rating of **4.0 or above**

The upgrade runs automatically when any review is submitted (`checkUpgrade` in AppContext).

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push and open a pull request

---

## License

MIT — free to use, modify and distribute.

---

*Built with love for African and global travellers.*
