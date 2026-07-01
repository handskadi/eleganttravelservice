import { getTranslations } from "next-intl/server";
import { tours } from "@/data/tours";
import ToursClient from "./ToursClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tours" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
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
      title: t("metaTitle"),
      description: t("ogDescription"),
      type: "website",
    },
    alternates: {
      canonical: "https://www.eleganttravelservice.com/tours",
      languages: {
        en: "https://www.eleganttravelservice.com/tours",
        fr: "https://www.eleganttravelservice.com/fr/tours",
        ar: "https://www.eleganttravelservice.com/ar/tours",
        es: "https://www.eleganttravelservice.com/es/tours",
        de: "https://www.eleganttravelservice.com/de/tours",
        it: "https://www.eleganttravelservice.com/it/tours",
      },
    },
  };
}

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
