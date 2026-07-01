import { getTranslations } from "next-intl/server";
import ComplaintsClient from "./ComplaintsClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "complaints" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "https://www.eleganttravelservice.com/complaints",
      languages: {
        en: "https://www.eleganttravelservice.com/complaints",
        fr: "https://www.eleganttravelservice.com/fr/complaints",
        ar: "https://www.eleganttravelservice.com/ar/complaints",
        es: "https://www.eleganttravelservice.com/es/complaints",
        de: "https://www.eleganttravelservice.com/de/complaints",
        it: "https://www.eleganttravelservice.com/it/complaints",
      },
    },
  };
}

export default function ComplaintsPage() {
  return <ComplaintsClient />;
}
