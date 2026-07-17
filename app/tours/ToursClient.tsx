"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar, FaMapMarkerAlt, FaClock, FaHeart, FaSearch, FaFilter,
  FaBuilding, FaUniversity, FaAnchor, FaUmbrella, FaGlobe,
} from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { tours, categories } from "@/data/tours";
import type { Tour, Category } from "@/data/tours";
import { useApp } from "@/contexts/AppContext";
import { useTranslations } from "next-intl";

// ─── Badge colour map (mirrors globals.css) ───────────────────────────────────
const BADGE_STYLES: Record<string, string> = {
  amber:   "bg-amber-100  text-amber-800",
  emerald: "bg-emerald-100 text-emerald-800",
  blue:    "bg-blue-100   text-blue-800",
  orange:  "bg-orange-100 text-orange-800",
  purple:  "bg-purple-100 text-purple-800",
  teal:    "bg-teal-100   text-teal-800",
  yellow:  "bg-yellow-100 text-yellow-800",
  rose:    "bg-rose-100   text-rose-800",
  red:     "bg-red-100    text-red-800",
  indigo:  "bg-indigo-100 text-indigo-800",
  green:   "bg-green-100  text-green-800",
  slate:   "bg-slate-100  text-slate-800",
  cyan:    "bg-cyan-100   text-cyan-800",
};

// ─── Difficulty pill ──────────────────────────────────────────────────────────
const DIFF_STYLES: Record<string, string> = {
  Easy:     "text-emerald-600 bg-emerald-50 border-emerald-200",
  Moderate: "text-amber-600   bg-amber-50   border-amber-200",
  Difficult:"text-red-600     bg-red-50     border-red-200",
};

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";
type DurationGroup = "All" | "2–3 Days" | "4–5 Days" | "6–7 Days" | "8–10 Days" | "12+ Days";

// Tours page shows ONLY multi-day tours (2 days and above)
const SHORT_DURATIONS = new Set(["2 Hours", "3 Hours", "4 Hours", "Half Day", "1 Day"]);
const multiDayTours = tours.filter(t => !SHORT_DURATIONS.has(t.duration));

const DURATION_GROUPS: DurationGroup[] = ["All", "2–3 Days", "4–5 Days", "6–7 Days", "8–10 Days", "12+ Days"];

function getDurationGroup(duration: string): DurationGroup {
  if (["2 Days", "3 Days"].includes(duration)) return "2–3 Days";
  if (["4 Days", "5 Days"].includes(duration)) return "4–5 Days";
  if (["6 Days", "7 Days"].includes(duration)) return "6–7 Days";
  if (["8 Days", "9 Days", "10 Days"].includes(duration)) return "8–10 Days";
  return "12+ Days";
}

// ─── Tour Card ────────────────────────────────────────────────────────────────
function TourCard({ tour }: { tour: Tour }) {
  const { toggleWishlist, isWishlisted } = useApp();
  const [imgError, setImgError] = useState(false);
  const wishlisted = isWishlisted(tour.id);
  const t = useTranslations("tours");
  const catLabels: Record<string, string> = {
    Desert:     t("catDesert"),
    Mountains:  t("catMountains"),
    Cities:     t("catCities"),
    Coastal:    t("catCoastal"),
    Activities: t("catActivities"),
    Luxury:     t("catLuxury"),
  };

  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <article className="tour-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group">

      {/* ── Image ── */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Link href={`/tours/${tour.id}`} className="absolute inset-0 z-0">
          <Image
            src={imgError ? "/tours/morocco-highlights-7day.jpg" : tour.image}
            alt={tour.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </Link>

        {/* Wishlist button — top-left */}
        <button
          onClick={() => toggleWishlist(tour)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200
            ${wishlisted
              ? "bg-red-500 text-white scale-110"
              : "bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white"
            }`}
        >
          <FaHeart className="w-3.5 h-3.5" />
        </button>

        {/* Badge — top-right */}
        {tour.badge && (
          <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${BADGE_STYLES[tour.badgeColor ?? "slate"]}`}>
            {tour.badge}
          </span>
        )}

        {/* Discount ribbon — bottom-left */}
        {discount > 0 && (
          <span className="absolute bottom-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            -{discount}% OFF
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Category label */}
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full self-start">
          {catLabels[tour.category] ?? tour.category}
        </span>

        {/* Title */}
        <Link href={`/tours/${tour.id}`}>
          <h2 className="font-bold text-slate-900 text-[15px] leading-snug line-clamp-2 mt-0.5 hover:text-amber-600 transition-colors">
            {tour.title}
          </h2>
        </Link>

        {/* Location */}
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <FaMapMarkerAlt className="w-3 h-3 text-amber-500 shrink-0" />
          {tour.location}
        </p>

        {/* Duration + Difficulty */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <FaClock className="w-3 h-3 text-indigo-400 shrink-0" />
            {tour.duration}
          </span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${DIFF_STYLES[tour.difficulty]}`}>
            {tour.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5" aria-label={`Rating: ${tour.rating} out of 5`}>
            {[1, 2, 3, 4, 5].map(i => (
              <FaStar
                key={i}
                className={`w-3 h-3 ${i <= Math.floor(tour.rating) ? "text-amber-400" : "text-slate-200"}`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-800">{tour.rating.toFixed(1)}</span>
          <span className="text-xs text-slate-400">({tour.reviews.toLocaleString()} reviews)</span>
        </div>

        {/* Spacer pushes price/cta to bottom */}
        <div className="flex-1" />

        {/* Price + Actions */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-100 gap-2">
          {/* Price block */}
          <div className="leading-none">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-900 tabular-nums">${tour.price}</span>
              <span className="text-[11px] text-slate-400 font-normal">/ person</span>
            </div>
            {tour.originalPrice && (
              <span className="text-[11px] text-slate-400 line-through tabular-nums">${tour.originalPrice}</span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/tours/${tour.id}`}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20 whitespace-nowrap"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Starting-city filter ─────────────────────────────────────────────────────
type CityFilter = "All" | "Marrakech" | "Casablanca" | "Fes" | "Tangier" | "Agadir" | "Grand Tours";

const CITY_TOUR_IDS: Record<Exclude<CityFilter, "All">, string[]> = {
  "Marrakech": [
    "sahara-3day-marrakech", "atlas-mountains-trek-3day", "essaouira-coastal-2day",
    "merzouga-luxury-camp-2day", "dades-draa-valley-3day", "private-riad-marrakech-2day",
    "toubkal-summit-expedition-3day", "marrakech-merzouga-3day", "marrakech-fes-desert-5day",
    "atlas-valleys-expedition-4day", "family-adventure-morocco-8day", "romantic-honeymoon-morocco-7day",
    "adventure-trek-morocco-8day", "marrakech-agadir-coastal-2day", "marrakech-zagora-2day",
    "marrakech-coastal-3day", "marrakech-desert-kasbahs-3day", "marrakech-north-4day",
    "marrakech-toubkal-4day", "luxury-desert-4day", "mountains-valleys-5day",
    "marrakech-north-6day", "sahara-mountains-6day", "marrakech-desert-south-6day",
    "trekking-circuit-7day", "luxury-south-8day", "desert-coast-north-10day",
    "adventure-complete-12day", "complete-south-morocco-12day", "marrakech-skoura-roses-3day",
    "marrakech-mountain-luxury-5day",
  ],
  "Casablanca": [
    "casablanca-rabat-2day", "atlantic-coast-road-trip-5day", "casablanca-imperial-3day",
    "casablanca-desert-4day", "casablanca-fes-4day", "casablanca-desert-loop-5day",
    "casablanca-tangier-coast-5day", "luxury-imperial-6day", "surf-coast-7day",
    "casablanca-complete-8day", "casablanca-circuit-7day", "morocco-highlights-7day",
    "imperial-riad-luxury-8day",
  ],
  "Fes": [
    "fes-imperial-city-2day", "fes-meknes-2day", "sahara-express-fes-2day",
    "fes-chefchaouen-2day", "fes-sahara-3day", "fes-desert-4day",
    "imperial-cities-grand-6day", "desert-fes-marrakech-7day", "fes-sahara-coast-6day",
    "chefchaouen-blue-city-2day", "luxury-imperial-5day",
  ],
  "Tangier": [
    "tangier-northern-morocco-2day", "north-morocco-loop-7day", "tangier-tetouan-2day",
    "tangier-chefchaouen-fes-3day", "tangier-marrakech-5day", "asilah-larache-coast-2day",
  ],
  "Agadir": [
    "agadir-beach-surf-3day", "anti-atlas-berber-trek-2day",
    "agadir-anti-atlas-3day", "surf-taghazout-4day",
  ],
  "Grand Tours": [
    "grand-morocco-10day", "complete-morocco-14day", "photography-tour-morocco-10day",
    "luxury-morocco-7day", "photography-nomad-9day", "cultural-immersion-morocco-9day",
    "grand-imperial-sahara-12day", "grand-tour-morocco-15day", "ultimate-morocco-18day",
  ],
};

const CITY_CONFIGS: {
  label: Exclude<CityFilter, "All">;
  icon: React.ElementType;
  colour: string;
  bg: string;
  border: string;
  tagline: string;
  href?: string;
}[] = [
  { label: "Marrakech",   icon: FaStar,       colour: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100",   tagline: "Desert, mountains & medina",      href: "/tours/from-marrakech" },
  { label: "Casablanca",  icon: FaBuilding,   colour: "text-slate-600",   bg: "bg-slate-50",   border: "border-slate-200",   tagline: "Imperial circuits & coast",       href: "/tours/from-casablanca" },
  { label: "Fes",         icon: FaUniversity, colour: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-100",  tagline: "Ancient medinas & Sahara",        href: "/tours/from-fes" },
  { label: "Tangier",     icon: FaAnchor,     colour: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100",    tagline: "North, Chefchaouen & Rif",        href: "/tours/from-tangier" },
  { label: "Agadir",      icon: FaUmbrella,   colour: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-100",    tagline: "Beach, surfing & Anti-Atlas",     href: "/tours/from-agadir" },
  { label: "Grand Tours", icon: FaGlobe,      colour: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", tagline: "All-Morocco grand circuits" },
];

// ─── Category icons for the filter pills ─────────────────────────────────────
const CAT_LABELS: Record<string, string> = {
  All:        "All Tours",
  Desert:     "Desert",
  Mountains:  "Mountains",
  Cities:     "Cities",
  Coastal:    "Coastal",
  Activities: "Activities",
  Luxury:     "Luxury",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ToursClient() {
  const [search, setSearch]                   = useState("");
  const [activeCity, setActiveCity]           = useState<CityFilter>("All");
  const [activeCategory, setActiveCategory]   = useState<Category>("All");
  const [activeDuration, setActiveDuration]   = useState<DurationGroup>("All");
  const [sortKey, setSortKey]                 = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen]         = useState(false);

  // Derived filtered + sorted list
  const filtered = useMemo(() => {
    let list = [...multiDayTours];

    // City (starting city)
    if (activeCity !== "All") {
      const ids = CITY_TOUR_IDS[activeCity];
      list = list.filter(t => ids.includes(t.id));
    }

    // Category
    if (activeCategory !== "All") {
      list = list.filter(t => t.category === activeCategory);
    }

    // Duration
    if (activeDuration !== "All") {
      list = list.filter(t => getDurationGroup(t.duration) === activeDuration);
    }

    // Search (title or location, case-insensitive)
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        t => t.title.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortKey) {
      case "price-asc":  list.sort((a, b) => a.price - b.price);   break;
      case "price-desc": list.sort((a, b) => b.price - a.price);   break;
      case "rating":     list.sort((a, b) => b.rating - a.rating); break;
      case "featured":
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return list;
  }, [search, activeCity, activeCategory, activeDuration, sortKey]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)",
        }}
      >
        {/* Decorative amber orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
        />
        {/* Faint grid pattern overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-amber-400 font-medium">Tours</span>
          </nav>

          {/* Heading */}
          <div className="max-w-2xl">
            <span className="section-label mb-4">
              {multiDayTours.length}+ Multi-Day Tours
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Morocco{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}>
                Multi-Day
              </span>{" "}
              Tours
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-5">
              2-day escapes to 18-day grand journeys — hand-picked tours with accommodation, expert guides, and transport all included.
            </p>
            {/* Cross-link to activities */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white/80 backdrop-blur-sm">
              <FaFilter className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Looking for day trips &amp; half-day activities?{" "}
              <Link href="/activities" className="text-amber-400 font-semibold hover:text-amber-300 transition flex items-center gap-1">
                Browse Activities <FaSearch className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* ── Search + Sort bar ── */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search by tour name or city…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white/15 transition"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <HiAdjustments className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={sortKey}
                onChange={e => setSortKey(e.target.value as SortKey)}
                className="pl-9 pr-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition appearance-none cursor-pointer min-w-[180px]"
              >
                <option value="featured"   className="text-slate-900 bg-white">Featured</option>
                <option value="price-asc"  className="text-slate-900 bg-white">Price: Low to High</option>
                <option value="price-desc" className="text-slate-900 bg-white">Price: High to Low</option>
                <option value="rating"     className="text-slate-900 bg-white">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FILTERS + GRID
      ════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 min-h-screen pb-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">

          {/* ════════════════════════════════════════════════════════
              CITY SELECTOR
          ════════════════════════════════════════════════════════ */}
          <div className="pt-10 pb-6">
            <div className="text-center mb-8">
              <span className="section-label">Browse by Starting City</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
                Where does your journey begin?
              </h2>
            </div>

            {/* Show-all pill */}
            <button
              onClick={() => setActiveCity("All")}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl border text-sm font-semibold mb-4 transition ${
                activeCity === "All"
                  ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/25"
                  : "bg-white text-slate-600 border-slate-200 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              Show All Multi-Day Tours
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeCity === "All" ? "bg-white/20 text-white" : "bg-amber-50 text-amber-600"}`}>
                {multiDayTours.length}
              </span>
            </button>

            {/* City cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CITY_CONFIGS.map(city => {
                const Icon = city.icon;
                const isActive = activeCity === city.label;
                const count = CITY_TOUR_IDS[city.label].length;
                const cardClass = `group flex flex-col items-center gap-3 p-5 rounded-2xl border text-center transition cursor-pointer ${
                  isActive
                    ? "bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/20"
                    : `bg-white ${city.border} hover:border-amber-300 hover:shadow-md`
                }`;
                const inner = (
                  <>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition ${isActive ? "bg-white/20" : city.bg}`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : city.colour}`} />
                    </div>
                    <div>
                      <p className={`font-bold text-xs leading-tight ${isActive ? "text-white" : "text-slate-800"}`}>
                        {city.label}
                      </p>
                      <p className={`text-[10px] mt-0.5 leading-tight ${isActive ? "text-white/80" : "text-slate-400"}`}>
                        {city.tagline}
                      </p>
                      <span className={`mt-1.5 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                        {count} tours
                      </span>
                    </div>
                  </>
                );
                return city.href ? (
                  <Link key={city.label} href={city.href} className={cardClass}>
                    {inner}
                  </Link>
                ) : (
                  <button
                    key={city.label}
                    onClick={() => setActiveCity(city.label)}
                    className={cardClass}
                  >
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Sticky filter bar ── */}
          <div className="sticky top-16 z-30 py-3 bg-slate-50/90 backdrop-blur-sm border-b border-slate-100">
            {/* Row 1: Category + sort count */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setFiltersOpen(p => !p)}
                className="shrink-0 sm:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:border-amber-300 hover:text-amber-600 transition"
                aria-expanded={filtersOpen}
              >
                <FaFilter className="w-3 h-3" />
                Filter
              </button>

              <div className={`flex gap-2 ${filtersOpen ? "flex" : "hidden sm:flex"}`}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap
                      ${activeCategory === cat
                        ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600"
                      }`}
                  >
                    {CAT_LABELS[cat]}
                  </button>
                ))}
              </div>

              <span className="hidden sm:block ml-auto shrink-0 text-xs text-slate-400 font-medium tabular-nums whitespace-nowrap">
                Showing <strong className="text-slate-700">{filtered.length}</strong> tour{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Row 2: Duration pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-none mt-2 pb-0.5">
              {DURATION_GROUPS.map(dur => (
                <button
                  key={dur}
                  onClick={() => setActiveDuration(dur)}
                  className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold transition-all whitespace-nowrap
                    ${activeDuration === dur
                      ? "bg-slate-800 text-white shadow-sm"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-700"
                    }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile result count */}
          <p className="sm:hidden text-xs text-slate-400 font-medium py-3 tabular-nums">
            Showing <strong className="text-slate-700">{filtered.length}</strong> tour{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* ── Tours grid ── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {filtered.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-28 gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
                <FaSearch className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No tours found</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                Try adjusting your search term or selecting a different category.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCity("All"); setActiveCategory("All"); setActiveDuration("All"); }}
                className="mt-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full transition shadow-md shadow-amber-500/20"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
