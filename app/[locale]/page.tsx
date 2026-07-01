import Hero from "@/components/Blocks/Hero";
import StatsSection from "@/components/Blocks/StatsSection";
import PopularDestinationsSection from "@/components/Blocks/PopularDestinationsSection";
import FeaturedTours from "@/components/Blocks/FeaturedTours";
import HotelsSection from "@/components/Blocks/HotelsSection";
import PriceSection from "@/components/Blocks/PriceSection";
import AboutSection from "@/components/Blocks/AboutSection";
import TestimonialSection from "@/components/Blocks/TestimonialSection";
import AppPromoSection from "@/components/Blocks/AppPromoSection";
import RecentBlogSection from "@/components/Blocks/RecentBlogSection";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Elegant Travel Service",
  description:
    "Morocco's premier travel agency specializing in desert tours, mountain treks, and cultural experiences",
  url: "https://www.eleganttravelservice.com",
  areaServed: "Morocco",
  priceRange: "$$-$$$$",
  telephone: "+212-522-000-000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.6295",
    longitude: "-7.9811",
  },
  sameAs: [
    "https://www.facebook.com/ElegantTravelMA",
    "https://www.instagram.com/elegant_travel_ma",
    "https://twitter.com/ElegantTravelMA",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Elegant Travel Service",
  url: "https://www.eleganttravelservice.com",
  description:
    "Morocco's premier travel agency — desert tours, mountain treks, luxury riads and cultural experiences",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.eleganttravelservice.com/tours?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <StatsSection />
      <PopularDestinationsSection />
      <FeaturedTours />
      <PriceSection />
      <HotelsSection />
      <AboutSection />
      <TestimonialSection />
      <AppPromoSection />
      <RecentBlogSection />
    </>
  );
}
