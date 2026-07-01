import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Elegant Travel Service Morocco",
  description:
    "Get in touch with the Elegant Travel Service team. Plan a custom Morocco itinerary, ask about our tours, or reach our 24/7 on-ground support.",
  alternates: { canonical: "https://www.eleganttravelservice.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
