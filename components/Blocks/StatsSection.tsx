import { FaUsers, FaMapMarkedAlt, FaStar, FaTrophy, FaThumbsUp } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

const statsMeta = [
  { value: "15,000+", icon: FaUsers, color: "text-amber-400", key: "travelers" },
  { value: "100+", icon: FaMapMarkedAlt, color: "text-emerald-400", key: "tours" },
  { value: "4.9★", icon: FaStar, color: "text-amber-400", key: "rating" },
  { value: "10+", icon: FaTrophy, color: "text-amber-400", key: "experience" },
  { value: "98%", icon: FaThumbsUp, color: "text-emerald-400", key: "satisfaction" },
];

export default async function StatsSection() {
  const t = await getTranslations("stats");

  return (
    <section className="relative z-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
          {statsMeta.map(({ value, icon: Icon, color, key }, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 gap-2 group">
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-1 group-hover:bg-white/10 transition ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-white">{value}</span>
              <span className="text-slate-400 text-xs font-medium text-center">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
