"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  FaCommentDots, FaPaperPlane, FaTimes, FaCompass,
  FaClock, FaMapMarkerAlt, FaArrowRight,
  FaWhatsapp, FaPhone, FaEnvelope, FaChevronDown,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { tours } from "@/data/tours";

// ─── Types ────────────────────────────────────────────────────────────────────

type TourSuggestion = {
  id: string;
  title: string;
  price: number;
  duration: string;
  category: string;
  location: string;
};

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  suggestions?: TourSuggestion[];
  quickReplies?: string[];
};

// ─── Locale response map — key intents translated into AR/FR ─────────────────

const LOCALE_RESPONSES: Record<string, Record<string, { text: string; quickReplies?: string[] }>> = {
  greeting: {
    en: {
      text: "Welcome to Elegant Travel Service! I'm Youssef, your personal Morocco travel advisor.\n\nI can help you find the perfect tour, answer questions about destinations, pricing, or booking. What kind of Morocco experience are you dreaming of?",
      quickReplies: ["Desert tours", "Mountain treks", "City & culture", "Luxury packages"],
    },
    fr: {
      text: "Bienvenue chez Elegant Travel Service ! Je suis Youssef, votre conseiller voyage personnel pour le Maroc.\n\nJe peux vous aider à trouver le circuit idéal, répondre à vos questions sur les destinations, les tarifs ou la réservation. Quel type d'expérience marocaine vous fait rêver ?",
      quickReplies: ["Circuits désert", "Treks montagne", "Villes & culture", "Séjours luxe"],
    },
    ar: {
      text: "مرحباً بك في Elegant Travel Service! أنا يوسف، مستشارك الشخصي للسفر في المغرب.\n\nيمكنني مساعدتك في العثور على الجولة المثالية، والإجابة عن أسئلتك حول الوجهات والأسعار والحجز. ما نوع التجربة المغربية التي تحلم بها؟",
      quickReplies: ["جولات الصحراء", "مسالك الجبال", "المدن والثقافة", "الباقات الفاخرة"],
    },
  },
  sahara: {
    en: {
      text: "The Sahara is Morocco's most iconic experience — golden dunes, starlit skies, and camel rides at sunset. Here are our most popular desert tours:",
      quickReplies: ["What's included?", "Best time for Sahara", "Luxury desert option", "Book a desert tour"],
    },
    fr: {
      text: "Le Sahara est l'expérience la plus emblématique du Maroc — dunes dorées, ciels étoilés et balades à dos de chameau au coucher du soleil. Voici nos circuits désert les plus populaires :",
      quickReplies: ["Qu'est-ce qui est inclus ?", "Meilleure période pour le Sahara", "Option désert luxe", "Réserver un circuit désert"],
    },
    ar: {
      text: "الصحراء هي أكثر تجارب المغرب تميزاً — كثبان ذهبية وسماء مرصعة بالنجوم وركوب الجمال عند الغروب. إليك أكثر جولات الصحراء طلباً لدينا:",
      quickReplies: ["ماذا يشمل؟", "أفضل وقت للصحراء", "خيار الصحراء الفاخر", "احجز جولة صحراء"],
    },
  },
  mountain: {
    en: {
      text: "The High Atlas Mountains offer some of Africa's most stunning trekking, from gentle valley walks to the summit of Toubkal (4,167m). Our mountain tours:",
      quickReplies: ["Toubkal summit details", "Family-friendly treks", "Best season to trek", "Group treks"],
    },
    fr: {
      text: "Le Haut Atlas offre certains des treks les plus spectaculaires d'Afrique, des douces promenades en vallée au sommet du Toubkal (4 167 m). Nos circuits montagne :",
      quickReplies: ["Détails sommet Toubkal", "Treks en famille", "Meilleure saison", "Treks en groupe"],
    },
    ar: {
      text: "يوفر جبل الأطلس الكبير بعضاً من أروع مسالك المشي في أفريقيا، من نزهات الوديان الهادئة إلى قمة توبقال (4167 م). جولاتنا الجبلية:",
      quickReplies: ["تفاصيل قمة توبقال", "مسالك عائلية", "أفضل موسم", "مسالك جماعية"],
    },
  },
  cities: {
    en: {
      text: "Morocco's imperial cities are a world apart — ancient medinas, ornate palaces, and the world's most vibrant souks. Our top city experiences:",
      quickReplies: ["Marrakech food tour", "Fes medina guide", "Imperial cities circuit", "Day trip options"],
    },
    fr: {
      text: "Les villes impériales du Maroc sont un monde à part — anciennes médinas, palais ornés et les souks les plus animés du monde. Nos meilleures expériences urbaines :",
      quickReplies: ["Tour gastronomique Marrakech", "Guide médina Fès", "Circuit villes impériales", "Options en journée"],
    },
    ar: {
      text: "المدن الإمبراطورية المغربية عالم آخر — مدن عتيقة وقصور مزخرفة وأكثر الأسواق حيوية في العالم. أفضل تجاربنا في المدن:",
      quickReplies: ["جولة طعام مراكش", "دليل مدينة فاس", "دائرة المدن الإمبراطورية", "خيارات اليوم الواحد"],
    },
  },
  luxury: {
    en: {
      text: "Our luxury collection combines Morocco's most extraordinary settings with world-class service — private riads, 5-star desert camps, and bespoke itineraries:",
      quickReplies: ["Honeymoon packages", "Private tours", "Luxury vs standard", "Request custom quote"],
    },
    fr: {
      text: "Notre collection luxe associe les cadres les plus extraordinaires du Maroc à un service de classe mondiale — riads privés, camps désert 5 étoiles et itinéraires sur mesure :",
      quickReplies: ["Lune de miel", "Circuits privés", "Luxe vs standard", "Demander un devis"],
    },
    ar: {
      text: "تجمع مجموعتنا الفاخرة بين أكثر البيئات المغربية استثنائية وخدمة على مستوى عالمي — رياض خاصة ومخيمات صحراء 5 نجوم ومسارات مخصصة:",
      quickReplies: ["باقات شهر العسل", "جولات خاصة", "فاخر مقابل عادي", "طلب عرض مخصص"],
    },
  },
  price: {
    en: {
      text: "Our tours range from $85 for a half-day activity to $4,950 for a 7-day ultra-luxury experience. Here's a quick overview:\n\n• Activities (half day): from $85\n• Day tours: from $95\n• 2–3 day tours: from $145\n• 5–7 day tours: from $895\n• Grand 10–14 day circuits: from $2,150\n\nAll tours include transport, guide, and meals as specified. No hidden fees.",
      quickReplies: ["Budget tours under $200", "What's included?", "Group discounts", "Luxury pricing"],
    },
    fr: {
      text: "Nos circuits vont de 85 $ pour une activité demi-journée à 4 950 $ pour une expérience ultra-luxe de 7 jours. Aperçu rapide :\n\n• Activités (demi-journée) : à partir de 85 $\n• Circuits à la journée : à partir de 95 $\n• Circuits 2–3 jours : à partir de 145 $\n• Circuits 5–7 jours : à partir de 895 $\n• Grands circuits 10–14 jours : à partir de 2 150 $\n\nTout transport, guide et repas compris selon spécifications. Sans frais cachés.",
      quickReplies: ["Circuits budget -200 $", "Qu'est-ce qui est inclus ?", "Réductions groupes", "Tarifs luxe"],
    },
    ar: {
      text: "تتراوح جولاتنا من 85 دولاراً لنشاط نصف يوم إلى 4950 دولاراً لتجربة فاخرة 7 أيام. نظرة سريعة:\n\n• الأنشطة (نصف يوم): من 85 دولاراً\n• جولات يومية: من 95 دولاراً\n• جولات 2-3 أيام: من 145 دولاراً\n• جولات 5-7 أيام: من 895 دولاراً\n• الدوائر الكبرى 10-14 يوم: من 2150 دولاراً\n\nجميع الجولات تشمل النقل والمرشد والوجبات حسب المواصفات. لا رسوم خفية.",
      quickReplies: ["جولات اقتصادية أقل من 200 دولار", "ماذا يشمل؟", "خصومات جماعية", "أسعار الفخامة"],
    },
  },
  booking: {
    en: {
      text: "Booking is simple and secure:\n\n1. Find your tour on our Tours page\n2. Click 'Book Now' or 'View Details'\n3. Select your dates and number of travellers\n4. Confirm and pay securely online\n\nWe require a 20% deposit to hold your booking, with the balance due 30 days before departure.",
      quickReplies: ["Cancellation policy", "Is payment secure?", "Group booking", "Contact a human"],
    },
    fr: {
      text: "La réservation est simple et sécurisée :\n\n1. Trouvez votre circuit sur notre page Tours\n2. Cliquez sur 'Réserver' ou 'Voir les détails'\n3. Sélectionnez vos dates et le nombre de voyageurs\n4. Confirmez et payez en ligne de façon sécurisée\n\nUn acompte de 20 % est requis pour sécuriser votre réservation, le solde étant dû 30 jours avant le départ.",
      quickReplies: ["Politique d'annulation", "Paiement sécurisé ?", "Réservation groupe", "Parler à un agent"],
    },
    ar: {
      text: "الحجز بسيط وآمن:\n\n1. ابحث عن جولتك في صفحة الجولات\n2. انقر على 'احجز الآن' أو 'عرض التفاصيل'\n3. اختر تواريخك وعدد المسافرين\n4. أكّد وادفع بأمان عبر الإنترنت\n\nنطلب دفعة مقدمة بنسبة 20% لتأكيد الحجز، مع سداد الرصيد المتبقي قبل 30 يوماً من الموعد المحدد.",
      quickReplies: ["سياسة الإلغاء", "هل الدفع آمن؟", "حجز جماعي", "التحدث مع شخص"],
    },
  },
  contact: {
    en: {
      text: "Our Morocco-based team is available 7 days a week:\n\n📞 +212 5 24 00 00 00\n💬 WhatsApp: +212 6 00 00 00 00\n✉️ info@eleganttravel.ma\n🕐 Mon–Sun: 8am–8pm Morocco time\n\nWe typically respond within 30 minutes during office hours.",
      quickReplies: ["Open contact form", "Request a callback", "Send WhatsApp", "Browse tours instead"],
    },
    fr: {
      text: "Notre équipe basée au Maroc est disponible 7 jours sur 7 :\n\n📞 +212 5 24 00 00 00\n💬 WhatsApp : +212 6 00 00 00 00\n✉️ info@eleganttravel.ma\n🕐 Lun–Dim : 8h–20h (heure Maroc)\n\nNous répondons généralement sous 30 minutes pendant les heures de bureau.",
      quickReplies: ["Formulaire de contact", "Rappel téléphonique", "Envoyer WhatsApp", "Voir les circuits"],
    },
    ar: {
      text: "فريقنا في المغرب متاح 7 أيام في الأسبوع:\n\n📞 +212 5 24 00 00 00\n💬 واتساب: +212 6 00 00 00 00\n✉️ info@eleganttravel.ma\n🕐 الإثنين–الأحد: 8 صباحاً–8 مساءً (توقيت المغرب)\n\nعادةً ما نرد خلال 30 دقيقة خلال ساعات العمل.",
      quickReplies: ["فتح نموذج الاتصال", "طلب معاودة الاتصال", "إرسال واتساب", "تصفح الجولات"],
    },
  },
  cancel: {
    en: {
      text: "Our cancellation policy:\n\n• 60+ days before: Full refund\n• 30–59 days before: 50% refund\n• 15–29 days before: 25% refund\n• Under 14 days: Non-refundable\n\nDate changes are free if requested 30+ days before departure, subject to availability.",
      quickReplies: ["Make a booking", "Travel insurance?", "Contact support", "View terms"],
    },
    fr: {
      text: "Notre politique d'annulation :\n\n• 60+ jours avant : Remboursement intégral\n• 30–59 jours avant : Remboursement 50 %\n• 15–29 jours avant : Remboursement 25 %\n• Moins de 14 jours : Non remboursable\n\nLes changements de date sont gratuits si demandés 30+ jours avant, sous réserve de disponibilité.",
      quickReplies: ["Effectuer une réservation", "Assurance voyage ?", "Contacter le support", "Voir les conditions"],
    },
    ar: {
      text: "سياسة الإلغاء لدينا:\n\n• قبل 60 يوماً أو أكثر: استرداد كامل\n• قبل 30-59 يوماً: استرداد 50%\n• قبل 15-29 يوماً: استرداد 25%\n• أقل من 14 يوماً: غير قابل للاسترداد\n\nتغييرات المواعيد مجانية إذا طُلبت قبل 30 يوماً أو أكثر من الموعد، رهناً بالتوفر.",
      quickReplies: ["إجراء حجز", "تأمين السفر؟", "الاتصال بالدعم", "عرض الشروط"],
    },
  },
  season: {
    en: {
      text: "Morocco is beautiful year-round, but the best seasons depend on your plans:\n\n🌸 Spring (Mar–May): Perfect for everything — comfortable everywhere\n🌞 Summer (Jun–Aug): Coast & north are lovely; avoid deep desert in summer\n🍂 Autumn (Sep–Nov): Golden light, warm days — our second-best season\n❄️ Winter (Dec–Feb): Best for desert; cold in Atlas; cities are wonderful\n\nFor the Sahara: October–April. For Toubkal: May–October.",
      quickReplies: ["Spring tours", "Desert in winter", "Summer beach options", "Plan my dates"],
    },
    fr: {
      text: "Le Maroc est magnifique toute l'année, selon vos projets :\n\n🌸 Printemps (mars–mai) : Parfait pour tout — agréable partout\n🌞 Été (juin–août) : Côte & nord splendides ; évitez le désert profond\n🍂 Automne (sept–nov) : Lumière dorée, journées chaudes — notre 2ème meilleure saison\n❄️ Hiver (déc–fév) : Idéal pour le désert ; froid en Atlas ; villes merveilleuses\n\nSahara : octobre–avril. Toubkal : mai–octobre.",
      quickReplies: ["Circuits printemps", "Désert en hiver", "Options plage été", "Planifier mes dates"],
    },
    ar: {
      text: "المغرب جميل طوال العام، لكن أفضل الفصول يعتمد على خططك:\n\n🌸 الربيع (مارس-مايو): مثالي لكل شيء — مريح في كل مكان\n🌞 الصيف (يونيو-أغسطس): الساحل والشمال رائعان؛ تجنب الصحراء العميقة\n🍂 الخريف (سبتمبر-نوفمبر): ضوء ذهبي وأيام دافئة — موسمنا الثاني الأفضل\n❄️ الشتاء (ديسمبر-فبراير): الأفضل للصحراء؛ بارد في الأطلس؛ المدن رائعة\n\nالصحراء: أكتوبر-أبريل. توبقال: مايو-أكتوبر.",
      quickReplies: ["جولات الربيع", "الصحراء في الشتاء", "خيارات شاطئ الصيف", "خطط لتواريخي"],
    },
  },
  fallback: {
    en: {
      text: "I'd love to help you discover Morocco! Try asking about a specific destination (Sahara, Marrakech, Fes), activity type (trekking, luxury, family), or budget — I'll find the perfect tour for you.",
      quickReplies: ["Desert tours", "City tours", "Trekking", "Luxury", "Family tours", "Best value"],
    },
    fr: {
      text: "Je serais ravi de vous aider à découvrir le Maroc ! Essayez de demander une destination précise (Sahara, Marrakech, Fès), un type d'activité (trek, luxe, famille) ou un budget.",
      quickReplies: ["Circuits désert", "Villes", "Randonnée", "Luxe", "Famille", "Meilleur rapport qualité-prix"],
    },
    ar: {
      text: "يسعدني مساعدتك في اكتشاف المغرب! حاول السؤال عن وجهة محددة (الصحراء، مراكش، فاس)، نوع النشاط (التنزه، الفخامة، العائلة)، أو الميزانية.",
      quickReplies: ["جولات الصحراء", "جولات المدن", "التنزه", "الفخامة", "العائلات", "أفضل قيمة"],
    },
  },
};

function getLocaleResponse(key: string, locale: string) {
  const map = LOCALE_RESPONSES[key];
  if (!map) return null;
  return map[locale] ?? map["en"];
}

// ─── INTENT patterns ──────────────────────────────────────────────────────────
// Patterns are locale-independent — Arabic and French keywords included

const INTENT_PATTERNS: { key: string; pattern: RegExp; getSuggestions?: () => TourSuggestion[] }[] = [
  {
    key: "greeting",
    pattern: /\b(hello|hi|hey|bonjour|salam|مرحبا|مرحباً|أهلا|هلا|good\s*(morning|evening|afternoon))\b/i,
  },
  {
    key: "sahara",
    pattern: /\b(sahara|desert|camel|merzouga|dune|erg chebbi|صحراء|جمل|مرزوكة|désert|chameau)\b/i,
    getSuggestions: () =>
      tours.filter(t => t.category === "Desert").sort((a, b) => a.price - b.price).slice(0, 3)
        .map(t => ({ id: t.id, title: t.title, price: t.price, duration: t.duration, category: t.category, location: t.location })),
  },
  {
    key: "mountain",
    pattern: /\b(mountain|atlas|trek|hiking|hike|toubkal|imlil|berber|climb|جبل|أطلس|تنزه|مشي|توبقال|montagne|randonnée|atlas|trekking)\b/i,
    getSuggestions: () =>
      tours.filter(t => t.category === "Mountains").sort((a, b) => a.price - b.price).slice(0, 3)
        .map(t => ({ id: t.id, title: t.title, price: t.price, duration: t.duration, category: t.category, location: t.location })),
  },
  {
    key: "cities",
    pattern: /\b(marrakech|مراكش|fes|fez|فاس|casablanca|الدار البيضاء|chefchaouen|شفشاون|tangier|طنجة|city|cities|imperial|medina|souk|مدينة|سوق|ville|médina|impérial)\b/i,
    getSuggestions: () =>
      tours.filter(t => t.category === "Cities").sort((a, b) => a.price - b.price).slice(0, 3)
        .map(t => ({ id: t.id, title: t.title, price: t.price, duration: t.duration, category: t.category, location: t.location })),
  },
  {
    key: "luxury",
    pattern: /\b(luxury|5[\s-]star|five[\s-]star|premium|vip|private|exclusive|فاخر|خاص|خمس نجوم|luxe|privé|exclusif)\b/i,
    getSuggestions: () =>
      tours.filter(t => t.category === "Luxury").sort((a, b) => a.price - b.price).slice(0, 3)
        .map(t => ({ id: t.id, title: t.title, price: t.price, duration: t.duration, category: t.category, location: t.location })),
  },
  {
    key: "price",
    pattern: /\b(price|cost|how much|pricing|rate|fee|expensive|سعر|تكلفة|كم|بكم|prix|coût|combien|tarif)\b/i,
  },
  {
    key: "booking",
    pattern: /\b(book|booking|reserve|reservation|how.*book|pay|حجز|احجز|كيف أحجز|réserver|réservation|payer)\b/i,
  },
  {
    key: "cancel",
    pattern: /\b(cancel|cancellation|refund|change|reschedule|إلغاء|استرداد|annuler|annulation|remboursement)\b/i,
  },
  {
    key: "season",
    pattern: /\b(best time|when.*visit|season|weather|months|climate|متى|أفضل وقت|فصل|طقس|meilleure.*période|quand.*visiter|saison|météo)\b/i,
  },
  {
    key: "contact",
    pattern: /\b(contact|phone|call|whatsapp|email|speak|human|agent|تواصل|اتصال|واتساب|بريد|إيميل|contacter|téléphone|appeler)\b/i,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SupportPanel() {
  const locale = useLocale();
  const t = useTranslations("chat");
  const isRTL = locale === "ar";

  const tourCount = tours.filter(t =>
    !["royal-mansour","palais-namaskar","kasbah-tamadot","sahara-desert-lodge","riad-fes","ocean-riad"].includes(t.id)
  ).length;

  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const greetingText = typeof window !== "undefined"
      ? (LOCALE_RESPONSES.greeting[locale] ?? LOCALE_RESPONSES.greeting.en).text
      : LOCALE_RESPONSES.greeting.en.text;
    const greetingReplies = (LOCALE_RESPONSES.greeting[locale] ?? LOCALE_RESPONSES.greeting.en).quickReplies;
    return [{ id: 1, from: "bot", text: greetingText, quickReplies: greetingReplies }];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasTriggered = useRef(false);

  // Badge trigger on scroll
  useEffect(() => {
    function onScroll() {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      setTimeout(() => setShowBadge(true), 3000);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !minimised) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, minimised]);

  const getBotResponse = (userText: string): Omit<Message, "id" | "from"> => {
    const lc = userText.toLowerCase();

    // Show all tours
    if (/\b(all tours|browse|voir tous|عرض جميع)\b/i.test(lc)) {
      return {
        text: locale === "ar"
          ? `لدينا ${tourCount} جولة في 6 فئات. إليك مجموعة مختارة من أكثرها شعبية:`
          : locale === "fr"
          ? `Nous avons ${tourCount} circuits en 6 catégories. Voici une sélection de nos plus populaires :`
          : `We have ${tourCount} tours across 6 categories. Here's a selection of our most popular:`,
        suggestions: tours
          .filter(t => ["sahara-3day-marrakech","atlas-mountains-trek-3day","fes-imperial-city-2day","merzouga-luxury-camp-2day","marrakech-fes-desert-5day","grand-morocco-10day"].includes(t.id))
          .map(t => ({ id: t.id, title: t.title, price: t.price, duration: t.duration, category: t.category, location: t.location })),
        quickReplies: getLocaleResponse("fallback", locale)?.quickReplies,
      };
    }

    // Match patterns
    for (const intent of INTENT_PATTERNS) {
      if (intent.pattern.test(userText)) {
        const response = getLocaleResponse(intent.key, locale);
        if (response) {
          return {
            ...response,
            suggestions: intent.getSuggestions?.(),
          };
        }
      }
    }

    // Fallback
    return getLocaleResponse("fallback", locale) ?? { text: "I'd love to help! Try asking about a destination or tour type." };
  };

  const addBotMessage = (response: Omit<Message, "id" | "from">) => {
    setIsTyping(true);
    const delay = 800 + Math.min(response.text.length * 2, 1200);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), from: "bot", ...response }]);
    }, delay);
  };

  const handleSend = (text?: string) => {
    const msg = (text || inputValue).trim();
    if (!msg) return;
    setInputValue("");
    setMessages(prev => [...prev, { id: Date.now(), from: "user", text: msg }]);
    const response = getBotResponse(msg);
    addBotMessage(response);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setMinimised(false);
    setShowBadge(false);
  };

  const lastQuickReplies = [...messages].reverse().find(m => m.from === "bot" && m.quickReplies)?.quickReplies ?? [];

  return (
    <>
      {/* ── Floating Button ── */}
      <div className={`fixed bottom-6 z-50 flex flex-col items-end gap-3 ${isRTL ? "left-6" : "right-6"}`}>
        {/* Tooltip bubble */}
        {showBadge && !isOpen && (
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className={`bg-white shadow-xl border border-slate-100 rounded-2xl px-4 py-3 text-sm text-slate-700 max-w-[220px] animate-slide-up ${isRTL ? "rounded-bl-sm text-right" : "rounded-br-sm"}`}
          >
            <p className="font-semibold text-slate-800 text-[13px]">
              {locale === "ar" ? "هل تحتاج مساعدة في التخطيط؟" : locale === "fr" ? "Besoin d'aide pour planifier ?" : "Need help planning?"}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">
              {locale === "ar" ? "أعرف كل جولة وسعر." : locale === "fr" ? "Je connais tous les circuits & tarifs." : "I know every tour & price."}
            </p>
          </div>
        )}

        <button
          onClick={isOpen ? () => setIsOpen(false) : handleOpen}
          aria-label={t("send")}
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className={`transition-all duration-300 ${isOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
            {isOpen
              ? <FaTimes className="text-white w-5 h-5" />
              : <FaCommentDots className="text-white w-5 h-5" />
            }
          </div>
          {showBadge && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-lg animate-bounce">
              1
            </span>
          )}
          {!isOpen && (
            <span className="absolute inset-0 rounded-2xl border-2 border-amber-400 animate-ping opacity-30 pointer-events-none" />
          )}
        </button>
      </div>

      {/* ── Chat Panel ── */}
      {isOpen && (
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={`fixed bottom-24 z-40 w-[calc(100vw-32px)] sm:w-[400px] flex flex-col rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.25)] border border-white/10 animate-slide-up ${isRTL ? "left-4 sm:left-6" : "right-4 sm:right-6"}`}
          style={{ maxHeight: "600px" }}
        >
          {/* ── Header ── */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-5 py-4 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                {t("online")} · {t("replyTime")}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimised(p => !p)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center transition"
                  aria-label={t("minimise")}
                >
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${minimised ? "rotate-180" : ""}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white flex items-center justify-center transition"
                  aria-label={t("close")}
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-amber-500/30">
                  Y
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] leading-none">Youssef Benali</p>
                <p className="text-amber-400 text-xs mt-0.5 flex items-center gap-1">
                  <FaCompass className="w-2.5 h-2.5" />
                  {t("role")} · ETS
                </p>
              </div>
              <div className={`flex gap-1.5 ${isRTL ? "mr-auto" : "ml-auto"}`}>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 rounded-xl flex items-center justify-center transition"
                  aria-label={t("whatsapp")}
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+212524000000"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded-xl flex items-center justify-center transition"
                  aria-label={t("call")}
                >
                  <FaPhone className="w-3 h-3" />
                </a>
                <a
                  href="mailto:info@eleganttravel.ma"
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded-xl flex items-center justify-center transition"
                  aria-label={t("email")}
                >
                  <FaEnvelope className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* AI badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
              <HiSparkles className="w-3 h-3" />
              {t("aiPowered")} · {t("knowsTours", { count: tourCount })}
            </div>
          </div>

          {/* ── Messages ── */}
          {!minimised && (
            <>
              <div
                className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4"
                style={{ minHeight: 220, maxHeight: 320 }}
              >
                {messages.map(msg => (
                  <div key={msg.id} className={`flex flex-col gap-2 ${msg.from === "user" ? "items-end" : "items-start"}`}>
                    <div className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      {msg.from === "bot" && (
                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md shadow-amber-500/20">
                          Y
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                          msg.from === "user"
                            ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-br-sm shadow-amber-500/20"
                            : "bg-white text-slate-700 rounded-bl-sm border border-slate-100"
                        } ${isRTL ? "text-right" : "text-left"}`}
                      >
                        {msg.text}
                      </div>
                    </div>

                    {/* Tour suggestion cards */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className={`${isRTL ? "mr-9" : "ml-9"} flex flex-col gap-2 w-full max-w-[85%]`}>
                        {msg.suggestions.map(s => (
                          <Link
                            key={s.id}
                            href={`/tours/${s.id}`}
                            className="group flex items-center gap-3 bg-white border border-slate-100 hover:border-amber-300 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-200"
                          >
                            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors duration-200">
                              <FaMapMarkerAlt className="w-3.5 h-3.5 text-amber-500 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-slate-800 text-xs leading-snug line-clamp-1 group-hover:text-amber-600 transition-colors">
                                {s.title}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                                  <FaClock className="w-2.5 h-2.5" />
                                  {s.duration}
                                </span>
                                <span className="text-[10px] text-slate-300">·</span>
                                <span className="text-[10px] text-slate-400">{s.category}</span>
                              </div>
                            </div>
                            <div className="shrink-0 text-right">
                              <p className="font-extrabold text-amber-600 text-sm">${s.price}</p>
                              <FaArrowRight className="w-2.5 h-2.5 text-slate-300 group-hover:text-amber-500 ml-auto mt-0.5 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md shadow-amber-500/20">
                      Y
                    </div>
                    <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                      {[0, 1, 2].map(i => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 160}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* ── Quick Replies ── */}
              {lastQuickReplies.length > 0 && (
                <div className="bg-white border-t border-slate-100 px-3 py-2.5 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
                  {lastQuickReplies.map(r => (
                    <button
                      key={r}
                      onClick={() => handleSend(r)}
                      className="shrink-0 px-3.5 py-1.5 bg-slate-50 hover:bg-amber-500 text-slate-600 hover:text-white text-xs font-semibold rounded-full border border-slate-200 hover:border-amber-500 transition-all duration-200 whitespace-nowrap"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}

              {/* ── Input ── */}
              <div className="bg-white border-t border-slate-100 px-4 py-3 flex gap-2.5 shrink-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                  placeholder={t("placeholder")}
                  dir={isRTL ? "rtl" : "ltr"}
                  className={`flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/15 transition ${isRTL ? "text-right" : ""}`}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg shadow-amber-500/25 disabled:shadow-none shrink-0"
                  aria-label={t("send")}
                >
                  <FaPaperPlane className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Footer */}
              <div className="bg-white px-4 py-2 border-t border-slate-50 flex items-center justify-between shrink-0">
                <p className="text-[10px] text-slate-400">{t("footer")}</p>
                <Link href="/contact" className="text-[10px] text-amber-600 font-semibold hover:underline">
                  {t("contactTeam")}
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
