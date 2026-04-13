// Ajala World Data - Seeded tourist destinations
// Structure: Country > States/Regions > Places to Visit
import { WORLD_DATA_PHASE2 } from './worldDataPhase2';
import { AFRICA_EXTRA_COUNTRIES } from './worldDataPhase3';
import { NIGERIA_DATA } from './nigeriaData';
import { AFRICA_EXPANDED } from './africaExpandedData';
import { WORLD_EXPANDED } from './worldExpandedData';

const WORLD_DATA_BASE = [
  {
    id: "EG",
    name: "Egypt",
    flag: "🇪🇬",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800",
    description: "Cradle of civilisation — pyramids, pharaohs and the mighty Nile.",
    states: [
      {
        id: "EG-CAI",
        name: "Cairo",
        places: [
          { id: "EG-CAI-001", name: "Great Pyramid of Giza", category: "History", rating: 5.0, description: "The last surviving wonder of the ancient world.", tags: ["UNESCO", "ancient", "iconic"] },
          { id: "EG-CAI-002", name: "Egyptian Museum", category: "History", rating: 4.8, description: "World's largest collection of ancient Egyptian artifacts.", tags: ["museum", "history", "culture"] },
          { id: "EG-CAI-003", name: "Khan el-Khalili Bazaar", category: "Shopping", rating: 4.6, description: "Medieval Islamic bazaar in the heart of Islamic Cairo.", tags: ["shopping", "culture", "history"] },
          { id: "EG-CAI-004", name: "The Sphinx", category: "History", rating: 4.9, description: "Iconic limestone statue guarding the Giza Plateau.", tags: ["ancient", "iconic", "UNESCO"] },
        ]
      },
      {
        id: "EG-LUX",
        name: "Luxor",
        places: [
          { id: "EG-LUX-001", name: "Valley of the Kings", category: "History", rating: 4.9, description: "Royal necropolis with 63 tombs of New Kingdom pharaohs.", tags: ["ancient", "UNESCO", "history"] },
          { id: "EG-LUX-002", name: "Karnak Temple", category: "History", rating: 4.8, description: "Largest ancient religious site in the world.", tags: ["ancient", "architecture", "UNESCO"] },
          { id: "EG-LUX-003", name: "Luxor Temple", category: "History", rating: 4.7, description: "Illuminated temple complex on the banks of the Nile.", tags: ["ancient", "culture", "architecture"] },
        ]
      }
    ]
  },
  {
    id: "MA",
    name: "Morocco",
    flag: "🇲🇦",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800",
    description: "Where the Sahara meets the Mediterranean — exotic souks and imperial cities.",
    states: [
      {
        id: "MA-MAR",
        name: "Marrakech",
        places: [
          { id: "MA-MAR-001", name: "Jemaa el-Fna Square", category: "Culture", rating: 4.8, description: "UNESCO-listed square alive with storytellers, musicians and food.", tags: ["culture", "food", "entertainment"] },
          { id: "MA-MAR-002", name: "Majorelle Garden", category: "Nature", rating: 4.7, description: "Cobalt-blue botanical garden designed by French painter Majorelle.", tags: ["garden", "art", "nature"] },
          { id: "MA-MAR-003", name: "Medina of Marrakech", category: "Culture", rating: 4.8, description: "Labyrinthine UNESCO-listed old city full of souks and riads.", tags: ["UNESCO", "shopping", "culture"] },
          { id: "MA-MAR-004", name: "Bahia Palace", category: "History", rating: 4.6, description: "19th century palace with stunning Moorish architecture.", tags: ["history", "architecture", "art"] },
        ]
      },
      {
        id: "MA-FES",
        name: "Fes",
        places: [
          { id: "MA-FES-001", name: "Fes el Bali Medina", category: "Culture", rating: 4.9, description: "World's largest car-free urban area and UNESCO World Heritage site.", tags: ["UNESCO", "culture", "historic"] },
          { id: "MA-FES-002", name: "Chouara Tannery", category: "Culture", rating: 4.7, description: "Ancient leather tannery operating since the 11th century.", tags: ["culture", "artisan", "history"] },
        ]
      },
      {
        id: "MA-SAH",
        name: "Sahara Desert",
        places: [
          { id: "MA-SAH-001", name: "Erg Chebbi Dunes", category: "Nature", rating: 4.9, description: "Towering orange sand dunes near Merzouga, perfect for camel treks.", tags: ["nature", "adventure", "unique"] },
          { id: "MA-SAH-002", name: "Merzouga Desert Camp", category: "Adventure", rating: 4.8, description: "Sleep under the stars in luxury Saharan tented camps.", tags: ["adventure", "unique", "luxury"] },
        ]
      }
    ]
  },
  {
    id: "JP",
    name: "Japan",
    flag: "🇯🇵",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1490761668535-35497054064b?w=800",
    description: "Where ancient tradition meets cutting-edge modernity.",
    states: [
      {
        id: "JP-TOK",
        name: "Tokyo",
        places: [
          { id: "JP-TOK-001", name: "Senso-ji Temple", category: "Culture", rating: 4.8, description: "Tokyo's oldest Buddhist temple in the historic Asakusa district.", tags: ["temple", "culture", "history"] },
          { id: "JP-TOK-002", name: "Shibuya Crossing", category: "Landmark", rating: 4.7, description: "World's busiest pedestrian crossing — an iconic Tokyo spectacle.", tags: ["iconic", "urban", "photography"] },
          { id: "JP-TOK-003", name: "teamLab Planets", category: "Art", rating: 4.9, description: "Immersive digital art museum that blurs reality and illusion.", tags: ["art", "digital", "unique"] },
          { id: "JP-TOK-004", name: "Tsukiji Outer Market", category: "Food", rating: 4.7, description: "Fresh sushi, street food and Japanese kitchen supplies.", tags: ["food", "local", "culture"] },
          { id: "JP-TOK-005", name: "Harajuku Takeshita Street", category: "Culture", rating: 4.5, description: "Epicentre of Japanese youth fashion and pop culture.", tags: ["culture", "shopping", "unique"] },
        ]
      },
      {
        id: "JP-KYO",
        name: "Kyoto",
        places: [
          { id: "JP-KYO-001", name: "Fushimi Inari Shrine", category: "Culture", rating: 4.9, description: "Thousands of vermillion torii gates winding up a sacred mountain.", tags: ["temple", "hiking", "iconic"] },
          { id: "JP-KYO-002", name: "Arashiyama Bamboo Grove", category: "Nature", rating: 4.8, description: "Ethereal path through towering bamboo stalks.", tags: ["nature", "photography", "peaceful"] },
          { id: "JP-KYO-003", name: "Kinkaku-ji Golden Pavilion", category: "Culture", rating: 4.9, description: "UNESCO Zen temple entirely covered in gold leaf.", tags: ["UNESCO", "architecture", "iconic"] },
          { id: "JP-KYO-004", name: "Gion District", category: "Culture", rating: 4.7, description: "Traditional geisha district with preserved machiya townhouses.", tags: ["culture", "history", "authentic"] },
        ]
      }
    ]
  },
  {
    id: "IT",
    name: "Italy",
    flag: "🇮🇹",
    continent: "Europe",
    coverImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    description: "Art, history, fashion and the world's most loved cuisine.",
    states: [
      {
        id: "IT-ROM",
        name: "Rome",
        places: [
          { id: "IT-ROM-001", name: "Colosseum", category: "History", rating: 4.9, description: "Ancient amphitheatre where gladiators fought for glory.", tags: ["ancient", "UNESCO", "iconic"] },
          { id: "IT-ROM-002", name: "Vatican Museums & Sistine Chapel", category: "Culture", rating: 4.9, description: "Michelangelo's ceiling masterpiece and world-class art collection.", tags: ["art", "history", "iconic"] },
          { id: "IT-ROM-003", name: "Trevi Fountain", category: "Landmark", rating: 4.7, description: "Baroque masterpiece where you toss a coin for good luck.", tags: ["landmark", "art", "iconic"] },
          { id: "IT-ROM-004", name: "Pantheon", category: "History", rating: 4.8, description: "Best-preserved ancient Roman temple with iconic oculus dome.", tags: ["ancient", "architecture", "history"] },
        ]
      },
      {
        id: "IT-FLO",
        name: "Florence",
        places: [
          { id: "IT-FLO-001", name: "Uffizi Gallery", category: "Art", rating: 4.9, description: "Botticelli, Leonardo and Michelangelo under one Renaissance roof.", tags: ["art", "museum", "culture"] },
          { id: "IT-FLO-002", name: "Florence Cathedral (Duomo)", category: "Architecture", rating: 4.8, description: "Brunelleschi's dome — an engineering marvel of the Renaissance.", tags: ["architecture", "history", "iconic"] },
          { id: "IT-FLO-003", name: "Ponte Vecchio", category: "Landmark", rating: 4.7, description: "Medieval bridge lined with jewellery shops over the Arno River.", tags: ["landmark", "shopping", "history"] },
        ]
      },
      {
        id: "IT-VEN",
        name: "Venice",
        places: [
          { id: "IT-VEN-001", name: "Grand Canal Gondola Ride", category: "Experience", rating: 4.8, description: "Glide along Venice's main waterway in a traditional gondola.", tags: ["unique", "romantic", "iconic"] },
          { id: "IT-VEN-002", name: "St Mark's Basilica", category: "Architecture", rating: 4.9, description: "Byzantine cathedral adorned with golden mosaics.", tags: ["architecture", "religion", "UNESCO"] },
          { id: "IT-VEN-003", name: "Rialto Market", category: "Food", rating: 4.6, description: "Venice's oldest market, bursting with fresh seafood and produce.", tags: ["food", "local", "culture"] },
        ]
      }
    ]
  },
  {
    id: "FR",
    name: "France",
    flag: "🇫🇷",
    continent: "Europe",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    description: "The art of living — haute cuisine, romance, and timeless beauty.",
    states: [
      {
        id: "FR-PAR",
        name: "Paris",
        places: [
          { id: "FR-PAR-001", name: "Eiffel Tower", category: "Landmark", rating: 4.8, description: "The iron lady — Paris's most iconic symbol.", tags: ["iconic", "landmark", "photography"] },
          { id: "FR-PAR-002", name: "The Louvre", category: "Art", rating: 4.9, description: "World's largest art museum, home of the Mona Lisa.", tags: ["art", "museum", "culture"] },
          { id: "FR-PAR-003", name: "Montmartre & Sacré-Cœur", category: "Culture", rating: 4.7, description: "Bohemian hilltop village with stunning white basilica.", tags: ["culture", "art", "scenic"] },
          { id: "FR-PAR-004", name: "Palace of Versailles", category: "History", rating: 4.8, description: "Opulent royal palace with Hall of Mirrors and royal gardens.", tags: ["history", "UNESCO", "architecture"] },
        ]
      },
      {
        id: "FR-PRO",
        name: "Provence",
        places: [
          { id: "FR-PRO-001", name: "Lavender Fields of Valensole", category: "Nature", rating: 4.9, description: "Endless purple lavender fields in the Provençal countryside.", tags: ["nature", "scenic", "photography"] },
          { id: "FR-PRO-002", name: "Gorges du Verdon", category: "Nature", rating: 4.8, description: "Europe's Grand Canyon — turquoise river through limestone gorges.", tags: ["nature", "adventure", "scenic"] },
        ]
      }
    ]
  },
  {
    id: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    description: "Crossroads of civilisations — Byzantine mosaics, bazaars and hot-air balloons.",
    states: [
      {
        id: "TR-IST",
        name: "Istanbul",
        places: [
          { id: "TR-IST-001", name: "Hagia Sophia", category: "Architecture", rating: 4.9, description: "Byzantine basilica turned mosque — architectural wonder of the ages.", tags: ["architecture", "history", "iconic"] },
          { id: "TR-IST-002", name: "Grand Bazaar", category: "Shopping", rating: 4.7, description: "One of the world's oldest and largest covered markets.", tags: ["shopping", "culture", "history"] },
          { id: "TR-IST-003", name: "Topkapi Palace", category: "History", rating: 4.8, description: "Ottoman imperial palace with treasury, harem and Bosphorus views.", tags: ["history", "palace", "culture"] },
          { id: "TR-IST-004", name: "Bosphorus Cruise", category: "Experience", rating: 4.7, description: "Sail between Europe and Asia on the legendary Bosphorus strait.", tags: ["cruise", "scenic", "unique"] },
        ]
      },
      {
        id: "TR-CAP",
        name: "Cappadocia",
        places: [
          { id: "TR-CAP-001", name: "Hot Air Balloon Ride", category: "Adventure", rating: 5.0, description: "Float over fairy chimneys at sunrise — the world's most magical balloon experience.", tags: ["adventure", "unique", "photography"] },
          { id: "TR-CAP-002", name: "Göreme Open Air Museum", category: "History", rating: 4.8, description: "UNESCO rock-cut churches with Byzantine frescoes from the 10th century.", tags: ["UNESCO", "history", "art"] },
          { id: "TR-CAP-003", name: "Underground Cities of Derinkuyu", category: "History", rating: 4.7, description: "8-storey underground city carved by ancient Christians.", tags: ["history", "unique", "adventure"] },
        ]
      }
    ]
  },
  {
    id: "US",
    name: "United States",
    flag: "🇺🇸",
    continent: "North America",
    coverImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
    description: "From Grand Canyon to Manhattan — a continent of experiences.",
    states: [
      {
        id: "US-NY",
        name: "New York",
        places: [
          { id: "US-NY-001", name: "Central Park", category: "Nature", rating: 4.8, description: "843 acres of greenery in the heart of Manhattan.", tags: ["nature", "iconic", "relaxation"] },
          { id: "US-NY-002", name: "Metropolitan Museum of Art", category: "Art", rating: 4.9, description: "One of the world's largest art museums with 5,000 years of art.", tags: ["art", "museum", "culture"] },
          { id: "US-NY-003", name: "Brooklyn Bridge", category: "Landmark", rating: 4.7, description: "Iconic suspension bridge with stunning Manhattan skyline views.", tags: ["landmark", "photography", "iconic"] },
          { id: "US-NY-004", name: "Times Square", category: "Culture", rating: 4.4, description: "The dazzling crossroads of the world.", tags: ["entertainment", "iconic", "urban"] },
          { id: "US-NY-005", name: "Statue of Liberty", category: "History", rating: 4.8, description: "Symbol of freedom on Liberty Island in New York Harbor.", tags: ["history", "iconic", "UNESCO"] },
        ]
      },
      {
        id: "US-AZ",
        name: "Arizona",
        places: [
          { id: "US-AZ-001", name: "Grand Canyon South Rim", category: "Nature", rating: 5.0, description: "One of the world's great natural wonders — mile-deep canyon vistas.", tags: ["nature", "UNESCO", "iconic"] },
          { id: "US-AZ-002", name: "Antelope Canyon", category: "Nature", rating: 4.9, description: "Otherworldly slot canyon carved by flash floods.", tags: ["nature", "photography", "unique"] },
          { id: "US-AZ-003", name: "Sedona Red Rocks", category: "Nature", rating: 4.8, description: "Dramatic red rock formations, vortexes and spiritual energy.", tags: ["nature", "spiritual", "hiking"] },
        ]
      },
      {
        id: "US-HI",
        name: "Hawaii",
        places: [
          { id: "US-HI-001", name: "Waimea Canyon", category: "Nature", rating: 4.8, description: "Grand Canyon of the Pacific on the island of Kauai.", tags: ["nature", "hiking", "scenic"] },
          { id: "US-HI-002", name: "Volcanoes National Park", category: "Nature", rating: 4.9, description: "Active volcanic landscape with lava flows on the Big Island.", tags: ["nature", "UNESCO", "unique"] },
          { id: "US-HI-003", name: "Napali Coast", category: "Nature", rating: 5.0, description: "Dramatic sea cliffs accessible only by boat or helicopter.", tags: ["nature", "scenic", "adventure"] },
        ]
      }
    ]
  },
  {
    id: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    continent: "South America",
    coverImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
    description: "Carnival, Amazon rainforest and the passion of samba.",
    states: [
      {
        id: "BR-RJ",
        name: "Rio de Janeiro",
        places: [
          { id: "BR-RJ-001", name: "Christ the Redeemer", category: "Landmark", rating: 4.9, description: "Iconic 38m statue overlooking Rio from Corcovado Mountain.", tags: ["iconic", "UNESCO", "landmark"] },
          { id: "BR-RJ-002", name: "Copacabana Beach", category: "Beach", rating: 4.7, description: "World-famous 4km beach promenade in the heart of Rio.", tags: ["beach", "iconic", "lifestyle"] },
          { id: "BR-RJ-003", name: "Sugarloaf Mountain", category: "Nature", rating: 4.8, description: "Cable car to dramatic rock outcrop with panoramic bay views.", tags: ["nature", "landmark", "scenic"] },
          { id: "BR-RJ-004", name: "Santa Teresa Neighbourhood", category: "Culture", rating: 4.6, description: "Bohemian hillside district with art studios, colonial homes and street art.", tags: ["culture", "art", "local"] },
        ]
      },
      {
        id: "BR-AM",
        name: "Amazonas",
        places: [
          { id: "BR-AM-001", name: "Amazon River Tours", category: "Adventure", rating: 4.8, description: "Navigate the world's largest river system through the jungle.", tags: ["adventure", "nature", "wildlife"] },
          { id: "BR-AM-002", name: "Amazon Rainforest Canopy Walk", category: "Nature", rating: 4.7, description: "Walk among the treetops in the world's largest tropical rainforest.", tags: ["nature", "adventure", "unique"] },
          { id: "BR-AM-003", name: "Meeting of the Waters", category: "Nature", rating: 4.8, description: "Where Rio Negro and Amazon River flow side by side without mixing.", tags: ["nature", "unique", "scenic"] },
        ]
      }
    ]
  },
  {
    id: "IN",
    name: "India",
    flag: "🇮🇳",
    continent: "Asia",
    coverImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    description: "A sensory overload of colour, spice, temples and spirituality.",
    states: [
      {
        id: "IN-UP",
        name: "Uttar Pradesh",
        places: [
          { id: "IN-UP-001", name: "Taj Mahal", category: "Architecture", rating: 5.0, description: "UNESCO masterpiece of Mughal architecture — monument to eternal love.", tags: ["UNESCO", "iconic", "architecture"] },
          { id: "IN-UP-002", name: "Varanasi Ghats", category: "Culture", rating: 4.8, description: "Ancient city on the Ganges — cremation ghats and spiritual ceremonies.", tags: ["spiritual", "culture", "unique"] },
          { id: "IN-UP-003", name: "Agra Fort", category: "History", rating: 4.7, description: "Mughal red sandstone fort with stunning Taj Mahal views.", tags: ["history", "UNESCO", "architecture"] },
        ]
      },
      {
        id: "IN-RJ",
        name: "Rajasthan",
        places: [
          { id: "IN-RJ-001", name: "Amber Fort, Jaipur", category: "History", rating: 4.8, description: "Majestic hilltop fort with stunning Rajput architecture.", tags: ["history", "architecture", "culture"] },
          { id: "IN-RJ-002", name: "Thar Desert Camel Safari", category: "Adventure", rating: 4.7, description: "Camel trek through the golden Thar Desert dunes.", tags: ["adventure", "unique", "culture"] },
          { id: "IN-RJ-003", name: "Lake Pichola, Udaipur", category: "Nature", rating: 4.8, description: "Romantic lake with floating palace and sunset boat rides.", tags: ["scenic", "romantic", "culture"] },
        ]
      }
    ]
  },
  {
    id: "AU",
    name: "Australia",
    flag: "🇦🇺",
    continent: "Oceania",
    coverImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    description: "Diverse landscapes — from the Outback to the Great Barrier Reef.",
    states: [
      {
        id: "AU-NSW",
        name: "New South Wales",
        places: [
          { id: "AU-NSW-001", name: "Sydney Opera House", category: "Architecture", rating: 4.9, description: "UNESCO masterpiece of 20th century architecture on Sydney Harbour.", tags: ["UNESCO", "iconic", "architecture"] },
          { id: "AU-NSW-002", name: "Bondi Beach", category: "Beach", rating: 4.7, description: "Australia's most famous beach with great surf and coastal walks.", tags: ["beach", "surf", "lifestyle"] },
          { id: "AU-NSW-003", name: "Blue Mountains", category: "Nature", rating: 4.8, description: "Dramatic sandstone escarpments, waterfalls and eucalyptus forest.", tags: ["nature", "hiking", "scenic"] },
        ]
      },
      {
        id: "AU-QLD",
        name: "Queensland",
        places: [
          { id: "AU-QLD-001", name: "Great Barrier Reef", category: "Nature", rating: 5.0, description: "World's largest coral reef system, UNESCO World Heritage site.", tags: ["UNESCO", "marine", "diving"] },
          { id: "AU-QLD-002", name: "Daintree Rainforest", category: "Nature", rating: 4.8, description: "World's oldest tropical rainforest, older than the Amazon.", tags: ["nature", "wildlife", "UNESCO"] },
          { id: "AU-QLD-003", name: "Whitsunday Islands", category: "Beach", rating: 4.9, description: "74 islands of whitest sand and crystal clear Coral Sea.", tags: ["beach", "sailing", "scenic"] },
        ]
      }
    ]
  },
  {
    id: "PE",
    name: "Peru",
    flag: "🇵🇪",
    continent: "South America",
    coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
    description: "Incan empire, Amazon basin and the lost city of Machu Picchu.",
    states: [
      {
        id: "PE-CUS",
        name: "Cusco",
        places: [
          { id: "PE-CUS-001", name: "Machu Picchu", category: "History", rating: 5.0, description: "The Lost City of the Incas — UNESCO wonder in the Andean clouds.", tags: ["UNESCO", "iconic", "ancient"] },
          { id: "PE-CUS-002", name: "Sacred Valley", category: "Nature", rating: 4.8, description: "Incan heartland with archaeological sites and Andean villages.", tags: ["history", "nature", "culture"] },
          { id: "PE-CUS-003", name: "Rainbow Mountain (Vinicunca)", category: "Nature", rating: 4.7, description: "Striped multicoloured mountain at 5,200m altitude.", tags: ["nature", "hiking", "unique"] },
          { id: "PE-CUS-004", name: "Cusco Plaza de Armas", category: "Culture", rating: 4.7, description: "Colonial Spanish square built atop Inca foundations.", tags: ["history", "culture", "architecture"] },
        ]
      },
      {
        id: "PE-LOR",
        name: "Loreto",
        places: [
          { id: "PE-LOR-001", name: "Peruvian Amazon Basin", category: "Adventure", rating: 4.8, description: "Explore the Peruvian Amazon by riverboat from Iquitos.", tags: ["adventure", "wildlife", "nature"] },
          { id: "PE-LOR-002", name: "Pacaya-Samiria Reserve", category: "Nature", rating: 4.7, description: "Flooded Amazon rainforest teeming with pink dolphins and macaws.", tags: ["wildlife", "nature", "unique"] },
        ]
      }
    ]
  }
];

export const CATEGORIES = ["All", "Nature", "Culture", "History", "Beach", "Wildlife", "Adventure", "Food", "Art", "Shopping", "Landmark", "Architecture", "Experience", "Spiritual", "Leisure"];

export const CONTINENTS = ["All", "Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

export const WORLD_DATA = [NIGERIA_DATA, ...WORLD_DATA_BASE, ...WORLD_DATA_PHASE2, ...AFRICA_EXTRA_COUNTRIES, ...AFRICA_EXPANDED, ...WORLD_EXPANDED];
export const getAllCountries = () => WORLD_DATA;

export const getCountryById = (id) => WORLD_DATA.find(c => c.id === id);

export const getPlaceById = (placeId) => {
  for (const country of WORLD_DATA) {
    for (const state of country.states) {
      const place = state.places.find(p => p.id === placeId);
      if (place) return { ...place, stateName: state.name, countryName: country.name, countryFlag: country.flag };
    }
  }
  return null;
};

export const searchPlaces = (query) => {
  const results = [];
  const q = query.toLowerCase();
  for (const country of WORLD_DATA) {
    for (const state of country.states) {
      for (const place of state.places) {
        if (
          place.name.toLowerCase().includes(q) ||
          place.description.toLowerCase().includes(q) ||
          place.tags.some(t => t.includes(q)) ||
          state.name.toLowerCase().includes(q) ||
          country.name.toLowerCase().includes(q)
        ) {
          results.push({ ...place, stateName: state.name, countryName: country.name, countryFlag: country.flag });
        }
      }
    }
  }
  return results;
};
