"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { destContent, destSlugs } from "@/data/destination-translations";
import {
  FaHeart,
  FaShoppingCart,
  FaBell,
  FaUserShield,
  FaMapMarkerAlt,
  FaMountain,
  FaCity,
  FaUmbrellaBeach,
  FaCampground,
  FaChevronDown,
  FaCompass,
  FaMap,
  FaRunning,
  FaNewspaper,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import WishlistPanel from "./WishlistPanel";
import CartPanel from "./CartPanel";
import NotificationsPanel from "./NotificationsPanel";
import UserDropdown from "./UserDropdown";
import LanguageSwitcher from "./LanguageSwitcher";
import { useApp } from "@/contexts/AppContext";
import { useAuth } from "@/contexts/AuthContext";

// ─── Destinations icon map (labels/slugs built dynamically inside component) ─
const DEST_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "marrakech":      FaCity,
  "sahara-desert":  FaCampground,
  "chefchaouen":    FaMapMarkerAlt,
  "atlas-mountains":FaMountain,
  "fes":            FaCity,
  "essaouira":      FaUmbrellaBeach,
  "casablanca":     FaCity,
  "agadir":         FaUmbrellaBeach,
};
const DEST_SLUG_ORDER = ["marrakech","sahara-desert","chefchaouen","atlas-mountains","fes","essaouira","casablanca","agadir"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  // ─── Locale-aware destination list ────────────────────────────────────────
  const destinations = DEST_SLUG_ORDER.map(slug => ({
    slug,
    Icon: DEST_ICONS[slug],
    label: destContent[slug]?.[locale]?.name ?? destContent[slug]?.["en"]?.name ?? slug,
    desc:  destContent[slug]?.[locale]?.subtitle ?? destContent[slug]?.["en"]?.subtitle ?? "",
    localeSlug: destSlugs[slug]?.[locale] ?? slug,
  }));

  // ─── Top-level nav links (built inside component so labels use t()) ────────
  const TOP_LINKS = [
    { label: t("home"),       href: "/",           Icon: FaHome },
    { label: t("tours"),      href: "/tours",      Icon: FaCompass },
    { label: t("activities"), href: "/activities", Icon: FaRunning },
    { label: t("blog"),       href: "/blog",       Icon: FaNewspaper },
    { label: t("contact"),    href: "/contact",    Icon: FaEnvelope },
  ];

  const [menuOpen, setMenuOpen]               = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen]   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const [activePanel, setActivePanel]         = useState<"wishlist" | "cart" | "notifications" | null>(null);

  const destRef = useRef<HTMLDivElement>(null);

  const { cartCount, wishlistCount, unreadNotifications } = useApp();
  const { user } = useAuth();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global click — close panels, user dropdown, and destinations dropdown
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-panel]") && !target.closest("[data-panel-trigger]")) {
        setActivePanel(null);
        setDropdownOpen(false);
      }
      if (destRef.current && !destRef.current.contains(target)) {
        setDestinationsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const togglePanel = (panel: typeof activePanel) => {
    setDropdownOpen(false);
    setDestinationsOpen(false);
    setActivePanel(prev => (prev === panel ? null : panel));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl"
            : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.png" alt="ETS Logo" width={36} height={36} className="rounded-lg" />
            <div className="hidden sm:block">
              <span className="text-white text-lg font-bold leading-none">ElegantTravel</span>
              <span className="block text-amber-400 text-[10px] font-medium tracking-widest uppercase">Morocco</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/15">

            {/* Plain links (excluding Destinations which is handled separately) */}
            {TOP_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition"
              >
                {label}
              </Link>
            ))}

            {/* Destinations dropdown trigger */}
            <div ref={destRef} className="relative">
              <button
                onClick={() => { setActivePanel(null); setDropdownOpen(false); setDestinationsOpen(p => !p); }}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  destinationsOpen
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                <FaMap className="w-3.5 h-3.5" />
                {t("destinations")}
                <FaChevronDown
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${destinationsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mega-menu panel */}
              {destinationsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-slate-900/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-4 animate-fade-in">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                    <span className="text-white font-semibold text-sm">{t("exploreTitle")}</span>
                    <Link
                      href="/destinations"
                      onClick={() => setDestinationsOpen(false)}
                      className="text-amber-400 text-xs font-medium hover:text-amber-300 transition"
                    >
                      {t("viewAll")}
                    </Link>
                  </div>

                  {/* 4-column grid */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {destinations.map(({ label, slug, Icon, desc, localeSlug }) => (
                      <Link
                        key={slug}
                        href={{ pathname: "/destinations/[slug]", params: { slug: localeSlug } }}
                        onClick={() => setDestinationsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 group transition"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition">
                          <Icon className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-white text-sm font-medium leading-tight truncate">{label}</div>
                          <div className="text-white/50 text-xs truncate">{desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Link
                      href="/destinations"
                      onClick={() => setDestinationsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-2 bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 rounded-xl text-sm font-medium transition"
                    >
                      <FaCompass className="w-3.5 h-3.5" />
                      {t("browseAll")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* Wishlist */}
            <button
              data-panel-trigger
              onClick={() => togglePanel("wishlist")}
              className="relative p-2 text-white/80 hover:text-amber-400 transition rounded-full hover:bg-white/10"
              aria-label="Wishlist"
            >
              <FaHeart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse-badge">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              data-panel-trigger
              onClick={() => togglePanel("cart")}
              className="relative p-2 text-white/80 hover:text-amber-400 transition rounded-full hover:bg-white/10 hidden md:flex"
              aria-label={t("cart")}
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-emerald-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse-badge">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Notifications */}
            <button
              data-panel-trigger
              onClick={() => togglePanel("notifications")}
              className="relative p-2 text-white/80 hover:text-amber-400 transition rounded-full hover:bg-white/10 hidden md:flex"
              aria-label="Notifications"
            >
              <FaBell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse-badge">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Admin shortcut */}
            {user && (user.role === "admin" || user.role === "agent") && (
              <Link
                href="/admin"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold hover:bg-amber-500/30 transition"
              >
                <FaUserShield className="w-3 h-3" />
                {user.role === "admin" ? "Admin" : "Agent"}
              </Link>
            )}

            {/* Profile / Login */}
            {user ? (
              <div className="relative" data-panel-trigger>
                <button
                  onClick={() => { setActivePanel(null); setDestinationsOpen(false); setDropdownOpen(p => !p); }}
                  className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-white text-sm font-medium hidden sm:block">{user.name.split(" ")[0]}</span>
                </button>
                {dropdownOpen && <UserDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)} />}
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full transition shadow-lg shadow-amber-500/25"
              >
                {t("signIn")}
              </Link>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(p => !p)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 animate-slide-down">
            <div className="space-y-1 mb-4">

              {/* Plain nav links */}
              {TOP_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition"
                >
                  <Icon className="w-4 h-4 text-amber-400/70 shrink-0" />
                  {label}
                </Link>
              ))}

              {/* Destinations accordion */}
              <div>
                <button
                  onClick={() => setMobileDestOpen(p => !p)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition"
                >
                  <span className="flex items-center gap-3">
                    <FaMap className="w-4 h-4 text-amber-400/70 shrink-0" />
                    {t("destinations")}
                  </span>
                  <FaChevronDown
                    className={`w-3 h-3 text-white/40 transition-transform duration-200 ${mobileDestOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDestOpen && (
                  <div className="mt-1 ml-4 pl-4 border-l border-white/10 space-y-0.5">
                    <Link
                      href="/destinations"
                      onClick={() => { setMenuOpen(false); setMobileDestOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-amber-400 hover:bg-white/10 text-sm font-medium transition"
                    >
                      <FaCompass className="w-3.5 h-3.5 shrink-0" />
                      {t("allDestinations")}
                    </Link>
                    {destinations.map(({ label, slug, Icon, localeSlug }) => (
                      <Link
                        key={slug}
                        href={{ pathname: "/destinations/[slug]", params: { slug: localeSlug } }}
                        onClick={() => { setMenuOpen(false); setMobileDestOpen(false); }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 text-sm transition"
                      >
                        <Icon className="w-3.5 h-3.5 text-amber-400/60 shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile bottom actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                data-panel-trigger
                onClick={() => { togglePanel("cart"); setMenuOpen(false); }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/15 transition"
              >
                <FaShoppingCart className="w-4 h-4" />
                {t("cart")} {cartCount > 0 && `(${cartCount})`}
              </button>
              {!user ? (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-2.5 bg-amber-500 text-white rounded-xl text-sm font-semibold hover:bg-amber-600 transition text-center"
                >
                  {t("signIn")}
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-2.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-sm font-semibold text-center hover:bg-amber-500/30 transition"
                >
                  {t("myAccount")}
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Slide-over Panels ── */}
      {activePanel && (
        <div
          data-panel
          className="fixed inset-0 z-40 panel-overlay"
          onClick={() => setActivePanel(null)}
        />
      )}
      <div data-panel>
        {activePanel === "wishlist"      && <WishlistPanel      onClose={() => setActivePanel(null)} />}
        {activePanel === "cart"          && <CartPanel          onClose={() => setActivePanel(null)} />}
        {activePanel === "notifications" && <NotificationsPanel onClose={() => setActivePanel(null)} />}
      </div>
    </>
  );
}
