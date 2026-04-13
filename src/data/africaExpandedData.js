// Ajala Africa Expanded Data
// Full country objects for Ghana, Kenya, South Africa, Tanzania + additional African countries

export const AFRICA_EXPANDED = [
  // ─── GHANA ────────────────────────────────────────────────────────────────
  {
    id: "GH",
    name: "Ghana",
    flag: "🇬🇭",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    description: "Gateway to West Africa — gold, culture, palm-fringed beaches and the warmest smiles on the continent.",
    states: [
      {
        id: "GH-ACC",
        name: "Greater Accra",
        places: [
          { id: "GH-ACC-001", name: "Labadi Beach", category: "Beach", rating: 4.3, description: "Accra's most popular beach with drumming, dancing and weekend entertainment.", tags: ["beach", "entertainment", "local"] },
          { id: "GH-ACC-002", name: "Kwame Nkrumah Memorial Park", category: "History", rating: 4.6, description: "Mausoleum and museum honouring Ghana's founding father and Pan-Africanist hero.", tags: ["history", "culture", "monument"] },
          { id: "GH-ACC-003", name: "National Museum of Ghana", category: "Culture", rating: 4.4, description: "Repository of Ghanaian cultural and historical artefacts spanning 2,000 years.", tags: ["museum", "culture", "history"] },
          { id: "GH-ACC-004", name: "Makola Market", category: "Shopping", rating: 4.2, description: "Accra's oldest and largest market — a sensory maze of fabrics, spices and street food.", tags: ["shopping", "local", "food"] },
          { id: "GH-ACC-005", name: "W.E.B. Du Bois Centre", category: "History", rating: 4.5, description: "Home of the father of Pan-Africanism — museum, library and memorial gardens.", tags: ["history", "culture", "heritage"] },
          { id: "GH-ACC-006", name: "Jamestown Lighthouse & Fishing Harbour", category: "Landmark", rating: 4.3, description: "Colonial lighthouse above the oldest part of Accra with vibrant fishing community below.", tags: ["landmark", "history", "local"] },
          { id: "GH-ACC-007", name: "National Theatre of Ghana", category: "Culture", rating: 4.4, description: "Striking ship-shaped building hosting dance, theatre and cultural performances.", tags: ["culture", "art", "entertainment"] },
          { id: "GH-ACC-008", name: "Accra Arts Centre", category: "Shopping", rating: 4.3, description: "Largest craft market in Ghana — woodcarvings, kente, beads and batik.", tags: ["shopping", "art", "culture"] },
          { id: "GH-ACC-009", name: "Osu Castle (Christiansborg Castle)", category: "History", rating: 4.5, description: "17th-century Danish fort that served as the seat of Ghana's government.", tags: ["history", "heritage", "colonial"] },
          { id: "GH-ACC-010", name: "Aburi Botanical Gardens", category: "Nature", rating: 4.6, description: "Lush hilltop gardens established in 1890 with panoramic views of Accra below.", tags: ["nature", "relaxation", "scenic"] },
        ]
      },
      {
        id: "GH-ASH",
        name: "Ashanti Region",
        places: [
          { id: "GH-ASH-001", name: "Manhyia Palace Museum", category: "History", rating: 4.7, description: "Home of the Asantehene — royal heritage, golden throne replicas and Ashanti history.", tags: ["history", "royalty", "culture"] },
          { id: "GH-ASH-002", name: "Kejetia Market", category: "Shopping", rating: 4.2, description: "One of West Africa's largest markets spread over 10,000 stalls.", tags: ["shopping", "local", "culture"] },
          { id: "GH-ASH-003", name: "Lake Bosomtwe", category: "Nature", rating: 4.6, description: "Ghana's only natural lake, formed by a meteorite impact 1.07 million years ago.", tags: ["nature", "lake", "relaxation"] },
          { id: "GH-ASH-004", name: "Kumasi Cultural Centre", category: "Culture", rating: 4.4, description: "Complex of museums, craft workshops and traditional Ashanti artefacts.", tags: ["culture", "museum", "art"] },
          { id: "GH-ASH-005", name: "Okomfo Anokye Sword Site", category: "History", rating: 4.5, description: "Legendary sword said to have been thrust into the earth by the Ashanti founder — still stands.", tags: ["history", "heritage", "legend"] },
          { id: "GH-ASH-006", name: "Kente Weaving Villages (Bonwire)", category: "Culture", rating: 4.7, description: "Watch master weavers create Ghana's iconic kente cloth on traditional looms.", tags: ["culture", "artisan", "authentic"] },
          { id: "GH-ASH-007", name: "Ejisu-Besease Shrine", category: "History", rating: 4.4, description: "Sacred traditional shrine with elaborate murals telling Ashanti spiritual history.", tags: ["history", "spiritual", "heritage"] },
          { id: "GH-ASH-008", name: "Kumasi Zoo", category: "Wildlife", rating: 4.0, description: "Ghana's only zoo with rescued West African wildlife including crocodiles and bushbuck.", tags: ["wildlife", "family", "nature"] },
          { id: "GH-ASH-009", name: "Owabi Wildlife Sanctuary", category: "Nature", rating: 4.3, description: "Forested reservoir sanctuary for birds, primates and rare butterflies near Kumasi.", tags: ["nature", "wildlife", "birding"] },
          { id: "GH-ASH-010", name: "Adanwomase Kente Village", category: "Culture", rating: 4.5, description: "Traditional village where entire families weave stunning ceremonial kente textiles.", tags: ["culture", "artisan", "shopping"] },
        ]
      },
      {
        id: "GH-CR",
        name: "Central Region",
        places: [
          { id: "GH-CR-001", name: "Cape Coast Castle", category: "History", rating: 4.8, description: "UNESCO World Heritage slave trade castle — the 'Door of No Return' on the Atlantic coast.", tags: ["history", "heritage", "UNESCO"] },
          { id: "GH-CR-002", name: "Kakum National Park", category: "Nature", rating: 4.7, description: "Rainforest park with 7-bridge canopy walkway 30 metres above the forest floor.", tags: ["nature", "adventure", "wildlife"] },
          { id: "GH-CR-003", name: "Elmina Castle", category: "History", rating: 4.8, description: "Sub-Saharan Africa's oldest European building — built by the Portuguese in 1482.", tags: ["history", "UNESCO", "heritage"] },
          { id: "GH-CR-004", name: "Coconut Grove Beach", category: "Beach", rating: 4.4, description: "Secluded palm-fringed beach near Elmina with calm Atlantic waters.", tags: ["beach", "relaxation", "scenic"] },
          { id: "GH-CR-005", name: "Fort St Jago", category: "History", rating: 4.3, description: "17th-century Dutch fort on the hill overlooking Elmina Castle.", tags: ["history", "colonial", "views"] },
          { id: "GH-CR-006", name: "Hans Cottage Botel", category: "Wildlife", rating: 4.2, description: "Crocodile-inhabited lake where you can hand-feed sacred crocodiles.", tags: ["wildlife", "unique", "local"] },
          { id: "GH-CR-007", name: "Ankasa Conservation Area", category: "Nature", rating: 4.6, description: "One of Ghana's last remaining patches of virgin tropical rainforest.", tags: ["nature", "wildlife", "conservation"] },
          { id: "GH-CR-008", name: "Brenu-Akyinim Beach", category: "Beach", rating: 4.5, description: "Undeveloped palm-backed beach regarded as one of Ghana's most beautiful.", tags: ["beach", "scenic", "relaxation"] },
          { id: "GH-CR-009", name: "Assin Manso (Slave River)", category: "History", rating: 4.6, description: "Last watering point for enslaved people on the route to the coast — deeply moving site.", tags: ["history", "heritage", "memorial"] },
          { id: "GH-CR-010", name: "Eguafo Royal Palace", category: "History", rating: 4.3, description: "Ancient palace of the Eguafo kingdom with traditional murals and royal regalia.", tags: ["history", "culture", "royalty"] },
        ]
      },
      {
        id: "GH-VR",
        name: "Volta Region",
        places: [
          { id: "GH-VR-001", name: "Wli Waterfalls", category: "Nature", rating: 4.8, description: "West Africa's tallest waterfall, with a colony of fruit bats and jungle trail.", tags: ["waterfall", "nature", "hiking"] },
          { id: "GH-VR-002", name: "Tafi Atome Monkey Sanctuary", category: "Wildlife", rating: 4.7, description: "Sacred village forest where Mona monkeys freely mingle with visitors.", tags: ["wildlife", "culture", "unique"] },
          { id: "GH-VR-003", name: "Kente Weaving at Kpetoe", category: "Culture", rating: 4.5, description: "Volta Region's distinct Agotime kente weaving tradition — different patterns from Ashanti.", tags: ["culture", "artisan", "authentic"] },
          { id: "GH-VR-004", name: "Hohoe", category: "Adventure", rating: 4.4, description: "Gateway town for Volta Region waterfalls, hiking and community ecotourism.", tags: ["adventure", "nature", "local"] },
          { id: "GH-VR-005", name: "Lake Volta", category: "Nature", rating: 4.5, description: "World's largest man-made lake by surface area — ferry journeys across its islands.", tags: ["nature", "scenic", "boat"] },
          { id: "GH-VR-006", name: "Amedzofe Canopy Walk", category: "Adventure", rating: 4.4, description: "Suspended bridge walk over mountainous forest in the Volta highlands.", tags: ["adventure", "nature", "views"] },
          { id: "GH-VR-007", name: "Mount Afadja", category: "Adventure", rating: 4.6, description: "Ghana's highest peak at 885m — challenging hike with spectacular sunrise views.", tags: ["hiking", "adventure", "nature"] },
          { id: "GH-VR-008", name: "Tafi Abuife Kente Centre", category: "Culture", rating: 4.3, description: "Community weaving co-operative producing authentic hand-woven kente.", tags: ["culture", "artisan", "shopping"] },
          { id: "GH-VR-009", name: "Xavi Waterfalls", category: "Nature", rating: 4.4, description: "Secluded cascading falls in the Volta highlands, less visited than Wli.", tags: ["waterfall", "nature", "peaceful"] },
          { id: "GH-VR-010", name: "Nkwanta Game Reserve", category: "Wildlife", rating: 4.2, description: "Northern Volta savanna reserve with buffalo, hippo and seasonal bird migrations.", tags: ["wildlife", "safari", "nature"] },
        ]
      },
      {
        id: "GH-NR",
        name: "Northern Region",
        places: [
          { id: "GH-NR-001", name: "Mole National Park", category: "Wildlife", rating: 4.8, description: "Ghana's largest national park — elephant, antelope, warthog and over 300 bird species.", tags: ["safari", "wildlife", "nature"] },
          { id: "GH-NR-002", name: "Larabanga Mosque", category: "Culture", rating: 4.7, description: "West Africa's oldest mosque (1421 AD) — stunning Sudanese-style mud architecture.", tags: ["history", "architecture", "culture"] },
          { id: "GH-NR-003", name: "Tamale Central Market", category: "Shopping", rating: 4.2, description: "Northern Ghana's commercial hub selling smock fabric, shea butter and cattle.", tags: ["shopping", "local", "culture"] },
          { id: "GH-NR-004", name: "Salaga Slave Market", category: "History", rating: 4.5, description: "One of West Africa's largest slave markets — wells where captives were held still exist.", tags: ["history", "heritage", "memorial"] },
          { id: "GH-NR-005", name: "Damongo Savanna", category: "Nature", rating: 4.3, description: "Beautiful Guinea Savanna landscape surrounding Mole — baobabs, shea trees and wildlife.", tags: ["nature", "scenic", "safari"] },
          { id: "GH-NR-006", name: "Paga Crocodile Pond", category: "Wildlife", rating: 4.6, description: "Sacred crocodile pond on the Burkina Faso border — crocodiles considered family spirits.", tags: ["wildlife", "culture", "unique"] },
          { id: "GH-NR-007", name: "Nakore Mosque", category: "Culture", rating: 4.3, description: "13th-century earthen mosque in the Sahel fringe — a hidden gem of Islamic heritage.", tags: ["history", "architecture", "culture"] },
          { id: "GH-NR-008", name: "Nkoranza Kente Festival", category: "Culture", rating: 4.5, description: "Annual festival celebrating Northern kente and Brong-Ahafo cultural heritage.", tags: ["culture", "festival", "authentic"] },
          { id: "GH-NR-009", name: "Wechiau Community Hippo Sanctuary", category: "Wildlife", rating: 4.6, description: "Community-managed Black Volta River sanctuary — canoe safaris to see hippos.", tags: ["wildlife", "ecotourism", "nature"] },
          { id: "GH-NR-010", name: "Tongo Hills", category: "Nature", rating: 4.4, description: "Ancient granite outcrops sacred to the Talensi people — panoramic views of the Upper East.", tags: ["nature", "culture", "spiritual"] },
        ]
      },
    ]
  },

  // ─── KENYA ────────────────────────────────────────────────────────────────
  {
    id: "KE",
    name: "Kenya",
    flag: "🇰🇪",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800",
    description: "Safari capital of the world — the Great Migration, Maasai culture, Swahili coast and snow-capped Kilimanjaro views.",
    states: [
      {
        id: "KE-NAI",
        name: "Nairobi",
        places: [
          { id: "KE-NAI-001", name: "David Sheldrick Wildlife Trust", category: "Wildlife", rating: 4.9, description: "Elephant and rhino orphanage — hand-feed baby elephants in the morning mud bath.", tags: ["wildlife", "conservation", "family"] },
          { id: "KE-NAI-002", name: "Nairobi National Park", category: "Nature", rating: 4.7, description: "World's only national park bordering a major capital city — lions with skyscrapers in background.", tags: ["safari", "wildlife", "unique"] },
          { id: "KE-NAI-003", name: "Karen Blixen Museum", category: "Culture", rating: 4.5, description: "Farm house of 'Out of Africa' author Karen Blixen, surrounded by Ngong Hills.", tags: ["history", "culture", "museum"] },
          { id: "KE-NAI-004", name: "Giraffe Centre", category: "Wildlife", rating: 4.8, description: "Feeding platform to hand-feed endangered Rothschild giraffes at eye level.", tags: ["wildlife", "conservation", "family"] },
          { id: "KE-NAI-005", name: "Nairobi National Museum", category: "History", rating: 4.6, description: "Kenya's flagship museum — human evolution, tribal cultures and East African art.", tags: ["museum", "history", "culture"] },
          { id: "KE-NAI-006", name: "Kazuri Beads Factory", category: "Culture", rating: 4.4, description: "Social enterprise making hand-painted ceramic beads employing single mothers.", tags: ["culture", "artisan", "shopping"] },
          { id: "KE-NAI-007", name: "Karura Forest", category: "Nature", rating: 4.6, description: "1,000 hectare urban forest with waterfalls, cycling trails and caves.", tags: ["nature", "cycling", "relaxation"] },
          { id: "KE-NAI-008", name: "Maasai Market", category: "Shopping", rating: 4.3, description: "Rotating weekly craft market with Maasai jewellery, carvings and textiles.", tags: ["shopping", "culture", "artisan"] },
          { id: "KE-NAI-009", name: "Uhuru Gardens National Monument", category: "History", rating: 4.2, description: "Site of Kenya's 1963 independence declaration — memorial and freedom museum.", tags: ["history", "memorial", "culture"] },
          { id: "KE-NAI-010", name: "Ngong Hills", category: "Nature", rating: 4.5, description: "Four rolling hills above Nairobi offering hiking trails and sweeping Rift Valley views.", tags: ["hiking", "nature", "scenic"] },
        ]
      },
      {
        id: "KE-MAA",
        name: "Maasai Mara",
        places: [
          { id: "KE-MAA-001", name: "Maasai Mara National Reserve", category: "Wildlife", rating: 4.9, description: "Africa's greatest wildlife spectacle — home of the Great Migration of 1.5 million wildebeest.", tags: ["safari", "wildlife", "iconic"] },
          { id: "KE-MAA-002", name: "Mara River Wildebeest Crossing", category: "Wildlife", rating: 4.9, description: "Watch herds plunge into crocodile-infested Mara River in the most dramatic wildlife event on earth.", tags: ["wildlife", "photography", "unique"] },
          { id: "KE-MAA-003", name: "Maasai Village Cultural Visit", category: "Culture", rating: 4.6, description: "Authentic experience of Maasai warrior dances, hut building and traditional medicine.", tags: ["culture", "indigenous", "authentic"] },
          { id: "KE-MAA-004", name: "Hot Air Balloon Safari", category: "Adventure", rating: 4.9, description: "Drift over golden savanna at dawn above herds of elephant, lion and giraffe.", tags: ["adventure", "wildlife", "photography"] },
          { id: "KE-MAA-005", name: "Mara Triangle", category: "Wildlife", rating: 4.8, description: "Less-visited western section of the Mara — high big cat density and exclusive camps.", tags: ["safari", "wildlife", "luxury"] },
          { id: "KE-MAA-006", name: "Oloololo Escarpment", category: "Nature", rating: 4.7, description: "Dramatic clifftop views over the Mara ecosystem — stunning sundowner location.", tags: ["scenic", "nature", "photography"] },
          { id: "KE-MAA-007", name: "Hippo Pool, Mara River", category: "Wildlife", rating: 4.7, description: "Watch hundreds of hippos wallowing in the Mara River at this accessible viewing point.", tags: ["wildlife", "photography", "nature"] },
          { id: "KE-MAA-008", name: "Lion Rock", category: "Wildlife", rating: 4.6, description: "Pride of lions that regularly sunbathe on an iconic rocky outcrop — a photographer's dream.", tags: ["wildlife", "photography", "safari"] },
          { id: "KE-MAA-009", name: "Cheetah Plains", category: "Wildlife", rating: 4.8, description: "Open grassland with East Africa's highest cheetah density — speed and elegance on display.", tags: ["wildlife", "safari", "photography"] },
          { id: "KE-MAA-010", name: "Olare Orok Conservancy", category: "Wildlife", rating: 4.8, description: "Private conservancy bordering the Mara with exclusive access and night game drives.", tags: ["safari", "wildlife", "luxury"] },
        ]
      },
      {
        id: "KE-MOM",
        name: "Mombasa & Coast",
        places: [
          { id: "KE-MOM-001", name: "Fort Jesus", category: "History", rating: 4.7, description: "UNESCO 16th-century Portuguese fort overlooking the Old Town and Indian Ocean.", tags: ["history", "UNESCO", "heritage"] },
          { id: "KE-MOM-002", name: "Diani Beach", category: "Beach", rating: 4.9, description: "Africa's top-rated beach — 17 km of powder white sand, turquoise water and coral reef.", tags: ["beach", "diving", "relaxation"] },
          { id: "KE-MOM-003", name: "Mombasa Old Town", category: "Culture", rating: 4.6, description: "Swahili carved doorways, Arab architecture and spice aromas along winding streets.", tags: ["culture", "history", "architecture"] },
          { id: "KE-MOM-004", name: "Watamu Marine National Park", category: "Nature", rating: 4.8, description: "World-class snorkelling and diving in pristine coral gardens on the Swahili coast.", tags: ["diving", "marine", "nature"] },
          { id: "KE-MOM-005", name: "Gedi Ruins", category: "History", rating: 4.5, description: "Mysterious 13th-century Swahili city swallowed by forest — one of East Africa's great ruins.", tags: ["history", "ruins", "archaeology"] },
          { id: "KE-MOM-006", name: "Shimba Hills National Reserve", category: "Wildlife", rating: 4.6, description: "Coastal forest with Africa's largest concentration of sable antelope and elephant.", tags: ["wildlife", "nature", "forest"] },
          { id: "KE-MOM-007", name: "Malindi Beach", category: "Beach", rating: 4.5, description: "Historic Swahili port with long beach, kite surfing, and ruins of early Arab settlements.", tags: ["beach", "history", "watersports"] },
          { id: "KE-MOM-008", name: "Hell's Kitchen, Marafa", category: "Nature", rating: 4.6, description: "Erosion canyon of blood-red sandstone walls glowing at sunset — known locally as 'Nyari'.", tags: ["nature", "scenic", "photography"] },
          { id: "KE-MOM-009", name: "Lamu Old Town", category: "Culture", rating: 4.8, description: "UNESCO World Heritage Swahili town — no cars, donkeys on cobblestone lanes, dhow building.", tags: ["culture", "UNESCO", "history"] },
          { id: "KE-MOM-010", name: "Arabuko-Sokoke Forest", category: "Nature", rating: 4.5, description: "East Africa's largest coastal forest — home to the rare Sokoke scops owl and golden-rumped elephant shrew.", tags: ["nature", "birding", "conservation"] },
        ]
      },
      {
        id: "KE-AMB",
        name: "Amboseli & Kilimanjaro",
        places: [
          { id: "KE-AMB-001", name: "Amboseli National Park", category: "Wildlife", rating: 4.9, description: "Africa's best elephant watching — herds of 50+ with Mt Kilimanjaro as backdrop.", tags: ["safari", "wildlife", "iconic"] },
          { id: "KE-AMB-002", name: "Kilimanjaro View from Amboseli", category: "Nature", rating: 4.9, description: "Africa's highest peak looming over savanna — most photographed scene in East Africa.", tags: ["scenic", "nature", "photography"] },
          { id: "KE-AMB-003", name: "Observation Hill", category: "Nature", rating: 4.6, description: "Panoramic viewpoint over Amboseli's marshes and surrounding Maasai plains.", tags: ["scenic", "nature", "photography"] },
          { id: "KE-AMB-004", name: "Ol Tukai Lodge Swamps", category: "Wildlife", rating: 4.7, description: "Year-round marshes fed by Kilimanjaro snowmelt — elephant and hippo highway.", tags: ["wildlife", "nature", "photography"] },
          { id: "KE-AMB-005", name: "Maasai Enkiama Cultural Bomas", category: "Culture", rating: 4.5, description: "Traditional Maasai homestead — experience beadwork, cattle herding and warrior fire-making.", tags: ["culture", "indigenous", "authentic"] },
          { id: "KE-AMB-006", name: "Chyulu Hills National Park", category: "Nature", rating: 4.7, description: "Young volcanic hills with ancient lava caves and cloud forest above Amboseli plains.", tags: ["nature", "adventure", "unique"] },
          { id: "KE-AMB-007", name: "Lake Amboseli Flamingos", category: "Wildlife", rating: 4.5, description: "Seasonal soda lake attracting hundreds of flamingos and pelicans on migration.", tags: ["wildlife", "birding", "photography"] },
          { id: "KE-AMB-008", name: "Kitirua Conservancy", category: "Wildlife", rating: 4.6, description: "Private Maasai-run conservancy bordering Amboseli with night drives and walking safaris.", tags: ["safari", "wildlife", "ecotourism"] },
          { id: "KE-AMB-009", name: "Enchoro Wildlife Conservancy", category: "Wildlife", rating: 4.5, description: "Community conservancy with cheetah, wild dog and exceptional predator sightings.", tags: ["safari", "wildlife", "conservation"] },
          { id: "KE-AMB-010", name: "Namanga Border Town Market", category: "Shopping", rating: 4.1, description: "Vibrant Maasai trade market at the Kenya-Tanzania border — beads, calabashes and ochre.", tags: ["shopping", "culture", "local"] },
        ]
      },
      {
        id: "KE-LAK",
        name: "Rift Valley & Lakes",
        places: [
          { id: "KE-LAK-001", name: "Lake Nakuru National Park", category: "Wildlife", rating: 4.8, description: "Soda lake famous for flamingo clouds and Africa's best white rhino viewing.", tags: ["wildlife", "birding", "safari"] },
          { id: "KE-LAK-002", name: "Hell's Gate National Park", category: "Adventure", rating: 4.7, description: "Walk and cycle among geysers, gorges and wildlife — inspiration for 'The Lion King'.", tags: ["adventure", "nature", "unique"] },
          { id: "KE-LAK-003", name: "Lake Naivasha Boat Ride", category: "Wildlife", rating: 4.6, description: "Freshwater lake with hippo herds and prolific birdlife including fish eagles.", tags: ["wildlife", "nature", "boat"] },
          { id: "KE-LAK-004", name: "Crescent Island Game Sanctuary", category: "Wildlife", rating: 4.7, description: "Walk on foot beside giraffe, zebra and wildebeest on an island in Lake Naivasha.", tags: ["wildlife", "walking", "unique"] },
          { id: "KE-LAK-005", name: "Lake Bogoria Flamingos", category: "Wildlife", rating: 4.7, description: "Geysers and hot springs surround a soda lake carpeted in lesser flamingos.", tags: ["wildlife", "birding", "nature"] },
          { id: "KE-LAK-006", name: "Menengai Crater", category: "Nature", rating: 4.4, description: "World's second largest caldera — geothermal steam vents and views over Nakuru.", tags: ["nature", "geology", "scenic"] },
          { id: "KE-LAK-007", name: "Mount Longonot Hike", category: "Adventure", rating: 4.6, description: "Volcanic crater hike above Lake Naivasha — 3 hour circuit with views of the Rift Valley.", tags: ["hiking", "adventure", "nature"] },
          { id: "KE-LAK-008", name: "Lake Elementaita", category: "Wildlife", rating: 4.5, description: "UNESCO World Heritage lake — flamingo breeding ground and pelican nesting site.", tags: ["wildlife", "UNESCO", "birding"] },
          { id: "KE-LAK-009", name: "Ol Pejeta Conservancy", category: "Wildlife", rating: 4.9, description: "Home of the last two northern white rhinos on earth — also has chimps and Big Five.", tags: ["wildlife", "conservation", "iconic"] },
          { id: "KE-LAK-010", name: "Thomson's Falls (Nyahururu)", category: "Nature", rating: 4.5, description: "74m waterfall named after explorer Joseph Thomson — forest trails and viewpoints.", tags: ["waterfall", "nature", "scenic"] },
        ]
      },
    ]
  },

  // ─── SOUTH AFRICA ─────────────────────────────────────────────────────────
  {
    id: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    description: "The Rainbow Nation — diverse cultures, dramatic landscapes, Big Five safaris, world-class wine and vibrant Cape Town.",
    states: [
      {
        id: "ZA-WC",
        name: "Western Cape",
        places: [
          { id: "ZA-WC-001", name: "Table Mountain", category: "Nature", rating: 4.9, description: "Iconic flat-topped mountain — cable car to the summit, with views stretching to the Cape Peninsula.", tags: ["nature", "iconic", "hiking"] },
          { id: "ZA-WC-002", name: "Cape of Good Hope", category: "Nature", rating: 4.8, description: "Dramatic cliffs at the meeting point of the Atlantic and Indian Oceans.", tags: ["nature", "landmark", "scenic"] },
          { id: "ZA-WC-003", name: "Robben Island", category: "History", rating: 4.7, description: "UNESCO site where Nelson Mandela was imprisoned for 18 years — guided by former political prisoners.", tags: ["history", "UNESCO", "heritage"] },
          { id: "ZA-WC-004", name: "Stellenbosch Winelands", category: "Food", rating: 4.8, description: "400-year-old wine town with Cape Dutch estates, world-renowned Pinotage and mountain-framed vineyards.", tags: ["wine", "food", "scenic"] },
          { id: "ZA-WC-005", name: "Boulders Beach Penguin Colony", category: "Wildlife", rating: 4.7, description: "Walk among 3,000 African penguins on a sheltered beach near Simon's Town.", tags: ["wildlife", "unique", "beach"] },
          { id: "ZA-WC-006", name: "Bo-Kaap, Cape Town", category: "Culture", rating: 4.6, description: "Brightly painted Malay quarter with spice-infused Cape Malay culture and cobblestone streets.", tags: ["culture", "history", "photography"] },
          { id: "ZA-WC-007", name: "V&A Waterfront", category: "Leisure", rating: 4.6, description: "Iconic working harbour with restaurants, shops, aquarium and Table Mountain backdrop.", tags: ["leisure", "food", "shopping"] },
          { id: "ZA-WC-008", name: "Chapman's Peak Drive", category: "Nature", rating: 4.8, description: "One of the world's most spectacular coastal drives — 9 km of dramatic Atlantic cliff road.", tags: ["scenic", "nature", "driving"] },
          { id: "ZA-WC-009", name: "Garden Route — Tsitsikamma", category: "Nature", rating: 4.8, description: "Ancient forests, dramatic coastline, bungee jumping at Bloukrans — Africa's adventure capital.", tags: ["nature", "adventure", "scenic"] },
          { id: "ZA-WC-010", name: "Hermanus Whale Watching", category: "Wildlife", rating: 4.8, description: "World's best land-based whale watching — Southern right whales breaching July to December.", tags: ["wildlife", "unique", "nature"] },
          { id: "ZA-WC-011", name: "Franschhoek Food & Wine", category: "Food", rating: 4.8, description: "Huguenot valley village with South Africa's finest restaurants and boutique wine farms.", tags: ["food", "wine", "culture"] },
          { id: "ZA-WC-012", name: "Kalk Bay Harbour", category: "Culture", rating: 4.5, description: "Charming fishing harbour with antique shops, fresh snoek and the famous Kalk Bay caves.", tags: ["culture", "food", "local"] },
        ]
      },
      {
        id: "ZA-GP",
        name: "Gauteng",
        places: [
          { id: "ZA-GP-001", name: "Apartheid Museum", category: "History", rating: 4.9, description: "Powerful and essential museum documenting the rise and fall of apartheid in South Africa.", tags: ["history", "culture", "museum"] },
          { id: "ZA-GP-002", name: "Cradle of Humankind", category: "History", rating: 4.7, description: "UNESCO World Heritage site with the largest concentration of human ancestral fossils on earth.", tags: ["UNESCO", "history", "science"] },
          { id: "ZA-GP-003", name: "Soweto Township Tour", category: "Culture", rating: 4.6, description: "Vibrant township, birthplace of South Africa's freedom movement — Vilakazi Street, Hector Pieterson.", tags: ["culture", "history", "authentic"] },
          { id: "ZA-GP-004", name: "Nelson Mandela's House, Soweto", category: "History", rating: 4.7, description: "Former home of Mandela on Vilakazi Street — the world's only street with two Nobel laureates.", tags: ["history", "heritage", "culture"] },
          { id: "ZA-GP-005", name: "Constitution Hill", category: "History", rating: 4.6, description: "Former prison complex where Mandela and Gandhi were held — now South Africa's Constitutional Court.", tags: ["history", "culture", "architecture"] },
          { id: "ZA-GP-006", name: "Gold Reef City", category: "Leisure", rating: 4.3, description: "Theme park built over a Victorian gold mine — rides, history and underground mine tour.", tags: ["leisure", "history", "family"] },
          { id: "ZA-GP-007", name: "Sandton City & Nelson Mandela Square", category: "Shopping", rating: 4.4, description: "Africa's richest square mile — luxury shopping, restaurants and Mandela's bronze statue.", tags: ["shopping", "leisure", "landmark"] },
          { id: "ZA-GP-008", name: "Pretoria Union Buildings", category: "Architecture", rating: 4.6, description: "Herbert Baker's sandstone masterpiece — seat of South Africa's government and Mandela memorial.", tags: ["architecture", "history", "scenic"] },
          { id: "ZA-GP-009", name: "Voortrekker Monument", category: "History", rating: 4.4, description: "Massive granite monument honouring Boer settlers — controversial but architecturally remarkable.", tags: ["history", "architecture", "heritage"] },
          { id: "ZA-GP-010", name: "Rhino & Lion Nature Reserve", category: "Wildlife", rating: 4.5, description: "Day safari near Johannesburg with rhino, lion, cheetah and wild dog.", tags: ["safari", "wildlife", "family"] },
        ]
      },
      {
        id: "ZA-KZN",
        name: "KwaZulu-Natal",
        places: [
          { id: "ZA-KZN-001", name: "Hluhluwe-iMfolozi Park", category: "Wildlife", rating: 4.8, description: "Africa's oldest proclaimed nature reserve — the park that saved white rhino from extinction.", tags: ["safari", "wildlife", "conservation"] },
          { id: "ZA-KZN-002", name: "Drakensberg Mountains", category: "Nature", rating: 4.9, description: "Cathedral Peak, Giants Castle and Golden Gate — UNESCO mountain kingdom with San rock art.", tags: ["nature", "hiking", "UNESCO"] },
          { id: "ZA-KZN-003", name: "iSimangaliso Wetland Park", category: "Nature", rating: 4.8, description: "UNESCO World Heritage site — hippo, crocodile, whale, turtle, rhino in one ecosystem.", tags: ["wildlife", "UNESCO", "nature"] },
          { id: "ZA-KZN-004", name: "Durban Beachfront Golden Mile", category: "Beach", rating: 4.4, description: "6 km of surf beaches in Africa's busiest port city — warm Indian Ocean year round.", tags: ["beach", "surf", "leisure"] },
          { id: "ZA-KZN-005", name: "Valley of a Thousand Hills", category: "Nature", rating: 4.5, description: "Dramatic landscape of rolling Zulu homesteads, craft markets and traditional dance.", tags: ["nature", "culture", "scenic"] },
          { id: "ZA-KZN-006", name: "Battlefields Route (Isandlwana & Rorke's Drift)", category: "History", rating: 4.7, description: "Site of the 1879 Anglo-Zulu wars — one of history's most dramatic military encounters.", tags: ["history", "heritage", "culture"] },
          { id: "ZA-KZN-007", name: "Phinda Private Game Reserve", category: "Wildlife", rating: 4.9, description: "Luxury eco-reserve with all Big Five plus cheetah in seven different ecosystems.", tags: ["safari", "wildlife", "luxury"] },
          { id: "ZA-KZN-008", name: "Blyde River Canyon (Mpumalanga)", category: "Nature", rating: 4.9, description: "Third largest canyon in the world — Gods Window, Bourke's Luck Potholes and Three Rondavels.", tags: ["nature", "scenic", "hiking"] },
          { id: "ZA-KZN-009", name: "Kruger National Park", category: "Wildlife", rating: 5.0, description: "South Africa's flagship national park — Big Five in vast bushveld, accessible self-drive or guided.", tags: ["safari", "wildlife", "iconic"] },
          { id: "ZA-KZN-010", name: "Sodwana Bay Diving", category: "Adventure", rating: 4.7, description: "Remote coral reef diving on the Maputaland coast — whale shark, manta ray and loggerhead turtle.", tags: ["diving", "adventure", "marine"] },
        ]
      },
      {
        id: "ZA-EC",
        name: "Eastern Cape",
        places: [
          { id: "ZA-EC-001", name: "Addo Elephant National Park", category: "Wildlife", rating: 4.8, description: "World's densest elephant population — also flightless dung beetle and great white sharks offshore.", tags: ["safari", "wildlife", "unique"] },
          { id: "ZA-EC-002", name: "Nelson Mandela's Birth Village, Mvezo", category: "History", rating: 4.6, description: "Village on the Mbashe River where Nelson Mandela was born in 1918.", tags: ["history", "heritage", "culture"] },
          { id: "ZA-EC-003", name: "Wild Coast Transkei", category: "Nature", rating: 4.7, description: "Remote rugged coastline with Hole-in-the-Wall, shipwrecks and untouched Xhosa communities.", tags: ["nature", "scenic", "authentic"] },
          { id: "ZA-EC-004", name: "Jeffreys Bay Surf", category: "Adventure", rating: 4.8, description: "One of the world's top 10 surfing spots — long right-hand point break at Supertubes.", tags: ["surf", "adventure", "beach"] },
          { id: "ZA-EC-005", name: "Tsitsikamma Forest", category: "Nature", rating: 4.7, description: "Ancient yellowwood and stinkwood forest — Otter Trail, suspension bridges and Bloukrans gorge.", tags: ["nature", "hiking", "forest"] },
          { id: "ZA-EC-006", name: "Graaff-Reinet (Karoo)", category: "Culture", rating: 4.5, description: "Valley of Desolation and best-preserved Cape Dutch town — 'Gem of the Karoo'.", tags: ["history", "culture", "nature"] },
          { id: "ZA-EC-007", name: "Baviaanskloof Wilderness", category: "Nature", rating: 4.7, description: "UNESCO biosphere reserve — ancient Khoi-San rock art, 4WD trails and leopard territory.", tags: ["nature", "adventure", "UNESCO"] },
          { id: "ZA-EC-008", name: "East London Aquarium", category: "Culture", rating: 4.2, description: "One of Africa's largest marine aquariums with spectacular shark tank.", tags: ["family", "marine", "culture"] },
          { id: "ZA-EC-009", name: "Hogsback", category: "Nature", rating: 4.5, description: "Misty Amathole Mountains with ancient forests, waterfalls and the village that inspired Tolkien's Shire.", tags: ["nature", "hiking", "scenic"] },
          { id: "ZA-EC-010", name: "Kariega Game Reserve", category: "Wildlife", rating: 4.7, description: "Family-friendly Eastern Cape Big Five reserve with rhinoceros rescue programme.", tags: ["safari", "wildlife", "conservation"] },
        ]
      },
      {
        id: "ZA-LIM",
        name: "Limpopo",
        places: [
          { id: "ZA-LIM-001", name: "Mapungubwe National Park", category: "History", rating: 4.7, description: "UNESCO World Heritage site of Africa's first kingdom (900 AD) — golden rhino artefacts.", tags: ["history", "UNESCO", "heritage"] },
          { id: "ZA-LIM-002", name: "Boulders Safari Lodge", category: "Wildlife", rating: 4.6, description: "Luxury lodge in the Waterberg with endangered rhino and rare brown hyena.", tags: ["safari", "wildlife", "luxury"] },
          { id: "ZA-LIM-003", name: "Magoebaskloof Waterfalls", category: "Nature", rating: 4.5, description: "Mist belt forest cascades including Debengeni Falls in indigenous mountain forest.", tags: ["waterfall", "nature", "hiking"] },
          { id: "ZA-LIM-004", name: "Tzaneen Tea & Coffee Estates", category: "Culture", rating: 4.3, description: "Misty highlands with tea and coffee plantations — guided estate tours and tastings.", tags: ["culture", "food", "nature"] },
          { id: "ZA-LIM-005", name: "Mokopane Fossil Sites", category: "History", rating: 4.4, description: "Early hominid fossils near Mokopane — part of the broader Cradle of Humankind region.", tags: ["history", "science", "heritage"] },
          { id: "ZA-LIM-006", name: "Venda Royal Cultural Villages", category: "Culture", rating: 4.5, description: "Authentic Venda cultural heritage — sacred Lake Fundudzi, ndebele art and drum traditions.", tags: ["culture", "indigenous", "authentic"] },
          { id: "ZA-LIM-007", name: "Kruger: Phalaborwa Gate Area", category: "Wildlife", rating: 4.8, description: "Central Kruger sector with dense elephant, lion and the iconic Olifants River viewpoint.", tags: ["safari", "wildlife", "iconic"] },
          { id: "ZA-LIM-008", name: "Haenertsburg Cherry Festival", category: "Culture", rating: 4.3, description: "Annual spring cherry blossom festival in the misty Drakensberg foothills of Limpopo.", tags: ["culture", "nature", "festival"] },
          { id: "ZA-LIM-009", name: "Nylsvley Nature Reserve", category: "Wildlife", rating: 4.5, description: "Ramsar Wetland — largest broadleaved floodplain in South Africa, critical birding site.", tags: ["birding", "nature", "wildlife"] },
          { id: "ZA-LIM-010", name: "Great Marico Valley", category: "Culture", rating: 4.2, description: "Bushveld valley immortalised by Herman Charles Bosman — craft beer, orchids and stargazing.", tags: ["culture", "nature", "local"] },
        ]
      },
    ]
  },

  // ─── TANZANIA ─────────────────────────────────────────────────────────────
  {
    id: "TZ",
    name: "Tanzania",
    flag: "🇹🇿",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    description: "Serengeti plains, Kilimanjaro summit, Zanzibar spice island and some of Africa's most untouched wilderness.",
    states: [
      {
        id: "TZ-SER",
        name: "Serengeti & Northern Circuit",
        places: [
          { id: "TZ-SER-001", name: "Serengeti National Park", category: "Wildlife", rating: 5.0, description: "Endless plains hosting the world's greatest wildlife migration — 1.5 million wildebeest annually.", tags: ["safari", "wildlife", "UNESCO"] },
          { id: "TZ-SER-002", name: "Ngorongoro Crater", category: "Wildlife", rating: 4.9, description: "World's largest intact volcanic caldera — a natural ark with Big Five in a 20 km bowl.", tags: ["wildlife", "UNESCO", "unique"] },
          { id: "TZ-SER-003", name: "Olduvai Gorge", category: "History", rating: 4.7, description: "Cradle of Mankind — where Mary Leakey found 1.8 million-year-old hominid fossils.", tags: ["history", "archaeology", "UNESCO"] },
          { id: "TZ-SER-004", name: "Lake Manyara National Park", category: "Wildlife", rating: 4.7, description: "Flamingo lake with tree-climbing lions, elephant and spectacular Rift Valley escarpment.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-SER-005", name: "Tarangire National Park", category: "Wildlife", rating: 4.8, description: "Ancient baobab forests and Africa's highest elephant concentration in the dry season.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-SER-006", name: "Hot Air Balloon over Serengeti", category: "Adventure", rating: 5.0, description: "Dawn balloon flight over golden savanna plains as herds move below — followed by bush breakfast.", tags: ["adventure", "wildlife", "photography"] },
          { id: "TZ-SER-007", name: "Maasai Boma Visit, Ngorongoro", category: "Culture", rating: 4.6, description: "Enter a traditional Maasai enkang — fire-making, cattle care and warrior ochre ceremonies.", tags: ["culture", "indigenous", "authentic"] },
          { id: "TZ-SER-008", name: "Empakaai Crater", category: "Nature", rating: 4.7, description: "Remote and rarely visited crater with a deep soda lake and forest — harder to reach, totally worth it.", tags: ["nature", "scenic", "unique"] },
          { id: "TZ-SER-009", name: "Laetoli Footprints Site", category: "History", rating: 4.6, description: "3.6 million-year-old fossilised hominid footprints preserved in volcanic ash near Ngorongoro.", tags: ["history", "archaeology", "unique"] },
          { id: "TZ-SER-010", name: "Grumeti River Crossing", category: "Wildlife", rating: 4.8, description: "Northern Serengeti's dramatic river crossing — giant Nile crocodiles ambush migrating wildebeest.", tags: ["wildlife", "photography", "safari"] },
        ]
      },
      {
        id: "TZ-ZAN",
        name: "Zanzibar Archipelago",
        places: [
          { id: "TZ-ZAN-001", name: "Stone Town", category: "Culture", rating: 4.8, description: "UNESCO-listed Swahili trading city — carved Arab doors, Persian baths and spice-soaked alleys.", tags: ["culture", "UNESCO", "history"] },
          { id: "TZ-ZAN-002", name: "Nungwi Beach", category: "Beach", rating: 4.9, description: "North Zanzibar's most popular beach — dhow-building village, turquoise water, night markets.", tags: ["beach", "relaxation", "water"] },
          { id: "TZ-ZAN-003", name: "Zanzibar Spice Tour", category: "Culture", rating: 4.7, description: "Walk working spice farms — vanilla, cloves, cinnamon, lemongrass and black pepper straight from the tree.", tags: ["culture", "food", "unique"] },
          { id: "TZ-ZAN-004", name: "Kendwa Rocks Beach", category: "Beach", rating: 4.8, description: "Pristine beach with calm swimming even at low tide — iconic full moon parties.", tags: ["beach", "nightlife", "relaxation"] },
          { id: "TZ-ZAN-005", name: "Jozani-Chwaka Bay National Park", category: "Wildlife", rating: 4.6, description: "Ancient forest home of the endangered Zanzibar red colobus monkey — found nowhere else on earth.", tags: ["wildlife", "nature", "unique"] },
          { id: "TZ-ZAN-006", name: "Paje Kite Beach", category: "Adventure", rating: 4.7, description: "East coast kite surfing capital of East Africa — consistent winds and shallow turquoise lagoon.", tags: ["watersports", "adventure", "beach"] },
          { id: "TZ-ZAN-007", name: "Prison Island (Changuu)", category: "History", rating: 4.5, description: "19th-century slave prison turned giant tortoise sanctuary — snorkel en route.", tags: ["history", "wildlife", "marine"] },
          { id: "TZ-ZAN-008", name: "Mnemba Island Marine Reserve", category: "Nature", rating: 4.9, description: "World-class snorkelling and diving around a private island — dolphins, turtles and coral.", tags: ["diving", "marine", "nature"] },
          { id: "TZ-ZAN-009", name: "Forodhani Gardens Night Market", category: "Food", rating: 4.7, description: "Sunset street food market in Stone Town — Zanzibar pizza, sugarcane juice and octopus skewers.", tags: ["food", "culture", "local"] },
          { id: "TZ-ZAN-010", name: "Pemba Island", category: "Adventure", rating: 4.7, description: "Remote northerly island — world-class wall diving, clove forests and traditional dhow sailing.", tags: ["diving", "nature", "unique"] },
        ]
      },
      {
        id: "TZ-KIL",
        name: "Kilimanjaro Region",
        places: [
          { id: "TZ-KIL-001", name: "Mount Kilimanjaro — Marangu Route", category: "Adventure", rating: 4.9, description: "Africa's highest peak — 5,895m summit via the 'Coca-Cola route', sleeping in mountain huts.", tags: ["hiking", "adventure", "iconic"] },
          { id: "TZ-KIL-002", name: "Kilimanjaro — Lemosho Route", category: "Adventure", rating: 5.0, description: "Most scenic route — 8 days through five climate zones with best acclimatisation profile.", tags: ["hiking", "adventure", "scenic"] },
          { id: "TZ-KIL-003", name: "Arusha National Park", category: "Wildlife", rating: 4.6, description: "Compact park with giraffe, buffalo, flamingos on alkaline lakes and views of Mt Meru.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-KIL-004", name: "Moshi Coffee Farms", category: "Culture", rating: 4.5, description: "Walk Arabica coffee farms on Kilimanjaro's fertile slopes — see the full bean-to-cup process.", tags: ["culture", "food", "nature"] },
          { id: "TZ-KIL-005", name: "Materuni Waterfall Hike", category: "Nature", rating: 4.6, description: "Guided hike through Chagga villages to a 70m waterfall on Kilimanjaro's lower slopes.", tags: ["waterfall", "hiking", "culture"] },
          { id: "TZ-KIL-006", name: "Chagga Cultural Museum, Moshi", category: "Culture", rating: 4.4, description: "Interactive museum of the Chagga people — irrigation canals, banana beer and blacksmithing.", tags: ["culture", "history", "authentic"] },
          { id: "TZ-KIL-007", name: "Lake Chala", category: "Nature", rating: 4.6, description: "Deep crater lake straddling Kenya-Tanzania border on Kilimanjaro's eastern flank — stunning kayaking.", tags: ["nature", "adventure", "scenic"] },
          { id: "TZ-KIL-008", name: "Arusha Cultural Heritage Centre", category: "Culture", rating: 4.4, description: "Vast showroom of Tingatinga paintings, Maasai jewellery and Makonde sculpture.", tags: ["culture", "art", "shopping"] },
          { id: "TZ-KIL-009", name: "Kibo Hut (4,700m)", category: "Adventure", rating: 4.7, description: "Final base camp before Kilimanjaro summit push — dramatic lunar landscape at sunset.", tags: ["adventure", "hiking", "scenic"] },
          { id: "TZ-KIL-010", name: "Kilimanjaro National Park Headquarters", category: "Culture", rating: 4.3, description: "Visitor centre with geology displays, route maps and the iconic Kilimanjaro gate photo.", tags: ["culture", "history", "landmark"] },
        ]
      },
      {
        id: "TZ-DAR",
        name: "Dar es Salaam & Southern",
        places: [
          { id: "TZ-DAR-001", name: "National Museum of Tanzania", category: "History", rating: 4.5, description: "Tanzania's premier museum — fossils, German colonial history and the Zinj skull replica.", tags: ["museum", "history", "culture"] },
          { id: "TZ-DAR-002", name: "Kariakoo Market", category: "Shopping", rating: 4.2, description: "Dar's largest market — a chaotic, colourful labyrinth of fresh produce, fabric and spices.", tags: ["shopping", "local", "food"] },
          { id: "TZ-DAR-003", name: "Coco Beach, Dar es Salaam", category: "Beach", rating: 4.3, description: "Popular city beach for sundowners, street food and weekend drumming sessions.", tags: ["beach", "leisure", "local"] },
          { id: "TZ-DAR-004", name: "Selous Game Reserve (Nyerere NP)", category: "Wildlife", rating: 4.8, description: "Africa's largest game reserve — boat safaris on the Rufiji River among hippo and croc.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-DAR-005", name: "Ruaha National Park", category: "Wildlife", rating: 4.8, description: "Tanzania's largest national park — wild and remote, with Africa's highest lion density.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-DAR-006", name: "Mahale Mountains Chimpanzee Trek", category: "Wildlife", rating: 4.9, description: "Remote forest on Lake Tanganyika — trek to habituated chimps in pristine jungle.", tags: ["wildlife", "adventure", "unique"] },
          { id: "TZ-DAR-007", name: "Mikumi National Park", category: "Wildlife", rating: 4.6, description: "Tanzania's most accessible park from Dar — lion, elephant and hippo pools.", tags: ["safari", "wildlife", "nature"] },
          { id: "TZ-DAR-008", name: "Lake Tanganyika", category: "Nature", rating: 4.7, description: "World's second deepest lake — crystal clear, 350 unique cichlid species and beach camps.", tags: ["nature", "diving", "unique"] },
          { id: "TZ-DAR-009", name: "Kilwa Kisiwani Ruins", category: "History", rating: 4.6, description: "UNESCO ruins of a 9th-century Swahili trading empire on a remote Indian Ocean island.", tags: ["history", "UNESCO", "ruins"] },
          { id: "TZ-DAR-010", name: "Mafia Island Marine Park", category: "Nature", rating: 4.8, description: "East Africa's finest whale shark diving — seasonally snorkel with whale sharks from October to March.", tags: ["diving", "marine", "wildlife"] },
        ]
      },
    ]
  },

  // ─── ZIMBABWE ─────────────────────────────────────────────────────────────
  {
    id: "ZW",
    name: "Zimbabwe",
    flag: "🇿🇼",
    continent: "Africa",
    coverImage: "https://images.unsplash.com/photo-1534126874-5f6762c7c1b3?w=800",
    description: "Victoria Falls, Great Zimbabwe ruins, Hwange elephants and some of Africa's most resilient and warm-hearted people.",
    states: [
      {
        id: "ZW-VIC",
        name: "Victoria Falls",
        places: [
          { id: "ZW-VIC-001", name: "Victoria Falls", category: "Nature", rating: 5.0, description: "The world's largest waterfall — 1.7 km wide, 108m drop, visible from 50 km away. UNESCO World Heritage.", tags: ["nature", "UNESCO", "iconic"] },
          { id: "ZW-VIC-002", name: "Devil's Pool", category: "Adventure", rating: 4.8, description: "Natural infinity pool on the edge of Victoria Falls — swim to the very brink of the falls.", tags: ["adventure", "unique", "extreme"] },
          { id: "ZW-VIC-003", name: "Bungee Jumping Victoria Falls Bridge", category: "Adventure", rating: 4.9, description: "111m bungee jump from the bridge between Zimbabwe and Zambia above the gorge.", tags: ["adventure", "extreme", "unique"] },
          { id: "ZW-VIC-004", name: "Zambezi River Sunset Cruise", category: "Leisure", rating: 4.7, description: "Boat cruise on the Zambezi above the falls — hippo, elephant and African sunset.", tags: ["leisure", "wildlife", "scenic"] },
          { id: "ZW-VIC-005", name: "Hwange National Park", category: "Wildlife", rating: 4.8, description: "Zimbabwe's largest park — Africa's biggest elephant herds and exceptional predator viewing.", tags: ["safari", "wildlife", "nature"] },
          { id: "ZW-VIC-006", name: "Livingstone Island Picnic", category: "Culture", rating: 4.7, description: "Picnic on the island where Livingstone first saw the falls — exclusive access, stunning views.", tags: ["history", "unique", "scenic"] },
          { id: "ZW-VIC-007", name: "Mosi-oa-Tunya Rainforest Walk", category: "Nature", rating: 4.6, description: "Walk through permanent rainforest created by the spray of the falls — rainbow by midday.", tags: ["nature", "hiking", "photography"] },
          { id: "ZW-VIC-008", name: "White Water Rafting, Batoka Gorge", category: "Adventure", rating: 4.8, description: "World's most extreme rafting — Grade 5 rapids below Victoria Falls in the Batoka Gorge.", tags: ["adventure", "watersports", "extreme"] },
          { id: "ZW-VIC-009", name: "Crocodile Farm Victoria Falls", category: "Wildlife", rating: 4.2, description: "Over 500 Nile crocodiles at Africa's largest croc breeding farm.", tags: ["wildlife", "unique", "family"] },
          { id: "ZW-VIC-010", name: "Elephant Back Safari", category: "Wildlife", rating: 4.5, description: "Ride rescued African elephants through the bush and interact with the herd.", tags: ["wildlife", "unique", "adventure"] },
        ]
      },
      {
        id: "ZW-HAR",
        name: "Harare & Masvingo",
        places: [
          { id: "ZW-HAR-001", name: "Great Zimbabwe Ruins", category: "History", rating: 4.8, description: "UNESCO 11th-century stone city — sub-Saharan Africa's greatest ancient monument.", tags: ["history", "UNESCO", "heritage"] },
          { id: "ZW-HAR-002", name: "National Gallery of Zimbabwe", category: "Art", rating: 4.5, description: "Premier Zimbabwean art collection — world-famous Shona stone sculpture tradition.", tags: ["art", "culture", "museum"] },
          { id: "ZW-HAR-003", name: "Motobo (Matobo) Hills", category: "History", rating: 4.7, description: "UNESCO balancing rocks, San rock art and Cecil Rhodes' grave — spiritual Ndebele heartland.", tags: ["history", "UNESCO", "nature"] },
          { id: "ZW-HAR-004", name: "Nyanga National Park", category: "Nature", rating: 4.5, description: "Zimbabwe's eastern highlands — Nyangani peak (2,592m), waterfalls and trout fishing.", tags: ["nature", "hiking", "scenic"] },
          { id: "ZW-HAR-005", name: "Epworth Balancing Rocks", category: "Nature", rating: 4.3, description: "Giant precariously balanced granite boulders — inspiration for Zimbabwe's banknote design.", tags: ["nature", "unique", "photography"] },
        ]
      },
    ]
  },

];
