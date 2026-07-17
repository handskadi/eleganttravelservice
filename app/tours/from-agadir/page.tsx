import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";
import { FaClock, FaMapMarkerAlt, FaChevronRight, FaCompass, FaCheckCircle, FaChevronDown, FaUsers, FaStar } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Agadir Tours 2025 | Guided Tours from Agadir | Elegant Travel Service",
  description:
    "Browse 4 guided tours from Agadir — Anti-Atlas Berber villages, surf camp at Taghazout, coastal drives and mountain treks. Private tours from Morocco's beach capital.",
  keywords: [
    "Agadir tours",
    "tours from Agadir Morocco",
    "Agadir travel packages",
    "guided Agadir tours 2025",
    "Agadir day trips",
    "Morocco tours from Agadir",
    "Agadir surf camp tour",
    "Anti-Atlas trek from Agadir",
    "Taghazout surf tour",
    "Agadir beach tours",
    "Berber villages from Agadir",
    "Agadir Tiznit tour",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-agadir",
  },
  openGraph: {
    title: "Agadir Tours 2025 | Guided Tours from Agadir | Elegant Travel Service",
    description:
      "Browse 4 guided tours from Agadir — Anti-Atlas Berber villages, surf camp at Taghazout, coastal drives and mountain treks. Private tours from Morocco's beach capital.",
    type: "website",
    images: [{ url: "/tours/atlas-mountains-trek-3day.jpg", alt: "Morocco Tour from Agadir" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
};

const CITY_IDS = new Set([
  "agadir-beach-surf-3day",
  "anti-atlas-berber-trek-2day",
  "agadir-anti-atlas-3day",
  "surf-taghazout-4day",
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
    { "@type": "ListItem", position: 3, name: "Agadir Tours", item: "https://www.eleganttravelservice.com/tours/from-agadir" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tours from Agadir, Morocco",
  url: "https://www.eleganttravelservice.com/tours/from-agadir",
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
  name: "Agadir, Morocco",
  description:
    "Agadir is Morocco's Atlantic beach capital — a sun-drenched resort city with a 10 km golden bay and a direct gateway to the rugged Anti-Atlas mountains, the Souss Valley argan forests, and the world-class surf breaks of Taghazout just 20 km north along the coast.",
  touristType: "Adventure, Cultural, Luxury",
  geo: { "@type": "GeoCoordinates", latitude: "30.4278", longitude: "-9.5981" },
  url: "https://www.eleganttravelservice.com/tours/from-agadir",
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-amber-100 text-amber-700",
  Difficult: "bg-red-100 text-red-700",
};

const faqs = [
  {
    q: "What tours can I book from Agadir?",
    a: `From Agadir you can book ${cityTours.length} tours focusing on the unique landscapes of southern Morocco — a 3-day beach and surf retreat, a 2-day Anti-Atlas Berber village trek, a 3-day Anti-Atlas exploration, and a 4-day Taghazout surf camp. These tours reveal the Morocco that lies beyond the Sahara and imperial cities.`,
  },
  {
    q: "How long are Agadir tours?",
    a: `Tours from Agadir range from ${minDays} days (Anti-Atlas Berber village trek) to ${maxDays} days (Taghazout surf camp). All tours are purposefully sized to deliver deep immersion in a specific landscape or experience rather than rushing across the country.`,
  },
  {
    q: "What is included in Agadir tours?",
    a: "All Elegant Travel Service tours from Agadir include private transport, a certified English-speaking guide, and accommodation. Surf tours include surf equipment and instruction; trekking tours include local mountain guides and home-cooked meals with village families.",
  },
  {
    q: "When is the best time to visit Agadir for a tour?",
    a: "Agadir is one of Morocco's most year-round destinations thanks to its southern Atlantic location. October–April is ideal for Anti-Atlas trekking (cool mountain temperatures) and surf (consistent Atlantic swells). June–September is best for beach holidays; the mountains can be hot but the surf camp runs year-round.",
  },
  {
    q: "Can I book a private tour from Agadir?",
    a: "Yes. All Elegant Travel Service tours from Agadir are private — your own vehicle, your own guide, and a small group of up to 12 people maximum. The Anti-Atlas trek is limited to 6 people for an authentic and personal Berber village experience.",
  },
];

const otherCities = [
  { name: "Marrakech", href: "/tours/from-marrakech" },
  { name: "Casablanca", href: "/tours/from-casablanca" },
  { name: "Fes", href: "/tours/from-fes" },
  { name: "Tangier", href: "/tours/from-tangier" },
];

export default function ToursFromAgadir() {
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
            <span className="text-slate-300">Agadir Tours</span>
          </nav>

          <span className="section-label">{cityTours.length} Tours Available</span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Best Agadir Tours 2025
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Agadir is Morocco&apos;s sun-drenched Atlantic resort city and the gateway to two of the country&apos;s most underexplored landscapes: the rugged Anti-Atlas mountains to the east and Africa&apos;s finest surf beaches to the north. These tours go far beyond the beach.
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

      {/* ── Why start from Agadir ─────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Start from Agadir?</h2>
              <p className="text-slate-600 leading-relaxed">
                Agadir Al-Massira Airport serves direct flights from the UK, France, Germany, and the Netherlands, making it a convenient arrival gateway for southern Morocco. The city itself sits at the mouth of the Souss Valley — one of the world&apos;s most important argan oil regions — and is flanked by two extraordinary hinterlands: 20 km north, Taghazout delivers world-class Atlantic point break surf; 40 km east, the Anti-Atlas begins — a vast granite massif of remote Amazigh villages, terraced almond orchards, and ancient trade routes entirely off the tourist trail. Agadir is the most underrated departure point in Morocco for travellers seeking something genuinely different.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Tours Departing from Agadir</h2>
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
