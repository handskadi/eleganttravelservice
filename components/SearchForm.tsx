"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaCompass,
  FaRunning,
  FaHotel,
  FaSearch,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

type TabKey = "tours" | "activities" | "accommodation";

export default function SearchForm() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("searchForm");
  const isRTL = locale === "ar";

  const [activeTab, setActiveTab] = useState<TabKey>("tours");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const TABS = [
    { key: "tours" as const, label: t("tours"), icon: FaCompass },
    { key: "activities" as const, label: t("activities"), icon: FaRunning },
    { key: "accommodation" as const, label: t("accommodation"), icon: FaHotel },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "tours") router.push("/tours");
    else if (activeTab === "activities") router.push("/activities");
    else router.push("/destinations");
  };

  const tabConfig: Record<TabKey, { destinationLabel: string; dateLabel: string; endLabel: string }> = {
    tours: { destinationLabel: t("whereTo"), dateLabel: t("startDate"), endLabel: t("endDate") },
    activities: { destinationLabel: t("whereTo"), dateLabel: t("startDate"), endLabel: t("endDate") },
    accommodation: { destinationLabel: t("whereTo"), dateLabel: t("checkIn"), endLabel: t("checkOut") },
  };

  const cfg = tabConfig[activeTab];
  const searchBtnLabel =
    activeTab === "tours"
      ? t("searchTours")
      : activeTab === "activities"
      ? t("searchActivities")
      : t("searchHotels");

  return (
    <div className="w-full max-w-lg mx-auto" dir={isRTL ? "rtl" : "ltr"}>
      {/* Tab switcher */}
      <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-4 border border-white/20">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition-all ${
              activeTab === key
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSearch}
        className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-5 shadow-2xl"
      >
        <div className="space-y-3">
          {/* Destination */}
          <GlassInput
            icon={<FaMapMarkerAlt />}
            label={cfg.destinationLabel}
            value={destination}
            onChange={setDestination}
            placeholder={t("placeholder")}
            isRTL={isRTL}
          />

          {/* Dates row */}
          <div className="grid grid-cols-2 gap-3">
            <GlassInput
              icon={<FaCalendarAlt />}
              label={cfg.dateLabel}
              value={checkIn}
              onChange={setCheckIn}
              type="date"
              isRTL={isRTL}
            />
            <GlassInput
              icon={<FaCalendarAlt />}
              label={cfg.endLabel}
              value={checkOut}
              onChange={setCheckOut}
              type="date"
              isRTL={isRTL}
            />
          </div>

          {/* Guests row */}
          <div className="grid grid-cols-2 gap-3">
            <CounterField
              icon={<FaUserFriends />}
              label={t("adults")}
              value={adults}
              min={1}
              onChange={setAdults}
            />
            <CounterField
              icon={<FaUserFriends />}
              label={t("children")}
              value={children}
              min={0}
              onChange={setChildren}
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-amber-500/30 mt-1"
          >
            <FaSearch className="w-3.5 h-3.5" />
            {searchBtnLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

function GlassInput({
  icon,
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  isRTL = false,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  isRTL?: boolean;
}) {
  return (
    <div className="relative">
      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1 pl-1">
        {label}
      </label>
      <div className="relative">
        <span
          className={`absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 text-white/50 text-sm`}
        >
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          dir={isRTL ? "rtl" : "ltr"}
          className={`w-full ${isRTL ? "pr-10 pl-3" : "pl-10 pr-3"} py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl text-sm focus:outline-none focus:border-amber-400/70 focus:bg-white/15 transition`}
        />
      </div>
    </div>
  );
}

function CounterField({
  icon,
  label,
  value,
  min,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1 pl-1">
        {label}
      </label>
      <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-2 py-1.5 gap-2">
        <span className="text-white/50 text-sm shrink-0">{icon}</span>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-6 h-6 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/15 transition shrink-0"
        >
          <FaMinus className="w-2.5 h-2.5" />
        </button>
        <span className="flex-1 text-center text-white font-bold text-sm">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-6 h-6 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/15 transition shrink-0"
        >
          <FaPlus className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
}
