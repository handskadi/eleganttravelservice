import Image from "next/image";
import { FaMobileAlt, FaMapMarkedAlt, FaBell, FaShieldAlt } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

export default async function AppPromoSection() {
  const t = await getTranslations("appPromo");

  const features = [
    { icon: FaMapMarkedAlt, label: t("featureOfflineMaps") },
    { icon: FaBell, label: t("featureBookingAlerts") },
    { icon: FaShieldAlt, label: t("featureSupport") },
    { icon: FaMobileAlt, label: t("featureInstantConfirmation") },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.1),_transparent_60%)] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Text */}
          <div className="flex-1 text-white">
            <span className="section-label">{t("label")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-md">
              {t("subtitle")}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <div className="w-8 h-8 bg-amber-500/15 border border-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition shadow-lg font-medium"
              >
                <Image src="/icons/google-play-badge.png" alt="Google Play" width={24} height={24} className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-none mb-0.5">{t("googlePlayLabel")}</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition shadow-lg font-medium"
              >
                <Image src="/icons/app-store-badge.svg" alt="App Store" width={24} height={24} className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-none mb-0.5">{t("appStoreLabel")}</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="shrink-0 w-full max-w-xs lg:max-w-sm">
            <div className="relative w-full aspect-square">
              <Image
                src="/background/map-plane-big.png"
                alt="ETS Mobile App"
                fill
                className="object-contain opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl flex items-center justify-center">
                  <FaMobileAlt className="w-20 h-20 text-amber-400/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
