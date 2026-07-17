"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaHeart,
  FaCheck,
  FaTimes,
  FaShieldAlt,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
  FaMountain,
  FaShareAlt,
  FaQuestionCircle,
} from "react-icons/fa";

import { tours } from "@/data/tours";
import type { Tour } from "@/data/tours";
import { tourDetails } from "@/data/tour-itineraries";
import { useApp } from "@/contexts/AppContext";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslations } from "next-intl";
import AddToCartModal from "@/components/Modals/AddToCartModal";

// ─── Constants ────────────────────────────────────────────────────────────────

const DIFF_PILL: Record<string, string> = {
  Easy: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Moderate: "bg-amber-50 text-amber-700 border border-amber-200",
  Difficult: "bg-red-50 text-red-700 border border-red-200",
};

const BADGE_MAP: Record<string, string> = {
  amber: "bg-amber-100 text-amber-800",
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  purple: "bg-purple-100 text-purple-800",
  teal: "bg-teal-100 text-teal-800",
  yellow: "bg-yellow-100 text-yellow-800",
  rose: "bg-rose-100 text-rose-800",
  red: "bg-red-100 text-red-800",
  indigo: "bg-indigo-100 text-indigo-800",
  green: "bg-green-100 text-green-800",
  slate: "bg-slate-100 text-slate-800",
  cyan: "bg-cyan-100 text-cyan-800",
};

const STATIC_REVIEWS = [
  {
    id: 1,
    name: "Sophia Reynolds",
    country: "United Kingdom",
    date: "March 2025",
    rating: 5,
    initials: "SR",
    text: "Absolutely breathtaking from start to finish. Our guide was deeply knowledgeable and the logistics were flawless. The sunset over the dunes was a moment I'll carry for the rest of my life.",
  },
  {
    id: 2,
    name: "Marc Lefèvre",
    country: "France",
    date: "February 2025",
    rating: 5,
    initials: "ML",
    text: "Perfectly organised in every detail. The luxury camp was far beyond the photos — champagne on arrival, a private chef in the evening, and absolute silence under a sky full of stars.",
  },
  {
    id: 3,
    name: "Amir Hassan",
    country: "UAE",
    date: "January 2025",
    rating: 4,
    initials: "AH",
    text: "Everything was well-organised and the team was very professional. The one thing I'd suggest is a slightly longer camel ride — but honestly a minor note compared to everything that went right.",
  },
  {
    id: 4,
    name: "Natalie Okonkwo",
    country: "United States",
    date: "December 2024",
    rating: 5,
    initials: "NO",
    text: "Best travel experience of my life, no contest. Woke up before sunrise and hiked to the top of the dune to watch the sky turn gold. Worth every penny and more.",
  },
];

const FEATURE_BOXES = [
  {
    emoji: "🧭",
    title: "Expert Local Guides",
    desc: "Every tour is led by certified, English-speaking guides with deep regional knowledge.",
  },
  {
    emoji: "🛡️",
    title: "Fully Insured & Safe",
    desc: "All tours carry full liability insurance and follow Morocco's official safety protocols.",
  },
  {
    emoji: "♻️",
    title: "Responsible Travel",
    desc: "We partner with local communities and carbon-offset every trip booked through us.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const cls =
    size === "lg" ? "w-5 h-5" : size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar
          key={s}
          className={`${cls} ${s <= Math.round(rating) ? "text-amber-400" : "text-slate-200"}`}
        />
      ))}
    </span>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

function FaqSection({ tour }: { tour: Tour }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const difficultyContext: Record<string, string> = {
    Easy: "This tour is rated Easy — suitable for most fitness levels including families with children. No specialist equipment or prior experience is required.",
    Moderate: "This tour is rated Moderate — best suited to travellers with a reasonable level of fitness. Expect some walking and active sections throughout the day.",
    Difficult: "This tour is rated Difficult — designed for experienced travellers with good physical fitness. Challenging terrain and sustained activity should be expected.",
  };

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: `What is included in the ${tour.title}?`,
      answer: (
        <ul className="space-y-1.5">
          {tour.included.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <FaCheck className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      question: "What is not included?",
      answer: (
        <ul className="space-y-1.5">
          {tour.excluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <FaTimes className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      question: "How difficult is this tour?",
      answer: <p>{difficultyContext[tour.difficulty] ?? `This tour is rated ${tour.difficulty}.`}</p>,
    },
    {
      question: "How long does the tour last and where does it start?",
      answer: (
        <p>
          This tour lasts <strong>{tour.duration}</strong> and departs from{" "}
          <strong>{tour.location}</strong>. Transfers from your accommodation can be arranged on
          request — contact us when booking.
        </p>
      ),
    },
    {
      question: "What is the maximum group size?",
      answer: (
        <p>
          Groups are capped at <strong>{tour.maxGroupSize} people</strong>. Elegant Travel Service
          operates private tours — you will have your own dedicated vehicle and guide, never sharing
          with strangers unless you are booking a group yourself.
        </p>
      ),
    },
    {
      question: "What is the price and what does it cover?",
      answer: (
        <p>
          The price is <strong>${tour.price} per person</strong>, all taxes and fees included.
          {tour.originalPrice && tour.originalPrice > tour.price && (
            <> The regular price is ${tour.originalPrice} — you are saving ${tour.originalPrice - tour.price} per person.</>
          )}{" "}
          This covers: {tour.included.slice(0, 3).join(", ")}
          {tour.included.length > 3 ? `, and ${tour.included.length - 3} more items` : ""}.
        </p>
      ),
    },
    {
      question: "Can I cancel or reschedule this tour?",
      answer: (
        <p>
          Free cancellation up to 48 hours before departure. Within 48 hours, a 50% credit note is
          issued valid for 12 months. Contact our team to reschedule at no extra charge.
        </p>
      ),
    },
  ];

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-14 border-t border-slate-100">
      <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2.5">
        <FaQuestionCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset"
                aria-expanded={isOpen}
              >
                <span
                  className={`font-semibold text-sm sm:text-base leading-snug pr-4 ${
                    isOpen ? "text-amber-600" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="text-slate-600 text-sm leading-relaxed px-5 pb-5 border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Related Tour Card ────────────────────────────────────────────────────────

function RelatedCard({ tour }: { tour: Tour }) {
  const [imgErr, setImgErr] = useState(false);
  const { toggleWishlist, isWishlisted } = useApp();
  const wishlisted = isWishlisted(tour.id);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Link href={`/tours/${tour.id}`} className="block">
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <Image
            src={imgErr ? "/tours/morocco-highlights-7day.jpg" : tour.image}
            alt={tour.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgErr(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {tour.badge && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
                BADGE_MAP[tour.badgeColor ?? "amber"]
              }`}
            >
              {tour.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={`/tours/${tour.id}`}>
            <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
              {tour.title}
            </h3>
          </Link>
          <button
            onClick={() => toggleWishlist(tour)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition ${
              wishlisted
                ? "border-rose-200 bg-rose-50 text-rose-500"
                : "border-slate-200 bg-white text-slate-400 hover:text-rose-500"
            }`}
            aria-label="Toggle wishlist"
          >
            <FaHeart className="w-3 h-3" />
          </button>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
          <FaMapMarkerAlt className="w-3 h-3 text-amber-400" />
          {tour.location}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Stars rating={tour.rating} size="sm" />
            <span className="text-xs text-slate-500">{tour.rating}</span>
          </div>
          <div>
            {tour.originalPrice && (
              <span className="text-xs text-slate-400 line-through mr-1">
                ${tour.originalPrice}
              </span>
            )}
            <span className="text-sm font-bold text-amber-600">${tour.price}</span>
            <span className="text-xs text-slate-400"> /pp</span>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Client Component ─────────────────────────────────────────────────────────

export default function TourDetailClient({ slug }: { slug: string }) {
  const tour = tours.find((t) => t.id === slug);
  const detail = tourDetails.find((d) => d.tourId === slug);

  const { toggleWishlist, isWishlisted } = useApp();
  const { openLogin } = useAuth();
  const wishlisted = tour ? isWishlisted(tour.id) : false;
  const t = useTranslations("tours");
  const catLabels: Record<string, string> = {
    Desert:     t("catDesert"),
    Mountains:  t("catMountains"),
    Cities:     t("catCities"),
    Coastal:    t("catCoastal"),
    Activities: t("catActivities"),
    Luxury:     t("catLuxury"),
  };

  const [activeTab, setActiveTab] = useState<
    "overview" | "itinerary" | "included" | "reviews"
  >("overview");
  const [openDays, setOpenDays] = useState<number[]>([0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const [copied, setCopied] = useState(false);

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <FaMountain className="w-16 h-16 text-slate-200 mb-5" />
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">Tour Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-sm">
          We couldn&apos;t find this tour. It may have been removed or the URL is incorrect.
        </p>
        <Link
          href="/tours"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25"
        >
          Browse All Tours
        </Link>
      </div>
    );
  }

  // ── Derived values ─────────────────────────────────────────────────────────
  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  const relatedTours = tours
    .filter((t) => t.id !== tour.id && t.category === tour.category)
    .slice(0, 3);

  const avgRating = (
    STATIC_REVIEWS.reduce((a, r) => a + r.rating, 0) / STATIC_REVIEWS.length
  ).toFixed(1);

  const toggleDay = (i: number) =>
    setOpenDays((prev) =>
      prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]
    );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatToBring = [
    "Comfortable walking shoes",
    "Sun protection — hat & SPF 50+",
    "Water bottle & light layers",
  ];

  return (
    <>
      <AddToCartModal
        isOpen={modalOpen}
        tour={tour}
        onClose={() => setModalOpen(false)}
      />

      <main className="min-h-screen bg-slate-50 pb-24">

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <nav className="bg-white border-b border-slate-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li className="text-slate-300">/</li>
              <li>
                <Link href="/tours" className="hover:text-amber-600 transition-colors font-medium">
                  Tours
                </Link>
              </li>
              <li className="text-slate-300">/</li>
              <li className="text-slate-700 font-semibold truncate max-w-[200px] sm:max-w-none">
                {tour.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative h-[420px] sm:h-[460px] overflow-hidden">
          <Image
            src={imgErr ? "/tours/morocco-highlights-7day.jpg" : tour.image}
            alt={tour.title}
            fill
            unoptimized
            priority
            className="object-cover"
            onError={() => setImgErr(true)}
          />
          {/* Directional gradient — strong left, fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

          {/* Hero content */}
          <div className="relative h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 lg:pb-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

              {/* Left: title block */}
              <div className="flex-1 min-w-0">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {tour.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        BADGE_MAP[tour.badgeColor ?? "amber"]
                      }`}
                    >
                      {tour.badge}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25 backdrop-blur-sm">
                    {catLabels[tour.category] ?? tour.category}
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  {tour.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    {tour.location}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${DIFF_PILL[tour.difficulty]}`}>
                    {tour.difficulty}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Stars rating={tour.rating} size="sm" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-white/55">({tour.reviews} reviews)</span>
                  </span>
                </div>

                {/* Key stats strip */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { Icon: FaClock, label: tour.duration },
                    { Icon: FaUsers, label: `Max ${tour.maxGroupSize} people` },
                    { Icon: FaMountain, label: tour.difficulty },
                  ].map(({ Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
                    >
                      <Icon className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: floating price card — desktop only */}
              <div className="hidden lg:block flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-5 w-72 shadow-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    {tour.originalPrice && (
                      <span className="text-white/45 text-sm line-through">
                        ${tour.originalPrice}
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        -{discount}%
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mb-0.5">
                    <span className="text-4xl font-extrabold text-white">${tour.price}</span>
                    <span className="text-white/55 text-sm">/ person</span>
                  </div>
                  <p className="text-white/40 text-xs mb-4">All taxes &amp; fees included</p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/30 mb-2 text-sm"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(tour)}
                    className={`w-full py-2.5 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      wishlisted
                        ? "bg-rose-50/20 border-rose-300/60 text-rose-200"
                        : "bg-white/10 border-white/25 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    <FaHeart className={`w-3.5 h-3.5 ${wishlisted ? "text-rose-400" : ""}`} />
                    {wishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-full mt-2 py-2 text-white/50 hover:text-white/80 text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <FaShareAlt className="w-3 h-3" />
                    {copied ? "Link copied!" : "Share this tour"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile sticky price bar */}
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between gap-3 sticky top-0 z-30 shadow-sm">
          <div>
            <div className="flex items-baseline gap-1.5">
              {tour.originalPrice && (
                <span className="text-slate-400 text-xs line-through">${tour.originalPrice}</span>
              )}
              <span className="text-xl font-extrabold text-slate-900">${tour.price}</span>
              <span className="text-slate-500 text-xs">/ pp</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Stars rating={tour.rating} size="sm" />
              <span className="text-xs text-slate-400">{tour.rating} ({tour.reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(tour)}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                wishlisted
                  ? "border-rose-300 bg-rose-50 text-rose-500"
                  : "border-slate-200 bg-white text-slate-400"
              }`}
              aria-label="Wishlist"
            >
              <FaHeart className="w-4 h-4" />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition text-sm shadow-lg shadow-amber-500/20"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* ── Content Grid ──────────────────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── LEFT: 2 of 3 columns ──────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

                {/* Tab bar */}
                <div className="flex border-b border-slate-100 overflow-x-auto">
                  {(["overview", "itinerary", "included", "reviews"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 min-w-[110px] py-4 px-4 text-sm font-semibold capitalize transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset ${
                        activeTab === tab
                          ? "text-amber-600 border-b-2 border-amber-500 bg-amber-50/50"
                          : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {tab === "reviews" ? `Reviews (${STATIC_REVIEWS.length})` : tab}
                    </button>
                  ))}
                </div>

                <div className="p-6 sm:p-8">

                  {/* ─── Overview ──────────────────────────────────────── */}
                  {activeTab === "overview" && (
                    <div className="space-y-8 animate-fade-in">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3">
                          About This Tour
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-[0.9375rem]">
                          {tour.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tour.highlights.map((h) => (
                            <div
                              key={h}
                              className="flex items-center gap-3 bg-amber-50/70 border border-amber-100 rounded-xl px-4 py-3"
                            >
                              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm shadow-amber-400/40">
                                <FaCheck className="w-2.5 h-2.5 text-white" />
                              </div>
                              <span className="text-sm font-medium text-slate-700">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4">
                          What Makes This Tour Special
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {FEATURE_BOXES.map((fb) => (
                            <div
                              key={fb.title}
                              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center hover:border-amber-200 hover:bg-amber-50/40 transition-colors"
                            >
                              <div className="text-3xl mb-3">{fb.emoji}</div>
                              <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                                {fb.title}
                              </h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{fb.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─── Itinerary ─────────────────────────────────────── */}
                  {activeTab === "itinerary" && (
                    <div className="animate-fade-in">
                      <h2 className="text-xl font-bold text-slate-800 mb-6">
                        Day-by-Day Itinerary
                      </h2>

                      {detail && detail.itinerary.length > 0 ? (
                        <div className="space-y-3">
                          {detail.itinerary.map((day, i) => {
                            const isOpen = openDays.includes(i);
                            return (
                              <div
                                key={day.day}
                                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                              >
                                <button
                                  onClick={() => toggleDay(i)}
                                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow transition-colors ${
                                      isOpen
                                        ? "bg-amber-500 text-white shadow-amber-400/30"
                                        : "bg-amber-50 text-amber-600"
                                    }`}
                                  >
                                    {day.day}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-0.5">
                                      Day {day.day}
                                    </p>
                                    <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                                      {day.title}
                                    </h3>
                                    {day.accommodation && !isOpen && (
                                      <p className="text-xs text-slate-400 mt-0.5 truncate">
                                        Stay: {day.accommodation}
                                      </p>
                                    )}
                                  </div>
                                  {isOpen ? (
                                    <FaChevronUp className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                  ) : (
                                    <FaChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                  )}
                                </button>

                                {isOpen && (
                                  <div className="px-5 pb-5 border-t border-slate-100 pt-4 animate-slide-down">
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                      {day.description}
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                      {day.activities.map((act) => (
                                        <li
                                          key={act}
                                          className="flex items-start gap-2.5 text-sm text-slate-700"
                                        >
                                          <FaCheck className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                                          {act}
                                        </li>
                                      ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2.5 pt-3 border-t border-slate-100">
                                      {day.meals && (
                                        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                                          🍽️ {day.meals}
                                        </span>
                                      )}
                                      {day.accommodation && (
                                        <span className="flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
                                          🏨 {day.accommodation}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center">
                          <div className="text-4xl mb-3">🗓️</div>
                          <p className="font-semibold text-slate-700 mb-1">
                            Detailed itinerary coming soon
                          </p>
                          <p className="text-sm text-slate-500">
                            Contact us for a personalised day-by-day breakdown.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ─── Included ──────────────────────────────────────── */}
                  {activeTab === "included" && (
                    <div className="animate-fade-in space-y-7">
                      <h2 className="text-xl font-bold text-slate-800">What&apos;s Included</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3 flex items-center gap-2">
                            <FaCheck className="w-3 h-3" /> Included
                          </h3>
                          <ul className="space-y-2.5">
                            {tour.included.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <FaCheck className="w-2.5 h-2.5 text-emerald-600" />
                                </div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-3 flex items-center gap-2">
                            <FaTimes className="w-3 h-3" /> Not Included
                          </h3>
                          <ul className="space-y-2.5">
                            {tour.excluded.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                                <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <FaTimes className="w-2.5 h-2.5 text-red-500" />
                                </div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {detail && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                          {[
                            { label: "Meeting Point", value: detail.meetingPoint },
                            { label: "Physical Level", value: detail.physicalLevel },
                            {
                              label: "Minimum Age",
                              value:
                                detail.minAge !== undefined && detail.minAge > 0
                                  ? `${detail.minAge}+ years`
                                  : "No minimum",
                            },
                          ].map(({ label, value }) => (
                            <div
                              key={label}
                              className="bg-amber-50/60 border border-amber-100 rounded-xl p-4"
                            >
                              <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
                                {label}
                              </p>
                              <p className="text-sm text-slate-700 leading-snug">{value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ─── Reviews ───────────────────────────────────────── */}
                  {activeTab === "reviews" && (
                    <div className="animate-fade-in space-y-6">
                      {/* Summary */}
                      <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                        <div className="text-center flex-shrink-0">
                          <p className="text-5xl font-extrabold text-amber-500 leading-none">
                            {avgRating}
                          </p>
                          <div className="flex justify-center mt-1.5">
                            <Stars rating={parseFloat(avgRating)} size="md" />
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            {STATIC_REVIEWS.length} reviews
                          </p>
                        </div>
                        <div className="flex-1 space-y-1.5">
                          {[5, 4, 3, 2, 1].map((star) => {
                            const count = STATIC_REVIEWS.filter((r) => r.rating === star).length;
                            const pct = Math.round((count / STATIC_REVIEWS.length) * 100);
                            return (
                              <div key={star} className="flex items-center gap-2 text-xs">
                                <span className="w-3 text-slate-500 font-medium">{star}</span>
                                <FaStar className="w-3 h-3 text-amber-400 flex-shrink-0" />
                                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                  <div
                                    className="bg-amber-400 h-full rounded-full"
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                                <span className="w-7 text-slate-400 text-right">{pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Review cards */}
                      <div className="space-y-4">
                        {STATIC_REVIEWS.map((review) => (
                          <div
                            key={review.id}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-5"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                                {review.initials}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <div>
                                    <p className="font-semibold text-slate-800 text-sm">
                                      {review.name}
                                    </p>
                                    <p className="text-xs text-slate-400">{review.country}</p>
                                  </div>
                                  <div className="text-right flex-shrink-0">
                                    <Stars rating={review.rating} size="sm" />
                                    <p className="text-xs text-slate-400 mt-0.5">{review.date}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Write review CTA */}
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
                        <p className="font-bold text-slate-800 mb-1">
                          Travelled with us? Share your story.
                        </p>
                        <p className="text-sm text-slate-500 mb-4">
                          Sign in to leave a verified review and help other travellers.
                        </p>
                        <button
                          onClick={openLogin}
                          className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition text-sm shadow-md shadow-amber-500/20"
                        >
                          Sign in to Review
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* ── RIGHT: 1 of 3 columns ─────────────────────────────────── */}
            <div className="space-y-5">

              {/* Booking widget — sticky */}
              <div className="sticky top-4 space-y-5">
                <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-0.5">
                      {tour.originalPrice && (
                        <span className="text-slate-400 text-sm line-through">
                          ${tour.originalPrice}
                        </span>
                      )}
                      {discount > 0 && (
                        <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Save {discount}%
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">${tour.price}</span>
                      <span className="text-slate-500 text-sm">per person</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">All taxes &amp; fees included</p>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-2.5">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
                    >
                      Book This Tour
                    </button>
                    <button
                      onClick={() => toggleWishlist(tour)}
                      className={`w-full py-3 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition ${
                        wishlisted
                          ? "border-rose-300 bg-rose-50 text-rose-600"
                          : "border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-600"
                      }`}
                    >
                      <FaHeart
                        className={`w-3.5 h-3.5 ${wishlisted ? "text-rose-500" : "text-slate-400"}`}
                      />
                      {wishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
                    </button>
                  </div>

                  {/* Key details */}
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                    {[
                      { label: "Duration", value: tour.duration },
                      { label: "Group Size", value: `Up to ${tour.maxGroupSize} people` },
                      { label: "Difficulty", value: tour.difficulty },
                      { label: "Languages", value: "English · French · Arabic" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{label}</span>
                        <span className="font-semibold text-slate-800 text-right max-w-[55%]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Help link */}
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                    <Link
                      href="/contact"
                      className="text-xs text-amber-600 hover:text-amber-700 font-semibold transition"
                    >
                      Need help choosing? Talk to an expert →
                    </Link>
                  </div>

                  {/* Trust strip */}
                  <div className="mt-4 flex items-center justify-around text-xs text-slate-500">
                    {[
                      { Icon: FaShieldAlt, label: "Secure" },
                      { Icon: FaUsers, label: "Best Price" },
                      { Icon: FaStar, label: "Top Rated" },
                    ].map(({ Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practical info card — not sticky */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Practical Info
                </h3>

                {detail && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                      Meeting Point
                    </p>
                    <p className="text-sm text-slate-700 leading-snug">{detail.meetingPoint}</p>
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    What to Bring
                  </p>
                  <ul className="space-y-1.5">
                    {whatToBring.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <FaCheck className="w-3 h-3 text-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    Questions?
                  </p>
                  <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 hover:bg-emerald-100 transition"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection tour={tour} />
        </div>

        {/* ── Related Tours ─────────────────────────────────────────────── */}
        {relatedTours.length > 0 && (
          <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="section-label">You May Also Like</span>
                <h2 className="text-2xl font-extrabold text-slate-800 mt-1">
                  {t("moreCatTours", { cat: catLabels[tour.category] ?? tour.category })}
                </h2>
              </div>
              <Link
                href="/tours"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 transition"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map((t) => (
                <RelatedCard key={t.id} tour={t} />
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  );
}
