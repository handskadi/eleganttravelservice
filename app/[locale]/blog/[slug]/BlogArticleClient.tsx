"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTag,
  FaQuoteLeft,
  FaArrowRight,
  FaLightbulb,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCompass,
  FaChevronRight,
} from "react-icons/fa";
import { blogPosts, type BlogBlock } from "@/data/blog-posts";

// ─── Reading progress bar ─────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-slate-200/50">
      <div
        className="h-full bg-amber-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─── Block renderers ──────────────────────────────────────────────────────────
function ParagraphBlock({ block }: { block: Extract<BlogBlock, { type?: undefined } | { type: "paragraph" }> }) {
  return (
    <div className="mb-8">
      {block.heading && (
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug relative pl-4 border-l-2 border-amber-400">
          {block.heading}
        </h2>
      )}
      <p className="text-[17px] text-slate-700 leading-[1.9]">{block.body}</p>
    </div>
  );
}

function QuoteBlock({ block }: { block: Extract<BlogBlock, { type: "quote" }> }) {
  return (
    <blockquote className="my-10 relative">
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl px-7 py-6">
        <FaQuoteLeft className="w-6 h-6 text-amber-300 mb-3" />
        <p className="text-[18px] font-medium text-slate-800 leading-[1.8] italic">
          {block.text}
        </p>
        {block.attribution && (
          <footer className="mt-4 text-sm text-slate-500 font-semibold not-italic flex items-center gap-2">
            <span className="w-5 h-px bg-amber-400 inline-block" />
            {block.attribution}
          </footer>
        )}
      </div>
    </blockquote>
  );
}

function ListBlock({ block }: { block: Extract<BlogBlock, { type: "list" }> }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <div className="my-8">
      {block.heading && (
        <h3 className="text-lg font-bold text-slate-900 mb-4">{block.heading}</h3>
      )}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm px-6 py-5">
        <Tag className={`space-y-3 ${block.ordered ? "list-none" : ""}`}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] text-slate-700 leading-relaxed">
              {block.ordered ? (
                <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
              ) : (
                <span className="shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      </div>
    </div>
  );
}

function StatsBlock({ block }: { block: Extract<BlogBlock, { type: "stats" }> }) {
  return (
    <div className="my-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
      {block.heading && (
        <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">{block.heading}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {block.stats.map((stat, i) => (
          <div key={i} className="text-center py-2">
            <p className="text-2xl font-extrabold text-amber-400 tabular-nums">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalloutBlock({ block }: { block: Extract<BlogBlock, { type: "callout" }> }) {
  const variant = block.variant ?? "tip";
  const styles = {
    tip: {
      bg: "bg-amber-50 border-amber-200",
      icon: FaLightbulb,
      iconColor: "text-amber-500",
      headingColor: "text-amber-800",
      textColor: "text-amber-900",
    },
    info: {
      bg: "bg-blue-50 border-blue-200",
      icon: FaInfoCircle,
      iconColor: "text-blue-500",
      headingColor: "text-blue-800",
      textColor: "text-blue-900",
    },
    warning: {
      bg: "bg-red-50 border-red-200",
      icon: FaExclamationTriangle,
      iconColor: "text-red-500",
      headingColor: "text-red-800",
      textColor: "text-red-900",
    },
  }[variant];

  const Icon = styles.icon;

  return (
    <div className={`my-8 rounded-2xl border p-5 ${styles.bg}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${styles.iconColor}`} />
        <div>
          {block.heading && (
            <p className={`font-bold text-sm mb-1.5 ${styles.headingColor}`}>{block.heading}</p>
          )}
          <p className={`text-sm leading-relaxed ${styles.textColor}`}>{block.body}</p>
        </div>
      </div>
    </div>
  );
}

function CtaBlock({ block }: { block: Extract<BlogBlock, { type: "cta" }> }) {
  return (
    <div className="my-10">
      <Link
        href={block.href}
        className="group flex items-start gap-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-2xl p-5 text-white transition-all shadow-lg shadow-amber-500/20"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
          <FaCompass className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[15px] leading-snug">{block.title}</p>
          <p className="text-white/80 text-sm mt-1 leading-relaxed">{block.description}</p>
        </div>
        <FaChevronRight className="w-4 h-4 text-white/70 self-center shrink-0 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "quote")   return <QuoteBlock block={block} />;
  if (block.type === "list")    return <ListBlock block={block} />;
  if (block.type === "stats")   return <StatsBlock block={block} />;
  if (block.type === "callout") return <CalloutBlock block={block} />;
  if (block.type === "cta")     return <CtaBlock block={block} />;
  return <ParagraphBlock block={block} />;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BlogArticleClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-100">
            <FaCompass className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Article Not Found</h1>
          <p className="text-slate-500 mb-8">
            We couldn&apos;t find the article you&apos;re looking for. It may have been moved or
            removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug)).slice(0, 3);

  const authorInitials = post.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  return (
    <main className="min-h-screen bg-white">
      <ReadingProgress />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-[480px] md:h-[560px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-4xl mx-auto w-full left-0 right-0">
          <span className="inline-block self-start bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/75 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-[10px] font-bold">
                {authorInitials}
              </div>
              <span className="font-medium text-white/90">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-amber-400 text-xs" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="text-amber-400 text-xs" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li className="text-slate-300">/</li>
            <li><Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link></li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-700 font-medium line-clamp-1 max-w-xs">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 text-sm font-medium transition-colors mb-8"
        >
          <FaArrowLeft className="text-xs" />
          Back to all articles
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── LEFT: Article content ──────────────────────── */}
          <article className="flex-1 min-w-0">

            {/* Intro excerpt */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium border-l-4 border-amber-400 pl-5 mb-10 italic bg-amber-50/50 py-4 pr-4 rounded-r-xl">
              {post.excerpt}
            </p>

            {/* Content blocks */}
            <div>
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {/* ── Share bar ─────────────────────────────── */}
            <div className="mt-14 pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Share this article
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1464d8] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
                  className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8fd6] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Twitter</span>
                </a>
                <a
                  href={`https://wa.me/?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* ── RIGHT: Sidebar (narrower) ───────────────────── */}
          <aside className="lg:w-60 xl:w-64 shrink-0 space-y-6 lg:sticky lg:top-24 lg:self-start">

            {/* Author card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Author</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shrink-0">
                  {authorInitials}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{post.author}</p>
                  <p className="text-xs text-amber-600 font-medium">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {post.authorRole === "Head Guide"
                  ? "Leading tours across Morocco for over a decade, specialising in the High Atlas and northern medinas."
                  : post.authorRole === "Operations Manager"
                  ? "Coordinates all logistics, ensuring every journey runs seamlessly from arrival to departure."
                  : "Travel writer and expert who has spent years documenting Morocco's culinary and cultural landscape."}
              </p>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <FaTag className="text-amber-400" />
                  Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">More Articles</p>
                <ul className="space-y-4">
                  {relatedPosts.slice(0, 3).map((related) => (
                    <li key={related.slug}>
                      <Link href={`/blog/${related.slug}`} className="group flex gap-3 items-start">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                          <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="56px" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-bold text-slate-700 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                            <FaClock className="text-amber-400" />
                            {related.readTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/blog" className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition">
                  All articles <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            )}

            {/* CTA — Plan a trip */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white">
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-2">Plan Your Trip</p>
              <h3 className="text-sm font-bold mb-2 leading-snug">Ready to visit Morocco?</h3>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">Browse 100+ handcrafted tours — from 2-day escapes to 18-day grand circuits.</p>
              <Link
                href="/tours"
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors"
              >
                Explore Tours <FaArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white/90 font-medium py-2 rounded-xl text-xs transition-colors mt-2"
              >
                Custom Itinerary
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Newsletter</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Morocco travel guides, direct to your inbox. Monthly, no spam.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition"
                />
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl text-xs transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* ── You Might Also Like ───────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-100 py-16 mt-4">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                  You might also like
                </h2>
                <p className="text-slate-500 text-sm mt-1">More stories from Morocco</p>
              </div>
              <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition">
                All articles <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-shadow flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={related.image} alt={related.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                      <span className="flex items-center gap-1.5">
                        <FaUser className="text-amber-400 text-[10px]" />
                        {related.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-amber-400 text-[10px]" />
                        {related.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
