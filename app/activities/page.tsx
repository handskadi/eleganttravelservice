import type { Metadata } from "next";
import { tours } from "@/data/tours";
import ActivitiesClient from "./ActivitiesClient";

export const metadata: Metadata = {
  title: "Morocco Activities & Adventures | Elegant Travel Service",
  description:
    "Discover Morocco's best activities and day trips — quad biking in the Agafay desert, sunrise hot air balloon rides over Marrakech, Sahara camel treks, traditional hammam rituals, Marrakech cooking classes, and guided food tours. Book authentic Morocco experiences from half a day to a full day, with expert local guides and hassle-free transport from your riad.",
  keywords: [
    "Morocco activities",
    "things to do in Morocco",
    "Morocco adventures",
    "Morocco experiences",
    "Morocco outdoor activities",
    "quad biking Morocco",
    "hot air balloon Marrakech",
    "camel trek Morocco",
    "Marrakech day trips",
    "Morocco half day tours",
    "hot air balloon Morocco",
    "hammam Marrakech",
    "Sahara camel trek",
    "Morocco cooking class",
    "Marrakech activities 2025",
  ],
  openGraph: {
    title: "Morocco Activities & Adventures | Elegant Travel Service",
    description:
      "Curated Morocco activities — desert adventures, cultural tours, wellness experiences and coastal escapes.",
    type: "website",
  },
  alternates: { canonical: "https://www.eleganttravelservice.com/activities" },
};

const SHORT_DURATIONS = new Set(["2 Hours", "3 Hours", "4 Hours", "Half Day", "1 Day"]);

export default function ActivitiesPage() {
  const activities = tours.filter((t) => SHORT_DURATIONS.has(t.duration));
  const activitiesItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Morocco Activities & Day Trips",
    "url": "https://www.eleganttravelservice.com/activities",
    "numberOfItems": activities.length,
    "itemListElement": activities.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": t.title,
      "url": `https://www.eleganttravelservice.com/tours/${t.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activitiesItemListJsonLd) }}
      />
      <ActivitiesClient />
    </>
  );
}
