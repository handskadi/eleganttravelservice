import type { Metadata } from "next";
import { FromCityPage } from "../_FromCityPage";

export const metadata: Metadata = {
  title: "Fes Tours 2025 | Guided Tours from Fes | Elegant Travel Service",
  description:
    "Browse guided tours from Fes — Sahara desert escapes, Chefchaouen blue city, imperial city circuits and luxury riads. Private tours from Morocco's oldest city.",
  keywords: [
    "Fes tours",
    "tours from Fes Morocco",
    "Fes travel packages",
    "guided Fes tours 2025",
    "Fes day trips",
    "Morocco tours from Fes",
    "Fes to Sahara tour",
    "Fes Chefchaouen tour",
    "Fes Meknes tour",
    "3 days Fes to Sahara",
    "imperial cities tour from Fes",
    "luxury Fes tours",
    "Fes desert loop",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-fes",
  },
  openGraph: {
    title: "Fes Tours 2025 | Guided Tours from Fes | Elegant Travel Service",
    description:
      "Browse guided tours from Fes — Sahara desert escapes, Chefchaouen blue city, imperial city circuits and luxury riads. Private tours from Morocco's oldest city.",
    type: "website",
    images: [{ url: "/tours/sahara-3day-marrakech.jpg", alt: "Morocco Tour from Fes" }],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default async function ToursFromFes({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FromCityPage locale={locale} citySlug="fes" />;
}
