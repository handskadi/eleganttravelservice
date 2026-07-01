"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaWifi, FaSwimmingPool, FaConciergeBell, FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import { hotels } from "@/data/tours";
import { useTranslations } from "next-intl";

const amenityIcons: Record<string, React.ReactElement> = {
  "Pool": <FaSwimmingPool className="w-3 h-3" />,
  "Infinity Pool": <FaSwimmingPool className="w-3 h-3" />,
  "Heated Pool": <FaSwimmingPool className="w-3 h-3" />,
  "Spa & Hammam": <FaConciergeBell className="w-3 h-3" />,
  "Spa": <FaConciergeBell className="w-3 h-3" />,
  "Butler Service": <FaConciergeBell className="w-3 h-3" />,
};

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`w-3 h-3 ${i < stars ? "text-amber-400" : "text-slate-200"}`} />
      ))}
    </div>
  );
}

export default function HotelsSection() {
  const t = useTranslations("hotelsSection");

  return (
    <section id="hotels" className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-label">{t("label")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              {t("title")}
            </h2>
            <p className="text-slate-500 max-w-lg text-lg">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-slate-500 font-medium">{t("liveAvailability")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map(hotel => (
            <div key={hotel.id} className="tour-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {hotel.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {hotel.badge}
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <StarRating stars={hotel.stars} />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-base leading-tight">{hotel.name}</h3>
                <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3 text-amber-500 shrink-0" /> {hotel.location}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-3 h-3 ${i < Math.floor(hotel.rating) ? "text-amber-400" : "text-slate-200"}`} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{hotel.rating}</span>
                  <span className="text-xs text-slate-400">({hotel.reviews.toLocaleString()} {t("reviews")})</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {hotel.amenities.slice(0, 4).map(a => (
                    <span key={a} className="flex items-center gap-1 text-[10px] text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                      {amenityIcons[a] || <FaWifi className="w-3 h-3" />}
                      {a}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400">{t("from")}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-slate-900">${hotel.pricePerNight}</span>
                      <span className="text-xs text-slate-400">/ {t("perNight")}</span>
                    </div>
                  </div>
                  <a
                    href={hotel.affiliateUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
                  >
                    {t("bookViaPartner")}
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          {t("affiliateDisclaimer")}
        </p>
      </div>
    </section>
  );
}
