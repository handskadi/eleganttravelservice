"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaSun,
  FaSnowflake,
  FaPlane,
  FaLanguage,
  FaMoneyBillWave,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaChevronDown,
  FaMountain,
  FaMosque,
  FaLeaf,
  FaLandmark,
  FaWater,
  FaHiking,
  FaStore,
  FaCloudSun,
  FaCampground,
  FaPaw,
  FaPaintBrush,
  FaFish,
  FaMusic,
  FaWind,
  FaCity,
  FaAnchor,
  FaUmbrellaBeach,
  FaDove,
  FaHome,
  FaIndustry,
  FaUniversity,
  FaHammer,
  FaEye,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { destinationsData } from "@/data/destinations-data";
import type { DestinationData } from "@/data/destinations-data";
import { tours } from "@/data/tours";
import { useApp } from "@/contexts/AppContext";
import AddToCartModal from "@/components/Modals/AddToCartModal";
import type { Tour } from "@/data/tours";
import { useTranslations } from "next-intl";

// ─── Icon resolver ────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FaStar,
  FaStore,
  FaLeaf,
  FaLandmark,
  FaMountain,
  FaMosque,
  FaCloudSun,
  FaCampground,
  FaPaw,
  FaPaintBrush,
  FaWater,
  FaHiking,
  FaSun,
  FaFish,
  FaMusic,
  FaWind,
  FaCity,
  FaAnchor,
  FaUmbrellaBeach,
  FaDove,
  FaHome,
  FaIndustry,
  FaUniversity,
  FaHammer,
  FaEye,
  FaShieldAlt,
  FaMapMarkedAlt,
};

function HighlightIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? FaStar;
  return <Icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-200" />;
}

// ─── Badge styles ─────────────────────────────────────────────────────────────

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

const DIFF_COLORS: Record<string, string> = {
  Easy:      "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Moderate:  "bg-amber-50   text-amber-700   border border-amber-200",
  Difficult: "bg-red-50     text-red-700     border border-red-200",
};

// ─── Experience Card ──────────────────────────────────────────────────────────

type ThingToDo = {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
};

function ExperienceCard({ thing }: { thing: ThingToDo }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <Link
      href={`/activities?q=${encodeURIComponent(thing.title)}`}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={imgErr ? "/imgplaceholder.webp" : thing.image}
          alt={thing.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgErr(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-amber-600 transition-colors">
          {thing.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
          {thing.description}
        </p>
        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 mt-1">
          <span className="flex items-center gap-1 text-slate-400">
            <FaClock className="w-3 h-3 shrink-0" />
            {thing.duration}
          </span>
          <span className="font-bold text-amber-600">{thing.price}</span>
        </div>
      </div>
    </Link>
  );
}

// ─── Related Destination Card ─────────────────────────────────────────────────

function RelatedDestCard({ dest }: { dest: DestinationData }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
      style={{ height: "220px" }}
    >
      <Image
        src={imgErr ? "/imgplaceholder.webp" : dest.heroImage}
        alt={dest.name}
        fill
        unoptimized
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        onError={() => setImgErr(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <div>
          <p className="font-extrabold text-white text-lg leading-tight">{dest.name}</p>
          <p className="text-amber-300 text-xs mt-0.5">{dest.subtitle}</p>
          <p className="text-white/50 text-[10px] mt-1 uppercase tracking-widest">
            {dest.region}
          </p>
        </div>
        <div className="w-9 h-9 bg-white/10 group-hover:bg-amber-500 border border-white/20 rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0">
          <FaArrowRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </Link>
  );
}

// ─── Tour Card ────────────────────────────────────────────────────────────────

function DestTourCard({
  tour,
  onBook,
}: {
  tour: Tour;
  onBook: (t: Tour) => void;
}) {
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
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-slate-100 shrink-0">
        <Link href={`/tours/${tour.id}`} className="absolute inset-0 z-0">
          <Image
            src={imgError ? "/imgplaceholder.webp" : tour.image}
            alt={tour.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </Link>

        {/* Wishlist button */}
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

        {/* Badge */}
        {tour.badge && (
          <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${BADGE_STYLES[tour.badgeColor ?? "slate"]}`}>
            {tour.badge}
          </span>
        )}

        {/* Discount ribbon */}
        {discount > 0 && (
          <span className="absolute bottom-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            -{discount}% OFF
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full self-start">
          {catLabels[tour.category] ?? tour.category}
        </span>

        <Link href={`/tours/${tour.id}`}>
          <h3 className="font-bold text-slate-900 text-[15px] leading-snug line-clamp-2 mt-0.5 hover:text-amber-600 transition-colors">
            {tour.title}
          </h3>
        </Link>

        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <FaMapMarkerAlt className="w-3 h-3 text-amber-500 shrink-0" />
          {tour.location}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <FaClock className="w-3 h-3 text-indigo-400 shrink-0" />
            {tour.duration}
          </span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${DIFF_COLORS[tour.difficulty]}`}>
            {tour.difficulty}
          </span>
        </div>

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

        <div className="flex-1" />

        <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-100 gap-2">
          <div className="leading-none">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-900 tabular-nums">${tour.price}</span>
              <span className="text-[11px] text-slate-400 font-normal">/ person</span>
            </div>
            {tour.originalPrice && (
              <span className="text-[11px] text-slate-400 line-through tabular-nums">${tour.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/tours/${tour.id}`}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
            >
              Details
            </Link>
            <button
              onClick={() => onBook(tour)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function DestinationDetailClient({ slug }: { slug: string }) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const dest = destinationsData.find(d => d.slug === slug);

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 pt-24 pb-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6">
          <FaMapMarkerAlt className="w-8 h-8 text-slate-300" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-2">Destination Not Found</h1>
        <p className="text-slate-500 text-sm max-w-xs mb-8">
          This destination does not exist or may have been removed.
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-amber-500/25"
        >
          Browse All Destinations
          <HiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const destTours = tours.filter(t => dest.tourIds.includes(t.id));
  const relatedDests = destinationsData
    .filter(d => dest.relatedDestinations.includes(d.slug))
    .slice(0, 3);

  const aboutParagraphs = dest.about.split("\n\n").filter(Boolean);

  // ── Stat pills data ────────────────────────────────────────────────────────
  const statPills = [
    { label: "Best Months", value: dest.bestMonths.slice(0, 3).join(", ") },
    { label: "Language",    value: dest.language.split(",")[0].trim() },
    { label: "Currency",    value: dest.currency.split("(")[1]?.replace(")", "") ?? dest.currency },
    { label: "Timezone",    value: dest.timezone },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ════════════════════════════════════════════════════════════════════
          1. FULL-SCREEN HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background image */}
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          priority
          unoptimized
          className="object-cover"
        />

        {/* Layered gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.25) 35%, rgba(15,23,42,0.55) 65%, rgba(15,23,42,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-10 lg:px-16 pt-28 pb-10 max-w-screen-xl mx-auto left-0 right-0">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/destinations" className="hover:text-amber-300 transition-colors">Destinations</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80 font-medium">{dest.name}</span>
          </nav>

          {/* Bottom content block */}
          <div className="flex flex-col gap-4">
            {/* Country badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-3 py-1.5 rounded-full uppercase tracking-widest">
                <FaMapMarkerAlt className="w-2.5 h-2.5" />
                {dest.country} — {dest.region}
              </span>
            </div>

            {/* Destination name */}
            <div>
              <h1
                className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tight"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
              >
                {dest.name}
              </h1>
              <p className="text-xl md:text-2xl text-amber-300 font-light mt-2 tracking-wide">
                {dest.subtitle}
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mt-1">
              {statPills.map(pill => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest whitespace-nowrap">
                    {pill.label}
                  </span>
                  <span className="text-xs font-semibold text-white whitespace-nowrap">
                    {pill.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce-subtle"
          aria-hidden
        >
          <FaChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. ABOUT + QUICK FACTS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* About text — 2/3 */}
            <div className="lg:col-span-2">
              <span className="section-label">About {dest.name}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-6 leading-tight">
                Discover {dest.name}
              </h2>
              <div className="flex flex-col gap-5">
                {aboutParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick Facts card — 1/3 */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
                  Quick Facts
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { Icon: FaSun,          label: "Summer Temp",  value: dest.avgTempSummer },
                    { Icon: FaSnowflake,    label: "Winter Temp",  value: dest.avgTempWinter },
                    { Icon: FaPlane,        label: "Airport",      value: dest.airport },
                    { Icon: FaLanguage,     label: "Languages",    value: dest.language },
                    { Icon: FaMoneyBillWave,label: "Currency",     value: dest.currency },
                    { Icon: FaClock,        label: "Timezone",     value: dest.timezone },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 leading-snug mt-0.5">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best months */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3">
                  Best Time to Visit
                </p>
                <div className="flex flex-wrap gap-2">
                  {dest.bestMonths.map(m => (
                    <span
                      key={m}
                      className="text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. HIGHLIGHTS
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-20"
        style={{ background: "#f8f7f5" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">Must-See</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
              Top Highlights
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
              The experiences and landmarks that define {dest.name} as a destination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dest.highlights.map(h => (
              <div
                key={h.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-11 h-11 bg-amber-50 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 shrink-0">
                  <HighlightIcon name={h.icon} />
                </div>
                <h3 className="font-extrabold text-slate-800 mb-2 text-[15px]">{h.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. THINGS TO DO
      ════════════════════════════════════════════════════════════════════ */}
      {dest.thingsToDo.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <span className="section-label">Curated Experiences</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                  Top Experiences
                </h2>
              </div>
              <Link
                href="/tours"
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
              >
                All Tours <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-6">
              {dest.thingsToDo.map(thing => (
                <ExperienceCard key={thing.title} thing={thing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          5. TOURS IN DESTINATION
      ════════════════════════════════════════════════════════════════════ */}
      {destTours.length > 0 && (
        <section
          className="py-16 md:py-20"
          style={{ background: "#f8f7f5" }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <span className="section-label">Book Your Trip</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                  {destTours.length} Tour{destTours.length !== 1 ? "s" : ""} in {dest.name}
                </h2>
              </div>
              <Link
                href={`/tours?destination=${dest.slug}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
              >
                Browse All <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destTours.map(tour => (
                <DestTourCard key={tour.id} tour={tour} onBook={setSelectedTour} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          6. TRAVEL TIPS + GETTING THERE
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">Insider Knowledge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
              Travel Tips &amp; Getting There
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Local Tips */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-7">
              <h3 className="font-extrabold text-slate-800 text-lg mb-5 flex items-center gap-2.5">
                <span className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaLightbulb className="w-3.5 h-3.5 text-amber-500" />
                </span>
                Local Tips
              </h3>
              <div className="flex flex-col gap-4">
                {dest.localTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="w-2.5 h-2.5 text-amber-500" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Getting There */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-7">
              <h3 className="font-extrabold text-slate-800 text-lg mb-5 flex items-center gap-2.5">
                <span className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaPlane className="w-3.5 h-3.5 text-amber-500" />
                </span>
                Getting There
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {dest.gettingThere}
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                <FaPlane className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">
                    Nearest Airport
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{dest.airport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. RELATED DESTINATIONS
      ════════════════════════════════════════════════════════════════════ */}
      {relatedDests.length > 0 && (
        <section
          className="py-16 md:py-20"
          style={{ background: "#f8f7f5" }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <span className="section-label">Explore More</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                  You Might Also Like
                </h2>
              </div>
              <Link
                href="/destinations"
                className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
              >
                All Destinations <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDests.map(d => (
                <RelatedDestCard key={d.slug} dest={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          8. CTA BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div
            className="rounded-3xl px-8 md:px-14 py-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #92400e 0%, #b45309 40%, #d97706 80%, #f59e0b 100%)",
            }}
          >
            {/* Subtle pattern overlay */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10">
              <p className="text-amber-200/80 text-xs font-bold uppercase tracking-widest mb-3">
                Your Adventure Awaits
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                Ready to visit {dest.name}?
              </h3>
              <p className="text-amber-100/80 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
                Our Morocco specialists will craft the perfect itinerary for your timeframe and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/tours?destination=${dest.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-xl shadow-black/10"
                >
                  Browse All Tours
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AddToCartModal ───────────────────────────────────────────────────── */}
      {selectedTour && (
        <AddToCartModal
          isOpen={!!selectedTour}
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </div>
  );
}
