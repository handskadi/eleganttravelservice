import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogArticleClient from "./BlogArticleClient";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | Elegant Travel Service" };

  const title = post.metaTitle || `${post.title} | Morocco Travel Blog`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    keywords: [
      ...post.tags,
      "Morocco travel blog",
      "Morocco travel tips",
      "Morocco travel guide 2025",
      post.category,
      "Morocco holiday",
      "Morocco travel advice",
    ],
    openGraph: {
      title: post.title,
      description,
      images: [{ url: `https://www.eleganttravelservice.com${post.image}` }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [`https://www.eleganttravelservice.com${post.image}`],
      site: "@ElegantTravelMA",
    },
    alternates: { canonical: `https://www.eleganttravelservice.com/blog/${post.slug}` },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}

export default async function BlogArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const breadcrumbJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eleganttravelservice.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.eleganttravelservice.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.eleganttravelservice.com/blog/${post.slug}` },
        ],
      }
    : null;

  const articleJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `https://www.eleganttravelservice.com${post.image}`,
        author: {
          "@type": "Person",
          name: post.author,
          url: "https://www.eleganttravelservice.com/blog",
        },
        publisher: {
          "@type": "Organization",
          name: "Elegant Travel Service",
          url: "https://www.eleganttravelservice.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.eleganttravelservice.com/logo.png",
          },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.eleganttravelservice.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
      }
    : null;

  const faqJsonLd =
    post && (post.category === "Packing Guide" || post.tags.includes("Travel Tips"))
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `What should I pack for a Morocco ${post.category.toLowerCase()} trip?`,
              acceptedAnswer: { "@type": "Answer", text: post.excerpt },
            },
            {
              "@type": "Question",
              name: `Is ${post.tags[0]} safe for tourists?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Morocco is considered one of Africa's safest destinations for tourists. ${post.excerpt.slice(0, 120)}`,
              },
            },
            {
              "@type": "Question",
              name: `When is the best time to visit Morocco for ${post.category.toLowerCase()} experiences?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: "April–May and September–October offer the best conditions: mild temperatures (18–26°C), clear skies, and manageable crowds. Avoid peak summer (July–August) for desert and mountain tours.",
              },
            },
          ],
        }
      : null;

  return (
    <>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <BlogArticleClient slug={slug} />
    </>
  );
}
