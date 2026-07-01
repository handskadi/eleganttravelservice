export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string;
  accommodation?: string;
};

export type TourDetail = {
  tourId: string;
  slug: string;
  gallery: string[];
  itinerary: ItineraryDay[];
  meetingPoint: string;
  mapLocation: string;
  minAge?: number;
  physicalLevel: string;
};

export const tourDetails: TourDetail[] = [
  // ─── SAHARA 3-DAY ───────────────────────────────────────────────────────────
  {
    tourId: "sahara-3day-marrakech",
    slug: "sahara-3day-marrakech",
    gallery: [
      "/destinations/sahara.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/moroccan-tiles.webp",
      "/background/hero-desert-image.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate — Gateway to the South",
        description:
          "Your adventure begins with an early-morning departure from Marrakech, crossing the High Atlas via the dramatic Tizi n'Tichka pass (2,260 m). As the landscape shifts from cedar forest to hammada plains, you descend toward Ouarzazate — Morocco's 'Hollywood of the desert'. Stop at the UNESCO ksar of Ait Ben Haddou for lunch and exploration before checking in to your riad in Ouarzazate for the night.",
        activities: [
          "Depart Marrakech at 07:30 from Djemaa el-Fna",
          "Tizi n'Tichka mountain pass (2,260 m) viewpoint stop",
          "Ait Ben Haddou ksar guided walk",
          "Lunch at a traditional Amazigh restaurant",
          "Explore Kasbah Taourirt in Ouarzazate",
          "Dinner and overnight in Ouarzazate riad",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Riad in Ouarzazate",
      },
      {
        day: 2,
        title: "Draa Valley, Dades Gorges & Arrival at the Erg",
        description:
          "After breakfast, wind east along the Route of a Thousand Kasbahs through the Draa Valley — Morocco's longest river valley, flanked by towering date palms and medieval mud-brick fortresses. Stop at the Valley of Roses near Kelaat M'Gouna, where damask roses bloom in spring and rosewater perfumes every breeze. Continue through the tight switchbacks of Dades Gorges (the 'monkey fingers' rock formations are unmissable) before arriving in Merzouga at sunset. A Tuareg-robed camel driver meets you at the dune's edge for your camel trek into Erg Chebbi's golden sea.",
        activities: [
          "Drive through the Draa Valley palmeraie",
          "Stop at the Valley of Roses — rosewater distillery visit",
          "Dades Gorges scenic walk and 'monkey fingers' rock photo stop",
          "Arrive Merzouga village for mint tea welcome",
          "Sunset camel trek into Erg Chebbi (45 minutes)",
          "Traditional Berber dinner in the camp",
          "Gnawa music performance around the campfire",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury desert camp, Erg Chebbi",
      },
      {
        day: 3,
        title: "Sunrise Dunes, Sandboarding & Return to Marrakech",
        description:
          "Your guide wakes you before dawn for the short walk to the summit of a 150-metre dune, where the Sahara's silence is broken only by the wind shaping the crests. Watch the sky ignite in layers of violet, orange and gold as the sun heaves over the Algerian border. After a camp breakfast, spend the morning sandboarding the steep northern face before climbing back aboard your camels for the return ride. Lunch in Erfoud, then a scenic return drive to Marrakech, arriving by late evening.",
        activities: [
          "Pre-dawn dune hike for Sahara sunrise",
          "Sandboarding on Erg Chebbi's northern face",
          "Traditional Berber breakfast in camp",
          "Return camel ride to Merzouga",
          "Lunch in Erfoud — visit fossil market",
          "Scenic drive back via Todra Gorge (optional stop)",
          "Arrive Marrakech approximately 20:00",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech (opposite Café de France)",
    mapLocation: "Merzouga, Errachidia Province, Morocco",
    minAge: 6,
    physicalLevel: "Moderate — some walking on soft sand required",
  },

  // ─── HOT AIR BALLOON ────────────────────────────────────────────────────────
  {
    tourId: "hot-air-balloon-marrakech",
    slug: "hot-air-balloon-marrakech",
    gallery: [
      "/destinations/hot-air-baloon-marrakech.webp",
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/moroccan-tiles.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise Flight Over Marrakech & Atlas Mountains",
        description:
          "Picked up from your hotel in the dark before dawn, you're driven 20 km south to the launch site in the Haouz plain as the horizon begins to glow. Ground crew inflate the envelope while your pilot briefs the group, then you climb into the wicker basket and lift off just as the first light gilds the minarets. For the next 60 minutes you drift silently over a patchwork of olive groves, red-earth villages, and market gardens, with the snow-capped peaks of the Atlas rising to the south and the silhouette of Marrakech stretching to the north. Landing wherever the wind wills, you're met by the chase crew and transferred to a traditional Berber khaima (tent) for a seated breakfast of harcha bread, amlou (almond-argan dip), honey, and mint tea. The pilot signs your flight certificate and raises a celebratory glass of Moroccan orange juice.",
        activities: [
          "Hotel pickup between 05:00–05:30",
          "Transfer to launch site in the Haouz plain",
          "Pre-flight briefing and balloon inflation",
          "60-minute sunrise flight (approx. 07:00–08:00)",
          "Low-level passes over Berber villages and palmeraie",
          "Atlas Mountain panorama from altitude",
          "Landing and traditional Berber breakfast",
          "Flight certificate presentation",
          "Return transfer to Marrakech (by 10:00)",
        ],
        meals: "Traditional Berber breakfast included",
      },
    ],
    meetingPoint: "Hotel pickup — provide your accommodation address at booking",
    mapLocation: "Haouz Plain, south of Marrakech, Morocco",
    minAge: 5,
    physicalLevel: "Easy — ability to stand for 60 minutes required",
  },

  // ─── CHEFCHAOUEN BLUE ───────────────────────────────────────────────────────
  {
    tourId: "chefchaouen-blue-city-2day",
    slug: "chefchaouen-blue-city-2day",
    gallery: [
      "/destinations/chefchaouen.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & the Blue Labyrinth",
        description:
          "Arriving from Fes or Tangier through the green folds of the Rif Mountains, Chefchaouen appears as if an artist has dipped the whole hillside in indigo. Your guide leads you through the medina's winding blue-washed lanes — the blue, locals explain, keeps away mosquitoes, represents the sky and sea, and was introduced by Jewish refugees in the 1930s. You'll visit Plaza Uta el-Hammam, the town's main square anchored by a 15th-century kasbah, photograph the famous staircase draped in flower pots, and duck into cooperatives selling hand-loomed woollen djellabas and hand-painted pottery. Dinner at a Jebala restaurant — try msemen crêpes drizzled with wild honey and smen butter before retiring to your riad.",
        activities: [
          "Arrive Chefchaouen, check into riad",
          "Guided walking tour of the blue medina",
          "Plaza Uta el-Hammam and the Kasbah Museum",
          "Photography at the iconic 'blue staircase'",
          "Artisan cooperative visit — wool weaving and pottery",
          "Spice and herb souk exploration",
          "Dinner at local Jebala restaurant",
        ],
        meals: "Dinner included",
        accommodation: "Traditional riad in Chefchaouen medina",
      },
      {
        day: 2,
        title: "Rif Mountains Hike & Return Journey",
        description:
          "After a breakfast of amlou, fresh goat cheese, and fig jam on the riad rooftop — with a view across terracotta roofs to the Rif ridgeline — your guide leads a half-day hike on the trail above the city toward the Spanish Mosque. The panorama from the mosque's crumbling walls across the blue medina and Rif valleys is one of Morocco's most photographed vistas. Descend for a final wander through the souks before departure.",
        activities: [
          "Rooftop riad breakfast",
          "Morning hike to the Spanish Mosque viewpoint",
          "Panoramic photography of the blue medina",
          "Free time to browse artisan shops",
          "Lunch at own expense (tagine recommendation provided)",
          "Departure transfer to Fes or Tangier",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Bab el-Ain Gate, Chefchaouen Medina (transfer from Fes or Tangier arranged)",
    mapLocation: "Chefchaouen, Chefchaouen Province, Morocco",
    minAge: 4,
    physicalLevel: "Easy — light uphill walking on Day 2",
  },

  // ─── ATLAS TREK ─────────────────────────────────────────────────────────────
  {
    tourId: "atlas-mountains-trek-3day",
    slug: "atlas-mountains-trek-3day",
    gallery: [
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/destinations/chefchaouen.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Imlil to Aremdt — Into the Berber Heartland",
        description:
          "A 90-minute shared minibus from Marrakech deposits you in Imlil (1,740 m), the main trailhead for High Atlas trekking. After fitting walking poles and meeting your certified mountain guide, the trail climbs through terraced walnut and cherry orchards to the village of Aremdt. You overnight in a traditional stone-and-timber mountain gîte, where a steaming pot of Berber harira soup and warm khobz bread await you.",
        activities: [
          "Transfer from Marrakech to Imlil",
          "Guide briefing and equipment check",
          "Trek Imlil to Aremdt via Ait Benhaddou trail (4 hours, ~500 m ascent)",
          "Pass through terraced orchards of walnut, cherry, and apple",
          "Village visit — mint tea with local family",
          "Dinner and overnight at mountain gîte in Aremdt",
        ],
        meals: "Dinner included",
        accommodation: "Mountain gîte, Aremdt village (1,900 m)",
      },
      {
        day: 2,
        title: "Tizi n'Mzik Pass & Remote Village Stays",
        description:
          "The day's centrepiece is the Tizi n'Mzik pass (2,489 m), a lung-testing climb repaid by staggering views north over the cedar forests and south toward Toubkal's unmistakable pyramid. Mules carry the heavier packs, freeing you to stride. Descend to the hamlet of Azzaden Valley, where an isolated mountain lodge serves a feast of roasted lamb, couscous, and fresh-picked mint tea. Evenings here are magnificently silent — just wind in the juniper, a crescent moon, and more stars than most people see in a lifetime.",
        activities: [
          "Pre-dawn start — breakfast before 06:30",
          "Climb to Tizi n'Mzik pass (2,489 m)",
          "Summit panorama: Toubkal massif and Azzaden Valley",
          "Descent to Azzaden Valley (approx. 6–7 hours total)",
          "Wildflower identification walk with guide",
          "Traditional Berber lunch en route",
          "Overnight mountain lodge, Azzaden Valley",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Mountain lodge, Azzaden Valley",
      },
      {
        day: 3,
        title: "Azzaden Valley to Imlil — Homeward Through Olive Groves",
        description:
          "The final day brings a gentler loop back to Imlil through lower-altitude terraces of olive and almond trees, with views across the valley to villages clinging to impossible slopes. Your guide points out medicinal plants used in traditional Amazigh medicine. Lunch at a family-run café in Imlil before the afternoon transfer back to Marrakech.",
        activities: [
          "Morning walk through olive and almond terraces",
          "Lower Atlas village — traditional pottery demonstration",
          "Flora walk — Amazigh medicinal plant identification",
          "Return to Imlil (4 hours, 700 m descent)",
          "Lunch at Imlil café",
          "Transfer back to Marrakech (arr. ~17:00)",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Bab er-Rob Gate, Marrakech (transport to Imlil arranged)",
    mapLocation: "Imlil, Al Haouz Province, Morocco",
    minAge: 12,
    physicalLevel: "Difficult — 6–8 hours walking per day, significant ascent/descent",
  },

  // ─── FES IMPERIAL ───────────────────────────────────────────────────────────
  {
    tourId: "fes-imperial-city-2day",
    slug: "fes-imperial-city-2day",
    gallery: [
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
      "/destinations/chefchaouen.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "The Ancient Medina — Tanneries, Madrasas & Living History",
        description:
          "Fes el-Bali (Old Fes) is the world's largest car-free urban area and a UNESCO World Heritage Site — a 9th-century city virtually unchanged by time. Your expert local guide — a medina native — leads you through lanes barely wide enough for two donkeys abreast. The highlight is Chouara Tannery: from a leather merchant's rooftop terrace you look down into a honeycomb of stone vats filled with natural dyes and softening pigeon dung, as tanners wade barefoot through the coloured pits. The 14th-century Madrasa Bou Inania stuns with its carved cedarwood, zellij tilework, and stucco calligraphy. End the afternoon in the copper souk as hammering craftsmen beat traditional lanterns.",
        activities: [
          "Guided walk through Fes el-Bali medina",
          "Madrasa Bou Inania — carved cedar and zellij tour",
          "Chouara Tannery rooftop viewing with free mint sprigs",
          "Al-Attarine Souk — spice and perfume market",
          "Copper and brass artisan workshop",
          "Lunch at a riad restaurant — pastilla (pigeon pie) tasting",
          "Check in to riad accommodation in the medina",
          "Dinner and evening free",
        ],
        meals: "Lunch included",
        accommodation: "Traditional riad, Fes el-Bali medina",
      },
      {
        day: 2,
        title: "Royal Palace, Jewish Quarter & Artisan Cooperatives",
        description:
          "Morning begins at the Royal Palace's iconic golden brass doors — one of the most photographed facades in Morocco — before descending to the Mellah (Jewish Quarter) where 16th-century synagogues and Hispano-Moorish balconies recall a layered heritage. A visit to the Borj Nord arms museum provides context for the Marinid dynasty's rise. Finish at a government-certified artisan cooperative where you watch master craftsmen inlay thuya wood and paint blue-and-white Fassi pottery.",
        activities: [
          "Dar el-Makhzen Royal Palace gate photography",
          "Mellah Jewish Quarter — synagogue visit and balcony architecture",
          "Borj Nord Museum of Arms",
          "Fassi pottery workshop — hand-painting demonstration",
          "Thuya woodwork cooperative",
          "Lunch at own expense (guide recommendations provided)",
          "Free afternoon for souk shopping",
          "Transfer to your onward destination",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Bab Bou Jeloud (Blue Gate), Fes el-Bali",
    mapLocation: "Fes el-Bali, Fes-Meknès Region, Morocco",
    minAge: 4,
    physicalLevel: "Easy — mostly walking on uneven medina cobbles",
  },

  // ─── ESSAOUIRA COASTAL ──────────────────────────────────────────────────────
  {
    tourId: "essaouira-coastal-2day",
    slug: "essaouira-coastal-2day",
    gallery: [
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
      "/moroccan-handicrafts.webp",
      "/amazigh.webp",
      "/imgplaceholder.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Portuguese Ramparts, Souks & the Atlantic",
        description:
          "Three hours southwest of Marrakech, the Atlantic wind-drenched port of Essaouira feels like another world. Its whitewashed medina — enclosed by 18th-century Portuguese-era sea walls — earned UNESCO status in 2001. Your afternoon introduction covers the main Skala de la Ville cannon-lined ramparts where the ocean crashes below in spray and thunder. The wood-carvers' souk is world-famous for thuya burr work: bowls, chess sets, and inlaid boxes carved from the fragrant local hardwood. Dinner at a harbour-front restaurant — pick a whole sea bream from the fishermen's ice trays and have it grilled on the spot.",
        activities: [
          "Arrive Essaouira, check into riad",
          "Guided medina walk — Portuguese-era architecture",
          "Skala de la Ville sea ramparts and cannon gallery",
          "Thuya wood artisan cooperative workshop",
          "Fish souk and harbour-front exploration",
          "Grilled fresh catch dinner at harbour restaurant",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Essaouira medina",
      },
      {
        day: 2,
        title: "Argan Oil Cooperative & Atlantic Beach Walk",
        description:
          "Begin with a rooftop breakfast as seagulls circle the blue-and-white fishing boats below. Your guide drives you 15 km inland to a women-run argan oil cooperative, where you watch the labour-intensive hand-cracking of argan nuts and learn how Morocco's 'liquid gold' is cold-pressed into cosmetic and culinary oils. Return to Essaouira for a long walk on the beach — 5 km of Atlantic sand backed by windswept araucaria pines — before departure.",
        activities: [
          "Rooftop riad breakfast",
          "Argan oil women's cooperative visit and demonstration",
          "Argan product tasting — culinary vs. cosmetic",
          "Return to Essaouira for beach walk",
          "Essaouira beach — optional kitesurfing or horse-riding at own cost",
          "Lunch at own expense in the medina",
          "Departure transfer to Marrakech",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Bab Doukkala, Essaouira (transfer from Marrakech arranged)",
    mapLocation: "Essaouira, Marrakech-Safi Region, Morocco",
    minAge: 3,
    physicalLevel: "Easy — flat medina and beach walking",
  },

  // ─── MERZOUGA LUXURY ────────────────────────────────────────────────────────
  {
    tourId: "merzouga-luxury-camp-2day",
    slug: "merzouga-luxury-camp-2day",
    gallery: [
      "/destinations/sahara.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/background/hero-desert-image.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Private Transfer, Champagne Sunset & Gourmet Desert Dinner",
        description:
          "Your private chauffeur-driven 4x4 collects you from Marrakech for a scenic transfer through the High Atlas and along the Route of a Thousand Kasbahs. Arriving at the luxury camp as the dunes glow apricot in the late afternoon, you're welcomed with chilled champagne and rose petals. Your private tent suite — with en-suite rainfall shower, king bed, Moroccan lanterns, and a private terrace — overlooks Erg Chebbi's highest dunes. Your personal camel guide arrives at golden hour for a private sunset ride. Back at camp, your private chef prepares a seven-course Moroccan feast under a star-studded sky: pastilla, lamb mechoui slow-roasted on embers, and pastries scented with orange blossom.",
        activities: [
          "Private chauffeur pickup from Marrakech hotel (08:00)",
          "Scenic High Atlas and Draa Valley transfer with photo stops",
          "Champagne and fresh fruit welcome on arrival",
          "Check in to luxury private tent suite",
          "Private sunset camel ride with personal guide",
          "Argan oil bath amenities and hammam soap in tent",
          "Seven-course gourmet dinner with private chef",
          "Private Gnawa musician and optional stargazing with guide",
        ],
        meals: "All meals by private chef",
        accommodation: "Luxury en-suite tent suite, Erg Chebbi",
      },
      {
        day: 2,
        title: "Spa at Sunrise, Sandboarding & Leisurely Return",
        description:
          "Wake naturally — no alarms — and step onto your private terrace as the dunes shift from pewter to gold with the rising sun. A spa therapist arrives at your tent for a 60-minute hot stone and argan oil massage. After a leisurely late breakfast, the afternoon is yours: sandboard the dunes, explore nearby Merzouga village on foot, or simply lie in a hammock slung between palms. Departure after a final mint tea at your own pace, returning to Marrakech through the dramatic Todra Gorge.",
        activities: [
          "Private terrace sunrise and morning coffee",
          "60-minute in-tent hot stone and argan oil massage",
          "Late champagne brunch served in your tent",
          "Sandboarding on Erg Chebbi — equipment provided",
          "Optional visit to Merzouga village",
          "Farewell mint tea ceremony",
          "Todra Gorge stop on return journey",
          "Arrive Marrakech approximately 20:00",
        ],
        meals: "All meals by private chef",
      },
    ],
    meetingPoint: "Hotel pickup in Marrakech (address provided at booking)",
    mapLocation: "Erg Chebbi, Merzouga, Errachidia Province, Morocco",
    minAge: 5,
    physicalLevel: "Easy — all activity is optional and at your own pace",
  },

  // ─── DADES GORGES ───────────────────────────────────────────────────────────
  {
    tourId: "dades-draa-valley-3day",
    slug: "dades-draa-valley-3day",
    gallery: [
      "/amazigh.webp",
      "/destinations/sahara.webp",
      "/morocco-culture.webp",
      "/moroccan-tiles.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate — Atlas Crossing & Kasbah Route",
        description:
          "Your private 4x4 departs Marrakech early, crossing the High Atlas via the Tizi n'Tichka pass before descending into the southern pre-Saharan plains. Ouarzazate — dubbed 'the door of the desert' — is your first night, with time to explore Kasbah Taourirt and the UNESCO ksar of Ait Ben Haddou nearby.",
        activities: [
          "Depart Marrakech 07:00 via Tizi n'Tichka pass",
          "Viewpoint stop at the pass summit (2,260 m)",
          "Ait Ben Haddou UNESCO ksar guided walk",
          "Lunch at traditional restaurant",
          "Visit Kasbah Taourirt and CLA Film Studios",
          "Check in and dinner in Ouarzazate",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Hotel in Ouarzazate",
      },
      {
        day: 2,
        title: "Rose Valley, Dades Gorges & Monkey Fingers Rock",
        description:
          "The route east threads through the Valley of Roses (Kelaat M'Gouna), where in April the whole valley turns pink. Continue to Dades Gorges — named for the Dades River that carved a 100-km canyon through russet limestone. The iconic 'monkey fingers' rock pinnacles frame a series of hairpin bends cut by the French in the 1930s. Overnight at a kasbah guesthouse perched directly over the gorge.",
        activities: [
          "Valley of Roses — rosewater distillery tour",
          "Kelaat M'Gouna rose souk (seasonal: April–May)",
          "Boulmane Dades scenic viewpoint",
          "Dades Gorges hike — monkey fingers rock trail (2 hours)",
          "Gorge road hairpin bends scenic drive",
          "Overnight kasbah guesthouse above the gorge",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Kasbah guesthouse, Dades Gorges",
      },
      {
        day: 3,
        title: "Draa Valley Palmeraie & Return to Marrakech",
        description:
          "The final day explores the vast Draa Valley — Morocco's longest river corridor — where ancient ksour (fortified villages) punctuate an unbroken green ribbon of date palms stretching to the horizon. Stop at a working camel farm and the historic town of Zagora before the long haul north through the Anti-Atlas back to Marrakech.",
        activities: [
          "Morning drive to Draa Valley via Agdz",
          "Palmeraie walk — ancient irrigation channels (khettara)",
          "Zagora town and Museum of Saharan Caravans",
          "Camel farm visit",
          "Lunch in Zagora",
          "Return to Marrakech via Anti-Atlas (arrive ~20:00)",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech",
    mapLocation: "Dades Gorges, Draa-Tafilalet Region, Morocco",
    minAge: 5,
    physicalLevel: "Easy — moderate 2-hour gorge walk on Day 2, rest by vehicle",
  },

  // ─── AIT BEN HADDOU ─────────────────────────────────────────────────────────
  {
    tourId: "ait-ben-haddou-day-trip",
    slug: "ait-ben-haddou-day-trip",
    gallery: [
      "/morocco-culture.webp",
      "/amazigh.webp",
      "/destinations/sahara.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "UNESCO Ksar, Movie Sets & Ouarzazate Studios",
        description:
          "The fortified village of Ait Ben Haddou has been a UNESCO World Heritage Site since 1987 — and a Hollywood favourite since the 1960s. Gladiator's Zucchabar, Game of Thrones' Yunkai, Lawrence of Arabia, and dozens more were filmed in its towering mud-brick towers. Your expert guide takes you inside the living ksar, where a handful of Amazigh families still inhabit the lower quarters. Climb to the 11th-century granary (ighrem) at the summit for a panorama across the oued and the kasbah landscape. After lunch, visit the nearby Atlas Corporation Studios in Ouarzazate for a behind-the-scenes look at the sets still standing from blockbuster productions.",
        activities: [
          "Depart Marrakech at 07:30",
          "Tizi n'Tichka pass mountain stop",
          "Ait Ben Haddou ksar — full guided tour (2.5 hours)",
          "Climb to 11th-century granary for panoramic views",
          "Film trivia and movie-set identification with guide",
          "Traditional Amazigh lunch in the village",
          "Atlas Corporation Studios guided tour",
          "Return to Marrakech (arrive ~20:00)",
        ],
        meals: "Lunch included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech",
    mapLocation: "Ait Ben Haddou, Ouarzazate Province, Morocco",
    minAge: 5,
    physicalLevel: "Easy — uphill climb to granary on uneven surfaces",
  },

  // ─── MARRAKECH FOOD ─────────────────────────────────────────────────────────
  {
    tourId: "marrakech-food-souk-halfday",
    slug: "marrakech-food-souk-halfday",
    gallery: [
      "/destinations/hot-air-baloon-marrakech.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech on a Plate — Souks, Street Food & Spices",
        description:
          "Morocco's culinary capital earns that title in every lane of the medina. Your certified food guide navigates the souks at the golden hour when vendors are setting up their stalls, leading you through 12+ tastings that chart the full spectrum of Moroccan cuisine. Begin with a Marrakechi breakfast — msemen (layered flatbread) with local honey and amlou argan-almond dip — before hitting the spice souk where pyramids of ras el hanout, preserved lemons, and rose petals perfume the air. You'll taste your way through harira soup ladled from brass pots, grilled merguez at a street brazier, steaming sheep's head (mechoui) if you're feeling adventurous, and the famous snail broth (babbouche) from Djemaa el-Fna. The afternoon ends with a private tagine cooking demonstration, and you go home with a hand-blended spice kit.",
        activities: [
          "Meet at Riad Zitoun el-Kedim at 09:00",
          "Msemen flatbread and amlou breakfast tasting",
          "Spice souk tour — ras el hanout blending demonstration",
          "Harira soup tasting at a century-old stall",
          "Street merguez and grilled kefta tasting",
          "Olive and preserved lemon market stall",
          "Djemaa el-Fna — snail broth and street food",
          "Rfissa or bastilla tasting at a souk restaurant",
          "Tagine cooking demonstration (30 minutes)",
          "Hand-blended spice kit to take home",
          "Mint tea farewell at a rooftop café",
        ],
        meals: "All tastings (12+ dishes) included",
      },
    ],
    meetingPoint: "Riad Zitoun el-Kedim Lane, Marrakech Medina (GPS coordinates sent on booking)",
    mapLocation: "Marrakech Medina, Marrakech, Morocco",
    minAge: 6,
    physicalLevel: "Easy — flat medina walking, approximately 4 km",
  },

  // ─── QUAD AGAFAY ────────────────────────────────────────────────────────────
  {
    tourId: "quad-biking-agafay-3hrs",
    slug: "quad-biking-agafay-3hrs",
    gallery: [
      "/destinations/sahara.webp",
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Agafay Stone Desert Quad Adventure",
        description:
          "The Agafay desert is a geological wonder — not sand dunes but a moonscape of rolling limestone plateaus and dried riverbeds just 40 minutes from Marrakech, with the Atlas Mountains forming a dramatic backdrop. Your expert quad instructor fits you with helmet and goggles, then runs a 20-minute safety briefing and practice circuit before you set out on the main trail. The route winds through dried oueds (river beds), over rocky ridges, and past Berber nomad camps where goats pick at sparse scrub. A natural plateau viewpoint provides the definitive Atlas photograph. Return to base for a traditional mint tea ceremony.",
        activities: [
          "Hotel transfer from Marrakech (included)",
          "Safety briefing and equipment fitting",
          "20-minute supervised practice circuit",
          "2-hour guided quad trail across Agafay plateau",
          "Dried oued (river bed) crossing",
          "Atlas Mountain panorama viewpoint",
          "Berber nomad camp visit",
          "Traditional mint tea ceremony at base camp",
          "Return transfer to Marrakech",
        ],
        meals: "Mint tea and Moroccan pastries included",
      },
    ],
    meetingPoint: "Hotel pickup — Marrakech city addresses only",
    mapLocation: "Agafay Desert, Al Haouz Province, Morocco",
    minAge: 16,
    physicalLevel: "Moderate — ability to control a motorised vehicle required",
  },

  // ─── HAMMAM LUXURY ──────────────────────────────────────────────────────────
  {
    tourId: "royal-hammam-spa-marrakech",
    slug: "royal-hammam-spa-marrakech",
    gallery: [
      "/moroccan-tiles.webp",
      "/moroccan-handicrafts.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Royal Hammam Ritual — Cleanse, Restore & Revive",
        description:
          "Hammams have been the beating heart of Moroccan social life since the 9th century. This luxury experience takes place within a beautifully restored 17th-century riad in the Marrakech medina, its marble-floored chambers lit by pierced copper lanterns. The ritual follows the traditional sequence: first a 20-minute steam to open the pores in the warm room (beit awwal), then the kessa — a vigorous scrub with a kessa mitt that rolls off dead skin in ribbons while your attendant works from shoulders to toes. Ghassoul (rhassoul) volcanic clay from the Middle Atlas is applied as a mineral-rich mask before a 45-minute full-body argan oil massage in a private suite. The session closes with a ceremonial mint tea and fresh-squeezed orange juice, plus a small parcel of hammam products to take home.",
        activities: [
          "Welcome mint tea and riad orientation",
          "20-minute steam room preparation (beit awwal)",
          "Traditional kessa body scrub with exfoliating mitt",
          "Ghassoul rhassoul volcanic clay mask (face and body)",
          "Rose water rinse",
          "45-minute full-body argan oil massage",
          "Mint tea and orange juice ceremony",
          "Hammam products gift parcel to take home",
        ],
        meals: "Mint tea, pastries, and fresh juice included",
      },
    ],
    meetingPoint: "Riad reception — address provided on booking confirmation",
    mapLocation: "Marrakech Medina, Marrakech, Morocco",
    minAge: 16,
    physicalLevel: "Easy — full passive wellness experience",
  },

  // ─── TOUBKAL SUMMIT ─────────────────────────────────────────────────────────
  {
    tourId: "toubkal-summit-expedition-3day",
    slug: "toubkal-summit-expedition-3day",
    gallery: [
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/destinations/chefchaouen.webp",
      "/moroccan-handicrafts.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Imlil to Toubkal Refuge — Ascending to the Mountain's Shoulder",
        description:
          "After an early transfer from Marrakech to Imlil (1,740 m), your certified mountain guide leads the ascent toward the Neltner Refuge (3,207 m). The trail climbs through the last Berber villages — Aroumd and Sidi Chamharouch, where a riverside shrine is draped in coloured fabric — before breaking above the tree line into a boulder-strewn glacial valley. Arriving at the stone refuge in the late afternoon, you share the communal kitchen with trekkers from a dozen countries.",
        activities: [
          "Transfer Marrakech to Imlil (depart 06:30)",
          "Trek briefing and equipment check with certified guide",
          "Imlil to Aroumd village (1.5 hours)",
          "Sidi Chamharouch shrine visit",
          "Above tree-line boulder field ascent",
          "Arrive Neltner Refuge (3,207 m) — approx 5–6 hours total",
          "Refuge dinner — communal Berber meal",
          "Early night in preparation for summit day",
        ],
        meals: "Packed lunch and refuge dinner included",
        accommodation: "Toubkal Neltner Refuge (3,207 m)",
      },
      {
        day: 2,
        title: "Summit Day — 4,167 m, North Africa's Rooftop",
        description:
          "A 04:00 alarm. Headlamps click on across the refuge. Your guide serves hot coffee and harcha bread before the pre-dawn ascent begins. The first section crosses the South Cwm — a steep scree slope that demands short, deliberate steps — before the final rocky ridge to the summit. On a clear morning you can see the Atlantic to the west, the Sahara to the south, and the Rif Mountains to the north. The summit cairn, draped in Amazigh flags and prayer ribbons, is one of Morocco's most emotional moments. Descend back to Imlil the same afternoon.",
        activities: [
          "Pre-dawn start at 04:00 from refuge",
          "South Cwm scree ascent",
          "Summit ridge approach",
          "Toubkal summit (4,167 m) — group photograph at the cairn",
          "360-degree panorama: Atlas, Sahara, and Atlantic",
          "Descent to Neltner Refuge for lunch",
          "Continued descent to Imlil (arrive 16:00–17:00)",
        ],
        meals: "Early breakfast and refuge lunch included",
        accommodation: "Toubkal Neltner Refuge (second night, pre-descent)",
      },
      {
        day: 3,
        title: "Imlil Valley Walk & Return to Marrakech",
        description:
          "The final morning rewards tired legs with a gentle valley walk through the cherry and walnut orchards of the Imlil valley, descending past terraced fields to the village. A celebratory tagine lunch and mint tea with your guide before the transfer back to Marrakech.",
        activities: [
          "Leisurely breakfast at Imlil gîte",
          "Valley orchards walk — cherry, walnut, and apple trees",
          "Berber village farewell visit",
          "Celebratory tagine lunch in Imlil",
          "Transfer to Marrakech (arrive ~15:00)",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Bab er-Rob Gate, Marrakech (transfer to Imlil arranged)",
    mapLocation: "Jebel Toubkal, Toubkal National Park, Morocco",
    minAge: 14,
    physicalLevel: "Difficult — 7–9 hours on summit day, high altitude, scree terrain. Prior hiking experience required.",
  },

  // ─── CASABLANCA RABAT ────────────────────────────────────────────────────────
  {
    tourId: "casablanca-rabat-2day",
    slug: "casablanca-rabat-2day",
    gallery: [
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Casablanca — Hassan II Mosque & Art Deco Corniche",
        description:
          "Morocco's economic capital blends French Art Deco grandeur with ultra-modern ambition. Your day begins at the Hassan II Mosque — completed in 1993, it is the world's third-largest mosque, with a 210-metre minaret visible from 50 km out at sea and a vast prayer hall built partially over the Atlantic. The guided interior tour reveals Italian marble floors, Zouak-painted cedar ceilings, and a retractable roof. Lunch along the Corniche boulevard before exploring the Habous neighbourhood — a planned 1930s quarter that fuses French colonial planning with traditional Moroccan craft souks.",
        activities: [
          "Transfer from Marrakech or Casablanca Mohammed V Airport",
          "Hassan II Mosque interior guided tour",
          "Corniche Atlantic promenade walk",
          "Art Deco city centre architecture walk",
          "Habous neighbourhood and its covered souks",
          "Lunch at a Casablanca brasserie",
          "Hotel check-in and evening at own leisure",
        ],
        meals: "Lunch included",
        accommodation: "Hotel in Casablanca",
      },
      {
        day: 2,
        title: "Rabat — Royal Capital, Kasbah & Modern Morocco",
        description:
          "A 45-minute train ride connects Morocco's two largest cities. Rabat — the royal administrative capital — exudes a quieter, more refined atmosphere. The morning visits the Kasbah des Oudayas, a 12th-century fortified quarter whose blue-and-white lanes rival Chefchaouen, with a serene Andalusian garden and a view across the Bou Regreg estuary to the medieval city of Salé. The Hassan Tower — an unfinished 12th-century minaret and its forest of 200 columns — is one of Morocco's most haunting monuments. Afternoon: Mohammed V Mausoleum, the ornate marble tomb of Morocco's beloved independence king.",
        activities: [
          "Train journey Casablanca to Rabat",
          "Kasbah des Oudayas — guided medina and Andalusian garden tour",
          "Oudayas estuary viewpoint across to Salé",
          "Hassan Tower and the unfinished mosque column field",
          "Mohammed V Mausoleum and Royal Guards ceremony",
          "Rabat Medina souk — free time",
          "Return transfer to your onward destination",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Casablanca Mohammed V Station or hotel pickup",
    mapLocation: "Casablanca and Rabat, Morocco",
    minAge: 4,
    physicalLevel: "Easy — mostly flat walking on paved surfaces",
  },

  // ─── AGADIR BEACH ───────────────────────────────────────────────────────────
  {
    tourId: "agadir-beach-surf-3day",
    slug: "agadir-beach-surf-3day",
    gallery: [
      "/imgplaceholder.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/destinations/atlas.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Surf Lessons & Atlantic Sunset",
        description:
          "Agadir's 10-kilometre crescent of golden sand — rebuilt after a devastating 1960 earthquake — is Morocco's most polished beach resort. Your first afternoon is spent with a certified surf instructor who reads the Atlantic swells and positions beginners on the gentle inside breaks. By sunset you'll be popping up on your board (or at least trying) as the sky turns tangerine behind the Anti-Atlas range.",
        activities: [
          "Airport or hotel check-in",
          "Riad orientation and beach orientation walk",
          "2-hour beginner surf lesson with certified instructor",
          "Beach volleyball and free swim",
          "Sunset walk along the Corniche",
          "Fresh seafood dinner at the harbour",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Agadir",
      },
      {
        day: 2,
        title: "Souss-Massa National Park & Flamingo Lagoon",
        description:
          "Morocco's most important coastal national park lies 40 km south of Agadir, where the Souss and Massa rivers meet the Atlantic in a complex of lagoons that host flamingos, spoonbills, and the critically endangered bald ibis. Your naturalist guide navigates the park's sand tracks to the lagoon hides. Return to Agadir for your second surf session in the afternoon.",
        activities: [
          "Transfer to Souss-Massa National Park",
          "Naturalist-guided flamingo and bald ibis lagoon walk",
          "Berber fishing village of Sidi Rbat visit",
          "Return to Agadir",
          "Second 2-hour surf lesson (intermediate techniques)",
          "Agadir old kasbah ruins at sunset",
        ],
        meals: "Breakfast and packed lunch included",
        accommodation: "Riad in Agadir",
      },
      {
        day: 3,
        title: "Argan Cooperative, Atlas Foothills & Departure",
        description:
          "A morning excursion into the foothills of the Anti-Atlas visits a women-run argan cooperative and the weekly souk at Aourir (known as 'banana village'). Return to Agadir for final beach time before departure.",
        activities: [
          "Women's argan cooperative — oil pressing demonstration",
          "Anti-Atlas foothills scenic drive",
          "Aourir banana village weekly souk",
          "Return to Agadir beach — free morning swim",
          "Lunch at own expense",
          "Departure transfer",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Agadir Al Massira Airport or Agadir city hotel",
    mapLocation: "Agadir, Souss-Massa Region, Morocco",
    minAge: 8,
    physicalLevel: "Easy — surf lessons are beginner-level",
  },

  // ─── BERBER VILLAGES ────────────────────────────────────────────────────────
  {
    tourId: "anti-atlas-berber-trek-2day",
    slug: "anti-atlas-berber-trek-2day",
    gallery: [
      "/amazigh.webp",
      "/destinations/atlas.webp",
      "/morocco-culture.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Anti-Atlas Ascent & Almond Orchard Villages",
        description:
          "The Anti-Atlas mountains south of Agadir are among Morocco's least-visited landscapes — a rugged terrain of pink granite ridges, terraced almond orchards, and ancient pre-Saharan trade routes that once connected the gold and salt caravans of sub-Saharan Africa. Your local Amazigh guide leads the ascent from Tiznit through the village of Tafraout, where enormous pink boulders dwarf the white-painted houses. Overnight homestay with a Berber family — an experience of extraordinary generosity: hand-rolled couscous, homemade goat cheese, and stories exchanged through your guide's translation.",
        activities: [
          "Transfer from Agadir to Tiznit (2 hours)",
          "Tiznit silver souk and ancient medina walls",
          "Anti-Atlas ascent via the Tafraout road",
          "Tafraout village and the painted rocks of Jean Verame",
          "Almond orchard walk with guide",
          "Welcome ceremony at host Amazigh family home",
          "Traditional couscous dinner with the family",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Berber family homestay, Anti-Atlas",
      },
      {
        day: 2,
        title: "Ancient Trade Routes & Return via Argan Forest",
        description:
          "Morning begins with a fresh flatbread and wild-honey breakfast with your host family before following an ancient caravan trail along a ridge with panoramic views of the Draa plain. Descend through the only argan forest on earth — goats climb the thorny trees to eat the berries, a sight unique to Morocco. Return to Agadir via Tiznit.",
        activities: [
          "Host family breakfast — traditional flatbreads and honey",
          "Ancient trade route ridge walk (3 hours)",
          "Panoramic viewpoint over the Anti-Atlas and Draa plain",
          "Descent through argan forest — climbing goats viewpoint",
          "Village well and irrigation system explanation",
          "Return to Tiznit and Agadir (arrive ~16:00)",
        ],
        meals: "Breakfast and packed lunch included",
      },
    ],
    meetingPoint: "Agadir hotel pickup or Tiznit main square",
    mapLocation: "Tafraout, Anti-Atlas Mountains, Souss-Massa Province, Morocco",
    minAge: 10,
    physicalLevel: "Moderate — 3–4 hour ridge walks on rocky trail",
  },

  // ─── OURIKA VALLEY ──────────────────────────────────────────────────────────
  {
    tourId: "ourika-valley-day-trip",
    slug: "ourika-valley-day-trip",
    gallery: [
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ourika Valley — Waterfalls, Berber Markets & Saffron",
        description:
          "An hour south of Marrakech, the Ourika Valley is where the city dwellers of the Red City escape the summer heat. The road climbs into the Atlas foothills past terraced fields of corn and barley irrigated by the Ourika River. On Monday mornings, the weekly Berber market at Aït Ourir fills with women in bright haiks selling produce, pottery, and spices. Your guide leads the 45-minute hike to the Setti Fatma waterfalls — a series of seven cascades — where the uppermost pools are reached by a scramble across boulders. En route visit a saffron cooperative at Tazarine village, where the world's most expensive spice is grown in tiny purple-flowered plots.",
        activities: [
          "Pickup from Marrakech hotel (08:00)",
          "Aït Ourir Monday Berber market (seasonal)",
          "Saffron cooperative visit — cultivation and harvest explanation",
          "Setti Fatma village arrival and lunch at riverside restaurant",
          "Hike to lower waterfalls (45 minutes)",
          "Optional scramble to upper cascades (for fit participants)",
          "Return to Marrakech (arrive ~17:00)",
        ],
        meals: "Lunch included",
      },
    ],
    meetingPoint: "Hotel pickup — Marrakech city addresses",
    mapLocation: "Ourika Valley, Al Haouz Province, Morocco",
    minAge: 5,
    physicalLevel: "Easy — optional moderate scramble to upper waterfalls",
  },

  // ─── TANGIER NORTH ──────────────────────────────────────────────────────────
  {
    tourId: "tangier-northern-morocco-2day",
    slug: "tangier-northern-morocco-2day",
    gallery: [
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
      "/moroccan-handicrafts.webp",
      "/destinations/chefchaouen.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tangier Kasbah, Medina & the International Zone",
        description:
          "Tangier has always been a city of legends — Paul Bowles, the Rolling Stones, the Beat Generation, Matisse, and Delacroix all passed through its smoky cafés and labyrinthine medina. Your guide starts at the Kasbah Museum housed in the 17th-century Dar el-Makhzen palace, whose Moorish courtyard contains one of Morocco's finest collections of Roman mosaics and Moroccan decorative arts. The medina's Petit Socco — once the most notorious square in Africa — still has the cafés where Burroughs and Ginsberg wrote. End the afternoon at the Grand Socco and the legation quarter, where Tangier's 'International Zone' history (1924–1956, when the city was governed by 13 nations simultaneously) comes alive.",
        activities: [
          "Arrive Tangier — hotel check-in",
          "Kasbah Museum (Dar el-Makhzen) guided tour",
          "Medina walk — Petit Socco and Beat Generation cafés",
          "American Legation Museum (America's oldest diplomatic property abroad)",
          "Grand Socco and the international zone architecture walk",
          "Dinner in the medina — harira, briouats, and kefta",
        ],
        meals: "Dinner included",
        accommodation: "Boutique hotel, Tangier",
      },
      {
        day: 2,
        title: "Cap Spartel, Hercules Caves & Two-Sea Meeting Point",
        description:
          "The northwestern tip of Africa is a short drive from Tangier. Cap Spartel marks the exact point where the Atlantic Ocean meets the Mediterranean Sea — the colour contrast between the two bodies of water is surprisingly visible on a clear day. Nearby, the Caves of Hercules are carved partially by nature and partially by centuries of Berber millstone cutting. The cave's opening, shaped like Africa in silhouette when viewed from inside, frames crashing waves.",
        activities: [
          "Morning drive to Cap Spartel lighthouse",
          "Atlantic-Mediterranean meeting point viewpoint",
          "Caves of Hercules guided visit",
          "Beach stop at Robinson Plage",
          "Lunch at Cap Spartel seafood restaurant",
          "Return to Tangier",
          "Optional ferry departure point to Spain (own cost)",
          "Transfer to onward destination or airport",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Tangier Ibn Battuta Airport or Tangier ferry terminal",
    mapLocation: "Tangier, Tanger-Tétouan-Al Hoceïma Region, Morocco",
    minAge: 4,
    physicalLevel: "Easy — mostly flat walking, one short cave descent",
  },

  // ─── PRIVATE RIAD ───────────────────────────────────────────────────────────
  {
    tourId: "private-riad-marrakech-2day",
    slug: "private-riad-marrakech-2day",
    gallery: [
      "/moroccan-tiles.webp",
      "/moroccan-handicrafts.webp",
      "/destinations/hot-air-baloon-marrakech.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Exclusive Riad Arrival, Private Medina Tour & Rooftop Dining",
        description:
          "Your private riad — an 18th-century merchant's home arranged around a central courtyard fountain — is yours entirely for 48 hours. After your concierge-level check-in, your personal guide leads an exclusive evening medina tour, opening doors that are closed to regular visitors: a private look inside a working Fassi pottery atelier, a small family palace off the tourist trail, and a perfumer who blends bespoke Moroccan attar using ancient recipes. Return for an intimate rooftop dinner under the stars: your private chef serves a three-course Moroccan feast built around the day's market finds.",
        activities: [
          "Private airport transfer in vintage Mercedes",
          "Champagne riad welcome with rose petals",
          "Exclusive evening medina tour — private access sites",
          "Private Fassi pottery atelier visit",
          "Bespoke perfume blending session",
          "Three-course private chef rooftop dinner",
          "Private storyteller — history of the medina by lantern light",
        ],
        meals: "Welcome drinks, dinner by private chef",
        accommodation: "Exclusive private riad (entire property, up to 6 guests)",
      },
      {
        day: 2,
        title: "Private Hammam, Palaces & Farewell Dinner",
        description:
          "Your second day begins with a private in-riad hammam ritual performed by a specialist attendant using riad-brand argan products. After brunch on the courtyard terrace, your guide takes you to the Saadian Tombs and the El Badi Palace — sites rarely explored in depth due to crowds, but your guide times the visit to early afternoon when tour buses depart. Return to the riad to relax by the courtyard plunge pool before your private farewell dinner.",
        activities: [
          "In-riad private hammam session (90 minutes)",
          "Courtyard brunch by private chef",
          "Private afternoon tour: Saadian Tombs and El Badi Palace",
          "Exclusive access — skip-the-line entry arranged",
          "Marrakech souk free time with guide",
          "Sunset cocktails on the riad rooftop",
          "Four-course private chef farewell dinner",
          "Private airport transfer",
        ],
        meals: "Brunch and dinner by private chef",
      },
    ],
    meetingPoint: "Marrakech Menara Airport (private transfer arranged)",
    mapLocation: "Marrakech Medina, Marrakech, Morocco",
    minAge: 0,
    physicalLevel: "Easy — all activities are at your own pace",
  },

  // ─── CAMEL SUNSET ───────────────────────────────────────────────────────────
  {
    tourId: "agafay-camel-sunset-2hrs",
    slug: "agafay-camel-sunset-2hrs",
    gallery: [
      "/destinations/sahara.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/destinations/atlas.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Agafay Desert Camel Trek at Sunset",
        description:
          "Just 30 minutes from Marrakech, the Agafay plateau transforms in the late afternoon as shadows lengthen across the limestone desert and the Atlas Mountains catch the last amber light. Your camel — a patient dromedary with a ceremonial saddle blanket and jingling brass bells — is brought to you by a Berber camel handler who has worked this route for decades. The 2-hour ride crosses dried riverbeds and crests rocky ridges, with photo stops as the sky deepens through orange to crimson. The experience ends at a nomad-style Berber tent where a charcoal brazier brews spiced mint tea sweetened with raw sugar cane, served with sesame cookies and dried dates.",
        activities: [
          "Hotel pickup from Marrakech (16:00)",
          "Transfer to Agafay desert launch point (40 minutes)",
          "Camel saddling and handler introduction",
          "2-hour guided sunset camel trek",
          "Atlas Mountain golden-hour photo stop",
          "Rocky oued (dry river) crossing",
          "Berber nomad tent — traditional mint tea ceremony",
          "Dried dates and sesame cookies",
          "Return transfer to Marrakech (arrive ~20:30)",
        ],
        meals: "Traditional mint tea and sweets included",
      },
    ],
    meetingPoint: "Hotel pickup — Marrakech city addresses only",
    mapLocation: "Agafay Desert, Al Haouz Province, Morocco",
    minAge: 4,
    physicalLevel: "Easy — seated throughout on camelback",
  },

  // ─── Grand Multi-Day Tours ───────────────────────────────────────────

  // ─── MARRAKECH MERZOUGA 3-DAY ───────────────────────────────────────────────
  {
    tourId: "marrakech-merzouga-3day",
    slug: "marrakech-merzouga-3day",
    gallery: [
      "/tours/marrakech-merzouga-3day.webp",
      "/destinations/sahara.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
      "/background/hero-desert-image.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate via Tizi n'Tichka and Ait Ben Haddou",
        description:
          "Departing Marrakech at 07:30, your 4x4 climbs into the High Atlas on the N9 highway, switchbacking through cedar and oak forest to the summit of the Tizi n'Tichka pass at 2,260 metres — a viewpoint commanding both the green northern slopes and the rust-red southern plains. Descending toward the pre-Saharan basin, you stop at the iconic UNESCO ksar of Ait Ben Haddou, a fortified mud-brick city rising in tiers above the Ounila River. Your guide leads a thorough walk through the inhabited lower quarters and up to the ancient granary at the summit. Arrive Ouarzazate for the night, with time to explore the art deco French colonial centre and the towering Kasbah Taourirt.",
        activities: [
          "Depart Djemaa el-Fna at 07:30",
          "Tizi n'Tichka pass (2,260 m) viewpoint and photo stop",
          "Ait Ben Haddou UNESCO ksar guided tour (2 hours)",
          "Climb to the 11th-century summit granary",
          "Traditional Amazigh lunch in the village",
          "Kasbah Taourirt exploration in Ouarzazate",
          "Check-in and dinner at riad in Ouarzazate",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Riad in Ouarzazate",
      },
      {
        day: 2,
        title: "Route of a Thousand Kasbahs, Todra Gorge and Arrival at Erg Chebbi",
        description:
          "The N10 east of Ouarzazate is known as the Route of a Thousand Kasbahs — a 300-kilometre corridor where every ridge seems to hold another mud-brick fortress crumbling magnificently against the sky. You pass through the Skoura oasis palmeraie, stop at the Rose Valley (Kelaat M'Gouna) where distilleries press tonnes of damask rose petals into rosewater each April, and enter the dramatic Todra Gorge — a 300-metre-deep slot canyon where the river runs cold and clear between sheer terracotta walls. Arriving at Merzouga village in the late afternoon, a Tuareg guide meets you at the dune's edge with a line of saddled camels. The 45-minute camel trek carries you into the rolling golden sea of Erg Chebbi as the sun sinks toward the Algerian border.",
        activities: [
          "Drive through Skoura oasis — ancient ksar of Amerhidil",
          "Valley of Roses distillery and rose souk visit",
          "Dades Gorges viewpoint and brief walk",
          "Todra Gorge canyon walk (1 hour along the river)",
          "Arrive Merzouga — mint tea welcome",
          "Sunset camel trek into Erg Chebbi (45 minutes)",
          "Luxury desert camp check-in",
          "Traditional Berber dinner and Gnawa music around the fire",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 3,
        title: "Sahara Sunrise, Sandboarding and Return to Marrakech",
        description:
          "Your Berber camp guide wakes you before first light for the short climb to a dune crest 150 metres above the camp. In absolute silence, the horizon dissolves from grey to violet to the most saturated amber as the sun clears the Algerian plateau. After a traditional camp breakfast of khobz bread, amlou paste, and honey, spend the morning sandboarding the steep northern face of the dunes. Ride the camels back to the vehicle then head west: lunch in Erfoud — Morocco's fossil capital — with a brief visit to a marble workshop where trilobites and ammonites emerge from polished stone. The long return drive via the Ziz Valley palm grove corridor delivers you to Marrakech by 20:00.",
        activities: [
          "Pre-dawn dune ascent for Sahara sunrise (04:30 wake-up)",
          "Sandboarding on Erg Chebbi's northern face",
          "Traditional Berber breakfast in camp",
          "Return camel ride to Merzouga",
          "Drive to Erfoud — fossil marble workshop visit",
          "Lunch in Erfoud",
          "Ziz Valley palm grove scenic drive",
          "Arrive Marrakech approximately 20:00",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech (near Cafe de France)",
    mapLocation: "Merzouga, Errachidia Province, Morocco",
    minAge: 5,
    physicalLevel: "Easy — minimal walking; camel ride on soft sand",
  },

  // ─── MARRAKECH FES DESERT 5-DAY ──────────────────────────────────────────────
  {
    tourId: "marrakech-fes-desert-5day",
    slug: "marrakech-fes-desert-5day",
    gallery: [
      "/tours/marrakech-fes-desert-5day.webp",
      "/destinations/sahara.webp",
      "/moroccan-handicrafts.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate — Atlas Crossing and Ait Ben Haddou",
        description:
          "An early departure from Marrakech sets you climbing the High Atlas on the N9 toward the Tizi n'Tichka pass. The landscape transformation is dramatic — cedars and oaks give way to arid hammada plain and, eventually, the warm-ochre kasbahs of the pre-Saharan south. Ait Ben Haddou — perhaps Morocco's most photographed monument — occupies the afternoon, followed by check-in at a riad in Ouarzazate and dinner overlooking the reservoir.",
        activities: [
          "Depart Marrakech 07:00",
          "Tizi n'Tichka pass (2,260 m) photo stop",
          "Ait Ben Haddou ksar — 2-hour guided tour",
          "Lunch at local restaurant near the ksar",
          "Kasbah Taourirt and CLA Film Studios walk-through",
          "Dinner and overnight Ouarzazate",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Riad in Ouarzazate",
      },
      {
        day: 2,
        title: "Valley of Roses, Dades Gorges and the Kasbah Road East",
        description:
          "The road east of Ouarzazate follows the pre-Saharan piedmont — a corridor of ksour, kasbahs, and fortified granaries strung between the Atlas foothills and the Saharan reg. The Valley of Roses around Kelaat M'Gouna is legendary: in May the valley floor turns pink and the air thickens with fragrance. Dades Gorges, carved by the Dades River over millennia into dramatic contorted limestone, offers a superb gorge walk before an overnight at a kasbah hotel with its own terrace above the canyon.",
        activities: [
          "Drive through Skoura palmeraie and Kasbah Amerhidil",
          "Valley of Roses — rosewater cooperative visit",
          "Rose souk exploration (seasonal: April to May)",
          "Boulmane Dades viewpoint",
          "Dades Gorges hike — monkey-fingers rock formations (2 hours)",
          "Check-in kasbah hotel above Dades Gorges",
          "Dinner on the terrace overlooking the canyon",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Kasbah hotel, Dades Gorges",
      },
      {
        day: 3,
        title: "Todra Gorge, Erfoud and Desert Camp at Erg Chebbi",
        description:
          "The Todra Gorge — just 20 km north of Tinghir — narrows to barely 10 metres at its most constricted point, the 300-metre walls of reddish-pink limestone so close you can touch both sides. A morning walk along the river through the gorge is one of Morocco's great sensory experiences: cold water, shade, swallows, and the echo of silence. Continue to Erfoud and the Tafilalet oasis before arriving at Merzouga for the camel trek into Erg Chebbi.",
        activities: [
          "Todra Gorge canyon walk (90 minutes, flat riverbed)",
          "Tinghir town palmeraie viewpoint",
          "Drive to Erfoud — trilobite fossil market",
          "Erfoud date cooperative and medjool palm groves",
          "Arrive Merzouga village",
          "Sunset camel trek into Erg Chebbi",
          "Luxury desert camp arrival — dinner and music",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 4,
        title: "Sahara Sunrise, Erfoud and Drive North toward Fes via Ifrane",
        description:
          "Pre-dawn dune ascent for the Sahara sunrise, followed by camp breakfast and the long drive north through the Ziz Valley gorges, across the Middle Atlas plateau, and through the alpine town of Ifrane — Morocco's Switzerland, with its red-roofed chalets and winter ski slopes. The cedar forest near Azrou is home to the Barbary macaque, Morocco's only wild primate; roadside troops often approach vehicles. Arrive Fes by evening.",
        activities: [
          "Pre-dawn Sahara sunrise from dune crest",
          "Sandboarding and morning desert walk",
          "Return camel ride to Merzouga",
          "Ziz Valley gorges scenic drive",
          "Midday break in Midelt — apple and mineral region",
          "Ifrane alpine town stop",
          "Barbary macaque cedar forest at Azrou",
          "Arrive Fes medina — check-in riad",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 5,
        title: "Fes el-Bali — Medina, Tanneries and Artisan Cooperatives",
        description:
          "A full day in Fes el-Bali, the 9th-century medina that UNESCO describes as the world's largest living medieval city. Your expert local guide threads through the 9,000 lanes, past the Al-Qarawiyyin University (founded 859 AD — the world's oldest continuously operating university), through the Al-Attarine spice souk, and up to the Chouara Tannery rooftop. The afternoon is yours for the artisan quarter — zellij tilework cutters, brass lantern beaters, and master embroiderers all work in workshops barely changed since the Marinid dynasty.",
        activities: [
          "Full-day guided Fes el-Bali medina tour",
          "Al-Qarawiyyin Mosque and university exterior",
          "Madrasa Bou Inania — carved cedar and zellij",
          "Chouara Tannery rooftop viewing",
          "Al-Attarine spice souk",
          "Artisan quarter — brass, zellij, and embroidery workshops",
          "Royal Palace gates — exterior photography",
          "Farewell dinner in the medina",
        ],
        meals: "Breakfast and dinner included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech",
    mapLocation: "Route: Marrakech — Ouarzazate — Dades — Merzouga — Fes, Morocco",
    minAge: 5,
    physicalLevel: "Easy — moderate gorge walks; vehicle travel covers most distances",
  },

  // ─── MOROCCO HIGHLIGHTS 7-DAY ───────────────────────────────────────────────
  {
    tourId: "morocco-highlights-7day",
    slug: "morocco-highlights-7day",
    gallery: [
      "/tours/morocco-highlights-7day.webp",
      "/moroccan-handicrafts.webp",
      "/destinations/chefchaouen.webp",
      "/destinations/sahara.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Casablanca — Hassan II Mosque and Rabat",
        description:
          "Landing in Casablanca, your guide meets you at Mohammed V Airport for the short drive to the Hassan II Mosque — the world's third largest, its 210-metre minaret a landmark visible 50 km out to sea. The interior tour reveals retractable roof mechanisms, Italian marble floors, and Zouak-painted cedar ceilings. A 45-minute train journey north brings you to Rabat, Morocco's quiet royal capital, for check-in and an evening stroll along the Bou Regreg waterfront.",
        activities: [
          "Airport pickup at Casablanca Mohammed V",
          "Hassan II Mosque interior guided tour",
          "Casablanca Corniche and Art Deco architecture walk",
          "Train to Rabat (45 minutes)",
          "Check-in at Rabat riad",
          "Evening Bou Regreg waterfront walk and dinner",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Rabat medina",
      },
      {
        day: 2,
        title: "Rabat — Kasbah, Hassan Tower and Drive to Chefchaouen",
        description:
          "Morning in Rabat covers the Kasbah des Oudayas — a 12th-century fortress perched above the Atlantic estuary, its Andalusian garden fragrant with orange and jasmine — and the hauntingly beautiful Hassan Tower, an unfinished 12th-century minaret surrounded by 200 broken column stumps. After the Mohammed V Mausoleum, a 3-hour drive north through the Rif Mountain foothills delivers you to Chefchaouen at sunset.",
        activities: [
          "Kasbah des Oudayas — medina and Andalusian garden",
          "Hassan Tower and unfinished mosque column field",
          "Mohammed V Mausoleum and royal guards",
          "Rabat medina souk — free exploration",
          "Drive north to Chefchaouen (3 hours)",
          "Arrive Chefchaouen — medina first impressions walk",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 3,
        title: "Chefchaouen — The Blue Medina and Spanish Mosque Hike",
        description:
          "Chefchaouen repays an unhurried morning. Your guide takes you through the famous painted lanes at dawn when the light is soft and blue and the medina is still quiet. Visit the Kasbah Museum in Plaza Uta el-Hammam, browse the wool-weaving cooperatives, and hike the 30-minute trail above the city to the Spanish Mosque viewpoint — one of Morocco's great panoramas, the blue medina spilling down the valley below.",
        activities: [
          "Dawn guided walk through the blue medina (07:00)",
          "Plaza Uta el-Hammam and the 15th-century kasbah",
          "Wool weaving and craft cooperative visit",
          "Hike to Spanish Mosque viewpoint (30 minutes each way)",
          "Panoramic photography of the medina",
          "Free afternoon for souk browsing and independent exploration",
          "Dinner at Jebala restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 4,
        title: "Drive to Fes via Ouazzane and Middle Atlas Cedar Forest",
        description:
          "The road south from Chefchaouen descends through the Rif foothills to the whitewashed hill town of Ouazzane, an important Sufi pilgrimage centre, before crossing the Middle Atlas toward Fes. Arrive by early afternoon for a riad check-in and a late evening guided walk through the illuminated lanes of Fes el-Bali.",
        activities: [
          "Morning departure from Chefchaouen",
          "Ouazzane hilltop town and Sufi shrine visit",
          "Middle Atlas drive through cork oak and cedar forest",
          "Arrive Fes and check in to medina riad",
          "Evening illuminated medina walk with guide",
          "Dinner at a traditional Fassi restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 5,
        title: "Fes Medina — Tanneries, Madrasas and Mellah",
        description:
          "A full day in Fes with your expert guide — beginning with the Madrasa Bou Inania and its extraordinary interior of carved stucco, zellij tilework, and cedarwood screen, before navigating to the Chouara Tannery rooftop. The afternoon covers the Mellah Jewish Quarter, the brass-beaters souk (where the sound of 50 men hammering in rhythm carries two streets), and a visit to a government-certified artisan cooperative for Fassi pottery and thuya woodwork.",
        activities: [
          "Madrasa Bou Inania interior tour",
          "Al-Attarine souk and preserved lemon stalls",
          "Chouara Tannery rooftop viewing",
          "Brass and copper artisan souk",
          "Mellah Jewish Quarter — synagogue and heritage architecture",
          "Royal Palace gates exterior",
          "Fassi pottery and thuya wood cooperative",
          "Final evening at leisure in the medina",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 6,
        title: "Erg Chebbi Sahara — Camel Trek and Desert Camp",
        description:
          "An early morning departure from Fes for the long drive south through the Ziz Valley. The Ziz gorges cut dramatically through the Jebel Aouli range — a series of oases strung like green beads along a dry canyon. Arrive Merzouga at sunset for the camel trek into Erg Chebbi. Tonight the Sahara sky above the camp is amongst the darkest and most star-filled in all of Morocco.",
        activities: [
          "Early departure from Fes (06:30)",
          "Midelt stop — apple market and mineral display",
          "Ziz Valley gorges scenic drive and viewpoint",
          "Arrive Merzouga — afternoon mint tea welcome",
          "Sunset camel trek into Erg Chebbi dunes",
          "Desert camp check-in — luxury en-suite tent",
          "Traditional Berber dinner and Gnawa music",
          "Guided stargazing with astronomical orientation",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented desert camp, Erg Chebbi",
      },
      {
        day: 7,
        title: "Sahara Sunrise, Ait Ben Haddou and Return to Marrakech",
        description:
          "The final day begins before dawn with a dune ascent for the Sahara sunrise, then south past the great ksar of Ait Ben Haddou, through the Tizi n'Tichka pass, and back into Marrakech by early evening — completing the grand circuit of Morocco's most extraordinary landscapes.",
        activities: [
          "Pre-dawn Sahara sunrise from dune crest",
          "Camp breakfast and camel return",
          "Drive west via Ouarzazate",
          "Ait Ben Haddou — brief stop and photographs",
          "Tizi n'Tichka High Atlas pass crossing",
          "Arrive Marrakech Djemaa el-Fna approximately 19:00",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Casablanca Mohammed V Airport (or Casablanca hotel pickup)",
    mapLocation: "Route: Casablanca — Rabat — Chefchaouen — Fes — Merzouga — Marrakech",
    minAge: 5,
    physicalLevel: "Easy — comfortable for all fitness levels; walking is mostly flat medina",
  },

  // ─── GRAND MOROCCO 10-DAY ────────────────────────────────────────────────────
  {
    tourId: "grand-morocco-10day",
    slug: "grand-morocco-10day",
    gallery: [
      "/tours/grand-morocco-10day.webp",
      "/destinations/sahara.webp",
      "/moroccan-handicrafts.webp",
      "/destinations/chefchaouen.webp",
      "/amazigh.webp",
      "/background/hero-desert-image.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Marrakech — Medina Orientation",
        description:
          "Your guide meets you at Marrakech Menara Airport and transfers you to your medina riad, a short walk from Djemaa el-Fna. An introductory evening walk through the square — the greatest open-air theatre on earth — acquaints you with the city's energy before an early night in preparation for ten extraordinary days.",
        activities: [
          "Airport pickup and riad check-in",
          "Riad orientation and tour briefing",
          "Djemaa el-Fna evening walk — snake charmers, storytellers, food stalls",
          "Dinner at a medina rooftop restaurant",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 2,
        title: "Marrakech — Palaces, Gardens and the Souks",
        description:
          "A full day in Marrakech with your expert guide: the Saadian Tombs (16th-century royal mausoleum discovered behind a plastered wall in 1917), the El Badi Palace ruins, the Bahia Palace with its ornate painted ceilings, and the Majorelle Garden — restored by Yves Saint Laurent and housing the Berber Museum. Afternoon free time to explore the souks unaided, with the evening returning to Djemaa el-Fna.",
        activities: [
          "Saadian Tombs guided tour",
          "El Badi Palace ruins and stork colonies",
          "Bahia Palace — carved cedarwood and zellij interiors",
          "Majorelle Garden and Berber Museum",
          "Ben Youssef Madrasa (if open)",
          "Souk exploration — carpet, spice, leather, and lamp quarters",
          "Djemaa el-Fna food stalls at dusk",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 3,
        title: "High Atlas Crossing via Tizi n'Tichka to Ouarzazate",
        description:
          "Departing early, the N9 road climbs 2,260 metres through the High Atlas — a world of Berber villages clinging to impossible slopes, cedar forests, and panoramic passes. Ait Ben Haddou occupies the afternoon. Overnight in Ouarzazate, Morocco's southern film capital.",
        activities: [
          "Depart Marrakech 07:00",
          "Tizi n'Tichka pass summit (2,260 m) photo stop",
          "Ait Ben Haddou UNESCO ksar — full guided tour",
          "Lunch in the village",
          "CLA Film Studios and Kasbah Taourirt visit",
          "Overnight Ouarzazate riad",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Riad in Ouarzazate",
      },
      {
        day: 4,
        title: "Ait Ben Haddou, Dades Gorges and Valley of Roses",
        description:
          "The road east through Skoura and Kelaat M'Gouna passes a continuous parade of kasbahs and ksour before entering the Valley of Roses — the source of much of the world's rosewater. Continue to the dramatic Dades Gorges for an afternoon hike among the 'monkey fingers' rock formations.",
        activities: [
          "Skoura oasis palmeraie morning walk",
          "Kelaat M'Gouna rose cooperative and distillery",
          "Rose Valley souk (seasonal)",
          "Dades Gorges hike — rocky pinnacles trail",
          "Boulmane Dades viewpoint",
          "Overnight kasbah hotel above Dades Gorges",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Kasbah hotel, Dades Gorges",
      },
      {
        day: 5,
        title: "Todra Gorge, Tinghir Palmeraie and Arrival at Merzouga",
        description:
          "Todra Gorge narrows spectacularly at its inner canyon — 300 metres of sheer rose-pink limestone pressing in from both sides as the river runs cold at your feet. After the gorge walk, the road traverses the Tafilalet plain to Merzouga. Arrive in time for the sunset camel trek into Erg Chebbi.",
        activities: [
          "Todra Gorge canyon walk (90 minutes)",
          "Tinghir town and palmeraie viewpoint",
          "Drive across Tafilalet plain to Merzouga",
          "Merzouga village — mint tea welcome",
          "Sunset camel trek into Erg Chebbi (45 minutes)",
          "Desert camp arrival — gourmet dinner under stars",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 6,
        title: "Sahara — Sunrise, Sandboarding and a Day in the Dunes",
        description:
          "A full Sahara day: pre-dawn dune climb for the sunrise, then sandboarding the northern face, an optional quad bike excursion to the remote Khamlia village to hear Gnawa music, and an afternoon of hammock leisure and optional guided dune walks. Second night in camp.",
        activities: [
          "Pre-dawn dune ascent for Sahara sunrise",
          "Sandboarding on Erg Chebbi dunes",
          "Optional quad bike excursion to Khamlia village",
          "Khamlia — traditional Gnawa music performance",
          "Afternoon leisure in camp",
          "Second overnight luxury desert camp",
          "Stargazing session with guide",
        ],
        meals: "All meals in camp included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 7,
        title: "Erfoud, Ziz Valley and Drive to Fes",
        description:
          "The drive north from Merzouga follows the Ziz Valley — Morocco's longest oasis corridor, over 200 km of date palms irrigated by ancient khettara underground channels. Through the Ziz Gorge, past the town of Er-Rachidia, over the Middle Atlas passes near Midelt, and down into the Fes plain by evening.",
        activities: [
          "Return camel ride to Merzouga and camp departure",
          "Erfoud fossil marble workshops",
          "Ziz Valley oasis drive — palm groves and ksour",
          "Ziz Gorge viewpoint",
          "Midelt — lunch stop in the apple region",
          "Middle Atlas crossing",
          "Arrive Fes medina and riad check-in",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 8,
        title: "Fes el-Bali — The World's Greatest Medieval City",
        description:
          "A full day in the Fes medina — 9,000 lanes, 200 mosques, and a living tradition of craft and scholarship unchanged since the 9th century. The Chouara Tannery rooftop and the Madrasa Bou Inania are the architectural peaks; the artisan quarter with its 200 specialised guilds is the living heart.",
        activities: [
          "Full-day guided Fes el-Bali medina tour",
          "Al-Qarawiyyin University exterior and quarter",
          "Madrasa Bou Inania interior tour",
          "Chouara Tannery rooftop visit",
          "Brass and copper artisan souk",
          "Mellah Jewish Quarter and synagogue",
          "Royal Palace gates photography",
          "Thuya wood and Fassi pottery cooperative",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 9,
        title: "Fes to Chefchaouen — The Blue City of the Rif",
        description:
          "A 3-hour drive west from Fes through the rolling Rif Mountain foothills brings you to Chefchaouen. Arriving by midday allows a full afternoon in the blue medina before the sun tilts and the light turns golden on the indigo walls.",
        activities: [
          "Morning drive Fes to Chefchaouen via Ouazzane",
          "Check-in to Chefchaouen medina riad",
          "Afternoon guided blue medina walk",
          "Plaza Uta el-Hammam and kasbah museum",
          "Wool weaving cooperatives and artisan shops",
          "Sunset from the Spanish Mosque viewpoint hike",
          "Dinner at rooftop Jebala restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 10,
        title: "Chefchaouen Morning, Drive to Casablanca and Departure",
        description:
          "A final dawn hour in the blue lanes before the 4-hour drive southwest to Casablanca via Rabat, passing through the Mamora cork oak forest and the Atlantic coastal plain. Airport drop-off by mid-afternoon.",
        activities: [
          "Dawn walk in the blue medina",
          "Final souk shopping and farewells",
          "Drive to Casablanca via Rabat motorway (4 hours)",
          "Optional Rabat brief stop if time permits",
          "Casablanca Mohammed V Airport drop-off",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Marrakech Menara Airport (arrival transfer included)",
    mapLocation: "Route: Marrakech — Atlas — Ouarzazate — Sahara — Fes — Chefchaouen — Casablanca",
    minAge: 5,
    physicalLevel: "Easy — suitable for most fitness levels with optional harder excursions",
  },

  // ─── COMPLETE MOROCCO 14-DAY ────────────────────────────────────────────────
  {
    tourId: "complete-morocco-14day",
    slug: "complete-morocco-14day",
    gallery: [
      "/tours/complete-morocco-14day.webp",
      "/destinations/sahara.webp",
      "/destinations/chefchaouen.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Casablanca — Hassan II Mosque",
        description:
          "Landing in Morocco's largest city, the afternoon is dominated by the Hassan II Mosque — its ocean-facing prayer hall accommodating 25,000 worshippers, its retractable roof opening to the sky above the Atlantic. Evening dinner along the Corniche boulevard sets the tone for two extraordinary weeks ahead.",
        activities: [
          "Casablanca Mohammed V Airport pickup",
          "Hassan II Mosque interior guided tour",
          "Atlantic Corniche evening walk",
          "Dinner at Casablanca brasserie",
        ],
        meals: "Dinner included",
        accommodation: "Hotel in Casablanca",
      },
      {
        day: 2,
        title: "Rabat — Royal Capital and Kasbah des Oudayas",
        description:
          "Morocco's administrative capital is the most European-feeling city in the country, with its French Ville Nouvelle boulevards and Atlantic-facing ramparts. The Kasbah des Oudayas, Hassan Tower, and Mohammed V Mausoleum form a trio of Rabat monuments unrivalled in Morocco.",
        activities: [
          "Train or drive Casablanca to Rabat",
          "Kasbah des Oudayas and Andalusian garden",
          "Hassan Tower column field",
          "Mohammed V Mausoleum",
          "Rabat medina souk",
          "Overnight Rabat",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Rabat medina",
      },
      {
        day: 3,
        title: "Meknes, Volubilis and Moulay Idriss",
        description:
          "The imperial city of Meknes — built in the late 17th century by Sultan Moulay Ismail as Morocco's Versailles — is anchored by the enormous Bab Mansour triumphal gate, the largest in North Africa. Nearby Volubilis is Morocco's best-preserved Roman city, its mosaics intact under the open sky. Moulay Idriss, perched on two hills above Volubilis, is Islam's most sacred site in Morocco.",
        activities: [
          "Drive Rabat to Meknes (2 hours)",
          "Bab Mansour gate and imperial granaries",
          "Meknes medina souk and artisan quarter",
          "Drive to Volubilis Roman ruins (UNESCO)",
          "Volubilis guided tour — Orpheus mosaics, Capitol, Triumphal Arch",
          "Moulay Idriss hilltop sacred town visit",
          "Overnight Fes or Meknes riad",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes or Meknes",
      },
      {
        day: 4,
        title: "Fes el-Bali — Full Medina Immersion",
        description:
          "A full unhurried day in Fes el-Bali, the 9th-century medina that has never lost its medieval character. The morning covers the religious and educational core; the afternoon, the artisan workshops and tanneries.",
        activities: [
          "Al-Qarawiyyin University quarter",
          "Madrasa Bou Inania carved interiors",
          "Chouara Tannery rooftop",
          "Al-Attarine spice souk",
          "Copper souk and brass workshops",
          "Mellah Jewish Quarter",
          "Fassi artisan cooperative — pottery and woodwork",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Fes el-Bali",
      },
      {
        day: 5,
        title: "Fes to Chefchaouen — Rif Mountain Blue City",
        description:
          "The drive from Fes to Chefchaouen through the Rif foothills is one of Morocco's most scenic road journeys. Arrive by noon for maximum time in the famed blue medina.",
        activities: [
          "Morning drive Fes to Chefchaouen via Ouazzane",
          "Chefchaouen guided medina walk",
          "Plaza Uta el-Hammam and kasbah",
          "Spanish Mosque hike at sunset",
          "Rif artisan cooperatives",
          "Dinner at Jebala restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 6,
        title: "Chefchaouen Dawn Walk and Drive to Tangier",
        description:
          "A final dawn hour in the blue lanes, then the coastal drive to Tangier — the legendary port where Africa meets Europe and the Atlantic meets the Mediterranean.",
        activities: [
          "Dawn blue medina walk",
          "Drive to Tangier (2 hours)",
          "Kasbah Museum and Petit Socco",
          "Cap Spartel — two-sea meeting point",
          "Caves of Hercules",
          "Overnight Tangier",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Boutique hotel, Tangier medina",
      },
      {
        day: 7,
        title: "Tangier to Marrakech — Overnight Travel",
        description:
          "The long drive south from Tangier through the Atlantic coast and foothills to Marrakech, with a scenic stop at Larache — a Spanish colonial port city — and a late-afternoon arrival in Marrakech for riad check-in.",
        activities: [
          "Morning departure from Tangier",
          "Larache Spanish colonial port stop",
          "Scenic Atlantic highway drive",
          "Arrive Marrakech medina",
          "Djemaa el-Fna evening orientation walk",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 8,
        title: "Marrakech — Palaces, Gardens and Souks",
        description:
          "A full day in Marrakech exploring the Saadian Tombs, Bahia Palace, Majorelle Garden, and the souks — the compass rose of Moroccan craft, where each lane is dedicated to a single trade.",
        activities: [
          "Saadian Tombs and El Badi Palace",
          "Bahia Palace interior tour",
          "Majorelle Garden and Berber Museum",
          "Souk exploration with guide",
          "Djemaa el-Fna dusk visit",
          "Medina dinner",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 9,
        title: "Tizi n'Tichka, Ait Ben Haddou and Ouarzazate",
        description:
          "Over the High Atlas via the dramatic Tizi n'Tichka pass to the UNESCO ksar of Ait Ben Haddou and the cinematic city of Ouarzazate.",
        activities: [
          "Tizi n'Tichka pass crossing (2,260 m)",
          "Ait Ben Haddou full guided tour",
          "Film studios visit",
          "Kasbah Taourirt",
          "Overnight Ouarzazate",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Hotel in Ouarzazate",
      },
      {
        day: 10,
        title: "Valley of Roses, Dades Gorges and Kasbah Road",
        description:
          "The Route of a Thousand Kasbahs from Ouarzazate east through Skoura, the Valley of Roses, and into the dramatic Dades Gorges.",
        activities: [
          "Skoura oasis walk",
          "Valley of Roses cooperative",
          "Dades Gorges hike",
          "Overnight kasbah hotel above gorge",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Kasbah hotel, Dades Gorges",
      },
      {
        day: 11,
        title: "Todra Gorge and Arrival at Erg Chebbi",
        description:
          "The Todra Gorge canyon walk followed by the drive across the Tafilalet plain to Merzouga and the sunset camel trek into Erg Chebbi for the first of two desert nights.",
        activities: [
          "Todra Gorge canyon walk",
          "Tafilalet plain drive",
          "Arrive Merzouga",
          "Sunset camel trek into Erg Chebbi",
          "Luxury desert camp",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 12,
        title: "A Full Day in the Sahara",
        description:
          "The pre-dawn sunrise, a morning of sandboarding, an afternoon of camp leisure, and the option of a quad excursion to the Gnawa village of Khamlia. Second night in the dunes.",
        activities: [
          "Pre-dawn Sahara sunrise",
          "Sandboarding on Erg Chebbi",
          "Optional quad to Khamlia for Gnawa music",
          "Camp leisure — hammock reading, dune walks",
          "Second overnight luxury desert camp",
        ],
        meals: "All meals in camp included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 13,
        title: "Sahara to Essaouira — Atlantic Coast Finale",
        description:
          "The long drive from Merzouga northwest via Ouarzazate, through the Anti-Atlas foothills and down to the Atlantic coast at Essaouira — Morocco's most atmospheric port city — arriving in time for a sunset walk on the sea ramparts.",
        activities: [
          "Early departure from desert camp",
          "Draa Valley pass drive",
          "Ouarzazate stop for lunch",
          "Arrive Essaouira",
          "Sea ramparts sunset walk",
          "Seafood dinner at harbour restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Essaouira medina",
      },
      {
        day: 14,
        title: "Essaouira, Argan Cooperative and Return to Marrakech",
        description:
          "A morning in Essaouira's whitewashed medina — the thuya wood artisan souk, the fishing harbour, and the UNESCO ramparts — then a visit to an argan oil cooperative and the 2.5-hour drive back to Marrakech for the airport.",
        activities: [
          "Essaouira medina morning walk",
          "Thuya wood artisan cooperative",
          "Fish souk and harbour",
          "Argan oil women's cooperative",
          "Drive to Marrakech (2.5 hours)",
          "Marrakech airport drop-off",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Casablanca Mohammed V Airport (arrival transfer included)",
    mapLocation: "All Regions of Morocco — Casablanca to Marrakech Grand Circuit",
    minAge: 5,
    physicalLevel: "Easy — comfortable for families and non-athletic travellers; long vehicle days on some stages",
  },

  // ─── NORTH MOROCCO LOOP 7-DAY ───────────────────────────────────────────────
  {
    tourId: "north-morocco-loop-7day",
    slug: "north-morocco-loop-7day",
    gallery: [
      "/tours/north-morocco-loop-7day.webp",
      "/destinations/chefchaouen.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Tangier — Kasbah and the Two-Sea Headland",
        description:
          "Tangier has been a crossroads of civilisations for three millennia. Your guide begins at the 17th-century Kasbah Museum — the former sultan's palace housing Roman mosaics and Moroccan decorative art — before the literary pilgrimage to the Petit Socco, where Kerouac, Ginsberg, and Paul Bowles once wrote. Late afternoon drive to Cap Spartel where the Atlantic and Mediterranean meet.",
        activities: [
          "Arrival at Tangier Ibn Battuta Airport or ferry terminal",
          "Kasbah Museum (Dar el-Makhzen) guided tour",
          "Medina walk — Petit Socco and Beat Generation cafes",
          "American Legation Museum",
          "Cap Spartel headland — two-sea meeting point",
          "Caves of Hercules",
          "Dinner in Tangier medina",
        ],
        meals: "Dinner included",
        accommodation: "Boutique hotel, Tangier medina",
      },
      {
        day: 2,
        title: "Tangier to Chefchaouen — Into the Rif Mountains",
        description:
          "The 2-hour drive from Tangier climbs into the green Rif Mountain range via Tetouan, the Spanish-influenced 'white dove' city with its Andalusian-style medina. Arrive Chefchaouen before sunset for an initial wander through the blue lanes.",
        activities: [
          "Morning drive Tangier to Tetouan",
          "Tetouan medina and Andalusian architecture walk",
          "Hassan II Square and the Royal Palace facade",
          "Drive to Chefchaouen (45 minutes)",
          "Chefchaouen medina first impressions walk",
          "Dinner at rooftop restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 3,
        title: "Chefchaouen — Blue Medina and Spanish Mosque",
        description:
          "A full day in the blue city. The early morning hour before tourist buses arrive is the best time to photograph the deep-blue passageways and flower-festooned staircases. The Spanish Mosque hike offers a vertiginous panorama over the medina and the Rif valley.",
        activities: [
          "Dawn guided blue medina walk (07:00)",
          "Plaza Uta el-Hammam and kasbah museum",
          "Wool weaving and ceramic cooperatives",
          "Spanish Mosque hike (30 minutes each way)",
          "Blue Staircase photography session",
          "Free afternoon — souk browsing",
          "Jebala dinner — msemen and wild honey",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 4,
        title: "Chefchaouen to Fes — Cedar Forest and Barbary Macaques",
        description:
          "The drive south passes through the Rif foothills and the town of Ouazzane before climbing into the cedar forest of the Middle Atlas near Azrou. Roadside Barbary macaque troops are an unexpected delight before descending to the ancient university city of Fes.",
        activities: [
          "Morning drive Chefchaouen toward Fes",
          "Ouazzane hilltop town visit",
          "Middle Atlas cedar forest",
          "Azrou — Barbary macaque forest roadside stop",
          "Arrive Fes by early evening",
          "Fes el-Bali evening medina walk",
          "Dinner at a traditional Fassi restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 5,
        title: "Fes Medina — Tanneries, Madrasas and the Artisan Quarter",
        description:
          "A full day in the Fes medina with an expert guide who has navigated these lanes since childhood — knowing which rooftop gives the best tannery view, which cooperative workshop is genuinely authentic, and where the best lunch is hidden three lanes deep.",
        activities: [
          "Madrasa Bou Inania interior",
          "Chouara Tannery rooftop viewing",
          "Al-Attarine souk",
          "Brass and copper artisan workshops",
          "Mellah Jewish Quarter and synagogue",
          "Fassi pottery cooperative",
          "Thuya woodwork workshop",
          "Dinner at rooftop riad restaurant",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 6,
        title: "Meknes, Volubilis and Moulay Idriss",
        description:
          "Day excursion west from Fes to three of Morocco's most compelling sites: imperial Meknes, Roman Volubilis, and sacred Moulay Idriss.",
        activities: [
          "Drive Fes to Meknes (1 hour)",
          "Bab Mansour gate and Meknes medina",
          "Moulay Ismail Mausoleum",
          "Drive to Volubilis Roman ruins",
          "Full guided Volubilis tour — Orpheus mosaic, Capitol, Arch",
          "Moulay Idriss sacred hilltop town",
          "Return to Fes",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 7,
        title: "Fes to Tangier — Coastal Return and Departure",
        description:
          "The northbound motorway carries you back to Tangier for a midday departure — airport or ferry. En route, the brief stop at Larache's 17th-century Spanish Kasbah overlooking the Loukkos estuary is worth the detour.",
        activities: [
          "Morning departure from Fes",
          "Larache Spanish kasbah and Atlantic estuary viewpoint",
          "Arrive Tangier",
          "Airport or ferry terminal drop-off",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Tangier Ibn Battuta Airport or Tangier ferry terminal",
    mapLocation: "Route: Tangier — Tetouan — Chefchaouen — Fes — Meknes — Tangier",
    minAge: 5,
    physicalLevel: "Easy — mostly flat walking; optional uphill hike to Spanish Mosque",
  },

  // ─── ATLANTIC COAST ROAD TRIP 5-DAY ─────────────────────────────────────────
  {
    tourId: "atlantic-coast-road-trip-5day",
    slug: "atlantic-coast-road-trip-5day",
    gallery: [
      "/tours/atlantic-coast-road-trip-5day.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/imgplaceholder.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Casablanca — Hassan II Mosque and Atlantic Promenade",
        description:
          "Morocco's commercial capital is a city of grand ambition — the Hassan II Mosque, completed in 1993, is a monument that rivals the great mosques of the classical Islamic world, built deliberately over the Atlantic so that worshippers pray above open water. After the interior tour, the afternoon explores Casablanca's extraordinary 1930s Art Deco heritage — the most concentrated collection of Art Deco architecture outside of Miami Beach.",
        activities: [
          "Casablanca arrival and hotel check-in",
          "Hassan II Mosque interior guided tour",
          "Corniche Atlantic promenade walk",
          "Art Deco city centre architecture walk — Habous, Boulevard Mohammed V",
          "Casablanca Central Market seafood tasting",
          "Dinner along the Corniche",
        ],
        meals: "Dinner included",
        accommodation: "Hotel in Casablanca",
      },
      {
        day: 2,
        title: "El Jadida and the Portuguese Cistern",
        description:
          "Two hours south, the Portuguese colony of Mazagan — now El Jadida — retains its 16th-century fortifications virtually intact. The most haunting monument is the Portuguese cistern: a vaulted Gothic hall flooded with a shallow film of water that mirrors its columns in perfect symmetry. The nearby Haouzia beach stretches 15 km of empty Atlantic sand.",
        activities: [
          "Drive Casablanca to El Jadida (2 hours)",
          "El Jadida UNESCO medina and Portuguese walls",
          "Portuguese cistern — guided visit",
          "Sidi Bouzid beach walk",
          "El Jadida fish souk and fresh oyster tasting",
          "Check-in at coastal riad",
          "Grilled fish dinner",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Riad in El Jadida",
      },
      {
        day: 3,
        title: "Oualidia — Oyster Lagoon and Atlantic Clifftop",
        description:
          "Oualidia is Morocco's best-kept secret — a sheltered Atlantic lagoon village where oyster beds have been farmed since the French Protectorate, and the limestone cliffs drop dramatically to turquoise water. Lunch is oysters shucked to order at the lagoon's edge.",
        activities: [
          "Drive south to Oualidia (1.5 hours)",
          "Oualidia lagoon walk — flamingo viewpoint",
          "Oyster farm guided visit",
          "Oyster and seafood lunch at a lagoon-side restaurant",
          "Atlantic cliffside walk",
          "Continue south to Essaouira (2 hours)",
          "Check-in and evening medina walk",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Essaouira medina",
      },
      {
        day: 4,
        title: "Essaouira — Sea Ramparts, Thuya Wood and Gnawa Music",
        description:
          "Essaouira earns its UNESCO designation through an intact 18th-century medina that blends Portuguese military architecture with Moroccan urban planning. The Skala de la Ville cannon ramparts — where the Atlantic crashes below and cormorants fish the rocks — are unmissable. Essaouira is also the world capital of Gnawa music, and the evening produces spontaneous performances in the squares.",
        activities: [
          "Skala de la Ville sea cannon ramparts walk",
          "Thuya wood cooperative — chess sets and marquetry",
          "Fish souk and harbour-front exploration",
          "Medina walking tour with guide",
          "Optional kitesurfing on Essaouira beach",
          "Gnawa music square in the evening",
          "Fresh catch dinner at harbour restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Essaouira medina",
      },
      {
        day: 5,
        title: "Argan Forest, Women's Cooperative and Agadir",
        description:
          "The coastal road south from Essaouira passes through the world's only argan forest — a spiny, otherworldly landscape where goats climb 10 metres into the trees to eat the berries. A women's argan cooperative demonstrates the labour-intensive hand-pressing process. Arrive Agadir for airport departure or a beach finale.",
        activities: [
          "Drive south on the coastal road",
          "Argan forest — climbing goats viewpoint",
          "Women's argan oil cooperative — demonstration and tasting",
          "Continue to Agadir (1 hour)",
          "Agadir airport drop-off or optional beach afternoon",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Casablanca Mohammed V Airport",
    mapLocation: "Route: Casablanca — El Jadida — Oualidia — Essaouira — Agadir",
    minAge: 3,
    physicalLevel: "Easy — flat medina walking and coastal paths throughout",
  },

  // ─── ATLAS VALLEYS EXPEDITION 4-DAY ─────────────────────────────────────────
  {
    tourId: "atlas-valleys-expedition-4day",
    slug: "atlas-valleys-expedition-4day",
    gallery: [
      "/tours/atlas-valleys-expedition-4day.webp",
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/moroccan-tiles.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tizi n'Test Pass and Tin Mal Mosque",
        description:
          "The Tizi n'Test (2,092 m) is the most dramatic and least-used of the High Atlas passes — a narrow road that clings to cliff edges above 1,500-metre drops, with views across the Sous Plain to the Anti-Atlas. Hidden in the valley below is the 12th-century Tin Mal Mosque — built by the Almohad dynasty's founder Ibn Tumart, one of Morocco's most important historical monuments and one of the only mosques in Morocco non-Muslims may enter. Overnight in the Sous Valley.",
        activities: [
          "Depart Marrakech 07:00 via Tizi n'Test road (N10)",
          "Tizi n'Test summit viewpoint (2,092 m)",
          "Descent to Tin Mal valley",
          "Tin Mal Mosque guided tour",
          "Drive south through the Sous Valley",
          "Overnight guesthouse in the Sous foothills",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Guesthouse in Sous Valley",
      },
      {
        day: 2,
        title: "Imlil Valley Trek — Berber Villages and Mountain Orchards",
        description:
          "The Imlil valley below Toubkal is the beating heart of High Atlas Berber culture — a terraced landscape of walnut, cherry, and apple orchards irrigated by snowmelt channels and dotted with stone-and-timber villages. Your certified guide leads a 4-hour circuit through Aroumd village (1,850 m) and the ancient agricultural terraces above, with panoramic views toward Toubkal's pyramid.",
        activities: [
          "Transfer to Imlil (1,740 m)",
          "Imlil to Aroumd village trail (1.5 hours)",
          "Aroumd village — traditional home visit",
          "Terrace walk above Aroumd with Toubkal views",
          "Return to Imlil via lower valley orchards",
          "Sidi Chamharouch river shrine stop",
          "Overnight mountain gite in Imlil",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Mountain gite, Imlil (1,740 m)",
      },
      {
        day: 3,
        title: "Tizi n'Tichka Pass and Ait Ben Haddou",
        description:
          "Leaving Imlil, the route curves east through the High Atlas foothill villages before ascending the Tizi n'Tichka — the main southern pass at 2,260 metres — and descending into the pre-Saharan world of ochre kasbahs. Ait Ben Haddou, the UNESCO ksar, dominates the afternoon.",
        activities: [
          "Morning transfer from Imlil to the N9 highway",
          "Tizi n'Tichka pass (2,260 m) viewpoint",
          "Ait Ben Haddou UNESCO ksar — guided 2-hour tour",
          "Lunch in the village",
          "Continue to Ouarzazate",
          "Kasbah Taourirt evening walk",
          "Overnight Ouarzazate",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Hotel in Ouarzazate",
      },
      {
        day: 4,
        title: "Draa Valley Palmeraie and Return to Marrakech",
        description:
          "The Draa Valley south of Ouarzazate is Morocco's longest river oasis — 150 kilometres of date palms, ancient ksour, and medieval fortified granaries stretching to Zagora and the edge of the Sahara. A morning in the valley before the return drive north to Marrakech completes a perfect four-day arc through Morocco's most remarkable terrain.",
        activities: [
          "Drive south from Ouarzazate into the Draa Valley",
          "Agdz hilltop ksar viewpoint",
          "Draa palmeraie walk — ancient khettara irrigation channels",
          "Tamnougalt village — 16th-century ksar guided tour",
          "Lunch in the valley",
          "Return drive to Marrakech via Tizi n'Tichka (arrive ~19:00)",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Djemaa el-Fna Square, Marrakech",
    mapLocation: "Route: Marrakech — Tizi n'Test — Imlil — Ouarzazate — Draa Valley",
    minAge: 8,
    physicalLevel: "Moderate — 4-hour mountain trek on Day 2; rest by vehicle",
  },

  // ─── IMPERIAL CITIES GRAND 6-DAY ────────────────────────────────────────────
  {
    tourId: "imperial-cities-grand-6day",
    slug: "imperial-cities-grand-6day",
    gallery: [
      "/tours/imperial-cities-grand-6day.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
      "/destinations/chefchaouen.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Fes — Evening Medina Walk",
        description:
          "Fes is the oldest of Morocco's imperial cities and, for many, the most overwhelming. Your guide meets you at the airport and drives directly into the medina for an orientation evening walk — just enough to understand the logic of a city that seems to have none.",
        activities: [
          "Airport pickup and riad check-in",
          "Evening orientation walk in Fes el-Bali",
          "Bab Bou Jeloud (Blue Gate) introduction",
          "Dinner at a traditional Fassi restaurant",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 2,
        title: "Fes Medina — Tanneries, Madrasas and the Artisan Quarter",
        description:
          "A full day in the most complex urban environment in the Islamic world — 9,000 lanes that once accommodated 200,000 people in a city with no map and no street names. Your guide knows every shortcut, every hidden palace, and every rooftop with a view.",
        activities: [
          "Madrasa Bou Inania",
          "Al-Qarawiyyin mosque exterior and university quarter",
          "Chouara Tannery rooftop viewing",
          "Brass-beaters souk",
          "Al-Attarine spice souk",
          "Mellah Jewish Quarter",
          "Pottery and thuya woodwork cooperative",
          "Rooftop dinner in the medina",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 3,
        title: "Meknes, Volubilis and Moulay Idriss — Morocco's Roman Heartland",
        description:
          "Within 30 km of each other, this trio of sites represents Morocco's most condensed historical and architectural landscape: imperial Meknes, Roman Volubilis, and holy Moulay Idriss.",
        activities: [
          "Drive Fes to Meknes (1 hour)",
          "Bab Mansour triumphal gate",
          "Moulay Ismail Mausoleum interior",
          "Meknes Heri es-Souani royal granaries",
          "Drive to Volubilis (30 minutes)",
          "Volubilis Roman ruins — full guided tour",
          "Moulay Idriss Zerhoun sacred town",
          "Return to Fes",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes",
      },
      {
        day: 4,
        title: "Drive to Rabat — Hassan Tower and Kasbah des Oudayas",
        description:
          "The motorway west from Fes reaches Rabat in under 2 hours. Morocco's royal administrative capital has the ambience of a well-ordered European city — wide boulevards, manicured gardens, and monuments that stand in breathing space rather than being compressed by centuries of organic growth.",
        activities: [
          "Drive Fes to Rabat (2 hours)",
          "Hassan Tower and unfinished mosque column field",
          "Mohammed V Mausoleum",
          "Kasbah des Oudayas — medina, garden, and estuary view",
          "Rabat Ville Nouvelle architecture walk",
          "Overnight Rabat",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Rabat medina",
      },
      {
        day: 5,
        title: "Casablanca and Drive to Marrakech",
        description:
          "Casablanca — Morocco's New York — is a city of energy and ambition. The Hassan II Mosque interior tour is the required monument; the Art Deco streets of the city centre reveal a second, less-expected architectural heritage before the afternoon drive to Marrakech.",
        activities: [
          "Drive Rabat to Casablanca (1 hour)",
          "Hassan II Mosque interior tour",
          "Corniche and Habous Art Deco walk",
          "Lunch in Casablanca",
          "Drive to Marrakech (2.5 hours)",
          "Marrakech riad check-in and Djemaa el-Fna evening",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 6,
        title: "Marrakech — Palaces, Souks and Farewell",
        description:
          "The final imperial city reveals itself across an unhurried last day — the Saadian Tombs, Bahia Palace, the Majorelle Garden, and the incomparable evening spectacle of Djemaa el-Fna. Airport drop-off by private vehicle closes the imperial circuit.",
        activities: [
          "Saadian Tombs guided tour",
          "Bahia Palace carved interiors",
          "Majorelle Garden and Berber Museum",
          "Ben Youssef Madrasa",
          "Souk quarter exploration — carpet, spice, lamp",
          "Djemaa el-Fna farewell dusk visit",
          "Airport transfer",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Fes-Saiss Airport or Fes riad (arrival transfer included)",
    mapLocation: "Route: Fes — Meknes — Volubilis — Rabat — Casablanca — Marrakech",
    minAge: 4,
    physicalLevel: "Easy — flat medina walking throughout; mostly cultural visits",
  },

  // ─── FAMILY ADVENTURE MOROCCO 8-DAY ─────────────────────────────────────────
  {
    tourId: "family-adventure-morocco-8day",
    slug: "family-adventure-morocco-8day",
    gallery: [
      "/tours/family-adventure-morocco-8day.webp",
      "/destinations/sahara.webp",
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech Arrival and Djemaa el-Fna Evening",
        description:
          "Families land in Marrakech and settle into their riad — the courtyard, fountain, and rooftop terrace immediately exciting for children — before an early evening walk to Djemaa el-Fna. Snake charmers, acrobats, storytellers, and food stall smoke create an unforgettable first impression for travellers of all ages.",
        activities: [
          "Airport pickup and riad check-in",
          "Riad orientation — pool, courtyard, and rooftop",
          "Djemaa el-Fna family walk at dusk",
          "Food stall dinner — family-friendly selection guided",
        ],
        meals: "Dinner included",
        accommodation: "Family riad in Marrakech medina",
      },
      {
        day: 2,
        title: "Marrakech — Medina Treasure Hunt and Souk Adventure",
        description:
          "Your family-specialist guide leads a custom medina treasure hunt — a game that transforms the labyrinthine souk into an adventure, with map-reading, clue-solving, and small prizes. Visit the Majorelle Garden and Berber Museum, then the Ben Youssef Madrasa for a history lesson that even younger children find engaging.",
        activities: [
          "Medina treasure hunt game for children (all ages)",
          "Souk exploration — carpet, spice, and lamp quarter",
          "Majorelle Garden and Berber Museum",
          "Ben Youssef Madrasa courtyard visit",
          "Cooking demonstration — making Moroccan flatbread",
          "Djemaa el-Fna evening",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Family riad in Marrakech medina",
      },
      {
        day: 3,
        title: "Hot Air Balloon Sunrise and Ourika Valley Waterfall Hike",
        description:
          "An early rise for the hot air balloon flight over the Haouz plain at sunrise — children aged 5 and above are welcome and rarely forget the experience. After the balloon and the traditional Berber breakfast, the afternoon takes the family to the Ourika Valley for the Setti Fatma waterfall hike.",
        activities: [
          "Pre-dawn hotel pickup (05:00)",
          "Hot air balloon sunrise flight (60 minutes)",
          "Traditional Berber breakfast at landing",
          "Return to Marrakech",
          "Drive to Ourika Valley (1 hour)",
          "Setti Fatma waterfall hike (45 minutes)",
          "Riverside lunch at Ourika restaurant",
          "Return to Marrakech",
        ],
        meals: "Breakfast, balloon breakfast, and lunch included",
        accommodation: "Family riad in Marrakech medina",
      },
      {
        day: 4,
        title: "High Atlas Drive to Ouarzazate via Ait Ben Haddou",
        description:
          "Children who have seen Game of Thrones or Gladiator will recognise Ait Ben Haddou immediately. Your guide brings the filming stories alive with the real historical context — a perfect combination for families with older children. Overnight in Ouarzazate, a pleasant town with a pool hotel.",
        activities: [
          "Tizi n'Tichka pass mountain crossing",
          "Ait Ben Haddou — Game of Thrones and film history tour",
          "Lunch at the ksar",
          "Atlas Corporation Studios visit",
          "Overnight Ouarzazate pool hotel",
        ],
        meals: "Lunch and dinner included",
        accommodation: "Hotel with pool in Ouarzazate",
      },
      {
        day: 5,
        title: "Camel Trek and Desert Camp at Erg Chebbi",
        description:
          "The long drive to Merzouga builds anticipation — children watching the landscape shift from mountain to hammada to, at last, the horizon-filling golden wall of Erg Chebbi. The camel trek into the dunes at sunset is a transformative family experience.",
        activities: [
          "Drive Ouarzazate to Merzouga via Dades Gorges stop",
          "Dades Gorges brief walk",
          "Arrive Merzouga — mint tea welcome",
          "Sunset camel trek into Erg Chebbi",
          "Luxury family desert camp",
          "Berber dinner and music — children welcome around the fire",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury family desert camp, Erg Chebbi",
      },
      {
        day: 6,
        title: "Sahara Sunrise and Sandboarding",
        description:
          "Children are natural sandboarders — fearless and quick to master the technique on the steep northern faces of the dunes. The pre-dawn sunrise is a family memory that photographs as well as it lives.",
        activities: [
          "Pre-dawn Sahara sunrise from dune crest",
          "Sandboarding — children and adults",
          "Desert breakfast in camp",
          "Morning dune walking and sand games",
          "Return camel ride to Merzouga",
          "Drive north toward Fes",
          "Overnight Ifrane or Midelt area",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Hotel in Middle Atlas (Ifrane or Azrou area)",
      },
      {
        day: 7,
        title: "Cedar Forest, Barbary Macaques and Arrival in Fes",
        description:
          "The Barbary macaques of the cedar forest near Azrou are a universally loved family stop — troops of 30 or more approach the roadside freely. Arrive Fes for an afternoon orientation walk through the medina.",
        activities: [
          "Morning cedar forest drive",
          "Barbary macaque colony roadside visit",
          "Ifrane alpine town stop",
          "Arrive Fes medina",
          "Family-paced medina orientation walk",
          "Dinner at traditional Fassi restaurant",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Fes medina",
      },
      {
        day: 8,
        title: "Fes Medina and Departure",
        description:
          "A morning in the Fes medina with a child-friendly guide who knows how to keep younger travellers engaged — through craft workshops, hands-on tannery explanations, and stories of the medieval city. Airport departure by midday.",
        activities: [
          "Child-friendly Fes medina morning tour",
          "Chouara tannery rooftop",
          "Pottery painting workshop for children",
          "Fassi biscuit tasting in the souk",
          "Transfer to Fes-Saiss Airport",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Marrakech Menara Airport (arrival transfer included)",
    mapLocation: "Route: Marrakech — Atlas — Sahara — Fes",
    minAge: 3,
    physicalLevel: "Easy — all activities adapted for families with children of all ages",
  },

  // ─── ROMANTIC HONEYMOON MOROCCO 7-DAY ───────────────────────────────────────
  {
    tourId: "romantic-honeymoon-morocco-7day",
    slug: "romantic-honeymoon-morocco-7day",
    gallery: [
      "/tours/romantic-honeymoon-morocco-7day.webp",
      "/destinations/sahara.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
      "/background/hero-desert-image.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech Arrival — Private Riad, Roses and Candlelight",
        description:
          "Your private chauffeur collects you from Menara Airport and transfers you to your exclusive riad in the heart of the medina — rose petals scattered across the suite, champagne chilling in the courtyard. The evening guide leads a private medina walk for two — through the perfume quarter of the souk, past a perfumer who blends bespoke Moroccan attars, and into the illuminated Djemaa el-Fna for drinks at a terrace table overlooking the square.",
        activities: [
          "Private airport pickup in luxury vehicle",
          "Champagne and rose petal riad welcome",
          "Private evening medina walk for two",
          "Perfume souk — bespoke attar blending session",
          "Djemaa el-Fna terrace drinks",
          "Private chef dinner on the riad rooftop",
        ],
        meals: "Private chef dinner included",
        accommodation: "Private luxury riad, Marrakech medina",
      },
      {
        day: 2,
        title: "Marrakech — Private Hammam, Palaces and Rooftop Sunset",
        description:
          "A private in-riad hammam ritual for two occupies the late morning — the kessa scrub, ghassoul clay mask, and argan oil couples massage performed by specialist attendants in the riad's own hammam suite. The afternoon visits Bahia Palace and the Majorelle Garden at a leisurely pace, returning for sunset cocktails on the private riad rooftop.",
        activities: [
          "Private in-riad couples hammam and massage (2 hours)",
          "Late champagne brunch on the courtyard terrace",
          "Bahia Palace private afternoon visit",
          "Majorelle Garden and Berber Museum",
          "Sunset cocktails on the riad rooftop",
          "Four-course private chef rooftop dinner",
        ],
        meals: "Brunch and private chef dinner included",
        accommodation: "Private luxury riad, Marrakech medina",
      },
      {
        day: 3,
        title: "Hot Air Balloon Sunrise and High Atlas Drive to Ouarzazate",
        description:
          "The sunrise balloon flight over the Haouz plain is one of Morocco's most romantic experiences — absolute silence, the Atlas emerging from dawn mist below you, champagne after landing. The afternoon crosses the High Atlas for the overnight in Ouarzazate, a prelude to the desert.",
        activities: [
          "Pre-dawn hotel pickup for sunrise balloon",
          "60-minute private balloon flight for two",
          "Champagne breakfast at landing",
          "High Atlas drive via Tizi n'Tichka",
          "Ait Ben Haddou golden-hour photographs",
          "Private dinner at Ouarzazate kasbah hotel",
        ],
        meals: "Balloon breakfast and private dinner included",
        accommodation: "Boutique kasbah hotel, Ouarzazate",
      },
      {
        day: 4,
        title: "Route of the Kasbahs to Erg Chebbi — Private Desert Camp",
        description:
          "The drive east through Skoura, the Valley of Roses, and the Dades Gorges builds to the day's destination: a private luxury tent suite at Erg Chebbi, your own terrace overlooking the great dune sea. The private camel trek at sunset for two is the defining moment of the honeymoon.",
        activities: [
          "Skoura palmeraie private morning walk",
          "Valley of Roses rosewater cooperative",
          "Dades Gorges viewpoint and gorge road",
          "Arrive Merzouga — private welcome",
          "Private sunset camel trek for two",
          "Luxury desert camp check-in — rose petals, lanterns",
          "Seven-course private chef dinner in the dunes",
        ],
        meals: "Lunch and private chef dinner included",
        accommodation: "Luxury private tent suite, Erg Chebbi",
      },
      {
        day: 5,
        title: "Sahara Sunrise and In-Tent Couples Spa",
        description:
          "The private terrace at dawn, the dunes layered from grey to gold, no one else visible in any direction. After the sunrise, a spa therapist arrives at your tent for a 90-minute argan oil couples massage. The afternoon is entirely yours: sandboard, walk the dunes, sleep in the hammock, or simply read in silence.",
        activities: [
          "Private terrace Sahara sunrise",
          "90-minute in-tent couples argan oil massage",
          "Late private brunch in the tent",
          "Sandboarding or dune walking at leisure",
          "Afternoon hammock rest",
          "Farewell private dinner in the dunes — candelabra setting",
        ],
        meals: "All meals by private chef",
        accommodation: "Luxury private tent suite, Erg Chebbi",
      },
      {
        day: 6,
        title: "Drive to Essaouira — Atlantic Sunset on the Ramparts",
        description:
          "The long drive from Merzouga to Essaouira is perhaps the greatest road journey Morocco offers — from the Sahara edge through the Anti-Atlas and down to the Atlantic. Arriving at Essaouira in the afternoon, the sea ramparts at sunset provide a cinematic backdrop for the penultimate evening of the honeymoon.",
        activities: [
          "Morning departure from desert camp",
          "Draa Valley and Ouarzazate stop for lunch",
          "Anti-Atlas and Sous Valley scenic drive",
          "Arrive Essaouira — riad check-in",
          "Sea ramparts sunset walk for two",
          "Private rooftop dinner with ocean views",
        ],
        meals: "Lunch and private dinner included",
        accommodation: "Boutique riad, Essaouira medina",
      },
      {
        day: 7,
        title: "Essaouira Morning, Argan Picnic and Return to Marrakech",
        description:
          "A final private morning in Essaouira's medina before a private argan forest picnic on the return to Marrakech — a spread of Moroccan salads, freshly baked bread, and local cheeses laid out on a kilim beneath a wild argan tree. Arrive Marrakech for the airport transfer.",
        activities: [
          "Private morning medina walk — thuya souk and harbour",
          "Argan forest private picnic lunch",
          "Return drive to Marrakech (2.5 hours)",
          "Marrakech Menara Airport private transfer",
        ],
        meals: "Breakfast and private picnic lunch included",
      },
    ],
    meetingPoint: "Marrakech Menara Airport (private arrival transfer)",
    mapLocation: "Route: Marrakech — Ouarzazate — Erg Chebbi — Essaouira",
    minAge: 18,
    physicalLevel: "Easy — all activities at a leisurely pace with no strenuous demands",
  },

  // ─── PHOTOGRAPHY TOUR MOROCCO 10-DAY ────────────────────────────────────────
  {
    tourId: "photography-tour-morocco-10day",
    slug: "photography-tour-morocco-10day",
    gallery: [
      "/tours/photography-tour-morocco-10day.webp",
      "/destinations/chefchaouen.webp",
      "/moroccan-handicrafts.webp",
      "/destinations/sahara.webp",
      "/morocco-culture.webp",
      "/amazigh.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fes Arrival — Medina Blue Hour",
        description:
          "The expedition begins in Fes — chosen as the starting city because the medina's dense, lamp-lit streets produce extraordinary results at dusk and dawn. Your photographer-guide walks you through the essential composition points over the evening, calibrating cameras for low-light medina shooting before the serious work begins tomorrow.",
        activities: [
          "Fes airport pickup and riad check-in",
          "Evening medina blue hour walk with photographer-guide",
          "Bab Bou Jeloud (Blue Gate) — long exposure session",
          "Camera settings briefing for medina and night photography",
          "Dinner and image review session",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 2,
        title: "Fes Tanneries, Madrasas and the Artisan Quarter",
        description:
          "The Chouara Tannery is one of the world's great photographic subjects — shot from a private leather merchant's rooftop, away from the crowded public terraces. Your guide has arranged exclusive access. The Madrasa Bou Inania and the artisan workshops round out a day of extraordinary image opportunities.",
        activities: [
          "Pre-dawn medina walk — empty lanes and first light",
          "Madrasa Bou Inania — interior detail and courtyard symmetry",
          "Private tannery rooftop access (exclusive, uncrowded)",
          "Tannery aerial composition and colour study",
          "Brass-beaters souk — environmental portraiture",
          "Al-Attarine souk — colour and texture",
          "Post-processing review with photographer-guide",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 3,
        title: "Fes to Chefchaouen — Arrival Before Tourist Crowds",
        description:
          "Departing Fes at dawn, the 3-hour drive to Chefchaouen positions you in the blue medina by mid-morning — after the overnight buses but before the day-trippers. The deep blue lanes are at their most photogenic in the 2 hours either side of noon, when shadows eliminate harsh contrast and the blue becomes its richest.",
        activities: [
          "Pre-dawn departure from Fes",
          "Arrive Chefchaouen mid-morning",
          "Blue medina — dawn light and mid-morning work",
          "Specific composition points with photographer-guide",
          "Local life and street portraiture",
          "Blue staircase and flower-pot walls",
          "Spanish Mosque hike — medina overview shot",
          "Evening image review and editing session",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Chefchaouen medina",
      },
      {
        day: 4,
        title: "Chefchaouen Dawn Shoot and Drive South",
        description:
          "A pre-sunrise shoot in the blue medina — the lanes completely empty, the cobblestones still damp from overnight cleaning — is a photographer's rarest opportunity. After the morning shoot, begin the drive south toward Meknes and Volubilis.",
        activities: [
          "Pre-dawn shoot in the empty blue medina (05:30)",
          "First light on blue walls and fountain square",
          "Morning drive south via Ouazzane",
          "Volubilis Roman ruins — afternoon golden light shoot",
          "Overnight Meknes or Fes riad",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Meknes or Fes",
      },
      {
        day: 5,
        title: "Marrakech — Djemaa el-Fna and the Souks",
        description:
          "Flying or driving south to Marrakech, the afternoon is given over to the souks and the early evening spectacle of Djemaa el-Fna — smoke rising from the food stalls, acrobats mid-air, and storytellers commanding circles of rapt listeners. The golden hour between 17:00 and 18:30 is the Marrakech souk's finest photographic light.",
        activities: [
          "Transfer to Marrakech",
          "Afternoon souk exploration with photographer-guide",
          "Majorelle Garden — late afternoon colour shoot",
          "Djemaa el-Fna golden hour and dusk shoot",
          "Long-exposure Djemaa el-Fna night shoot",
          "Dinner and evening image review",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 6,
        title: "Marrakech — Saadian Tombs, Palaces and the Tanneries",
        description:
          "Interior architectural photography dominates the morning: the Saadian Tombs (honeycombed stucco and shaft-of-light opportunities), Bahia Palace (painted cedar ceilings and courtyard tiling), and the Ben Youssef Madrasa if access permits.",
        activities: [
          "Saadian Tombs — interior shaft of light and stucco detail",
          "El Badi Palace ruins and stork colonies",
          "Bahia Palace carved cedar ceilings",
          "Marrakech tannery — rooftop access",
          "Mellah Jewish Quarter — heritage architecture",
          "Afternoon souk free shoot with guide support",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 7,
        title: "Ait Ben Haddou — Afternoon Rim Light and Kasbah Route",
        description:
          "Departing Marrakech at noon times your arrival at Ait Ben Haddou for the famous late afternoon rim light that wraps the mud-brick towers in gold and carves deep shadows into the carved facades. The Ourzazate reservoir at sunset provides a secondary composition.",
        activities: [
          "Drive to Ait Ben Haddou (arrival 15:00)",
          "Afternoon and golden-hour shoot at Ait Ben Haddou",
          "River-crossing reflection compositions",
          "Ouarzazate reservoir sunset",
          "Evening image review and portfolio selection",
          "Overnight Ouarzazate",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Kasbah hotel, Ouarzazate",
      },
      {
        day: 8,
        title: "Dades Gorges — Monkey Fingers at Dawn",
        description:
          "The Dades Gorges at first light produce a unique warm-pink glow on the contorted limestone pinnacles. Departing Ouarzazate before dawn times the drive perfectly for the earliest light in the gorge.",
        activities: [
          "Pre-dawn departure from Ouarzazate",
          "Arrive Dades Gorges at first light",
          "Monkey-fingers rock formations — golden hour shoot",
          "Gorge road hairpin bends — aerial and road-level compositions",
          "Valley of Roses cooperative — people and process photography",
          "Drive to Merzouga",
          "Arrive Erg Chebbi for sunset camel trek shoot",
          "Overnight luxury desert camp",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 9,
        title: "Erg Chebbi — Pre-Dawn, Blue Hour, Sunrise and Dune Golden Hour",
        description:
          "Two full shooting sessions: the pre-dawn blue hour when the sky shifts through indigo layers above the black dune silhouettes, then the sunrise itself as the sand ignites. Afternoon brings the second golden light session — ridgelines sharpen, shadows deepen, and the colour shifts from pale gold to a deep apricot.",
        activities: [
          "Pre-dawn dune ascent for blue hour and sunrise shoot",
          "Camel caravan silhouette compositions",
          "Dune pattern and texture abstract photography",
          "Camp breakfast and morning rest",
          "Post-processing and image review workshop",
          "Afternoon dune golden hour second session",
          "Camp at night — Milky Way and star trail photography",
        ],
        meals: "All meals in camp included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 10,
        title: "Sahara Dawn Finale and Return to Marrakech",
        description:
          "A final dawn shoot in the dunes — now knowing the best positions and light angles from the previous day — before the return drive to Marrakech via Todra Gorge, whose sheer pink walls at midday produce a striking high-contrast architectural image.",
        activities: [
          "Final dawn shoot in Erg Chebbi",
          "Return camel ride and camp departure",
          "Todra Gorge canyon shoot (midday high contrast)",
          "Return drive to Marrakech",
          "Arrive Marrakech for airport or hotel drop-off",
          "Final image review and export session with guide",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Fes-Saiss Airport (arrival transfer included)",
    mapLocation: "Route: Fes — Chefchaouen — Marrakech — Ouarzazate — Sahara",
    minAge: 14,
    physicalLevel: "Moderate — early starts required; optional pre-dawn dune climbs involve soft-sand ascent",
  },

  // ─── ADVENTURE TREK MOROCCO 8-DAY ────────────────────────────────────────────
  {
    tourId: "adventure-trek-morocco-8day",
    slug: "adventure-trek-morocco-8day",
    gallery: [
      "/tours/adventure-trek-morocco-8day.webp",
      "/destinations/atlas.webp",
      "/amazigh.webp",
      "/destinations/sahara.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Imlil — First Steps into the High Atlas",
        description:
          "Transfer from Marrakech to Imlil (1,740 m) in the High Atlas foothills — the main gateway to Toubkal National Park. Equipment check, mule loading, and guide introductions before an afternoon acclimatisation walk through the walnut-terraced valley above the village toward Aroumd.",
        activities: [
          "Transfer Marrakech to Imlil (90 minutes)",
          "Guide and porter introductions",
          "Equipment and pack weight check",
          "Acclimatisation walk — Imlil to Aroumd and back (2 hours)",
          "Berber dinner at mountain gite",
        ],
        meals: "Dinner included",
        accommodation: "Mountain gite, Imlil (1,740 m)",
      },
      {
        day: 2,
        title: "Imlil to Azzaden Valley via Tizi n'Mzik Pass",
        description:
          "The hardest day of the trek begins with the 750-metre ascent to the Tizi n'Mzik pass (2,489 m) — a lung-testing, thigh-burning climb through boulder fields and sparse juniper that rewards with a staggering panorama of the Toubkal massif. Descend into the remote Azzaden Valley, one of the High Atlas's least-visited corridors.",
        activities: [
          "Pre-dawn breakfast and early start (06:00)",
          "Imlil to Tizi n'Mzik pass (2,489 m) — 4-hour ascent",
          "Summit panorama: Toubkal, Azzaden Valley, and Atlas ridgelines",
          "Descent to Azzaden Valley (2–3 hours)",
          "Wildflower and medicinal plant identification walk",
          "Overnight mountain lodge, Azzaden",
        ],
        meals: "All meals included",
        accommodation: "Mountain lodge, Azzaden Valley",
      },
      {
        day: 3,
        title: "Azzaden Valley to Aït Aïssa — High Ridge Traverse",
        description:
          "A full ridge traverse day — tracking the crest of a secondary Atlas spur with unbroken views south toward the pre-Saharan plains and north toward the Marrakech basin. Village stops at Aït Aïssa provide the only human contact in a landscape of extraordinary solitude.",
        activities: [
          "Ridge traverse from Azzaden (8–9 hours, significant ascent and descent)",
          "Secondary Atlas ridge crest walk",
          "Remote village lunch stop at Aït Aïssa",
          "Traditional Amazigh lunch with farming family",
          "Overnight in Aït Aïssa village gite",
        ],
        meals: "All meals included",
        accommodation: "Village gite, Aït Aïssa",
      },
      {
        day: 4,
        title: "Mgoun Massif Approach — M'Goun Valley",
        description:
          "Transferring by 4x4 to the Mgoun Massif, Morocco's second-highest mountain range, the trek enters the dramatic M'Goun Valley — a 35-kilometre gorge carved through schist and limestone, its walls rising 700 metres above the valley floor. Camp in the gorge.",
        activities: [
          "4x4 transfer from Aït Aïssa to M'Goun Valley trailhead (3 hours)",
          "Enter M'Goun Gorges — begin gorge descent",
          "River crossings (wading may be required depending on season)",
          "Gorge camp setup — spectacular wall photography",
          "Overnight tented camp in the gorge",
        ],
        meals: "All meals included",
        accommodation: "Tented camp in M'Goun Gorges",
      },
      {
        day: 5,
        title: "M'Goun Gorges Descent and Rose Valley Emergence",
        description:
          "The full gorge traverse exit brings you out into the Valley of Roses near Kelaat M'Gouna — a dramatic transition from savage canyon to pastoral palmeraie and the fragrance of damask rose fields. Overnight in the valley.",
        activities: [
          "Full gorge traverse descent (7–8 hours)",
          "River crossings and canyon narrows",
          "Exit to Valley of Roses near Kelaat M'Gouna",
          "Rose cooperative visit",
          "Overnight guesthouse, Valley of Roses",
        ],
        meals: "All meals included",
        accommodation: "Guesthouse in Valley of Roses",
      },
      {
        day: 6,
        title: "Dades Gorges and Todra Gorge Rock Climbing Option",
        description:
          "Two of Morocco's greatest gorges in one day: the Dades with its contorted monkey-fingers limestone and the Todra with its 300-metre sheer walls. The Todra Gorge base is a world-famous rock climbing venue — your guide can arrange a half-day climbing session if desired.",
        activities: [
          "Drive through Dades Gorges — photo stop",
          "Todra Gorge canyon walk (1 hour)",
          "Optional Todra Gorge rock climbing session (beginner routes available)",
          "Tinghir palmeraie viewpoint",
          "Drive to Merzouga",
          "Arrive Erg Chebbi for sunset camel trek",
          "Luxury desert camp",
        ],
        meals: "Breakfast, lunch, and dinner included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 7,
        title: "Sahara — Pre-Dawn Summit, Sandboarding and Desert Camp",
        description:
          "After six days of mountain trekking, the Sahara offers a different kind of challenge — climbing 150 metres of soft sand at 04:30 in the dark — and a different kind of reward: an unobstructed horizon catching fire as the sun rises over Algeria. The afternoon is rest earned.",
        activities: [
          "Pre-dawn Sahara sunrise from Erg Chebbi summit",
          "Sandboarding on the northern dune face",
          "Traditional desert breakfast in camp",
          "Afternoon rest and optional dune walking",
          "Final Sahara night under stars",
          "Stargazing session with guide",
        ],
        meals: "All meals in camp included",
        accommodation: "Luxury tented camp, Erg Chebbi",
      },
      {
        day: 8,
        title: "Return to Marrakech via Ouarzazate",
        description:
          "The final drive west from Merzouga crosses the Draa Valley, passes through Ouarzazate, and climbs the Tizi n'Tichka back to Marrakech — completing a figure-of-eight arc across southern Morocco's most dramatic terrain.",
        activities: [
          "Camp departure after breakfast",
          "Erfoud fossil market brief stop",
          "Drive west via Ouarzazate",
          "Ait Ben Haddou photo stop",
          "Tizi n'Tichka High Atlas crossing",
          "Arrive Marrakech approximately 19:00",
        ],
        meals: "Breakfast and lunch included",
      },
    ],
    meetingPoint: "Marrakech Menara Airport or Djemaa el-Fna Square",
    mapLocation: "Route: Marrakech — Imlil — Azzaden — M'Goun Gorges — Merzouga — Marrakech",
    minAge: 16,
    physicalLevel: "Difficult — 6 to 9 hours hiking on consecutive days; prior multi-day trekking experience required",
  },

  // ─── CULTURAL IMMERSION MOROCCO 9-DAY ───────────────────────────────────────
  {
    tourId: "cultural-immersion-morocco-9day",
    slug: "cultural-immersion-morocco-9day",
    gallery: [
      "/tours/cultural-immersion-morocco-9day.webp",
      "/moroccan-handicrafts.webp",
      "/moroccan-tiles.webp",
      "/amazigh.webp",
      "/morocco-culture.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fes Arrival — Evening Medina Orientation",
        description:
          "Fes is the cultural capital of Morocco — a city where traditional crafts are practiced in the same workshops, by the same family guilds, using the same techniques, as they were in the 14th century. Your cultural guide meets you at the airport and begins the immersion over dinner in the medina.",
        activities: [
          "Fes airport pickup",
          "Riad check-in in Fes el-Bali medina",
          "Evening orientation walk with specialist cultural guide",
          "Dinner in a traditional riad restaurant",
        ],
        meals: "Dinner included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 2,
        title: "Fes Medina — Artisan Quarter Masterclasses",
        description:
          "A day dedicated to the living craft traditions of Fes — watching master artisans at work in the workshops that ring the medina, then participating in a hands-on zellij tile-cutting session and a Fassi pottery hand-painting demonstration. These are working cooperatives, not tourist attractions.",
        activities: [
          "Zellij tilework cutting workshop with master craftsman (2 hours)",
          "Fassi blue-and-white pottery hand-painting session",
          "Thuya woodwork cooperative — inlay technique demonstration",
          "Chouara Tannery — full process explanation from rooftop",
          "Al-Attarine spice souk — ingredient identification tour",
          "Traditional Fassi lunch at a medina restaurant",
          "Brass-beaters souk and copper artisan visit",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 3,
        title: "Fes Cooking School — Tagine, Bastilla and Moroccan Pastry",
        description:
          "A morning market walk with your chef-teacher to choose the day's ingredients, followed by a 3-hour cooking class in a riad kitchen preparing three Moroccan dishes: chicken and preserved lemon tagine, bastilla au pigeon, and chebakia sesame pastries. Lunch is what you cooked.",
        activities: [
          "Early morning market walk with chef — ingredient selection",
          "Spice souk orientation — building the Moroccan spice pantry",
          "3-hour cooking class: tagine, bastilla, and chebakia",
          "Lunch: eat what you cooked",
          "Afternoon free — medina exploration and souk shopping",
          "Sufi music evening at a medina zawiya (cultural performance)",
        ],
        meals: "Breakfast and cooking class lunch included",
        accommodation: "Riad in Fes el-Bali medina",
      },
      {
        day: 4,
        title: "Meknes, Volubilis and the Imperial Granaries",
        description:
          "Day excursion west to explore Meknes — the 17th-century Moroccan Versailles — and the Roman city of Volubilis, whose intact mosaics have survived 1,800 years of Moroccan sun.",
        activities: [
          "Drive to Meknes (1 hour)",
          "Bab Mansour gate and the imperial fortifications",
          "Moulay Ismail Mausoleum interior",
          "Heri es-Souani royal granaries and stables",
          "Volubilis Roman ruins — full guided tour",
          "Moulay Idriss sacred hilltop town",
          "Return to Fes",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Riad in Fes",
      },
      {
        day: 5,
        title: "Drive to Azilal — Carpet Weaving Cooperative in the Atlas",
        description:
          "The small town of Azilal at the northern edge of the High Atlas is home to one of Morocco's most authentic carpet weaving cooperatives — a women's collective producing the distinctive geometric-pattern Zemmour and Azilal rugs entirely by hand, from sheep shearing to finished carpet. A day's visit here is among Morocco's most memorable cultural experiences.",
        activities: [
          "Drive from Fes toward Azilal (4 hours)",
          "Arrive Azilal carpet weaving cooperative",
          "Full process tour — washing, dyeing, warping, weaving",
          "Weaving hands-on session with a weaver",
          "Lunch with cooperative members",
          "Carpet selection and fair-trade purchase opportunity",
          "Overnight guesthouse near Azilal",
        ],
        meals: "Breakfast and lunch included",
        accommodation: "Guesthouse near Azilal",
      },
      {
        day: 6,
        title: "Marrakech — Palaces, Souk and the Moroccan Museum of Arts",
        description:
          "Arriving in Marrakech by midday, the afternoon visits the Bahia Palace, the Dar Si Said Museum (the finest collection of Moroccan woodwork and embroidery in the country), and the medina souk quarter.",
        activities: [
          "Drive Azilal to Marrakech (2 hours)",
          "Bahia Palace interior visit",
          "Dar Si Said Museum of Moroccan Arts",
          "Ben Youssef Madrasa",
          "Souk quarter exploration with cultural guide",
          "Djemaa el-Fna dusk and food stalls",
        ],
        meals: "Breakfast and dinner included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 7,
        title: "Marrakech Cooking Class and Riad Restoration Tour",
        description:
          "A morning with a Marrakchi chef focusing on Marrakech-specific dishes that differ from Fes (the spice palette is different, the meat cuts are different, the bread is different). The afternoon visits a riad currently being restored by a master craftsman who explains the zellij, tadelakt plaster, and carved cedarwood techniques.",
        activities: [
          "Morning market walk with Marrakchi chef",
          "3-hour Marrakech cooking class — couscous and pastilla",
          "Lunch: eat your cooked dishes",
          "Afternoon riad restoration tour with master craftsman",
          "Tadelakt plaster application demonstration",
          "Zellij tilework cutting observation",
          "Carved cedar screen workshop",
        ],
        meals: "Breakfast and cooking class lunch included",
        accommodation: "Riad in Marrakech medina",
      },
      {
        day: 8,
        title: "Anti-Atlas Berber Family Homestay",
        description:
          "A full day and overnight with an Amazigh family in the Anti-Atlas foothills south of Marrakech — the cultural high point of the entire journey. Your host family receives you with the formal Berber welcome: three pours of mint tea (bitter as life, sweet as love, gentle as death), followed by a shared meal of hand-rolled couscous and slow-cooked lamb from their own flock.",
        activities: [
          "Drive from Marrakech to Anti-Atlas village (2 hours)",
          "Welcome ceremony — three-pour mint tea",
          "Family farm walk — goats, olive trees, and herb garden",
          "Women's bread baking demonstration and participation",
          "Traditional couscous lunch with the family",
          "Afternoon cultural exchange — traditional music and stories",
          "Traditional dinner and overnight at the family home",
        ],
        meals: "All meals with host family included",
        accommodation: "Berber family homestay, Anti-Atlas",
      },
      {
        day: 9,
        title: "Morning Market in Tiznit and Return to Marrakech",
        description:
          "The weekly souk at Tiznit — a silver-jewellery town famous for its Amazigh bracelets, fibulas, and pectorals — provides the journey's final artisan encounter before the return to Marrakech for the airport.",
        activities: [
          "Morning farewell with host family",
          "Drive to Tiznit (30 minutes)",
          "Tiznit silver souk — Amazigh jewellery cooperatives",
          "Tiznit ancient medina walls walk",
          "Return drive to Marrakech (2.5 hours)",
          "Marrakech Menara Airport transfer",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Fes-Saiss Airport (arrival transfer included)",
    mapLocation: "Route: Fes — Meknes — Azilal — Marrakech — Anti-Atlas",
    minAge: 8,
    physicalLevel: "Easy — all activities are accessible; some village walking on uneven ground",
  },

  // ─── LUXURY MOROCCO 7-DAY ───────────────────────────────────────────────────
  {
    tourId: "luxury-morocco-7day",
    slug: "luxury-morocco-7day",
    gallery: [
      "/tours/luxury-morocco-7day.webp",
      "/moroccan-tiles.webp",
      "/destinations/sahara.webp",
      "/moroccan-handicrafts.webp",
      "/amazigh.webp",
      "/background/hero-desert-image.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Casablanca Arrival — La Mamounia Suite and Private Medina",
        description:
          "Your private chauffeur collects you in a Mercedes Classe V from Mohammed V Airport and transfers you to your suite at La Mamounia, Marrakech — consistently ranked among the world's finest hotels, a 1923 palace set within 17 acres of Andalusian gardens. The evening features a private after-hours medina tour arranged exclusively for your group, entering the Ben Youssef Madrasa and a private palace courtyard after closing time.",
        activities: [
          "Casablanca airport pickup in private Mercedes Classe V",
          "Direct transfer to La Mamounia, Marrakech",
          "Suite check-in and property orientation",
          "La Mamounia spa welcome treatment (30 minutes)",
          "Private after-hours medina tour — madrasa and private palace",
          "Dinner at La Mamounia restaurant",
        ],
        meals: "Dinner at La Mamounia included",
        accommodation: "La Mamounia, Marrakech (suite)",
      },
      {
        day: 2,
        title: "Marrakech — Royal Hammam, Private Palace Tour and Rooftop Dinner",
        description:
          "Morning at La Mamounia's Royal Hammam — the full ritual in the most beautifully appointed hammam in Morocco. The afternoon visits the Saadian Tombs and El Badi Palace with a private museum director who provides context no guidebook contains. Evening rooftop dinner at La Mamounia's Churchill bar, where Winston Churchill painted the Atlas Mountains view.",
        activities: [
          "La Mamounia Royal Hammam — full ritual (2 hours)",
          "Private lunch in the Andalusian garden",
          "Private Saadian Tombs visit — director-guided",
          "El Badi Palace private access session",
          "Majorelle Garden private afternoon visit",
          "Churchill Bar rooftop aperitifs",
          "La Mamounia tasting menu dinner",
        ],
        meals: "Lunch and tasting menu dinner included",
        accommodation: "La Mamounia, Marrakech (suite)",
      },
      {
        day: 3,
        title: "Private Transfer to Fes — Riad Fes Relais and Chateaux",
        description:
          "The private jet option is available for the Marrakech-Fes leg; by road the drive is 6 hours through the Middle Atlas. You arrive at Riad Fes — a Relais and Chateaux property of extraordinary beauty in the medina — for a stay that represents the finest heritage hospitality in Morocco.",
        activities: [
          "Private transfer or optional jet Marrakech to Fes",
          "Riad Fes Relais and Chateaux check-in",
          "Private late afternoon medina walk with historian",
          "Riad Fes signature Moroccan dinner",
          "After-dinner Sufi music performance in the riad courtyard",
        ],
        meals: "Dinner at Riad Fes included",
        accommodation: "Riad Fes, Relais and Chateaux (suite)",
      },
      {
        day: 4,
        title: "Fes Medina — Private Museum Access and Artisan Masters",
        description:
          "A day of extraordinary access: the Batha Museum private visit with its collection of Fassi decorative arts, a private session with Fes's foremost zellij master who has worked on royal palace restorations, and the Chouara Tannery from an exclusive rooftop closed to regular visitors.",
        activities: [
          "Batha Museum private visit — Fassi decorative arts collection",
          "Private session with master zellij craftsman",
          "Madrasa Bou Inania interior — private access",
          "Exclusive tannery rooftop access",
          "Mellah Jewish Quarter — synagogue private visit",
          "Private dinner in the Riad Fes courtyard",
        ],
        meals: "Breakfast and private courtyard dinner included",
        accommodation: "Riad Fes, Relais and Chateaux (suite)",
      },
      {
        day: 5,
        title: "Helicopter to Erg Chebbi — Private Desert Camp",
        description:
          "The defining experience of the luxury itinerary: a helicopter flight from Fes to Erg Chebbi, crossing the Atlas in 40 minutes and arriving above the great dune field from altitude — an aerial perspective of the Sahara available to almost no one. Your private camp awaits: butler service, king bed, en-suite shower, private terrace facing the dunes.",
        activities: [
          "Helicopter transfer Fes to Erg Chebbi (weather permitting; road transfer as backup)",
          "Aerial Atlas crossing and Sahara arrival from above",
          "Private camp check-in — butler service",
          "Champagne and fresh fruit welcome on private terrace",
          "Private sunset camel ride for two",
          "Seven-course gourmet dinner in the dunes — private table",
          "Guided stargazing with astronomical telescope",
        ],
        meals: "All meals by private chef included",
        accommodation: "Private luxury tent suite, Erg Chebbi (butler service)",
      },
      {
        day: 6,
        title: "Sahara Sunrise, In-Camp Spa and Exclusive Dune Access",
        description:
          "Your private guide wakes you before first light and leads a solo dune climb — no other camps visible, no other tracks in the sand. After the sunrise, a spa therapist delivers a 90-minute hot stone massage to your private tent. The afternoon is yours entirely in a landscape of absolute silence.",
        activities: [
          "Private pre-dawn dune climb for Sahara sunrise",
          "90-minute in-tent hot stone massage",
          "Champagne brunch on the private terrace",
          "Private sandboarding session",
          "Afternoon hammock, reading, or optional quad excursion",
          "Sunset aperitifs on the dune crest",
          "Final private gourmet dinner under the stars",
        ],
        meals: "All meals by private chef included",
        accommodation: "Private luxury tent suite, Erg Chebbi",
      },
      {
        day: 7,
        title: "Return to Casablanca — Departure",
        description:
          "The return transfer to Casablanca via Ouarzazate and the dramatic Tizi n'Tichka pass — your concierge coordinates timing to suit your departure flight. The seven days close with the same private standard that opened them.",
        activities: [
          "Breakfast on the private terrace",
          "Private vehicle transfer Erg Chebbi to Casablanca (8 hours) or helicopter to Marrakech",
          "Ait Ben Haddou private stop",
          "Tizi n'Tichka pass crossing",
          "Casablanca Mohammed V Airport private departure lounge",
        ],
        meals: "Breakfast included",
      },
    ],
    meetingPoint: "Casablanca Mohammed V Airport (private arrival transfer)",
    mapLocation: "Route: Casablanca — Marrakech — Fes — Erg Chebbi",
    minAge: 5,
    physicalLevel: "Easy — all activities optional and conducted at your own pace with full support",
  },
];
