type L = Record<string, string>;

// Answer can be a static string or a function receiving (tourCount, minDays, maxDays)
type FaqFn = (count: number, minDays: number, maxDays: number) => string;

type FaqConfig = {
  /** Key from the "fromCity" message namespace, e.g. "faqQ1", "faqQ4BestTime" */
  qKey: string;
  /** Locale-keyed answers; falls back to "en" for missing locales */
  answers: Record<string, string | FaqFn>;
};

type CityConfig = {
  nameKey: string;
  cityIds: string[];
  otherCities: { nameKey: string; href: string }[];
  faqs: FaqConfig[];
};

type CityContent = {
  heroDesc: L;
  whyStartDesc: L;
  /** Short "most popular tour" label shown in the stats grid — all 6 locales */
  mostPopular: L;
};

// ─── Localised text content ────────────────────────────────────────────────

export const fromCityContent: Record<string, CityContent> = {
  marrakech: {
    mostPopular: {
      en: "Sahara 3-Day",
      ar: "الصحراء 3 أيام",
      fr: "Sahara 3 jours",
      es: "Sahara 3 días",
      de: "Sahara 3 Tage",
      it: "Sahara 3 giorni",
    },
    heroDesc: {
      en: "Marrakech is Morocco's most celebrated gateway — depart from the heart of the medina and reach the golden Sahara dunes, the High Atlas peaks, or the Atlantic coast within hours. Every tour is private, guided, and built around your group.",
      ar: "مراكش هي بوابة المغرب الأكثر شهرة — انطلق من قلب المدينة العتيقة وابلغ كثبان الصحراء الذهبية أو قمم الأطلس العالي أو الساحل الأطلسي في غضون ساعات. كل جولة خاصة مع مرشد متخصص وتُصمم حول مجموعتك.",
      fr: "Marrakech est la ville-porte la plus célébrée du Maroc — partez du cœur de la médina pour atteindre les dunes dorées du Sahara, les sommets du Haut Atlas ou la côte atlantique en quelques heures. Chaque circuit est privé, guidé et conçu autour de votre groupe.",
      es: "Marrakech es la puerta de entrada más famosa de Marruecos — parte desde el corazón de la medina y llega a las dunas doradas del Sahara, las cimas del Alto Atlas o la costa atlántica en pocas horas. Cada tour es privado, guiado y diseñado para tu grupo.",
      de: "Marrakesch ist Marokkos bekanntestes Reisetor — reisen Sie vom Herzen der Medina zu den goldenen Sahara-Dünen, den Gipfeln des Hohen Atlas oder der Atlantikküste in wenigen Stunden. Jede Tour ist privat, geführt und auf Ihre Gruppe zugeschnitten.",
      it: "Marrakech è la porta più celebre del Marocco — partite dal cuore della medina e raggiungete le dune d'oro del Sahara, le vette dell'Alto Atlante o la costa atlantica in poche ore. Ogni tour è privato, guidato e costruito attorno al vostro gruppo.",
    },
    whyStartDesc: {
      en: "Marrakech sits at Morocco's geographical centre, giving travellers unrivalled access to every major landscape in the country. The Sahara is a half-day drive south-east, the Atlantic coast is two hours west, and the High Atlas begins on the city's doorstep. Marrakech Menara Airport connects directly with dozens of European cities, making it the natural arrival hub for any Morocco itinerary. Its world-class medina — with riads, hammams, and the legendary Djemaa el-Fna — means your tour starts the moment you land.",
      ar: "تقع مراكش في المركز الجغرافي للمغرب، مما يمنح المسافرين وصولاً لا مثيل له إلى كل منطقة طبيعية رئيسية في البلاد. الصحراء على بُعد نصف يوم بالسيارة جنوباً شرقياً، والساحل الأطلسي على بُعد ساعتين غرباً، ويبدأ الأطلس العالي عند أبواب المدينة. يربط مطار مراكش المنارة المدينة مباشرةً بعشرات المدن الأوروبية، مما يجعلها مركز الوصول الطبيعي لأي مسار في المغرب. مدينتها العتيقة ذات المستوى العالمي — برياضاتها وحماماتها وساحة جامع الفنا الأسطورية — تعني أن رحلتك تبدأ في اللحظة التي تهبط فيها.",
      fr: "Marrakech se trouve au centre géographique du Maroc, offrant aux voyageurs un accès inégalé à tous les grands paysages du pays. Le Sahara est à une demi-journée de route au sud-est, la côte atlantique à deux heures à l'ouest, et le Haut Atlas commence aux portes de la ville. L'aéroport de Marrakech-Menara relie directement des dizaines de villes européennes, en faisant le hub d'arrivée naturel pour tout itinéraire marocain. Sa médina de classe mondiale — avec ses riads, hammams et la légendaire Djemaa el-Fna — signifie que votre circuit commence dès l'atterrissage.",
      es: "Marrakech se encuentra en el centro geográfico de Marruecos, dando a los viajeros un acceso incomparable a todos los paisajes principales del país. El Sahara está a medio día de viaje al sureste, la costa atlántica a dos horas al oeste, y el Alto Atlas comienza en las puertas de la ciudad. El aeropuerto de Marrakech-Menara conecta directamente con decenas de ciudades europeas, convirtiéndolo en el hub de llegada natural para cualquier itinerario marroquí. Su medina de clase mundial — con riads, hammams y la legendaria Djemaa el-Fna — significa que tu tour comienza en el momento en que aterrizas.",
      de: "Marrakesch liegt im geographischen Zentrum Marokkos und bietet Reisenden unvergleichlichen Zugang zu jeder wichtigen Landschaft des Landes. Die Sahara liegt eine halbe Tagesreise südöstlich, die Atlantikküste zwei Stunden westlich, und der Hohe Atlas beginnt vor den Toren der Stadt. Der Flughafen Marrakesch-Menara verbindet direkt mit Dutzenden europäischer Städte und macht ihn zum natürlichen Ankunftshub für jede Marokko-Route. Seine weltklasse Medina — mit Riads, Hammams und der legendären Djemaa el-Fna — bedeutet, dass Ihre Tour im Moment der Landung beginnt.",
      it: "Marrakech si trova al centro geografico del Marocco, offrendo ai viaggiatori un accesso impareggiabile a ogni importante paesaggio del paese. Il Sahara è a mezza giornata di viaggio a sud-est, la costa atlantica a due ore a ovest, e l'Alto Atlante inizia alle porte della città. L'aeroporto di Marrakech-Menara collega direttamente decine di città europee, rendendolo il naturale hub di arrivo per qualsiasi itinerario marocchino. La sua medina di livello mondiale — con riad, hammam e la leggendaria Djemaa el-Fna — significa che il vostro tour inizia nel momento in cui atterrate.",
    },
  },

  casablanca: {
    mostPopular: {
      en: "Morocco 7-Day",
      ar: "المغرب 7 أيام",
      fr: "Maroc 7 jours",
      es: "Marruecos 7 días",
      de: "Marokko 7 Tage",
      it: "Marocco 7 giorni",
    },
    heroDesc: {
      en: "Casablanca is Morocco's international gateway and the natural starting point for tours north along the Atlantic coast, east to the imperial cities of Fes and Meknes, or south through the Sahara to Marrakech. Land at Casa and begin exploring immediately.",
      ar: "الدار البيضاء هي بوابة المغرب الدولية ونقطة الانطلاق الطبيعية للجولات شمالاً على طول الساحل الأطلسي، أو شرقاً نحو المدن الإمبراطورية فاس ومكناس، أو جنوباً عبر الصحراء إلى مراكش. هبط في كازا وابدأ الاستكشاف فوراً.",
      fr: "Casablanca est la porte d'entrée internationale du Maroc et le point de départ naturel pour des circuits vers le nord le long de la côte atlantique, vers l'est jusqu'aux villes impériales de Fès et Meknès, ou vers le sud à travers le Sahara jusqu'à Marrakech. Atterrissez à Casa et commencez à explorer immédiatement.",
      es: "Casablanca es la puerta de entrada internacional de Marruecos y el punto de partida natural para tours al norte por la costa atlántica, al este hacia las ciudades imperiales de Fez y Mequínez, o al sur a través del Sahara hasta Marrakech. Llega a Casa y empieza a explorar de inmediato.",
      de: "Casablanca ist Marokkos internationales Eingangstor und natürlicher Ausgangspunkt für Touren nach Norden entlang der Atlantikküste, nach Osten zu den Kaiserstädten Fès und Meknes oder nach Süden durch die Sahara nach Marrakesch. Landen Sie in Casa und beginnen Sie sofort zu erkunden.",
      it: "Casablanca è la porta d'ingresso internazionale del Marocco e il punto di partenza naturale per tour a nord lungo la costa atlantica, a est verso le città imperiali di Fes e Meknès, o a sud attraverso il Sahara fino a Marrakech. Atterrate a Casa e iniziate subito a esplorare.",
    },
    whyStartDesc: {
      en: "Casablanca Mohammed V International Airport handles more international arrivals than any other airport in Morocco, making it the most convenient starting point for travellers from Europe, North America, and the Middle East. The city itself is worth a half-day introduction — the Hassan II Mosque, one of the largest and most breathtaking religious buildings in the world, rises directly from the Atlantic. From Casablanca, the whole country radiates outward: north to Tangier, east to Fes, south to Marrakech and the Sahara.",
      ar: "يستقبل مطار محمد الخامس الدولي في الدار البيضاء أكبر عدد من الوافدين الدوليين من بين جميع المطارات المغربية، مما يجعله نقطة الانطلاق الأكثر ملاءمة للمسافرين من أوروبا وأمريكا الشمالية والشرق الأوسط. المدينة نفسها تستحق نصف يوم استكشافي — مسجد الحسن الثاني، أحد أكبر المباني الدينية وأكثرها إبهاراً في العالم، يرتفع مباشرة من المحيط الأطلسي. من الدار البيضاء تنطلق كل الاتجاهات: شمالاً إلى طنجة، شرقاً إلى فاس، وجنوباً إلى مراكش والصحراء.",
      fr: "L'aéroport international Mohammed V de Casablanca accueille plus d'arrivées internationales que tout autre aéroport au Maroc, en faisant le point de départ le plus pratique pour les voyageurs d'Europe, d'Amérique du Nord et du Moyen-Orient. La ville elle-même mérite une demi-journée d'introduction — la Mosquée Hassan II, l'un des plus grands et plus saisissants édifices religieux du monde, s'élève directement depuis l'Atlantique. De Casablanca, tout le pays rayonne vers l'extérieur : au nord vers Tanger, à l'est vers Fès, au sud vers Marrakech et le Sahara.",
      es: "El Aeropuerto Internacional Mohammed V de Casablanca gestiona más llegadas internacionales que cualquier otro aeropuerto de Marruecos, convirtiéndolo en el punto de partida más conveniente para viajeros de Europa, América del Norte y Oriente Medio. La ciudad en sí merece una tarde de introducción — la Mezquita Hassan II, uno de los edificios religiosos más grandes e impresionantes del mundo, se eleva directamente desde el Atlántico. Desde Casablanca, todo el país irradia hacia afuera: al norte hacia Tánger, al este hacia Fez, al sur hacia Marrakech y el Sahara.",
      de: "Der internationale Flughafen Mohammed V von Casablanca verzeichnet mehr internationale Ankünfte als jeder andere Flughafen in Marokko und ist damit der praktischste Ausgangspunkt für Reisende aus Europa, Nordamerika und dem Nahen Osten. Die Stadt selbst lohnt einen einführenden halben Tag — die Hassan-II.-Moschee, eines der größten und beeindruckendsten Gotteshäuser der Welt, erhebt sich direkt aus dem Atlantik. Von Casablanca strahlt das ganze Land nach außen: nach Norden nach Tanger, nach Osten nach Fès, nach Süden nach Marrakesch und der Sahara.",
      it: "L'Aeroporto Internazionale Mohammed V di Casablanca gestisce più arrivi internazionali di qualsiasi altro aeroporto in Marocco, rendendolo il punto di partenza più conveniente per i viaggiatori da Europa, Nord America e Medio Oriente. La città stessa merita una mezza giornata introduttiva — la Moschea Hassan II, uno degli edifici religiosi più grandi e mozzafiato del mondo, si erge direttamente dall'Atlantico. Da Casablanca, tutto il paese si irradia verso l'esterno: a nord verso Tangeri, a est verso Fes, a sud verso Marrakech e il Sahara.",
    },
  },

  fes: {
    mostPopular: {
      en: "Fes–Sahara 3-Day",
      ar: "فاس والصحراء 3 أيام",
      fr: "Fès–Sahara 3 jours",
      es: "Fez–Sahara 3 días",
      de: "Fès–Sahara 3 Tage",
      it: "Fes–Sahara 3 giorni",
    },
    heroDesc: {
      en: "Fes is Morocco's intellectual heart and the closest imperial city to the Sahara — four hours of road south-east delivers you to the golden dunes of Erg Chebbi. Choose from Sahara sprints, blue city escapes, and imperial city circuits departing from the world's oldest living medieval city.",
      ar: "فاس هي عاصمة المغرب الفكرية وأقرب المدن الإمبراطورية إلى الصحراء — أربع ساعات جنوباً شرقاً تأخذك إلى كثبان إرق الشبي الذهبية. اختر من بين الجولات السريعة للصحراء أو زيارة المدينة الزرقاء أو دوائر المدن الإمبراطورية المنطلقة من أقدم مدينة وسطى لا تزال حية في العالم.",
      fr: "Fès est le cœur intellectuel du Maroc et la ville impériale la plus proche du Sahara — quatre heures de route au sud-est vous amènent aux dunes dorées de l'Erg Chebbi. Choisissez parmi des escapades sahariennes, des visites de la ville bleue et des circuits de villes impériales au départ de la plus ancienne médina médiévale vivante du monde.",
      es: "Fez es el corazón intelectual de Marruecos y la ciudad imperial más cercana al Sahara — cuatro horas al sureste te llevan a las dunas doradas del Erg Chebbi. Elige entre escapadas al Sahara, visitas a la ciudad azul y circuitos imperiales desde la ciudad medieval viva más antigua del mundo.",
      de: "Fès ist Marokkos intellektuelles Herz und die nächste Kaiserstadt zur Sahara — vier Stunden Fahrt nach Südosten bringen Sie zu den goldenen Dünen des Erg Chebbi. Wählen Sie aus Sahara-Ausflügen, blauen Stadtbesuchen und Kaiserstadttouren, die von der ältesten lebenden mittelalterlichen Stadt der Welt abfahren.",
      it: "Fes è il cuore intellettuale del Marocco e la città imperiale più vicina al Sahara — quattro ore di strada verso sud-est vi portano alle dune dorate dell'Erg Chebbi. Scegliete tra fughe nel Sahara, visite alla città blu e circuiti imperiali dalla più antica città medievale ancora viva del mondo.",
    },
    whyStartDesc: {
      en: "Fes el-Bali is the most complete medieval city on earth and a UNESCO World Heritage site — so your tour begins the moment you step into the medina. Strategically, Fes sits at the northern crossroads of Morocco: Chefchaouen, the legendary blue city, is 3 hours north-west; the Roman ruins of Volubilis and the imperial city of Meknes are just 90 minutes west; and the closest route to Erg Chebbi Sahara runs 4 hours south-east through the cedar forests of the Middle Atlas and the palm-lined Ziz Valley.",
      ar: "فاس البالي هي الأكمل من بين المدن الوسطى على وجه الأرض وموقع تراث عالمي لليونسكو — لذا تبدأ رحلتك في اللحظة التي تدخل فيها المدينة العتيقة. استراتيجياً، تقع فاس عند مفترق طرق شمال المغرب: شفشاون، المدينة الزرقاء الأسطورية، على بُعد 3 ساعات شمالاً غرباً؛ والآثار الرومانية في وليلي والمدينة الإمبراطورية مكناس على بُعد 90 دقيقة غرباً؛ وأقرب طريق إلى صحراء إرق الشبي يسير 4 ساعات جنوباً شرقاً عبر غابات الأرز في الأطلس المتوسط ووادي زيز المكسو بالنخيل.",
      fr: "Fès el-Bali est la ville médiévale la plus complète sur terre et un site du Patrimoine mondial de l'UNESCO — votre circuit commence donc dès que vous entrez dans la médina. Stratégiquement, Fès se trouve au carrefour nord du Maroc : Chefchaouen, la légendaire ville bleue, est à 3 heures au nord-ouest ; les ruines romaines de Volubilis et la ville impériale de Meknès sont à 90 minutes à l'ouest ; et la route la plus directe vers le Sahara de l'Erg Chebbi se déroule sur 4 heures au sud-est à travers les forêts de cèdres du Moyen Atlas et la vallée du Ziz bordée de palmiers.",
      es: "Fes el-Bali es la ciudad medieval más completa de la tierra y Patrimonio Mundial de la UNESCO — así que tu tour comienza en el momento en que entras en la medina. Estratégicamente, Fez se encuentra en el cruce norte de Marruecos: Chaouen, la legendaria ciudad azul, está a 3 horas al noroeste; las ruinas romanas de Volubilis y la ciudad imperial de Mequínez están a 90 minutos al oeste; y la ruta más directa al Sahara del Erg Chebbi discurre 4 horas al sureste a través de los bosques de cedros del Medio Atlas y el valle del Ziz bordeado de palmeras.",
      de: "Fès el-Bali ist die vollständigste mittelalterliche Stadt der Erde und UNESCO-Welterbe — Ihre Tour beginnt also in dem Moment, in dem Sie die Medina betreten. Strategisch liegt Fès am nördlichen Kreuzweg Marokkos: Chefchaouen, die legendäre blaue Stadt, ist 3 Stunden nordwestlich; die römischen Ruinen von Volubilis und die Kaiserstadt Meknes sind 90 Minuten westlich; und die direkteste Route zum Erg-Chebbi-Sahara verläuft 4 Stunden südöstlich durch die Zedernwälder des Mittleren Atlas und das palmengesäumte Ziz-Tal.",
      it: "Fes el-Bali è la città medievale più completa del mondo e Sito del Patrimonio Mondiale dell'UNESCO — il vostro tour inizia quindi nel momento in cui entrate nella medina. Strategicamente, Fes si trova al crocevia settentrionale del Marocco: Chefchaouen, la leggendaria città blu, è a 3 ore a nord-ovest; le rovine romane di Volubilis e la città imperiale di Meknès sono a 90 minuti a ovest; e il percorso più diretto verso il Sahara dell'Erg Chebbi si svolge 4 ore a sud-est attraverso le foreste di cedri del Medio Atlante e la valle dello Ziz fiancheggiata da palme.",
    },
  },

  tangier: {
    mostPopular: {
      en: "Tangier–Fes 3-Day",
      ar: "طنجة–فاس 3 أيام",
      fr: "Tanger–Fès 3 jours",
      es: "Tánger–Fez 3 días",
      de: "Tanger–Fès 3 Tage",
      it: "Tangeri–Fes 3 giorni",
    },
    heroDesc: {
      en: "Tangier is where the Atlantic meets the Mediterranean and where Europe meets Africa — the gateway city for travellers arriving by ferry from Spain. Depart from Tangier into the blue mountain city of Chefchaouen, the ancient medinas of Fes, or the full length of Morocco down to Marrakech.",
      ar: "طنجة هي حيث يلتقي الأطلسي بالمتوسط وحيث تلتقي أوروبا بأفريقيا — مدينة البوابة للمسافرين القادمين بالعبّارة من إسبانيا. انطلق من طنجة نحو مدينة شفشاون الجبلية الزرقاء أو المدن العتيقة في فاس أو طول المغرب وصولاً إلى مراكش.",
      fr: "Tanger est là où l'Atlantique rencontre la Méditerranée et où l'Europe rencontre l'Afrique — la ville-porte pour les voyageurs arrivant par ferry depuis l'Espagne. Partez de Tanger vers la ville montagnarde bleue de Chefchaouen, les anciennes médinas de Fès, ou la longueur entière du Maroc jusqu'à Marrakech.",
      es: "Tánger es donde el Atlántico se encuentra con el Mediterráneo y donde Europa se encuentra con África — la ciudad puerta para viajeros que llegan en ferry desde España. Parte de Tánger hacia la ciudad azul de montaña de Chaouen, las antiguas medinas de Fez, o recorre todo Marruecos hasta Marrakech.",
      de: "Tanger ist, wo der Atlantik auf das Mittelmeer trifft und wo Europa auf Afrika trifft — die Tor-Stadt für Reisende, die mit der Fähre aus Spanien ankommen. Starten Sie von Tanger aus in die blaue Bergstadt Chefchaouen, die alten Medinas von Fès oder entlang der gesamten Länge Marokkos bis nach Marrakesch.",
      it: "Tangeri è dove l'Atlantico incontra il Mediterraneo e dove l'Europa incontra l'Africa — la città porta per i viaggiatori che arrivano in traghetto dalla Spagna. Partite da Tangeri verso la città blu di montagna di Chefchaouen, le antiche medine di Fes, o percorrete tutta la lunghezza del Marocco fino a Marrakech.",
    },
    whyStartDesc: {
      en: "Tangier occupies a unique position at the very top of Morocco — a city shaped by centuries of diplomacy, literary exile, and maritime commerce. For travellers arriving from Spain by ferry (35 minutes from Tarifa), it is the most natural starting point for any northward Morocco itinerary. Cap Spartel, just 14 km from the city, is one of North Africa's most spectacular headlands: the exact point where the Atlantic and Mediterranean waters merge.",
      ar: "تحتل طنجة موقعاً فريداً في أعلى المغرب — مدينة شكّلها قرون من الدبلوماسية والنفي الأدبي والتجارة البحرية. للمسافرين القادمين من إسبانيا بالعبّارة (35 دقيقة من طريفة)، هي النقطة الأكثر طبيعية للانطلاق في أي مسار شمالي في المغرب. رأس سبارتيل، على بُعد 14 كم فقط من المدينة، هو أحد أكثر الرؤوس البرية إثارةً في شمال أفريقيا: النقطة الدقيقة التي تلتقي فيها مياه الأطلسي والمتوسط.",
      fr: "Tanger occupe une position unique au sommet du Maroc — une ville façonnée par des siècles de diplomatie, d'exil littéraire et de commerce maritime. Pour les voyageurs arrivant d'Espagne par ferry (35 minutes de Tarifa), c'est le point de départ le plus naturel pour tout itinéraire marocain vers le nord. Cap Spartel, à seulement 14 km de la ville, est l'un des caps les plus spectaculaires d'Afrique du Nord : le point exact où les eaux de l'Atlantique et de la Méditerranée se fondent.",
      es: "Tánger ocupa una posición única en la cima de Marruecos — una ciudad moldeada por siglos de diplomacia, exilio literario y comercio marítimo. Para los viajeros que llegan de España en ferry (35 minutos de Tarifa), es el punto de partida más natural para cualquier itinerario marroquí hacia el norte. Cabo Espartel, a solo 14 km de la ciudad, es uno de los cabos más espectaculares del norte de África: el punto exacto donde se unen las aguas del Atlántico y el Mediterráneo.",
      de: "Tanger nimmt eine einzigartige Position an der Spitze Marokkos ein — eine Stadt, geprägt von Jahrhunderten der Diplomatie, des literarischen Exils und des Seehandels. Für Reisende, die mit der Fähre aus Spanien ankommen (35 Minuten von Tarifa), ist es der natürlichste Ausgangspunkt für jede nordmarokkanische Reiseroute. Kap Spartel, nur 14 km von der Stadt entfernt, ist eines der spektakulärsten Kaps Nordafrikas: genau der Punkt, wo die Gewässer des Atlantiks und des Mittelmeers zusammenfließen.",
      it: "Tangeri occupa una posizione unica al vertice del Marocco — una città plasmata da secoli di diplomazia, esilio letterario e commercio marittimo. Per i viaggiatori che arrivano dalla Spagna in traghetto (35 minuti da Tarifa), è il punto di partenza più naturale per qualsiasi itinerario marocchino verso nord. Capo Spartel, a soli 14 km dalla città, è uno dei promontori più spettacolari del Nord Africa: il punto esatto dove si uniscono le acque dell'Atlantico e del Mediterraneo.",
    },
  },

  agadir: {
    mostPopular: {
      en: "Beach & Surf 3-Day",
      ar: "شاطئ وتصفيح 3 أيام",
      fr: "Plage & Surf 3 jours",
      es: "Playa & Surf 3 días",
      de: "Strand & Surfen 3 Tage",
      it: "Spiaggia & Surf 3 giorni",
    },
    heroDesc: {
      en: "Agadir is Morocco's sun-drenched Atlantic resort city and the gateway to two of the country's most underexplored landscapes: the rugged Anti-Atlas mountains to the east and the world-class surf breaks of Taghazout to the north. Every tour here is an immersion, not a survey.",
      ar: "أكادير هي مدينة المنتجع الأطلسية المشمسة في المغرب وبوابة اثنين من أكثر المناطق الطبيعية غير المكتشفة في البلاد: جبال الأطلس الصغير الوعرة شرقاً وشواطئ التصفيح العالمية في تاغازوت شمالاً. كل جولة هنا هي غمر حقيقي وليست مجرد استعراض.",
      fr: "Agadir est la station balnéaire atlantique ensoleillée du Maroc et la porte d'entrée vers deux des paysages les moins explorés du pays : les rugueux monts Anti-Atlas à l'est et les spots de surf de classe mondiale de Taghazout au nord. Chaque circuit ici est une immersion, pas un aperçu.",
      es: "Agadir es la ciudad resort atlántica soleada de Marruecos y la puerta de entrada a dos de los paisajes más inexplorados del país: las escarpadas montañas del Anti-Atlas al este y las olas de surf de clase mundial de Taghazout al norte. Cada tour aquí es una inmersión, no una visita rápida.",
      de: "Agadir ist Marokkos sonnenverwöhnte atlantische Ferienstadt und das Tor zu zwei der am wenigsten erkundeten Landschaften des Landes: dem rauen Anti-Atlas-Gebirge im Osten und den weltklasse Surfwellen von Taghazout im Norden. Jede Tour hier ist ein Eintauchen, kein oberflächlicher Überblick.",
      it: "Agadir è la soleggiata città resort atlantica del Marocco e il portale verso due dei paesaggi meno esplorati del paese: le aspre montagne dell'Anti-Atlante a est e le onde da surf di classe mondiale di Taghazout a nord. Ogni tour qui è un'immersione, non una panoramica veloce.",
    },
    whyStartDesc: {
      en: "Agadir Al-Massira Airport serves direct flights from the UK, France, Germany, and the Netherlands, making it a convenient arrival gateway for southern Morocco. The city itself sits at the mouth of the Souss Valley — one of the world's most important argan oil regions — and is flanked by two extraordinary hinterlands: 20 km north, Taghazout delivers world-class Atlantic point break surf; 40 km east, the Anti-Atlas begins — a vast granite massif of remote Amazigh villages, terraced almond orchards, and prehistoric rock art.",
      ar: "يخدم مطار أكادير المسيرة رحلات مباشرة من المملكة المتحدة وفرنسا وألمانيا وهولندا، مما يجعله بوابة وصول ملائمة لجنوب المغرب. تقع المدينة نفسها عند مصب وادي سوس — أحد أهم مناطق زيت الأرغان في العالم — وتحيط بها منطقتان استثنائيتان: 20 كم شمالاً، تقدم تاغازوت موجات تصفيح أطلسية عالمية المستوى؛ 40 كم شرقاً، يبدأ الأطلس الصغير — كتلة غرانيتية شاسعة من قرى أمازيغية نائية وبساتين اللوز المدرجة والفن الصخري ما قبل التاريخ.",
      fr: "L'aéroport Agadir Al Massira dessert des vols directs depuis le Royaume-Uni, la France, l'Allemagne et les Pays-Bas, en faisant une porte d'entrée pratique pour le sud du Maroc. La ville elle-même se situe à l'embouchure de la vallée du Souss — l'une des régions d'huile d'argan les plus importantes au monde — et est flanquée de deux arrière-pays extraordinaires : à 20 km au nord, Taghazout offre un surf de classe mondiale sur des rouleaux atlantiques ; à 40 km à l'est, débute l'Anti-Atlas — un vaste massif granitique de villages amazighs reculés, de vergers d'amandiers en terrasses et d'art rupestre préhistorique.",
      es: "El aeropuerto Agadir Al Massira tiene vuelos directos desde el Reino Unido, Francia, Alemania y los Países Bajos, lo que lo convierte en una cómoda puerta de entrada para el sur de Marruecos. La ciudad en sí se sitúa en la desembocadura del valle del Souss — una de las regiones de aceite de argán más importantes del mundo — y está flanqueada por dos extraordinarios entornos: a 20 km al norte, Taghazout ofrece olas de surf atlánticas de clase mundial; a 40 km al este comienza el Anti-Atlas — un vasto macizo granítico de remotas aldeas amazigh, huertos de almendros en terrazas y arte rupestre prehistórico.",
      de: "Der Flughafen Agadir Al Massira bedient Direktflüge aus dem Vereinigten Königreich, Frankreich, Deutschland und den Niederlanden und ist damit ein praktisches Eingangstor für den südlichen Teil Marokkos. Die Stadt selbst liegt an der Mündung des Souss-Tals — einer der wichtigsten Arganöl-Regionen der Welt — und wird von zwei außergewöhnlichen Hinterlanden flankiert: 20 km nördlich bietet Taghazout weltklasse atlantische Surfwellen; 40 km östlich beginnt das Anti-Atlas-Gebirge — ein riesiges Granitmassiv aus abgelegenen Amazigh-Dörfern, terrassierten Mandelplantagen und prähistorischer Felskunst.",
      it: "L'Aeroporto Agadir Al Massira serve voli diretti dal Regno Unito, Francia, Germania e Paesi Bassi, rendendolo un comodo punto di ingresso per il Marocco meridionale. La città stessa si trova alla foce della Valle del Souss — una delle regioni più importanti al mondo per l'olio di argan — ed è fiancheggiata da due straordinari entroterra: 20 km a nord, Taghazout offre onde da surf atlantiche di classe mondiale; 40 km a est inizia l'Anti-Atlante — un vasto massiccio granitico di remoti villaggi amazigh, frutteti di mandorli terrazzati e arte rupestre preistorica.",
    },
  },
};

// ─── Per-city configuration (tour IDs, links, FAQs) ──────────────────────

export const fromCityConfig: Record<string, CityConfig> = {
  marrakech: {
    nameKey: "cityMarrakechName",
    cityIds: [
      "sahara-3day-marrakech",
      "atlas-mountains-trek-3day",
      "essaouira-coastal-2day",
      "merzouga-luxury-camp-2day",
      "dades-draa-valley-3day",
      "private-riad-marrakech-2day",
      "toubkal-summit-expedition-3day",
      "marrakech-merzouga-3day",
      "marrakech-fes-desert-5day",
      "atlas-valleys-expedition-4day",
      "family-adventure-morocco-8day",
      "romantic-honeymoon-morocco-7day",
      "adventure-trek-morocco-8day",
      "marrakech-agadir-coastal-2day",
      "marrakech-zagora-2day",
      "marrakech-coastal-3day",
      "marrakech-desert-kasbahs-3day",
      "marrakech-north-4day",
      "marrakech-toubkal-4day",
      "luxury-desert-4day",
      "mountains-valleys-5day",
      "marrakech-north-6day",
      "sahara-mountains-6day",
      "marrakech-desert-south-6day",
      "trekking-circuit-7day",
      "luxury-south-8day",
      "desert-coast-north-10day",
      "adventure-complete-12day",
      "complete-south-morocco-12day",
      "marrakech-skoura-roses-3day",
      "marrakech-mountain-luxury-5day",
    ],
    otherCities: [
      { nameKey: "cityCasablancaName", href: "/tours/from-casablanca" },
      { nameKey: "cityFesName",        href: "/tours/from-fes" },
      { nameKey: "cityTangierName",    href: "/tours/from-tangier" },
      { nameKey: "cityAgadirName",     href: "/tours/from-agadir" },
    ],
    faqs: [
      {
        qKey: "faqQ1",
        answers: {
          en: (count) =>
            `From Marrakech you can book ${count} tours including 2-day escapes to 12-day grand circuits. Top options include Sahara desert tours, High Atlas treks, and coastal escapes to Essaouira and Agadir.`,
          ar: (count) =>
            `من مراكش يمكنك حجز ${count} جولة تشمل الرحلات القصيرة لليومين وحتى الدوائر الكبرى لـ12 يوماً. تشمل الخيارات المميزة جولات الصحراء ومسيرات الأطلس العالي والرحلات الساحلية إلى الصويرة وأكادير.`,
        },
      },
      {
        qKey: "faqQ2",
        answers: {
          en: (_, min, max) =>
            `Tours from Marrakech range from ${min} days (Essaouira coastal escape or Zagora desert overnight) to ${max} days (grand Morocco circuit). The most popular duration is 3 days — enough for a Sahara round trip from Marrakech.`,
          ar: (_, min, max) =>
            `تتراوح جولات مراكش بين ${min} أيام (الرحلة الساحلية إلى الصويرة أو ليلة صحراء زاغورة) و${max} يوماً (الدائرة الكبرى للمغرب). المدة الأكثر شعبية هي 3 أيام — كافية لرحلة ذهاباً وإياباً إلى الصحراء.`,
        },
      },
      {
        qKey: "faqQ3",
        answers: {
          en: "All Elegant Travel Service tours from Marrakech include private transport, a certified English-speaking guide, and accommodation. Most include meals and all activities listed in the itinerary.",
          ar: "تشمل جميع جولات Elegant Travel Service من مراكش التنقل الخاص ومرشداً سياحياً متخصصاً والإقامة. تشمل معظم الجولات الوجبات وجميع الأنشطة المدرجة في البرنامج.",
        },
      },
      {
        qKey: "faqQ4BestTime",
        answers: {
          en: "April–May and September–October are ideal: comfortable temperatures, clear skies, and no peak-season crowds. Sahara tours run year-round but avoid July–August for the desert stage.",
          ar: "أبريل–مايو وسبتمبر–أكتوبر هي الأمثل: درجات حرارة مريحة وسماء صافية وبعيداً عن ازدحام موسم الذروة. جولات الصحراء متاحة على مدار العام لكن يُنصح بتجنب يوليو–أغسطس في مرحلة الصحراء.",
        },
      },
      {
        qKey: "faqQ5",
        answers: {
          en: "Yes. All Elegant Travel Service tours from Marrakech are private by default — maximum 12 people, your own vehicle and guide. We do not run shared bus tours.",
          ar: "نعم. جميع جولات Elegant Travel Service من مراكش خاصة بطبيعتها — 12 شخصاً كحد أقصى، مركبتك الخاصة ومرشدك الخاص. لا نُقدّم جولات بالحافلات المشتركة.",
        },
      },
    ],
  },

  casablanca: {
    nameKey: "cityCasablancaName",
    cityIds: [
      "casablanca-rabat-2day",
      "atlantic-coast-road-trip-5day",
      "casablanca-imperial-3day",
      "casablanca-desert-4day",
      "casablanca-fes-4day",
      "casablanca-desert-loop-5day",
      "casablanca-tangier-coast-5day",
      "luxury-imperial-6day",
      "surf-coast-7day",
      "casablanca-complete-8day",
      "casablanca-circuit-7day",
      "morocco-highlights-7day",
      "imperial-riad-luxury-8day",
    ],
    otherCities: [
      { nameKey: "cityMarrakechName", href: "/tours/from-marrakech" },
      { nameKey: "cityFesName",       href: "/tours/from-fes" },
      { nameKey: "cityTangierName",   href: "/tours/from-tangier" },
      { nameKey: "cityAgadirName",    href: "/tours/from-agadir" },
    ],
    faqs: [
      {
        qKey: "faqQ1",
        answers: {
          en: (count) =>
            `From Casablanca you can book ${count} tours ranging from 2-day city breaks to 8-day complete Morocco journeys. Top options include the 7-day Morocco Highlights, the Sahara desert loop, and the Atlantic coastal road trip.`,
          ar: (count) =>
            `من الدار البيضاء يمكنك حجز ${count} جولة تتراوح بين إقامات قصيرة لليومين ومسارات شاملة لـ8 أيام. تشمل الخيارات المميزة أبرز معالم المغرب لـ7 أيام ودائرة صحراء الساحل الأطلسي.`,
        },
      },
      {
        qKey: "faqQ2",
        answers: {
          en: (_, min, max) =>
            `Tours from Casablanca range from ${min} days (Casablanca and Rabat city break) to ${max} days (complete Morocco from Casablanca). The most popular is 7 days — covering the imperial cities, Sahara, and Marrakech.`,
          ar: (_, min, max) =>
            `تتراوح جولات الدار البيضاء بين ${min} أيام (رحلة المدينة مع الرباط) و${max} أيام (جولة المغرب الشامل). الأكثر شعبية هي 7 أيام — تغطي المدن الإمبراطورية والصحراء ومراكش.`,
        },
      },
      {
        qKey: "faqQ3",
        answers: {
          en: "All Elegant Travel Service tours from Casablanca include private transport, a certified English-speaking guide, and accommodation. Most include daily breakfast, selected dinners, and all entrance fees listed in the itinerary.",
          ar: "تشمل جميع جولات Elegant Travel Service من الدار البيضاء التنقل الخاص ومرشداً سياحياً متخصصاً والإقامة. تشمل معظم الجولات الإفطار اليومي والعشاء المختار ورسوم الدخول.",
        },
      },
      {
        qKey: "faqQ4GoodBase",
        answers: {
          en: "Yes. Casablanca Mohammed V International Airport is Morocco's busiest, with direct flights from North America and dozens of European cities. All major Morocco destinations — Fes, Marrakech, Tangier, and the Sahara — are reachable by private 4x4 in a day.",
          ar: "نعم. مطار محمد الخامس الدولي هو الأنشط في المغرب بوصلات مباشرة من أمريكا الشمالية وعشرات المدن الأوروبية. جميع الوجهات الكبرى في المغرب — فاس ومراكش وطنجة والصحراء — في متناول السيارة الخاصة ليوم واحد.",
        },
      },
      {
        qKey: "faqQ5",
        answers: {
          en: "Yes. All Elegant Travel Service tours from Casablanca are private — your own vehicle, your own guide, and your own schedule. Maximum group size is 14 people; we do not mix groups.",
          ar: "نعم. جميع جولات Elegant Travel Service من الدار البيضاء خاصة — مركبتك ومرشدك وجدول أعمالك. الحد الأقصى لحجم المجموعة 14 شخصاً ولا نخلط المجموعات.",
        },
      },
    ],
  },

  fes: {
    nameKey: "cityFesName",
    cityIds: [
      "fes-imperial-city-2day",
      "fes-meknes-2day",
      "sahara-express-fes-2day",
      "fes-chefchaouen-2day",
      "fes-sahara-3day",
      "fes-desert-4day",
      "imperial-cities-grand-6day",
      "desert-fes-marrakech-7day",
      "fes-sahara-coast-6day",
      "chefchaouen-blue-city-2day",
      "luxury-imperial-5day",
    ],
    otherCities: [
      { nameKey: "cityMarrakechName",  href: "/tours/from-marrakech" },
      { nameKey: "cityCasablancaName", href: "/tours/from-casablanca" },
      { nameKey: "cityTangierName",    href: "/tours/from-tangier" },
      { nameKey: "cityAgadirName",     href: "/tours/from-agadir" },
    ],
    faqs: [
      {
        qKey: "faqQ1",
        answers: {
          en: (count) =>
            `From Fes you can book ${count} tours including quick 2-day Sahara sprints and 7-day desert loops to Marrakech. Top picks include the 3-day Fes to Sahara Desert Escape, the 2-day Fes to Chefchaouen Blue City tour, and the 6-day Imperial Cities Grand Tour.`,
          ar: (count) =>
            `من فاس يمكنك حجز ${count} جولة تشمل الرحلات السريعة للصحراء لليومين وحلقات الصحراء لـ7 أيام إلى مراكش. تشمل الخيارات المميزة رحلة فاس إلى الصحراء لـ3 أيام وجولة المدينة الزرقاء شفشاون لليومين والجولة الكبرى للمدن الإمبراطورية لـ6 أيام.`,
        },
      },
      {
        qKey: "faqQ2",
        answers: {
          en: (_, min, max) =>
            `Tours from Fes range from ${min} days (Fes imperial city explorer or Sahara express) to ${max} days (desert loop from Fes to Marrakech via Sahara). The most popular is 3 days — enough for a Sahara overnight and return through Todra Gorge.`,
          ar: (_, min, max) =>
            `تتراوح جولات فاس بين ${min} أيام (مستكشف المدينة الإمبراطورية أو السفر السريع للصحراء) و${max} يوماً (دائرة الصحراء من فاس إلى مراكش). الأكثر شعبية هي 3 أيام — كافية لقضاء ليلة في الصحراء والعودة عبر وادي تودرة.`,
        },
      },
      {
        qKey: "faqQ3",
        answers: {
          en: "All Elegant Travel Service tours from Fes include private 4x4 transport, a certified English-speaking guide, and accommodation. Most tours include daily breakfast, selected dinners, and all entrance fees — including Volubilis Roman ruins and medina monuments.",
          ar: "تشمل جميع جولات Elegant Travel Service من فاس تنقلاً خاصاً بسيارة 4x4 ومرشداً سياحياً معتمداً والإقامة. تشمل معظم الجولات الإفطار اليومي والعشاء المختار ورسوم الدخول بما فيها آثار وليلي الرومانية ومعالم المدينة العتيقة.",
        },
      },
      {
        qKey: "faqQ4GoodBase",
        answers: {
          en: "Fes is arguably Morocco's most strategically placed city for touring. It sits mid-way between Casablanca and Tangier on the north axis, and is the closest major city to Erg Chebbi Sahara (4 hours by road). The Chefchaouen blue city is just 3 hours north-west.",
          ar: "فاس ربما أكثر المدن المغربية استراتيجية للسياحة. تقع في المنتصف بين الدار البيضاء وطنجة على المحور الشمالي، وهي أقرب مدينة كبرى إلى صحراء إرق الشبي (4 ساعات بالسيارة). ومدينة شفشاون الزرقاء على بُعد 3 ساعات شمالاً غرباً.",
        },
      },
      {
        qKey: "faqQ5",
        answers: {
          en: "Yes. All Elegant Travel Service tours from Fes are private — your own 4x4 vehicle, your own certified guide, and a maximum of 12 people. We do not combine groups from different bookings.",
          ar: "نعم. جميع جولات Elegant Travel Service من فاس خاصة — سيارة 4x4 خاصة ومرشد معتمد والحد الأقصى 12 شخصاً. لا نجمع مجموعات من حجوزات مختلفة.",
        },
      },
    ],
  },

  tangier: {
    nameKey: "cityTangierName",
    cityIds: [
      "tangier-northern-morocco-2day",
      "north-morocco-loop-7day",
      "tangier-tetouan-2day",
      "tangier-chefchaouen-fes-3day",
      "tangier-marrakech-5day",
      "asilah-larache-coast-2day",
    ],
    otherCities: [
      { nameKey: "cityMarrakechName",  href: "/tours/from-marrakech" },
      { nameKey: "cityCasablancaName", href: "/tours/from-casablanca" },
      { nameKey: "cityFesName",        href: "/tours/from-fes" },
      { nameKey: "cityAgadirName",     href: "/tours/from-agadir" },
    ],
    faqs: [
      {
        qKey: "faqQ1",
        answers: {
          en: (count) =>
            `From Tangier you can book ${count} tours ranging from 2-day northern Morocco escapes to 7-day full northern loops. Highlights include the 3-day Tangier to Fes via Chefchaouen circuit and the 5-day Morocco top-to-bottom traverse from Tangier to Marrakech.`,
          ar: (count) =>
            `من طنجة يمكنك حجز ${count} جولة تتراوح بين رحلات المغرب الشمالي لليومين ومسارات الشمال الكاملة لـ7 أيام. تشمل الأبرز: دائرة طنجة إلى فاس عبر شفشاون لـ3 أيام ورحلة المغرب من أقصى الشمال إلى الجنوب لـ5 أيام.`,
        },
      },
      {
        qKey: "faqQ2",
        answers: {
          en: (_, min, max) =>
            `Tours from Tangier range from ${min} days (Tangier northern Morocco or Tetouan gateway tours) to ${max} days (7-day Northern Morocco Loop through Chefchaouen, Meknes, Volubilis, and Fes). The 3-day Tangier to Fes via Chefchaouen is the most popular option.`,
          ar: (_, min, max) =>
            `تتراوح جولات طنجة بين ${min} أيام (جولة المغرب الشمالي أو تطوان) و${max} أيام (دائرة الشمال الكاملة عبر شفشاون ومكناس ووليلي وفاس). والأكثر شعبية هي 3 أيام — طنجة إلى فاس عبر شفشاون.`,
        },
      },
      {
        qKey: "faqQ3",
        answers: {
          en: "All Elegant Travel Service tours from Tangier include private transport, a certified English-speaking guide, and accommodation. Ferry port transfers in Tangier are included for most tours. Most itineraries include daily breakfast, selected dinners, and all entrance fees.",
          ar: "تشمل جميع جولات Elegant Travel Service من طنجة التنقل الخاص ومرشداً سياحياً معتمداً والإقامة. تشمل معظم الجولات نقل من وإلى ميناء العبارة. وتشمل معظم البرامج الإفطار اليومي والعشاء المختار ورسوم الدخول.",
        },
      },
      {
        qKey: "faqQ4GoodBase",
        answers: {
          en: "Tangier is the ideal entry point for travellers crossing from Spain — the ferry from Tarifa takes 35 minutes. From Tangier, the classic northern route heads south via Chefchaouen and Fes, or you can take the direct coastal road south towards Casablanca and Marrakech.",
          ar: "طنجة هي نقطة الدخول المثالية للمسافرين القادمين من إسبانيا — العبارة من طريفة تستغرق 35 دقيقة. من طنجة يمتد الطريق الكلاسيكي جنوباً عبر شفشاون وفاس، أو يمكنك أخذ الطريق الساحلي المباشر نحو الدار البيضاء ومراكش.",
        },
      },
      {
        qKey: "faqQ5",
        answers: {
          en: "Yes. All Elegant Travel Service tours from Tangier are private — your own vehicle, your own guide, and a maximum of 14 people. Ferry port transfers in and out of Tangier are handled by our team.",
          ar: "نعم. جميع جولات Elegant Travel Service من طنجة خاصة — مركبتك ومرشدك والحد الأقصى 14 شخصاً. يتكفل فريقنا بنقل ميناء العبارة ذهاباً وإياباً.",
        },
      },
    ],
  },

  agadir: {
    nameKey: "cityAgadirName",
    cityIds: [
      "agadir-beach-surf-3day",
      "anti-atlas-berber-trek-2day",
      "agadir-anti-atlas-3day",
      "surf-taghazout-4day",
    ],
    otherCities: [
      { nameKey: "cityMarrakechName",  href: "/tours/from-marrakech" },
      { nameKey: "cityCasablancaName", href: "/tours/from-casablanca" },
      { nameKey: "cityFesName",        href: "/tours/from-fes" },
      { nameKey: "cityTangierName",    href: "/tours/from-tangier" },
    ],
    faqs: [
      {
        qKey: "faqQ1",
        answers: {
          en: (count) =>
            `From Agadir you can book ${count} tours focusing on the unique landscapes of southern Morocco — beach and surf retreats, Anti-Atlas Berber village treks, and a Taghazout surf camp. These tours reveal the Morocco that lies beyond the Sahara and imperial cities.`,
          ar: (count) =>
            `من أكادير يمكنك حجز ${count} جولات تستكشف المناطق الطبيعية الفريدة لجنوب المغرب — استراحة الشاطئ والتصفيح، ومسيرة الأطلس الصغير وقرى البربر، ومعسكر التصفيح في تاغازوت. هذه الجولات تكشف المغرب الذي يمتد أبعد من الصحراء والمدن الإمبراطورية.`,
        },
      },
      {
        qKey: "faqQ2",
        answers: {
          en: (_, min, max) =>
            `Tours from Agadir range from ${min} days (Anti-Atlas Berber village trek) to ${max} days (Taghazout surf camp). All tours are purposefully sized to deliver deep immersion in a specific landscape or experience.`,
          ar: (_, min, max) =>
            `تتراوح جولات أكادير بين ${min} أيام (مسيرة قرى البربر في الأطلس الصغير) و${max} أيام (معسكر تصفيح تاغازوت). صُمّمت جميع الجولات لتوفير غمر حقيقي في منطقة طبيعية أو تجربة بعينها.`,
        },
      },
      {
        qKey: "faqQ3",
        answers: {
          en: "All Elegant Travel Service tours from Agadir include private transport, a certified English-speaking guide, and accommodation. Surf tours include surf equipment and instruction; trekking tours include local mountain guides and home-cooked meals with village families.",
          ar: "تشمل جميع جولات Elegant Travel Service من أكادير التنقل الخاص ومرشداً سياحياً معتمداً والإقامة. تشمل جولات التصفيح معدات ودروس التصفيح؛ وتشمل جولات المشي مرشدين جبليين محليين ووجبات منزلية مع العائلات.",
        },
      },
      {
        qKey: "faqQ4BestVisit",
        answers: {
          en: "Agadir is one of Morocco's most year-round destinations. October–April is ideal for Anti-Atlas trekking (cool mountain temperatures) and surf (consistent Atlantic swells). June–September is best for beach holidays; the surf camp runs year-round.",
          ar: "أكادير واحدة من أكثر وجهات المغرب ملاءمة على مدار العام. أكتوبر–أبريل مثالي لمشي الأطلس الصغير (أجواء جبلية باردة) والتصفيح (أمواج أطلسية منتظمة). يونيو–سبتمبر الأفضل لعطلات الشاطئ؛ ومعسكر التصفيح يعمل طوال العام.",
        },
      },
      {
        qKey: "faqQ5",
        answers: {
          en: "Yes. All Elegant Travel Service tours from Agadir are private — your own vehicle, your own guide, and a small group of up to 12 people maximum. The Anti-Atlas trek is limited to 6 people for an authentic Berber village experience.",
          ar: "نعم. جميع جولات Elegant Travel Service من أكادير خاصة — مركبتك ومرشدك والحد الأقصى 12 شخصاً. مسيرة الأطلس الصغير محدودة بـ6 أشخاص لضمان تجربة قرية بربرية أصيلة وشخصية.",
        },
      },
    ],
  },
};
