import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";
import { FaClock, FaMapMarkerAlt, FaChevronRight, FaCompass, FaCheckCircle, FaChevronDown, FaUsers, FaStar } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Marrakech Tours 2025 | Guided Tours from Marrakech | Elegant Travel Service",
  description:
    "Browse 31 guided tours from Marrakech — Sahara desert escapes, High Atlas treks, coastal drives to Essaouira and Agadir. Private tours, small groups, expert guides.",
  keywords: [
    "Marrakech tours",
    "tours from Marrakech Morocco",
    "Marrakech travel packages",
    "guided Marrakech tours 2025",
    "Marrakech day trips",
    "Morocco tours from Marrakech",
    "Marrakech to Sahara tour",
    "Marrakech desert tour",
    "High Atlas trek from Marrakech",
    "Essaouira day trip Marrakech",
    "3 days Sahara from Marrakech",
    "Toubkal summit expedition",
    "Marrakech Fes 5 day tour",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-marrakech",
  },
  openGraph: {
    title: "Marrakech Tours 2025 | Guided Tours from Marrakech | Elegant Travel Service",
    description:
      "Browse 31 guided tours from Marrakech — Sahara desert escapes, High Atlas treks, coastal drives to Essaouira and Agadir. Private tours, small groups, expert guides.",
    type: "website",
    images: [{ url: "/destinations/sahara.webp", alt: "Sahara Desert Tour from Marrakech" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
};

const CITY_IDS = new Set([
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
]);

const cityTours = tours
  .filter((t) => CITY_IDS.has(t.id))
  .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

const prices = cityTours.map((t) => t.price);
const minPrice = Math.min(...prices);
const durations = cityTours.map((t) => parseInt(t.duration));
const validDurations = durations.filter((d) => !isNaN(d));
const minDays = Math.min(...validDurations);
const maxDays = Math.max(...validDurations);
const topTour = cityTours.find((t) => t.featured) ?? cityTours[0];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eleganttravelservice.com" },
    { "@type": "ListItem", position: 2, name: "Tours", item: "https://www.eleganttravelservice.com/tours" },
    { "@type": "ListItem", position: 3, name: "Marrakech Tours", item: "https://www.eleganttravelservice.com/tours/from-marrakech" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tours from Marrakech, Morocco",
  url: "https://www.eleganttravelservice.com/tours/from-marrakech",
  numberOfItems: cityTours.length,
  itemListElement: cityTours.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.eleganttravelservice.com/tours/${t.id}`,
  })),
};

const touristAttractionJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Marrakech, Morocco",
  description:
    "Marrakech is Morocco's most celebrated gateway city — a vibrant medina of souks, palaces, and gardens that serves as the ideal departure point for Sahara desert tours, High Atlas treks, coastal escapes, and grand multi-day circuits across the kingdom.",
  touristType: "Adventure, Cultural, Luxury",
  geo: { "@type": "GeoCoordinates", latitude: "31.6295", longitude: "-7.9811" },
  url: "https://www.eleganttravelservice.com/tours/from-marrakech",
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-amber-100 text-amber-700",
  Difficult: "bg-red-100 text-red-700",
};

const faqs = [
  {
    q: "What tours can I book from Marrakech?",
    a: `From Marrakech you can book ${cityTours.length} tours including 2-day escapes to 12-day grand circuits. Top options include Sahara desert tours, High Atlas treks, and coastal escapes to Essaouira and Agadir.`,
  },
  {
    q: "How long are Marrakech tours?",
    a: `Tours from Marrakech range from 2 days (Essaouira coastal escape or Zagora desert overnight) to 12 days (grand Morocco circuit). The most popular duration is 3 days — enough for a Sahara round trip from Marrakech.`,
  },
  {
    q: "What is included in Marrakech tours?",
    a: "All Elegant Travel Service tours from Marrakech include private transport, a certified English-speaking guide, and accommodation. Most include meals and all activities listed in the itinerary.",
  },
  {
    q: "When is the best time to book a tour from Marrakech?",
    a: "April–May and September–October are ideal: comfortable temperatures, clear skies, and no peak-season crowds. Sahara tours run year-round but avoid July–August for the desert stage.",
  },
  {
    q: "Can I book a private tour from Marrakech?",
    a: "Yes. All Elegant Travel Service tours from Marrakech are private by default — maximum 12 people, your own vehicle and guide. We do not run shared bus tours.",
  },
];

const otherCities = [
  { name: "Casablanca", href: "/tours/from-casablanca" },
  { name: "Fes", href: "/tours/from-fes" },
  { name: "Tangier", href: "/tours/from-tangier" },
  { name: "Agadir", href: "/tours/from-agadir" },
];

export default function ToursFromMarrakech() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="pt-24 pb-16 relative"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <Link href="/tours" className="hover:text-amber-400 transition-colors">Tours</Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <span className="text-slate-300">Marrakech Tours</span>
          </nav>

          <span className="section-label">{cityTours.length} Tours Available</span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Tours from Marrakech, Morocco
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Marrakech is Morocco&apos;s most celebrated gateway — depart from the heart of the medina and reach the golden Sahara dunes, the High Atlas peaks, or the Atlantic coast within hours. Every tour is private, guided, and built around your group.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <FaCompass /> View All Morocco Tours
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why start from Marrakech ───────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Start from Marrakech?</h2>
              <p className="text-slate-600 leading-relaxed">
                Marrakech sits at Morocco&apos;s geographical centre, giving travellers unrivalled access to every major landscape in the country. The Sahara is a half-day drive south-east, the Atlantic coast is two hours west, and the High Atlas begins on the city&apos;s doorstep. Marrakech Menara Airport connects directly with dozens of European cities, making it the natural arrival hub for any Morocco itinerary. Its world-class medina — with riads, hammams, and the legendary Djemaa el-Fna — means your tour starts the moment you land.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Tours Available", value: `${cityTours.length}` },
                { label: "From Price", value: `$${minPrice}pp` },
                { label: "Duration Range", value: `${minDays}–${maxDays} Days` },
                { label: "Most Popular", value: topTour.title.split("—")[0].trim().split(" ").slice(0, 4).join(" ") },
              ].map((stat) => (
                <div key={stat.label} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <div className="text-amber-600 font-bold text-xl">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tours Grid ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Tours Departing from Marrakech</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityTours.map((tour) => (
              <article key={tour.id} className="tour-card bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  {tour.badge && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                      {tour.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <Link href={`/tours/${tour.id}`} className="font-bold text-slate-900 hover:text-amber-600 transition-colors mb-2 leading-snug">
                    {tour.title}
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-amber-500" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-amber-500" /> {tour.location.split(",")[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[tour.difficulty]}`}>
                      {tour.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <FaUsers className="text-amber-400" /> Max {tour.maxGroupSize}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold ml-auto">
                      <FaStar className="text-amber-500" /> {tour.rating}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">
                      From <span className="text-amber-600">${tour.price}</span>
                      <span className="text-xs text-slate-400 font-normal"> pp</span>
                    </span>
                    <Link
                      href={`/tours/${tour.id}`}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors"
                    >
                      View Tour
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-slate-800 list-none hover:bg-amber-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500 shrink-0" />
                    {faq.q}
                  </span>
                  <FaChevronDown className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-4 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────────────── */}
      <section className="bg-amber-50 py-10 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Also explore:</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-white border border-amber-200 hover:border-amber-400 text-slate-700 hover:text-amber-700 font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
            >
              <HiOutlineTicket className="text-amber-500" /> All Morocco Tours
            </Link>
            {otherCities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="inline-flex items-center gap-2 bg-white border border-amber-200 hover:border-amber-400 text-slate-700 hover:text-amber-700 font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
              >
                <FaMapMarkerAlt className="text-amber-500" /> {city.name} Tours
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
