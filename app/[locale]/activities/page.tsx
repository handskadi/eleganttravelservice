import { getTranslations } from "next-intl/server";
import { tours } from "@/data/tours";
import ActivitiesClient from "./ActivitiesClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
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
      title: t("metaTitle"),
      description: t("ogDescription"),
      type: "website",
    },
    alternates: {
      canonical: "https://www.eleganttravelservice.com/activities",
      languages: {
        en: "https://www.eleganttravelservice.com/activities",
        fr: "https://www.eleganttravelservice.com/fr/activities",
        ar: "https://www.eleganttravelservice.com/ar/activities",
        es: "https://www.eleganttravelservice.com/es/activities",
        de: "https://www.eleganttravelservice.com/de/activities",
        it: "https://www.eleganttravelservice.com/it/activities",
      },
    },
  };
}

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
