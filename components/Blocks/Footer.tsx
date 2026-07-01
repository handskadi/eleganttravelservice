"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope,
  FaMapMarkerAlt, FaPhone, FaClock, FaHeart,
  FaYoutube, FaTiktok,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("tours"), href: "/tours" },
    { label: t("destinations"), href: "/destinations" },
    { label: t("activities"), href: "/activities" },
    { label: t("blog"), href: "/blog" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  const helpLinks = [
    { label: t("about"), href: "/about" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
    { label: t("complaints"), href: "/complaints" },
    { label: t("careers"), href: "/careers" },
    { label: t("terms"), href: "/terms" },
    { label: t("privacy"), href: "/privacy" },
  ];

  return (
    <footer className="bg-[#0b0c2a] text-white">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="ETS" width={36} height={36} className="rounded-lg" />
              <div>
                <span className="text-white text-lg font-bold leading-none">ElegantTravel</span>
                <span className="block text-amber-400 text-[10px] font-medium tracking-widest uppercase">Morocco</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {t("tagline")}
            </p>

            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5 text-slate-400">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                {t("officeAddress")}
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <FaPhone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                {t("officePhone")}
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <FaClock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                {t("officeHours")}
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <FaEnvelope className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                {t("officeEmail")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-sm font-extrabold uppercase tracking-widest text-white/80 mb-5">{t("quickLinks")}</h6>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-amber-400 transition text-sm flex items-center gap-1.5 group">
                    <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-amber-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Legal */}
          <div>
            <h6 className="text-sm font-extrabold uppercase tracking-widest text-white/80 mb-5">{t("helpInfo")}</h6>
            <ul className="space-y-2.5">
              {helpLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-amber-400 transition text-sm flex items-center gap-1.5 group">
                    <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-amber-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-sm font-extrabold uppercase tracking-widest text-white/80 mb-5">{t("newsletterTitle")}</h6>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {t("newsletterSub")}
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-xl p-3.5 text-sm text-emerald-400 font-medium text-center">
                {t("subscribed")}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder={t("emailPlaceholder")}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl text-sm focus:outline-none focus:border-amber-500/50 transition"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition"
                >
                  {t("subscribe")}
                </button>
              </form>
            )}

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">{t("followUs")}</p>
              <div className="flex gap-2">
                {[
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaWhatsapp, href: "#" },
                  { Icon: FaYoutube, href: "#" },
                  { Icon: FaTiktok, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 bg-white/5 hover:bg-amber-500 border border-white/10 hover:border-amber-500 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Elegant Travel Service. {t("copyright")} Built with
            <FaHeart className="w-3 h-3 text-red-500 fill-current" />
            {t("madeWith")} <a href="https://mohamedkadi.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">MKWebs</a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-amber-400 transition">{t("terms")}</Link>
            <Link href="/privacy" className="hover:text-amber-400 transition">{t("privacy")}</Link>
            <Link href="/complaints" className="hover:text-amber-400 transition">{t("complaints")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
