import { getTranslations } from "next-intl/server";
import ContactClient from "./ContactClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "https://www.eleganttravelservice.com/contact",
      languages: {
        en: "https://www.eleganttravelservice.com/contact",
        fr: "https://www.eleganttravelservice.com/fr/contact",
        ar: "https://www.eleganttravelservice.com/ar/contact",
        es: "https://www.eleganttravelservice.com/es/contact",
        de: "https://www.eleganttravelservice.com/de/contact",
        it: "https://www.eleganttravelservice.com/it/contact",
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
