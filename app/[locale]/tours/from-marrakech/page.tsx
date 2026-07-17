import type { Metadata } from "next";
import { FromCityPage } from "../_FromCityPage";

export const metadata: Metadata = {
  title: "Marrakech Tours 2025 | Guided Tours from Marrakech | Elegant Travel Service",
  description:
    "Browse guided tours from Marrakech — Sahara desert escapes, High Atlas treks, coastal drives to Essaouira and Agadir. Private tours, small groups, expert guides.",
  keywords: [
    "Marrakech tours",
    "tours from Marrakech Morocco",
    "Marrakech travel packages",
    "guided Marrakech tours 2025",
    "Marrakech day trips",
    "Morocco tours from Marrakech",
    "Marrakech to Sahara tour",
    "Marrakech desert tour",
    "High Atlas trek from Marrakech",
    "Essaouira day trip Marrakech",
    "3 days Sahara from Marrakech",
    "Toubkal summit expedition",
    "Marrakech Fes 5 day tour",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-marrakech",
  },
  openGraph: {
    title: "Marrakech Tours 2025 | Guided Tours from Marrakech | Elegant Travel Service",
    description:
      "Browse guided tours from Marrakech — Sahara desert escapes, High Atlas treks, coastal drives to Essaouira and Agadir. Private tours, small groups, expert guides.",
    type: "website",
    images: [{ url: "/tours/sahara-3day-marrakech.jpg", alt: "Sahara Desert Tour from Marrakech" }],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default async function ToursFromMarrakech({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FromCityPage locale={locale} citySlug="marrakech" />;
}
