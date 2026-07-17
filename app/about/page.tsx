import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaStar,
  FaAward,
  FaThumbsUp,
  FaLeaf,
  FaShieldAlt,
  FaHandshake,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Elegant Travel Service Morocco",
  description:
    "Learn about Elegant Travel Service — Morocco's most trusted private tour operator. Founded by local guides, we've been crafting unforgettable journeys since 2014.",
  alternates: { canonical: "https://www.eleganttravelservice.com/about" },
};

// ─── Data ───────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "10+",    label: "Years" },
  { value: "15,000+", label: "Travellers" },
  { value: "100+",   label: "Tours" },
  { value: "4.9/5",  label: "Rating" },
];

const statsBar = [
  { Icon: FaUsers,        value: "15,000+", label: "Happy Travellers" },
  { Icon: FaMapMarkedAlt, value: "100+",    label: "Curated Tours" },
  { Icon: FaStar,         value: "4.9/5",   label: "Average Rating" },
  { Icon: FaAward,        value: "10+",     label: "Years in Morocco" },
  { Icon: FaThumbsUp,     value: "98%",     label: "Satisfaction Rate" },
];

const team = [
  {
    initials: "YB",
    name: "Youssef Benali",
    role: "Head Guide & Founder",
    bio: "15+ years leading treks across Morocco's High Atlas, Sahara and northern medinas. Speaks English, French and Tamazight.",
  },
  {
    initials: "FZ",
    name: "Fatima Zahra",
    role: "Operations Manager",
    bio: "Coordinates every logistics detail, from airport transfers to riad reservations. Obsessed with making travel seamless.",
  },
  {
    initials: "HA",
    name: "Hamid Ait Ouali",
    role: "Mountain Specialist",
    bio: "Certified Toubkal summit guide with expertise in the Draa Valley and Dadès Gorges. Knows every shortcut in the Atlas.",
  },
  {
    initials: "AB",
    name: "Amira Bensaid",
    role: "Guest Experience",
    bio: "Handles all bookings, communications and post-trip follow-up. Your first call when anything needs attention.",
  },
];

const values = [
  {
    Icon: FaUsers,
    title: "Small Groups",
    desc: "Max 12 people. Real intimacy, no bus-tour crowds.",
  },
  {
    Icon: FaLeaf,
    title: "Sustainable Travel",
    desc: "We pay fair wages, avoid over-touristed sites and support local cooperatives.",
  },
  {
    Icon: FaShieldAlt,
    title: "Fully Insured",
    desc: "Every tour includes guide insurance, vehicle cover and 24/7 emergency support.",
  },
  {
    Icon: FaStar,
    title: "Handpicked Quality",
    desc: "Every hotel, riad and guide on our roster has been personally vetted.",
  },
  {
    Icon: FaMapMarkedAlt,
    title: "Local Knowledge",
    desc: "Our guides are born in the regions they show you. No scripts, just stories.",
  },
  {
    Icon: FaHandshake,
    title: "Honest Pricing",
    desc: "The price you see is the price you pay. No hidden fees, no commission pressure.",
  },
];

const comparisons = [
  {
    label: "Group Size",
    ets: "Max 12 people",
    others: "40-seat bus tours",
  },
  {
    label: "Your Guide",
    ets: "Private driver-guide",
    others: "Rotating anonymous guides",
  },
  {
    label: "Flexibility",
    ets: "Flexible daily itinerary",
    others: "Fixed timetable, no adjustments",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tours/chefchaouen-blue-city-2day.jpg"
            alt="Chefchaouen, Morocco"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)",
              opacity: 0.82,
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pb-16 pt-40 w-full">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">About</span>
          </nav>

          {/* Label */}
          <span className="section-label inline-block mb-5">Our Story</span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
            Morocco&apos;s Most Trusted Travel Company
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
            Founded by local guides who love their country. Built on small groups, honest prices,
            and journeys that stay with you long after you&apos;re home.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400 leading-none">{value}</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wider font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. OUR STORY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <span className="section-label inline-block mb-5">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Born in Marrakech. Built for travellers.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Elegant Travel Service was founded in 2014 by Youssef Benali and two fellow guides
                who had spent years watching tourists get overcharged, rushed and underserved by
                mass-market operators. They knew Morocco intimately — the hidden riads, the quiet
                mountain passes, the family-run argan cooperatives — and they knew visitors deserved
                to experience all of it.
              </p>
              <p>
                It began with three private tours run out of a riad in the heart of the Marrakech
                medina. Word spread. Guests came back. Referrals multiplied. Within five years,
                ETS had grown into a full-service agency with more than 100 curated tours spanning
                the Sahara, the High Atlas, the Atlantic coast and the imperial cities.
              </p>
              <p>
                Our mission has never changed: deliver an authentic Morocco, in small groups of no
                more than 12, at honest prices, with guides who genuinely love the country they show
                you. No scripts, no commissions, no rush. Just real travel.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl px-6 py-5">
              <FaQuoteLeft className="text-amber-400 w-5 h-5 mb-2" />
              <p className="text-slate-700 italic leading-relaxed text-[0.95rem]">
                We don&apos;t just show you Morocco. We introduce you to the people, the food,
                the music and the silence that most tours never reach.
              </p>
              <footer className="mt-3 text-sm font-bold text-amber-600 not-italic">
                — Youssef Benali, Founder
              </footer>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-amber-500/20 transition"
              >
                Browse Tours <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl transition"
              >
                Contact Us <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/tours/anti-atlas-berber-trek-2day.jpg"
              alt="Amazigh culture — Morocco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. STATS BAR
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-800 py-14 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {statsBar.map(({ Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white leading-none">{value}</div>
                  <div className="text-slate-400 text-sm mt-1">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. TEAM
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label inline-block mb-4">Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              The people behind your journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-md transition"
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-extrabold mb-4 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)" }}
                >
                  {initials}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-0.5">{name}</h3>
                <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-3">{role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. VALUES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label inline-block mb-4">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our guiding principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-amber-200 transition group"
              >
                <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition">
                  <Icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. WHY CHOOSE ETS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Why travellers choose us over the rest
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div />
              <div className="bg-amber-500 rounded-xl py-2 px-3">
                <span className="text-white font-extrabold text-sm uppercase tracking-wide">ETS</span>
              </div>
              <div className="bg-slate-200 rounded-xl py-2 px-3">
                <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Others</span>
              </div>
            </div>

            {comparisons.map(({ label, ets, others }) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 items-center bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
              >
                <div className="text-sm font-bold text-slate-600">{label}</div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-center">
                  <span className="text-amber-700 font-semibold text-sm">{ets}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center">
                  <span className="text-slate-400 text-sm line-through">{others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          7. CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tours/sahara-3day-marrakech.jpg"
            alt="Sahara Desert, Morocco"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)",
              opacity: 0.88,
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to explore Morocco with us?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Tell us your dream trip. We&apos;ll handle every detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition"
            >
              Explore All Tours <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition"
            >
              Plan My Trip <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
