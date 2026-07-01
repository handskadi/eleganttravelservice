"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt, FaClock, FaUser, FaArrowRight,
  FaSearch, FaTag, FaTimes,
  FaGlobeAfrica, FaMapMarkedAlt, FaUtensils, FaMountain,
  FaRoute, FaLeaf, FaInfoCircle, FaBolt, FaLandmark,
  FaCompass, FaBookOpen,
} from "react-icons/fa";
import type { BlogPost } from "@/data/blog-posts";
import { useTranslations } from "next-intl";

const POSTS_PER_PAGE = 9;

type IconComponent = React.ComponentType<{ className?: string }>;

const CATEGORY_ICONS: Record<string, IconComponent> = {
  "All":            FaGlobeAfrica,
  "Travel Guide":   FaMapMarkedAlt,
  "Food & Culture": FaUtensils,
  "Trekking":       FaMountain,
  "Road Trip":      FaRoute,
  "Itinerary":      FaCalendarAlt,
  "Nature":         FaLeaf,
  "Practical Tips": FaInfoCircle,
  "Activities":     FaBolt,
  "History":        FaLandmark,
  "Adventure":      FaCompass,
};

function getCategoryIcon(category: string): IconComponent {
  return CATEGORY_ICONS[category] ?? FaTag;
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const t = useTranslations("blog");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map(p => p.category)));
    return ["All", ...cats.sort()];
  }, [posts]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach(p => {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    });
    return counts;
  }, [posts]);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory !== "All") result = result.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeCategory, search]);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);
  const paginated = rest.slice(0, page * POSTS_PER_PAGE);
  const hasMore = paginated.length < rest.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const totalShowing = featured ? paginated.length + 1 : paginated.length;

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">

      {/* Hero Section */}
      <div className="py-14 md:py-20 border-b border-slate-100 mb-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            <FaBookOpen className="w-3 h-3" />
            {posts.length} articles
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-lg">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            placeholder={t("searchPlaceholder")}
            className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            >
              <FaTimes className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Icon Cards */}
      <div className="mb-10 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto">
        <div className="flex gap-3 md:flex-wrap pb-2 md:pb-0 min-w-max md:min-w-0">
          {categories.map(cat => {
            const Icon = getCategoryIcon(cat);
            const isActive = activeCategory === cat;
            const count = categoryCounts[cat] ?? 0;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex flex-col items-center gap-2 px-4 py-3.5 rounded-2xl border transition-all text-center min-w-[80px] ${
                  isActive
                    ? "bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/25"
                    : "bg-white border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-[11px] font-semibold leading-tight whitespace-nowrap">
                  {cat === "All" ? t("allCategories") : cat}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-lg font-medium">{t("noResults")}</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("All"); }}
            className="mt-4 text-amber-600 font-semibold text-sm hover:underline"
          >
            {t("clearFilters")}
          </button>
        </div>
      )}

      {/* Post Count */}
      {filtered.length > 0 && (
        <p className="text-sm text-slate-400 mb-6">
          {t("showing")} <span className="font-semibold text-slate-600">{totalShowing}</span> {t("of")}{" "}
          <span className="font-semibold text-slate-600">{filtered.length}</span> {t("articles")}
        </p>
      )}

      {/* Featured Post */}
      {featured && (
        <div className="mb-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-slate-100"
          >
            <div className="relative h-64 md:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {t("featured")}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full mb-4 w-fit">
                <FaTag className="w-2.5 h-2.5" />
                {featured.category}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight mb-3 group-hover:text-amber-600 transition">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FaUser className="w-3 h-3 text-amber-500" />
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3 text-amber-500" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-3 h-3 text-amber-500" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-amber-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  {t("readMore")} <FaArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid */}
      {paginated.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map(post => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 flex flex-col group"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-52 overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-bold text-slate-800 text-base leading-snug hover:text-amber-600 transition line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <FaUser className="w-3 h-3 text-amber-400" />
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition"
                  >
                    {t("readMore")} <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-10 mb-12 text-center">
          <button
            onClick={() => setPage(p => p + 1)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition text-sm"
          >
            {t("loadMore")} <FaArrowRight className="w-3.5 h-3.5" />
          </button>
          <p className="text-slate-400 text-xs mt-2">
            {t("showing")} {totalShowing} {t("of")} {filtered.length} {t("articles")}
          </p>
        </div>
      )}

      {!hasMore && filtered.length > 0 && (
        <div className="mt-10 mb-12 text-center">
          <p className="text-slate-400 text-xs">
            All {filtered.length} {t("articles")} loaded.
          </p>
        </div>
      )}

    </div>
  );
}
