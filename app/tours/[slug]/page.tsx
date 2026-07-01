import type { Metadata } from "next";
import { tours } from "@/data/tours";
import TourDetailClient from "./TourDetailClient";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);
  if (!tour) return { title: "Tour Not Found | Elegant Travel Service" };

  const title = `${tour.title} | Morocco Tours 2025 | Elegant Travel Service`;
  const description = `${tour.description} Book this ${tour.duration} Morocco ${tour.category.toLowerCase()} tour from $${tour.price}pp. Expert guides, small groups, unforgettable experiences.`;

  return {
    title,
    description,
    keywords: [
      tour.title,
      `${tour.title} Morocco`,
      `${tour.location} tour`,
      `Morocco ${tour.category.toLowerCase()} tour`,
      `${tour.duration} Morocco tour`,
      `guided Morocco ${tour.category.toLowerCase()}`,
      "Morocco tours 2025",
      "best Morocco tours",
      "Morocco travel package",
      "Morocco travel agency",
      tour.location,
      "Elegant Travel Service",
      `${tour.location} guided tour`,
      "Morocco holiday package",
      slug.replace(/-/g, " "),
    ],
    openGraph: {
      title: tour.title,
      description,
      images: [{ url: `https://www.eleganttravelservice.com${tour.image}`, alt: tour.title }],
      type: "website",
      siteName: "Elegant Travel Service Morocco",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description,
      images: [`https://www.eleganttravelservice.com${tour.image}`],
      site: "@ElegantTravelMA",
    },
    alternates: { canonical: `https://www.eleganttravelservice.com/tours/${slug}` },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}

function difficultyExplanation(difficulty: "Easy" | "Moderate" | "Difficult"): string {
  if (difficulty === "Easy") return "most fitness levels including families with children";
  if (difficulty === "Moderate") return "travellers with a reasonable level of fitness";
  return "experienced travellers with good physical fitness";
}

export default async function TourDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);

  const breadcrumbJsonLd = tour
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eleganttravelservice.com" },
          { "@type": "ListItem", position: 2, name: "Tours", item: "https://www.eleganttravelservice.com/tours" },
          { "@type": "ListItem", position: 3, name: tour.title, item: `https://www.eleganttravelservice.com/tours/${tour.id}` },
        ],
      }
    : null;

  const faqJsonLd = tour
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is included in the ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: tour.included.join(", "),
            },
          },
          {
            "@type": "Question",
            name: `How difficult is the ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The ${tour.title} is rated ${tour.difficulty} difficulty and suitable for ${difficultyExplanation(tour.difficulty)}.`,
            },
          },
          {
            "@type": "Question",
            name: `How long is the ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The ${tour.title} lasts ${tour.duration} departing from ${tour.location}.`,
            },
          },
          {
            "@type": "Question",
            name: `What is the price of ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: tour.originalPrice
                ? `The ${tour.title} starts from $${tour.price} per person. Originally $${tour.originalPrice} — currently on offer.`
                : `The ${tour.title} starts from $${tour.price} per person.`,
            },
          },
          {
            "@type": "Question",
            name: `What is not included in ${tour.title}?`,
            acceptedAnswer: { "@type": "Answer", text: tour.excluded.join(", ") },
          },
          {
            "@type": "Question",
            name: `What is the maximum group size for ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Maximum ${tour.maxGroupSize} people. ETS runs private tours — your own vehicle and guide, not shared with strangers.`,
            },
          },
          {
            "@type": "Question",
            name: `Can I cancel ${tour.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Free cancellation up to 48 hours before departure. Within 48 hours a 50% credit note is issued, valid 12 months. Contact the ETS team to reschedule at no extra charge.",
            },
          },
        ],
      }
    : null;

  const touristTripJsonLd = tour
    ? {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.description,
        touristType: tour.category,
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-01-01",
          priceValidUntil: "2026-12-31",
          seller: {
            "@type": "TravelAgency",
            name: "Elegant Travel Service",
            url: "https://www.eleganttravelservice.com",
          },
        },
        provider: {
          "@type": "TravelAgency",
          name: "Elegant Travel Service",
          url: "https://www.eleganttravelservice.com",
        },
        image: `https://www.eleganttravelservice.com${tour.image}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: tour.rating,
          reviewCount: tour.reviews,
          bestRating: "5",
        },
        maximumAttendeeCapacity: tour.maxGroupSize,
        duration: `P${tour.duration.replace(" Days", "D").replace(" Day", "D")}`,
        itinerary: {
          "@type": "ItemList",
          numberOfItems: tour.highlights.length,
          itemListElement: tour.highlights.map((h, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: h,
          })),
        },
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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {touristTripJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
        />
      )}
      <TourDetailClient slug={slug} />
    </>
  );
}
