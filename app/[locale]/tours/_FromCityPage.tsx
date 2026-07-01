import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { tours } from "@/data/tours";
import { fromCityContent, fromCityConfig } from "@/data/from-city-data";
import {
  FaClock,
  FaMapMarkerAlt,
  FaChevronRight,
  FaCompass,
  FaCheckCircle,
  FaChevronDown,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-amber-100 text-amber-700",
  Difficult: "bg-red-100 text-red-700",
};

type Props = {
  locale: string;
  citySlug: string;
};

export async function FromCityPage({ locale, citySlug }: Props) {
  const fc = await getTranslations({ locale, namespace: "fromCity" });
  const tTours = await getTranslations({ locale, namespace: "tours" });

  const config = fromCityConfig[citySlug];
  const content = fromCityContent[citySlug];
  if (!config || !content) return null;

  const cityIdSet = new Set(config.cityIds);
  const cityTours = tours
    .filter((t) => cityIdSet.has(t.id))
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  const prices = cityTours.map((t) => t.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const validDurations = cityTours
    .map((t) => parseInt(t.duration))
    .filter((d) => !isNaN(d));
  const minDays = validDurations.length ? Math.min(...validDurations) : 1;
  const maxDays = validDurations.length ? Math.max(...validDurations) : 1;

  const heroDesc   = content.heroDesc[locale]    ?? content.heroDesc["en"]    ?? "";
  const whyDesc    = content.whyStartDesc[locale] ?? content.whyStartDesc["en"] ?? "";
  const mostPop    = content.mostPopular[locale]  ?? content.mostPopular["en"]  ?? "";

  const cityName = tTours(config.nameKey as Parameters<typeof tTours>[0]);
  const country  = fc("country");

  const stats = [
    { label: fc("toursAvailableLabel"), value: String(cityTours.length) },
    { label: fc("fromPriceLabel"),      value: fc("fromPriceValue", { price: minPrice }) },
    { label: fc("durationRangeLabel"),  value: `${minDays}–${maxDays} ${fc("days")}` },
    { label: fc("mostPopularLabel"),    value: mostPop },
  ];

  const finalFaqs = config.faqs.map((f) => {
    const answerFn = f.answers[locale] ?? f.answers["en"];
    return {
      q: fc(f.qKey as Parameters<typeof fc>[0], { city: cityName }),
      a: typeof answerFn === "function"
        ? answerFn(cityTours.length, minDays, maxDays)
        : (answerFn ?? ""),
    };
  });

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="pt-24 pb-16 relative"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            className="flex items-center gap-2 text-sm text-slate-400 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {fc("breadHome")}
            </Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <Link href="/tours" className="hover:text-amber-400 transition-colors">
              {fc("breadTours")}
            </Link>
            <FaChevronRight className="text-xs text-slate-500" />
            <span className="text-slate-300">
              {fc("breadCityTours", { city: cityName })}
            </span>
          </nav>

          <span className="section-label">
            {fc("toursAvailableBadge", { count: cityTours.length })}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            {fc("heroTitle", { city: cityName, country })}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">{heroDesc}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <FaCompass /> {fc("viewAllBtn")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors"
            >
              {fc("planCustomBtn")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Start ───────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {fc("whyStartTitle", { city: cityName })}
              </h2>
              <p className="text-slate-600 leading-relaxed">{whyDesc}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-amber-50 rounded-xl p-4 border border-amber-100"
                >
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {fc("allToursHeading", { city: cityName })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityTours.map((tour) => (
              <article
                key={tour.id}
                className="tour-card bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
              >
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
                  <Link
                    href={`/tours/${tour.id}` as `/tours/${string}`}
                    className="font-bold text-slate-900 hover:text-amber-600 transition-colors mb-2 leading-snug"
                  >
                    {tour.title}
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-amber-500" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-amber-500" />{" "}
                      {tour.location.split(",")[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        difficultyColor[tour.difficulty] ?? ""
                      }`}
                    >
                      {tour.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <FaUsers className="text-amber-400" />{" "}
                      {fc("maxGroup", { count: tour.maxGroupSize })}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold ml-auto">
                      <FaStar className="text-amber-500" /> {tour.rating}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">
                      {fc("fromPricePrefix")}{" "}
                      <span className="text-amber-600">${tour.price}</span>
                      <span className="text-xs text-slate-400 font-normal">
                        {" "}{fc("ppSuffix")}
                      </span>
                    </span>
                    <Link
                      href={`/tours/${tour.id}` as `/tours/${string}`}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors"
                    >
                      {fc("viewTourBtn")}
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {fc("faqTitle")}
          </h2>
          <div className="space-y-3">
            {finalFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-xl overflow-hidden"
              >
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

      {/* ── Also Explore ────────────────────────────────────────────── */}
      <section className="bg-amber-50 py-10 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            {fc("alsoExplore")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-white border border-amber-200 hover:border-amber-400 text-slate-700 hover:text-amber-700 font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
            >
              <HiOutlineTicket className="text-amber-500" />{" "}
              {fc("allMoroccoTours")}
            </Link>
            {config.otherCities.map((city) => {
              const translatedName = tTours(
                city.nameKey as Parameters<typeof tTours>[0]
              );
              return (
                <Link
                  key={city.href}
                  href={city.href as `/tours/${string}`}
                  className="inline-flex items-center gap-2 bg-white border border-amber-200 hover:border-amber-400 text-slate-700 hover:text-amber-700 font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
                >
                  <FaMapMarkerAlt className="text-amber-500" />{" "}
                  {fc("cityToursLink", { city: translatedName })}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
