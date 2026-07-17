import type { Metadata } from "next";
import { FromCityPage } from "../_FromCityPage";

export const metadata: Metadata = {
  title: "Agadir Tours 2025 | Guided Tours from Agadir | Elegant Travel Service",
  description:
    "Browse guided tours from Agadir — Anti-Atlas Berber villages, surf camp at Taghazout, coastal drives and mountain treks. Private tours from Morocco's beach capital.",
  keywords: [
    "Agadir tours",
    "tours from Agadir Morocco",
    "Agadir travel packages",
    "guided Agadir tours 2025",
    "Agadir day trips",
    "Morocco tours from Agadir",
    "Agadir surf camp tour",
    "Anti-Atlas trek from Agadir",
    "Taghazout surf tour",
    "Agadir beach tours",
    "Berber villages from Agadir",
    "Agadir Tiznit tour",
  ],
  alternates: {
    canonical: "https://www.eleganttravelservice.com/tours/from-agadir",
  },
  openGraph: {
    title: "Agadir Tours 2025 | Guided Tours from Agadir | Elegant Travel Service",
    description:
      "Browse guided tours from Agadir — Anti-Atlas Berber villages, surf camp at Taghazout, coastal drives and mountain treks. Private tours from Morocco's beach capital.",
    type: "website",
    images: [{ url: "/tours/atlas-mountains-trek-3day.jpg", alt: "Morocco Tour from Agadir" }],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default async function ToursFromAgadir({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FromCityPage locale={locale} citySlug="agadir" />;
}
