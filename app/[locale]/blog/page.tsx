import { getTranslations } from "next-intl/server";
import { blogPosts } from "@/data/blog-posts";
import BlogClient from "./BlogClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: [
      "Morocco travel blog",
      "Morocco travel tips 2025",
      "Morocco travel guide",
      "Morocco holiday tips",
      "visiting Morocco advice",
      "Marrakech guide",
      "Sahara travel",
      "Morocco inspiration",
    ],
    openGraph: {
      title: t("metaTitle"),
      description: t("ogDescription"),
      type: "website",
    },
    alternates: {
      canonical: "https://www.eleganttravelservice.com/blog",
      languages: {
        en: "https://www.eleganttravelservice.com/blog",
        fr: "https://www.eleganttravelservice.com/fr/blog",
        ar: "https://www.eleganttravelservice.com/ar/blog",
        es: "https://www.eleganttravelservice.com/es/blog",
        de: "https://www.eleganttravelservice.com/de/blog",
        it: "https://www.eleganttravelservice.com/it/blog",
      },
    },
  };
}

const blogItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Morocco Travel Blog",
  description: "Expert travel guides, tips and inspiration for Morocco from Elegant Travel Service",
  url: "https://www.eleganttravelservice.com/blog",
  numberOfItems: blogPosts.length,
  itemListElement: blogPosts.slice(0, 10).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    url: `https://www.eleganttravelservice.com/blog/${p.slug}`,
  })),
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListJsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">
              {t("label")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t("heading")}
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              {t("subtitle")}
            </p>
            <p className="text-slate-500 text-sm mt-3">
              {t("articleCount", { count: blogPosts.length })}
            </p>
          </div>
        </div>

        <BlogClient posts={blogPosts} />
      </div>
    </>
  );
}
