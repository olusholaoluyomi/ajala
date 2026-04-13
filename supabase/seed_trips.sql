-- ═══════════════════════════════════════════════════════════════
-- AJALA — Seed Trips SQL
-- Run this in the Supabase SQL Editor
-- Prerequisites: olusholaoluyomi@gmail.com must be registered in the app first
-- ═══════════════════════════════════════════════════════════════

-- Step 1: Promote guide to tourguide role
UPDATE profiles
SET role = 'tourguide'
WHERE email = 'olusholaoluyomi@gmail.com';

-- Step 2: Get guide ID (we'll use it via subquery below)
-- All inserts below use: (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com')

-- ═══════════════════════════════════════════════════════════════
-- ITINERARIES (required before trips)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO itineraries (id, user_id, title, country_id, place_ids, notes, created_at)
VALUES

-- Nigeria
('iti-ng-lagos-classic', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Lagos Classic Tour', 'NG',
 ARRAY['NG-LA-001','NG-LA-002','NG-LA-004','NG-LA-007','NG-LA-008'],
 'Classic Lagos experience — nature, art, history and island life.', NOW()),

('iti-ng-cultural', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Nigeria Heritage & Culture', 'NG',
 ARRAY['NG-AB-001','NG-AB-002','NG-AB-004','NG-KN-001','NG-KN-002','NG-CR-001'],
 'From Abuja to Kano to Cross River — the heart of Nigerian history.', NOW()),

('iti-ng-nature', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Nigerian Nature & Wildlife', 'NG',
 ARRAY['NG-CR-001','NG-CR-002','NG-CR-003','NG-LA-001','NG-OG-001'],
 'Gorillas, waterfalls, mangroves and mountain resorts.', NOW()),

-- Ghana
('iti-gh-heritage', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Ghana Heritage Trail', 'GH',
 ARRAY['GH-CR-001','GH-CR-003','GH-ACC-002','GH-ASH-001','GH-ASH-006'],
 'Slave castles, Ashanti royalty and kente weaving villages.', NOW()),

('iti-gh-nature', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Ghana Nature & Culture', 'GH',
 ARRAY['GH-CR-002','GH-VR-001','GH-VR-002','GH-NR-001','GH-NR-002'],
 'Kakum canopy, Wli waterfalls, monkey sanctuary and Mole safari.', NOW()),

-- Kenya
('iti-ke-safari', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Kenya Big Five Safari', 'KE',
 ARRAY['KE-MAA-001','KE-MAA-002','KE-MAA-004','KE-NAI-001','KE-NAI-004'],
 'The Great Migration, hot air balloon safari and Nairobi elephant orphanage.', NOW()),

('iti-ke-coast', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Kenya Coast & Swahili Culture', 'KE',
 ARRAY['KE-MOM-001','KE-MOM-002','KE-MOM-003','KE-MOM-009','KE-MOM-004'],
 'Fort Jesus, Diani Beach, Lamu Old Town and Watamu marine park.', NOW()),

-- South Africa
('iti-za-capetown', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Cape Town Highlights', 'ZA',
 ARRAY['ZA-WC-001','ZA-WC-002','ZA-WC-003','ZA-WC-005','ZA-WC-006','ZA-WC-008'],
 'Table Mountain, Robben Island, penguins and Chapman''s Peak.', NOW()),

('iti-za-safari', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'South Africa Safari & History', 'ZA',
 ARRAY['ZA-KZN-009','ZA-GP-001','ZA-GP-003','ZA-GP-002','ZA-KZN-002'],
 'Kruger NP, Apartheid Museum, Soweto, Cradle of Humankind, Drakensberg.', NOW()),

-- Tanzania
('iti-tz-serengeti', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Tanzania Ultimate Safari', 'TZ',
 ARRAY['TZ-SER-001','TZ-SER-002','TZ-SER-006','TZ-KIL-002','TZ-SER-004'],
 'Serengeti, Ngorongoro Crater, balloon safari and Mt Kilimanjaro scenic trek.', NOW()),

('iti-tz-zanzibar', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Zanzibar Island Escape', 'TZ',
 ARRAY['TZ-ZAN-001','TZ-ZAN-002','TZ-ZAN-003','TZ-ZAN-008','TZ-ZAN-009'],
 'Stone Town, Nungwi beach, spice tour, Mnemba snorkelling and night market.', NOW()),

-- Morocco
('iti-ma-imperial', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Morocco Imperial Cities', 'MA',
 ARRAY['MA-MAR-001','MA-MAR-002','MA-MAR-003','MA-FES-001','MA-FES-002'],
 'Jemaa el-Fna, Majorelle Garden, Marrakech medina, Fes UNESCO medina and tanneries.', NOW()),

('iti-ma-desert', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Sahara Desert Adventure', 'MA',
 ARRAY['MA-SAH-001','MA-SAH-002','MA-MAR-004','MA-FES-001'],
 'Erg Chebbi dunes, desert camp, Bahia Palace and Fes medina.', NOW()),

-- Egypt
('iti-eg-ancient', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Egypt — Wonders of the Ancient World', 'EG',
 ARRAY['EG-CAI-001','EG-CAI-004','EG-CAI-002','EG-LUX-001','EG-LUX-002'],
 'Pyramids, Sphinx, Egyptian Museum, Valley of Kings and Karnak Temple.', NOW()),

-- Zimbabwe
('iti-zw-falls', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Victoria Falls Adventure', 'ZW',
 ARRAY['ZW-VIC-001','ZW-VIC-002','ZW-VIC-003','ZW-VIC-004','ZW-VIC-005'],
 'The falls, Devil''s Pool swim, bungee jump, Zambezi sunset cruise and Hwange safari.', NOW()),

-- UAE
('iti-ae-dubai', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Dubai Highlights', 'AE',
 ARRAY['AE-DXB-001','AE-DXB-004','AE-DXB-003','AE-ABU-001','AE-ABU-002'],
 'Burj Khalifa, desert safari, gold souk, Sheikh Zayed Mosque and Louvre Abu Dhabi.', NOW()),

-- UK
('iti-gb-london', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'London & Scotland Explorer', 'GB',
 ARRAY['GB-LON-001','GB-LON-002','GB-LON-004','GB-SCO-003','GB-SCO-001'],
 'British Museum, Tower of London, National Gallery, Isle of Skye and Edinburgh Castle.', NOW()),

-- Japan
('iti-jp-classic', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Japan — Tokyo to Kyoto', 'JP',
 ARRAY['JP-TOK-001','JP-TOK-003','JP-KYO-001','JP-KYO-002','JP-KYO-003'],
 'Senso-ji, teamLab digital art, Fushimi Inari, Bamboo Grove and Golden Pavilion.', NOW()),

-- Argentina
('iti-ar-patagonia', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Argentina Highlights', 'AR',
 ARRAY['AR-PAT-001','AR-PAT-003','AR-BUE-001','AR-BUE-003','AR-BUE-004'],
 'Perito Moreno Glacier, Iguazú Falls, La Boca, tango show and Teatro Colón.', NOW()),

-- Canada
('iti-ca-rockies', (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
 'Canadian Rockies & Vancouver', 'CA',
 ARRAY['CA-AB-001','CA-AB-002','CA-AB-004','CA-BC-002','CA-BC-001'],
 'Banff, Moraine Lake, Northern Lights, Stanley Park and Whistler.', NOW())

ON CONFLICT (id) DO NOTHING;


-- ═══════════════════════════════════════════════════════════════
-- TRIPS
-- ═══════════════════════════════════════════════════════════════

INSERT INTO trips (
  id, guide_id, itinerary_id, title, public_description, private_details,
  country_id, place_ids, duration_days, group_size,
  price, currency, highlights, includes, excludes,
  cover_photo, status, booking_count, avg_rating, guide_score, created_at
)
VALUES

-- ──────────────────────────────────────────────────
-- 🎒 BUDGET TRIPS (under ₦50,000)
-- ──────────────────────────────────────────────────

(
  'trip-ng-lagos-budget',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ng-lagos-classic',
  'Lagos in a Weekend — Culture & Coast',
  'Experience the best of Lagos without breaking the bank. We hit Lekki Conservation Centre''s famous canopy walk, admire Nigerian art at Nike Gallery, explore Freedom Park''s colonial history, then cap off with a sunset at Elegushi beach. Perfect introduction to Africa''s most energetic city.',
  'Meet at Lekki Phase 1 gate at 8am Saturday. Comfortable walking shoes required. Bring sunscreen and a camera.',
  'NG',
  ARRAY['NG-LA-001','NG-LA-002','NG-LA-004','NG-LA-007','NG-LA-008'],
  2, 12, 25000, 'NGN',
  ARRAY['Africa''s longest canopy walkway at Lekki Conservation', 'Nike Art Gallery — 5 floors of Nigerian art', 'Colonial-era Freedom Park experience', 'Sunset at Elegushi Beach'],
  ARRAY['Transport between sites', 'Park entry fees', 'Expert local guide', 'Bottled water'],
  ARRAY['Accommodation', 'Meals', 'Personal expenses'],
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
  'published', 47, 4.6, 94, NOW() - INTERVAL '45 days'
),

(
  'trip-gh-heritage-budget',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-gh-heritage',
  'Ghana — Slave Castles & Ashanti Kingdom',
  'A powerful journey through Ghana''s complex history. Walk the "Door of No Return" at Cape Coast Castle, visit Elmina (Sub-Saharan Africa''s oldest European building), then head to Kumasi to experience Ashanti royal heritage at Manhyia Palace and watch kente being woven in Bonwire village.',
  'Pickup from Accra hotels Friday morning. Overnight in Cape Coast. Return Sunday evening.',
  'GH',
  ARRAY['GH-CR-001','GH-CR-003','GH-ACC-002','GH-ASH-001','GH-ASH-006'],
  3, 10, 45000, 'NGN',
  ARRAY['UNESCO Cape Coast Castle & Door of No Return', 'Elmina Castle — Africa''s oldest European building', 'Manhyia Palace Royal Museum, Kumasi', 'Live kente weaving demonstration at Bonwire'],
  ARRAY['Return transport from Accra', 'Accommodation (shared rooms)', 'Castle entry fees', 'Cultural guide'],
  ARRAY['International flights', 'Single room supplement (add ₦8,000)', 'Meals', 'Visa fees'],
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  'published', 31, 4.7, 91, NOW() - INTERVAL '30 days'
),

(
  'trip-ng-nature-budget',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ng-nature',
  'Cross River Gorillas & Obudu Mountains',
  'Nigeria''s most breathtaking natural escape. Trek through Cross River National Park — one of Africa''s last intact rainforests and home to endangered gorillas — then ascend to Obudu Mountain Resort for cool climate, cable car rides and misty highland views. A nature lover''s dream within Nigeria.',
  'Depart Calabar. 4WD vehicles used for park sections. Moderate fitness required.',
  'NG',
  ARRAY['NG-CR-001','NG-CR-002','NG-CR-003'],
  3, 8, 38000, 'NGN',
  ARRAY['Cross River National Park gorilla habitat trek', 'Obudu Mountain Resort cable car ride', 'Kwa Falls — majestic waterfall swim'],
  ARRAY['Return transport from Calabar', 'Park entry fees', 'Guide', 'Shared accommodation'],
  ARRAY['Flights to Calabar', 'Meals', 'Personal gear'],
  'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
  'published', 22, 4.5, 89, NOW() - INTERVAL '20 days'
),

-- ──────────────────────────────────────────────────
-- ⭐ MID-RANGE TRIPS (₦50,000 – ₦150,000)
-- ──────────────────────────────────────────────────

(
  'trip-ke-safari-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ke-safari',
  'Kenya — Maasai Mara Great Migration Safari',
  'Witness one of nature''s greatest spectacles — 1.5 million wildebeest crossing the Mara River. Four days of game drives in the Maasai Mara, a sunrise hot air balloon flight over the plains, time with a Maasai warrior community, and a visit to Nairobi''s baby elephant orphanage. Africa at its most extraordinary.',
  'Fly into Nairobi, transfer to Mara by road (5hrs) or shared charter. Safari vehicles shared with max 6 passengers.',
  'KE',
  ARRAY['KE-MAA-001','KE-MAA-002','KE-MAA-004','KE-NAI-001','KE-NAI-004'],
  5, 8, 95000, 'NGN',
  ARRAY['4 full days of Maasai Mara game drives', 'Sunrise hot air balloon safari over the plains', 'Wildebeest river crossing viewpoint (seasonal)', 'Baby elephant feeding at Sheldrick Trust', 'Maasai village and warrior cultural experience'],
  ARRAY['Nairobi–Mara return transport', 'Lodge accommodation (shared twin)', 'All game drives', 'Park entry fees', 'English-speaking guide'],
  ARRAY['International flights to Nairobi', 'Balloon safari (₦25,000 supplement)', 'Single room supplement', 'Kenya visa', 'Travel insurance'],
  'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
  'published', 89, 4.9, 97, NOW() - INTERVAL '60 days'
),

(
  'trip-tz-zanzibar-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-tz-zanzibar',
  'Zanzibar — Spice Island Paradise',
  'The ultimate Indian Ocean escape. Five days on the spice island of Zanzibar — explore UNESCO Stone Town''s carved Arab doorways, swim at Nungwi''s turquoise beach, snorkel Mnemba Island''s pristine coral reef, join a spice farm tour, and feast at Forodhani''s famous night market. Perfection.',
  'Fly into Zanzibar (ZNZ). Hotel pickups arranged. Dhow snorkel trips depart 9am.',
  'TZ',
  ARRAY['TZ-ZAN-001','TZ-ZAN-002','TZ-ZAN-003','TZ-ZAN-008','TZ-ZAN-009'],
  5, 10, 75000, 'NGN',
  ARRAY['UNESCO Stone Town walking tour with historian guide', 'Mnemba Island snorkel — turtles, dolphins and coral', 'Working spice farm tour with tastings', 'Nungwi beach — 2 free days', 'Forodhani Night Market — Zanzibar pizza and street food'],
  ARRAY['Airport transfers', 'Hotel (shared twin, B&B)', 'Stone Town tour', 'Snorkel trip', 'Spice tour'],
  ARRAY['International flights to Zanzibar', 'Meals (except breakfast)', 'Tanzania visa'],
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
  'published', 63, 4.8, 95, NOW() - INTERVAL '40 days'
),

(
  'trip-ma-imperial-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'Morocco — Imperial Cities & Sahara',
  'Seven days across Morocco''s greatest treasures. Lose yourself in Marrakech''s Jemaa el-Fna at dusk, marvel at Majorelle Garden, wander Fes el Bali — the world''s largest car-free urban area — watch leather being tanned as it has been since the 11th century, then spend a night under the Saharan stars in Merzouga.',
  'Start in Marrakech, end in Fes. Private transport between cities. Riad accommodation.',
  'MA',
  ARRAY['MA-MAR-001','MA-MAR-002','MA-MAR-003','MA-FES-001','MA-FES-002','MA-SAH-001','MA-SAH-002'],
  7, 10, 85000, 'NGN',
  ARRAY['Jemaa el-Fna UNESCO square at sunset', 'Majorelle Garden — Yves Saint Laurent''s cobalt masterpiece', 'UNESCO Fes el Bali medina labyrinth tour', 'Chouara Tannery — leather dyeing since 1000 AD', 'Sahara Desert camp — camel trek and stargazing'],
  ARRAY['Marrakech–Fes private transport', 'Riad accommodation (twin rooms)', 'Local guides in each city', 'Desert camp with dinner', 'Airport transfers'],
  ARRAY['Flights to Morocco', 'Meals (except riad breakfast)', 'Morocco visa (if applicable)', 'Hammam (optional extra)'],
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
  'published', 54, 4.8, 93, NOW() - INTERVAL '35 days'
),

(
  'trip-za-capetown-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-za-capetown',
  'Cape Town — Mother City Magic',
  'The most beautiful city in Africa. Six days exploring Cape Town''s extraordinary diversity — cable car up Table Mountain at sunrise, walk among African penguins at Boulders Beach, cross to Robben Island where Mandela was imprisoned, drive the dramatic Chapman''s Peak, and taste Stellenbosch wine country.',
  'Accommodation in Cape Town city centre. All activities depart from hotel.',
  'ZA',
  ARRAY['ZA-WC-001','ZA-WC-002','ZA-WC-003','ZA-WC-005','ZA-WC-006','ZA-WC-008'],
  6, 12, 110000, 'NGN',
  ARRAY['Table Mountain cable car at sunrise', 'Robben Island — Mandela''s cell tour', 'Boulders Beach penguin colony walk', 'Chapman''s Peak scenic drive', 'Bo-Kaap Cape Malay quarter and cooking class'],
  ARRAY['Hotel accommodation (twin, B&B)', 'All transport', 'Table Mountain entry', 'Robben Island ferry and tour', 'Penguin entry fee', 'Local guide throughout'],
  ARRAY['International flights to Cape Town', 'Stellenbosch wine tasting (₦12,000 supplement)', 'Dinners', 'South Africa visa (if applicable)'],
  'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
  'published', 71, 4.9, 96, NOW() - INTERVAL '50 days'
),

(
  'trip-gh-nature-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-gh-nature',
  'Ghana — Forest, Falls & Safari',
  'Ghana''s wild side. Walk the famous Kakum canopy 30 metres above ancient rainforest, hike to West Africa''s highest waterfall at Wli (where fruit bats roost by the thousand), meet sacred Mona monkeys at Tafi Atome, then head north for Ghana''s best wildlife at Mole National Park — elephants, antelopes and 300 bird species.',
  'Accra pickup Thursday. Overnight Cape Coast, Hohoe, Mole. Return Sunday.',
  'GH',
  ARRAY['GH-CR-002','GH-VR-001','GH-VR-002','GH-NR-001','GH-NR-002'],
  4, 10, 60000, 'NGN',
  ARRAY['Kakum Canopy Walk — 7 bridges, 30m above rainforest', 'Wli Waterfalls — West Africa''s tallest (with bat colony)', 'Tafi Atome Monkey Sanctuary — sacred Mona monkeys', 'Mole National Park walking safari with ranger', 'Larabanga Mosque — West Africa''s oldest (1421 AD)'],
  ARRAY['Return transport from Accra', 'All accommodation (twin)', 'Park entry and guide fees', 'Canopy walk', 'Waterfall entry'],
  ARRAY['International flights', 'Meals (except hotel breakfasts)', 'Personal expenses'],
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  'published', 38, 4.7, 92, NOW() - INTERVAL '25 days'
),

(
  'trip-eg-ancient-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-eg-ancient',
  'Egypt — Pyramids, Pharaohs & Nile',
  'Stand before the last surviving wonder of the ancient world. Seven days exploring ancient Egypt — the Great Pyramid of Giza at sunrise, the Sphinx up close, the Egyptian Museum''s treasures including Tutankhamun''s golden mask, then fly to Luxor for Valley of the Kings and Karnak Temple''s colossal columns.',
  'Cairo hotel base for 4 nights. Fly Cairo–Luxor (shared charter or EgyptAir). Egyptologist guide throughout.',
  'EG',
  ARRAY['EG-CAI-001','EG-CAI-004','EG-CAI-002','EG-LUX-001','EG-LUX-002'],
  7, 12, 120000, 'NGN',
  ARRAY['Great Pyramid of Giza at sunrise — last wonder of the ancient world', 'The Sphinx up close with Egyptologist commentary', 'Egyptian Museum — Tutankhamun''s solid gold death mask', 'Valley of the Kings — royal tombs of the pharaohs', 'Karnak Temple — largest ancient religious site in the world'],
  ARRAY['Cairo and Luxor hotels (twin, B&B)', 'Cairo–Luxor internal flight', 'Egyptologist guide throughout', 'All entry fees', 'Airport transfers'],
  ARRAY['International flights to Cairo', 'Dinners and lunches', 'Egypt visa', 'Travel insurance', 'Camel/horse ride (optional)'],
  'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
  'published', 44, 4.8, 94, NOW() - INTERVAL '55 days'
),

(
  'trip-jp-classic-mid',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-jp-classic',
  'Japan — Tokyo Neon to Kyoto Temples',
  'The most complete Japan experience in 8 days. Start with Tokyo''s hyper-modernity — ancient Senso-ji temple, the immersive teamLab digital art universe, and Tsukiji''s sushi breakfast. Bullet train to Kyoto for thousands of vermillion torii gates at Fushimi Inari, ethereal bamboo groves and the gold-leafed Kinkaku-ji.',
  'Tokyo hotel 4 nights, Kyoto 4 nights. JR Pass provided. English-speaking guide for city days.',
  'JP',
  ARRAY['JP-TOK-001','JP-TOK-003','JP-KYO-001','JP-KYO-002','JP-KYO-003'],
  8, 10, 135000, 'NGN',
  ARRAY['Senso-ji Temple — Tokyo''s oldest Buddhist temple', 'teamLab Planets — world''s most immersive digital art', 'Fushimi Inari — 10,000 vermillion torii gates at dawn', 'Arashiyama Bamboo Grove — ethereal morning light', 'Kinkaku-ji Golden Pavilion — UNESCO Zen masterpiece'],
  ARRAY['Tokyo and Kyoto hotels (twin)', '7-day JR Pass (bullet train)', 'City guide for Tokyo and Kyoto days', 'Airport transfers'],
  ARRAY['International flights to Tokyo', 'Meals', 'Japan visa (if applicable)', 'teamLab tickets (₦8,000)'],
  'https://images.unsplash.com/photo-1490761668535-35497054064b?w=800',
  'published', 57, 4.9, 98, NOW() - INTERVAL '70 days'
),

-- ──────────────────────────────────────────────────
-- 💎 PREMIUM TRIPS (above ₦150,000)
-- ──────────────────────────────────────────────────

(
  'trip-tz-serengeti-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-tz-serengeti',
  'Tanzania — Ultimate Safari & Kilimanjaro',
  'The definitive East Africa experience. Eight days witnessing the world''s greatest wildlife spectacle in the Serengeti, descending into the Ngorongoro Crater — nature''s perfect ark — floating over the plains at dawn in a hot air balloon, discovering Olduvai Gorge where human history began, and reaching Kilimanjaro''s scenic base camps.',
  'Fly Nairobi–Kilimanjaro or Dar–Arusha. Private game vehicles. Luxury tented camps throughout.',
  'TZ',
  ARRAY['TZ-SER-001','TZ-SER-002','TZ-SER-006','TZ-KIL-002','TZ-SER-004'],
  8, 6, 280000, 'NGN',
  ARRAY['4 days private Serengeti game drives — Big Five daily', 'Full-day Ngorongoro Crater descent — nature''s perfect safari arena', 'Dawn hot air balloon over the Serengeti plains', 'Olduvai Gorge — where Mary Leakey found our oldest ancestor', 'Kilimanjaro scenic trek (Lemosho Route, 2 days)'],
  ARRAY['Luxury tented camp accommodation (en-suite)', 'Private game vehicle and expert guide', 'All park entry fees', 'Balloon safari', 'Internal flights', 'All meals at camp'],
  ARRAY['International flights to Arusha', 'Tanzania visa', 'Travel insurance', 'Tips (suggested $10/day per guide)'],
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
  'published', 28, 5.0, 98, NOW() - INTERVAL '80 days'
),

(
  'trip-za-luxury-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-za-safari',
  'South Africa — Kruger to Cape Town Luxury',
  'The Rainbow Nation in full colour. Twelve days exploring the best of South Africa — three days on exclusive Kruger safari, the sobering power of the Apartheid Museum and Soweto with a former activist guide, Cradle of Humankind fossil site, then fly to Cape Town for Table Mountain, Robben Island and Stellenbosch fine dining.',
  'Fly Johannesburg, then fly internal Joburg–Cape Town. Private vehicle throughout.',
  'ZA',
  ARRAY['ZA-KZN-009','ZA-GP-001','ZA-GP-003','ZA-GP-002','ZA-KZN-002'],
  12, 8, 350000, 'NGN',
  ARRAY['3 nights Kruger National Park — Big Five in private concession', 'Apartheid Museum — most powerful museum in Africa', 'Soweto tour with former anti-apartheid activist', 'UNESCO Cradle of Humankind — 2-million-year fossil site', 'Stellenbosch wine tasting at 3 renowned estates'],
  ARRAY['Luxury lodge in Kruger (en-suite)', 'Cape Town 5-star hotel (4 nights)', 'Private guide throughout', 'Joburg–Cape Town flight', 'All entry fees', 'Daily breakfasts + 2 special dinners'],
  ARRAY['International flights to Johannesburg', 'South Africa visa (if applicable)', 'Lunches and most dinners', 'Travel insurance'],
  'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
  'published', 19, 4.9, 96, NOW() - INTERVAL '90 days'
),

(
  'trip-ae-luxury-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ae-dubai',
  'Dubai & Abu Dhabi — The Ultimate Gulf Experience',
  'Six days of extraordinary luxury and culture across the UAE. In Dubai: At the Top Burj Khalifa at sunset, desert safari with dune bashing and Bedouin feast, gold souk treasure hunt and the futuristic Museum of the Future. Then Abu Dhabi''s Sheikh Zayed Grand Mosque — one of the world''s most breathtaking buildings — and the Louvre''s universal art collection.',
  '5-star hotel in Dubai Marina. Private vehicle and guide throughout. All reservations pre-booked.',
  'AE',
  ARRAY['AE-DXB-001','AE-DXB-004','AE-DXB-003','AE-ABU-001','AE-ABU-002'],
  6, 8, 220000, 'NGN',
  ARRAY['Burj Khalifa At the Top Sky (levels 124 + 148)', 'Private desert safari — dunes, falconry and Bedouin dinner', 'Sheikh Zayed Grand Mosque private guided tour', 'Louvre Abu Dhabi — universal museum under Nouvel''s dome', 'Gold Souk expert jewellery buying guide'],
  ARRAY['5-star hotel Dubai Marina (twin rooms)', 'Private vehicle and English-Arabic guide', 'All entry fees', 'Desert safari with dinner', 'Abu Dhabi day trip transport', 'Airport transfers'],
  ARRAY['International flights to Dubai', 'UAE visa (if applicable)', 'Most meals', 'Personal shopping'],
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
  'published', 35, 4.8, 95, NOW() - INTERVAL '65 days'
),

(
  'trip-gb-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-gb-london',
  'London & Scottish Highlands — Britain''s Best',
  'Ten unforgettable days across Britain. London''s world-class free museums — British Museum, National Gallery, V&A — Shakespeare''s Globe, Borough Market and the Tower of London''s Crown Jewels. Then train to Scotland for the dramatic Isle of Skye, Edinburgh Castle and a premium Highland whisky distillery experience.',
  'London hotel 5 nights, Edinburgh hotel 3 nights, Skye 2 nights. First class train London–Edinburgh.',
  'GB',
  ARRAY['GB-LON-001','GB-LON-002','GB-LON-004','GB-SCO-003','GB-SCO-001'],
  10, 8, 185000, 'NGN',
  ARRAY['British Museum — Rosetta Stone and Elgin Marbles', 'Tower of London Crown Jewels private evening tour', 'National Gallery masterpiece highlights tour', 'Isle of Skye — Fairy Pools and Old Man of Storr sunrise', 'Private Highland whisky distillery tasting with master distiller'],
  ARRAY['London boutique hotel (twin, B&B)', 'Edinburgh hotel (twin, B&B)', 'Skye B&B', 'First class London–Edinburgh train', 'Museum entry fees', 'Expert guide for London and Scotland days'],
  ARRAY['International flights to London', 'UK visa (if applicable)', 'Most meals', 'Personal shopping'],
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
  'published', 23, 4.8, 93, NOW() - INTERVAL '75 days'
),

(
  'trip-zw-falls-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-zw-falls',
  'Victoria Falls & Hwange — Southern Africa''s Crown Jewels',
  'Eight days centred on the world''s largest waterfall and Zimbabwe''s spectacular wildlife. At Victoria Falls: swim in Devil''s Pool at the falls'' very edge, bungee jump 111m from the gorge bridge, sunset cruise watching hippos and elephants on the Zambezi, and a gourmet picnic on Livingstone Island. Then to Hwange for Zimbabwe''s legendary elephant herds.',
  'Fly into Vic Falls airport. Luxury lodge on the Zambezi river. Private vehicle for all activities.',
  'ZW',
  ARRAY['ZW-VIC-001','ZW-VIC-002','ZW-VIC-003','ZW-VIC-004','ZW-VIC-005'],
  8, 6, 260000, 'NGN',
  ARRAY['Victoria Falls — the Smoke that Thunders at peak flood', 'Devil''s Pool swim — natural infinity pool at the falls'' edge', 'Bungee jump 111m from Victoria Falls Bridge', 'Gourmet Livingstone Island picnic above the falls', 'Hwange National Park — Africa''s largest elephant herds'],
  ARRAY['Luxury Zambezi River Lodge (twin, full board)', 'All activities and entry fees', 'Private guide and vehicle', 'Internal flights', 'Zambezi sunset cruise', 'Hwange safari drives'],
  ARRAY['International flights to Victoria Falls', 'Zimbabwe visa/KAZA Univisa', 'Travel insurance', 'Tips'],
  'https://images.unsplash.com/photo-1534126874-5f6762c7c1b3?w=800',
  'published', 16, 4.9, 97, NOW() - INTERVAL '85 days'
),

(
  'trip-ca-rockies-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ca-rockies',
  'Canadian Rockies — Banff, Moraine Lake & Northern Lights',
  'The Canadian Rockies at their most magnificent. Nine days in Alberta — Moraine Lake at dawn (Canada''s most photographed view), helicopter flight over Banff''s glaciers, Icefields Parkway drive with a stop on Athabasca Glacier, and three nights in Jasper Dark Sky Preserve to watch the Northern Lights dance across the cosmos.',
  'Fly into Calgary, out of Edmonton. Luxury mountain lodge accommodation throughout.',
  'CA',
  ARRAY['CA-AB-001','CA-AB-002','CA-AB-004','CA-BC-002','CA-BC-001'],
  9, 6, 310000, 'NGN',
  ARRAY['Moraine Lake at dawn — 10 peaks reflecting in impossible turquoise', 'Helicopter flight over Columbia Icefield and glaciers', 'Icefields Parkway drive — world''s most scenic 232km road', 'Athabasca Glacier walk with glaciologist guide', 'Northern Lights from Jasper Dark Sky Preserve (3 nights)'],
  ARRAY['Mountain lodge accommodation (twin, B&B)', 'All transport', 'Helicopter flight', 'Icefields tours', 'Northern Lights photography guide', 'Calgary and Edmonton airport transfers'],
  ARRAY['International flights to Calgary', 'Canada ETA/visa', 'Most meals', 'Travel insurance'],
  'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
  'published', 14, 4.9, 96, NOW() - INTERVAL '100 days'
),

(
  'trip-ar-patagonia-premium',
  (SELECT id FROM profiles WHERE email = 'olusholaoluyomi@gmail.com'),
  'iti-ar-patagonia',
  'Argentina — Iguazú, Patagonia & Buenos Aires',
  'South America''s most spectacular journey. Buenos Aires for tango at Café Tortoni and opera at Teatro Colón, then fly south to Iguazú Falls — wider than Victoria Falls — and on to El Calafate to stand before the advancing Perito Moreno Glacier as 60-metre walls of ice crash into the milky lake below.',
  'Buenos Aires hotel 3 nights, Iguazú 2 nights, El Calafate 3 nights. All internal flights included.',
  'AR',
  ARRAY['AR-PAT-001','AR-PAT-003','AR-BUE-001','AR-BUE-003','AR-BUE-004'],
  10, 8, 240000, 'NGN',
  ARRAY['Perito Moreno Glacier — UNESCO advancing ice giant', 'Iguazú Falls — 275 waterfalls, wider than Niagara', 'Buenos Aires tango show at historic Café Tortoni', 'Teatro Colón — world''s finest opera house tour', 'La Boca and Recoleta cemetery with historian guide'],
  ARRAY['Hotels in all 3 cities (twin, B&B)', 'All internal flights', 'Private guide throughout', 'Iguazú Falls entry both sides', 'Glacier boat trip', 'Buenos Aires cultural tours'],
  ARRAY['International flights to Buenos Aires', 'Argentine visa (if applicable)', 'Most meals', 'Personal expenses'],
  'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800',
  'published', 21, 4.8, 94, NOW() - INTERVAL '110 days'
)

ON CONFLICT (id) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════
-- VERIFY
-- ═══════════════════════════════════════════════════════════════
SELECT
  t.title,
  t.price,
  CASE
    WHEN t.price < 50000 THEN '🎒 Budget'
    WHEN t.price < 150000 THEN '⭐ Mid-Range'
    ELSE '💎 Premium'
  END AS tier,
  t.booking_count,
  t.avg_rating,
  t.status
FROM trips t
ORDER BY t.price ASC;
