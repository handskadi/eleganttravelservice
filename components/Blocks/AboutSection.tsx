import Image from "next/image";
import { FaUsers, FaGlobeAfrica, FaAward, FaArrowRight } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const highlights = [
  { icon: FaUsers, value: "15,000+", labelKey: "travelers" },
  { icon: FaGlobeAfrica, value: "50+", labelKey: "packages" },
  { icon: FaAward, value: "10+", labelKey: "awards" },
];

export default async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image with floating badges */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/morocco-culture.webp"
                alt="About Elegant Travel Service"
                width={520}
                height={600}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />

              {/* Floating badge: Travelers */}
              <div className="absolute -bottom-5 -left-5 md:-left-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{t("travelers")}</p>
                  <p className="text-xl font-extrabold text-slate-800">15,000+</p>
                </div>
              </div>

              {/* Floating badge: Packages */}
              <div className="absolute -top-5 -right-5 md:-right-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <FaGlobeAfrica className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{t("packages")}</p>
                  <p className="text-xl font-extrabold text-slate-800">50+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-label">{t("sectionLabel")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
              {t("heading")}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-5">
              {t("body1")}
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {t("body2")}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map(({ icon: Icon, value, labelKey }, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <p className="font-extrabold text-slate-800 text-lg">{value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{t(labelKey)}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition shadow-lg shadow-amber-500/25 text-sm"
            >
              {t("cta")}
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-50 rounded-full opacity-60 blur-3xl pointer-events-none" />
    </section>
  );
}
