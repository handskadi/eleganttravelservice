import type { Metadata } from "next";
import { destinationsData } from "@/data/destinations-data";
import { destSlugs } from "@/data/destination-translations";
import DestinationDetailClient from "./DestinationDetailClient";

function resolveCanonicalSlug(rawSlug: string): string {
  const urlSlug = decodeURIComponent(rawSlug).normalize("NFC");
  if (destinationsData.find(d => d.slug === urlSlug)) return urlSlug;
  for (const [canonical, locales] of Object.entries(destSlugs)) {
    if (Object.values(locales).map(s => s.normalize("NFC")).includes(urlSlug)) return canonical;
  }
  return urlSlug;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveCanonicalSlug(slug);
  const dest = destinationsData.find((d) => d.slug === canonicalSlug);
  if (!dest) return { title: "Destination Not Found | Elegant Travel Service" };

  const title = `${dest.name} Tours & Travel Guide 2025 | Elegant Travel Service Morocco`;
  const description = `Discover ${dest.name}, Morocco — ${dest.about.substring(0, 120)}. Browse tours, tips & travel guides.`;

  return {
    title,
    description,
    keywords: [
      dest.name,
      `${dest.name} Morocco`,
      `${dest.name} tours`,
      `visit ${dest.name}`,
      `${dest.name} travel guide`,
      `things to do in ${dest.name}`,
      "Morocco destinations",
      "Morocco travel 2025",
      "Morocco travel agency",
      dest.region,
      ...dest.highlights.map((h) => h.title),
    ],
    openGraph: {
      title: `${dest.name} — ${dest.subtitle}`,
      description,
      images: [{ url: `https://www.eleganttravelservice.com${dest.heroImage}` }],
      type: "website",
      siteName: "Elegant Travel Service Morocco",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${dest.name} — ${dest.subtitle}`,
      description,
      images: [`https://www.eleganttravelservice.com${dest.heroImage}`],
      site: "@ElegantTravelMA",
    },
    alternates: { canonical: `https://www.eleganttravelservice.com/destinations/${dest.slug}` },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}

export default async function DestinationDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const canonicalSlug = resolveCanonicalSlug(slug);
  const dest = destinationsData.find((d) => d.slug === canonicalSlug);

  const breadcrumbJsonLd = dest
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eleganttravelservice.com" },
          { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.eleganttravelservice.com/destinations" },
          { "@type": "ListItem", position: 3, name: dest.name, item: `https://www.eleganttravelservice.com/destinations/${dest.slug}` },
        ],
      }
    : null;

  const destinationJsonLd = dest
    ? {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: dest.name,
        description: dest.about.split("\n\n")[0].slice(0, 300),
        url: `https://www.eleganttravelservice.com/destinations/${dest.slug}`,
        containedInPlace: {
          "@type": "Country",
          name: "Morocco",
        },
        touristType: "Cultural tourism, Adventure tourism",
        hasMap: `https://maps.google.com/?q=${encodeURIComponent(dest.name + " Morocco")}`,
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
      {destinationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
        />
      )}
      <DestinationDetailClient slug={canonicalSlug} />
    </>
  );
}
