import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaRoute,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { destinationsData } from "@/data/destinations-data";

export const metadata: Metadata = {
  title: "Morocco Destinations | Elegant Travel Service",
  description:
    "Explore Morocco's most iconic destinations — from the Sahara desert and High Atlas mountains to the imperial cities of Marrakech, Fes and Chefchaouen's blue medina.",
  keywords: [
    "Morocco destinations",
    "places to visit Morocco",
    "Morocco travel destinations",
    "Morocco cities",
    "Morocco regions",
    "Marrakech",
    "Chefchaouen",
    "Sahara",
    "Fes",
    "Morocco travel guide",
  ],
  openGraph: {
    title: "Morocco Destinations | Elegant Travel Service",
    description:
      "Discover Morocco's most iconic destinations — deserts, mountains, medinas and coast.",
    type: "website",
  },
  alternates: { canonical: "https://www.eleganttravelservice.com/destinations" },
};

// ─── Region groupings ──────────────────────────────────────────────────────
const regions = [
  {
    name: "Northern Morocco",
    colour: "border-sky-400",
    accent: "text-sky-600",
    bg: "bg-sky-50",
    destinations: ["Chefchaouen", "Fes", "Casablanca"],
  },
  {
    name: "Southern Morocco",
    colour: "border-amber-400",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    destinations: ["Sahara Desert", "Agadir"],
  },
  {
    name: "Imperial Cities",
    colour: "border-rose-400",
    accent: "text-rose-600",
    bg: "bg-rose-50",
    destinations: ["Marrakech", "Fes", "Casablanca"],
  },
  {
    name: "Atlantic Coastal",
    colour: "border-teal-400",
    accent: "text-teal-600",
    bg: "bg-teal-50",
    destinations: ["Essaouira", "Casablanca", "Agadir"],
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { icon: FaMapMarkerAlt, value: "8", label: "Destinations" },
  { icon: FaRoute, value: "20+", label: "Tours" },
  { icon: FaUsers, value: "5,000+", label: "Happy Travellers" },
  { icon: FaAward, value: "15", label: "Years Experience" },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Decorative background texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#f59e0b 0,#f59e0b 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Amber glow */}
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="section-label">Morocco Travel Guide</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white leading-tight text-balance">
              Discover{" "}
              <em className="not-italic text-amber-400">Morocco</em>
            </h1>
            <p className="mt-5 text-slate-400 text-xl leading-relaxed">
              8 breathtaking destinations — from the golden Sahara to the azure
              peaks of the Rif. Each one a complete world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 px-4 py-2 rounded-full font-medium">
                <FaMapMarkerAlt className="text-amber-400 w-3.5 h-3.5" />
                8 destinations
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 px-4 py-2 rounded-full font-medium">
                <FaRoute className="text-amber-400 w-3.5 h-3.5" />
                20+ curated tours
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 px-4 py-2 rounded-full font-medium">
                <FaUsers className="text-amber-400 w-3.5 h-3.5" />
                5,000+ travellers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center py-7 px-4 gap-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-1 group-hover:bg-amber-500/15 transition">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-2xl font-extrabold text-white tabular-nums">
                  {value}
                </span>
                <span className="text-slate-400 text-xs font-medium text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destination Cards Grid ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">All Destinations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
              Choose Your Morocco
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Every destination tells a different story. Desert silence, mountain
              air, medieval medinas, Atlantic breeze — Morocco holds them all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinationsData.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 block"
              >
                {/* Image */}
                <div className="relative w-full h-72">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
                </div>

                {/* Tour count badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {dest.tourIds.length} Tour{dest.tourIds.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Card body */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-amber-300/80 text-xs font-semibold uppercase tracking-widest mb-1">
                    {dest.region}
                  </p>
                  <h3 className="text-white text-xl font-extrabold leading-tight mb-1 text-balance">
                    {dest.name}
                  </h3>
                  <p className="text-slate-300/75 text-sm mb-3 leading-snug line-clamp-2">
                    {dest.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide group-hover:gap-2.5 transition-all duration-200">
                    Explore <FaArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Morocco by Region ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Browse by Area</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
              Morocco by Region
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Not sure where to start? Browse Morocco&apos;s four great regions
              and find the destinations that speak to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`${region.bg} rounded-2xl p-6 border-l-4 ${region.colour}`}
              >
                <h3
                  className={`font-extrabold text-base mb-4 ${region.accent}`}
                >
                  {region.name}
                </h3>
                <ul className="space-y-2.5">
                  {region.destinations.map((name) => {
                    const dest = destinationsData.find((d) => d.name === name);
                    return dest ? (
                      <li key={name}>
                        <Link
                          href={`/destinations/${dest.slug}`}
                          className="flex items-center gap-2 text-slate-700 hover:text-slate-900 text-sm font-medium group/link transition-colors"
                        >
                          <FaArrowRight
                            className={`w-3 h-3 ${region.accent} opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all`}
                          />
                          {name}
                          <span className="ml-auto text-xs text-slate-400 font-normal">
                            {dest.tourIds.length} tour{dest.tourIds.length !== 1 ? "s" : ""}
                          </span>
                        </Link>
                      </li>
                    ) : (
                      <li key={name} className="text-sm text-slate-500">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative amber haze */}
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.07]"
          style={{
            background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="section-label">Need Help Choosing?</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white mb-5 text-balance">
            Can&apos;t decide which destination is right for you?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Our Morocco specialists have been crafting bespoke itineraries for
            over 15 years. Tell us your travel style and we&apos;ll build your
            perfect journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-amber-500/25 text-sm uppercase tracking-wide"
          >
            Talk to a Specialist
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
