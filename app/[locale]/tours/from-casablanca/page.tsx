import type { Metadata } from "next";
import { FromCityPage } from "../_FromCityPage";

export const metadata: Metadata = {
  title: "Casablanca Tours 2025 | Guided Tours from Casablanca | Elegant Travel Service",
  description:
    "Browse guided tours from Casablanca — imperial city loops, Sahara desert adventures, Atlantic coastal drives and luxury circuits. Private tours, certified guides.",
  keywords: [
    "Casablanca tours",
    "tours from Casablanca Morocco",
    "Casablanca travel packages",
    "guided Casablanca tours 2025",
    "Casablanca day trips",
    "Morocco tours from Casablanca",
    "Casablanca to Sahara tour",
    "Casablanca to Fes tour",
    "Atlantic coast road trip Morocco",
    "Casablanca imperial cities tour",
    "8 days Morocco from Casablanca",
    "Casablanca Marrakech tour",
    "luxury Morocco from Casablanca",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-casablanca",
  },
  openGraph: {
    title: "Casablanca Tours 2025 | Guided Tours from Casablanca | Elegant Travel Service",
    description:
      "Browse guided tours from Casablanca — imperial city loops, Sahara desert adventures, Atlantic coastal drives and luxury circuits. Private tours, certified guides.",
    type: "website",
    images: [{ url: "/destinations/atlas.webp", alt: "Morocco Tour from Casablanca" }],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default async function ToursFromCasablanca({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FromCityPage locale={locale} citySlug="casablanca" />;
}
