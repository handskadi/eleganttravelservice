export type DestinationData = {
  slug: string;
  name: string;
  heroImage: string;
  subtitle: string;
  country: string;
  region: string;
  about: string;
  bestMonths: string[];
  avgTempSummer: string;
  avgTempWinter: string;
  airport: string;
  language: string;
  currency: string;
  timezone: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  thingsToDo: {
    title: string;
    description: string;
    image: string;
    duration: string;
    price: string;
  }[];
  gettingThere: string;
  localTips: string[];
  tourIds: string[];
  relatedDestinations: string[];
};

export const destinationsData: DestinationData[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    heroImage: "/destinations/hot-air-baloon-marrakech.webp",
    subtitle: "The Red City",
    country: "Morocco",
    region: "Central Morocco",
    about: `Marrakech is a city that seduces every sense at once. Known as the Red City for its ochre-hued walls and buildings — a colour mandated by the original Almoravid rulers in the eleventh century — Marrakech has long been the beating heart of Moroccan culture, commerce and mysticism. From the moment you step into Djemaa el-Fna, the vast medieval square at the city's core, you are enveloped by the smoke of grilling meats, the hypnotic rhythms of Gnawa musicians and the theatrical performances of storytellers who have plied their trade here for generations.

The medina of Marrakech is a UNESCO World Heritage Site and one of the most intact medieval urban centres in the Arab world. Its labyrinthine souks are organised by craft — the tanners, the spice traders, the lantern-makers and the carpet weavers each occupy their own quarter — and wandering between them feels less like sightseeing and more like time travel. Behind carved cedar doors lie the city's famous riads: private courtyard mansions whose inward-facing architecture creates serene oases of fountains, mosaic tilework and fragrant orange trees, many now converted into some of the finest boutique hotels in Africa.

Beyond the medina walls, the Ville Nouvelle district of Guéliz offers a compelling counterpoint: wide, tree-lined boulevards, contemporary art galleries and a café culture influenced by the decades of French and Spanish protectorate. The Jardin Majorelle — originally laid out by the French painter Jacques Majorelle and later restored by Yves Saint Laurent — remains one of the most visited gardens in Morocco, its electric-blue pavilion and towering cacti a masterpiece of botanical design. The adjacent Musée Yves Saint Laurent pays stylish tribute to the designer's lifelong love affair with the city.

Marrakech is also the gateway to the High Atlas Mountains, which rise dramatically just forty kilometres to the south, and to the vast desert landscapes beyond. Its position as Morocco's tourism capital means the infrastructure is unrivalled — world-class restaurants, hammams, spa riads and luxury camps are all within reach — yet the city's ancient soul remains gloriously, stubbornly intact. Come for the sensory overload; stay for the stillness you find at the centre of it all.`,
    bestMonths: ["March", "April", "May", "October", "November"],
    avgTempSummer: "38°C",
    avgTempWinter: "12°C",
    airport: "Marrakech Menara Airport (RAK)",
    language: "Arabic, Tamazight, French",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Djemaa el-Fna",
        description:
          "The world's greatest open-air theatre: snake charmers, acrobats, storytellers and food stalls converge on this UNESCO-listed square from dusk until midnight.",
        icon: "FaStar",
      },
      {
        title: "The Souks",
        description:
          "Thousands of artisan workshops and market stalls spread across a dozen themed quarters inside the medina — a shopping labyrinth that rewards patience and curiosity in equal measure.",
        icon: "FaStore",
      },
      {
        title: "Jardin Majorelle",
        description:
          "A botanical jewel of cobalt-blue structures, towering bamboo groves and rare succulents, restored and beloved by Yves Saint Laurent.",
        icon: "FaLeaf",
      },
      {
        title: "Bahia Palace",
        description:
          "A sprawling nineteenth-century palace of zellige tilework, carved stucco ceilings and shaded garden courtyards that once housed an entire royal household.",
        icon: "FaLandmark",
      },
      {
        title: "Traditional Hammam",
        description:
          "Morocco's age-old bathing ritual — steam rooms, black soap, and a vigorous kessa scrub — offers the most authentic form of relaxation the country has to offer.",
        icon: "FaSpa",
      },
      {
        title: "Hot Air Balloon at Dawn",
        description:
          "Float silently above the medina rooftops and palm groves as the Atlas Mountains blush pink at sunrise — one of the most extraordinary perspectives on any city in the world.",
        icon: "FaCloudSun",
      },
    ],
    thingsToDo: [
      {
        title: "Sunrise Hot Air Balloon Flight",
        description:
          "Drift over the terracotta rooftops of the medina and the palm-studded plains of the Haouz as dawn breaks over the Atlas Mountains. Champagne breakfast in the Agafay Desert included.",
        image: "/destinations/hot-air-baloon-marrakech.webp",
        duration: "4 hours",
        price: "From £130 per person",
      },
      {
        title: "Medina Food Tour",
        description:
          "Navigate the street-food stalls and hidden restaurant courtyards of the medina with a local guide, sampling msemen flatbreads, harira soup, bastilla pigeon pie and freshly squeezed orange juice.",
        image: "/moroccan-handicrafts.webp",
        duration: "3 hours",
        price: "From £45 per person",
      },
      {
        title: "Luxury Hammam & Spa Day",
        description:
          "Surrender to a traditional hammam ritual in a beautiful riad spa — steam room, black olive soap, kessa exfoliation and a full argan oil massage tailored to your needs.",
        image: "/moroccan-tiles.webp",
        duration: "Half day",
        price: "From £60 per person",
      },
      {
        title: "Quad Biking in the Agafay Desert",
        description:
          "Tear across the rocky desert plateau of Agafay, just 45 minutes from the city, on a thrilling quad bike excursion with Atlas Mountain views as your constant backdrop.",
        image: "/destinations/sahara.webp",
        duration: "3 hours",
        price: "From £55 per person",
      },
      {
        title: "Private Riad Cooking Class",
        description:
          "Learn the secrets of Moroccan cuisine — from spice blending and pastry making to slow-cooked tagines — in the kitchen of a private riad with a local chef.",
        image: "/moroccan-handicrafts.webp",
        duration: "4 hours",
        price: "From £50 per person",
      },
    ],
    gettingThere:
      "Marrakech Menara International Airport (RAK) is located just 6 kilometres from the city centre and receives direct flights from major European hubs including London Heathrow, London Gatwick, Paris CDG, Amsterdam and dozens more. Flight times from London average 3 hours 30 minutes. A grand taxi to the medina costs around 80–100 MAD (roughly £7–9); the No. 19 bus connects the airport to Djemaa el-Fna for just 4 MAD. Most riad hotels also offer private airport transfers, which are highly recommended for first-time visitors arriving after dark.",
    localTips: [
      "Always agree a price before entering a taxi — Marrakech petit taxis do not use meters, so negotiating up front avoids disputes on arrival.",
      "The souks are best explored in the morning before tour groups arrive; Friday mornings are particularly quiet as locals attend mosque.",
      "Carry small-denomination dirhams for tipping porters, musicians and stall owners — 5–10 MAD is appropriate for most small services.",
      "The main square, Djemaa el-Fna, charges unofficial fees for photographing performers; a respectful donation of 10–20 MAD before shooting goes a long way.",
      "Book hammam sessions at least a day in advance during high season — the best riad spas fill up fast.",
      "The Marrakech Museum and Ben Youssef Medersa both benefit from a local guide who can explain the symbolism in the geometric tilework and Arabic calligraphy.",
    ],
    tourIds: [
      "hot-air-balloon-marrakech",
      "marrakech-food-souk-halfday",
      "royal-hammam-spa-marrakech",
      "private-riad-marrakech-2day",
      "quad-biking-agafay-3hrs",
      "agafay-camel-sunset-2hrs",
    ],
    relatedDestinations: ["atlas-mountains", "sahara-desert", "essaouira"],
  },
  {
    slug: "sahara-desert",
    name: "Sahara Desert",
    heroImage: "/destinations/sahara.webp",
    subtitle: "The Golden Dunes",
    country: "Morocco",
    region: "South-Eastern Morocco",
    about: `The Moroccan Sahara at Merzouga is everything the desert promises to be and more. The great Erg Chebbi dune field — a sea of apricot and amber sand dunes rising up to 150 metres above the surrounding hammada plain — is one of only two true erg formations in Morocco, and arriving at its edge for the first time is one of those travel moments that quietly rearranges your interior landscape. The dunes shift and breathe with every wind, their crests redrawn overnight, their colour cycling from bone-white at noon to molten copper at sunset and to silver beneath a sky so saturated with stars it looks artificially lit.

The gateway town of Merzouga sits at the foot of Erg Chebbi and offers a range of accommodation from simple guesthouses to spectacular luxury desert camps with heated private tents, gourmet dining and candlelit dinners served on the open sand. The classic Sahara experience — a camel trek at golden hour, a night under canvas listening to Gnawa musicians play by firelight, waking before dawn to climb the nearest dune and watch the sun ignite the desert — remains genuinely life-changing, no matter how many times you have read about it in travel magazines.

The road to Merzouga passes through a landscape of extraordinary variety. The Draa Valley, following Morocco's longest river south through a corridor of ancient kasbahs and palmeries, leads to Zagora and the first taste of desert. The Dadès and Todra gorges cut dramatic chasms through the Anti-Atlas, their vertical walls painted in bands of ochre and terracotta. The village of Aït Benhaddou — a UNESCO-listed ksar whose towering mud-brick towers have served as the backdrop for films from Lawrence of Arabia to Game of Thrones — stands as a reminder that the Sahara was never a barrier but a corridor of trade and culture connecting sub-Saharan Africa to the Mediterranean world.

Beyond the dunes themselves, the Moroccan Sahara rewards those who slow down. Early-morning walks reveal the tracks of fennec foxes, sandgrouse and sidewinder snakes in the undisturbed sand. Local Amazigh guides can lead visitors to fossil beds and mineral deposits that testify to a time when this landscape lay beneath a shallow Devonian sea. And in the surrounding villages, the hospitality of the desert-dwelling Amazigh people — tea poured from a height, shared bread, conversation that requires no common language — offers one of the most honest and moving experiences the country has to give.`,
    bestMonths: ["October", "November", "February", "March", "April"],
    avgTempSummer: "45°C",
    avgTempWinter: "5°C",
    airport: "Errachidia Moulay Ali Cherif Airport (ERH) or Ouarzazate Airport (OZZ)",
    language: "Arabic, Tamazight (Amazigh)",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Erg Chebbi Dunes",
        description:
          "The great sand sea at Merzouga, with dunes rising to 150 metres, offers the most spectacular desert scenery in all of North Africa.",
        icon: "FaMountain",
      },
      {
        title: "Camel Trek at Sunset",
        description:
          "Ride atop a Dromedary camel into the golden heart of the dunes as the light turns the Sahara into a landscape of liquid copper and deep violet shadow.",
        icon: "FaPaw",
      },
      {
        title: "Luxury Desert Camp",
        description:
          "Spend a night in a heated Berber tent beneath a canopy of stars, with traditional music, tagine dinners and a silence so complete it becomes its own kind of sound.",
        icon: "FaCampground",
      },
      {
        title: "Aït Benhaddou Ksar",
        description:
          "A UNESCO World Heritage fortress-village of layered mud-brick towers, once a major caravan stop on the salt and gold route between the Sahara and Marrakech.",
        icon: "FaLandmark",
      },
      {
        title: "Dadès & Todra Gorges",
        description:
          "Two of Morocco's most dramatic landscapes: vertical canyon walls rising hundreds of metres, carved by ancient rivers and painted in the warm reds of oxidised limestone.",
        icon: "FaMapMarkedAlt",
      },
      {
        title: "Stargazing",
        description:
          "With zero light pollution and skies of extraordinary clarity, the Sahara at Merzouga offers some of the finest naked-eye stargazing available anywhere on Earth.",
        icon: "FaStar",
      },
    ],
    thingsToDo: [
      {
        title: "3-Day Sahara Desert Adventure",
        description:
          "The definitive Morocco desert experience: camel trek into Erg Chebbi, a night in a luxury desert camp with traditional Gnawa music, sandboarding at dawn and a scenic return through the Draa Valley kasbahs.",
        image: "/destinations/sahara.webp",
        duration: "3 Days",
        price: "From £299 per person",
      },
      {
        title: "Sunset Camel Trek",
        description:
          "A shorter introduction to the Sahara — a two-hour camel ride into the dunes for sunset, followed by mint tea and traditional music at a desert camp before returning under the stars.",
        image: "/destinations/sahara.webp",
        duration: "3 hours",
        price: "From £45 per person",
      },
      {
        title: "Aït Benhaddou & Dadès Gorges Day Tour",
        description:
          "A classic southern Morocco circuit taking in the UNESCO-listed kasbah of Aït Benhaddou and the vertiginous switchbacks of the Dadès Gorge — ideal preparation for the desert ahead.",
        image: "/moroccan-handicrafts.webp",
        duration: "Full day",
        price: "From £75 per person",
      },
      {
        title: "Luxury Merzouga Desert Camp",
        description:
          "Upgrade your desert experience to a private luxury camp with en-suite facilities, private terrace, personalised service and a private stargazing session with a Amazigh astronomy guide.",
        image: "/destinations/sahara.webp",
        duration: "1 night",
        price: "From £180 per person",
      },
    ],
    gettingThere:
      "The Sahara Desert region of Merzouga is approximately 550 kilometres south-east of Marrakech — a scenic 7–8 hour drive through some of Morocco's most extraordinary landscapes, passing Ouarzazate, the Draa Valley and the Dadès Gorge. Many travellers choose a guided tour that incorporates these stops en route, making the journey itself a core part of the experience. Errachidia Airport (ERH) offers limited domestic connections from Casablanca if time is short. Alternatively, Ouarzazate Airport (OZZ) receives some charter and seasonal flights from Europe and provides a good base for a longer southern Morocco circuit.",
    localTips: [
      "Avoid visiting between June and August when temperatures regularly exceed 45°C — spring and autumn offer the best balance of manageable heat and dramatic light.",
      "Pack a headscarf or shemagh for the camel trek; wind-blown sand in your eyes and nose is a real hazard, and the cloth also provides sun protection.",
      "Agree all camel trek and camp prices before departure — reputable operators provide written quotes and it protects both parties.",
      "The dunes are coldest in the hour before dawn; bring a warm layer for early-morning sandboarding or sunrise climbs regardless of how hot the day was.",
      "Bring extra cash — Merzouga and the surrounding villages have few ATMs and cards are not accepted at most desert camps.",
      "Sunrise is consistently more spectacular than sunset in Erg Chebbi as the angled light throws the dune ridges into sharper relief — set your alarm.",
    ],
    tourIds: [
      "sahara-3day-marrakech",
      "merzouga-luxury-camp-2day",
      "dades-draa-valley-3day",
      "ait-ben-haddou-day-trip",
      "agafay-camel-sunset-2hrs",
    ],
    relatedDestinations: ["marrakech", "atlas-mountains", "fes"],
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    heroImage: "/destinations/chefchaouen.webp",
    subtitle: "The Blue Pearl",
    country: "Morocco",
    region: "Northern Morocco / Rif Mountains",
    about: `Tucked into a natural amphitheatre carved by two streams in the folds of the Rif Mountains, Chefchaouen is one of those rare places that truly looks like nowhere else on Earth. Every surface of the medina — the stairways, the doorways, the walls of houses stacked up the steep hillside like a Mediterranean village dreamed in blue — is washed in shades of indigo, sky, cobalt and periwinkle. The tradition of painting the city blue may have originated with Jewish refugees who settled here in the fifteenth century, for whom blue symbolised the sky and heavens, or it may simply have been a practical measure against mosquitoes. Whatever its origins, the effect today is one of dreamlike, total immersion in a single colour that filters the mountain light into something perpetually gentle and cool.

Chefchaouen was founded in 1471 by Moulay Ali ibn Rashid as a small fortress to resist the Portuguese expansion along the northern Moroccan coast, and for centuries it remained almost entirely closed to outsiders — one of the few Moroccan cities that foreigners were forbidden from entering on pain of death. The first Western explorers only reached it in the 1920s. This isolation shaped a culture of remarkable distinctiveness: the city's crafts, its cuisine (goat's cheese appears frequently, a rarity in Moroccan cooking), its textiles and its Andalusian architectural heritage all feel subtly different from the rest of the country, as though Chefchaouen has been quietly perfecting its own version of Morocco for five centuries.

The medina itself is small enough to explore thoroughly in a day but rich enough to reward several. The central plaza of Uta el-Hammam, anchored by a restored kasbah and a grand mosque, is the social hub where locals gather beneath the shade of enormous plane trees. The souks here feel unhurried compared to those of Marrakech or Fes; the pace of life is mountain-slow, the vendors genuinely friendly rather than commercially attentive. The surrounding Rif Mountains offer excellent hiking, from gentle walks through the cedar forests where Barbary macaques play in the branches, to more demanding treks to the waterfalls of Ras el-Maa above the city.

Despite the Instagram fame that has brought visitors flooding to Chefchaouen over the past decade, the city retains a genuine character that many Morocco destinations have lost. Stay in one of the beautifully restored riads in the medina, eat slow-cooked chicken tagine with preserved lemons and olives on a rooftop terrace, and spend a morning simply sitting on a blue staircase watching the mountain light change. Chefchaouen does not perform for its visitors; it simply continues to be itself, which turns out to be more than enough.`,
    bestMonths: ["April", "May", "September", "October", "November"],
    avgTempSummer: "28°C",
    avgTempWinter: "8°C",
    airport: "Tangier Ibn Battouta Airport (TNG) — 3 hours by road",
    language: "Arabic, Tarifit (Rif Berber), Spanish, French",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "The Blue Medina",
        description:
          "Every alley, staircase and doorway painted in a unique shade of blue — a total-immersion aesthetic experience unlike any other city in the world.",
        icon: "FaPaintBrush",
      },
      {
        title: "Kasbah Museum",
        description:
          "The restored fifteenth-century fortress at the heart of the medina houses a compelling collection of Rif art, local musical instruments and Andalusian artefacts.",
        icon: "FaLandmark",
      },
      {
        title: "Ras el-Maa Waterfall",
        description:
          "A short walk above the medina leads to a cool mountain stream and waterfall where local women traditionally do their laundry — a serene, unhurried scene.",
        icon: "FaWater",
      },
      {
        title: "Rif Mountain Hiking",
        description:
          "The cedar forests above Chefchaouen shelter wild Barbary macaques and offer rewarding trails with panoramic views of the blue city below.",
        icon: "FaHiking",
      },
      {
        title: "Local Crafts & Textiles",
        description:
          "Chefchaouen is known for its distinctive wool blankets, woven in geometric Berber patterns, and for its hand-thrown pottery glazed in earthy mountain tones.",
        icon: "FaStore",
      },
      {
        title: "Rooftop Sunset Views",
        description:
          "As the evening light turns the blue walls gold and the mosques call across the mountain air, the rooftop terraces of the medina offer one of Morocco's most iconic views.",
        icon: "FaSun",
      },
    ],
    thingsToDo: [
      {
        title: "Guided Blue City Walking Tour",
        description:
          "Explore the photogenic lanes and hidden squares of the medina with a knowledgeable local guide who explains the history behind the famous blue paint and introduces you to traditional craftspeople at work.",
        image: "/destinations/chefchaouen.webp",
        duration: "3 hours",
        price: "From £30 per person",
      },
      {
        title: "Rif Mountain Macaque Trek",
        description:
          "Hike through the cedar forests above Chefchaouen in search of Barbary macaques, with a naturalist guide who explains the delicate ecosystem of the Rif Mountains.",
        image: "/destinations/atlas.webp",
        duration: "Half day",
        price: "From £40 per person",
      },
      {
        title: "Chefchaouen Photography Workshop",
        description:
          "Spend a morning or evening with a professional photographer learning to capture the city's unique light, colour contrasts and candid street scenes in the golden hours.",
        image: "/destinations/chefchaouen.webp",
        duration: "3 hours",
        price: "From £55 per person",
      },
      {
        title: "Northern Morocco Circuit: Tangier to Chefchaouen",
        description:
          "A two-day tour combining the cosmopolitan port of Tangier — with its Kasbah Museum and Café Hafa — and the ethereal blue medina of Chefchaouen, with overnight accommodation included.",
        image: "/destinations/chefchaouen.webp",
        duration: "2 Days",
        price: "From £140 per person",
      },
    ],
    gettingThere:
      "Chefchaouen has no commercial airport; the most convenient gateway is Tangier Ibn Battouta Airport (TNG), which receives direct flights from London, Paris, Madrid and other European cities. From Tangier, the journey to Chefchaouen takes approximately 3 hours by private transfer or CTM bus through the Rif Mountains on a dramatically scenic mountain road. Alternatively, Fes airport is around 3.5 hours to the south-east, making it possible to combine Chefchaouen with Fes on a northern Morocco circuit. From Casablanca the drive takes around 5 hours. CTM and Supratours buses connect Chefchaouen to most major Moroccan cities, and shared grand taxis are widely available in neighbouring towns.",
    localTips: [
      "The most photogenic light falls on the blue walls in the early morning (before 9am) and in the last hour before sunset — midday light is too harsh and the lanes too crowded.",
      "Chefchaouen is significantly cooler than Marrakech or the coast — pack a layer or a light jacket even in summer as the mountain evenings turn chilly quickly.",
      "The city is more relaxed than Marrakech and faux guides are less aggressive, but a genuine medina guide adds real depth to the experience — ask your riad to recommend one.",
      "Try the local goat's cheese (fromage de chèvre) in the morning market near Uta el-Hammam — it is unique to the Rif region and unlike anything else in Moroccan cuisine.",
      "Visit the Spanish Mosque on the hill above the city for a panoramic view over the entire blue medina — the walk up takes about 30 minutes from Bab el-Ain.",
      "Accommodation books out quickly in spring and autumn — reserve your riad at least a week in advance during peak season.",
    ],
    tourIds: ["chefchaouen-blue-city-2day", "tangier-northern-morocco-2day"],
    relatedDestinations: ["fes", "marrakech", "atlas-mountains"],
  },
  {
    slug: "atlas-mountains",
    name: "Atlas Mountains",
    heroImage: "/destinations/atlas.webp",
    subtitle: "Peaks & Berber Villages",
    country: "Morocco",
    region: "High Atlas / Central Morocco",
    about: `The Atlas Mountains are Morocco's dramatic spine — a 2,500-kilometre chain that divides the temperate, Mediterranean-influenced north from the Saharan south, sheltering fertile valleys and ancient Amazigh (Berber) villages that have remained largely unchanged for millennia. The High Atlas, with its peaks exceeding 4,000 metres, forms the most spectacular section of this range, and at its crown stands Jbel Toubkal: at 4,167 metres, the highest peak in North Africa, and one of the most accessible high-altitude summits on the continent for non-technical climbers.

The Atlas is first and foremost the heartland of the Amazigh people — the indigenous Berbers of North Africa — whose language, Tamazight, is written in a script older than Arabic and whose customs, cuisine and architecture are inseparable from the landscape they inhabit. Driving through the Atlas, you pass through a succession of villages where flat-roofed stone houses cluster around ancient kasbahs, walnut orchards and terraced wheat fields cling to near-vertical slopes, and mule-drawn ploughs still turn the soil in fields too narrow for machinery. The welcome in these villages is immediate and genuine: a glass of sweet mint tea, a seat on a carpet in the shade, the unhurried offer of conversation.

The Ourika Valley, within an hour of Marrakech, provides the gentlest introduction to the Atlas — a lush green corridor of market villages, argan groves and roadside tagine restaurants leading to waterfalls and the first Amazigh villages. For more serious engagement with the mountains, the Imlil valley, just beyond Asni, is the primary base for Toubkal ascents and multi-day trekking circuits through the Aït Bougmez valley and the remote Mgoun massif. Here, government-certified mountain guides lead routes through a landscape of extraordinary visual drama: glacial lakes, river crossings, passes at 3,000 metres with views stretching from the Sahara to the Atlantic.

What makes the Atlas genuinely special is not just the scenery but the sense of encountering a living culture at altitude. The annual moussem festivals, the collective agricultural practices of water management and harvest, the night skies from a mountain refuge at 3,000 metres — these are experiences that the coastal resorts and imperial cities of Morocco cannot replicate. The Atlas is where you come to understand that Morocco is, at its most fundamental, a mountain civilisation shaped by altitude, isolation and an extraordinary capacity for hospitality.`,
    bestMonths: ["April", "May", "June", "September", "October"],
    avgTempSummer: "22°C",
    avgTempWinter: "-5°C (at altitude)",
    airport: "Marrakech Menara Airport (RAK) — 1–2 hours by road",
    language: "Tamazight (Amazigh), Arabic, French",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Jbel Toubkal Summit",
        description:
          "Africa's second-highest country's highest peak at 4,167 metres — a two-day guided ascent that requires no technical equipment but rewards with views from the Sahara to the Atlantic.",
        icon: "FaMountain",
      },
      {
        title: "Berber Village Homestays",
        description:
          "Spend a night in an Amazigh village house in the Imlil or Aït Bougmez valley, eating home-cooked tagine and sleeping under a ceiling of hand-woven carpet.",
        icon: "FaHome",
      },
      {
        title: "Ourika Valley",
        description:
          "A lush green river valley just 30 minutes from Marrakech, lined with Amazigh market villages, waterfall hikes and the best lunch terraces in the Atlas.",
        icon: "FaWater",
      },
      {
        title: "Trekking & Hiking",
        description:
          "A world-class walking destination with routes ranging from gentle valley walks to demanding multi-day circuits through remote passes and summer pastures.",
        icon: "FaHiking",
      },
      {
        title: "Argan Oil Cooperatives",
        description:
          "Visit the women-run cooperatives of the Souss-Massa Valley where Amazigh women hand-press Morocco's famous argan oil — and purchase the real product direct from source.",
        icon: "FaLeaf",
      },
      {
        title: "Aït Benhaddou Ksar",
        description:
          "The great UNESCO-listed mud-brick fortress-village on the southern slopes of the Anti-Atlas — a testament to the architectural ingenuity of the pre-Saharan trading civilisation.",
        icon: "FaLandmark",
      },
    ],
    thingsToDo: [
      {
        title: "Toubkal Summit Trek",
        description:
          "A two-day guided ascent of North Africa's highest peak, starting from the mountain hub of Imlil, overnighting at a mountain refuge at 3,207 metres and reaching the summit at dawn for a 360-degree panorama.",
        image: "/destinations/atlas.webp",
        duration: "2 Days",
        price: "From £180 per person",
      },
      {
        title: "Berber Villages Trekking Circuit",
        description:
          "A three-day guided circuit through the remote valleys and Amazigh villages of the High Atlas, staying in village guesthouses, crossing mountain passes and learning about traditional Berber life.",
        image: "/destinations/atlas.webp",
        duration: "3 Days",
        price: "From £220 per person",
      },
      {
        title: "Ourika Valley Day Trip",
        description:
          "A gentle introduction to the Atlas Mountains from Marrakech — a scenic valley drive, a hike to the Seven Waterfalls, lunch on a terrace overlooking the river and a visit to a saffron cooperative.",
        image: "/destinations/atlas.webp",
        duration: "Full day",
        price: "From £55 per person",
      },
      {
        title: "Imlil Village & Waterfall Walk",
        description:
          "A half-day walk from the mountain village of Imlil into the surrounding walnut-tree valleys with a certified Amazigh guide, visiting traditional stone mills and a local family for tea.",
        image: "/destinations/atlas.webp",
        duration: "Half day",
        price: "From £35 per person",
      },
    ],
    gettingThere:
      "The High Atlas Mountains are accessed primarily from Marrakech, the nearest international gateway. Marrakech Menara Airport (RAK) is the ideal arrival point, with direct flights from London, Paris, Amsterdam and most major European cities. From Marrakech, the Atlas Mountains begin in earnest at the Tizi n'Tichka pass (2,260 metres), which is the main road route to the south. The Imlil valley, the base for Toubkal trekking, is 63 kilometres from Marrakech and reached by grand taxi or private transfer in approximately 90 minutes. The Ourika Valley is even closer at 35 kilometres. A 4WD vehicle is advisable for accessing more remote villages and southern slopes.",
    localTips: [
      "Government-certified mountain guides (Guides de Montagne) carry official ID and are required for Toubkal summit attempts — always verify credentials before engaging a guide.",
      "The Toubkal summit attempt should be treated as a serious mountain undertaking: altitude sickness is a real risk above 3,000 metres, so acclimatise for a night in Imlil before ascending.",
      "The Ourika Valley market (souk) runs on Mondays and provides a wonderfully authentic alternative to the Marrakech souks — goat herders, spice traders and Amazigh weavers all attend.",
      "Mountain guesthouses (gîtes d'étape) provide simple, clean accommodation at very reasonable rates — reserving ahead through the Imlil-based guide associations ensures quality control.",
      "The months of April and May bring wildflowers to the Atlas valleys — almond blossom in February is an especially stunning spectacle on the southern slopes near Aït Benhaddou.",
      "Always carry more water than you think you will need on Atlas treks — the dry mountain air at altitude dehydrates the body faster than most lowland walkers expect.",
    ],
    tourIds: ["atlas-mountains-trek-3day", "toubkal-summit-expedition-3day", "anti-atlas-berber-trek-2day", "ourika-valley-day-trip"],
    relatedDestinations: ["marrakech", "sahara-desert", "chefchaouen"],
  },
  {
    slug: "fes",
    name: "Fes",
    heroImage: "/moroccan-handicrafts.webp",
    subtitle: "Living Medieval City",
    country: "Morocco",
    region: "Northern Morocco",
    about: `Fes is, without question, the most intellectually intoxicating city in Morocco — and arguably in the entire Arab world. Founded in 789 CE by Moulay Idris I, it is one of the oldest continuously inhabited cities on Earth, and its medina, Fes el-Bali, is the world's largest living medieval urban centre: a square kilometre of medieval streets, madrasas, mosques, workshops and souks that has remained essentially unchanged in plan and purpose since the ninth century. The University of Al-Qarawiyyin, established in 859 CE, is recognised by UNESCO as the oldest continuously operating university in the world. In Fes, history is not a performance put on for tourists — it simply never stopped.

The scale and complexity of Fes el-Bali is overwhelming by design. The medina contains over 9,000 lanes, many so narrow that two fully laden donkeys cannot pass simultaneously, and the city's famous faux guide problem exists precisely because genuine disorientation is built into the urban fabric. This is not a city that reveals itself quickly or willingly; its rewards accumulate with patience, return visits and the guidance of someone who knows which carved wooden door opens onto a twelfth-century medersa courtyard and which leads to a dead end. The Bou Inania Madrasa and the Al-Attarine Madrasa are the finest examples of Marinid-era Islamic architecture in Morocco, their tilework, carved cedar and stucco reaching a complexity and refinement that was never surpassed.

The crafts of Fes are equally extraordinary. The ancient tanneries of Chouara — where leather hides have been cured and dyed in stone vats using methods unchanged since the eleventh century — are the city's most famous sight and one of the most viscerally memorable in Africa. The dyers' quarter, the brass-workers' quarter and the woodcarvers' quarter each contribute to an economic ecosystem that has been producing luxury goods for the Moroccan court for over a thousand years. Buying a handmade leather bag or hand-painted ceramic tile in Fes carries a weight of authenticity that no factory-produced souvenir can approach.

The Fes el-Jdid quarter, built alongside the original medina in the thirteenth century as the Marinid royal enclosure, and the Mellah — the old Jewish quarter — add further historical layers to the city. The Ville Nouvelle, constructed by the French protectorate administration in the early twentieth century, provides the bars, restaurants and wide boulevards that allow the mind to rest after the intense immersion of the medina. Together, these layers make Fes the most richly documented city in Morocco — and the one that most generously rewards those prepared to look beyond the surface.`,
    bestMonths: ["March", "April", "May", "October", "November"],
    avgTempSummer: "36°C",
    avgTempWinter: "8°C",
    airport: "Fes-Saïss Airport (FEZ)",
    language: "Arabic, French, Tamazight",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Fes el-Bali Medina",
        description:
          "The world's largest living medieval urban centre and a UNESCO World Heritage Site — 9,000 lanes, ancient mosques and active craftsmen's quarters unchanged since the Marinid era.",
        icon: "FaMosque",
      },
      {
        title: "Chouara Tanneries",
        description:
          "The ancient leather tanneries of Fes, where hides are dyed in stone vats using the same plant-based methods employed since the eleventh century, remain one of Africa's most extraordinary living industrial sites.",
        icon: "FaIndustry",
      },
      {
        title: "Al-Qarawiyyin University",
        description:
          "Founded in 859 CE, it is recognised by UNESCO as the world's oldest continuously operating university — a living testament to the intellectual primacy of medieval Fes.",
        icon: "FaUniversity",
      },
      {
        title: "Bou Inania Madrasa",
        description:
          "A fourteenth-century Quranic school whose courtyard represents the absolute pinnacle of Moroccan decorative arts — zellige tilework, carved cedar and stucco of almost supernatural complexity.",
        icon: "FaLandmark",
      },
      {
        title: "Artisan Workshops",
        description:
          "Fes is Morocco's artisan capital, with active workshops producing hand-woven silk fabrics, painted ceramics, embossed silverware and hand-tooled leather for over a millennium.",
        icon: "FaHammer",
      },
      {
        title: "Merenid Tombs",
        description:
          "The hilltop ruins of the Marinid royal tombs offer the most complete panoramic view of Fes el-Bali, particularly magical at dusk when the call to prayer rises from hundreds of minarets simultaneously.",
        icon: "FaEye",
      },
    ],
    thingsToDo: [
      {
        title: "Fes Imperial City Full-Day Tour",
        description:
          "A comprehensive guided tour of Fes el-Bali covering the Chouara tanneries, Bou Inania Madrasa, Al-Qarawiyyin quarter, the dyers' souks and a private artisan workshop visit — the most thorough introduction to Morocco's medieval capital.",
        image: "/moroccan-handicrafts.webp",
        duration: "Full day",
        price: "From £70 per person",
      },
      {
        title: "Artisan Craft Workshop Experience",
        description:
          "Spend a morning learning the fundamentals of Fassi tilework with a master zellige craftsman, creating your own geometric pattern to take home — a genuinely memorable hands-on introduction to Morocco's greatest craft tradition.",
        image: "/moroccan-tiles.webp",
        duration: "3 hours",
        price: "From £50 per person",
      },
      {
        title: "Evening Medina Food Tour",
        description:
          "Explore the street-food culture of Fes after dark — pastilla, harira, fried sardines, honey-drenched chebakia and fresh-pressed juices — with a local guide who knows every stall worth stopping at.",
        image: "/moroccan-handicrafts.webp",
        duration: "3 hours",
        price: "From £40 per person",
      },
      {
        title: "Fes to Chefchaouen Day Trip",
        description:
          "A full-day excursion from Fes north to the blue-painted medina of Chefchaouen through the cedar forests of the Middle Atlas — one of Morocco's great scenic drives.",
        image: "/destinations/chefchaouen.webp",
        duration: "Full day",
        price: "From £85 per person",
      },
    ],
    gettingThere:
      "Fes-Saïss Airport (FEZ) receives direct flights from London Stansted, Paris Orly, Amsterdam, Brussels and a growing number of European destinations. The airport is located 15 kilometres south of the city; grand taxis to the medina cost approximately 150–200 MAD and take around 30 minutes. Fes is also well connected by train from Casablanca (3.5 hours) and Marrakech (approximately 7 hours, with a change). The ONCF rail network is the most comfortable overland option for inter-city travel. CTM and Supratours buses also serve Fes from all major Moroccan cities.",
    localTips: [
      "Engage a certified medina guide from the tourist office near Bab Bou Jeloud for your first day — the medina is genuinely disorienting and a good guide will save hours of frustrated circling.",
      "The tannery views are best seen from the leather shop balconies above Chouara — shops provide a sprig of mint to hold under your nose against the smell, which is authentic and considerable.",
      "Visit the Al-Attarine spice market on a weekday morning when the stalls are freshest and the merchants most willing to explain what they sell and how it is used.",
      "The Merenid Tombs at sunset are free to visit and offer the finest panoramic view of the medina — arrive 30 minutes before sunset to claim a good position.",
      "Fes restaurants in the Ville Nouvelle are generally better value for dinner than medina riads — save the riad experience for lunch, when the atmospheric courtyard settings justify the premium.",
      "Bargaining in the Fes souks follows different rules to Marrakech — opening prices are often closer to the final price and vendors respond better to appreciation than aggressive counter-offers.",
    ],
    tourIds: ["fes-imperial-city-2day", "chefchaouen-blue-city-2day"],
    relatedDestinations: ["chefchaouen", "marrakech", "sahara-desert"],
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    heroImage: "/moroccan-tiles.webp",
    subtitle: "The Wind City",
    country: "Morocco",
    region: "Atlantic Coast",
    about: `Essaouira occupies its own elegant category in the Moroccan imagination: a fortified Atlantic port city of whitewashed walls and blue-painted shutters, perched on a windswept headland where the Saharan trade winds meet the cold upwelling of the Atlantic Ocean. Its Portuguese-influenced ramparts, laid out by the eighteenth-century architect Théodore Cornut under Sultan Mohammed ben Abdallah, are recognised as a UNESCO World Heritage Site and constitute one of the finest examples of European military architecture on the African continent — a reminder that Essaouira was, for centuries, Morocco's most important Atlantic port and the terminus of the great trans-Saharan gold and salt routes.

The medina of Essaouira is compact, manageable and dramatically different in atmosphere from the imperial cities of the interior. The streets are straight and wind-scoured, lined with blue-shuttered whitewashed houses and galleries selling the work of the city's thriving contemporary art scene. Essaouira has been an artists' colony since the 1960s and 70s, when Jimi Hendrix, Cat Stevens and Frank Zappa all made famous visits; the tradition continues today in a dozen permanent galleries and studios. The gnawa music of Essaouira — descended from the spiritual healing traditions brought by West African enslaved peoples to Morocco — is one of the most distinctive and deeply affecting musical forms in Africa, and the annual Gnaoua World Music Festival draws performers and audiences from across the globe.

The port itself is a working fishing harbour whose blue and white vessels return each morning with the day's catch of sardines, sea bass and calamari. The fish market that operates beside the ramparts is one of the freshest and most theatrical in Morocco, and the row of grill restaurants that translates that morning's catch into lunch by noon offers some of the best and most honest seafood in the country. Eating grilled sardines on the ramparts with the Atlantic wind in your face and the sound of waves on the cannons is a Moroccan experience that has nothing to do with the desert or the souks — and is all the more valuable for it.

The beaches north and south of the city stretch for kilometres along an extraordinary arc of Atlantic coast. The constant trade winds that make Essaouira one of the windiest cities in North Africa are precisely what attract the international windsurfing and kitesurfing community that has made the city one of the world's great boardsports destinations. For those who prefer a more contemplative relationship with the ocean, the argan forest — a UNESCO biosphere reserve — begins just south of the city, and the sight of goats climbing the thorny argan trees in search of fruit remains one of the odder and more photogenic spectacles in Moroccan rural life.`,
    bestMonths: ["April", "May", "June", "September", "October"],
    avgTempSummer: "22°C",
    avgTempWinter: "14°C",
    airport: "Essaouira Mogador Airport (ESU) or Marrakech Menara Airport (RAK) — 2.5 hours by road",
    language: "Arabic, French, Tamazight",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Skala de la Ville Ramparts",
        description:
          "The eighteenth-century Atlantic sea ramparts of Essaouira, bristling with bronze cannons and offering sweeping ocean views, are one of the finest examples of Portuguese-influenced military architecture in Africa.",
        icon: "FaShieldAlt",
      },
      {
        title: "Fresh Seafood at the Port",
        description:
          "Choose your fish directly from the morning catch at the harbour market and have it grilled on the spot at one of the port-side restaurants — the freshest seafood in Morocco.",
        icon: "FaFish",
      },
      {
        title: "Gnawa Music",
        description:
          "The hypnotic, bass-heavy spiritual music of the Gnawa people — descended from sub-Saharan African traditions — is Essaouira's greatest cultural gift, heard nightly in medina courtyards and celebrated at the annual world festival.",
        icon: "FaMusic",
      },
      {
        title: "Windsurfing & Kitesurfing",
        description:
          "The consistent Atlantic trade winds that gave Essaouira its nickname make this one of the world's premier windsurfing and kitesurfing destinations, with a thriving community of international schools.",
        icon: "FaWind",
      },
      {
        title: "Art Galleries & Craft Studios",
        description:
          "Essaouira's long tradition as an artists' colony has produced one of Morocco's most vibrant gallery scenes, alongside master craftsmen producing marquetry and thuya wood objects unique to the region.",
        icon: "FaPaintBrush",
      },
      {
        title: "Argan Forest & Goats",
        description:
          "The UNESCO-protected argan forest south of Essaouira shelters the famous tree-climbing goats of Morocco's Souss region — an improbable sight that happens to produce the world's most prized beauty oil.",
        icon: "FaLeaf",
      },
    ],
    thingsToDo: [
      {
        title: "Essaouira Coastal Discovery Day",
        description:
          "A full-day exploration of the medina, ramparts, port and argan forest with a local guide, including lunch at a port-side seafood grill and a visit to a women-run argan cooperative.",
        image: "/moroccan-tiles.webp",
        duration: "Full day",
        price: "From £60 per person",
      },
      {
        title: "Windsurfing Introduction Lesson",
        description:
          "Learn the basics of windsurfing on the consistent Atlantic swells south of the medina with a qualified international instructor — all equipment provided, beginners very welcome.",
        image: "/imgplaceholder.webp",
        duration: "3 hours",
        price: "From £65 per person",
      },
      {
        title: "Gnawa Music & Medina Evening",
        description:
          "An evening tour of Essaouira's cultural heart — the craftsmen's quarter, a sunset walk on the ramparts and a private concert of Gnawa music in a medina courtyard.",
        image: "/moroccan-tiles.webp",
        duration: "4 hours",
        price: "From £45 per person",
      },
      {
        title: "Agadir & Essaouira Coastal Tour",
        description:
          "A two-day tour combining the beach resort of Agadir with the historic charm of Essaouira — a complete portrait of Morocco's Atlantic coast from the palm-lined promenade to the wind-scoured ramparts.",
        image: "/imgplaceholder.webp",
        duration: "2 Days",
        price: "From £140 per person",
      },
    ],
    gettingThere:
      "Essaouira Mogador Airport (ESU) receives a limited number of direct charter and seasonal flights from Europe; for most visitors, Marrakech Menara Airport (RAK) is the more practical entry point. From Marrakech, Essaouira is 2.5–3 hours by road on a well-maintained highway; private transfers, Supratours buses and CTM coaches all make this journey several times daily. The Supratours bus is particularly convenient as it connects directly from Marrakech railway station. Agadir airport is roughly 2.5 hours to the south and provides another option for those combining the coast with an Agadir beach holiday.",
    localTips: [
      "The wind in Essaouira is a genuine feature of everyday life — bring a windproof jacket regardless of the season, as the Atlantic gusts can be cold even in July.",
      "The best gnawa music is heard spontaneously in the medina rather than in the tourist restaurants — wander the lanes around Place Moulay Hassan on weekend evenings.",
      "Essaouira's thuya wood marquetry is unique to the region — the fragrant burl wood is worked into exquisite boxes, frames and furniture that make genuinely exceptional souvenirs.",
      "Book port-side grill tables for lunch rather than dinner — the fish is freshest at midday when the morning catch is being served, and sunset at the ramparts is better enjoyed on foot.",
      "The beach south of the city (between the medina and Diabat village) is the best for walking; the beach north is sandier and better for swimming when the wind drops.",
      "The argan cooperatives on the road to Agadir sell genuine cold-pressed argan oil at roughly half the price of the medina shops — worth the short detour.",
    ],
    tourIds: ["essaouira-coastal-2day", "agadir-beach-surf-3day"],
    relatedDestinations: ["agadir", "marrakech", "casablanca"],
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    heroImage: "/moroccan-handicrafts.webp",
    subtitle: "Morocco's Modern Heart",
    country: "Morocco",
    region: "Atlantic Coast / Central-West Morocco",
    about: `Casablanca is the city that most Moroccan cities are not: modern, commercial, forward-looking and unapologetically cosmopolitan. As Morocco's largest city and economic capital — home to around four million people and generating nearly a third of the country's GDP — Casablanca is the engine of contemporary Moroccan life, and the contrast with the medieval imperial cities of the interior could hardly be more striking. Wide European-style boulevards lined with Art Deco buildings, a glittering waterfront corniche, a haute cuisine restaurant scene and a nightlife culture that owes as much to Paris and Beirut as to Marrakech: Casablanca is Morocco at its most globally connected and self-confidently urban.

The city's defining monument is the Hassan II Mosque, completed in 1993 to the designs of the French architect Michel Pinseau on a specially constructed promontory jutting into the Atlantic Ocean. With a minaret standing 210 metres tall — the tallest religious structure in Africa and the second tallest in the world — and an interior prayer hall that can accommodate 25,000 worshippers beneath a retractable roof, the Hassan II Mosque is one of the greatest architectural achievements of the twentieth century and the only mosque in Morocco open to non-Muslim visitors. Standing on its polished marble esplanade with the Atlantic surging against the foundations and the old medina visible in the distance, you feel the full ambition of what Morocco has chosen to be in the post-colonial era.

Casablanca's Art Deco heritage is less celebrated than it deserves. In the 1920s and 30s, under the French protectorate, the city's European quarter was developed with a density of Art Deco and Mauresque architecture — a Franco-Moroccan fusion style that combined modernist geometry with Islamic decorative motifs — that rivals Miami and Buenos Aires for concentration and quality. The Place Mohammed V, the Cathédrale du Sacré-Coeur (now a cultural centre), the Marché Central and the great administrative buildings along the Boulevard Mohammed V are all extraordinary examples of this forgotten urban heritage, and several dedicated architectural walking tours now bring them to the attention they deserve.

Beyond the monuments, Casablanca rewards those who engage with it on local terms. The Ain Diab corniche, where young Casawis surf Atlantic swells, walk on Friday evenings and crowd the excellent seafood restaurants, has a genuine energy that no tourist itinerary captures. The Quartier Habous — a planned medina built by the French in the 1930s with traditional Moroccan craftsmanship — is a quieter and less pressured shopping experience than the old imperial city souks. And the city's position as the main international gateway to Morocco makes it an inevitable first or last stop on any itinerary, deserving more than the overnight stay most visitors allow it.`,
    bestMonths: ["March", "April", "May", "October", "November"],
    avgTempSummer: "27°C",
    avgTempWinter: "13°C",
    airport: "Mohammed V International Airport (CMN)",
    language: "Arabic, French, Tamazight",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Hassan II Mosque",
        description:
          "One of the architectural wonders of the modern world — a mosque for 25,000 worshippers built on the Atlantic Ocean, with the world's tallest minaret at 210 metres, and uniquely open to non-Muslim visitors.",
        icon: "FaMosque",
      },
      {
        title: "Art Deco Architecture",
        description:
          "Casablanca's 1920s and 30s European quarter contains one of the finest concentrations of Art Deco and Mauresque architecture in the world — a largely undiscovered urban treasure.",
        icon: "FaCity",
      },
      {
        title: "Ain Diab Corniche",
        description:
          "The Atlantic waterfront promenade of Casablanca, lined with seafood restaurants, beach clubs and surf spots where the city's young residents live their most public life.",
        icon: "FaWater",
      },
      {
        title: "Quartier Habous",
        description:
          "The planned medina built by the French in the 1930s with traditional Moroccan craftsmanship — more relaxed than old medina souks and home to excellent pastry shops and bookshops.",
        icon: "FaStore",
      },
      {
        title: "Museum of Moroccan Judaism",
        description:
          "The only museum of Jewish culture and history in an Arab country — a remarkable institution that documents the two-thousand-year Jewish presence in Morocco with great care and respect.",
        icon: "FaLandmark",
      },
      {
        title: "Contemporary Art Scene",
        description:
          "Casablanca has Morocco's most active contemporary art scene, anchored by the Villa des Arts and a network of private galleries showing North African and international artists.",
        icon: "FaPaintBrush",
      },
    ],
    thingsToDo: [
      {
        title: "Casablanca & Rabat Imperial Tour",
        description:
          "A full-day circuit combining Morocco's modern economic capital with the elegantly proportioned capital city of Rabat — the Hassan II Mosque, the Mohammed V Mausoleum, the Chellah necropolis and the Oudaïas Kasbah.",
        image: "/moroccan-handicrafts.webp",
        duration: "Full day",
        price: "From £75 per person",
      },
      {
        title: "Art Deco Architecture Walking Tour",
        description:
          "A curated two-hour walking tour of Casablanca's extraordinary 1920s and 30s Mauresque and Art Deco buildings with an architectural historian who knows every hidden lobby and rooftop terrace.",
        image: "/moroccan-handicrafts.webp",
        duration: "2 hours",
        price: "From £35 per person",
      },
      {
        title: "Hassan II Mosque Guided Visit",
        description:
          "An in-depth guided tour of the interior of the Hassan II Mosque, the only mosque in Morocco accessible to non-Muslims — covering its architecture, craftsmanship and spiritual significance.",
        image: "/moroccan-tiles.webp",
        duration: "2 hours",
        price: "From £20 per person",
      },
      {
        title: "Casablanca Seafood & Culture Evening",
        description:
          "An evening programme combining a sunset walk on the Ain Diab corniche, aperitifs in a rooftop bar and a seafood dinner at one of the city's acclaimed Atlantic-coast restaurants.",
        image: "/moroccan-handicrafts.webp",
        duration: "4 hours",
        price: "From £55 per person",
      },
    ],
    gettingThere:
      "Mohammed V International Airport (CMN) is Morocco's principal international gateway, with direct flights from London Heathrow, London Gatwick, Paris CDG, Amsterdam, Madrid, New York JFK and dozens of other global hubs. The airport is located 30 kilometres south-east of the city centre; an ONCF express train connects the airport to Casa Port and Casa Voyageurs stations in approximately 45 minutes, departing hourly. Grand taxis to the city centre cost around 250–300 MAD. Casablanca is also the hub of Morocco's excellent national rail network, with direct trains to Marrakech (3 hours), Fes (3.5 hours) and Rabat (1 hour).",
    localTips: [
      "The Hassan II Mosque is the only mosque in Morocco where non-Muslims can visit the interior — book guided tours online in advance as time-slots fill quickly, especially on weekends.",
      "The Quartier Habous pastry shops are the best in Casablanca — arrive mid-morning for the freshest output of gazelle horns, briouats and mhancha almond cakes.",
      "Casablanca's restaurant scene is the most sophisticated in Morocco; the fish restaurants on the Ain Diab corniche serve Atlantic seafood at a quality and variety not found inland.",
      "The Art Deco walking tour of the city centre is best done early morning before the heat and traffic build — the ornate facades and interior lobbies of the 1930s buildings are most accessible before offices open.",
      "Casablanca taxi drivers frequently run unofficial fixed-rate routes for tourists — agree a price or insist on the meter; an Uber/Careem app is strongly recommended as an alternative.",
      "Allow at least two nights in Casablanca rather than treating it as a transit stop — the city genuinely rewards a slower engagement and most visitors who stay longer are glad they did.",
    ],
    tourIds: ["casablanca-rabat-2day"],
    relatedDestinations: ["essaouira", "agadir", "fes"],
  },
  {
    slug: "agadir",
    name: "Agadir",
    heroImage: "/imgplaceholder.webp",
    subtitle: "Atlantic Coast Paradise",
    country: "Morocco",
    region: "Souss-Massa / Atlantic South",
    about: `Agadir offers a profoundly different Moroccan experience from the imperial cities and mountain landscapes that define most visitors' itineraries, and that difference is precisely its appeal. Almost entirely rebuilt after the catastrophic 1960 earthquake that killed 15,000 people and levelled the original city, modern Agadir is a planned resort city of wide boulevards, contemporary architecture and one of the finest urban beaches in Africa: a ten-kilometre arc of fine golden sand sheltered by a natural headland, with Atlantic swells that keep the surf schools busy and lifeguards on duty through the summer months, and water warm enough to swim in for seven months of the year.

The resort infrastructure of Agadir is by Moroccan standards exceptional. The Boulevard du 20 Août along the beachfront is lined with international hotels, beach clubs and restaurants serving everything from traditional Moroccan tagines to sushi and Italian pasta; the Marina district, completed in the 2000s, has added a European-style harbour promenade of boutiques, seafood brasseries and cocktail bars. This is Morocco for visitors who want a genuinely comfortable beach holiday rather than the cultural and sensory intensity of Fes or Marrakech — and there is nothing wrong with that; the distinction is honest and valuable.

Beyond the beach, Agadir's hinterland is among the most biologically rich in Morocco. The Souss-Massa National Park, just 45 kilometres to the south, protects a stunning expanse of Atlantic wetlands, riverine forests and coastal cliffs that serve as a critical wintering ground for the critically endangered northern bald ibis and a year-round habitat for flamingos, ospreys and dozens of migratory bird species. The argan forest of the Souss valley — the only place in the world where the argan tree grows naturally — spreads inland from the coast, and the Amazigh villages of the Anti-Atlas Mountains begin just an hour's drive to the east.

The reconstruction of Agadir also preserved one heritage site of great poignancy: the Oufella hill above the city, crowned with the ruins of the original sixteenth-century kasbah whose walls still bear the Arabic inscription "If you destroy the silver, you can recreate it; if you destroy the men, you cannot recreate them." Illuminated at night, the ruined kasbah silhouette against the Atlantic sky is a reminder that beneath this bright, modern resort city lies a history of extraordinary depth — and that Morocco, in all its forms, is never quite as simple as it first appears.`,
    bestMonths: ["April", "May", "June", "September", "October", "November"],
    avgTempSummer: "26°C",
    avgTempWinter: "17°C",
    airport: "Agadir Al Massira Airport (AGA)",
    language: "Arabic, Tamazight (Souss), French",
    currency: "Moroccan Dirham (MAD)",
    timezone: "GMT+1 (WET/WEST)",
    highlights: [
      {
        title: "Agadir Beach",
        description:
          "A ten-kilometre arc of fine golden Atlantic sand, sheltered and cleaned daily, with professional surf schools, beach clubs and a promenade among the finest of any African city.",
        icon: "FaUmbrellaBeach",
      },
      {
        title: "Souss-Massa National Park",
        description:
          "A spectacular Atlantic coast national park protecting flamingo lagoons, cliff-nesting ospreys and the last wild population of the critically endangered northern bald ibis — a birding destination of international significance.",
        icon: "FaDove",
      },
      {
        title: "Agadir Marina",
        description:
          "A modern Mediterranean-style harbour development with boutiques, seafood restaurants, cocktail bars and deep-sea fishing charter boats — the most cosmopolitan dining and leisure district in southern Morocco.",
        icon: "FaAnchor",
      },
      {
        title: "Anti-Atlas Mountain Villages",
        description:
          "The ancient Amazigh villages of the Anti-Atlas, just an hour from the coast, offer terraced almond orchards, argan forests and a mountain culture entirely distinct from the High Atlas and entirely unchanged by tourism.",
        icon: "FaMountain",
      },
      {
        title: "Oufella Kasbah Ruins",
        description:
          "The haunting hilltop ruins of the sixteenth-century kasbah, preserved as a memorial to the 1960 earthquake, illuminated at night with the original Arabic inscription still visible on the ancient walls.",
        icon: "FaLandmark",
      },
      {
        title: "Surfing & Water Sports",
        description:
          "The consistent Atlantic swells of the Agadir coast support a thriving surf culture, with breaks suitable for beginners and intermediates and a year-round water sports scene including windsurfing, kitesurfing and jet skiing.",
        icon: "FaWater",
      },
    ],
    thingsToDo: [
      {
        title: "Agadir Beach & Souss-Massa National Park",
        description:
          "A full-day combination of morning beach time and an afternoon wildlife excursion into the Souss-Massa National Park, with a specialist ornithologist guide and boat trip on the Massa lagoon.",
        image: "/imgplaceholder.webp",
        duration: "Full day",
        price: "From £65 per person",
      },
      {
        title: "Surf Lesson for Beginners",
        description:
          "A two-hour introduction to Atlantic surfing on the gentle beach breaks south of the city with a qualified surf instructor — all equipment provided, no experience necessary.",
        image: "/imgplaceholder.webp",
        duration: "2 hours",
        price: "From £40 per person",
      },
      {
        title: "Anti-Atlas Berber Villages Day Trip",
        description:
          "Drive into the Anti-Atlas Mountains to visit traditional Amazigh villages in the argan-forested valleys, meet a women's cooperative producing argan oil and return via the scenic Tiznit silversmith town.",
        image: "/destinations/atlas.webp",
        duration: "Full day",
        price: "From £70 per person",
      },
      {
        title: "Deep-Sea Fishing Charter",
        description:
          "Join a morning deep-sea fishing trip from Agadir Marina targeting Atlantic tuna, swordfish and sea bass, with the day's catch prepared as lunch on board by the crew.",
        image: "/imgplaceholder.webp",
        duration: "Half day",
        price: "From £80 per person",
      },
    ],
    gettingThere:
      "Agadir Al Massira Airport (AGA) is one of Morocco's busiest international airports, receiving direct flights from London Gatwick, London Heathrow, Manchester, Birmingham, Dublin, Paris, Amsterdam and other European cities, with particularly strong capacity from UK and Irish charter operators. The airport is located 25 kilometres east of the city centre; taxis cost approximately 200–250 MAD and take around 30 minutes. Shared grand taxis are cheaper and widely available. The journey from Marrakech by road takes approximately 3 hours on a well-maintained highway through the Tizi n'Test pass or the faster inland route via Aït Benhaddou.",
    localTips: [
      "Agadir's beach runs are patrolled by lifeguards only in the central resort section — swim between the flags and be aware that the Atlantic current can be strong at either end of the bay.",
      "The Talborjt neighbourhood just inland from the beach has excellent local restaurants and cafés at a fraction of the beachfront prices — it is where Agadir residents actually eat.",
      "The souk el-Had, Agadir's vast weekly Sunday market, is the largest covered market in Morocco and sells everything from Saharan spices to electronics — genuinely worth the cultural plunge.",
      "Agadir is the capital of Morocco's argan oil industry; buying from the women's cooperatives directly (rather than resort hotel shops) guarantees both authenticity and a fair price for the producers.",
      "The Atlantic water temperature at Agadir is warm enough for comfortable swimming from May to October — outside these months, a wetsuit is advisable for anything beyond a brief dip.",
      "For the best seafood in the city, bypass the tourist marina restaurants and head to the fish market on the port road, where grill stalls cook your choice of fish to order at midday.",
    ],
    tourIds: ["agadir-beach-surf-3day", "anti-atlas-berber-trek-2day"],
    relatedDestinations: ["essaouira", "atlas-mountains", "marrakech"],
  },
];
