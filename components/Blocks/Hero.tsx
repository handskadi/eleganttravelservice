import Image from "next/image";
import { FaArrowRight, FaStar, FaShieldAlt } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import SearchForm from "../SearchForm";
import { getTranslations } from "next-intl/server";
export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/background/hero-desert-image.webp"
        alt="Morocco desert landscape"
        fill
        priority
        className="object-cover scale-105"
      />
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="text-white space-y-7">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm rounded-full px-4 py-2">
              <FaShieldAlt className="w-3 h-3 text-amber-400" />
              <span className="text-amber-300 text-xs font-semibold uppercase tracking-widest">{t("badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {t("title")}
              <span className="block text-amber-400">{t("titleHighlight")}</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#tours"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition shadow-2xl shadow-amber-500/30 text-sm uppercase tracking-wide"
              >
                {t("exploreTours")}
                <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition text-sm"
              >
                {t("ourStory")}
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2.5">
                {["M", "S", "J", "A", "K"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: ["#f59e0b","#10b981","#6b4eff","#ef4444","#0ea5e9"][i] }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  ))}
                  <span className="text-white text-xs font-semibold ml-1">4.9</span>
                </div>
                <p className="text-white/60 text-xs mt-0.5">{t("socialProof")}</p>
              </div>
            </div>
          </div>

          {/* Right: Search Form */}
          <div className="w-full">
            <SearchForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition animate-bounce-subtle"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <HiChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
