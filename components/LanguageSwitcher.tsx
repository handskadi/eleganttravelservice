"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { FaGlobeAfrica, FaChevronDown, FaCheck } from "react-icons/fa";

const LOCALES = [
  { code: "en", badge: "EN", native: "English" },
  { code: "fr", badge: "FR", native: "Français" },
  { code: "ar", badge: "AR", native: "العربية" },
  { code: "es", badge: "ES", native: "Español" },
  { code: "de", badge: "DE", native: "Deutsch" },
  { code: "it", badge: "IT", native: "Italiano" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export default function LanguageSwitcher() {
  const locale = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("langSwitcher");

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (newLocale: LocaleCode) => {
    setOpen(false);
    if (newLocale !== locale) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.replace(pathname as any, { locale: newLocale });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition select-none"
      >
        <FaGlobeAfrica className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="hidden sm:inline">{t(currentLocale.code)}</span>
        <FaChevronDown
          className={`w-2.5 h-2.5 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <div
        role="listbox"
        aria-label="Select language"
        className={`absolute right-0 mt-2 w-48 bg-slate-800 border border-white/15 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right z-50 ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}
      >
        {LOCALES.map((l) => {
          const isActive = l.code === locale;
          return (
            <button
              key={l.code}
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(l.code)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition ${
                isActive
                  ? "bg-amber-500/20 text-amber-300"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {/* Badge */}
              <span className="inline-flex items-center justify-center w-8 h-5 rounded-md bg-slate-700 text-white/70 text-[10px] font-bold tracking-wide shrink-0">
                {l.badge}
              </span>
              {/* Native name */}
              <span className="flex-1 text-left">{t(l.code)}</span>
              {/* Active checkmark */}
              {isActive && <FaCheck className="w-3 h-3 text-amber-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
