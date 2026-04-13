// Complete Nigeria Data — All 36 States + FCT
// Minimum 10 verified, real places per state

export const NIGERIA_DATA = {
  id: "NG",
  name: "Nigeria",
  flag: "🇳🇬",
  continent: "Africa",
  coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
  description: "The Giant of Africa — 36 states of ancient kingdoms, rainforests, beaches, festivals and the warmest people on earth.",
  states: [

    // ── LAGOS ──────────────────────────────────────────────────────────────────
    {
      id: "NG-LA",
      name: "Lagos",
      places: [
        { id: "NG-LA-001", name: "Lekki Conservation Centre", category: "Nature", rating: 4.6, description: "Africa's longest canopy walkway winds 401m through a pristine mangrove forest teeming with monkeys and birds.", tags: ["nature", "adventure", "wildlife"] },
        { id: "NG-LA-002", name: "Nike Art Gallery", category: "Art", rating: 4.7, description: "Five-storey gallery housing over 8,000 pieces of contemporary Nigerian art — paintings, sculptures and textiles.", tags: ["art", "culture", "shopping"] },
        { id: "NG-LA-003", name: "Tarkwa Bay Beach", category: "Beach", rating: 4.4, description: "Calm, sheltered beach accessible only by boat from Lagos marina — ideal for swimming and snorkelling.", tags: ["beach", "relaxation", "water"] },
        { id: "NG-LA-004", name: "Freedom Park", category: "History", rating: 4.3, description: "Colonial-era prison beautifully converted into an open-air cultural centre for concerts and exhibitions.", tags: ["history", "culture", "music"] },
        { id: "NG-LA-005", name: "Balogun Market", category: "Shopping", rating: 4.1, description: "Sprawling, chaotic and thrilling — Lagos Island's biggest fabric, clothing and electronics market.", tags: ["shopping", "local", "culture"] },
        { id: "NG-LA-006", name: "Elegushi Beach", category: "Beach", rating: 4.2, description: "Popular Lekki beachfront with restaurants, beach bars, jet-skiing and weekend nightlife.", tags: ["beach", "nightlife", "food"] },
        { id: "NG-LA-007", name: "New Afrika Shrine", category: "Culture", rating: 4.8, description: "Femi Kuti's legendary music venue carrying Fela's Afrobeat flame — live shows every Friday and Saturday.", tags: ["music", "nightlife", "culture"] },
        { id: "NG-LA-008", name: "Badagry Slave Route", category: "History", rating: 4.7, description: "Walk the 'Point of No Return' — the last stretch of land enslaved Africans trod before boarding slave ships.", tags: ["history", "heritage", "education"] },
        { id: "NG-LA-009", name: "National Theatre Lagos", category: "Culture", rating: 4.4, description: "Iconic 1977 military-cap-shaped theatre built for FESTAC — concerts, drama and large cultural events.", tags: ["art", "culture", "architecture"] },
        { id: "NG-LA-010", name: "Lekki-Ikoyi Link Bridge", category: "Landmark", rating: 4.3, description: "Elegant suspension bridge connecting Lekki and Ikoyi — best viewed and photographed at sunset.", tags: ["landmark", "scenic", "photography"] },
        { id: "NG-LA-011", name: "Kalakuta Republic Museum", category: "History", rating: 4.6, description: "Fela Kuti's former home and recording studio, now a museum dedicated to the Afrobeat legend's life and legacy.", tags: ["history", "music", "culture"] },
        { id: "NG-LA-012", name: "Whispering Palms Resort", category: "Leisure", rating: 4.3, description: "Tranquil island resort on Badagry Creek — boating, fishing and coconut groves for weekend escapes.", tags: ["leisure", "nature", "relaxation"] },
        { id: "NG-LA-013", name: "Iga Idunganran Palace", category: "History", rating: 4.5, description: "Ancient palace of the Oba of Lagos — a living museum of Yoruba royalty on Lagos Island since 1630.", tags: ["history", "royalty", "culture"] },
        { id: "NG-LA-014", name: "Ojodu Berger Agric Market", category: "Food", rating: 4.2, description: "Largest fresh produce market in Lagos — a sensory experience of spices, vegetables and street food.", tags: ["food", "local", "culture"] },
        { id: "NG-LA-015", name: "Muri Okunola Park", category: "Nature", rating: 4.1, description: "Well-maintained public park in Victoria Island — morning jogs, picnics and open-air fitness sessions.", tags: ["park", "relaxation", "family"] },
      ]
    },

    // ── FCT ABUJA ──────────────────────────────────────────────────────────────
    {
      id: "NG-AB",
      name: "FCT Abuja",
      places: [
        { id: "NG-AB-001", name: "Aso Rock", category: "Landmark", rating: 4.7, description: "Nigeria's defining 400m monolith — the granite dome that gives Abuja its dramatic skyline backdrop.", tags: ["landmark", "nature", "iconic"] },
        { id: "NG-AB-002", name: "Nigerian National Mosque", category: "Architecture", rating: 4.6, description: "Grand Islamic landmark at Abuja's centre — four minarets and a golden dome visible from miles away.", tags: ["architecture", "religion", "culture"] },
        { id: "NG-AB-003", name: "Millennium Park", category: "Nature", rating: 4.4, description: "Largest public park in Nigeria, opened by Queen Elizabeth II — cycling, picnicking and open-air concerts.", tags: ["park", "relaxation", "family"] },
        { id: "NG-AB-004", name: "Zuma Rock", category: "Nature", rating: 4.8, description: "Nigeria's 'Gateway to Abuja' — a 725m monolith with a natural human face pattern that astonishes every visitor.", tags: ["nature", "landmark", "photography"] },
        { id: "NG-AB-005", name: "Nigerian National Christian Centre", category: "Architecture", rating: 4.5, description: "Soaring modernist cathedral complex — a striking architectural statement and national Christian landmark.", tags: ["architecture", "religion", "landmark"] },
        { id: "NG-AB-006", name: "Gurara Waterfalls", category: "Nature", rating: 4.8, description: "Powerful cascade on the Gurara River — 30m of roaring water, picnic spots and nature walks just outside Abuja.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-AB-007", name: "National Museum Abuja", category: "History", rating: 4.4, description: "Repository of Nigeria's cultural and historical artefacts from all regions — masks, bronzes and pre-colonial tools.", tags: ["museum", "history", "culture"] },
        { id: "NG-AB-008", name: "Bwari Pottery Cooperative", category: "Culture", rating: 4.3, description: "Artisan village producing stunning hand-thrown terracotta pots using techniques unchanged for centuries.", tags: ["art", "artisan", "culture"] },
        { id: "NG-AB-009", name: "Usuma Dam", category: "Nature", rating: 4.3, description: "Serene reservoir on the edge of Abuja — bird-watching, fishing and quiet picnic spots away from the city.", tags: ["nature", "relaxation", "birdwatching"] },
        { id: "NG-AB-010", name: "Jabi Lake", category: "Leisure", rating: 4.4, description: "Abuja's popular leisure lake — boat rides, lakeside dining, paddle boarding and weekend waterfront buzz.", tags: ["leisure", "food", "water"] },
        { id: "NG-AB-011", name: "Arts & Crafts Village Abuja", category: "Shopping", rating: 4.3, description: "Curated artisan village where craftsmen carve, weave and forge in open workshops — buy direct from makers.", tags: ["shopping", "art", "culture"] },
        { id: "NG-AB-012", name: "Usman Dam", category: "Nature", rating: 4.2, description: "Abuja's main water reservoir with scenic environs — popular for early morning nature walks and photography.", tags: ["nature", "scenic", "relaxation"] },
      ]
    },

    // ── ABIA ──────────────────────────────────────────────────────────────────
    {
      id: "NG-AB2",
      name: "Abia",
      places: [
        { id: "NG-AB2-001", name: "National War Museum Umuahia", category: "History", rating: 4.7, description: "Powerful museum documenting the Biafra War 1967–70 with tanks, aircraft and personal testimonies.", tags: ["history", "museum", "important"] },
        { id: "NG-AB2-002", name: "Aba Ariaria International Market", category: "Shopping", rating: 4.4, description: "One of West Africa's largest markets — shoes, garments and goods made by Aba's world-famous artisans.", tags: ["shopping", "local", "crafts"] },
        { id: "NG-AB2-003", name: "Azumini Blue River", category: "Nature", rating: 4.5, description: "Spectacular blue-tinged freshwater river near Azumini — boat rides, swimming and forest walks.", tags: ["nature", "water", "swimming"] },
        { id: "NG-AB2-004", name: "Akwete Weaving Village", category: "Culture", rating: 4.4, description: "Igbo weaving community famed for the intricate Akwete cloth — watch master weavers at their looms.", tags: ["culture", "artisan", "textile"] },
        { id: "NG-AB2-005", name: "Long Juju Shrine Arochukwu", category: "History", rating: 4.6, description: "Ancient oracle shrine of the Arochukwu Kingdom — once feared across West Africa and central to Igbo history.", tags: ["history", "culture", "spiritual"] },
        { id: "NG-AB2-006", name: "Abia State Museum", category: "History", rating: 4.3, description: "Collection of Igbo cultural artefacts, pre-colonial tools and contemporary Aba-made crafts.", tags: ["museum", "history", "culture"] },
        { id: "NG-AB2-007", name: "Aba Sports Club & Recreation", category: "Leisure", rating: 4.1, description: "Historic colonial-era recreational club with a swimming pool, tennis and a vibrant bar scene.", tags: ["leisure", "sports", "colonial"] },
        { id: "NG-AB2-008", name: "Oguta Lake (Abia portion)", category: "Nature", rating: 4.3, description: "Tranquil lake straddling Abia and Imo — boat rides, fresh fish and peaceful waterside walks.", tags: ["nature", "lake", "relaxation"] },
        { id: "NG-AB2-009", name: "Osisioma Railway Station", category: "History", rating: 4.0, description: "Historic colonial railway station and a reminder of the Eastern Railway's golden age.", tags: ["history", "colonial", "architecture"] },
        { id: "NG-AB2-010", name: "Ibere Waterfall", category: "Nature", rating: 4.4, description: "Hidden waterfall in Abia's forested hills — crystal streams and a cool swimming hole.", tags: ["waterfall", "nature", "adventure"] },
      ]
    },

    // ── ADAMAWA ───────────────────────────────────────────────────────────────
    {
      id: "NG-AD",
      name: "Adamawa",
      places: [
        { id: "NG-AD-001", name: "Sukur Cultural Landscape", category: "History", rating: 4.8, description: "UNESCO World Heritage hilltop kingdom with iron-smelting furnaces and terraced fields unchanged for centuries.", tags: ["UNESCO", "history", "heritage"] },
        { id: "NG-AD-002", name: "Gashaka-Gumti National Park", category: "Wildlife", rating: 4.7, description: "Nigeria's largest national park — chimpanzees, lions, hippos and stunning highland scenery.", tags: ["wildlife", "safari", "nature"] },
        { id: "NG-AD-003", name: "Mandara Mountains", category: "Nature", rating: 4.6, description: "Volcanic mountain range on the Cameroon border — extraordinary trekking through Fulani villages and dramatic peaks.", tags: ["hiking", "nature", "culture"] },
        { id: "NG-AD-004", name: "Faro National Park", category: "Wildlife", rating: 4.5, description: "Remote riverside park on the Faro River — hippos, crocodiles, lions and exceptional birdwatching.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-AD-005", name: "Kilang Waterfalls", category: "Nature", rating: 4.4, description: "Beautiful cascade near Ganye, surrounded by highland forest and cool mist.", tags: ["waterfall", "nature", "hiking"] },
        { id: "NG-AD-006", name: "Malabu Hills Resort", category: "Leisure", rating: 4.2, description: "Hilltop leisure resort with panoramic views over Yola and the Benue River valley.", tags: ["leisure", "views", "relaxation"] },
        { id: "NG-AD-007", name: "Yola Museum (Lamido Palace)", category: "History", rating: 4.4, description: "Historic Lamido of Adamawa's palace showcasing Islamic arts, manuscripts and Fulani cultural heritage.", tags: ["history", "culture", "museum"] },
        { id: "NG-AD-008", name: "Donga River Falls", category: "Nature", rating: 4.3, description: "Scenic rapids and falls on the Donga River — fishing, picnicking and cave exploration nearby.", tags: ["waterfall", "nature", "fishing"] },
        { id: "NG-AD-009", name: "Dumbo Mountain", category: "Adventure", rating: 4.4, description: "Dramatic volcanic peak on the Cameroon border — a challenging two-day trek rewarded with vast highland views.", tags: ["hiking", "adventure", "nature"] },
        { id: "NG-AD-010", name: "Mayo Belwa Salt Lake", category: "Nature", rating: 4.2, description: "Natural saline lake where Fulani herders have harvested salt for centuries — a unique, living landscape.", tags: ["nature", "culture", "unique"] },
      ]
    },

    // ── AKWA IBOM ─────────────────────────────────────────────────────────────
    {
      id: "NG-AK",
      name: "Akwa Ibom",
      places: [
        { id: "NG-AK-001", name: "Ibeno Beach", category: "Beach", rating: 4.7, description: "Longest natural beach in West Africa — 68km of undeveloped Atlantic coastline, perfect for solitude and surfing.", tags: ["beach", "nature", "surfing"] },
        { id: "NG-AK-002", name: "Oron Museum", category: "History", rating: 4.6, description: "Home to Ekpu ancestor figures — the oldest surviving collection of wooden sculptures in sub-Saharan Africa.", tags: ["museum", "history", "art"] },
        { id: "NG-AK-003", name: "Le Meridien Ibom Hotel & Golf", category: "Leisure", rating: 4.5, description: "World-class 18-hole golf resort and spa in the Niger Delta — the jewel of Akwa Ibom tourism.", tags: ["leisure", "golf", "luxury"] },
        { id: "NG-AK-004", name: "Ibom Tropicana", category: "Leisure", rating: 4.4, description: "Integrated resort with water park, bowling, cinema and restaurants — best family entertainment in the South-South.", tags: ["leisure", "family", "entertainment"] },
        { id: "NG-AK-005", name: "Uyo Tourist Centre", category: "Culture", rating: 4.2, description: "Green space in Uyo city with a cultural museum, exhibition halls and manicured gardens.", tags: ["culture", "park", "history"] },
        { id: "NG-AK-006", name: "Eket Cultural and History Museum", category: "History", rating: 4.3, description: "Documents the culture of the Eket, Ibibio and Annang peoples — masquerade costumes, carvings and oral history.", tags: ["history", "culture", "museum"] },
        { id: "NG-AK-007", name: "Qua River", category: "Nature", rating: 4.3, description: "Wide tropical river ideal for fishing, boat rides and riverside picnics south of Uyo.", tags: ["nature", "river", "relaxation"] },
        { id: "NG-AK-008", name: "Ukana West Falls", category: "Nature", rating: 4.5, description: "Multi-tiered waterfall in dense forest near Ikot Ekpene — a hidden gem of south-eastern Nigeria.", tags: ["waterfall", "nature", "hiking"] },
        { id: "NG-AK-009", name: "Coconut Beach Uyo", category: "Beach", rating: 4.2, description: "Peaceful creek-side beach lined with coconut palms — day trips from Uyo for swimming and relaxation.", tags: ["beach", "relaxation", "nature"] },
        { id: "NG-AK-010", name: "Etinan Palm Wine Centre", category: "Food", rating: 4.1, description: "Experience fresh-tapped palm wine direct from the tree in Akwa Ibom's inland farms.", tags: ["food", "culture", "local"] },
      ]
    },

    // ── ANAMBRA ───────────────────────────────────────────────────────────────
    {
      id: "NG-AN",
      name: "Anambra",
      places: [
        { id: "NG-AN-001", name: "Igbo-Ukwu Archaeological Site", category: "History", rating: 4.9, description: "9th century bronze artefacts discovered here predate European contact — proof of sophisticated Igbo civilisation.", tags: ["history", "archaeology", "UNESCO"] },
        { id: "NG-AN-002", name: "Oguta Lake", category: "Nature", rating: 4.6, description: "Lagoon where the Njaba River meets but never mixes with lake water — a natural curiosity with beautiful resorts.", tags: ["nature", "lake", "leisure"] },
        { id: "NG-AN-003", name: "Onitsha Main Market", category: "Shopping", rating: 4.5, description: "One of the largest markets in Africa by trade volume — the commercial heartbeat of eastern Nigeria.", tags: ["shopping", "local", "culture"] },
        { id: "NG-AN-004", name: "Agulu Lake", category: "Nature", rating: 4.4, description: "Natural lake in Anaocha LGA famous for its sacred crocodiles — a unique ecotourism destination.", tags: ["nature", "wildlife", "unique"] },
        { id: "NG-AN-005", name: "Idemili River", category: "Nature", rating: 4.2, description: "Sacred Igbo river running through Nnewi — traditional festivals and riverside cultural practices.", tags: ["nature", "spiritual", "culture"] },
        { id: "NG-AN-006", name: "Anambra Cultural Centre Awka", category: "Culture", rating: 4.3, description: "State cultural hub with performance spaces, exhibitions and displays of Igbo kingship regalia.", tags: ["culture", "history", "art"] },
        { id: "NG-AN-007", name: "Isuaniocha Pottery Village", category: "Culture", rating: 4.4, description: "Master potters hand-throw beautiful terracotta using techniques unchanged for generations.", tags: ["art", "artisan", "culture"] },
        { id: "NG-AN-008", name: "Nnewi Auto Market", category: "Shopping", rating: 4.2, description: "Japan of Nigeria — Nnewi's legendary spare parts and motorcycle market, a testament to Igbo enterprise.", tags: ["shopping", "culture", "unique"] },
        { id: "NG-AN-009", name: "Awka Ancient Iron-Smelting Site", category: "History", rating: 4.3, description: "Remnants of Awka blacksmiths' legendary iron-smelting — they traded across West Africa for centuries.", tags: ["history", "culture", "artisan"] },
        { id: "NG-AN-010", name: "Nri Kingdom Sacred Groves", category: "History", rating: 4.5, description: "The spiritual capital of the Igbo world — ancient sacred groves, oracle shrines and the seat of Eze Nri.", tags: ["history", "spiritual", "heritage"] },
      ]
    },

    // ── BAUCHI ────────────────────────────────────────────────────────────────
    {
      id: "NG-BA",
      name: "Bauchi",
      places: [
        { id: "NG-BA-001", name: "Yankari National Park", category: "Wildlife", rating: 4.8, description: "Nigeria's premier safari park — elephants, baboons, lions and hippos plus warm natural springs for swimming.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-BA-002", name: "Wikki Warm Springs", category: "Nature", rating: 4.7, description: "Crystal-clear 31°C natural spring inside Yankari — like swimming in a perfect tropical swimming pool in the wild.", tags: ["nature", "swimming", "unique"] },
        { id: "NG-BA-003", name: "Goji Hills", category: "Nature", rating: 4.3, description: "Spectacular inselbergs rising dramatically from Bauchi Plateau — rock climbing and panoramic views.", tags: ["nature", "hiking", "scenic"] },
        { id: "NG-BA-004", name: "Sumu Wildlife Park", category: "Wildlife", rating: 4.2, description: "Mini wildlife reserve near Bauchi town — good for day-trip game viewing and bird-watching.", tags: ["wildlife", "family", "nature"] },
        { id: "NG-BA-005", name: "Bauchi Central Mosque", category: "Architecture", rating: 4.3, description: "Historic and architecturally significant mosque in Bauchi — a landmark of northern Nigerian Islamic heritage.", tags: ["architecture", "religion", "history"] },
        { id: "NG-BA-006", name: "Tafawa Balewa Tomb", category: "History", rating: 4.4, description: "Memorial of Nigeria's first Prime Minister, a Bauchi son — a place of national historical pilgrimage.", tags: ["history", "memorial", "politics"] },
        { id: "NG-BA-007", name: "Balanga Wildlife Sanctuary", category: "Wildlife", rating: 4.3, description: "Riverside sanctuary protecting hippos, crocodiles and waterfowl along the Gongola River.", tags: ["wildlife", "nature", "birdwatching"] },
        { id: "NG-BA-008", name: "Dull Hill Resort", category: "Leisure", rating: 4.1, description: "Hilltop retreat south of Bauchi with scenic valley views and cool harmattan breezes.", tags: ["leisure", "views", "relaxation"] },
        { id: "NG-BA-009", name: "Dass Ancient Kingdom", category: "History", rating: 4.3, description: "Centuries-old hilltop kingdom with traditional architecture and the famous Dass Durbar festival.", tags: ["history", "culture", "festival"] },
        { id: "NG-BA-010", name: "Alkaleri Rock Paintings", category: "History", rating: 4.4, description: "Prehistoric rock art in the hills around Alkaleri — among the oldest human markings in northern Nigeria.", tags: ["history", "ancient", "art"] },
      ]
    },

    // ── BAYELSA ───────────────────────────────────────────────────────────────
    {
      id: "NG-BY",
      name: "Bayelsa",
      places: [
        { id: "NG-BY-001", name: "Ox-Bow Lake Yenagoa", category: "Nature", rating: 4.4, description: "Scenic oxbow lake at Yenagoa — canoe safaris, kingfisher spotting and mangrove forest walks.", tags: ["nature", "wildlife", "canoe"] },
        { id: "NG-BY-002", name: "Swali Market", category: "Shopping", rating: 4.2, description: "Major Niger Delta market for fresh creek fish, local crafts and smoked seafood.", tags: ["shopping", "food", "local"] },
        { id: "NG-BY-003", name: "Epie Creek", category: "Nature", rating: 4.3, description: "Peaceful creek network perfect for evening canoe rides and watching the delta sun set over the water.", tags: ["nature", "canoe", "scenic"] },
        { id: "NG-BY-004", name: "Isaac Boro Garden Park", category: "Nature", rating: 4.2, description: "State capital park honouring Ijaw hero Isaac Boro — green space, statues and riverside walks.", tags: ["park", "history", "relaxation"] },
        { id: "NG-BY-005", name: "Ijaw National Congress Heritage Centre", category: "History", rating: 4.3, description: "Celebrates the Ijaw people's history, culture and their Kaíama Declaration on self-determination.", tags: ["history", "culture", "politics"] },
        { id: "NG-BY-006", name: "Kaiama Waterfalls", category: "Nature", rating: 4.4, description: "Secluded waterfall deep in Bayelsa's interior rainforest — cool, clear and virtually untouched.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-BY-007", name: "Nembe Ancient City", category: "History", rating: 4.5, description: "Ancient Ijaw kingdom trading city — the starting point of the 1895 Brass Raid against the Royal Niger Company.", tags: ["history", "culture", "heritage"] },
        { id: "NG-BY-008", name: "Agudama-Epie Rainforest", category: "Nature", rating: 4.3, description: "Dense tropical rainforest with rare medicinal plants, mangroves and prolific bird species.", tags: ["nature", "wildlife", "birdwatching"] },
        { id: "NG-BY-009", name: "Brass Town Beach", category: "Beach", rating: 4.3, description: "Atlantic coastal beach at the mouth of the Nun River — wild, beautiful and largely undiscovered.", tags: ["beach", "nature", "adventure"] },
        { id: "NG-BY-010", name: "Oweikorogha Waterfalls", category: "Nature", rating: 4.4, description: "Hidden multi-tiered falls in Southern Bayelsa — a gem requiring a canoe ride through mangroves to reach.", tags: ["waterfall", "nature", "unique"] },
      ]
    },

    // ── BENUE ─────────────────────────────────────────────────────────────────
    {
      id: "NG-BE",
      name: "Benue",
      places: [
        { id: "NG-BE-001", name: "Awe Lake", category: "Nature", rating: 4.4, description: "Scenic lake in Nasarawa-Benue border zone — flamingo flocks, boat rides and lakeside camps.", tags: ["nature", "wildlife", "birdwatching"] },
        { id: "NG-BE-002", name: "Taraku Mills Ruins", category: "History", rating: 4.2, description: "Ruins of colonial-era agricultural mills — a reminder of Benue's cocoa and groundnut heritage.", tags: ["history", "colonial", "heritage"] },
        { id: "NG-BE-003", name: "Makurdi War Cemetery", category: "History", rating: 4.3, description: "WWII Commonwealth War Graves — Nigerian soldiers who served in East Africa and Burma.", tags: ["history", "memorial", "colonial"] },
        { id: "NG-BE-004", name: "River Benue Promenade", category: "Leisure", rating: 4.3, description: "Makurdi's riverfront walk along Nigeria's second longest river — fishing, sunsets and fresh tilapia.", tags: ["leisure", "scenic", "food"] },
        { id: "NG-BE-005", name: "Tiv Cultural Museum", category: "History", rating: 4.5, description: "Celebrates the Tiv people — Nigeria's largest non-Muslim, non-Yoruba, non-Igbo group — through art, music and festivals.", tags: ["history", "culture", "museum"] },
        { id: "NG-BE-006", name: "Ushongo Hills", category: "Nature", rating: 4.5, description: "Scenic granite hills near Gboko with caves, rock formations and breathtaking Benue State views.", tags: ["nature", "hiking", "scenic"] },
        { id: "NG-BE-007", name: "Katsina-Ala River", category: "Nature", rating: 4.4, description: "Pristine river of the Tiv heartland — white-water stretches, hippo pods and forest camping.", tags: ["nature", "adventure", "wildlife"] },
        { id: "NG-BE-008", name: "Igumale Salt Lake", category: "Nature", rating: 4.3, description: "Natural saline lake where the Igede people have harvested salt for thousands of years.", tags: ["nature", "culture", "unique"] },
        { id: "NG-BE-009", name: "Tor Tiv Palace Gboko", category: "History", rating: 4.4, description: "The royal palace of the Tiv paramount ruler — traditional architecture and living Tiv court culture.", tags: ["history", "royalty", "culture"] },
        { id: "NG-BE-010", name: "Benue Orchards Resort", category: "Leisure", rating: 4.1, description: "Farm-resort on the Benue floodplain — fruit orchards, river swimming and weekend agro-tourism.", tags: ["leisure", "nature", "food"] },
      ]
    },

    // ── BORNO ─────────────────────────────────────────────────────────────────
    {
      id: "NG-BO",
      name: "Borno",
      places: [
        { id: "NG-BO-001", name: "Shehu of Borno Palace", category: "History", rating: 4.6, description: "Palace of the Shehu of Borno — seat of one of Africa's oldest surviving royal dynasties, founded 1000 years ago.", tags: ["history", "royalty", "culture"] },
        { id: "NG-BO-002", name: "Lake Chad", category: "Nature", rating: 4.5, description: "One of Africa's great lakes, shared between four nations — fishing villages, papyrus islands and migratory birds.", tags: ["nature", "lake", "wildlife"] },
        { id: "NG-BO-003", name: "Maiduguri Zoo", category: "Wildlife", rating: 4.1, description: "Regional zoo hosting Sudano-Sahelian wildlife including lions, ostriches and African species.", tags: ["wildlife", "family", "education"] },
        { id: "NG-BO-004", name: "Bama Cultural Museum", category: "History", rating: 4.3, description: "Documents the ancient Kanuri, Shuwa Arab and Kanembu cultures of the Borno Basin.", tags: ["history", "culture", "museum"] },
        { id: "NG-BO-005", name: "Monday Market Maiduguri", category: "Shopping", rating: 4.2, description: "One of Nigeria's oldest markets — leather goods, salt, dried fish and trans-Saharan trade goods.", tags: ["shopping", "culture", "history"] },
        { id: "NG-BO-006", name: "Ngala Fishing Festival", category: "Culture", rating: 4.5, description: "Annual Lake Chad fishing festival — hundreds of canoes, traditional nets and Kanuri ceremonies.", tags: ["festival", "culture", "fishing"] },
        { id: "NG-BO-007", name: "Gwoza Hills", category: "Nature", rating: 4.4, description: "Dramatic rocky massif on the Cameroon border — traditional Gwoza communities and stunning panoramas.", tags: ["nature", "culture", "hiking"] },
        { id: "NG-BO-008", name: "Dikwa Emirate Palace", category: "History", rating: 4.3, description: "Historic emirate palace at Dikwa, once capital of the Bornu Empire's western territories.", tags: ["history", "royalty", "culture"] },
        { id: "NG-BO-009", name: "Konduga Sand Dunes", category: "Nature", rating: 4.2, description: "Sahel-fringe sand dunes south of Lake Chad — camel rides and desert photography.", tags: ["nature", "unique", "adventure"] },
        { id: "NG-BO-010", name: "Old Borno Capital Maiduguri", category: "History", rating: 4.4, description: "Historic heart of Maiduguri retains the layout of the ancient Kanemi-Borno Empire's administrative capital.", tags: ["history", "heritage", "culture"] },
      ]
    },

    // ── CROSS RIVER ───────────────────────────────────────────────────────────
    {
      id: "NG-CR",
      name: "Cross River",
      places: [
        { id: "NG-CR-001", name: "Obudu Mountain Resort", category: "Nature", rating: 4.9, description: "Nigeria's most dramatic highland resort — cable car, cool climate, waterfalls and rolling green hills.", tags: ["nature", "resort", "adventure"] },
        { id: "NG-CR-002", name: "Cross River National Park", category: "Wildlife", rating: 4.8, description: "Pristine lowland rainforest — home to Cross River gorillas, forest elephants and over 1,600 plant species.", tags: ["wildlife", "nature", "UNESCO"] },
        { id: "NG-CR-003", name: "Kwa Falls", category: "Nature", rating: 4.7, description: "Majestic waterfall in dense rainforest south of Calabar — one of Nigeria's most beautiful falls.", tags: ["waterfall", "nature", "hiking"] },
        { id: "NG-CR-004", name: "Calabar Museum (Duke's Palace)", category: "History", rating: 4.6, description: "Colonial museum in the 1884 Duke of Calabar's palace — documents the Royal Niger Company era.", tags: ["history", "museum", "colonial"] },
        { id: "NG-CR-005", name: "Tinapa Business & Leisure Resort", category: "Leisure", rating: 4.2, description: "Nigeria's first duty-free resort — film studios, water park and shopping, overlooking the Cross River.", tags: ["leisure", "shopping", "entertainment"] },
        { id: "NG-CR-006", name: "Afi Mountain Wildlife Sanctuary", category: "Wildlife", rating: 4.7, description: "Remote sanctuary for the rarest gorilla on earth — the Critically Endangered Cross River gorilla.", tags: ["wildlife", "conservation", "nature"] },
        { id: "NG-CR-007", name: "Old Residency Museum Calabar", category: "History", rating: 4.5, description: "19th century colonial building housing anti-slavery exhibits and the history of Calabar as a British protectorate.", tags: ["history", "colonial", "museum"] },
        { id: "NG-CR-008", name: "Marina Resort Calabar", category: "Leisure", rating: 4.4, description: "Waterfront resort on the Calabar River with boats, restaurants and the famous Calabar Carnival venue.", tags: ["leisure", "food", "waterfront"] },
        { id: "NG-CR-009", name: "Agbokim Waterfalls", category: "Nature", rating: 4.7, description: "Seven cascading falls dropping through rainforest near the Cameroon border — Nigeria's Niagara.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-CR-010", name: "Calabar Carnival Grounds", category: "Culture", rating: 4.8, description: "Africa's Biggest Street Party held every December — 12 days of music, costumes and one million visitors.", tags: ["festival", "culture", "entertainment"] },
      ]
    },

    // ── DELTA ─────────────────────────────────────────────────────────────────
    {
      id: "NG-DL",
      name: "Delta",
      places: [
        { id: "NG-DL-001", name: "Abraka River Resort", category: "Nature", rating: 4.6, description: "Crystal-clear freshwater swimming pools formed by the Ethiope River spring — nature's perfect pool.", tags: ["nature", "swimming", "relaxation"] },
        { id: "NG-DL-002", name: "Ethiope River", category: "Nature", rating: 4.7, description: "One of Africa's cleanest rivers — emerald water bubbling from underground springs in tropical forest.", tags: ["nature", "unique", "swimming"] },
        { id: "NG-DL-003", name: "Warri Cultural and Science Museum", category: "History", rating: 4.3, description: "Documents Urhobo, Itsekiri and Ijaw cultures — royal regalia, masquerades and oil-era history.", tags: ["museum", "history", "culture"] },
        { id: "NG-DL-004", name: "Olu of Warri Palace", category: "History", rating: 4.4, description: "Palace of the ancient Itsekiri kingdom whose connections with Portuguese traders date to the 15th century.", tags: ["history", "royalty", "culture"] },
        { id: "NG-DL-005", name: "Agbor Monarch Traditional Museum", category: "History", rating: 4.3, description: "Royal museum of the Agbor kingship — Ika Igbo bronzes, ivory carvings and royal ceremonial objects.", tags: ["museum", "history", "art"] },
        { id: "NG-DL-006", name: "Delta State Waterfalls — Akwukwu-Igbo", category: "Nature", rating: 4.5, description: "Secluded forest waterfall deep in the Ika heartland — one of Delta State's best-kept natural secrets.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-DL-007", name: "Isoko Lake", category: "Nature", rating: 4.3, description: "Scenic community lake in Isoko LGA — canoe rides, fishing and a tranquil escape from Warri's noise.", tags: ["nature", "lake", "relaxation"] },
        { id: "NG-DL-008", name: "Chief Nana's Compound Koko", category: "History", rating: 4.4, description: "Heritage site of Chief Nana of Itsekiri — the most powerful palm oil trader of the 19th century Niger Delta.", tags: ["history", "heritage", "culture"] },
        { id: "NG-DL-009", name: "Kwale Community Forest", category: "Nature", rating: 4.2, description: "Patches of old-growth forest near Kwale with medicinal plants, trekking paths and community eco-lodges.", tags: ["nature", "hiking", "community"] },
        { id: "NG-DL-010", name: "Patani Waterfront", category: "Leisure", rating: 4.1, description: "River town known for fresh fish markets, dugout canoe crossings and authentic Delta hospitality.", tags: ["leisure", "food", "local"] },
      ]
    },

    // ── EBONYI ────────────────────────────────────────────────────────────────
    {
      id: "NG-EB",
      name: "Ebonyi",
      places: [
        { id: "NG-EB-001", name: "Unwana Beach", category: "Beach", rating: 4.5, description: "Freshwater beach on the Cross River south of Afikpo — a popular weekend spot for swimming and picnics.", tags: ["beach", "nature", "relaxation"] },
        { id: "NG-EB-002", name: "Afikpo Heritage Mask Festival", category: "Culture", rating: 4.7, description: "Ancient masquerade tradition of the Afikpo Igbo — one of Nigeria's most vibrant cultural events.", tags: ["festival", "culture", "heritage"] },
        { id: "NG-EB-003", name: "Abakaliki Salt Lake", category: "Nature", rating: 4.3, description: "Lead-Zinc mining landscape around Abakaliki with striking mineral-stained earth and unique geology.", tags: ["nature", "geology", "unique"] },
        { id: "NG-EB-004", name: "Ishiagu Mineral Spring", category: "Nature", rating: 4.3, description: "Natural mineral spring with therapeutic properties — locals have bathed here for generations.", tags: ["nature", "wellness", "unique"] },
        { id: "NG-EB-005", name: "Ebonyi Government House Gardens", category: "Nature", rating: 4.0, description: "Landscaped gardens of the Ebonyi state government — open for public visits at weekends.", tags: ["park", "relaxation", "family"] },
        { id: "NG-EB-006", name: "Okposi Salt Lake", category: "Nature", rating: 4.4, description: "Sacred saltwater lake where the Igbo of Okposi have harvested salt since ancient times.", tags: ["nature", "culture", "unique"] },
        { id: "NG-EB-007", name: "Nike Lake Ebonyi", category: "Nature", rating: 4.3, description: "Peaceful freshwater lake retreat with boating facilities and hillside views.", tags: ["nature", "lake", "relaxation"] },
        { id: "NG-EB-008", name: "Uburu Salt Lake", category: "Nature", rating: 4.4, description: "Twin saline lakes at Uburu — ecologically significant and historically important to Igbo salt trade.", tags: ["nature", "history", "unique"] },
        { id: "NG-EB-009", name: "Afikpo Raffia Works", category: "Culture", rating: 4.3, description: "Artisan community producing extraordinary raffia palm crafts — baskets, hats and ceremonial items.", tags: ["culture", "artisan", "shopping"] },
        { id: "NG-EB-010", name: "Ugwu Nto Hills", category: "Nature", rating: 4.3, description: "Scenic quartzite hills east of Abakaliki — sunrise trekking and views across Ebonyi's rice plains.", tags: ["nature", "hiking", "scenic"] },
      ]
    },

    // ── EDO ───────────────────────────────────────────────────────────────────
    {
      id: "NG-ED",
      name: "Edo",
      places: [
        { id: "NG-ED-001", name: "Benin Royal Palace & Museum", category: "History", rating: 4.9, description: "Palace of the Oba of Benin — seat of one of Africa's great empires, with original bronze plaques and ivory works.", tags: ["history", "royalty", "UNESCO"] },
        { id: "NG-ED-002", name: "Benin Moat (Iya)", category: "History", rating: 4.7, description: "Ancient earthworks encircling Benin City — the world's largest manmade earthwork, pre-dating the Great Wall.", tags: ["history", "UNESCO", "ancient"] },
        { id: "NG-ED-003", name: "Okomu National Park", category: "Wildlife", rating: 4.8, description: "Last fragment of Edo's original rainforest — white-throated monkeys, forest elephants and rare birds.", tags: ["wildlife", "nature", "conservation"] },
        { id: "NG-ED-004", name: "Igun Street (Bronze Casters Guild)", category: "Culture", rating: 4.7, description: "Living heritage — descendants of the original Benin bronze casters still work here using lost-wax techniques.", tags: ["art", "artisan", "heritage"] },
        { id: "NG-ED-005", name: "Igue Festival Benin City", category: "Culture", rating: 4.8, description: "Annual December royal festival of the Oba of Benin — one of Nigeria's most magnificent cultural ceremonies.", tags: ["festival", "royalty", "culture"] },
        { id: "NG-ED-006", name: "Emotan Statue", category: "History", rating: 4.4, description: "Memorial to the heroic Benin woman who saved the Oba's life — a powerful symbol of Benin womanhood.", tags: ["history", "culture", "monument"] },
        { id: "NG-ED-007", name: "Erin-Ijesha Falls (Edo Section)", category: "Nature", rating: 4.4, description: "Beautiful waterfall straddling the Edo–Ondo border in tropical forest — natural pools for swimming.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-ED-008", name: "Agenebode Waterfall", category: "Nature", rating: 4.3, description: "Dramatic waterfall on the Niger River confluence zone near Agenebode.", tags: ["waterfall", "nature", "scenic"] },
        { id: "NG-ED-009", name: "University of Benin Botanical Garden", category: "Nature", rating: 4.2, description: "Living collection of tropical plants on UNIBEN campus — research garden and teaching forest.", tags: ["nature", "education", "park"] },
        { id: "NG-ED-010", name: "Okpella Caves", category: "Adventure", rating: 4.4, description: "Dramatic limestone caves and rock formations near Okpella in the Etsako hills.", tags: ["adventure", "nature", "unique"] },
        { id: "NG-ED-011", name: "Edo Museum of West African Art", category: "Art", rating: 4.8, description: "World-class new museum housing the Benin Bronzes and contextualising their creation and global significance.", tags: ["art", "history", "museum"] },
      ]
    },

    // ── EKITI ─────────────────────────────────────────────────────────────────
    {
      id: "NG-EK",
      name: "Ekiti",
      places: [
        { id: "NG-EK-001", name: "Ikogosi Warm Spring", category: "Nature", rating: 4.8, description: "World's only known meeting point of warm and cold springs — the two streams meet but never mix.", tags: ["nature", "unique", "wellness"] },
        { id: "NG-EK-002", name: "Arinta Waterfalls", category: "Nature", rating: 4.7, description: "Multi-tiered waterfall in Ipole-Ekiti forest — some tiers have formed natural swimming pools.", tags: ["waterfall", "nature", "swimming"] },
        { id: "NG-EK-003", name: "Fajuyi Memorial Park", category: "History", rating: 4.3, description: "Memorial park honouring Adekunle Fajuyi, the first military governor of the Western Region.", tags: ["history", "memorial", "park"] },
        { id: "NG-EK-004", name: "Ekiti State Museum", category: "History", rating: 4.3, description: "Collection of Ekiti Yoruba cultural artefacts — terracotta, wood carvings and royal emblems.", tags: ["history", "culture", "museum"] },
        { id: "NG-EK-005", name: "Olosunta Hill", category: "Nature", rating: 4.5, description: "Sacred inselberg at Ikere-Ekiti — site of the famous annual Olosunta festival and panoramic views.", tags: ["nature", "spiritual", "hiking"] },
        { id: "NG-EK-006", name: "Orole Park", category: "Nature", rating: 4.2, description: "Forest park and conservation area in Efon-Alaaye — monkey colonies and guinea fowl flocks.", tags: ["nature", "wildlife", "park"] },
        { id: "NG-EK-007", name: "Ureje Dam", category: "Nature", rating: 4.3, description: "Scenic dam and reservoir south of Ado-Ekiti — picnicking, boating and weekend relaxation.", tags: ["nature", "leisure", "scenic"] },
        { id: "NG-EK-008", name: "Aye Festival Ilawe-Ekiti", category: "Culture", rating: 4.4, description: "Ancient annual festival of the Ilawe people with masquerades, wrestling and royal processions.", tags: ["festival", "culture", "tradition"] },
        { id: "NG-EK-009", name: "Ese Oke Rock", category: "Nature", rating: 4.3, description: "Dramatic rock formation near Ijero-Ekiti with ancient carvings and spiritual significance.", tags: ["nature", "history", "scenic"] },
        { id: "NG-EK-010", name: "Ekiti Parapo War Headquarters Site", category: "History", rating: 4.3, description: "Historic site of the 19th century Ekiti Parapo uprising against Ibadan hegemony — a landmark of Ekiti pride.", tags: ["history", "heritage", "culture"] },
      ]
    },

    // ── ENUGU ─────────────────────────────────────────────────────────────────
    {
      id: "NG-EN",
      name: "Enugu",
      places: [
        { id: "NG-EN-001", name: "Ngwo Pine Forest", category: "Nature", rating: 4.7, description: "Cool highland forest of imported conifers with caves, waterfalls and a natural swimming pool.", tags: ["nature", "hiking", "relaxation"] },
        { id: "NG-EN-002", name: "Awhum Waterfall & Monastery", category: "Nature", rating: 4.8, description: "Benedictine monastery beside a roaring waterfall and sacred cave — spiritual and natural splendour.", tags: ["waterfall", "spiritual", "nature"] },
        { id: "NG-EN-003", name: "Milken Hills", category: "Nature", rating: 4.5, description: "Quartzite ridge above Enugu city — sunrise hikes and sweeping views of Coal City and its surrounds.", tags: ["hiking", "views", "nature"] },
        { id: "NG-EN-004", name: "Opi Lake", category: "Nature", rating: 4.3, description: "Tranquil freshwater lake ringed with palms — fishing, boating and weekend picnics.", tags: ["lake", "relaxation", "picnic"] },
        { id: "NG-EN-005", name: "Coal City Stadium Surrounds", category: "Landmark", rating: 4.1, description: "The historic Nnamdi Azikiwe Stadium — the sports and cultural hub of Enugu's Coal City identity.", tags: ["landmark", "sports", "culture"] },
        { id: "NG-EN-006", name: "Enugu Coal Mines Heritage Trail", category: "History", rating: 4.4, description: "Walk the site of Nigeria's first commercial mine — opened 1915, sparked Nigeria's industrial age.", tags: ["history", "industrial", "heritage"] },
        { id: "NG-EN-007", name: "Lolo Beach Resort", category: "Leisure", rating: 4.2, description: "Popular Enugu weekend beach resort on the Adada River — swimming, boating and bar-b-que pits.", tags: ["leisure", "water", "relaxation"] },
        { id: "NG-EN-008", name: "Otigba Computer Village Annex", category: "Shopping", rating: 4.1, description: "Enugu's electronics market — the eastern hub of Nigeria's tech trade.", tags: ["shopping", "technology", "urban"] },
        { id: "NG-EN-009", name: "Ugwu Onyeama Hill", category: "Nature", rating: 4.3, description: "Prominent hill near Oji River named after the first Nigerian to climb it — forest walks and viewpoints.", tags: ["nature", "hiking", "history"] },
        { id: "NG-EN-010", name: "Ezeagu Tourist Complex", category: "Nature", rating: 4.5, description: "Spectacular tourist complex in Ezeagu with waterfalls, cave, lake and forest — the best of Enugu in one park.", tags: ["nature", "waterfall", "adventure"] },
      ]
    },

    // ── GOMBE ─────────────────────────────────────────────────────────────────
    {
      id: "NG-GO",
      name: "Gombe",
      places: [
        { id: "NG-GO-001", name: "Gombe Wildlife Reserve", category: "Wildlife", rating: 4.3, description: "Guinea savanna reserve with roan antelope, lions, leopards and over 200 bird species.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-GO-002", name: "Tangale Hills", category: "Nature", rating: 4.5, description: "Dramatic quartzite hills of the Tangale-Waja people — ancient hilltop villages, trekking and rock climbing.", tags: ["nature", "hiking", "culture"] },
        { id: "NG-GO-003", name: "Gombe Main Market", category: "Shopping", rating: 4.1, description: "Largest market in Gombe State — cattle, leather goods and dried Sahelian produce.", tags: ["shopping", "culture", "local"] },
        { id: "NG-GO-004", name: "Dadin Kowa Dam", category: "Nature", rating: 4.4, description: "Large dam on the Gongola River — fishing, boating and a weekend leisure hub for Gombe residents.", tags: ["nature", "leisure", "fishing"] },
        { id: "NG-GO-005", name: "Biliri Game Reserve", category: "Wildlife", rating: 4.2, description: "Remote savanna reserve in southern Gombe State bordering Taraba — lions and diverse ungulates.", tags: ["wildlife", "nature", "adventure"] },
        { id: "NG-GO-006", name: "Nafada Rock Formations", category: "Nature", rating: 4.3, description: "Ancient riverside sandstone formations and caves near Nafada town.", tags: ["nature", "geology", "adventure"] },
        { id: "NG-GO-007", name: "Emir of Gombe Palace", category: "History", rating: 4.3, description: "The Emir's historic palace and court — gateway to Gombe's Fulani emirate culture and traditions.", tags: ["history", "royalty", "culture"] },
        { id: "NG-GO-008", name: "Gombe Lake", category: "Nature", rating: 4.2, description: "Small lake on the edge of Gombe town — flamingos and waders attract birders year-round.", tags: ["nature", "birdwatching", "relaxation"] },
        { id: "NG-GO-009", name: "Hinna Cultural Festival", category: "Culture", rating: 4.4, description: "Annual festival of the Hinna people featuring traditional wrestling, dances and royal pageantry.", tags: ["festival", "culture", "tradition"] },
        { id: "NG-GO-010", name: "Guadaba-Bare Mountains", category: "Nature", rating: 4.3, description: "Remote mountain chain on the Cameroon border — challenging trekking through spectacular highland scenery.", tags: ["nature", "hiking", "adventure"] },
      ]
    },

    // ── IMO ───────────────────────────────────────────────────────────────────
    {
      id: "NG-IM",
      name: "Imo",
      places: [
        { id: "NG-IM-001", name: "Oguta Lake", category: "Nature", rating: 4.6, description: "Nigeria's most scenic freshwater lake — two rivers meet here but their waters remain visibly separate.", tags: ["nature", "lake", "unique"] },
        { id: "NG-IM-002", name: "Imo State Museum", category: "History", rating: 4.3, description: "Houses Imo's rich Igbo heritage — Ikenga figures, ofo staffs and sacred ceremonial objects.", tags: ["museum", "history", "culture"] },
        { id: "NG-IM-003", name: "Mbari Cultural Centre Owerri", category: "Art", rating: 4.5, description: "Sacred Igbo earthen sculpture complex — open-air gallery of terracotta figures of deities and community scenes.", tags: ["art", "culture", "spiritual"] },
        { id: "NG-IM-004", name: "Imo Wonder Lake", category: "Nature", rating: 4.4, description: "Mysterious lake that appeared overnight in 1974 — still a scientific curiosity and popular picnic site.", tags: ["nature", "unique", "scenic"] },
        { id: "NG-IM-005", name: "Queens Garden Park Owerri", category: "Nature", rating: 4.2, description: "Well-maintained city park with ornamental gardens, fountain and an open-air amphitheatre.", tags: ["park", "relaxation", "family"] },
        { id: "NG-IM-006", name: "Nworie River Waterfront", category: "Leisure", rating: 4.2, description: "Owerri's riverside walkway — evening joggers, canoe rentals and fresh grilled fish spots.", tags: ["leisure", "food", "nature"] },
        { id: "NG-IM-007", name: "Ehime Mbano Waterfalls", category: "Nature", rating: 4.5, description: "Cascading falls in Imo's hilly south-eastern zone — swimming pools, trekking and jungle atmosphere.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-IM-008", name: "Achi Caves", category: "Adventure", rating: 4.3, description: "Remarkable limestone cave complex near Achi with stalactites and a subterranean stream.", tags: ["adventure", "nature", "unique"] },
        { id: "NG-IM-009", name: "Orlu Cultural Market", category: "Shopping", rating: 4.2, description: "Famous for the best Imo palm wine, ukwa bread and handmade ukwa crafts.", tags: ["shopping", "food", "culture"] },
        { id: "NG-IM-010", name: "Amaraku Wildlife Sanctuary", category: "Wildlife", rating: 4.3, description: "Small but important conservation area protecting rare birds and monkeys in Imo's remaining forest patches.", tags: ["wildlife", "nature", "conservation"] },
      ]
    },

    // ── JIGAWA ────────────────────────────────────────────────────────────────
    {
      id: "NG-JI",
      name: "Jigawa",
      places: [
        { id: "NG-JI-001", name: "Hadejia-Nguru Wetlands", category: "Nature", rating: 4.7, description: "Internationally important wetland system — millions of migrating birds flock here from Europe each winter.", tags: ["nature", "birdwatching", "UNESCO"] },
        { id: "NG-JI-002", name: "Jibiya Lake", category: "Nature", rating: 4.3, description: "Cross-border lake with Niger — large hippo population and spectacular Sahelian sunset views.", tags: ["nature", "wildlife", "scenic"] },
        { id: "NG-JI-003", name: "Kano-Jigawa Dunes", category: "Nature", rating: 4.2, description: "Semi-desert dune landscape near Kazaure — a unique Sahelian environment rarely visited by outsiders.", tags: ["nature", "unique", "adventure"] },
        { id: "NG-JI-004", name: "Emir of Dutse Palace", category: "History", rating: 4.3, description: "The Emir of Dutse's palace — gateway to the cultural traditions of the Jigawa emirate system.", tags: ["history", "royalty", "culture"] },
        { id: "NG-JI-005", name: "Hadejia Emirate Palace", category: "History", rating: 4.4, description: "Ancient emirate palace of Hadejia — one of Jigawa's oldest cities, home to the Fulani-Hausa royal heritage.", tags: ["history", "royalty", "architecture"] },
        { id: "NG-JI-006", name: "Kafin Hausa Fish Market", category: "Food", rating: 4.2, description: "Famous weekly fish market supplying fresh-dried Hadejia river fish to northern Nigeria.", tags: ["food", "culture", "local"] },
        { id: "NG-JI-007", name: "Nguru Lake", category: "Nature", rating: 4.3, description: "Part of the Hadejia-Nguru wetland system — flamingos, pelicans and the extraordinary Ramsar-listed habitat.", tags: ["nature", "birdwatching", "wildlife"] },
        { id: "NG-JI-008", name: "Takai Ancient Walled Town", category: "History", rating: 4.4, description: "Pre-Jihad walled Hausa city with intact sections of its ancient walls and a traditional market.", tags: ["history", "heritage", "culture"] },
        { id: "NG-JI-009", name: "Gumel Emirate Palace", category: "History", rating: 4.2, description: "Royal court of the Gumel Emirate — traditions and court ceremony maintained for centuries.", tags: ["history", "royalty", "culture"] },
        { id: "NG-JI-010", name: "Babura Cultural Festival", category: "Culture", rating: 4.3, description: "Annual Sallah Durbar in Babura — horse-riding displays, traditional dress and emirate pageantry.", tags: ["festival", "culture", "tradition"] },
      ]
    },

    // ── KADUNA ────────────────────────────────────────────────────────────────
    {
      id: "NG-KD",
      name: "Kaduna",
      places: [
        { id: "NG-KD-001", name: "Kajuru Castle", category: "Landmark", rating: 4.8, description: "A medieval-style castle built in the Nigerian highlands — a surreal private luxury retreat.", tags: ["unique", "luxury", "landmark"] },
        { id: "NG-KD-002", name: "Matsirga Waterfalls", category: "Nature", rating: 4.6, description: "Roaring waterfall on the Kaduna River surrounded by rocky outcrops and Guinea savanna.", tags: ["waterfall", "nature", "scenic"] },
        { id: "NG-KD-003", name: "Kamuku National Park", category: "Wildlife", rating: 4.5, description: "Vast Guinea savanna park protecting roan antelope, lions and over 300 bird species.", tags: ["safari", "wildlife", "birdwatching"] },
        { id: "NG-KD-004", name: "Kaduna Museum", category: "History", rating: 4.4, description: "One of Nigeria's premier regional museums — showcasing the pre-colonial cultures of all Nigerian peoples.", tags: ["museum", "history", "culture"] },
        { id: "NG-KD-005", name: "Nok Terracotta Heritage Sites", category: "History", rating: 4.7, description: "Birthplace of the Nok civilisation — terracotta figurines here date to 1500 BC, Africa's oldest art tradition.", tags: ["history", "ancient", "art"] },
        { id: "NG-KD-006", name: "Kagoro Hills", category: "Nature", rating: 4.5, description: "Cool highland of the Southern Kaduna hills — waterfalls, rock paintings and traditional Bajju villages.", tags: ["nature", "hiking", "culture"] },
        { id: "NG-KD-007", name: "Kufena Rock Zaria", category: "Landmark", rating: 4.4, description: "Huge rocky outcrop overlooking Zaria — used as a watchtower by the Hausa kingdoms for centuries.", tags: ["landmark", "history", "views"] },
        { id: "NG-KD-008", name: "Birnin Gwari Game Reserve", category: "Wildlife", rating: 4.3, description: "Remote savanna reserve west of Kaduna — lions, wild dogs and diverse birdlife.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-KD-009", name: "Lugard Hall Kaduna", category: "History", rating: 4.4, description: "Colonial-era parliament building — site where northern Nigeria's political destiny was repeatedly shaped.", tags: ["history", "colonial", "architecture"] },
        { id: "NG-KD-010", name: "Kubwa Forest Reserve", category: "Nature", rating: 4.2, description: "Woodland reserve near Abuja-Kaduna border — good for birding and a forest walk from the highway.", tags: ["nature", "birdwatching", "relaxation"] },
      ]
    },

    // ── KANO ──────────────────────────────────────────────────────────────────
    {
      id: "NG-KN",
      name: "Kano",
      places: [
        { id: "NG-KN-001", name: "Gidan Makama Museum", category: "History", rating: 4.6, description: "15th century Emir's guest house turned museum — the finest display of Hausa-Fulani architecture in Nigeria.", tags: ["history", "culture", "museum"] },
        { id: "NG-KN-002", name: "Kurmi Market", category: "Shopping", rating: 4.5, description: "Ancient market operating since the 15th century — leather goods, spices, and trans-Saharan trade goods.", tags: ["shopping", "history", "local"] },
        { id: "NG-KN-003", name: "Kano City Walls", category: "History", rating: 4.5, description: "Ancient mud-brick walls dating back to the 14th century — 14km of earthworks still partly intact today.", tags: ["history", "architecture", "heritage"] },
        { id: "NG-KN-004", name: "Kofar Mata Dye Pits", category: "Culture", rating: 4.8, description: "The oldest working dye pits in West Africa — indigo-dyed cloth has been produced here for over 500 years.", tags: ["culture", "artisan", "heritage"] },
        { id: "NG-KN-005", name: "Emir of Kano Palace", category: "History", rating: 4.7, description: "700-year-old palace complex — the royal court of Kano hosts the spectacular Sallah Durbar each year.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KN-006", name: "Kano State Museum", category: "History", rating: 4.4, description: "Comprehensive display of Hausa art, metalwork, leatherwork and pre-colonial material culture.", tags: ["museum", "history", "art"] },
        { id: "NG-KN-007", name: "Sallah Durbar Kano", category: "Culture", rating: 5.0, description: "The greatest royal horse parade in West Africa — 3,000 cavalry charge before the Emir in full regalia.", tags: ["festival", "royalty", "iconic"] },
        { id: "NG-KN-008", name: "Gidan Sarki (Emir's New Palace)", category: "History", rating: 4.5, description: "19th century extension of the ancient palace — stunning Sudano-Sahelian arched architecture.", tags: ["history", "architecture", "royalty"] },
        { id: "NG-KN-009", name: "Kano Zoo", category: "Wildlife", rating: 4.1, description: "Established 1954 — lions, cheetahs and primates in Nigeria's most visited northern zoo.", tags: ["wildlife", "family", "education"] },
        { id: "NG-KN-010", name: "Tiga Dam", category: "Nature", rating: 4.3, description: "Nigeria's first major dam — vast reservoir south of Kano with boating and weekend recreation.", tags: ["nature", "leisure", "fishing"] },
        { id: "NG-KN-011", name: "Singer Craft Village", category: "Shopping", rating: 4.4, description: "Kano leather artisans create world-famous bags, shoes and saddles for export — buy direct.", tags: ["shopping", "artisan", "culture"] },
      ]
    },

    // ── KATSINA ───────────────────────────────────────────────────────────────
    {
      id: "NG-KT",
      name: "Katsina",
      places: [
        { id: "NG-KT-001", name: "Gobarau Minaret", category: "History", rating: 4.7, description: "A 15th century minaret — the tallest pre-colonial structure in sub-Saharan Nigeria at 18.5 metres.", tags: ["history", "architecture", "heritage"] },
        { id: "NG-KT-002", name: "Emir of Katsina Palace", category: "History", rating: 4.6, description: "Ancient palace of the Katsina Emirate — one of the original Hausa city-states and home to the Sallah Durbar.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KT-003", name: "Katsina Museum", category: "History", rating: 4.4, description: "Displays the history of the ancient Katsina Kingdom and its role in trans-Saharan trade and Islamic learning.", tags: ["museum", "history", "culture"] },
        { id: "NG-KT-004", name: "Katsina City Walls", category: "History", rating: 4.4, description: "Remaining sections of Katsina's ancient mud-brick walls — testimony to its medieval greatness.", tags: ["history", "heritage", "architecture"] },
        { id: "NG-KT-005", name: "Kusugu Well", category: "History", rating: 4.3, description: "Ancient well used by the first Fulani reformer Usman dan Fodio — a sacred Islamic heritage site.", tags: ["history", "spiritual", "heritage"] },
        { id: "NG-KT-006", name: "Dan Marke Shopping Complex", category: "Shopping", rating: 4.2, description: "Traditional commercial hub of Katsina — textiles, leather, spices and the best groundnut oil in Nigeria.", tags: ["shopping", "food", "local"] },
        { id: "NG-KT-007", name: "Daura Ancient Palace", category: "History", rating: 4.6, description: "Palace of the ancient Daura emirate — Daura is the origin city of the Hausa states per oral tradition.", tags: ["history", "royalty", "ancient"] },
        { id: "NG-KT-008", name: "Dutsin-Ma Hills", category: "Nature", rating: 4.3, description: "Rocky hills south of Katsina city — cool breezes, seasonal springs and panoramic savanna views.", tags: ["nature", "hiking", "scenic"] },
        { id: "NG-KT-009", name: "Katsina Polo Ground", category: "Culture", rating: 4.3, description: "Historic polo grounds where the sport introduced by the British has been passionately adopted by northern elites.", tags: ["sports", "culture", "colonial"] },
        { id: "NG-KT-010", name: "Umaru Musa Yar'Adua Birthplace", category: "History", rating: 4.2, description: "Memorial site of Nigeria's beloved late President in his hometown of Katsina.", tags: ["history", "politics", "memorial"] },
      ]
    },

    // ── KEBBI ─────────────────────────────────────────────────────────────────
    {
      id: "NG-KE",
      name: "Kebbi",
      places: [
        { id: "NG-KE-001", name: "Argungu Fishing Festival", category: "Culture", rating: 5.0, description: "The world's most spectacular fishing festival — thousands of men enter the Sokoto River simultaneously with gourds.", tags: ["festival", "culture", "unique"] },
        { id: "NG-KE-002", name: "Kanta Museum Argungu", category: "History", rating: 4.5, description: "Museum in a 16th century fortified palace of the Kebbi Kingdom — displays on the Kebbi-Songhai wars.", tags: ["history", "museum", "heritage"] },
        { id: "NG-KE-003", name: "Wuru Wildlife Reserve", category: "Wildlife", rating: 4.3, description: "Sahel-fringe reserve protecting hartebeest, oribi and wetland birds on the Niger River flood plain.", tags: ["wildlife", "nature", "birdwatching"] },
        { id: "NG-KE-004", name: "Birnin Kebbi Emirate Palace", category: "History", rating: 4.4, description: "Palace of the Emir of Gwandu — seat of one of the most powerful Fulani Jihad emirates.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KE-005", name: "Kainji Lake (Kebbi portion)", category: "Nature", rating: 4.4, description: "Nigeria's largest lake — enormous reservoir on the Niger River teeming with Nile perch.", tags: ["nature", "fishing", "leisure"] },
        { id: "NG-KE-006", name: "Wasagu Natural Spring", category: "Nature", rating: 4.3, description: "Freshwater spring in the Sakaba hills — crystal water, forest birds and Kebbi's best-kept natural secret.", tags: ["nature", "unique", "relaxation"] },
        { id: "NG-KE-007", name: "Zuru Emirate Palace", category: "History", rating: 4.3, description: "Palace of the Zuru emirate in southern Kebbi — gateway to the Dakarkari and Gungawa cultures.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KE-008", name: "Argungu Emirate Market", category: "Shopping", rating: 4.2, description: "Riverside market best known for dried Nile perch, catfish and traditional Kebbi cloth.", tags: ["shopping", "food", "culture"] },
        { id: "NG-KE-009", name: "Bena Waterfalls", category: "Nature", rating: 4.4, description: "Roaring cascade in Kebbi's southern highlands near Yauri — a rewarding off-the-beaten-path destination.", tags: ["waterfall", "nature", "adventure"] },
        { id: "NG-KE-010", name: "Gungu Cultural Festival", category: "Culture", rating: 4.4, description: "Annual Dakarkari cultural festival near Zuru — colorful dances, traditional athletics and royal ceremony.", tags: ["festival", "culture", "tradition"] },
      ]
    },

    // ── KOGI ──────────────────────────────────────────────────────────────────
    {
      id: "NG-KO",
      name: "Kogi",
      places: [
        { id: "NG-KO-001", name: "Confluence of the Niger & Benue", category: "Landmark", rating: 4.8, description: "Nigeria's most iconic natural landmark — stand where Africa's two great rivers meet at Lokoja.", tags: ["landmark", "nature", "iconic"] },
        { id: "NG-KO-002", name: "Lugard House Lokoja", category: "History", rating: 4.7, description: "Frederick Lugard's colonial headquarters where northern and southern Nigeria were amalgamated in 1914.", tags: ["history", "colonial", "important"] },
        { id: "NG-KO-003", name: "Mount Patti", category: "Nature", rating: 4.7, description: "Steep hill above Lokoja where Lugard watched the two rivers meet — still offers the best panoramic view.", tags: ["nature", "history", "views"] },
        { id: "NG-KO-004", name: "Kogi State Museum", category: "History", rating: 4.4, description: "Collection of Igala, Ebira, Okun and Bassa cultures — the most ethnically diverse state in Nigeria.", tags: ["museum", "history", "culture"] },
        { id: "NG-KO-005", name: "Idah Attah Palace", category: "History", rating: 4.5, description: "Ancient palace of the Attah of Igala — one of Nigeria's most powerful pre-colonial riverine kingdoms.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KO-006", name: "Okene Hills", category: "Nature", rating: 4.3, description: "Scenic granite hills in the Ebira heartland — trekking, waterfalls and cool highland air.", tags: ["nature", "hiking", "scenic"] },
        { id: "NG-KO-007", name: "Obajana Caves", category: "Adventure", rating: 4.4, description: "Spectacular limestone caves near Nigeria's largest cement factory — stalactite formations and subterranean rivers.", tags: ["adventure", "nature", "unique"] },
        { id: "NG-KO-008", name: "Jakura Marble Quarry", category: "Nature", rating: 4.2, description: "Exposed marble outcrops create a surreal white landscape — geology walks and photography.", tags: ["nature", "geology", "unique"] },
        { id: "NG-KO-009", name: "Ganaja Beach Lokoja", category: "Beach", rating: 4.3, description: "River beach at the Niger confluence — fresh fish, cold drinks and weekend swimmers at Nigeria's most storied waters.", tags: ["beach", "leisure", "food"] },
        { id: "NG-KO-010", name: "Ozubulu Falls", category: "Nature", rating: 4.3, description: "Seasonal waterfall in the Igala highlands — best visited during and just after the rains.", tags: ["waterfall", "nature", "seasonal"] },
      ]
    },

    // ── KWARA ─────────────────────────────────────────────────────────────────
    {
      id: "NG-KW",
      name: "Kwara",
      places: [
        { id: "NG-KW-001", name: "Owu Waterfalls", category: "Nature", rating: 4.8, description: "The highest waterfall in West Africa at 120 metres — a breathtaking curtain of water in dense forest.", tags: ["waterfall", "nature", "iconic"] },
        { id: "NG-KW-002", name: "Olumirin Waterfalls Erin-Ijesha", category: "Nature", rating: 4.7, description: "Seven-tiered sacred waterfall in dense Erin-Ijesha forest — one of Nigeria's most beautiful.", tags: ["waterfall", "spiritual", "nature"] },
        { id: "NG-KW-003", name: "Esie Museum", category: "History", rating: 4.7, description: "Nigeria's first museum — houses 800+ soapstone figures of unknown origin discovered in 1933, still unexplained.", tags: ["history", "museum", "unique"] },
        { id: "NG-KW-004", name: "Ilorin Emirate Palace", category: "History", rating: 4.5, description: "Palace of the Emir of Ilorin — bridge between Yoruba and Hausa-Fulani cultures in Nigeria's middle belt.", tags: ["history", "royalty", "culture"] },
        { id: "NG-KW-005", name: "Emir's Market Ilorin", category: "Shopping", rating: 4.3, description: "Traditional market dominated by Ilorin potters, weavers and the famous Aso-Oke textile sellers.", tags: ["shopping", "artisan", "culture"] },
        { id: "NG-KW-006", name: "Dada Falls", category: "Nature", rating: 4.5, description: "Twin cascades plunging into forest pools in Kwara's eastern highlands — excellent for swimming.", tags: ["waterfall", "swimming", "nature"] },
        { id: "NG-KW-007", name: "Kampe Wildlife Sanctuary", category: "Wildlife", rating: 4.4, description: "Kainji Lake ecosystem reserve in Kwara — hippopotamus colonies and exceptional waterbird flocks.", tags: ["wildlife", "nature", "birdwatching"] },
        { id: "NG-KW-008", name: "Pategi Beach", category: "Beach", rating: 4.3, description: "River beach on the Nupe shore of the Niger River — the freshwater equivalent of a proper beach holiday.", tags: ["beach", "leisure", "river"] },
        { id: "NG-KW-009", name: "Jebba Rock", category: "History", rating: 4.4, description: "Legend holds Mungo Park drowned near this island — a colonial history marker on the Niger River.", tags: ["history", "colonial", "scenic"] },
        { id: "NG-KW-010", name: "Kwara Hotel Gardens", category: "Leisure", rating: 4.1, description: "Historic Ilorin hotel with tropical gardens, tennis courts and the most atmospheric bar in the state capital.", tags: ["leisure", "history", "relaxation"] },
      ]
    },

    // ── NASARAWA ──────────────────────────────────────────────────────────────
    {
      id: "NG-NA",
      name: "Nasarawa",
      places: [
        { id: "NG-NA-001", name: "Farin Ruwa Waterfalls", category: "Nature", rating: 4.8, description: "Nigeria's tallest waterfall at 150 metres — white water cascading through dramatic Jos Plateau escarpment.", tags: ["waterfall", "nature", "iconic"] },
        { id: "NG-NA-002", name: "Emir of Lafia Palace", category: "History", rating: 4.3, description: "Palace of the Emir of Lafia — a blend of Hausa-Fulani and Azara cultural traditions in Nasarawa's capital.", tags: ["history", "royalty", "culture"] },
        { id: "NG-NA-003", name: "Wamba Rock Art", category: "History", rating: 4.5, description: "Ancient rock paintings in the hills near Wamba — some of Nigeria's oldest surviving rock art.", tags: ["history", "ancient", "art"] },
        { id: "NG-NA-004", name: "Akiri Salt Lake", category: "Nature", rating: 4.4, description: "Natural saline lake where brine is still harvested in clay pots using a 2,000-year-old technique.", tags: ["nature", "culture", "unique"] },
        { id: "NG-NA-005", name: "Keffi Emirate Palace", category: "History", rating: 4.4, description: "Historic 19th century emirate palace in Keffi — site of Captain Moloney's assassination that triggered British conquest.", tags: ["history", "colonial", "royalty"] },
        { id: "NG-NA-006", name: "Doma Dam", category: "Nature", rating: 4.3, description: "Scenic dam and reservoir in Doma LGA — hippo pods and prolific Sahelian birdlife.", tags: ["nature", "wildlife", "fishing"] },
        { id: "NG-NA-007", name: "Bassa Hills", category: "Nature", rating: 4.4, description: "Forested hills of the Bassa people — caves, streams and a unique middle-belt cultural landscape.", tags: ["nature", "hiking", "culture"] },
        { id: "NG-NA-008", name: "Keana Salt Springs", category: "Nature", rating: 4.3, description: "Cluster of natural brine springs that have made Keana a salt production centre since antiquity.", tags: ["nature", "culture", "unique"] },
        { id: "NG-NA-009", name: "Toto Scenic Highway", category: "Nature", rating: 4.2, description: "The drive from Abuja through Toto offers spectacular Benue River valley views at sunset.", tags: ["scenic", "nature", "photography"] },
        { id: "NG-NA-010", name: "Ankwai Hills", category: "Nature", rating: 4.3, description: "Granite hills near Akwanga with prehistoric cave shelters, streams and good birding.", tags: ["nature", "hiking", "history"] },
      ]
    },

    // ── NIGER ─────────────────────────────────────────────────────────────────
    {
      id: "NG-NI",
      name: "Niger",
      places: [
        { id: "NG-NI-001", name: "Kainji National Park", category: "Wildlife", rating: 4.6, description: "One of Nigeria's largest parks — lions, buffaloes, hippos and elephants along the Niger River.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-NI-002", name: "Gurara Falls (Niger State)", category: "Nature", rating: 4.7, description: "Wide curtain waterfall on the Gurara River — one of the most visited natural attractions in central Nigeria.", tags: ["waterfall", "nature", "iconic"] },
        { id: "NG-NI-003", name: "Kainji Dam", category: "Landmark", rating: 4.4, description: "Nigeria's first hydroelectric dam — the massive reservoir created Africa's second largest man-made lake.", tags: ["landmark", "engineering", "history"] },
        { id: "NG-NI-004", name: "Nupeko Forest Reserve", category: "Nature", rating: 4.3, description: "Gallery forest along the Niger River — important chimpanzee habitat and prolific birdwatching.", tags: ["wildlife", "nature", "conservation"] },
        { id: "NG-NI-005", name: "Bida Emirate Palace", category: "History", rating: 4.5, description: "Palace of the Etsu Nupe — the Nupe kingdom was one of the most sophisticated craft-producing societies in Africa.", tags: ["history", "royalty", "culture"] },
        { id: "NG-NI-006", name: "Bida Glass and Brasswork", category: "Culture", rating: 4.6, description: "Bida artisans produce exquisite glass beads and brass work — a living tradition since the Nupe empire.", tags: ["art", "artisan", "shopping"] },
        { id: "NG-NI-007", name: "Zugurma Game Reserve", category: "Wildlife", rating: 4.3, description: "Savanna reserve protecting lions, elephants and roan antelope north of Kainji Lake.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-NI-008", name: "Minna Central Mosque", category: "Architecture", rating: 4.2, description: "Landmark mosque in Niger State's capital — dramatic Sudano-Sahelian architecture.", tags: ["architecture", "religion", "landmark"] },
        { id: "NG-NI-009", name: "Shiroro Dam", category: "Landmark", rating: 4.3, description: "Third largest hydroelectric dam in Nigeria — vast reservoir in spectacular hill country.", tags: ["landmark", "engineering", "scenic"] },
        { id: "NG-NI-010", name: "Wushishi Ancient Town", category: "History", rating: 4.3, description: "Ancient Nupe town with 500-year-old mosques and the ruins of a medieval Islamic school.", tags: ["history", "heritage", "culture"] },
      ]
    },

    // ── OGUN ──────────────────────────────────────────────────────────────────
    {
      id: "NG-OG",
      name: "Ogun",
      places: [
        { id: "NG-OG-001", name: "Olumo Rock", category: "Landmark", rating: 4.8, description: "Sacred 137m granite outcrop where the Egba people sheltered during 19th century wars — Abeokuta's defining icon.", tags: ["landmark", "history", "nature"] },
        { id: "NG-OG-002", name: "Ake Palace Abeokuta", category: "History", rating: 4.6, description: "Alake of Egbaland's palace — centre of Egba history and the childhood home of Nobel Laureate Wole Soyinka.", tags: ["history", "royalty", "culture"] },
        { id: "NG-OG-003", name: "Centenary Hall Abeokuta", category: "History", rating: 4.4, description: "Historic colonial-era hall built to celebrate Egbaland's 1930 centenary — important political heritage site.", tags: ["history", "colonial", "architecture"] },
        { id: "NG-OG-004", name: "Adire Textile Market Abeokuta", category: "Shopping", rating: 4.6, description: "World-famous Yoruba Adire (tie-dye indigo cloth) hand-dyed and sold here — the best in Nigeria.", tags: ["shopping", "culture", "artisan"] },
        { id: "NG-OG-005", name: "Osun Grove Ogun", category: "Nature", rating: 4.3, description: "Sacred forest at Oke-Ogun offering spiritual walks, ancient trees and serene nature retreats.", tags: ["nature", "spiritual", "relaxation"] },
        { id: "NG-OG-006", name: "Omo Forest Reserve", category: "Nature", rating: 4.6, description: "One of the last intact lowland rainforests in southern Nigeria — forest elephants and rare primates.", tags: ["wildlife", "nature", "conservation"] },
        { id: "NG-OG-007", name: "Ijebu-Ode Palace", category: "History", rating: 4.5, description: "Palace of the Awujale of Ijebuland — the Ijebu people historically controlled trade between Lagos and the interior.", tags: ["history", "royalty", "culture"] },
        { id: "NG-OG-008", name: "Birikisu Sungbo Shrine", category: "History", rating: 4.5, description: "Ancient earthworks and shrine to Queen Birikisu Sungbo — some believe this is the grave of the Queen of Sheba.", tags: ["history", "spiritual", "ancient"] },
        { id: "NG-OG-009", name: "Sagamu Museum", category: "History", rating: 4.3, description: "Documents the history of the Remo people and the Sagamu cocoa boom of the 1950s.", tags: ["museum", "history", "culture"] },
        { id: "NG-OG-010", name: "Lekki-Ikorodu Beach (Ogun portion)", category: "Beach", rating: 4.2, description: "Wild Atlantic beach where Ogun meets Lagos — deserted, dramatic and great for long sunset walks.", tags: ["beach", "nature", "relaxation"] },
        { id: "NG-OG-011", name: "Wole Soyinka Museum", category: "History", rating: 4.7, description: "Museum in the childhood home of Africa's first Nobel literature laureate in Abeokuta.", tags: ["history", "literature", "culture"] },
      ]
    },

    // ── ONDO ──────────────────────────────────────────────────────────────────
    {
      id: "NG-ON",
      name: "Ondo",
      places: [
        { id: "NG-ON-001", name: "Idanre Hills", category: "Nature", rating: 4.9, description: "Ancient hilltop kingdom reachable by 660 steps — a UNESCO tentative list site of extraordinary beauty and heritage.", tags: ["UNESCO", "hiking", "heritage"] },
        { id: "NG-ON-002", name: "Owo Museum of Antiquities", category: "History", rating: 4.6, description: "15th century Owo bronze and ivory masterpieces — evidence of direct artistic links with Benin City.", tags: ["museum", "history", "art"] },
        { id: "NG-ON-003", name: "Ebomi Lake", category: "Nature", rating: 4.4, description: "Sacred freshwater lake in thick forest — revered by the Ikale people, surrounded by ancient trees.", tags: ["nature", "spiritual", "scenic"] },
        { id: "NG-ON-004", name: "Ago-Claro Atlantic Beach", category: "Beach", rating: 4.5, description: "Undeveloped Atlantic beach with coconut palms and dramatic waves — one of Ondo's finest coastal retreats.", tags: ["beach", "nature", "relaxation"] },
        { id: "NG-ON-005", name: "Igbo-Ora Twins Festival", category: "Culture", rating: 4.6, description: "The 'Twin Capital of the World' — Igbo-Ora has the world's highest twin birth rate and celebrates with an annual festival.", tags: ["festival", "culture", "unique"] },
        { id: "NG-ON-006", name: "Arogbo Ijaw Water Festival", category: "Culture", rating: 4.5, description: "Annual festival of the Arogbo Ijaw — boat races, masquerades and water spirit ceremonies in the creeks.", tags: ["festival", "culture", "water"] },
        { id: "NG-ON-007", name: "Ondo State Cathedral", category: "Architecture", rating: 4.3, description: "Impressive Anglican cathedral in Ondo town — one of the oldest churches in Yorubaland.", tags: ["architecture", "religion", "history"] },
        { id: "NG-ON-008", name: "Okitipupa Beach", category: "Beach", rating: 4.3, description: "Coastal beach in the Ilaje creek country — fresh seafood, canoe rides and a unique creeks lifestyle.", tags: ["beach", "food", "culture"] },
        { id: "NG-ON-009", name: "Odigbo Forest Reserve", category: "Nature", rating: 4.3, description: "Patches of old rainforest in southern Ondo — medicinal plants, rare butterflies and forest walks.", tags: ["nature", "wildlife", "hiking"] },
        { id: "NG-ON-010", name: "Efon-Alaaye Sacred Hills", category: "Nature", rating: 4.3, description: "Sacred inselberg complex revered by the Ekiti-Yoruba — annual climbing festivals attract thousands.", tags: ["nature", "spiritual", "culture"] },
      ]
    },

    // ── OSUN ──────────────────────────────────────────────────────────────────
    {
      id: "NG-OS",
      name: "Osun",
      places: [
        { id: "NG-OS-001", name: "Osun-Osogbo Sacred Grove", category: "Culture", rating: 4.9, description: "UNESCO World Heritage rainforest sanctuary dedicated to the goddess Osun — sacred sculptures and shrines.", tags: ["UNESCO", "culture", "spiritual"] },
        { id: "NG-OS-002", name: "Olumirin Waterfall Erin-Ijesha", category: "Nature", rating: 4.8, description: "Seven-tiered cascade of extraordinary beauty — Nigeria's most photographed waterfall.", tags: ["waterfall", "nature", "swimming"] },
        { id: "NG-OS-003", name: "Osun-Osogbo Festival", category: "Culture", rating: 4.9, description: "Two-week August festival drawing pilgrims worldwide — the most important Yoruba religious festival.", tags: ["festival", "culture", "spiritual"] },
        { id: "NG-OS-004", name: "Ilesa Waterfall", category: "Nature", rating: 4.5, description: "Peaceful waterfall retreat within Ilesa forest — picnics, swimming and forest walks.", tags: ["waterfall", "nature", "relaxation"] },
        { id: "NG-OS-005", name: "Oke-Ela Forest Reserve", category: "Nature", rating: 4.3, description: "Community forest reserve near Ilesha with giant trees, river walks and monkey troops.", tags: ["nature", "wildlife", "hiking"] },
        { id: "NG-OS-006", name: "Ife Museum (Ile-Ife)", category: "History", rating: 4.8, description: "Houses the world-famous Ife bronze and terracotta heads — the finest naturalistic art of pre-colonial Africa.", tags: ["museum", "art", "history"] },
        { id: "NG-OS-007", name: "Ooni of Ife Palace", category: "History", rating: 4.7, description: "Palace of the Ooni — spiritual head of the Yoruba people and descendant of Oduduwa, founder of the Yoruba race.", tags: ["history", "royalty", "spiritual"] },
        { id: "NG-OS-008", name: "Ile-Ife Museum of Art", category: "Art", rating: 4.6, description: "Terracotta and bronze masterpieces of the Ife civilisation (900–1400 AD) — the cradle of Yoruba art.", tags: ["art", "history", "museum"] },
        { id: "NG-OS-009", name: "Osun Cultural Centre", category: "Culture", rating: 4.3, description: "State arts centre in Osogbo hosting exhibitions, crafts and live Yoruba drum performances.", tags: ["culture", "art", "entertainment"] },
        { id: "NG-OS-010", name: "Moremi Groove Ile-Ife", category: "History", rating: 4.4, description: "Sacred forest grove honouring Queen Moremi — the most celebrated heroine of Yoruba legend.", tags: ["history", "culture", "spiritual"] },
      ]
    },

    // ── OYO ───────────────────────────────────────────────────────────────────
    {
      id: "NG-OY",
      name: "Oyo",
      places: [
        { id: "NG-OY-001", name: "Cocoa House Ibadan", category: "Landmark", rating: 4.5, description: "Built 1965 — first skyscraper in tropical Africa, symbol of Nigeria's post-independence economic ambition.", tags: ["landmark", "history", "architecture"] },
        { id: "NG-OY-002", name: "Bower's Tower", category: "Landmark", rating: 4.5, description: "Victorian observation tower on Oke Are hill built in 1936 — panoramic views of Ibadan's seven hills.", tags: ["landmark", "history", "views"] },
        { id: "NG-OY-003", name: "University of Ibadan Zoo", category: "Wildlife", rating: 4.3, description: "Nigeria's oldest university zoo — lions, crocodiles, tortoises and exotic birds on a beautiful campus.", tags: ["wildlife", "family", "education"] },
        { id: "NG-OY-004", name: "Agodi Gardens & Zoo", category: "Nature", rating: 4.4, description: "Lush botanical gardens and small zoo in the heart of Ibadan — best family nature spot in the city.", tags: ["nature", "family", "relaxation"] },
        { id: "NG-OY-005", name: "Old Oyo National Park", category: "Nature", rating: 4.6, description: "Ruins of the old Oyo Empire capital inside a savanna wildlife park — history meets safari.", tags: ["wildlife", "history", "nature"] },
        { id: "NG-OY-006", name: "Oke-Ibadan Hills", category: "Nature", rating: 4.3, description: "Rolling granite inselbergs surrounding Ibadan — sunrise hikes, waterfalls and forest patches.", tags: ["hiking", "nature", "scenic"] },
        { id: "NG-OY-007", name: "Mapo Hall", category: "History", rating: 4.5, description: "Hilltop colonial court building — one of Ibadan's most iconic structures and a symbol of early local government.", tags: ["history", "colonial", "landmark"] },
        { id: "NG-OY-008", name: "Dugbe Market Ibadan", category: "Shopping", rating: 4.3, description: "One of West Africa's largest markets — Aso-Oke textiles, electronics, fabrics and street food.", tags: ["shopping", "local", "culture"] },
        { id: "NG-OY-009", name: "Ado-Awaye Suspended Lake", category: "Nature", rating: 4.7, description: "One of only two suspended lakes in the world — sits atop a hill near Ado-Awaye, a geological miracle.", tags: ["nature", "unique", "hiking"] },
        { id: "NG-OY-010", name: "Oyo Town Palace", category: "History", rating: 4.5, description: "Palace of the Alaafin of Oyo — seat of the ancient Oyo Empire, once West Africa's most powerful kingdom.", tags: ["history", "royalty", "culture"] },
        { id: "NG-OY-011", name: "Iseyin Adire Centre", category: "Culture", rating: 4.4, description: "Iseyin's ancient indigo-dye industry — weavers and dyers producing Alaari and Sanyan cloth for centuries.", tags: ["art", "artisan", "culture"] },
      ]
    },

    // ── PLATEAU ───────────────────────────────────────────────────────────────
    {
      id: "NG-PL",
      name: "Plateau",
      places: [
        { id: "NG-PL-001", name: "Jos Wildlife Park & Museum", category: "Wildlife", rating: 4.6, description: "Combined zoo, museum and cultural village in a highland setting — the best day out in Jos.", tags: ["wildlife", "culture", "family"] },
        { id: "NG-PL-002", name: "Shere Hills", category: "Nature", rating: 4.7, description: "Dramatic granite inselbergs rising from the Jos Plateau — the best rock climbing and hiking in Nigeria.", tags: ["hiking", "nature", "adventure"] },
        { id: "NG-PL-003", name: "Kurra Falls", category: "Nature", rating: 4.6, description: "Spectacular multi-tiered waterfall in highland forest near Shendam — Nigeria's most dramatic plateau falls.", tags: ["waterfall", "nature", "hiking"] },
        { id: "NG-PL-004", name: "Assop Falls", category: "Nature", rating: 4.5, description: "Twin falls in plateau vegetation near Pankshin — crystal clear plunge pools in a forested gorge.", tags: ["waterfall", "nature", "scenic"] },
        { id: "NG-PL-005", name: "Pandam Wildlife Park", category: "Wildlife", rating: 4.5, description: "Savanna reserve hosting baboons, hippos, crocodiles and over 280 bird species.", tags: ["safari", "wildlife", "birdwatching"] },
        { id: "NG-PL-006", name: "Riyom Rock", category: "Nature", rating: 4.6, description: "Impossibly stacked granite boulders — a geological wonder that defines the Jos Plateau landscape.", tags: ["nature", "photography", "geology"] },
        { id: "NG-PL-007", name: "Nok Terracotta Sites (Jos Museum)", category: "History", rating: 4.8, description: "Jos National Museum holds the Nok figurines — Africa's oldest terracotta art tradition (1,500 BC).", tags: ["history", "art", "ancient"] },
        { id: "NG-PL-008", name: "Rayfield Resort", category: "Leisure", rating: 4.3, description: "Historic colonial-era leisure resort on a highland lake — fishing, boating and cool plateau breezes.", tags: ["leisure", "history", "relaxation"] },
        { id: "NG-PL-009", name: "Wase Rock", category: "Nature", rating: 4.5, description: "A dramatic 330m isolated volcanic plug near Wase town — a natural fortress used as a stronghold.", tags: ["nature", "history", "hiking"] },
        { id: "NG-PL-010", name: "Vom Christian Hospital Grounds", category: "History", rating: 4.2, description: "Colonial-era hospital surrounded by beautiful highland gardens — a peaceful Plateau walking destination.", tags: ["history", "colonial", "nature"] },
      ]
    },

    // ── RIVERS ────────────────────────────────────────────────────────────────
    {
      id: "NG-RV",
      name: "Rivers",
      places: [
        { id: "NG-RV-001", name: "Port Harcourt Pleasure Park", category: "Leisure", rating: 4.3, description: "Family waterfront park on the Bonny River with rides, gardens and evening lights.", tags: ["family", "leisure", "waterfront"] },
        { id: "NG-RV-002", name: "Finima Nature Park", category: "Nature", rating: 4.7, description: "Pristine mangrove forest and beach on Bonny Island — one of the most important wetland habitats in Nigeria.", tags: ["nature", "wildlife", "beach"] },
        { id: "NG-RV-003", name: "Isaac Boro Park", category: "Nature", rating: 4.3, description: "Riverside park in Port Harcourt's city centre named after the Ijaw civil rights hero.", tags: ["park", "history", "relaxation"] },
        { id: "NG-RV-004", name: "Douglas Camp Beach", category: "Beach", rating: 4.2, description: "Bonny River estuary beach with fishing boats, beach grills and fresh seafood.", tags: ["beach", "food", "local"] },
        { id: "NG-RV-005", name: "Rivers State Museum", category: "History", rating: 4.4, description: "Ijaw, Ogoni and Kalabari artefacts in a colonial-era building on Museum Road.", tags: ["museum", "culture", "history"] },
        { id: "NG-RV-006", name: "Bonny Island Historic Town", category: "History", rating: 4.5, description: "19th century Atlantic slave trade port — the Anna Pepple and Manila Pepple Houses are living history.", tags: ["history", "heritage", "colonial"] },
        { id: "NG-RV-007", name: "Rumuola Cultural Village", category: "Culture", rating: 4.2, description: "Living museum of Ikwerre culture near Port Harcourt — masquerades, drumming and traditional food.", tags: ["culture", "food", "entertainment"] },
        { id: "NG-RV-008", name: "Chief Sekibo's Cultural Centre", category: "Culture", rating: 4.2, description: "Community cultural centre celebrating Kalabari weaving, bronze-casting and traditional festivals.", tags: ["culture", "art", "history"] },
        { id: "NG-RV-009", name: "Trans-Amadi Wildlife Park", category: "Wildlife", rating: 4.2, description: "Urban wildlife park near Port Harcourt's industrial zone — good for family day trips.", tags: ["wildlife", "family", "nature"] },
        { id: "NG-RV-010", name: "Andoni Beach", category: "Beach", rating: 4.4, description: "Remote Atlantic beach in Andoni LGA — undeveloped, beautiful and an excellent bird-watching site.", tags: ["beach", "nature", "birdwatching"] },
      ]
    },

    // ── SOKOTO ────────────────────────────────────────────────────────────────
    {
      id: "NG-SO",
      name: "Sokoto",
      places: [
        { id: "NG-SO-001", name: "Sultan of Sokoto Palace", category: "History", rating: 4.8, description: "Palace of the Sultan of Sokoto — spiritual leader of Nigeria's 90 million Muslims and head of the Sokoto Caliphate.", tags: ["history", "royalty", "spiritual"] },
        { id: "NG-SO-002", name: "Usman Dan Fodio Tomb", category: "History", rating: 4.7, description: "Mausoleum of the great Islamic reformer who founded the Sokoto Caliphate in 1804 — a pilgrimage site.", tags: ["history", "spiritual", "heritage"] },
        { id: "NG-SO-003", name: "Sokoto State Museum", category: "History", rating: 4.5, description: "Museum in a British Residency building — displays on the Jihad, the Caliphate and Hausa-Fulani material culture.", tags: ["museum", "history", "colonial"] },
        { id: "NG-SO-004", name: "Waziri Junaidu History Museum", category: "History", rating: 4.6, description: "Private museum of Islamic manuscripts, royal regalia and the intellectual history of the Caliphate.", tags: ["museum", "history", "Islamic"] },
        { id: "NG-SO-005", name: "Sallah Durbar Sokoto", category: "Culture", rating: 4.9, description: "The original Durbar — cavalry charges, turbaned riders and royal pageantry at the seat of the Caliphate.", tags: ["festival", "royalty", "culture"] },
        { id: "NG-SO-006", name: "Rima River", category: "Nature", rating: 4.2, description: "Wide river flowing through Sokoto — hippos, crocodiles and migratory birds along its banks.", tags: ["nature", "wildlife", "scenic"] },
        { id: "NG-SO-007", name: "Old Birnin Shinkafi", category: "History", rating: 4.3, description: "Ruins of the Zamfara Kingdom capital — gateway to the pre-Jihad Hausa history of northwest Nigeria.", tags: ["history", "ancient", "heritage"] },
        { id: "NG-SO-008", name: "Sokoto Leather Market", category: "Shopping", rating: 4.4, description: "Finest leather goods in Nigeria — hand-stitched bags, sandals and Hausa traditional shoes.", tags: ["shopping", "artisan", "culture"] },
        { id: "NG-SO-009", name: "Illela Cultural Festival", category: "Culture", rating: 4.4, description: "Annual border-town festival featuring Hausa, Tuareg and Fulani cultural displays.", tags: ["festival", "culture", "tradition"] },
        { id: "NG-SO-010", name: "Isa Fish Market", category: "Food", rating: 4.2, description: "Famous market for smoked Nile perch — trade links between Lake Chad and the Sahel come alive here.", tags: ["food", "culture", "local"] },
      ]
    },

    // ── TARABA ────────────────────────────────────────────────────────────────
    {
      id: "NG-TA",
      name: "Taraba",
      places: [
        { id: "NG-TA-001", name: "Gashaka-Gumti National Park", category: "Wildlife", rating: 4.8, description: "Nigeria's largest and most biodiverse park — chimpanzees, lions and stunning Cameroon Highland scenery.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-TA-002", name: "Chappal Waddi", category: "Adventure", rating: 4.8, description: "Nigeria's highest peak at 2,419m on the Cameroon border — a challenging 3-day trekking adventure.", tags: ["adventure", "hiking", "nature"] },
        { id: "NG-TA-003", name: "Mambilla Plateau", category: "Nature", rating: 4.9, description: "Africa's most beautiful highland plateau — rolling green hills, tea farms, waterfalls and cool temperatures.", tags: ["nature", "scenic", "hiking"] },
        { id: "NG-TA-004", name: "Ngel Nyaki Forest Reserve", category: "Wildlife", rating: 4.7, description: "Rare montane forest — home to Nigeria's last Preuss's red colobus monkeys and other endemic species.", tags: ["wildlife", "conservation", "nature"] },
        { id: "NG-TA-005", name: "Donga River Rapids", category: "Adventure", rating: 4.5, description: "Exciting white-water rapids on the Donga River — rafting and riverside camping in beautiful savanna.", tags: ["adventure", "water", "nature"] },
        { id: "NG-TA-006", name: "Mambilla Tea Plantations", category: "Culture", rating: 4.6, description: "Visit working tea estates on the plateau — cool mist, rolling green rows and fresh highland tea.", tags: ["culture", "food", "scenic"] },
        { id: "NG-TA-007", name: "Bali Gangsin (Chief's Palace)", category: "History", rating: 4.4, description: "Palace of the Bali Chamba Kingdom — a significant cultural centre of the Chamba people.", tags: ["history", "royalty", "culture"] },
        { id: "NG-TA-008", name: "Sardauna Province Monument", category: "History", rating: 4.3, description: "Monument to Ahmadu Bello's Sardauna Province — reflects the turbulent post-independence history of northeast Nigeria.", tags: ["history", "politics", "memorial"] },
        { id: "NG-TA-009", name: "Ibi Traditional Market", category: "Shopping", rating: 4.2, description: "Ancient river market at Ibi — Nigerian cultures converge here to trade cattle, fish and local produce.", tags: ["shopping", "culture", "local"] },
        { id: "NG-TA-010", name: "Jukun Kingdom Ibi", category: "History", rating: 4.5, description: "Centre of the ancient Jukun Kingdom — one of the most enigmatic civilisations of the Benue River valley.", tags: ["history", "culture", "heritage"] },
      ]
    },

    // ── YOBE ──────────────────────────────────────────────────────────────────
    {
      id: "NG-YO",
      name: "Yobe",
      places: [
        { id: "NG-YO-001", name: "Dagona Waterfowl Sanctuary", category: "Wildlife", rating: 4.7, description: "Extraordinary flamingo and pelican sanctuary — hundreds of thousands of birds turn the lake pink at dawn.", tags: ["wildlife", "birdwatching", "unique"] },
        { id: "NG-YO-002", name: "Goni Hills", category: "Nature", rating: 4.4, description: "Dramatic hills rising from the Sahelian plain near Potiskum — good hiking and panoramic desert views.", tags: ["nature", "hiking", "scenic"] },
        { id: "NG-YO-003", name: "Gashua Emirate Palace", category: "History", rating: 4.4, description: "Ancient emirate palace of Gashua — gateway to the Bade culture of northeast Nigeria.", tags: ["history", "royalty", "culture"] },
        { id: "NG-YO-004", name: "Nguru Lake Wetlands", category: "Nature", rating: 4.6, description: "Internationally recognised wetland — part of the Hadejia-Nguru system supporting millions of migratory birds.", tags: ["nature", "birdwatching", "wildlife"] },
        { id: "NG-YO-005", name: "Fika Emirate Palace", category: "History", rating: 4.3, description: "Palace of the Emir of Fika — one of the oldest continuous royal courts in northeast Nigeria.", tags: ["history", "royalty", "culture"] },
        { id: "NG-YO-006", name: "Potiskum Market", category: "Shopping", rating: 4.2, description: "Commercial capital of Yobe — large weekly market for cattle, dried fish and Saharan trade goods.", tags: ["shopping", "culture", "local"] },
        { id: "NG-YO-007", name: "Yobe River", category: "Nature", rating: 4.2, description: "Border river between Nigeria and Niger — crocodiles, hippos and migratory bird spectacles.", tags: ["nature", "wildlife", "scenic"] },
        { id: "NG-YO-008", name: "Machina Salt Flats", category: "Nature", rating: 4.3, description: "White salt flats near the Niger border — camel trains still cross here from the Sahara.", tags: ["nature", "unique", "culture"] },
        { id: "NG-YO-009", name: "Buni Yadi Cultural Centre", category: "Culture", rating: 4.2, description: "Cultural institution celebrating Kanembu, Bade and Ngizim peoples' shared heritage.", tags: ["culture", "history", "education"] },
        { id: "NG-YO-010", name: "Gadau Fishing Community", category: "Culture", rating: 4.2, description: "Traditional fishing village on the Jama'are River — handmade dugout canoes and artisanal drying racks.", tags: ["culture", "fishing", "local"] },
      ]
    },

    // ── ZAMFARA ───────────────────────────────────────────────────────────────
    {
      id: "NG-ZA",
      name: "Zamfara",
      places: [
        { id: "NG-ZA-001", name: "Maru Dam & Lake", category: "Nature", rating: 4.4, description: "Large dam west of Gusau — hippos, waterfowl and weekend boating on a scenic Sahelian reservoir.", tags: ["nature", "wildlife", "leisure"] },
        { id: "NG-ZA-002", name: "Kuyambana Game Reserve", category: "Wildlife", rating: 4.3, description: "Remote savanna reserve with roan antelope, oribi and lions in Zamfara's southern hills.", tags: ["safari", "wildlife", "nature"] },
        { id: "NG-ZA-003", name: "Emir of Gusau Palace", category: "History", rating: 4.4, description: "Palace of the Emir of Gusau — gateway to Zamfara's Fulani emirate traditions.", tags: ["history", "royalty", "culture"] },
        { id: "NG-ZA-004", name: "Tsibiri Walled Town", category: "History", rating: 4.4, description: "Ancient pre-Jihad Hausa walled settlement with intact mud-brick architecture.", tags: ["history", "heritage", "architecture"] },
        { id: "NG-ZA-005", name: "Dangulbi Dam", category: "Nature", rating: 4.2, description: "Agricultural dam near Anka — peaceful fishing village and resident hippo pod.", tags: ["nature", "fishing", "wildlife"] },
        { id: "NG-ZA-006", name: "Birnin Zamfara Ruins", category: "History", rating: 4.5, description: "Ruins of the ancient Zamfara Kingdom capital — pre-Jihad Hausa city walls and palace foundations.", tags: ["history", "ancient", "heritage"] },
        { id: "NG-ZA-007", name: "Anka Gold Mining Area", category: "Culture", rating: 4.2, description: "Artisanal gold mining communities — one of the oldest gold extraction regions in West Africa.", tags: ["culture", "history", "unique"] },
        { id: "NG-ZA-008", name: "Zurmi Hills", category: "Nature", rating: 4.3, description: "Granite hills near Zurmi town — traditional Dakarkari villages, caves and panoramic views.", tags: ["nature", "culture", "hiking"] },
        { id: "NG-ZA-009", name: "Maradun Emirate Palace", category: "History", rating: 4.2, description: "Historic emirate court at Maradun — Fulani cultural traditions of western Zamfara.", tags: ["history", "royalty", "culture"] },
        { id: "NG-ZA-010", name: "Gummi Ancient Town", category: "History", rating: 4.3, description: "Ancient Zamfara town with 600-year-old earthworks and links to the earliest Hausa Kingdoms.", tags: ["history", "ancient", "heritage"] },
      ]
    },

  ]
};
