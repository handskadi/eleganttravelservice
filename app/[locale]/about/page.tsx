import { getTranslations } from "next-intl/server";
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "https://www.eleganttravelservice.com/about",
      languages: {
        en: "https://www.eleganttravelservice.com/about",
        fr: "https://www.eleganttravelservice.com/fr/about",
        ar: "https://www.eleganttravelservice.com/ar/about",
        es: "https://www.eleganttravelservice.com/es/about",
        de: "https://www.eleganttravelservice.com/de/about",
        it: "https://www.eleganttravelservice.com/it/about",
      },
    },
  };
}

// ─── Data ───────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "10+",    labelKey: "statYears" },
  { value: "15,000+", labelKey: "statTravellers" },
  { value: "100+",   labelKey: "statTours" },
  { value: "4.9/5",  labelKey: "statRating" },
];

const statsBar = [
  { Icon: FaUsers,        value: "15,000+", labelKey: "statHappyTravellers" },
  { Icon: FaMapMarkedAlt, value: "100+",    labelKey: "statCuratedTours" },
  { Icon: FaStar,         value: "4.9/5",   labelKey: "statAverageRating" },
  { Icon: FaAward,        value: "10+",     labelKey: "statYearsInMorocco" },
  { Icon: FaThumbsUp,     value: "98%",     labelKey: "statSatisfactionRate" },
];

const team = [
  {
    initials: "YB",
    nameKey: "teamYoussefName",
    roleKey: "teamYoussefRole",
    bioKey: "teamYoussefBio",
  },
  {
    initials: "FZ",
    nameKey: "teamFatimaName",
    roleKey: "teamFatimaRole",
    bioKey: "teamFatimaBio",
  },
  {
    initials: "HA",
    nameKey: "teamHamidName",
    roleKey: "teamHamidRole",
    bioKey: "teamHamidBio",
  },
  {
    initials: "AB",
    nameKey: "teamAmiraName",
    roleKey: "teamAmiraRole",
    bioKey: "teamAmiraBio",
  },
];

const values = [
  { Icon: FaUsers,        titleKey: "valueSmallGroupsTitle",    descKey: "valueSmallGroupsDesc" },
  { Icon: FaLeaf,         titleKey: "valueSustainableTitle",    descKey: "valueSustainableDesc" },
  { Icon: FaShieldAlt,    titleKey: "valueInsuredTitle",        descKey: "valueInsuredDesc" },
  { Icon: FaStar,         titleKey: "valueQualityTitle",        descKey: "valueQualityDesc" },
  { Icon: FaMapMarkedAlt, titleKey: "valueLocalTitle",          descKey: "valueLocalDesc" },
  { Icon: FaHandshake,    titleKey: "valuePricingTitle",        descKey: "valuePricingDesc" },
];

const comparisons = [
  { labelKey: "compGroupSizeLabel", etsKey: "compGroupSizeEts", othersKey: "compGroupSizeOthers" },
  { labelKey: "compGuideLabel",     etsKey: "compGuideEts",     othersKey: "compGuideOthers" },
  { labelKey: "compFlexLabel",      etsKey: "compFlexEts",      othersKey: "compFlexOthers" },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

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
            <Link href="/" className="hover:text-amber-400 transition">{t("breadcrumbHome")}</Link>
            <span>/</span>
            <span className="text-white/80">{t("breadcrumbAbout")}</span>
          </nav>

          {/* Label */}
          <span className="section-label inline-block mb-5">{t("heroLabel")}</span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
            {t("heroHeading")}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
            {t("heroSubtitle")}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {heroStats.map(({ value, labelKey }) => (
              <div key={labelKey} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400 leading-none">{value}</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wider font-medium">{t(labelKey)}</div>
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
            <span className="section-label inline-block mb-5">{t("storyLabel")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {t("storyHeading")}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{t("storyP1")}</p>
              <p>{t("storyP2")}</p>
              <p>{t("storyP3")}</p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl px-6 py-5">
              <FaQuoteLeft className="text-amber-400 w-5 h-5 mb-2" />
              <p className="text-slate-700 italic leading-relaxed text-[0.95rem]">
                {t("storyQuote")}
              </p>
              <footer className="mt-3 text-sm font-bold text-amber-600 not-italic">
                {t("storyQuoteAuthor")}
              </footer>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-amber-500/20 transition"
              >
                {t("ctaBrowseTours")} <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl transition"
              >
                {t("ctaContact")} <FaArrowRight className="w-3.5 h-3.5" />
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
            {statsBar.map(({ Icon, value, labelKey }) => (
              <div key={labelKey} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white leading-none">{value}</div>
                  <div className="text-slate-400 text-sm mt-1">{t(labelKey)}</div>
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
            <span className="section-label inline-block mb-4">{t("teamLabel")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {t("teamHeading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ initials, nameKey, roleKey, bioKey }) => (
              <div
                key={nameKey}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-md transition"
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-extrabold mb-4 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)" }}
                >
                  {initials}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-0.5">{t(nameKey)}</h3>
                <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-3">{t(roleKey)}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{t(bioKey)}</p>
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
            <span className="section-label inline-block mb-4">{t("valuesLabel")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {t("valuesHeading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-amber-200 transition group"
              >
                <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition">
                  <Icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{t(titleKey)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(descKey)}</p>
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
              {t("whyChooseHeading")}
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
                <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">{t("compOthersHeader")}</span>
              </div>
            </div>

            {comparisons.map(({ labelKey, etsKey, othersKey }) => (
              <div
                key={labelKey}
                className="grid grid-cols-3 gap-4 items-center bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
              >
                <div className="text-sm font-bold text-slate-600">{t(labelKey)}</div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-center">
                  <span className="text-amber-700 font-semibold text-sm">{t(etsKey)}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center">
                  <span className="text-slate-400 text-sm line-through">{t(othersKey)}</span>
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
            {t("ctaHeading")}
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition"
            >
              {t("ctaExploreTours")} <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition"
            >
              {t("ctaPlanTrip")} <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
