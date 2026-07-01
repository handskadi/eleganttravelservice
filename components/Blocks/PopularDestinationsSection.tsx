"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { destinations } from "@/data/tours";
import { useTranslations } from "next-intl";

const nameToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function PopularDestinationsSection() {
  const t = useTranslations("destinations");

  return (
    <section id="destinations" className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t("sectionLabel")}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        {/* Featured + Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured destination (large) */}
          <Link
            href={`/destinations/${nameToSlug(destinations[0].name)}`}
            className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-72 lg:h-full min-h-[360px]">
              <Image
                src={destinations[0].image}
                alt={destinations[0].name}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                {destinations[0].description}
              </span>
              <h3 className="text-white text-2xl font-bold mb-1">{destinations[0].name}</h3>
              <p className="text-white/70 text-sm mb-3">{destinations[0].tagline}</p>
              <div className="flex items-center justify-between">
                <span className="text-amber-300 text-sm font-medium">{destinations[0].count} {t("toursAvailable")}</span>
                <span className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/30 transition">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  {t("explore")}
                  <FaArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Smaller destinations */}
          {destinations.slice(1, 5).map((dest, idx) => (
            <Link
              key={idx}
              href={`/destinations/${nameToSlug(dest.name)}`}
              className="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-44">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-white font-bold text-base">{dest.name}</h4>
                    <p className="text-white/60 text-xs">{dest.tagline}</p>
                  </div>
                  <span className="text-amber-300 text-xs font-medium whitespace-nowrap ml-2">{dest.count} {t("tours")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-full transition shadow-lg"
          >
            {t("viewAllDestinations")}
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
