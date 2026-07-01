import type { Metadata } from "next";
import { FromCityPage } from "../_FromCityPage";

export const metadata: Metadata = {
  title: "Tangier Tours 2025 | Guided Tours from Tangier | Elegant Travel Service",
  description:
    "Browse guided tours from Tangier — northern Morocco loop, Chefchaouen blue city, Tetouan, Fes circuits and the full Morocco traverse. Private tours from Africa's gateway.",
  keywords: [
    "Tangier tours",
    "tours from Tangier Morocco",
    "Tangier travel packages",
    "guided Tangier tours 2025",
    "Tangier day trips",
    "Morocco tours from Tangier",
    "Tangier to Marrakech tour",
    "Tangier Chefchaouen Fes tour",
    "northern Morocco tours",
    "Tangier Tetouan tour",
    "7 days northern Morocco loop",
    "Asilah coast tour from Tangier",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-tangier",
  },
  openGraph: {
    title: "Tangier Tours 2025 | Guided Tours from Tangier | Elegant Travel Service",
    description:
      "Browse guided tours from Tangier — northern Morocco loop, Chefchaouen blue city, Tetouan, Fes circuits and the full Morocco traverse. Private tours from Africa's gateway.",
    type: "website",
    images: [{ url: "/destinations/sahara.webp", alt: "Morocco Tour from Tangier" }],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default async function ToursFromTangier({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FromCityPage locale={locale} citySlug="tangier" />;
}
