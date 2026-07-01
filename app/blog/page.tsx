import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Morocco Travel Blog | Tips, Guides & Inspiration",
  description:
    "Read expert travel guides, tips and inspiration for Morocco — from Sahara desert adventures and Marrakech street food to hidden gems in the Rif Mountains.",
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
    title: "Morocco Travel Blog | Tips, Guides & Inspiration",
    description:
      "Expert travel guides, tips and inspiration for Morocco from our team on the ground.",
    type: "website",
  },
  alternates: { canonical: "https://www.eleganttravelservice.com/blog" },
};

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

export default function BlogPage() {
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
              Travel Journal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Stories from Morocco
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Expert guides, destination inspiration, and travel tips from our team of Morocco specialists.
            </p>
            <p className="text-slate-500 text-sm mt-3">
              {blogPosts.length} articles — updated regularly
            </p>
          </div>
        </div>

        <BlogClient posts={blogPosts} />
      </div>
    </>
  );
}
