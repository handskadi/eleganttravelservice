import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/AuthContext";
import PathAwareShell from "@/components/PathAwareShell";
import { routing } from "@/i18n/routing";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  "@id": "https://www.eleganttravelservice.com/#organization",
  "name": "Elegant Travel Service",
  "alternateName": "ETS Morocco",
  "description": "Morocco's premier private travel agency. 100+ curated tours including Sahara desert, High Atlas treks, imperial cities and coastal escapes. Founded 2014 in Marrakech.",
  "url": "https://www.eleganttravelservice.com",
  "logo": { "@type": "ImageObject", "url": "https://www.eleganttravelservice.com/logo.png", "width": 200, "height": 60 },
  "image": "https://www.eleganttravelservice.com/destinations/sahara.webp",
  "telephone": "+212-524-000000",
  "email": "info@eleganttravel.ma",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Rue Youssef Ibn Tachfin",
    "addressLocality": "Marrakech",
    "postalCode": "40000",
    "addressCountry": "MA",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "31.6295", "longitude": "-7.9811" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "20:00",
  },
  "priceRange": "$$-$$$$",
  "currenciesAccepted": "USD, EUR, GBP, MAD",
  "paymentAccepted": "Credit Card, Bank Transfer, PayPal",
  "areaServed": { "@type": "Country", "name": "Morocco" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5" },
  "sameAs": [
    "https://www.facebook.com/ElegantTravelMA",
    "https://www.instagram.com/elegant_travel_ma",
    "https://twitter.com/ElegantTravelMA",
    "https://www.tripadvisor.com/elegant-travel-service",
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: { default: t("title"), template: `%s | Elegant Travel Service` },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Elegant Travel Service" }],
    creator: "Elegant Travel Service",
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_MA" : locale === "es" ? "es_ES" : locale === "de" ? "de_DE" : locale === "it" ? "it_IT" : "en_GB",
      url: "https://www.eleganttravelservice.com",
      siteName: "Elegant Travel Service",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: `https://www.eleganttravelservice.com`,
      languages: {
        "en": "https://www.eleganttravelservice.com",
        "fr": "https://www.eleganttravelservice.com/fr",
        "ar": "https://www.eleganttravelservice.com/ar",
        "es": "https://www.eleganttravelservice.com/es",
        "de": "https://www.eleganttravelservice.com/de",
        "it": "https://www.eleganttravelservice.com/it",
        "x-default": "https://www.eleganttravelservice.com",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <AppProvider>
              <PathAwareShell>
                {children}
              </PathAwareShell>
            </AppProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
