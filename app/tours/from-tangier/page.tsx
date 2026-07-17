import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";
import { FaClock, FaMapMarkerAlt, FaChevronRight, FaCompass, FaCheckCircle, FaChevronDown, FaUsers, FaStar } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Tangier Tours 2025 | Guided Tours from Tangier | Elegant Travel Service",
  description:
    "Browse 6 guided tours from Tangier — northern Morocco loop, Chefchaouen blue city, Tetouan, Fes circuits and the full Morocco traverse. Private tours from Africa's gateway.",
  keywords: [
    "Tangier tours",
    "tours from Tangier Morocco",
    "Tangier travel packages",
    "guided Tangier tours 2025",
    "Tangier day trips",
    "Morocco tours from Tangier",
    "Tangier to Marrakech tour",
    "Tangier Chefchaouen Fes tour",
    "northern Morocco tours",
    "Tangier Tetouan tour",
    "7 days northern Morocco loop",
    "Asilah coast tour from Tangier",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-tangier",
  },
  openGraph: {
    title: "Tangier Tours 2025 | Guided Tours from Tangier | Elegant Travel Service",
    description:
      "Browse 6 guided tours from Tangier — northern Morocco loop, Chefchaouen blue city, Tetouan, Fes circuits and the full Morocco traverse. Private tours from Africa's gateway.",
    type: "website",
    images: [{ url: "/tours/sahara-3day-marrakech.jpg", alt: "Morocco Tour from Tangier" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
};

const CITY_IDS = new Set([
  "tangier-northern-morocco-2day",
  "north-morocco-loop-7day",
  "tangier-tetouan-2day",
  "tangier-chefchaouen-fes-3day",
  "tangier-marrakech-5day",
  "asilah-larache-coast-2day",
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
    { "@type": "ListItem", position: 3, name: "Tangier Tours", item: "https://www.eleganttravelservice.com/tours/from-tangier" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tours from Tangier, Morocco",
  url: "https://www.eleganttravelservice.com/tours/from-tangier",
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
  name: "Tangier, Morocco",
  description:
    "Tangier is Morocco's legendary northern gateway where the Atlantic Ocean meets the Mediterranean Sea at Cap Spartel. Connected to Spain by ferry, it is the ideal starting point for tours south through Chefchaouen, Fes, and the length of Morocco down to Marrakech.",
  touristType: "Adventure, Cultural, Luxury",
  geo: { "@type": "GeoCoordinates", latitude: "35.7595", longitude: "-5.8340" },
  url: "https://www.eleganttravelservice.com/tours/from-tangier",
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-amber-100 text-amber-700",
  Difficult: "bg-red-100 text-red-700",
};

const faqs = [
  {
    q: "What tours can I book from Tangier?",
    a: `From Tangier you can book ${cityTours.length} tours ranging from 2-day northern Morocco escapes to 7-day full northern loops. Highlights include the 3-day Tangier to Fes via Chefchaouen circuit and the 5-day Morocco top-to-bottom traverse from Tangier to Marrakech.`,
  },
  {
    q: "How long are Tangier tours?",
    a: `Tours from Tangier range from ${minDays} days (Tangier northern Morocco or Tetouan gateway tours) to ${maxDays} days (7-day Northern Morocco Loop through Chefchaouen, Meknes, Volubilis, and Fes). The 3-day Tangier to Fes via Chefchaouen is the most popular option.`,
  },
  {
    q: "What is included in Tangier tours?",
    a: "All Elegant Travel Service tours from Tangier include private transport, a certified English-speaking guide, and accommodation. Ferry port transfers in Tangier are included for most tours. Most itineraries include daily breakfast, selected dinners, and all entrance fees.",
  },
  {
    q: "Is Tangier a good base for touring Morocco?",
    a: "Tangier is the ideal entry point for travellers crossing from Spain — the ferry from Tarifa takes 35 minutes. From Tangier, the classic northern route heads south via Chefchaouen and Fes, or you can take the direct coastal road south towards Casablanca and Marrakech. It is also a fascinating city in its own right, with a storied Kasbah and Cap Spartel where both seas converge.",
  },
  {
    q: "Can I book a private tour from Tangier?",
    a: "Yes. All Elegant Travel Service tours from Tangier are private — your own vehicle, your own guide, and a maximum of 14 people. Ferry port transfers in and out of Tangier are handled by our team.",
  },
];

const otherCities = [
  { name: "Marrakech", href: "/tours/from-marrakech" },
  { name: "Casablanca", href: "/tours/from-casablanca" },
  { name: "Fes", href: "/tours/from-fes" },
  { name: "Agadir", href: "/tours/from-agadir" },
];

export default function ToursFromTangier() {
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
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <Link href="/tours" className="hover:text-amber-400 transition-colors">Tours</Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <span className="text-slate-300">Tangier Tours</span>
          </nav>

          <span className="section-label">{cityTours.length} Tours Available</span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Tours from Tangier, Morocco
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Tangier is where the Atlantic meets the Mediterranean and where Europe meets Africa — the gateway city for travellers arriving by ferry from Spain. Depart from Tangier into the blue mountain city of Chefchaouen, the ancient medina of Fes, or all the way south to Marrakech across Morocco&apos;s most dramatic landscapes.
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

      {/* ── Why start from Tangier ────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Start from Tangier?</h2>
              <p className="text-slate-600 leading-relaxed">
                Tangier occupies a unique position at the very top of Morocco — a city shaped by centuries of diplomacy, literary exile, and maritime commerce. For travellers arriving from Spain by ferry (35 minutes from Tarifa), it is the most natural starting point for any northward Morocco itinerary. Cap Spartel, just 14 km from the city, is one of North Africa&apos;s most spectacular headlands: the exact point where the Atlantic and Mediterranean waters merge. The city&apos;s ancient Kasbah commands views across the Strait of Gibraltar to the coast of Spain. South from Tangier, the routes to Chefchaouen, Fes, and Marrakech are some of the most scenic drives in the country.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Tours Departing from Tangier</h2>
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
