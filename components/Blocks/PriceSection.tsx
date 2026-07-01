"use client";

import { FaCheckCircle, FaArrowRight, FaTag } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const packages = [
  {
    nameKey: "explorerName",
    taglineKey: "explorerTagline",
    price: 299,
    duration: "3 days",
    color: "border-slate-200",
    highlight: false,
    featureKeys: [
      "feature1Dest",
      "featureAccommodation",
      "featureGuide",
      "featureTransport",
      "featureBreakfast",
      "featureSupport",
    ],
    tours: ["Chefchaouen Day Trip", "Ourika Valley Escape", "Marrakech Food Tour"],
  },
  {
    nameKey: "adventurerName",
    taglineKey: "adventurerTagline",
    price: 649,
    duration: "6 days",
    color: "border-amber-400",
    highlight: true,
    featureKeys: [
      "feature3Dest",
      "feature4Star",
      "featurePrivateGuide",
      "featureAllTransport",
      "featureAllMeals",
      "featureDesertCamp",
      "featurePrioritySupport",
    ],
    tours: ["Sahara 3-Day + Fes + Chefchaouen"],
  },
  {
    nameKey: "luxuryName",
    taglineKey: "luxuryTagline",
    price: 1299,
    duration: "9 days",
    color: "border-slate-800",
    highlight: false,
    featureKeys: [
      "feature5Dest",
      "feature5Star",
      "featurePrivateDriver",
      "featureAllTransportFlights",
      "featureFineDining",
      "featureSpa",
      "featureConcierge",
      "featureAirportTransfers",
    ],
    tours: ["Grand Morocco Circuit"],
  },
];

export default function PriceSection() {
  const t = useTranslations("priceSection");

  return (
    <section
      className="py-20 md:py-28 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url("/background/price-bg.png")` }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t("label")}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border-2 p-7 flex flex-col transition ${pkg.color} ${
                pkg.highlight
                  ? "bg-amber-500 text-white shadow-2xl shadow-amber-500/30 scale-105"
                  : "bg-white shadow-md hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-400/30">
                  {t("mostPopular")}
                </div>
              )}

              <div className="mb-6">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3 ${pkg.highlight ? "bg-white/20 text-white" : "bg-amber-50 text-amber-700"}`}>
                  <FaTag className="w-2.5 h-2.5" />
                  {t(pkg.taglineKey)}
                </span>
                <h3 className={`text-xl font-extrabold mb-1 ${pkg.highlight ? "text-white" : "text-slate-900"}`}>
                  {t(pkg.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${pkg.highlight ? "text-white" : "text-slate-900"}`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-slate-400"}`}>
                    / {pkg.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {pkg.featureKeys.map((key, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <FaCheckCircle className={`w-4 h-4 shrink-0 ${pkg.highlight ? "text-white/80" : "text-amber-500"}`} />
                    <span className={pkg.highlight ? "text-white/90" : "text-slate-600"}>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#tours"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition ${
                  pkg.highlight
                    ? "bg-white text-amber-600 hover:bg-white/90"
                    : "bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20"
                }`}
              >
                {t("getStarted")}
                <FaArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          {t("customNote")}{" "}
          <Link href="/contact" className="text-amber-600 font-semibold hover:underline">
            {t("contactUs")}
          </Link>{" "}
          {t("customNoteSuffix")}
        </p>
      </div>
    </section>
  );
}
