import type { Metadata } from "next";
import { tours } from "@/data/tours";
import ToursClient from "./ToursClient";

export const metadata: Metadata = {
  title: "Morocco Tours & Experiences | Elegant Travel Service",
  description:
    "Browse 20 hand-picked Morocco tours — Sahara desert adventures, High Atlas treks, imperial city tours, coastal escapes and luxury experiences. Book with confidence.",
  keywords: [
    "Morocco tours 2025",
    "best Morocco tours",
    "Morocco desert tours",
    "Morocco trekking tours",
    "Morocco city tours",
    "Morocco travel packages",
    "guided Morocco tours",
    "affordable Morocco tours",
    "luxury Morocco tours",
    "Morocco holiday",
    "Sahara desert tour",
    "Atlas mountains trek",
    "Marrakech tour",
    "Morocco adventure",
  ],
  openGraph: {
    title: "Morocco Tours & Experiences | Elegant Travel Service",
    description:
      "Browse hand-picked Morocco tours — Sahara desert, Atlas mountains, imperial cities and more.",
    type: "website",
  },
  alternates: { canonical: "https://www.eleganttravelservice.com/tours" },
};

const toursItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Morocco Tours",
  description: "Complete list of Morocco tours offered by Elegant Travel Service",
  url: "https://www.eleganttravelservice.com/tours",
  numberOfItems: tours.length,
  itemListElement: tours.slice(0, 10).map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.eleganttravelservice.com/tours/${t.id}`,
  })),
};

export default function ToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursItemListJsonLd) }}
      />
      <ToursClient />
    </>
  );
}
