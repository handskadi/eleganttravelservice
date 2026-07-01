"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMountain, FaUtensils, FaSpa, FaLeaf, FaRoute,
  FaStar, FaMapMarkerAlt, FaUsers, FaCheckCircle,
  FaHeart, FaShieldAlt, FaHeadset, FaAward,
  FaCartPlus, FaChevronDown, FaArrowRight, FaSearch,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { tours } from "@/data/tours";
import type { Tour } from "@/data/tours";
import { useApp } from "@/contexts/AppContext";
import AddToCartModal from "@/components/Modals/AddToCartModal";

// ─── Activities = half-day, 1-day, and short (hourly) experiences only ────────
const SHORT_DURATIONS = new Set(["2 Hours", "3 Hours", "4 Hours", "Half Day", "1 Day"]);

// ─── Types ─────────────────────────────────────────────────────────────────────
type CategoryLabel = "All" | "Day Trips" | "Adventure" | "Food & Culture" | "Wellness" | "Nature & Desert";

// ─── Category ID lists (all IDs must be short-duration tours) ─────────────────
const CATEGORY_IDS: Record<Exclude<CategoryLabel, "All">, string[]> = {
  "Day Trips": [
    // All 1-day excursions from Marrakech to other destinations
    "ouzoud-waterfalls-day-trip",
    "essaouira-day-trip-marrakech",
    "agafay-full-day",
    "imlil-valley-day-trip",
    "setti-fatma-waterfalls-day",
    "casablanca-day-trip-marrakech",
    "ouarzazate-cinema-day",
    "taroudant-day-trip",
    "kik-plateau-atlas-day",
    "ourika-berber-market-day",
    "ait-ben-haddou-day-trip",
    "ourika-valley-day-trip",
    "agadir-day-trip-marrakech",
    "demnate-imi-nifri-day",
    "agafay-glamping-luxury-1day",
  ],
  "Adventure": [
    "quad-biking-agafay-3hrs",
    "marrakech-bike-medina-tour",
    "ouzoud-waterfalls-day-trip",
    "setti-fatma-waterfalls-day",
    "kik-plateau-atlas-day",
    "imlil-valley-day-trip",
    "demnate-imi-nifri-day",
  ],
  "Food & Culture": [
    "marrakech-cooking-class",
    "marrakech-food-souk-halfday",
    "marrakech-zellige-workshop",
    "marrakech-jewish-quarter-tour",
    "ourika-berber-market-day",
    "marrakech-fantasia-evening",
    "ouarzazate-cinema-day",
    "taroudant-day-trip",
    "casablanca-day-trip-marrakech",
    "marrakech-medina-photography-walk",
  ],
  "Wellness": [
    "royal-hammam-spa-marrakech",
    "marrakech-hammam-souk-halfday",
    "agafay-glamping-luxury-1day",
  ],
  "Nature & Desert": [
    "hot-air-balloon-marrakech",
    "agafay-camel-sunset-2hrs",
    "marrakech-horse-riding-palmeraie",
    "agafay-full-day",
    "essaouira-day-trip-marrakech",
    "ourika-valley-day-trip",
    "agadir-day-trip-marrakech",
    "ait-ben-haddou-day-trip",
  ],
};

// ─── Category config ────────────────────────────────────────────────────────────
const CATEGORIES: {
  label: CategoryLabel;
  icon: React.ElementType;
  colour: string;
  bg: string;
  border: string;
  tagline: string;
}[] = [
  {
    label: "Day Trips",
    icon: FaRoute,
    colour: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    tagline: "Full-day excursions from Marrakech",
  },
  {
    label: "Adventure",
    icon: FaMountain,
    colour: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    tagline: "Quad biking, hiking & waterfalls",
  },
  {
    label: "Food & Culture",
    icon: FaUtensils,
    colour: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tagline: "Cooking, souks & cultural tours",
  },
  {
    label: "Wellness",
    icon: FaSpa,
    colour: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    tagline: "Hammam rituals & desert retreats",
  },
  {
    label: "Nature & Desert",
    icon: FaLeaf,
    colour: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    tagline: "Balloons, camels, valleys & beaches",
  },
];

// ─── Badge colour map ───────────────────────────────────────────────────────────
const BADGE_STYLES: Record<string, string> = {
  amber:   "bg-amber-100 text-amber-800",
  emerald: "bg-emerald-100 text-emerald-800",
  blue:    "bg-blue-100 text-blue-800",
  orange:  "bg-orange-100 text-orange-800",
  purple:  "bg-purple-100 text-purple-800",
  teal:    "bg-teal-100 text-teal-800",
  yellow:  "bg-yellow-100 text-yellow-800",
  rose:    "bg-rose-100 text-rose-800",
  red:     "bg-red-100 text-red-800",
  indigo:  "bg-indigo-100 text-indigo-800",
  green:   "bg-green-100 text-green-800",
  slate:   "bg-slate-100 text-slate-800",
  cyan:    "bg-cyan-100 text-cyan-800",
};

const DIFF_STYLES: Record<string, string> = {
  Easy:       "text-emerald-600 bg-emerald-50 border-emerald-100",
  Moderate:   "text-amber-600 bg-amber-50 border-amber-100",
  Difficult:  "text-red-600 bg-red-50 border-red-100",
};

// ─── Benefits ──────────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: FaShieldAlt,
    title: "Safe & Fully Insured",
    desc: "Every activity is safety-vetted. All guides hold professional certification and full liability insurance.",
    colour: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FaHeadset,
    title: "24/7 On-Ground Support",
    desc: "Our local team is reachable around the clock — whether you need rescheduling or on-the-spot help.",
    colour: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: FaAward,
    title: "Expert Local Guides",
    desc: "Licensed, English-speaking Moroccan guides with deep regional knowledge and certified training.",
    colour: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: FaRoute,
    title: "Fully Customisable",
    desc: "Mix and match activities into a bespoke itinerary. We handle all logistics so you just show up.",
    colour: "text-purple-600",
    bg: "bg-purple-50",
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the difference between Activities and Tours?",
    a: "Activities are single-day or half-day experiences — from a half-hour hammam to a full-day excursion from Marrakech. Tours are multi-day journeys (2 days and above) that take you across Morocco and include accommodation. You can browse multi-day tours on our Tours page.",
  },
  {
    q: "Do I need prior experience for adventure activities?",
    a: "Most activities are suitable for beginners unless explicitly marked Difficult. Our instructors provide full briefings and all required equipment. Quad biking, camel treks, and balloon rides require no prior experience whatsoever.",
  },
  {
    q: "Can I book activities as add-ons to a multi-day tour?",
    a: "Absolutely. Every activity can be added to an existing tour booking or purchased standalone. Our team will slot them seamlessly into your itinerary and arrange all transfers.",
  },
  {
    q: "What is the cancellation policy for activities?",
    a: "Free cancellation up to 48 hours before the start time. Cancellations within 48 hours receive a 50% refund or a credit note valid for 12 months. No-shows are non-refundable.",
  },
  {
    q: "Are activities suitable for families with children?",
    a: "Many activities are family-friendly — camel treks, food tours, balloon rides (minimum age 5), Ouzoud waterfalls, and Ourika Valley. Age or fitness restrictions are clearly noted on each listing.",
  },
];

// ─── Activity Card ─────────────────────────────────────────────────────────────
function ActivityCard({ tour }: { tour: Tour }) {
  const { toggleWishlist, isWishlisted, isInCart } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [imgError, setImgError] = useState(false);
  const wishlisted = isWishlisted(tour.id);
  const inCart = isInCart(tour.id);
  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <Link href={`/tours/${tour.id}`} className="absolute inset-0 z-0">
            <Image
              src={imgError ? "/imgplaceholder.webp" : tour.image}
              alt={tour.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </Link>

          {/* Action buttons */}
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <button
              onClick={() => toggleWishlist(tour)}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition ${
                wishlisted ? "bg-red-500 text-white" : "bg-white/90 text-slate-400 hover:text-red-500"
              }`}
              aria-label="Toggle wishlist"
            >
              <FaHeart className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setShowModal(true)}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition ${
                inCart ? "bg-emerald-500 text-white" : "bg-white/90 text-slate-400 hover:text-emerald-500"
              }`}
              aria-label="Add to cart"
            >
              <FaCartPlus className="w-3.5 h-3.5" />
            </button>
          </div>

          {tour.badge && (
            <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full shadow ${BADGE_STYLES[tour.badgeColor ?? "slate"]}`}>
              {tour.badge}
            </span>
          )}

          {discount > 0 && (
            <span className="absolute bottom-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full">
              {tour.duration}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <FaUsers className="w-3 h-3 text-slate-400" />
              Max {tour.maxGroupSize}
            </div>
          </div>

          <Link href={`/tours/${tour.id}`}>
            <h3 className="font-bold text-slate-800 text-[15px] mt-0.5 leading-snug line-clamp-2 hover:text-amber-600 transition-colors">
              {tour.title}
            </h3>
          </Link>

          <p className="flex items-center gap-1 text-xs text-slate-500">
            <FaMapMarkerAlt className="w-3 h-3 text-amber-500 shrink-0" />
            {tour.location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <FaStar key={i} className={`w-3 h-3 ${i <= Math.floor(tour.rating) ? "text-amber-400" : "text-slate-200"}`} />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-700">{tour.rating}</span>
            <span className="text-xs text-slate-400">({tour.reviews.toLocaleString()})</span>
          </div>

          {/* Highlights */}
          <ul className="flex-1 space-y-1 mt-1">
            {tour.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <FaCheckCircle className="w-2.5 h-2.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>

          {/* Difficulty */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-1">
            <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${DIFF_STYLES[tour.difficulty]}`}>
              <FaMountain className="w-2.5 h-2.5" />
              {tour.difficulty}
            </span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="leading-none">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-slate-900">${tour.price}</span>
                <span className="text-[11px] text-slate-400">/ person</span>
              </div>
              {tour.originalPrice && (
                <span className="text-[11px] text-slate-400 line-through">${tour.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/tours/${tour.id}`}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition flex items-center gap-1"
              >
                Details <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition shadow-md shadow-amber-500/20 flex items-center gap-1.5"
              >
                Book <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddToCartModal isOpen={showModal} tour={tour} onClose={() => setShowModal(false)} />
    </>
  );
}

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition"
      >
        <span className="font-semibold text-slate-800 text-sm leading-snug">{q}</span>
        <FaChevronDown className={`w-4 h-4 text-amber-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-500 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ActivitiesClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Activities pool: ONLY short-duration experiences (half day, 1 day, hourly)
  const allActivities = useMemo(
    () => tours.filter(t => SHORT_DURATIONS.has(t.duration)),
    []
  );

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All"
        ? allActivities
        : allActivities.filter(t => CATEGORY_IDS[activeCategory].includes(t.id));

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.highlights.some(h => h.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery, allActivities]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ─── Hero ────────────────────────────────────────────────────────────── */}
      <div className="relative pt-20">
        <div
          className="relative py-24 px-6 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />

          <div className="relative max-w-screen-xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-amber-400 font-medium">Activities & Day Trips</span>
            </nav>

            <div className="max-w-2xl">
              <span className="section-label mb-4 inline-block">Day Trips & Experiences</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Activities &amp;{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}>
                  Day Trips
                </span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                Half-day experiences and full-day excursions from Marrakech — from a sunrise balloon flight to a day trip to the Saharan kasbahs. All back the same evening.
              </p>

              {/* Cross-link to multi-day tours */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white/80 backdrop-blur-sm mb-8">
                <FaRoute className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Looking for multi-day adventures?{" "}
                <Link href="/tours" className="text-amber-400 font-semibold hover:text-amber-300 transition flex items-center gap-1">
                  Browse all tours <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Search */}
            <div className="max-w-xl relative mb-8">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search — Ouzoud, hammam, balloon, cooking class…"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold">
                  Clear
                </button>
              )}
            </div>

            {/* Trust tags */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              {[`${allActivities.length} Experiences`, "All from Marrakech", "Free Cancellation", "Small Groups"].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 bg-white/8 border border-white/10 rounded-full px-4 py-1.5">
                  <FaCheckCircle className="w-3 h-3 text-amber-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-12">

        {/* ─── Category Selector ───────────────────────────────────────────── */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <span className="section-label">Browse by Type</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              What kind of experience are you after?
            </h2>
          </div>

          {/* "All" pill */}
          <button
            onClick={() => setActiveCategory("All")}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl border text-sm font-semibold mb-4 transition ${
              activeCategory === "All"
                ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/25"
                : "bg-white text-slate-600 border-slate-200 hover:border-amber-300 hover:text-amber-600"
            }`}
          >
            Show All Activities &amp; Day Trips
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeCategory === "All" ? "bg-white/20 text-white" : "bg-amber-50 text-amber-600"}`}>
              {allActivities.length}
            </span>
          </button>

          {/* Category cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.label;
              const count = allActivities.filter(t => CATEGORY_IDS[cat.label as Exclude<CategoryLabel, "All">].includes(t.id)).length;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border text-center transition cursor-pointer ${
                    isActive
                      ? "bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/20"
                      : `bg-white ${cat.border} hover:border-amber-300 hover:shadow-md`
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition ${isActive ? "bg-white/20" : cat.bg}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : cat.colour}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-xs leading-tight ${isActive ? "text-white" : "text-slate-800"}`}>
                      {cat.label}
                    </p>
                    <p className={`text-[10px] mt-0.5 leading-tight ${isActive ? "text-white/80" : "text-slate-400"}`}>
                      {cat.tagline}
                    </p>
                    <span className={`mt-1.5 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ─── Results header ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              {activeCategory === "All" ? "All Activities & Day Trips" : activeCategory}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              {filtered.length} experience{filtered.length !== 1 ? "s" : ""} available
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          {(activeCategory !== "All" || searchQuery) && (
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition"
            >
              <FaArrowRight className="w-3 h-3 rotate-180" />
              Clear filters
            </button>
          )}
        </div>

        {/* ─── Cards grid ─────────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map(tour => (
              <ActivityCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mb-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaSearch className="w-7 h-7 text-slate-300" />
            </div>
            <p className="text-slate-500 text-lg font-medium mb-1">No activities found</p>
            <p className="text-slate-400 text-sm mb-4">Try adjusting your search or browse a different category.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-amber-600 text-sm font-semibold hover:text-amber-700 transition"
            >
              View all activities
            </button>
          </div>
        )}

        {/* ─── Cross-promo: Multi-day tours ────────────────────────────────── */}
        <section className="mb-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 border border-white/5">
          <div className="flex-1">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Looking for more?</span>
            <h3 className="text-2xl font-extrabold text-white mt-2 mb-2">
              Explore Multi-Day Tours
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              From 2-day desert getaways to 18-day grand Morocco journeys — our tour collection covers the full country with accommodation, guides, and transport all included.
            </p>
          </div>
          <Link
            href="/tours"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition shadow-xl shadow-amber-500/20 text-sm whitespace-nowrap"
          >
            Browse All Tours
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ─── Why Book ───────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden px-8 py-14 mb-14 relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative text-center mb-10">
            <span className="section-label inline-block mb-3 bg-amber-500/15 border-amber-500/30 text-amber-400">Our Promise</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">Why Book With Us</h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl mx-auto">
              We have been on the ground in Morocco for over a decade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(b => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className={`w-11 h-11 ${b.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${b.colour}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="section-label">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">Activities FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl overflow-hidden px-8 py-14 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Build Your Custom Itinerary</h2>
            <p className="text-amber-100 text-base max-w-xl mx-auto mb-8">
              Not sure which activities to combine? Our travel designers will craft a personalised Morocco itinerary around your interests, budget, and travel dates — at no extra cost.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-amber-600 hover:bg-amber-50 font-bold rounded-2xl transition shadow-xl shadow-amber-700/20 text-sm">
                Start Planning <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/tours"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-amber-700/30 hover:bg-amber-700/50 text-white font-bold rounded-2xl transition text-sm border border-white/20">
                Browse All Tours <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
