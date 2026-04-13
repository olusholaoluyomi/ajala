// Ajala World Expanded Data — Asia, Europe, Americas, Oceania
// New countries with 10+ places per region

export const WORLD_EXPANDED = [

  // ════════════════════════════════════════════════════════════════
  // ASIA
  // ════════════════════════════════════════════════════════════════

  // ─── CHINA ────────────────────────────────────────────────────────────────
  {
    id: "CN",
    name: "China",
    flag: "🇨🇳",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800",
    description: "Five thousand years of civilisation — the Great Wall, terracotta armies, rice terraces and neon megacities.",
    states: [
      {
        id: "CN-BEI",
        name: "Beijing",
        places: [
          { id: "CN-BEI-001", name: "Great Wall at Mutianyu", category: "History", rating: 4.9, description: "Best-preserved stretch of the Great Wall — cable car up, toboggan down.", tags: ["UNESCO", "iconic", "history"] },
          { id: "CN-BEI-002", name: "Forbidden City (Palace Museum)", category: "History", rating: 4.9, description: "World's largest palace complex — 980 buildings across 72 hectares of imperial grandeur.", tags: ["UNESCO", "history", "culture"] },
          { id: "CN-BEI-003", name: "Temple of Heaven", category: "History", rating: 4.8, description: "Ming-dynasty ritual complex where emperors prayed for good harvests.", tags: ["UNESCO", "history", "architecture"] },
          { id: "CN-BEI-004", name: "Summer Palace", category: "History", rating: 4.7, description: "Imperial lakeside garden retreat with marble boat and Long Corridor paintings.", tags: ["UNESCO", "history", "nature"] },
          { id: "CN-BEI-005", name: "Tiananmen Square", category: "Landmark", rating: 4.6, description: "World's largest public square — sunrise flag-raising ceremony is deeply moving.", tags: ["landmark", "history", "iconic"] },
          { id: "CN-BEI-006", name: "Hutong Rickshaw Tour", category: "Culture", rating: 4.7, description: "Cycle through ancient alley neighbourhoods — courtyard houses, dumpling vendors and old Beijing life.", tags: ["culture", "local", "authentic"] },
          { id: "CN-BEI-007", name: "Peking Duck at Quanjude", category: "Food", rating: 4.8, description: "Beijing's most iconic dish, served in the restaurant that invented it in 1864.", tags: ["food", "culture", "iconic"] },
          { id: "CN-BEI-008", name: "National Museum of China", category: "History", rating: 4.7, description: "World's largest museum by floor area — 1 million artefacts spanning 5,000 years.", tags: ["museum", "history", "culture"] },
          { id: "CN-BEI-009", name: "798 Art District", category: "Art", rating: 4.6, description: "Former military factory turned contemporary art hub — galleries, sculpture gardens and cafes.", tags: ["art", "culture", "contemporary"] },
          { id: "CN-BEI-010", name: "Lama Temple (Yonghe)", category: "Culture", rating: 4.7, description: "Beijing's most important Tibetan Buddhist temple — 18m Buddha carved from a single sandalwood tree.", tags: ["culture", "religion", "art"] },
        ]
      },
      {
        id: "CN-SHA",
        name: "Shanghai",
        places: [
          { id: "CN-SHA-001", name: "The Bund", category: "Landmark", rating: 4.8, description: "Shanghai's iconic waterfront promenade — colonial buildings facing Pudong's futuristic skyline.", tags: ["landmark", "scenic", "photography"] },
          { id: "CN-SHA-002", name: "Yu Garden (Yuyuan)", category: "Culture", rating: 4.7, description: "Classical Ming-dynasty garden in the heart of the old city — pavilions, rockeries and koi ponds.", tags: ["culture", "history", "nature"] },
          { id: "CN-SHA-003", name: "Shanghai Museum", category: "History", rating: 4.8, description: "World-class collection of ancient bronzes, ceramics and calligraphy from 5,000 years of Chinese art.", tags: ["museum", "history", "culture"] },
          { id: "CN-SHA-004", name: "Shanghai Tower Observation Deck", category: "Landmark", rating: 4.7, description: "China's tallest building at 632m — 360° views from the world's highest observation deck.", tags: ["landmark", "views", "architecture"] },
          { id: "CN-SHA-005", name: "Xintiandi", category: "Culture", rating: 4.5, description: "Restored shikumen stone-gate houses turned into boutique restaurants and galleries.", tags: ["culture", "food", "shopping"] },
          { id: "CN-SHA-006", name: "Nanxiang Xiaolongbao (Soup Dumplings)", category: "Food", rating: 4.9, description: "World-famous soup dumplings from their 100-year-old birthplace in the Old City.", tags: ["food", "culture", "iconic"] },
          { id: "CN-SHA-007", name: "French Concession", category: "Culture", rating: 4.6, description: "Tree-lined avenues, art deco villas, jazz bars and boutique cafes from the colonial era.", tags: ["culture", "history", "leisure"] },
          { id: "CN-SHA-008", name: "Zhujiajiao Water Town", category: "Culture", rating: 4.7, description: "Ming and Qing dynasty water village with stone bridges, gondola canals and ancient temples.", tags: ["culture", "history", "scenic"] },
          { id: "CN-SHA-009", name: "Long Museum", category: "Art", rating: 4.6, description: "Shanghai's leading private contemporary art museum in a stunning converted coal hopper.", tags: ["art", "architecture", "contemporary"] },
          { id: "CN-SHA-010", name: "Tianzifang", category: "Culture", rating: 4.6, description: "Bohemian arts and crafts neighbourhood in a maze of alleyways — studios, tea houses and vintage shops.", tags: ["culture", "art", "shopping"] },
        ]
      },
      {
        id: "CN-XIR",
        name: "Xi'an & Silk Road",
        places: [
          { id: "CN-XIR-001", name: "Terracotta Army", category: "History", rating: 5.0, description: "Emperor Qin Shi Huang's 8,000 life-sized clay warriors — one of archaeology's greatest discoveries.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "CN-XIR-002", name: "Xi'an City Wall", category: "History", rating: 4.7, description: "Best-preserved ancient city wall in China — rent a bicycle and ride the 14km circuit.", tags: ["history", "cycling", "views"] },
          { id: "CN-XIR-003", name: "Muslim Quarter, Xi'an", category: "Culture", rating: 4.8, description: "2,000-year-old Hui Muslim neighbourhood — lamb skewers, pomegranate juice and Great Mosque.", tags: ["culture", "food", "history"] },
          { id: "CN-XIR-004", name: "Big Wild Goose Pagoda", category: "History", rating: 4.6, description: "652 AD Tang dynasty pagoda housing scriptures brought from India by monk Xuanzang.", tags: ["history", "UNESCO", "architecture"] },
          { id: "CN-XIR-005", name: "Shaanxi History Museum", category: "History", rating: 4.7, description: "China's most comprehensive provincial museum — 370,000 artefacts from the Silk Road era.", tags: ["museum", "history", "culture"] },
          { id: "CN-XIR-006", name: "Huashan Mountain Plank Walk", category: "Adventure", rating: 4.8, description: "China's most thrilling mountain hike — narrow plank paths on sheer cliffs with harness.", tags: ["adventure", "hiking", "extreme"] },
          { id: "CN-XIR-007", name: "Jiuzhaigou Valley", category: "Nature", rating: 5.0, description: "UNESCO multi-coloured lakes and waterfalls in Sichuan — otherworldly turquoise paradise.", tags: ["nature", "UNESCO", "photography"] },
          { id: "CN-XIR-008", name: "Zhangjiajie Glass Bridge", category: "Adventure", rating: 4.7, description: "World's longest glass-bottomed bridge over the canyon that inspired Avatar's floating mountains.", tags: ["adventure", "unique", "views"] },
          { id: "CN-XIR-009", name: "Dunhuang Mogao Caves", category: "History", rating: 4.9, description: "UNESCO Silk Road caves with 492 rooms of 1,600-year-old Buddhist murals and sculptures.", tags: ["UNESCO", "ancient", "art"] },
          { id: "CN-XIR-010", name: "Li River Cruise, Guilin", category: "Nature", rating: 4.9, description: "Cruise past karst limestone peaks on the Li River — the landscape on China's 20-yuan note.", tags: ["nature", "scenic", "photography"] },
        ]
      },
    ]
  },

  // ─── UAE ──────────────────────────────────────────────────────────────────
  {
    id: "AE",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description: "Desert dreamland — Burj Khalifa, gold souks, dune bashing and the world's most ambitious architecture.",
    states: [
      {
        id: "AE-DXB",
        name: "Dubai",
        places: [
          { id: "AE-DXB-001", name: "Burj Khalifa Observation Deck", category: "Landmark", rating: 4.8, description: "World's tallest building at 828m — sunset views from the At the Top Sky lounge.", tags: ["landmark", "iconic", "views"] },
          { id: "AE-DXB-002", name: "Dubai Mall & Dubai Fountain", category: "Leisure", rating: 4.6, description: "World's largest mall with the world's largest dancing fountain choreographed to music.", tags: ["leisure", "shopping", "iconic"] },
          { id: "AE-DXB-003", name: "Dubai Creek Gold Souk", category: "Shopping", rating: 4.7, description: "Labyrinthine traditional market with 300+ gold jewellers and spice vendors.", tags: ["shopping", "culture", "history"] },
          { id: "AE-DXB-004", name: "Desert Safari & Dune Bashing", category: "Adventure", rating: 4.8, description: "4WD over red dunes at sunset, followed by Bedouin camp dinner and belly dancing.", tags: ["adventure", "culture", "unique"] },
          { id: "AE-DXB-005", name: "Palm Jumeirah & Atlantis", category: "Landmark", rating: 4.6, description: "Man-made palm island with luxury hotels and Aquaventure waterpark.", tags: ["landmark", "unique", "leisure"] },
          { id: "AE-DXB-006", name: "Al Fahidi Historic District", category: "History", rating: 4.6, description: "Dubai's oldest neighbourhood — wind tower houses, creek abra rides and cultural museums.", tags: ["history", "culture", "authentic"] },
          { id: "AE-DXB-007", name: "Dubai Frame", category: "Architecture", rating: 4.5, description: "150m picture frame structure with glass walkway over old and new Dubai.", tags: ["architecture", "views", "unique"] },
          { id: "AE-DXB-008", name: "Ski Dubai", category: "Leisure", rating: 4.5, description: "Indoor ski slope inside a desert shopping mall — real snow, real penguins.", tags: ["leisure", "unique", "family"] },
          { id: "AE-DXB-009", name: "Dubai Museum of the Future", category: "Architecture", rating: 4.7, description: "Torus-shaped building with Arabic calligraphy façade — immersive future of humanity exhibits.", tags: ["architecture", "culture", "unique"] },
          { id: "AE-DXB-010", name: "Miracle Garden", category: "Nature", rating: 4.5, description: "World's largest natural flower garden — 150 million flowers in surreal sculptural arrangements.", tags: ["nature", "unique", "photography"] },
          { id: "AE-DXB-011", name: "Jumeirah Mosque", category: "Culture", rating: 4.6, description: "Dubai's most beautiful mosque — open to non-Muslim visitors with guided cultural tours.", tags: ["culture", "religion", "architecture"] },
          { id: "AE-DXB-012", name: "La Mer Beach", category: "Beach", rating: 4.4, description: "Open-air beach development with boutique dining, watersports and Burj Al Arab views.", tags: ["beach", "leisure", "food"] },
        ]
      },
      {
        id: "AE-ABU",
        name: "Abu Dhabi",
        places: [
          { id: "AE-ABU-001", name: "Sheikh Zayed Grand Mosque", category: "Architecture", rating: 4.9, description: "World's third largest mosque — 82 domes, 1,000 columns and the world's largest hand-knotted carpet.", tags: ["architecture", "religion", "iconic"] },
          { id: "AE-ABU-002", name: "Louvre Abu Dhabi", category: "Art", rating: 4.8, description: "Universal museum under Jean Nouvel's perforated dome — 600 artworks spanning human civilisation.", tags: ["art", "museum", "architecture"] },
          { id: "AE-ABU-003", name: "Ferrari World", category: "Leisure", rating: 4.7, description: "World's first Ferrari theme park — Formula Rossa, the world's fastest roller coaster.", tags: ["leisure", "adventure", "family"] },
          { id: "AE-ABU-004", name: "Saadiyat Island Cultural District", category: "Art", rating: 4.6, description: "Arts island with Louvre, future Guggenheim and mangrove nature reserves.", tags: ["art", "culture", "nature"] },
          { id: "AE-ABU-005", name: "Qasr Al Watan (Presidential Palace)", category: "Architecture", rating: 4.7, description: "Stunning white marble presidential palace open to visitors — intricate Arabesque interiors.", tags: ["architecture", "culture", "history"] },
          { id: "AE-ABU-006", name: "Yas Island (F1 Circuit)", category: "Adventure", rating: 4.6, description: "Home of the Abu Dhabi Grand Prix — driving experiences and Yas Waterworld.", tags: ["adventure", "sport", "leisure"] },
          { id: "AE-ABU-007", name: "Mangrove National Park Kayak", category: "Nature", rating: 4.7, description: "Kayak through 75 km² of mangrove channels with flamingos, herons and sea turtles.", tags: ["nature", "adventure", "wildlife"] },
          { id: "AE-ABU-008", name: "Al Ain Oasis", category: "Nature", rating: 4.6, description: "UNESCO date palm oasis with 147,000 trees and ancient falaj irrigation channels.", tags: ["UNESCO", "nature", "history"] },
          { id: "AE-ABU-009", name: "Eastern Mangroves Promenade", category: "Leisure", rating: 4.4, description: "Waterside promenade with restaurants overlooking Abu Dhabi's protected mangrove forests.", tags: ["leisure", "nature", "dining"] },
          { id: "AE-ABU-010", name: "Liwa Oasis & Empty Quarter Dunes", category: "Nature", rating: 4.8, description: "Edge of the world's largest sand desert — 250m dunes glowing gold at sunrise.", tags: ["nature", "adventure", "unique"] },
        ]
      },
    ]
  },

  // ─── SINGAPORE ────────────────────────────────────────────────────────────
  {
    id: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    description: "The Lion City — a dazzling fusion of cultures, Michelin street food, futuristic gardens and spotless streets.",
    states: [
      {
        id: "SG-SGP",
        name: "Singapore Island",
        places: [
          { id: "SG-SGP-001", name: "Gardens by the Bay", category: "Nature", rating: 4.9, description: "Iconic Supertrees and climate-controlled biomes — Cloud Forest and Flower Dome are unmissable.", tags: ["nature", "iconic", "architecture"] },
          { id: "SG-SGP-002", name: "Marina Bay Sands Observation Deck", category: "Landmark", rating: 4.7, description: "Infinity pool 57 floors up — the most photogenic skyline in Asia.", tags: ["landmark", "views", "iconic"] },
          { id: "SG-SGP-003", name: "Hawker Centre (Maxwell Food Centre)", category: "Food", rating: 4.9, description: "UNESCO-listed hawker culture — Hainanese chicken rice, char kway teow and chilli crab.", tags: ["food", "culture", "UNESCO"] },
          { id: "SG-SGP-004", name: "Sentosa Island", category: "Leisure", rating: 4.5, description: "Beach resort island — Universal Studios, S.E.A. Aquarium and cable car.", tags: ["leisure", "family", "beach"] },
          { id: "SG-SGP-005", name: "Chinatown Heritage Centre", category: "Culture", rating: 4.6, description: "Shophouses, Buddha Tooth Relic Temple and night markets in Singapore's Chinese quarter.", tags: ["culture", "history", "food"] },
          { id: "SG-SGP-006", name: "Little India", category: "Culture", rating: 4.6, description: "Technicolour district of Sri Veeramakaliamman Temple, flower garlands and biryani.", tags: ["culture", "food", "religion"] },
          { id: "SG-SGP-007", name: "National Museum of Singapore", category: "History", rating: 4.6, description: "Singapore's oldest museum in a neo-Palladian building — 14,000 years of island history.", tags: ["history", "museum", "culture"] },
          { id: "SG-SGP-008", name: "Pulau Ubin Island", category: "Nature", rating: 4.6, description: "Last kampong village on a wild island — cycling, mangroves and otters.", tags: ["nature", "cycling", "authentic"] },
          { id: "SG-SGP-009", name: "Night Safari", category: "Wildlife", rating: 4.7, description: "World's first nocturnal zoo — tram through 35 hectares of Asian jungle after dark.", tags: ["wildlife", "unique", "family"] },
          { id: "SG-SGP-010", name: "Orchard Road Shopping Belt", category: "Shopping", rating: 4.4, description: "Asia's premier shopping street — international luxury to local department stores.", tags: ["shopping", "leisure", "culture"] },
          { id: "SG-SGP-011", name: "Clarke Quay", category: "Leisure", rating: 4.5, description: "Riverside dining and nightlife district in restored colonial godowns.", tags: ["leisure", "food", "nightlife"] },
          { id: "SG-SGP-012", name: "Kampong Glam (Arab Quarter)", category: "Culture", rating: 4.6, description: "Malay quarter with Sultan Mosque, Haji Lane boutiques and shawarma stalls.", tags: ["culture", "shopping", "food"] },
        ]
      },
    ]
  },

  // ─── MALDIVES ─────────────────────────────────────────────────────────────
  {
    id: "MV",
    name: "Maldives",
    flag: "🇲🇻",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    description: "The last paradise — coral atolls, overwater bungalows and the clearest water on the planet.",
    states: [
      {
        id: "MV-MAL",
        name: "Malé & North Malé Atoll",
        places: [
          { id: "MV-MAL-001", name: "Baa Atoll Biosphere Reserve", category: "Nature", rating: 4.9, description: "UNESCO biosphere — Hanifaru Bay where hundreds of manta rays and whale sharks feed together.", tags: ["marine", "UNESCO", "wildlife"] },
          { id: "MV-MAL-002", name: "Overwater Bungalow Stay", category: "Leisure", rating: 5.0, description: "Sleep over the Indian Ocean in a glass-floor villa — the ultimate tropical luxury experience.", tags: ["luxury", "unique", "relaxation"] },
          { id: "MV-MAL-003", name: "Maafushi Island Snorkelling", category: "Nature", rating: 4.7, description: "Budget-friendly local island with reef snorkelling, water bungalows and turtle encounters.", tags: ["diving", "nature", "budget"] },
          { id: "MV-MAL-004", name: "Whale Shark Snorkelling, South Ari", category: "Wildlife", rating: 4.9, description: "South Ari Atoll has the world's most reliably year-round whale shark encounters.", tags: ["wildlife", "marine", "unique"] },
          { id: "MV-MAL-005", name: "Friday Mosque (Hukuru Miskiy)", category: "History", rating: 4.5, description: "17th-century coral stone mosque in Malé — intricate lacquerwork and old Divehi tombstones.", tags: ["history", "culture", "architecture"] },
          { id: "MV-MAL-006", name: "Malé Fish Market", category: "Culture", rating: 4.4, description: "Early morning tuna auction on the Malé waterfront — the most authentic slice of Maldivian life.", tags: ["culture", "food", "local"] },
          { id: "MV-MAL-007", name: "Vaadhoo Island Bioluminescence", category: "Nature", rating: 4.8, description: "Walk on 'The Sea of Stars' — glowing plankton that lights the shoreline electric blue at night.", tags: ["nature", "unique", "photography"] },
          { id: "MV-MAL-008", name: "Subsix Underwater Restaurant, Niyama", category: "Food", rating: 4.8, description: "Dine 6 metres below the Indian Ocean surface surrounded by reef fish and manta rays.", tags: ["food", "unique", "luxury"] },
          { id: "MV-MAL-009", name: "Fulhadhoo Island (Baa Atoll)", category: "Beach", rating: 4.8, description: "Uninhabited sandbank — arrive by dhow to find powdered white sand and no other footprints.", tags: ["beach", "nature", "peaceful"] },
          { id: "MV-MAL-010", name: "Sunset Dolphin Cruise", category: "Wildlife", rating: 4.7, description: "Spin on a traditional dhow through spinner dolphins leaping in the orange horizon.", tags: ["wildlife", "scenic", "leisure"] },
        ]
      },
    ]
  },

  // ─── SRI LANKA ────────────────────────────────────────────────────────────
  {
    id: "LK",
    name: "Sri Lanka",
    flag: "🇱🇰",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    description: "The Pearl of the Indian Ocean — ancient kingdoms, elephant sanctuaries, Ceylon tea and palm-fringed beaches.",
    states: [
      {
        id: "LK-CUL",
        name: "Cultural Triangle",
        places: [
          { id: "LK-CUL-001", name: "Sigiriya Lion Rock", category: "History", rating: 4.9, description: "UNESCO 5th-century rock fortress with frescoes, mirror wall and lion-paw gateway at 200m.", tags: ["UNESCO", "history", "hiking"] },
          { id: "LK-CUL-002", name: "Polonnaruwa Ancient City", category: "History", rating: 4.7, description: "UNESCO medieval capital — Gal Vihara reclining Buddha and ancient irrigation tanks.", tags: ["UNESCO", "history", "ancient"] },
          { id: "LK-CUL-003", name: "Dambulla Cave Temple", category: "History", rating: 4.7, description: "UNESCO golden rock cave with 153 Buddha statues and 2,100 sq m of vivid murals.", tags: ["UNESCO", "history", "spiritual"] },
          { id: "LK-CUL-004", name: "Temple of the Tooth, Kandy", category: "History", rating: 4.8, description: "Sri Lanka's most sacred Buddhist shrine — housing a tooth relic of the Buddha.", tags: ["history", "UNESCO", "spiritual"] },
          { id: "LK-CUL-005", name: "Anuradhapura Sacred City", category: "History", rating: 4.7, description: "UNESCO ancient city — Sri Maha Bodhi tree grown from a cutting of the Buddha's Bodhi tree.", tags: ["UNESCO", "history", "ancient"] },
          { id: "LK-CUL-006", name: "Minneriya National Park Elephant Gathering", category: "Wildlife", rating: 4.9, description: "World's largest elephant gathering — 300+ wild elephants around the ancient reservoir.", tags: ["wildlife", "unique", "nature"] },
          { id: "LK-CUL-007", name: "Knuckles Mountain Range Trek", category: "Adventure", rating: 4.6, description: "UNESCO misty cloud forest — cardamom plantations, waterfalls and endemic species.", tags: ["hiking", "nature", "UNESCO"] },
          { id: "LK-CUL-008", name: "Peradeniya Royal Botanical Gardens", category: "Nature", rating: 4.6, description: "147 acres of tropical gardens near Kandy — over 4,000 species including giant bamboo groves.", tags: ["nature", "culture", "relaxation"] },
          { id: "LK-CUL-009", name: "Ceylon Tea Plantation Tour, Nuwara Eliya", category: "Culture", rating: 4.7, description: "Walk a misty highland tea estate — see pickers, withering rooms and tea-tasting ceremony.", tags: ["culture", "food", "nature"] },
          { id: "LK-CUL-010", name: "Nine Arch Bridge, Ella", category: "Landmark", rating: 4.8, description: "Colonial-era viaduct in the mist — timing a blue train through the forest arches is magical.", tags: ["landmark", "photography", "scenic"] },
        ]
      },
      {
        id: "LK-SOU",
        name: "Southern Coast & Colombo",
        places: [
          { id: "LK-SOU-001", name: "Mirissa Whale Watching", category: "Wildlife", rating: 4.8, description: "Sri Lanka's south coast has the highest concentration of blue whales — world's largest animal.", tags: ["wildlife", "marine", "unique"] },
          { id: "LK-SOU-002", name: "Galle Fort", category: "History", rating: 4.8, description: "UNESCO 16th-century Dutch fortified old city — ramparts, lighthouse and boutique colonial streets.", tags: ["UNESCO", "history", "culture"] },
          { id: "LK-SOU-003", name: "Yala National Park", category: "Wildlife", rating: 4.8, description: "World's highest density of wild leopards — also sloth bear, elephant and crocodile.", tags: ["safari", "wildlife", "nature"] },
          { id: "LK-SOU-004", name: "Unawatuna Beach", category: "Beach", rating: 4.6, description: "Sheltered bay near Galle with coral reef, golden sand and sunset-facing restaurants.", tags: ["beach", "diving", "relaxation"] },
          { id: "LK-SOU-005", name: "Colombo National Museum", category: "History", rating: 4.5, description: "Sri Lanka's largest museum — regalia of the last King of Kandy and Kandyan art.", tags: ["history", "museum", "culture"] },
          { id: "LK-SOU-006", name: "Pettah Market, Colombo", category: "Shopping", rating: 4.4, description: "Old Colombo market district — gems, spices, electronics and the chaotic soul of the city.", tags: ["shopping", "culture", "local"] },
          { id: "LK-SOU-007", name: "Stilt Fishermen of Koggala", category: "Culture", rating: 4.6, description: "Fishermen perched on stilts in the ocean — a uniquely Sri Lankan practice and iconic photograph.", tags: ["culture", "photography", "unique"] },
          { id: "LK-SOU-008", name: "Udawalawe Elephant Transit Home", category: "Wildlife", rating: 4.7, description: "Orphaned elephant rehabilitation centre — morning milk feeds and herd interactions.", tags: ["wildlife", "conservation", "family"] },
          { id: "LK-SOU-009", name: "Arugam Bay Surfing", category: "Adventure", rating: 4.7, description: "Sri Lanka's surf capital on the east coast — world-class right-hand point break.", tags: ["surf", "adventure", "beach"] },
          { id: "LK-SOU-010", name: "Adam's Peak Pilgrimage Hike", category: "Adventure", rating: 4.8, description: "Pre-dawn hike to Sri Lanka's sacred peak — sacred footprint at summit, rainbow shadow at sunrise.", tags: ["hiking", "spiritual", "adventure"] },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // EUROPE
  // ════════════════════════════════════════════════════════════════

  // ─── UNITED KINGDOM ───────────────────────────────────────────────────────
  {
    id: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    continent: "Europe",
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Shakespeare, the Beatles, royal palaces, Scottish Highlands and some of the world's greatest museums — all free.",
    states: [
      {
        id: "GB-LON",
        name: "London",
        places: [
          { id: "GB-LON-001", name: "British Museum", category: "History", rating: 4.9, description: "World's greatest collection of human history — Rosetta Stone, Elgin Marbles, Egyptian mummies.", tags: ["museum", "history", "culture"] },
          { id: "GB-LON-002", name: "Tower of London & Crown Jewels", category: "History", rating: 4.8, description: "Norman castle housing the Crown Jewels — 1,000 years of royal history on the Thames.", tags: ["history", "culture", "iconic"] },
          { id: "GB-LON-003", name: "Westminster Abbey & Parliament", category: "Architecture", rating: 4.8, description: "Gothic abbey where monarchs are crowned — Big Ben and Houses of Parliament alongside.", tags: ["architecture", "history", "iconic"] },
          { id: "GB-LON-004", name: "National Gallery, Trafalgar Square", category: "Art", rating: 4.9, description: "700 years of Western art — Van Gogh, Monet, Caravaggio, Vermeer, all free.", tags: ["art", "museum", "culture"] },
          { id: "GB-LON-005", name: "Borough Market", category: "Food", rating: 4.8, description: "London's oldest food market under London Bridge — artisan cheese, jerk chicken and street-food world tour.", tags: ["food", "culture", "local"] },
          { id: "GB-LON-006", name: "Tate Modern", category: "Art", rating: 4.7, description: "World's most visited modern art museum in a converted Bankside power station.", tags: ["art", "architecture", "culture"] },
          { id: "GB-LON-007", name: "Hyde Park & Buckingham Palace", category: "Nature", rating: 4.6, description: "Royal park with Serpentine Gallery, followed by the Changing of the Guard at the Palace.", tags: ["nature", "culture", "iconic"] },
          { id: "GB-LON-008", name: "Notting Hill & Portobello Road", category: "Culture", rating: 4.6, description: "Pastel-coloured townhouses, Europe's largest antiques market and Caribbean Carnival vibes.", tags: ["culture", "shopping", "local"] },
          { id: "GB-LON-009", name: "V&A Museum", category: "Art", rating: 4.8, description: "World's greatest museum of art and design — 2.3 million objects from fashion to furniture.", tags: ["art", "culture", "museum"] },
          { id: "GB-LON-010", name: "Shakespeare's Globe Theatre", category: "Culture", rating: 4.7, description: "Authentic reconstruction of Shakespeare's original theatre — open-air groundling experience.", tags: ["culture", "history", "theatre"] },
          { id: "GB-LON-011", name: "Camden Market", category: "Shopping", rating: 4.5, description: "Alternative arts and food market with global street food and indie designers.", tags: ["shopping", "food", "culture"] },
          { id: "GB-LON-012", name: "Science Museum", category: "Culture", rating: 4.7, description: "Apollo 10 capsule, Stephenson's Rocket and cutting-edge climate science — all free.", tags: ["culture", "science", "family"] },
        ]
      },
      {
        id: "GB-SCO",
        name: "Scotland",
        places: [
          { id: "GB-SCO-001", name: "Edinburgh Castle", category: "History", rating: 4.8, description: "Volcanic rock fortress housing the Honours of Scotland — the oldest crown jewels in Britain.", tags: ["history", "castle", "iconic"] },
          { id: "GB-SCO-002", name: "Loch Ness & the Highlands", category: "Nature", rating: 4.7, description: "Misty loch surrounded by brooding Highland scenery — with the Urquhart Castle ruins.", tags: ["nature", "mystery", "scenic"] },
          { id: "GB-SCO-003", name: "Isle of Skye", category: "Nature", rating: 4.9, description: "Fairy Pools, Old Man of Storr and Quiraing — Britain's most dramatic landscape.", tags: ["nature", "hiking", "photography"] },
          { id: "GB-SCO-004", name: "Edinburgh Old Town Royal Mile", category: "Culture", rating: 4.7, description: "Medieval spine of Edinburgh — closes, wynds, whisky distilleries and Holyrood Palace.", tags: ["culture", "history", "food"] },
          { id: "GB-SCO-005", name: "Glencoe Valley", category: "Nature", rating: 4.8, description: "Scotland's most dramatic glen — site of the 1692 Massacre, ringed by imposing Three Sisters.", tags: ["nature", "history", "scenic"] },
          { id: "GB-SCO-006", name: "Culloden Battlefield", category: "History", rating: 4.6, description: "Site of the last battle fought on British soil (1746) — the end of the Jacobite rising.", tags: ["history", "heritage", "culture"] },
          { id: "GB-SCO-007", name: "Cairngorms National Park", category: "Nature", rating: 4.7, description: "Britain's largest national park — red squirrels, Highland cattle, Balmoral Castle.", tags: ["nature", "wildlife", "hiking"] },
          { id: "GB-SCO-008", name: "St Andrews Golf Course", category: "Leisure", rating: 4.7, description: "The 'Home of Golf' — Old Course, 600 years of history and the British Open.", tags: ["leisure", "sport", "history"] },
          { id: "GB-SCO-009", name: "Stirling Castle", category: "History", rating: 4.7, description: "Mary Queen of Scots' childhood home — stunning great hall and Renaissance royal palace.", tags: ["history", "castle", "culture"] },
          { id: "GB-SCO-010", name: "Scottish Whisky Distillery Tour", category: "Food", rating: 4.8, description: "Speyside or Islay distillery tour — smell the peat, taste the single malt, understand Scotland.", tags: ["food", "culture", "authentic"] },
        ]
      },
      {
        id: "GB-WAL",
        name: "Wales & Northern England",
        places: [
          { id: "GB-WAL-001", name: "Snowdonia National Park", category: "Nature", rating: 4.8, description: "Mount Snowdon by train or foot — Wales' highest peak and Celtic heartland.", tags: ["nature", "hiking", "culture"] },
          { id: "GB-WAL-002", name: "Conwy Castle", category: "History", rating: 4.7, description: "UNESCO Edward I ring of iron castles — medieval fortress at the mouth of the Conwy River.", tags: ["history", "UNESCO", "castle"] },
          { id: "GB-WAL-003", name: "Yorkshire Dales", category: "Nature", rating: 4.7, description: "Rolling limestone dales, dry-stone walls and Malham Cove — Brontë country.", tags: ["nature", "hiking", "scenic"] },
          { id: "GB-WAL-004", name: "Lake District National Park", category: "Nature", rating: 4.8, description: "Wordsworth's inspiration — 16 lakes, Helvellyn, and Beatrix Potter's farmhouse.", tags: ["nature", "hiking", "culture"] },
          { id: "GB-WAL-005", name: "Hadrian's Wall", category: "History", rating: 4.6, description: "UNESCO 2nd-century Roman frontier across northern England — 73 miles of history.", tags: ["history", "UNESCO", "hiking"] },
          { id: "GB-WAL-006", name: "Liverpool Beatles Tour", category: "Culture", rating: 4.7, description: "Cavern Club, Penny Lane, Strawberry Fields and the Beatles Story Museum.", tags: ["culture", "music", "history"] },
          { id: "GB-WAL-007", name: "Pembrokeshire Coast Path", category: "Adventure", rating: 4.7, description: "Wales' dramatic coastal cliffs — puffin colonies, medieval castles and smugglers' coves.", tags: ["hiking", "nature", "wildlife"] },
          { id: "GB-WAL-008", name: "Brecon Beacons Dark Sky Reserve", category: "Nature", rating: 4.6, description: "International Dark Sky Reserve — some of Europe's clearest night skies over Welsh moorland.", tags: ["nature", "stargazing", "unique"] },
          { id: "GB-WAL-009", name: "Manchester Northern Quarter", category: "Culture", rating: 4.5, description: "Industrial heritage, indie music scene, street art and world-class restaurants.", tags: ["culture", "food", "music"] },
          { id: "GB-WAL-010", name: "Durham Cathedral", category: "Architecture", rating: 4.8, description: "UNESCO Romanesque masterpiece on a peninsula in the River Wear — finest Norman cathedral.", tags: ["architecture", "UNESCO", "history"] },
        ]
      },
    ]
  },

  // ─── GERMANY ──────────────────────────────────────────────────────────────
  {
    id: "DE",
    name: "Germany",
    flag: "🇩🇪",
    continent: "Europe",
    coverImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    description: "Beer gardens, Baroque castles, the Berlin Wall, Black Forest and Oktoberfest — engineered to perfection.",
    states: [
      {
        id: "DE-BER",
        name: "Berlin",
        places: [
          { id: "DE-BER-001", name: "Brandenburg Gate", category: "History", rating: 4.8, description: "18th-century neoclassical symbol of German reunification — glows golden at night.", tags: ["history", "iconic", "landmark"] },
          { id: "DE-BER-002", name: "Holocaust Memorial", category: "History", rating: 4.8, description: "2,711 concrete stelae of varying heights — Peter Eisenman's profoundly moving memorial.", tags: ["history", "memorial", "culture"] },
          { id: "DE-BER-003", name: "East Side Gallery", category: "Art", rating: 4.7, description: "1.3 km of original Berlin Wall paintings — Brezhnev kiss and Trabant breaking through.", tags: ["art", "history", "culture"] },
          { id: "DE-BER-004", name: "Museumsinsel (Museum Island)", category: "History", rating: 4.9, description: "UNESCO island complex of 5 world-class museums — Pergamon Altar, Nefertiti bust.", tags: ["UNESCO", "museum", "history"] },
          { id: "DE-BER-005", name: "Checkpoint Charlie", category: "History", rating: 4.5, description: "Cold War crossing point between East and West Berlin — outdoor exhibit and museum.", tags: ["history", "culture", "iconic"] },
          { id: "DE-BER-006", name: "Reichstag Dome", category: "Architecture", rating: 4.7, description: "Norman Foster's glass dome on the German parliament — walk the spiral ramp with panoramic views.", tags: ["architecture", "politics", "views"] },
          { id: "DE-BER-007", name: "Prenzlauer Berg", category: "Culture", rating: 4.5, description: "Genteel pre-war neighbourhood — Sunday flea market, craft beer and brunch culture.", tags: ["culture", "food", "local"] },
          { id: "DE-BER-008", name: "Berliner Dom", category: "Architecture", rating: 4.7, description: "Imperial cathedral with ornate crypt, panoramic dome and Hohenzollern tombs.", tags: ["architecture", "history", "culture"] },
          { id: "DE-BER-009", name: "Topography of Terror", category: "History", rating: 4.7, description: "Site of SS and Gestapo headquarters — sobering outdoor and indoor exhibition.", tags: ["history", "memorial", "culture"] },
          { id: "DE-BER-010", name: "Kreuzberg Street Food & Nightlife", category: "Food", rating: 4.6, description: "Berlin's multicultural street food scene — Turkish döner, Vietnamese pho, craft cocktails.", tags: ["food", "nightlife", "culture"] },
        ]
      },
      {
        id: "DE-BAY",
        name: "Bavaria",
        places: [
          { id: "DE-BAY-001", name: "Neuschwanstein Castle", category: "Architecture", rating: 4.9, description: "Fairy-tale castle that inspired Disney's Sleeping Beauty — perched on an Alpine cliff.", tags: ["architecture", "iconic", "photography"] },
          { id: "DE-BAY-002", name: "Oktoberfest, Munich", category: "Culture", rating: 4.9, description: "World's largest beer festival — 6 million visitors, 14 giant tents, traditional lederhosen.", tags: ["culture", "food", "festival"] },
          { id: "DE-BAY-003", name: "Marienplatz & Glockenspiel", category: "Culture", rating: 4.6, description: "Munich's central square — the Rathaus-Glockenspiel's jousting knights perform at 11am.", tags: ["culture", "history", "landmark"] },
          { id: "DE-BAY-004", name: "Nymphenburg Palace", category: "History", rating: 4.7, description: "Baroque summer residence of the Wittelsbach monarchs with English garden and porcelain museum.", tags: ["history", "architecture", "culture"] },
          { id: "DE-BAY-005", name: "Deutsches Museum", category: "Culture", rating: 4.8, description: "World's largest science and technology museum — full-size aircraft, submarines, steam engines.", tags: ["culture", "science", "family"] },
          { id: "DE-BAY-006", name: "Zugspitze Mountain", category: "Adventure", rating: 4.8, description: "Germany's highest peak — cable car to the top for Alps views into Austria and Italy.", tags: ["nature", "adventure", "views"] },
          { id: "DE-BAY-007", name: "Romantic Road (Rothenburg ob der Tauber)", category: "Culture", rating: 4.7, description: "Medieval walled town with half-timbered houses, rampart walks and Christmas Markets.", tags: ["culture", "history", "scenic"] },
          { id: "DE-BAY-008", name: "English Garden, Munich", category: "Nature", rating: 4.7, description: "Europe's largest urban park — river surfing, beer gardens and Japanese tea house.", tags: ["nature", "leisure", "local"] },
          { id: "DE-BAY-009", name: "Dachau Memorial Site", category: "History", rating: 4.6, description: "First Nazi concentration camp — essential memorial and education site near Munich.", tags: ["history", "memorial", "culture"] },
          { id: "DE-BAY-010", name: "King's Ludwig Alpsee Lake", category: "Nature", rating: 4.7, description: "Rowing boats on a glacial lake below Neuschwanstein — the most romantic afternoon in Bavaria.", tags: ["nature", "scenic", "leisure"] },
        ]
      },
      {
        id: "DE-RHI",
        name: "Rhine & Black Forest",
        places: [
          { id: "DE-RHI-001", name: "Black Forest (Schwarzwald)", category: "Nature", rating: 4.8, description: "Dense fir forests, cuckoo clock villages, hot springs and Black Forest gateau.", tags: ["nature", "culture", "food"] },
          { id: "DE-RHI-002", name: "Rhine Valley Castles Cruise", category: "History", rating: 4.7, description: "UNESCO Middle Rhine Valley — 40 castles visible in 65 km of dramatic gorge river cruise.", tags: ["UNESCO", "history", "scenic"] },
          { id: "DE-RHI-003", name: "Cologne Cathedral", category: "Architecture", rating: 4.8, description: "UNESCO Gothic masterpiece — 157m towers took 632 years to complete.", tags: ["UNESCO", "architecture", "history"] },
          { id: "DE-RHI-004", name: "Heidelberg Castle", category: "History", rating: 4.7, description: "Romantics' pilgrimage site — ruined red sandstone castle above the Neckar River.", tags: ["history", "castle", "scenic"] },
          { id: "DE-RHI-005", name: "Baden-Baden Thermal Baths", category: "Leisure", rating: 4.7, description: "Roman-Irish thermal bathing ritual in the Friedrichsbad — 150 years of Black Forest healing.", tags: ["leisure", "wellness", "history"] },
          { id: "DE-RHI-006", name: "Triberg Waterfalls", category: "Nature", rating: 4.5, description: "Germany's highest waterfalls in the Black Forest — surrounded by cuckoo clock villages.", tags: ["nature", "waterfall", "scenic"] },
          { id: "DE-RHI-007", name: "Hambach Festival Site", category: "History", rating: 4.4, description: "Birthplace of German democracy — 1832 civil liberties rally on this Palatinate hillside.", tags: ["history", "culture", "heritage"] },
          { id: "DE-RHI-008", name: "Freiburg im Breisgau", category: "Culture", rating: 4.6, description: "Sunniest city in Germany — medieval minster, street-level water channels and cycling culture.", tags: ["culture", "history", "cycling"] },
          { id: "DE-RHI-009", name: "Moselle Wine Route", category: "Food", rating: 4.7, description: "Germany's most scenic wine trail — steep Riesling vineyards above mirror-like river bends.", tags: ["food", "wine", "scenic"] },
          { id: "DE-RHI-010", name: "Trier Roman Monuments", category: "History", rating: 4.7, description: "UNESCO — Germany's oldest city with the Porta Nigra, Imperial Baths and Constantine Basilica.", tags: ["UNESCO", "history", "ancient"] },
        ]
      },
    ]
  },

  // ─── NETHERLANDS ──────────────────────────────────────────────────────────
  {
    id: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    continent: "Europe",
    coverImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    description: "Tulip fields, canal houses, Rembrandt and Van Gogh — the Netherlands fits more wonder per square mile than anywhere.",
    states: [
      {
        id: "NL-AMS",
        name: "Amsterdam",
        places: [
          { id: "NL-AMS-001", name: "Rijksmuseum", category: "Art", rating: 4.9, description: "Netherlands' greatest museum — Rembrandt's Night Watch and Vermeer's The Milkmaid.", tags: ["art", "museum", "culture"] },
          { id: "NL-AMS-002", name: "Van Gogh Museum", category: "Art", rating: 4.9, description: "World's largest collection of Van Gogh works — Sunflowers, Starry Night studies and self-portraits.", tags: ["art", "museum", "iconic"] },
          { id: "NL-AMS-003", name: "Anne Frank House", category: "History", rating: 4.8, description: "The concealed annexe where Anne Frank wrote her diary — profoundly moving and essential.", tags: ["history", "memorial", "culture"] },
          { id: "NL-AMS-004", name: "Canal Ring Boat Tour", category: "Culture", rating: 4.7, description: "UNESCO canal ring — glide under 1,550 bridges past 17th-century merchant gabled houses.", tags: ["UNESCO", "culture", "scenic"] },
          { id: "NL-AMS-005", name: "Jordaan Neighbourhood", category: "Culture", rating: 4.6, description: "Amsterdam's most charming quarter — flower markets, brown cafes, boutiques and street art.", tags: ["culture", "food", "local"] },
          { id: "NL-AMS-006", name: "Keukenhof Tulip Gardens", category: "Nature", rating: 4.9, description: "World's largest flower garden — 7 million bulbs in 80 hectares from March to May.", tags: ["nature", "photography", "unique"] },
          { id: "NL-AMS-007", name: "Albert Cuyp Market", category: "Shopping", rating: 4.5, description: "Amsterdam's largest street market — stroopwafels, herring, fabrics and vintage clothing.", tags: ["shopping", "food", "local"] },
          { id: "NL-AMS-008", name: "Heineken Experience", category: "Culture", rating: 4.5, description: "Interactive tour of the original Heineken brewery — free beer at the end.", tags: ["culture", "food", "history"] },
          { id: "NL-AMS-009", name: "A'DAM Lookout", category: "Landmark", rating: 4.5, description: "360° panoramic views from the rooftop swing hanging out over the IJ waterfront.", tags: ["landmark", "views", "adventure"] },
          { id: "NL-AMS-010", name: "Vondelpark", category: "Nature", rating: 4.6, description: "Amsterdam's central park — open-air theatre, rose garden and weekend street performers.", tags: ["nature", "leisure", "local"] },
        ]
      },
      {
        id: "NL-OTH",
        name: "Dutch Countryside",
        places: [
          { id: "NL-OTH-001", name: "Kinderdijk Windmills", category: "Landmark", rating: 4.8, description: "UNESCO 19 functioning 18th-century windmills draining the Dutch polder — iconic at sunset.", tags: ["UNESCO", "landmark", "iconic"] },
          { id: "NL-OTH-002", name: "Giethoorn Village", category: "Nature", rating: 4.7, description: "'Venice of the Netherlands' — no roads, only canals through a thatched-roof village.", tags: ["nature", "scenic", "unique"] },
          { id: "NL-OTH-003", name: "Delft Pottery Town", category: "Culture", rating: 4.5, description: "Home of Vermeer and Delftware blue pottery — demonstration workshops and Vermeer Centre.", tags: ["culture", "art", "history"] },
          { id: "NL-OTH-004", name: "Hoge Veluwe National Park", category: "Nature", rating: 4.6, description: "Heathland, sand dunes and the Kröller-Müller Museum with 90 Van Gogh paintings.", tags: ["nature", "art", "cycling"] },
          { id: "NL-OTH-005", name: "Maastricht Underground", category: "History", rating: 4.5, description: "170 km of medieval tunnels and caves beneath the country's oldest city.", tags: ["history", "adventure", "unique"] },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // NORTH AMERICA
  // ════════════════════════════════════════════════════════════════

  // ─── CANADA ───────────────────────────────────────────────────────────────
  {
    id: "CA",
    name: "Canada",
    flag: "🇨🇦",
    continent: "North America",
    coverImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    description: "The great outdoors — Niagara Falls, the Rockies, Northern Lights and the most welcoming cities on earth.",
    states: [
      {
        id: "CA-BC",
        name: "British Columbia",
        places: [
          { id: "CA-BC-001", name: "Whistler Ski Resort", category: "Adventure", rating: 4.9, description: "North America's largest ski resort — two mountains, 200+ trails and summer mountain biking.", tags: ["adventure", "skiing", "nature"] },
          { id: "CA-BC-002", name: "Vancouver Stanley Park", category: "Nature", rating: 4.8, description: "1,000-acre forest in the heart of Vancouver — seawall cycling with mountain backdrop.", tags: ["nature", "cycling", "scenic"] },
          { id: "CA-BC-003", name: "Capilano Suspension Bridge", category: "Adventure", rating: 4.7, description: "137m bridge swaying over a canyon gorge in old-growth forest outside Vancouver.", tags: ["adventure", "nature", "unique"] },
          { id: "CA-BC-004", name: "Butchart Gardens, Victoria", category: "Nature", rating: 4.8, description: "Stunning sunken garden in an exhausted limestone quarry — 55 acres of year-round colour.", tags: ["nature", "photography", "culture"] },
          { id: "CA-BC-005", name: "Great Bear Rainforest", category: "Wildlife", rating: 4.9, description: "Last intact temperate rainforest — Spirit Bear, grizzlies and wolves in pristine wilderness.", tags: ["wildlife", "nature", "unique"] },
          { id: "CA-BC-006", name: "Sea to Sky Highway (Squamish)", category: "Nature", rating: 4.7, description: "Canada's most scenic drive — Shannon Falls, Stawamus Chief rock climb and Brandywine Falls.", tags: ["scenic", "nature", "adventure"] },
          { id: "CA-BC-007", name: "Tofino Surfing & Whale Watching", category: "Adventure", rating: 4.7, description: "Wild Pacific coast — grey whale migration, storm watching and some of Canada's best surf.", tags: ["wildlife", "surf", "adventure"] },
          { id: "CA-BC-008", name: "Museum of Anthropology, UBC", category: "Culture", rating: 4.7, description: "World's finest collection of Northwest Coast Indigenous art — Haida totem poles.", tags: ["culture", "history", "art"] },
          { id: "CA-BC-009", name: "Okanagan Valley Wine Country", category: "Food", rating: 4.6, description: "Canada's Napa — 200+ wineries on the shores of glacial lakes in semi-arid valleys.", tags: ["food", "wine", "nature"] },
          { id: "CA-BC-010", name: "Granville Island Market, Vancouver", category: "Food", rating: 4.7, description: "Artisan market under Granville Bridge — fresh seafood, craft beer and Indigenous art.", tags: ["food", "culture", "local"] },
        ]
      },
      {
        id: "CA-AB",
        name: "Alberta Rockies",
        places: [
          { id: "CA-AB-001", name: "Banff National Park", category: "Nature", rating: 4.9, description: "Canada's oldest national park — Moraine Lake, Lake Louise and glaciers at every turn.", tags: ["nature", "UNESCO", "scenic"] },
          { id: "CA-AB-002", name: "Moraine Lake", category: "Nature", rating: 5.0, description: "Canada's most photographed spot — 10 peaks reflecting in impossible turquoise glacial waters.", tags: ["nature", "photography", "iconic"] },
          { id: "CA-AB-003", name: "Jasper National Park", category: "Nature", rating: 4.9, description: "UNESCO — Athabasca Glacier, Maligne Lake, dark sky preserve and wolf sightings.", tags: ["nature", "UNESCO", "wildlife"] },
          { id: "CA-AB-004", name: "Icefields Parkway", category: "Nature", rating: 4.9, description: "World's most scenic drive — 232 km of glaciers, waterfalls and turquoise lakes.", tags: ["nature", "scenic", "photography"] },
          { id: "CA-AB-005", name: "Columbia Icefield Skywalk", category: "Adventure", rating: 4.7, description: "Glass-floored walkway jutting 35m over a 280m drop into the Sunwapta Valley.", tags: ["adventure", "views", "unique"] },
          { id: "CA-AB-006", name: "Drumheller Badlands", category: "Nature", rating: 4.6, description: "Eerie canyon landscape with hoodoo formations and the Royal Tyrrell dinosaur museum.", tags: ["nature", "geology", "unique"] },
          { id: "CA-AB-007", name: "Calgary Stampede", category: "Culture", rating: 4.7, description: "The Greatest Outdoor Show on Earth — rodeo, chuck wagon racing and Indigenous pow wow.", tags: ["culture", "festival", "authentic"] },
          { id: "CA-AB-008", name: "Athabasca Falls", category: "Nature", rating: 4.7, description: "Most powerful waterfall in the Canadian Rockies — thunders through a narrow quartzite gorge.", tags: ["waterfall", "nature", "scenic"] },
          { id: "CA-AB-009", name: "Waterton Lakes National Park", category: "Nature", rating: 4.7, description: "UNESCO Biosphere with Glacier NP — wildflowers, black bears and the iconic Prince of Wales Hotel.", tags: ["nature", "UNESCO", "wildlife"] },
          { id: "CA-AB-010", name: "Northern Lights, Jasper", category: "Nature", rating: 4.9, description: "Canada's largest dark sky preserve — aurora borealis visible most nights from September to April.", tags: ["nature", "unique", "photography"] },
        ]
      },
      {
        id: "CA-ONT",
        name: "Ontario & Quebec",
        places: [
          { id: "CA-ONT-001", name: "Niagara Falls", category: "Nature", rating: 4.9, description: "Horseshoe Falls — 57m drop, 168,000 cubic metres per second, rainbow every afternoon.", tags: ["nature", "iconic", "landmark"] },
          { id: "CA-ONT-002", name: "Toronto CN Tower", category: "Landmark", rating: 4.7, description: "553m tower with glass floor EdgeWalk — iconic skyline beacon and revolving restaurant.", tags: ["landmark", "views", "iconic"] },
          { id: "CA-ONT-003", name: "Royal Ontario Museum", category: "History", rating: 4.7, description: "Canada's largest museum — Egyptian mummies, Chinese architecture, and a dinosaur gallery.", tags: ["museum", "history", "culture"] },
          { id: "CA-ONT-004", name: "Algonquin Provincial Park", category: "Nature", rating: 4.8, description: "Moose, loons and black bears in the paddling and hiking paradise 3 hours from Toronto.", tags: ["wildlife", "nature", "adventure"] },
          { id: "CA-ONT-005", name: "Old Quebec City", category: "History", rating: 4.8, description: "UNESCO fortified city — Château Frontenac, Plains of Abraham and Petit-Champlain.", tags: ["UNESCO", "history", "culture"] },
          { id: "CA-ONT-006", name: "Montreal's Mile End", category: "Culture", rating: 4.6, description: "Creative Francophone quarter — bagels from St-Viateur, murals and world-class restaurants.", tags: ["culture", "food", "art"] },
          { id: "CA-ONT-007", name: "Ottawa Parliament Hill", category: "History", rating: 4.6, description: "Canada's Gothic Revival parliament with free Changing of the Guard and sound-and-light show.", tags: ["history", "culture", "landmark"] },
          { id: "CA-ONT-008", name: "Thousand Islands", category: "Nature", rating: 4.6, description: "Cruise through 1,864 islands straddling Canada and the USA — castles, shipwrecks and lore.", tags: ["nature", "scenic", "leisure"] },
          { id: "CA-ONT-009", name: "Montmorency Falls, Quebec", category: "Nature", rating: 4.7, description: "30m taller than Niagara — cable car, suspension bridge and ice cone in winter.", tags: ["waterfall", "nature", "adventure"] },
          { id: "CA-ONT-010", name: "Ice Hotel, Quebec", category: "Leisure", rating: 4.6, description: "Sleep in a hotel sculpted from 15,000 tonnes of snow — vodka glasses carved from ice.", tags: ["unique", "leisure", "adventure"] },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // SOUTH AMERICA
  // ════════════════════════════════════════════════════════════════

  // ─── ARGENTINA ────────────────────────────────────────────────────────────
  {
    id: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    continent: "South America",
    coverImage: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800",
    description: "Tango, Patagonian glaciers, Malbec vineyards, Iguazú Falls and the world's best steak.",
    states: [
      {
        id: "AR-BUE",
        name: "Buenos Aires",
        places: [
          { id: "AR-BUE-001", name: "La Boca & Caminito", category: "Culture", rating: 4.6, description: "Colourful corrugated-iron neighbourhood, tango performances and the birthplace of football.", tags: ["culture", "art", "photography"] },
          { id: "AR-BUE-002", name: "Recoleta Cemetery", category: "Culture", rating: 4.7, description: "Marble mausoleums of Argentina's elite — Evita Perón's tomb and astonishing funerary art.", tags: ["culture", "history", "art"] },
          { id: "AR-BUE-003", name: "Tango Show at Café Tortoni", category: "Culture", rating: 4.8, description: "Argentina's oldest café — tango milongas and world-class shows since 1858.", tags: ["culture", "music", "authentic"] },
          { id: "AR-BUE-004", name: "Teatro Colón", category: "Art", rating: 4.9, description: "World's finest opera house — Caruso, Pavarotti, Callas have all performed under this dome.", tags: ["art", "architecture", "culture"] },
          { id: "AR-BUE-005", name: "Palermo Soho Brunch & Markets", category: "Food", rating: 4.6, description: "Buenos Aires' hippest neighbourhood — asado brunches, craft beer and weekend fairs.", tags: ["food", "culture", "leisure"] },
          { id: "AR-BUE-006", name: "San Telmo Flea Market", category: "Shopping", rating: 4.5, description: "Sunday antiques market in the oldest barrio — tango buskers, mate vendors and street art.", tags: ["shopping", "culture", "local"] },
          { id: "AR-BUE-007", name: "Museo Nacional de Bellas Artes", category: "Art", rating: 4.6, description: "Latin America's finest art museum — Rodin, Van Gogh and Argentina's own masters.", tags: ["art", "museum", "culture"] },
          { id: "AR-BUE-008", name: "Tigre Delta Day Trip", category: "Nature", rating: 4.6, description: "Boat through the Paraná Delta islands — fruit markets, rowing clubs and jungle inlets.", tags: ["nature", "boat", "leisure"] },
          { id: "AR-BUE-009", name: "MALBA (Latin American Art Museum)", category: "Art", rating: 4.7, description: "Latin American modern and contemporary art — Frida Kahlo, Diego Rivera and Xul Solar.", tags: ["art", "culture", "museum"] },
          { id: "AR-BUE-010", name: "Parrilla Asado Experience", category: "Food", rating: 4.9, description: "Argentina's sacred ritual — the world's best grass-fed beef grilled over wood embers.", tags: ["food", "culture", "authentic"] },
        ]
      },
      {
        id: "AR-PAT",
        name: "Patagonia",
        places: [
          { id: "AR-PAT-001", name: "Perito Moreno Glacier", category: "Nature", rating: 5.0, description: "UNESCO advancing glacier — watch 60m ice walls calve into the milky glacial lake.", tags: ["nature", "UNESCO", "iconic"] },
          { id: "AR-PAT-002", name: "Torres del Paine, Chilean Patagonia", category: "Nature", rating: 5.0, description: "Granite towers above turquoise lakes — W trek and full circuit are bucket-list hikes.", tags: ["nature", "hiking", "iconic"] },
          { id: "AR-PAT-003", name: "Iguazú Falls", category: "Nature", rating: 5.0, description: "UNESCO — 275 waterfalls over 2.7 km, wider than Victoria Falls. Devil's Throat is overwhelming.", tags: ["nature", "UNESCO", "iconic"] },
          { id: "AR-PAT-004", name: "Mount Fitz Roy Trek (El Chaltén)", category: "Adventure", rating: 4.9, description: "Argentina's trekking capital — jagged Fitz Roy and Cerro Torre peaks at dawn.", tags: ["hiking", "adventure", "photography"] },
          { id: "AR-PAT-005", name: "Peninsula Valdés", category: "Wildlife", rating: 4.8, description: "UNESCO — orca hunting sea lions, southern right whales and Magellanic penguin colonies.", tags: ["wildlife", "UNESCO", "unique"] },
          { id: "AR-PAT-006", name: "Bariloche Chocolate Trail", category: "Food", rating: 4.6, description: "Swiss-style Andean city famous for chocolate, skiing and Nahuel Huapi lake.", tags: ["food", "nature", "skiing"] },
          { id: "AR-PAT-007", name: "Ushuaia End of the World", category: "Adventure", rating: 4.7, description: "Southernmost city on earth — gateway to Antarctica, Beagle Channel cruises.", tags: ["adventure", "unique", "nature"] },
          { id: "AR-PAT-008", name: "Marble Caves, Chile", category: "Nature", rating: 4.9, description: "Blue marble cathedral caves accessible only by boat on General Carrera Lake.", tags: ["nature", "unique", "photography"] },
          { id: "AR-PAT-009", name: "Salta Wine & Cloudforest", category: "Food", rating: 4.7, description: "Argentina's northwest — world's highest vineyards, colonial Salta city and salt flats.", tags: ["food", "wine", "culture"] },
          { id: "AR-PAT-010", name: "Quebrada de Humahuaca", category: "History", rating: 4.7, description: "UNESCO mountain valley of rainbow rock strata, Inca trails and indigenous markets.", tags: ["nature", "UNESCO", "history"] },
        ]
      },
    ]
  },

  // ─── CHILE ────────────────────────────────────────────────────────────────
  {
    id: "CL",
    name: "Chile",
    flag: "🇨🇱",
    continent: "South America",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    description: "The world's longest country — Atacama Desert, Easter Island moai, Patagonia glaciers and Valparaíso street art.",
    states: [
      {
        id: "CL-ATK",
        name: "Atacama Desert",
        places: [
          { id: "CL-ATK-001", name: "Valle de la Luna", category: "Nature", rating: 4.8, description: "Moon Valley — salt formations, dunes and the clearest sunset on the driest desert on earth.", tags: ["nature", "photography", "unique"] },
          { id: "CL-ATK-002", name: "El Tatio Geysers", category: "Nature", rating: 4.8, description: "World's highest geyser field at 4,320m — 80 geysers erupting in the dawn cold.", tags: ["nature", "unique", "geology"] },
          { id: "CL-ATK-003", name: "Atacama Stargazing", category: "Nature", rating: 5.0, description: "World's clearest night sky — ALMA Observatory and the Milky Way filling the entire dome.", tags: ["nature", "stargazing", "unique"] },
          { id: "CL-ATK-004", name: "Laguna Colorada & Altiplano Lakes", category: "Nature", rating: 4.7, description: "Flamingo-filled red lagoon on the Bolivian altiplano — accessed from San Pedro de Atacama.", tags: ["nature", "wildlife", "photography"] },
          { id: "CL-ATK-005", name: "Atacama Salt Flat (Salar de Atacama)", category: "Nature", rating: 4.7, description: "Chile's largest salt flat — pink flamingos in the foreground, volcanoes behind.", tags: ["nature", "photography", "wildlife"] },
        ]
      },
      {
        id: "CL-CEN",
        name: "Central Chile & Easter Island",
        places: [
          { id: "CL-CEN-001", name: "Easter Island Moai", category: "History", rating: 5.0, description: "UNESCO — 900 enigmatic stone heads on the world's most remote inhabited island.", tags: ["UNESCO", "history", "iconic"] },
          { id: "CL-CEN-002", name: "Valparaíso Street Art", category: "Art", rating: 4.7, description: "UNESCO port city with 42 hills covered in murals — funicular rides and bohemian culture.", tags: ["art", "UNESCO", "culture"] },
          { id: "CL-CEN-003", name: "Wine Valleys: Casablanca & Colchagua", category: "Food", rating: 4.7, description: "Chile's premier wine regions — Carménère, Sauvignon Blanc and stunning vineyard landscapes.", tags: ["food", "wine", "culture"] },
          { id: "CL-CEN-004", name: "Chiloé Island Palafitos", category: "Culture", rating: 4.7, description: "UNESCO wooden churches, stilt houses over the sea and endemic island mythology.", tags: ["culture", "UNESCO", "unique"] },
          { id: "CL-CEN-005", name: "Santiago Museum of Pre-Columbian Art", category: "History", rating: 4.6, description: "South America's finest collection of Andean, Amazonian and Pacific indigenous art.", tags: ["museum", "history", "culture"] },
          { id: "CL-CEN-006", name: "Conguillío National Park", category: "Nature", rating: 4.7, description: "Active Llaima volcano towering over ancient araucaria monkey-puzzle forests.", tags: ["nature", "volcano", "hiking"] },
          { id: "CL-CEN-007", name: "Carretera Austral", category: "Adventure", rating: 4.9, description: "World's greatest road trip — 1,240 km through fjords, glaciers and rainforest south.", tags: ["adventure", "nature", "scenic"] },
          { id: "CL-CEN-008", name: "Lago General Carrera", category: "Nature", rating: 4.8, description: "South America's deepest lake — turquoise-blue water shared with Argentina, marble caves.", tags: ["nature", "scenic", "unique"] },
          { id: "CL-CEN-009", name: "Villarrica Volcano Hike", category: "Adventure", rating: 4.8, description: "Hike to the rim of one of South America's most active volcanoes — lava lake visible below.", tags: ["adventure", "hiking", "unique"] },
          { id: "CL-CEN-010", name: "Pablo Neruda's La Chascona, Santiago", category: "History", rating: 4.6, description: "Eccentric house of Chile's Nobel Prize poet — ship rooms, secret passages and eccentricity.", tags: ["history", "culture", "art"] },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // OCEANIA
  // ════════════════════════════════════════════════════════════════

  // ─── NEW ZEALAND ──────────────────────────────────────────────────────────── (supplement to phase2)
  // Note: NZ already exists in phase2 — no duplicate needed

  // ─── FIJI ─────────────────────────────────────────────────────────────────
  {
    id: "FJ",
    name: "Fiji",
    flag: "🇫🇯",
    continent: "Oceania",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    description: "The Soft Coral Capital of the World — 333 islands, warm Fijian smiles and the friendliest culture on earth.",
    states: [
      {
        id: "FJ-VIT",
        name: "Viti Levu & Mamanuca",
        places: [
          { id: "FJ-VIT-001", name: "Yasawa Islands Snorkelling", category: "Nature", rating: 4.9, description: "Remote island chain — world-class snorkelling with manta rays, sharks and neon reef fish.", tags: ["marine", "nature", "diving"] },
          { id: "FJ-VIT-002", name: "Sabeto Mud Pools & Hot Springs", category: "Leisure", rating: 4.5, description: "Soak in geothermal sulphur springs then swim in natural hot pools on Viti Levu.", tags: ["leisure", "wellness", "nature"] },
          { id: "FJ-VIT-003", name: "Mamanuca Islands", category: "Beach", rating: 4.8, description: "Cast Away island, Blue Lagoon filming location — overwater bungalows and calm lagoons.", tags: ["beach", "relaxation", "unique"] },
          { id: "FJ-VIT-004", name: "Garden of the Sleeping Giant", category: "Nature", rating: 4.5, description: "Orchid garden of 2,000 hybrids in the Nausori Highlands established by Raymond Burr.", tags: ["nature", "culture", "relaxation"] },
          { id: "FJ-VIT-005", name: "Navala Village", category: "Culture", rating: 4.7, description: "The only remaining traditional Fijian village with 200 thatched bure huts — community experiences.", tags: ["culture", "indigenous", "authentic"] },
          { id: "FJ-VIT-006", name: "Pacific Harbour Shark Dive", category: "Adventure", rating: 4.8, description: "Dive with 50+ bull sharks without cages — the most exhilarating shark encounter in the Pacific.", tags: ["adventure", "diving", "wildlife"] },
          { id: "FJ-VIT-007", name: "Tavuni Hill Fort", category: "History", rating: 4.4, description: "Fiji's best-preserved hill fort — stone fortifications and views of Navua River delta.", tags: ["history", "culture", "views"] },
          { id: "FJ-VIT-008", name: "Fijian Kava Ceremony", category: "Culture", rating: 4.6, description: "Participate in the traditional welcome ceremony — communal kava drinking and meke dance.", tags: ["culture", "authentic", "local"] },
          { id: "FJ-VIT-009", name: "Nadi Handicraft Market", category: "Shopping", rating: 4.3, description: "Local market for handwoven mats, tapa cloth, wooden carvings and tropical fruit.", tags: ["shopping", "culture", "local"] },
          { id: "FJ-VIT-010", name: "Biausevu Waterfall Hike", category: "Nature", rating: 4.6, description: "Village-guided jungle hike to a 20m waterfall — swim in the freshwater pool at the base.", tags: ["hiking", "nature", "culture"] },
        ]
      },
    ]
  },
];
