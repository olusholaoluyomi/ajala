-- ============================================================
-- AJALA DATABASE SCHEMA
-- Paste this entire file into: Supabase → SQL Editor → Run
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── PROFILES (extends Supabase auth.users) ───────────────────────────────────
create table if not exists profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  name          text not null,
  email         text not null,
  bio           text default '',
  avatar_url    text,
  role          text default 'explorer' check (role in ('explorer','tourguide')),
  currency      text default 'NGN',
  dm_open       boolean default false,
  guide_score   integer default 100,

  -- subscription
  subscription_status     text default null,  -- null | active | cancelled
  subscription_reference  text,
  subscription_currency   text,
  subscription_start_date timestamptz,
  subscription_next_billing timestamptz,
  paystack_auth_code      text,
  card_last4              text,
  card_brand              text,

  -- payout
  bank_name       text,
  account_number  text,
  account_name    text,

  -- stats
  itinerary_count integer default 0,
  review_count    integer default 0,
  avg_rating      numeric(3,2) default 0,
  followers       uuid[] default '{}',
  following       uuid[] default '{}',

  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ── ITINERARIES ───────────────────────────────────────────────────────────────
create table if not exists itineraries (
  id              uuid primary key default uuid_generate_v4(),
  title           text not null,
  description     text default '',
  country_id      text not null,
  state_id        text,
  place_ids       text[] default '{}',
  visibility      text default 'public' check (visibility in ('public','private')),
  invited_emails  text[] default '{}',
  creator_id      uuid references profiles(id) on delete cascade,
  creator_name    text,
  creator_role    text,
  cover_photo     text,
  status          text default 'active',
  review_count    integer default 0,
  avg_rating      numeric(3,2) default 0,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── REVIEWS ──────────────────────────────────────────────────────────────────
create table if not exists reviews (
  id            uuid primary key default uuid_generate_v4(),
  itinerary_id  uuid references itineraries(id) on delete set null,
  place_id      text,
  comment       text not null,
  rating        integer not null check (rating between 1 and 5),
  photos        text[] default '{}',
  author_id     uuid references profiles(id) on delete cascade,
  author_name   text,
  author_role   text,
  likes         uuid[] default '{}',
  created_at    timestamptz default now()
);

-- ── MESSAGES ─────────────────────────────────────────────────────────────────
create table if not exists messages (
  id          uuid primary key default uuid_generate_v4(),
  from_id     uuid references profiles(id) on delete cascade,
  from_name   text,
  to_id       uuid references profiles(id) on delete cascade,
  to_name     text,
  text        text not null,
  read        boolean default false,
  created_at  timestamptz default now()
);

-- ── NOTIFICATIONS ─────────────────────────────────────────────────────────────
create table if not exists notifications (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references profiles(id) on delete cascade,
  type          text not null,
  title         text not null,
  body          text,
  read          boolean default false,
  itinerary_id  uuid,
  place_id      text,
  trip_id       uuid,
  created_at    timestamptz default now()
);

-- ── TRIPS (guide packages) ────────────────────────────────────────────────────
create table if not exists trips (
  id                  uuid primary key default uuid_generate_v4(),
  guide_id            uuid references profiles(id) on delete cascade,
  guide_name          text,
  guide_score         integer default 100,
  itinerary_id        uuid references itineraries(id) on delete set null,
  country_id          text,
  place_ids           text[] default '{}',
  title               text not null,
  public_description  text default '',
  private_details     text default '',
  duration_days       integer default 1,
  group_size          integer,
  price               numeric(12,2) not null,
  currency            text default 'NGN',
  highlights          text[] default '{}',
  includes            text[] default '{}',
  excludes            text[] default '{}',
  cover_photo         text,
  status              text default 'draft' check (status in ('draft','published','live','ended')),
  booking_count       integer default 0,
  avg_rating          numeric(3,2) default 0,
  activities          jsonb default '[]',
  final_score         integer,
  started_at          timestamptz,
  ended_at            timestamptz,
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

-- ── BOOKINGS ─────────────────────────────────────────────────────────────────
create table if not exists bookings (
  id            uuid primary key default uuid_generate_v4(),
  trip_id       uuid references trips(id) on delete set null,
  guide_id      uuid references profiles(id) on delete set null,
  user_id       uuid references profiles(id) on delete cascade,
  user_name     text,
  user_email    text,
  amount        numeric(12,2) not null,     -- total user paid
  guide_amount  numeric(12,2) not null,     -- guide's share
  platform_cut  numeric(12,2) not null,     -- Ajala's cut
  currency      text default 'NGN',
  reference     text not null unique,       -- AJALA-BOOK-... structured ref
  paystack_ref  text,                       -- Paystack transaction reference
  disbursed     boolean default false,
  disbursed_at  timestamptz,
  created_at    timestamptz default now()
);

-- ── ROW LEVEL SECURITY ────────────────────────────────────────────────────────
alter table profiles       enable row level security;
alter table itineraries    enable row level security;
alter table reviews        enable row level security;
alter table messages       enable row level security;
alter table notifications  enable row level security;
alter table trips          enable row level security;
alter table bookings       enable row level security;

-- profiles: anyone can read, only owner can update
create policy "Public profiles" on profiles for select using (true);
create policy "Users update own profile" on profiles for update using (auth.uid() = id);

-- itineraries: public ones visible to all, private only to creator/invited
create policy "Public itineraries visible" on itineraries for select
  using (visibility = 'public' or auth.uid() = creator_id or auth.email() = any(invited_emails));
create policy "Authenticated users insert" on itineraries for insert with check (auth.uid() = creator_id);
create policy "Creator can update" on itineraries for update using (auth.uid() = creator_id);
create policy "Creator can delete" on itineraries for delete using (auth.uid() = creator_id);

-- reviews: all public
create policy "Reviews public" on reviews for select using (true);
create policy "Auth users insert reviews" on reviews for insert with check (auth.uid() = author_id);
create policy "Author updates own review" on reviews for update using (auth.uid() = author_id);

-- messages: only participants
create policy "Message participants" on messages for select
  using (auth.uid() = from_id or auth.uid() = to_id);
create policy "Auth users send messages" on messages for insert with check (auth.uid() = from_id);
create policy "Recipient marks read" on messages for update using (auth.uid() = to_id);

-- notifications: only owner
create policy "Own notifications" on notifications for select using (auth.uid() = user_id);
create policy "Insert notifications" on notifications for insert with check (true);
create policy "Mark own read" on notifications for update using (auth.uid() = user_id);

-- trips: published visible to all
create policy "Published trips visible" on trips for select
  using (status = 'published' or status = 'live' or status = 'ended' or auth.uid() = guide_id);
create policy "Guide inserts trips" on trips for insert with check (auth.uid() = guide_id);
create policy "Guide updates trips" on trips for update using (auth.uid() = guide_id);

-- bookings: guide and booker can see
create policy "Booking participants" on bookings for select
  using (auth.uid() = user_id or auth.uid() = guide_id);
create policy "Auth users book" on bookings for insert with check (auth.uid() = user_id);

-- ── REALTIME ──────────────────────────────────────────────────────────────────
-- Enable realtime for live trip updates and messages
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table trips;
alter publication supabase_realtime add table notifications;

-- ── STORAGE BUCKET (for review photos) ───────────────────────────────────────
-- Run this separately in SQL editor if needed:
-- insert into storage.buckets (id, name, public) values ('review-photos', 'review-photos', true);

-- ============================================================
-- DONE. Your Ajala database is ready.
-- ============================================================
