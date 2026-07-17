import Image from "next/image";
import { FaArrowRight, FaStar, FaShieldAlt } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import SearchForm from "../SearchForm";
import { getTranslations } from "next-intl/server";
export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="text-white text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-7">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <FaShieldAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 shrink-0" />
              <span className="text-amber-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">{t("badge")}</span>
            </div>

            <h1 className="text-[1.75rem] sm:text-4xl lg:text-6xl font-extrabold leading-snug sm:leading-tight">
              {t("title")}
              <span className="block text-amber-400">{t("titleHighlight")}</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start">
              <a
                href="#tours"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition shadow-2xl shadow-amber-500/30 text-xs sm:text-sm uppercase tracking-wide"
              >
                {t("exploreTours")}
                <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition text-xs sm:text-sm"
              >
                {t("ourStory")}
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 sm:gap-4 pt-0.5 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["M", "S", "J", "A", "K"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white"
                    style={{ background: ["#f59e0b","#10b981","#6b4eff","#ef4444","#0ea5e9"][i] }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-current" />
                  ))}
                  <span className="text-white text-xs font-semibold ml-1">4.9</span>
                </div>
                <p className="text-white/60 text-[10px] sm:text-xs mt-0.5">{t("socialProof")}</p>
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
