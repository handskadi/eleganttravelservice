import { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { blogPosts } from "@/data/blog-posts";
import { destinationsData } from "@/data/destinations-data";

const BASE = "https://www.eleganttravelservice.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/tours`, changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${BASE}/destinations`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "daily" as const, priority: 0.85 },
    { url: `${BASE}/activities`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${BASE}/careers`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${BASE}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ].map((p) => ({ ...p, lastModified: new Date() }));

  const cityPages = [
    { url: `${BASE}/tours/from-marrakech`, priority: 0.9 },
    { url: `${BASE}/tours/from-casablanca`, priority: 0.85 },
    { url: `${BASE}/tours/from-fes`, priority: 0.85 },
    { url: `${BASE}/tours/from-tangier`, priority: 0.8 },
    { url: `${BASE}/tours/from-agadir`, priority: 0.75 },
  ].map((p) => ({ ...p, lastModified: new Date(), changeFrequency: "weekly" as const }));

  const tourPages = tours.map((t) => ({
    url: `${BASE}/tours/${t.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: t.featured ? 0.9 : 0.8,
    images: [`${BASE}${t.image}`],
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const destinationPages = destinationsData.map((d) => ({
    url: `${BASE}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...cityPages, ...tourPages, ...blogPages, ...destinationPages];
}
