// Phase 2 Extended World Data
// 22 additional countries across all continents

export const WORLD_DATA_PHASE2 = [
  {
    id: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    continent: "Asia",
    description: "Land of Smiles — temples, street food, paradise islands and ancient ruins.",
    states: [
      {
        id: "TH-BKK",
        name: "Bangkok",
        places: [
          { id: "TH-BKK-001", name: "Grand Palace & Wat Phra Kaew", category: "Culture", rating: 4.9, description: "Dazzling royal complex housing the sacred Emerald Buddha.", tags: ["temple", "royalty", "iconic"] },
          { id: "TH-BKK-002", name: "Chatuchak Weekend Market", category: "Shopping", rating: 4.6, description: "One of the world's largest weekend markets with 15,000+ stalls.", tags: ["shopping", "local", "food"] },
          { id: "TH-BKK-003", name: "Wat Arun", category: "Culture", rating: 4.8, description: "Temple of Dawn on the Chao Phraya River, stunning at sunset.", tags: ["temple", "culture", "photography"] },
          { id: "TH-BKK-004", name: "Khao San Road", category: "Culture", rating: 4.2, description: "Legendary backpacker street with food stalls, bars and nightlife.", tags: ["nightlife", "food", "culture"] },
        ]
      },
      {
        id: "TH-CMI",
        name: "Chiang Mai",
        places: [
          { id: "TH-CMI-001", name: "Doi Inthanon National Park", category: "Nature", rating: 4.8, description: "Highest peak in Thailand with stunning waterfalls and hill tribes.", tags: ["nature", "hiking", "wildlife"] },
          { id: "TH-CMI-002", name: "Elephant Nature Park", category: "Wildlife", rating: 4.9, description: "Ethical elephant sanctuary rescuing abused working elephants.", tags: ["wildlife", "conservation", "ethical"] },
          { id: "TH-CMI-003", name: "Night Bazaar Chiang Mai", category: "Shopping", rating: 4.5, description: "Vibrant nightly market with handicrafts, food and live music.", tags: ["shopping", "food", "nightlife"] },
        ]
      },
      {
        id: "TH-KRA",
        name: "Krabi & Islands",
        places: [
          { id: "TH-KRA-001", name: "Railay Beach", category: "Beach", rating: 4.9, description: "Stunning peninsula accessible only by boat, towering limestone cliffs.", tags: ["beach", "climbing", "scenic"] },
          { id: "TH-KRA-002", name: "Phi Phi Islands", category: "Beach", rating: 4.8, description: "Iconic tropical islands with crystal water and vibrant marine life.", tags: ["beach", "diving", "iconic"] },
          { id: "TH-KRA-003", name: "Four Islands Tour", category: "Adventure", rating: 4.7, description: "Snorkelling and beach-hopping across four stunning Andaman islands.", tags: ["adventure", "snorkelling", "beach"] },
        ]
      }
    ]
  },
  {
    id: "VN",
    name: "Vietnam",
    flag: "🇻🇳",
    continent: "Asia",
    description: "Ancient towns, misty bays, mountain terraces and incredible street food.",
    states: [
      {
        id: "VN-HAN",
        name: "Hanoi",
        places: [
          { id: "VN-HAN-001", name: "Hoan Kiem Lake & Ngoc Son Temple", category: "Culture", rating: 4.7, description: "Peaceful lake at the heart of the Old Quarter with a sacred island temple.", tags: ["culture", "peaceful", "historic"] },
          { id: "VN-HAN-002", name: "Old Quarter Street Food Tour", category: "Food", rating: 4.9, description: "Pho, banh mi, bun cha and egg coffee in narrow ancient streets.", tags: ["food", "culture", "local"] },
          { id: "VN-HAN-003", name: "Ho Chi Minh Mausoleum", category: "History", rating: 4.5, description: "Granite mausoleum housing the preserved body of Vietnam's founding leader.", tags: ["history", "culture", "monument"] },
        ]
      },
      {
        id: "VN-HLB",
        name: "Ha Long Bay",
        places: [
          { id: "VN-HLB-001", name: "Ha Long Bay Cruise", category: "Nature", rating: 5.0, description: "UNESCO wonder — 1,600 limestone islands rising from emerald waters.", tags: ["UNESCO", "nature", "iconic"] },
          { id: "VN-HLB-002", name: "Sung Sot Cave", category: "Nature", rating: 4.7, description: "Largest grotto in Ha Long Bay with spectacular stalactite formations.", tags: ["nature", "cave", "adventure"] },
        ]
      },
      {
        id: "VN-HOI",
        name: "Hoi An",
        places: [
          { id: "VN-HOI-001", name: "Hoi An Ancient Town", category: "Culture", rating: 4.9, description: "UNESCO-listed trading port with lantern-lit streets and tailor shops.", tags: ["UNESCO", "culture", "photography"] },
          { id: "VN-HOI-002", name: "My Son Sanctuary", category: "History", rating: 4.7, description: "Ancient Hindu temple complex of the Cham civilisation.", tags: ["history", "UNESCO", "ancient"] },
        ]
      }
    ]
  },
  {
    id: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    continent: "Asia",
    description: "17,000 islands of volcanoes, temples, rainforests and world-class surf.",
    states: [
      {
        id: "ID-BAL",
        name: "Bali",
        places: [
          { id: "ID-BAL-001", name: "Tanah Lot Temple", category: "Culture", rating: 4.8, description: "Iconic sea temple perched on a dramatic rocky outcrop at sunset.", tags: ["temple", "culture", "sunset"] },
          { id: "ID-BAL-002", name: "Ubud Monkey Forest", category: "Nature", rating: 4.6, description: "Sacred forest sanctuary home to 700+ Balinese long-tailed macaques.", tags: ["wildlife", "nature", "culture"] },
          { id: "ID-BAL-003", name: "Tegallalang Rice Terraces", category: "Nature", rating: 4.8, description: "Breathtaking UNESCO-listed cascading rice paddies near Ubud.", tags: ["nature", "scenic", "culture"] },
          { id: "ID-BAL-004", name: "Seminyak Beach", category: "Beach", rating: 4.7, description: "Upscale beach with world-class sunsets, beach clubs and dining.", tags: ["beach", "nightlife", "luxury"] },
        ]
      },
      {
        id: "ID-YOG",
        name: "Yogyakarta",
        places: [
          { id: "ID-YOG-001", name: "Borobudur Temple", category: "History", rating: 5.0, description: "World's largest Buddhist temple, UNESCO — sunrise views are legendary.", tags: ["UNESCO", "ancient", "spiritual"] },
          { id: "ID-YOG-002", name: "Prambanan Temple", category: "History", rating: 4.8, description: "Magnificent 9th century Hindu compound dedicated to the Trimurti.", tags: ["UNESCO", "ancient", "history"] },
          { id: "ID-YOG-003", name: "Mount Merapi Volcano", category: "Adventure", rating: 4.6, description: "Most active volcano in Indonesia — jeep tours through lava fields.", tags: ["adventure", "nature", "unique"] },
        ]
      }
    ]
  },
  {
    id: "GR",
    name: "Greece",
    flag: "🇬🇷",
    continent: "Europe",
    description: "Cradle of democracy — ancient ruins, island-hopping and Mediterranean magic.",
    states: [
      {
        id: "GR-ATH",
        name: "Athens",
        places: [
          { id: "GR-ATH-001", name: "Acropolis & Parthenon", category: "History", rating: 4.9, description: "2,500 year-old citadel crowning Athens, one of humanity's greatest monuments.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "GR-ATH-002", name: "National Archaeological Museum", category: "History", rating: 4.7, description: "Greatest collection of ancient Greek antiquities in the world.", tags: ["museum", "history", "culture"] },
          { id: "GR-ATH-003", name: "Monastiraki Flea Market", category: "Shopping", rating: 4.4, description: "Lively Athens bazaar with antiques, street food and Acropolis views.", tags: ["shopping", "culture", "food"] },
        ]
      },
      {
        id: "GR-SAN",
        name: "Santorini",
        places: [
          { id: "GR-SAN-001", name: "Oia Sunset", category: "Landmark", rating: 5.0, description: "The most famous sunset in the world — blue domes over the caldera.", tags: ["sunset", "iconic", "photography"] },
          { id: "GR-SAN-002", name: "Red Beach", category: "Beach", rating: 4.7, description: "Dramatic volcanic red sand beach beneath towering crimson cliffs.", tags: ["beach", "unique", "scenic"] },
          { id: "GR-SAN-003", name: "Akrotiri Archaeological Site", category: "History", rating: 4.6, description: "Minoan Bronze Age settlement preserved by volcanic eruption.", tags: ["history", "ancient", "UNESCO"] },
        ]
      },
      {
        id: "GR-MYK",
        name: "Mykonos",
        places: [
          { id: "GR-MYK-001", name: "Little Venice, Mykonos", category: "Culture", rating: 4.7, description: "Colourful buildings hanging over the sea in Mykonos Town.", tags: ["culture", "scenic", "photography"] },
          { id: "GR-MYK-002", name: "Paradise Beach", category: "Beach", rating: 4.5, description: "Famous party beach with crystal water and beach clubs.", tags: ["beach", "nightlife", "fun"] },
        ]
      }
    ]
  },
  {
    id: "ES",
    name: "Spain",
    flag: "🇪🇸",
    continent: "Europe",
    description: "Flamenco, Gaudí, tapas and fiesta — passion runs through every cobblestone.",
    states: [
      {
        id: "ES-BCN",
        name: "Barcelona",
        places: [
          { id: "ES-BCN-001", name: "Sagrada Família", category: "Architecture", rating: 4.9, description: "Gaudí's unfinished UNESCO masterpiece — a surreal cathedral under eternal construction.", tags: ["UNESCO", "architecture", "iconic"] },
          { id: "ES-BCN-002", name: "Park Güell", category: "Art", rating: 4.7, description: "Gaudí's mosaic wonderland with panoramic city views.", tags: ["art", "UNESCO", "scenic"] },
          { id: "ES-BCN-003", name: "La Boqueria Market", category: "Food", rating: 4.6, description: "Barcelona's legendary covered food market on Las Ramblas.", tags: ["food", "culture", "local"] },
          { id: "ES-BCN-004", name: "Gothic Quarter", category: "Culture", rating: 4.7, description: "2,000 year-old medieval maze of narrow streets and Roman ruins.", tags: ["history", "culture", "walking"] },
        ]
      },
      {
        id: "ES-MAD",
        name: "Madrid",
        places: [
          { id: "ES-MAD-001", name: "Museo del Prado", category: "Art", rating: 4.9, description: "One of the finest art museums in the world — Velázquez, Goya, El Greco.", tags: ["art", "museum", "culture"] },
          { id: "ES-MAD-002", name: "Retiro Park", category: "Nature", rating: 4.7, description: "Madrid's grand 350-acre park with a crystal palace and rowing lake.", tags: ["nature", "relaxation", "culture"] },
          { id: "ES-MAD-003", name: "Mercado de San Miguel", category: "Food", rating: 4.6, description: "Beautiful iron-and-glass market with the best tapas in Madrid.", tags: ["food", "culture", "local"] },
        ]
      },
      {
        id: "ES-AND",
        name: "Andalusia",
        places: [
          { id: "ES-AND-001", name: "Alhambra, Granada", category: "History", rating: 5.0, description: "Moorish palace complex — the pinnacle of Islamic art in Europe.", tags: ["UNESCO", "history", "architecture"] },
          { id: "ES-AND-002", name: "Mezquita, Córdoba", category: "Architecture", rating: 4.9, description: "Mosque-Cathedral with 856 columns — one of the world's great buildings.", tags: ["UNESCO", "architecture", "history"] },
          { id: "ES-AND-003", name: "Seville Flamenco Show", category: "Culture", rating: 4.8, description: "Authentic flamenco performance in the birthplace of the art form.", tags: ["culture", "performance", "authentic"] },
        ]
      }
    ]
  },
  {
    id: "PT",
    name: "Portugal",
    flag: "🇵🇹",
    continent: "Europe",
    description: "Fado, pastel de nata, Atlantic surf and the soul of age-of-exploration.",
    states: [
      {
        id: "PT-LIS",
        name: "Lisbon",
        places: [
          { id: "PT-LIS-001", name: "Belém Tower", category: "History", rating: 4.7, description: "UNESCO riverside fortress — symbol of Portugal's Age of Discoveries.", tags: ["UNESCO", "history", "iconic"] },
          { id: "PT-LIS-002", name: "Alfama District & Fado", category: "Culture", rating: 4.8, description: "Oldest Lisbon neighbourhood with hilltop castle and soulful fado music.", tags: ["culture", "music", "historic"] },
          { id: "PT-LIS-003", name: "Time Out Market Lisbon", category: "Food", rating: 4.7, description: "Award-winning food hall with the best of Portuguese cuisine under one roof.", tags: ["food", "culture", "local"] },
        ]
      },
      {
        id: "PT-ALC",
        name: "Algarve",
        places: [
          { id: "PT-ALC-001", name: "Ponta da Piedade", category: "Nature", rating: 4.9, description: "Dramatic golden sea stacks and sea caves near Lagos.", tags: ["nature", "scenic", "photography"] },
          { id: "PT-ALC-002", name: "Benagil Cave", category: "Nature", rating: 4.9, description: "Iconic sea cave with an oculus opening onto a hidden beach.", tags: ["nature", "unique", "adventure"] },
          { id: "PT-ALC-003", name: "Praia da Marinha", category: "Beach", rating: 4.8, description: "Regarded as one of Europe's most beautiful beaches.", tags: ["beach", "scenic", "nature"] },
        ]
      }
    ]
  },
  {
    id: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    continent: "North America",
    description: "Ancient pyramids, vibrant culture, mezcal and Caribbean coastlines.",
    states: [
      {
        id: "MX-CDMX",
        name: "Mexico City",
        places: [
          { id: "MX-CDMX-001", name: "Teotihuacán Pyramids", category: "History", rating: 5.0, description: "Sun and Moon pyramids of the ancient Aztec empire — a UNESCO wonder.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "MX-CDMX-002", name: "Frida Kahlo Museum (Casa Azul)", category: "Art", rating: 4.8, description: "Iconic blue house where Frida Kahlo was born, lived and died.", tags: ["art", "culture", "museum"] },
          { id: "MX-CDMX-003", name: "Zócalo & Metropolitan Cathedral", category: "History", rating: 4.6, description: "One of the largest city squares in the world atop Aztec ruins.", tags: ["history", "architecture", "culture"] },
          { id: "MX-CDMX-004", name: "Mercado de Jamaica", category: "Food", rating: 4.5, description: "Mexico City's vast flower and food market in Tepito.", tags: ["food", "culture", "local"] },
        ]
      },
      {
        id: "MX-QR",
        name: "Quintana Roo (Yucatán)",
        places: [
          { id: "MX-QR-001", name: "Chichén Itzá", category: "History", rating: 4.9, description: "New Seven Wonders of the World — Maya pyramid El Castillo.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "MX-QR-002", name: "Cenote Ik Kil", category: "Nature", rating: 4.8, description: "Sacred Maya sinkhole with vines, waterfalls and turquoise water.", tags: ["nature", "unique", "swimming"] },
          { id: "MX-QR-003", name: "Tulum Ruins & Beach", category: "History", rating: 4.7, description: "Cliffside Maya ruins overlooking the Caribbean — breathtaking.", tags: ["history", "beach", "scenic"] },
          { id: "MX-QR-004", name: "Sian Ka'an Biosphere", category: "Nature", rating: 4.8, description: "UNESCO reserve — mangroves, lagoons, Mayan canals and sea turtles.", tags: ["UNESCO", "nature", "wildlife"] },
        ]
      }
    ]
  },
  {
    id: "CO",
    name: "Colombia",
    flag: "🇨🇴",
    continent: "South America",
    description: "Colombia's time has come — coffee, Cartagena and carnival energy.",
    states: [
      {
        id: "CO-BOG",
        name: "Bogotá",
        places: [
          { id: "CO-BOG-001", name: "Gold Museum (Museo del Oro)", category: "History", rating: 4.8, description: "World's largest collection of pre-Hispanic gold artifacts.", tags: ["museum", "history", "culture"] },
          { id: "CO-BOG-002", name: "La Candelaria Historic Quarter", category: "Culture", rating: 4.5, description: "Colorful colonial neighbourhood full of street art and bohemian culture.", tags: ["culture", "art", "history"] },
          { id: "CO-BOG-003", name: "Monserrate Hill", category: "Nature", rating: 4.6, description: "Cable car to church and panoramic views of sprawling Bogotá.", tags: ["nature", "scenic", "culture"] },
        ]
      },
      {
        id: "CO-CTG",
        name: "Cartagena",
        places: [
          { id: "CO-CTG-001", name: "Walled City of Cartagena", category: "History", rating: 4.9, description: "UNESCO-listed colonial fortress city with colourful balconies.", tags: ["UNESCO", "history", "culture"] },
          { id: "CO-CTG-002", name: "Rosario Islands", category: "Beach", rating: 4.7, description: "Pristine Caribbean coral island archipelago for snorkelling.", tags: ["beach", "snorkelling", "nature"] },
          { id: "CO-CTG-003", name: "Volcán del Totumo", category: "Adventure", rating: 4.4, description: "Bathe in warm therapeutic mud in this natural mud volcano.", tags: ["adventure", "unique", "wellness"] },
        ]
      },
      {
        id: "CO-MED",
        name: "Medellín",
        places: [
          { id: "CO-MED-001", name: "Pablo Escobar Tours & Museum", category: "History", rating: 4.2, description: "Controversial but fascinating insight into Medellín's dark past and transformation.", tags: ["history", "culture", "unique"] },
          { id: "CO-MED-002", name: "Guatapé & El Peñón Rock", category: "Nature", rating: 4.9, description: "768 steps to the summit of a giant granite monolith with surreal views.", tags: ["adventure", "nature", "scenic"] },
        ]
      }
    ]
  },
  {
    id: "SN",
    name: "Senegal",
    flag: "🇸🇳",
    continent: "Africa",
    description: "Teranga — the spirit of African hospitality — in music, cuisine and coastline.",
    states: [
      {
        id: "SN-DAK",
        name: "Dakar",
        places: [
          { id: "SN-DAK-001", name: "Île de Gorée", category: "History", rating: 4.8, description: "UNESCO island — former slave trade hub, now a powerful memorial.", tags: ["UNESCO", "history", "culture"] },
          { id: "SN-DAK-002", name: "African Renaissance Monument", category: "Landmark", rating: 4.3, description: "Largest statue in Africa, towering 49m on a volcanic hill.", tags: ["landmark", "culture", "iconic"] },
          { id: "SN-DAK-003", name: "Sandaga Market", category: "Shopping", rating: 4.2, description: "Dakar's biggest market for fabrics, crafts and West African goods.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "SN-STL",
        name: "Saint-Louis",
        places: [
          { id: "SN-STL-001", name: "Saint-Louis Island Historic Town", category: "History", rating: 4.7, description: "UNESCO-listed former colonial capital with faded French architecture.", tags: ["UNESCO", "history", "culture"] },
          { id: "SN-STL-002", name: "Djoudj Bird Sanctuary", category: "Wildlife", rating: 4.8, description: "UNESCO park — 3 million birds including pelicans and flamingos.", tags: ["wildlife", "UNESCO", "birdwatching"] },
        ]
      }
    ]
  },
  {
    id: "ET",
    name: "Ethiopia",
    flag: "🇪🇹",
    continent: "Africa",
    description: "Cradle of humanity — ancient kingdoms, rock churches and the source of the Nile.",
    states: [
      {
        id: "ET-ADD",
        name: "Addis Ababa",
        places: [
          { id: "ET-ADD-001", name: "National Museum of Ethiopia", category: "History", rating: 4.7, description: "Home of Lucy — the 3.2 million year-old human ancestor fossil.", tags: ["history", "museum", "science"] },
          { id: "ET-ADD-002", name: "Merkato Market", category: "Shopping", rating: 4.3, description: "Largest open-air market in Africa — a sensory overload.", tags: ["shopping", "culture", "local"] },
          { id: "ET-ADD-003", name: "Holy Trinity Cathedral", category: "Culture", rating: 4.5, description: "Most important Orthodox church in Ethiopia, burial site of emperors.", tags: ["religion", "culture", "history"] },
        ]
      },
      {
        id: "ET-LAL",
        name: "Lalibela",
        places: [
          { id: "ET-LAL-001", name: "Rock-Hewn Churches of Lalibela", category: "History", rating: 5.0, description: "UNESCO — 11 monolithic churches carved from solid rock in the 12th century.", tags: ["UNESCO", "ancient", "spiritual"] },
          { id: "ET-LAL-002", name: "Timkat Festival (Jan)", category: "Culture", rating: 4.9, description: "Ethiopian Orthodox Epiphany — one of Africa's most spectacular festivals.", tags: ["culture", "festival", "unique"] },
        ]
      }
    ]
  },
  {
    id: "RW",
    name: "Rwanda",
    flag: "🇷🇼",
    continent: "Africa",
    description: "The Land of a Thousand Hills — gorillas, rebirth and Africa's cleanest city.",
    states: [
      {
        id: "RW-KGL",
        name: "Kigali",
        places: [
          { id: "RW-KGL-001", name: "Kigali Genocide Memorial", category: "History", rating: 4.8, description: "Deeply moving tribute to the 800,000 victims of the 1994 genocide.", tags: ["history", "memorial", "culture"] },
          { id: "RW-KGL-002", name: "Kimironko Market", category: "Shopping", rating: 4.3, description: "Kigali's largest local market — fabrics, food and everyday life.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "RW-VNP",
        name: "Volcanoes National Park",
        places: [
          { id: "RW-VNP-001", name: "Mountain Gorilla Trekking", category: "Wildlife", rating: 5.0, description: "The world's most profound wildlife experience — face-to-face with mountain gorillas.", tags: ["wildlife", "conservation", "unique"] },
          { id: "RW-VNP-002", name: "Golden Monkey Tracking", category: "Wildlife", rating: 4.8, description: "Track the rare and playful golden monkeys through bamboo forest.", tags: ["wildlife", "nature", "unique"] },
        ]
      }
    ]
  },
  {
    id: "ZM",
    name: "Zambia",
    flag: "🇿🇲",
    continent: "Africa",
    description: "Victoria Falls, walking safaris and the wild heart of southern Africa.",
    states: [
      {
        id: "ZM-LIV",
        name: "Livingstone",
        places: [
          { id: "ZM-LIV-001", name: "Victoria Falls (Zambia side)", category: "Nature", rating: 5.0, description: "World's largest waterfall — the Smoke that Thunders from the Zambia side.", tags: ["UNESCO", "nature", "iconic"] },
          { id: "ZM-LIV-002", name: "Devil's Pool", category: "Adventure", rating: 4.9, description: "Swim at the edge of Victoria Falls in a natural rock pool during low water.", tags: ["adventure", "unique", "daring"] },
          { id: "ZM-LIV-003", name: "Livingstone Museum", category: "History", rating: 4.4, description: "Zambia's oldest and largest museum covering history and culture.", tags: ["history", "culture", "museum"] },
        ]
      },
      {
        id: "ZM-SAF",
        name: "South Luangwa",
        places: [
          { id: "ZM-SAF-001", name: "South Luangwa National Park", category: "Wildlife", rating: 4.9, description: "Home of the walking safari, with exceptional leopard and elephant density.", tags: ["safari", "wildlife", "unique"] },
          { id: "ZM-SAF-002", name: "Night Game Drive Luangwa", category: "Wildlife", rating: 4.8, description: "After-dark safari to spot nocturnal predators in their element.", tags: ["safari", "adventure", "unique"] },
        ]
      }
    ]
  },
  {
    id: "UG",
    name: "Uganda",
    flag: "🇺🇬",
    continent: "Africa",
    description: "The Pearl of Africa — Nile source, mountain gorillas and Bwindi Forest.",
    states: [
      {
        id: "UG-BWI",
        name: "Bwindi Impenetrable Forest",
        places: [
          { id: "UG-BWI-001", name: "Gorilla Trekking Bwindi", category: "Wildlife", rating: 5.0, description: "Trek through dense jungle to spend an hour with habituated gorilla families.", tags: ["wildlife", "UNESCO", "unique"] },
          { id: "UG-BWI-002", name: "Batwa Cultural Experience", category: "Culture", rating: 4.6, description: "Learn the traditions of the Batwa pygmy forest people.", tags: ["culture", "indigenous", "authentic"] },
        ]
      },
      {
        id: "UG-JIN",
        name: "Jinja",
        places: [
          { id: "UG-JIN-001", name: "Source of the Nile", category: "Nature", rating: 4.7, description: "Where the world's longest river begins its journey from Lake Victoria.", tags: ["nature", "landmark", "historic"] },
          { id: "UG-JIN-002", name: "White Water Rafting Jinja", category: "Adventure", rating: 4.8, description: "Grade 5 rapids on the Nile — one of Africa's best rafting experiences.", tags: ["adventure", "adrenaline", "water"] },
        ]
      }
    ]
  },
  {
    id: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    continent: "Oceania",
    description: "Middle-earth landscapes, Māori culture, bungee jumping and pristine nature.",
    states: [
      {
        id: "NZ-NI",
        name: "North Island",
        places: [
          { id: "NZ-NI-001", name: "Hobbiton Movie Set", category: "Experience", rating: 4.8, description: "The real Shire from Lord of the Rings — a movie magic experience.", tags: ["unique", "film", "culture"] },
          { id: "NZ-NI-002", name: "Waitomo Glowworm Caves", category: "Nature", rating: 4.9, description: "Float silently through caves lit by thousands of bioluminescent glowworms.", tags: ["nature", "unique", "underground"] },
          { id: "NZ-NI-003", name: "Tongariro Alpine Crossing", category: "Adventure", rating: 4.9, description: "New Zealand's best day hike — volcanic craters, emerald lakes, and lava fields.", tags: ["hiking", "nature", "adventure"] },
          { id: "NZ-NI-004", name: "Rotorua Māori Cultural Show", category: "Culture", rating: 4.7, description: "Traditional Māori haka, hangi feast and geothermal wonderland.", tags: ["culture", "indigenous", "authentic"] },
        ]
      },
      {
        id: "NZ-SI",
        name: "South Island",
        places: [
          { id: "NZ-SI-001", name: "Milford Sound", category: "Nature", rating: 5.0, description: "Fiordland's crown jewel — towering fjord walls and cascading waterfalls.", tags: ["nature", "UNESCO", "iconic"] },
          { id: "NZ-SI-002", name: "Franz Josef Glacier", category: "Nature", rating: 4.8, description: "Hike or helicopter onto a spectacular living glacier on the West Coast.", tags: ["nature", "glacier", "adventure"] },
          { id: "NZ-SI-003", name: "Queenstown Bungee", category: "Adventure", rating: 4.7, description: "Birthplace of commercial bungee jumping — 43m Kawarau Bridge drop.", tags: ["adventure", "adrenaline", "iconic"] },
        ]
      }
    ]
  },
  {
    id: "JP2",
    name: "Japan (Osaka & Hiroshima)",
    flag: "🇯🇵",
    continent: "Asia",
    description: "Osaka's food culture and Hiroshima's powerful peace message.",
    states: [
      {
        id: "JP-OSA",
        name: "Osaka",
        places: [
          { id: "JP-OSA-001", name: "Dotonbori District", category: "Food", rating: 4.8, description: "Osaka's neon-lit food street — takoyaki, ramen, okonomiyaki.", tags: ["food", "nightlife", "culture"] },
          { id: "JP-OSA-002", name: "Osaka Castle", category: "History", rating: 4.7, description: "Iconic 16th century castle surrounded by a moat and cherry blossoms.", tags: ["history", "culture", "scenic"] },
          { id: "JP-OSA-003", name: "Universal Studios Japan", category: "Experience", rating: 4.7, description: "Home of the Wizarding World of Harry Potter and Super Nintendo World.", tags: ["entertainment", "family", "unique"] },
        ]
      },
      {
        id: "JP-HIR",
        name: "Hiroshima",
        places: [
          { id: "JP-HIR-001", name: "Hiroshima Peace Memorial Park", category: "History", rating: 4.9, description: "Deeply moving memorial to the atomic bomb victims of August 6, 1945.", tags: ["history", "memorial", "UNESCO"] },
          { id: "JP-HIR-002", name: "Miyajima Island & Itsukushima Shrine", category: "Culture", rating: 4.9, description: "Floating torii gate at high tide — one of Japan's most iconic images.", tags: ["culture", "UNESCO", "iconic"] },
        ]
      }
    ]
  },
  {
    id: "IS",
    name: "Iceland",
    flag: "🇮🇸",
    continent: "Europe",
    description: "Fire and ice — Northern Lights, geysers, waterfalls and midnight sun.",
    states: [
      {
        id: "IS-REY",
        name: "Reykjavík",
        places: [
          { id: "IS-REY-001", name: "Blue Lagoon", category: "Wellness", rating: 4.7, description: "Iconic geothermal spa in a lava field — milky blue waters and silica mud.", tags: ["wellness", "unique", "iconic"] },
          { id: "IS-REY-002", name: "Hallgrímskirkja Church", category: "Architecture", rating: 4.6, description: "Striking basalt-column inspired church with panoramic city views.", tags: ["architecture", "landmark", "scenic"] },
          { id: "IS-REY-003", name: "Northern Lights Tour", category: "Nature", rating: 5.0, description: "Chase the aurora borealis across Iceland's dark winter skies.", tags: ["nature", "unique", "magical"] },
        ]
      },
      {
        id: "IS-GLR",
        name: "Golden Circle & South Coast",
        places: [
          { id: "IS-GLR-001", name: "Geysir Hot Springs", category: "Nature", rating: 4.8, description: "Strokkur geyser erupts every 5–10 minutes to 30m height.", tags: ["nature", "unique", "geothermal"] },
          { id: "IS-GLR-002", name: "Gullfoss Waterfall", category: "Nature", rating: 4.9, description: "The 'Golden Falls' — two-tiered waterfall plunging into a dramatic canyon.", tags: ["nature", "waterfall", "scenic"] },
          { id: "IS-GLR-003", name: "Seljalandsfoss Waterfall", category: "Nature", rating: 4.8, description: "Walk behind the curtain of this 65m waterfall on Iceland's south coast.", tags: ["nature", "unique", "adventure"] },
          { id: "IS-GLR-004", name: "Diamond Beach & Jökulsárlón Glacier Lagoon", category: "Nature", rating: 5.0, description: "Icebergs calve from a glacier into a lagoon, then wash up as diamonds on black sand.", tags: ["nature", "unique", "photography"] },
        ]
      }
    ]
  },
  {
    id: "JO",
    name: "Jordan",
    flag: "🇯🇴",
    continent: "Asia",
    description: "Petra, Wadi Rum and the lowest point on earth — the Dead Sea.",
    states: [
      {
        id: "JO-PET",
        name: "Petra",
        places: [
          { id: "JO-PET-001", name: "Petra Treasury (Al-Khazneh)", category: "History", rating: 5.0, description: "Rose-red Nabataean city carved into sandstone — New Seven Wonder.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "JO-PET-002", name: "Petra By Night", category: "Experience", rating: 4.8, description: "Walk the Siq by candlelight to the Treasury — an unforgettable experience.", tags: ["unique", "magical", "culture"] },
          { id: "JO-PET-003", name: "The Monastery (Ad Deir)", category: "History", rating: 4.8, description: "Petra's largest monument — a demanding hike rewarded with a jaw-dropping façade.", tags: ["history", "hiking", "ancient"] },
        ]
      },
      {
        id: "JO-WAD",
        name: "Wadi Rum",
        places: [
          { id: "JO-WAD-001", name: "Wadi Rum Desert Camp", category: "Adventure", rating: 4.9, description: "Sleep in a Bedouin tent under the Milky Way in a Mars-like landscape.", tags: ["adventure", "unique", "stargazing"] },
          { id: "JO-WAD-002", name: "Jeep Desert Safari", category: "Adventure", rating: 4.8, description: "Explore Lawrence of Arabia's desert in a 4WD with a Bedouin guide.", tags: ["adventure", "culture", "nature"] },
        ]
      },
      {
        id: "JO-AQA",
        name: "Dead Sea & Aqaba",
        places: [
          { id: "JO-AQA-001", name: "Dead Sea Float", category: "Experience", rating: 4.8, description: "Float effortlessly in the world's saltiest lake at -430m — earth's lowest point.", tags: ["unique", "nature", "wellness"] },
          { id: "JO-AQA-002", name: "Red Sea Coral Reefs Aqaba", category: "Nature", rating: 4.7, description: "World-class snorkelling and diving in the crystal Red Sea.", tags: ["diving", "marine", "nature"] },
        ]
      }
    ]
  },
  {
    id: "CI",
    name: "Côte d'Ivoire",
    flag: "🇨🇮",
    continent: "Africa",
    description: "West Africa's economic heartbeat — forests, beaches and vibrant city life.",
    states: [
      {
        id: "CI-ABJ",
        name: "Abidjan",
        places: [
          { id: "CI-ABJ-001", name: "Cocody Art District", category: "Culture", rating: 4.4, description: "Vibrant area of galleries, restaurants and the city's creative scene.", tags: ["art", "culture", "local"] },
          { id: "CI-ABJ-002", name: "St. Paul's Cathedral", category: "Architecture", rating: 4.5, description: "Remarkable Aldo Spirito designed cathedral built into a rock face.", tags: ["architecture", "religion", "unique"] },
          { id: "CI-ABJ-003", name: "Plateau Market", category: "Shopping", rating: 4.2, description: "Abidjan's central market for fabrics, crafts and street food.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "CI-TAI",
        name: "Taï National Park",
        places: [
          { id: "CI-TAI-001", name: "Taï Forest Chimpanzee Tracking", category: "Wildlife", rating: 4.8, description: "UNESCO rainforest home to one of the last chimps using stone tools.", tags: ["wildlife", "UNESCO", "unique"] },
        ]
      }
    ]
  },
  {
    id: "CM",
    name: "Cameroon",
    flag: "🇨🇲",
    continent: "Africa",
    description: "Africa in miniature — desert north, rainforest south, beaches, and volcanoes.",
    states: [
      {
        id: "CM-DLA",
        name: "Douala",
        places: [
          { id: "CM-DLA-001", name: "Doual'art Cultural Centre", category: "Culture", rating: 4.3, description: "Contemporary African art space and urban regeneration project.", tags: ["art", "culture", "local"] },
          { id: "CM-DLA-002", name: "Marché des Fleurs", category: "Shopping", rating: 4.0, description: "Lively central market in Cameroon's economic capital.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "CM-MER",
        name: "Mount Cameroon Region",
        places: [
          { id: "CM-MER-001", name: "Mount Cameroon Hike", category: "Adventure", rating: 4.7, description: "West Africa's highest peak at 4,095m — active volcano with annual race.", tags: ["adventure", "hiking", "nature"] },
          { id: "CM-MER-002", name: "Limbe Wildlife Centre", category: "Wildlife", rating: 4.6, description: "Rescue centre for orphaned great apes — gorillas, chimps and drills.", tags: ["wildlife", "conservation", "unique"] },
        ]
      }
    ]
  },
  {
    id: "AO",
    name: "Angola",
    flag: "🇦🇴",
    continent: "Africa",
    description: "Africa's sleeping giant awakening — ancient rock art, wild coast and oil wealth.",
    states: [
      {
        id: "AO-LUA",
        name: "Luanda",
        places: [
          { id: "AO-LUA-001", name: "Ilha do Mussulo", category: "Beach", rating: 4.6, description: "Stunning peninsula beach with turquoise Atlantic waters near Luanda.", tags: ["beach", "nature", "relaxation"] },
          { id: "AO-LUA-002", name: "Fortress of São Miguel", category: "History", rating: 4.3, description: "17th century Portuguese fort overlooking Luanda Bay.", tags: ["history", "culture", "landmark"] },
        ]
      },
      {
        id: "AO-NAM",
        name: "Namibe Desert",
        places: [
          { id: "AO-NAM-001", name: "Welwitschia Mirabilis Trail", category: "Nature", rating: 4.7, description: "See Welwitschia plants — living fossils over 1,500 years old in the Namib.", tags: ["nature", "unique", "science"] },
          { id: "AO-NAM-002", name: "Arco Dunes & Beach", category: "Nature", rating: 4.5, description: "Dramatic orange dunes meeting the Atlantic Ocean — surreal landscapes.", tags: ["nature", "scenic", "photography"] },
        ]
      }
    ]
  },
  {
    id: "MU",
    name: "Mauritius",
    flag: "🇲🇺",
    continent: "Africa",
    description: "Mark Twain said heaven was modelled on Mauritius — judge for yourself.",
    states: [
      {
        id: "MU-NOR",
        name: "Northern Mauritius",
        places: [
          { id: "MU-NOR-001", name: "Île aux Cerfs", category: "Beach", rating: 4.9, description: "Postcard-perfect tropical island with turquoise lagoon and water sports.", tags: ["beach", "water", "paradise"] },
          { id: "MU-NOR-002", name: "Pamplemousses Botanical Garden", category: "Nature", rating: 4.6, description: "One of the oldest botanical gardens in the Southern Hemisphere.", tags: ["nature", "garden", "history"] },
          { id: "MU-NOR-003", name: "Chamarel Coloured Earth", category: "Nature", rating: 4.7, description: "Seven naturally coloured volcanic sand dunes that never mix.", tags: ["nature", "unique", "photography"] },
        ]
      },
      {
        id: "MU-SOU",
        name: "Southern Mauritius",
        places: [
          { id: "MU-SOU-001", name: "Underwater Waterfall Illusion", category: "Nature", rating: 4.8, description: "Sand and silt create the optical illusion of an underwater waterfall from the air.", tags: ["nature", "unique", "photography"] },
          { id: "MU-SOU-002", name: "Black River Gorges National Park", category: "Nature", rating: 4.7, description: "Lush forest reserve with rare endemic Mauritian wildlife.", tags: ["nature", "hiking", "wildlife"] },
        ]
      }
    ]
  },
  {
    id: "MA2",
    name: "Madagascar",
    flag: "🇲🇬",
    continent: "Africa",
    description: "The eighth continent — 90% of wildlife found nowhere else on Earth.",
    states: [
      {
        id: "MA2-ANT",
        name: "Antananarivo",
        places: [
          { id: "MA2-ANT-001", name: "Rova of Antananarivo", category: "History", rating: 4.4, description: "Historic royal palace complex of the Merina monarchs on a hilltop.", tags: ["history", "culture", "scenic"] },
          { id: "MA2-ANT-002", name: "Analakely Market", category: "Shopping", rating: 4.2, description: "Busy central market showcasing Madagascar's diverse cultures and crafts.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "MA2-MOR",
        name: "Morondava (Avenue of Baobabs)",
        places: [
          { id: "MA2-MOR-001", name: "Avenue of the Baobabs", category: "Nature", rating: 5.0, description: "Ancient baobab trees line a dirt road at sunset — one of Africa's most iconic images.", tags: ["nature", "photography", "iconic"] },
          { id: "MA2-MOR-002", name: "Tsingy de Bemaraha", category: "Nature", rating: 4.9, description: "UNESCO razor-sharp limestone karst pinnacles — unique in all the world.", tags: ["UNESCO", "nature", "unique"] },
        ]
      }
    ]
  }
];
