import type { Metadata } from "next";
import ComplaintsClient from "./ComplaintsClient";

export const metadata: Metadata = {
  title: "Complaints | Elegant Travel Service Morocco",
  description:
    "Submit a complaint or feedback to Elegant Travel Service. We acknowledge all complaints within 24 hours and resolve them within 5 working days.",
  alternates: { canonical: "https://www.eleganttravelservice.com/complaints" },
};

export default function ComplaintsPage() {
  return <ComplaintsClient />;
}
