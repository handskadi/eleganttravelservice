import type { Metadata } from "next";
import Link from "next/link";
import { FaShieldAlt, FaCalendarAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Terms & Conditions | Elegant Travel Service Morocco",
  description:
    "Read the terms and conditions for booking tours and travel services with Elegant Travel Service.",
  alternates: { canonical: "https://www.eleganttravelservice.com/terms" },
};

const sections = [
  {
    id: "1",
    title: "Acceptance of Terms",
    content: `By accessing or using the Elegant Travel Service website and booking platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Service.

These Terms apply to all visitors, users, and customers who access or use the Service. Elegant Travel Service reserves the right to update these Terms at any time. Your continued use of the Service following any changes constitutes your acceptance of the new Terms.`,
  },
  {
    id: "2",
    title: "Booking and Payment",
    content: `When you make a booking through our platform, you are entering into a contract with Elegant Travel Service. All bookings are subject to availability and confirmation.

A non-refundable deposit of 20% is required to secure your booking. The remaining balance is due 30 days prior to your departure date. For bookings made within 30 days of departure, full payment is required at the time of booking.

We accept payment by major credit/debit cards and bank transfer. All prices are quoted in USD/EUR/MAD and include applicable taxes unless stated otherwise.`,
  },
  {
    id: "3",
    title: "Cancellation Policy",
    content: `Cancellations must be made in writing by email to info@eleganttravel.ma.

The following cancellation fees apply:
• 60+ days before departure: Deposit forfeited only
• 30–59 days before departure: 50% of total booking cost
• 15–29 days before departure: 75% of total booking cost
• 14 days or fewer: No refund

In the event of a force majeure (natural disaster, political unrest, pandemic), we will work with you to reschedule or provide a credit note. We strongly recommend purchasing travel insurance.`,
  },
  {
    id: "4",
    title: "Changes to Itinerary",
    content: `Elegant Travel Service reserves the right to make minor changes to itineraries where circumstances beyond our control make this necessary (weather, road conditions, local events). We will always inform you of significant changes as soon as reasonably practicable.

If a significant change is made prior to departure, you have the right to accept the change, receive a full refund, or transfer to an alternative tour of equal or lesser value.`,
  },
  {
    id: "5",
    title: "Health, Safety and Your Responsibilities",
    content: `You are responsible for ensuring you are medically and physically fit for your chosen tour. You must inform us of any medical conditions, dietary requirements, or mobility restrictions at the time of booking.

You agree to follow the instructions of your guide at all times. Elegant Travel Service reserves the right to exclude any participant from a tour who poses a risk to themselves or others. No refund will be issued in such cases.

All participants must carry valid travel insurance that covers medical expenses, evacuation, and cancellation. We reserve the right to request proof of insurance.`,
  },
  {
    id: "6",
    title: "Passports, Visas and Travel Documents",
    content: `It is your responsibility to ensure you hold a valid passport and any necessary visas for entry to Morocco and any transit countries. Elegant Travel Service accepts no liability for any expenses incurred as a result of failure to obtain correct documentation.

Most EU, UK, US, and Canadian passport holders can enter Morocco visa-free for up to 90 days. We recommend checking your country's current requirements with the Moroccan embassy.`,
  },
  {
    id: "7",
    title: "Liability",
    content: `Elegant Travel Service acts as an agent for hotels, transport providers, and activity operators. While we carefully select our partners, we are not liable for any acts or omissions of third-party service providers.

Our total liability to you in connection with any tour shall not exceed the amount you paid for that tour. We are not liable for indirect or consequential losses, loss of enjoyment, or losses not directly related to our core obligations.

Nothing in these Terms limits our liability for death or personal injury caused by our negligence.`,
  },
  {
    id: "8",
    title: "Privacy and Data",
    content: `Your privacy matters to us. We collect and process your personal data in accordance with our Privacy Policy. By making a booking, you consent to the collection and use of your data as described in our Privacy Policy.

We may share your data with third-party tour operators, accommodation providers, and transport companies solely for the purpose of fulfilling your booking.`,
  },
  {
    id: "9",
    title: "Intellectual Property",
    content: `All content on this website, including but not limited to text, images, graphics, logos, and video, is the property of Elegant Travel Service or its content suppliers and is protected by Moroccan and international copyright laws.

You may not reproduce, redistribute, or republish any content from this website without prior written consent from Elegant Travel Service.`,
  },
  {
    id: "10",
    title: "Governing Law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Kingdom of Morocco. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.

If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Please read these terms carefully before making a booking with Elegant Travel Service.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs">
            <FaCalendarAlt className="w-3.5 h-3.5" />
            Last updated: June 2025
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 mb-10">
          <FaShieldAlt className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 text-sm mb-1">Important Notice</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement between you and Elegant Travel Service. By completing a booking you confirm you have read, understood, and agreed to these Terms.
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
          <h2 className="font-bold text-slate-700 text-sm uppercase tracking-widest mb-3">Contents</h2>
          <ol className="space-y-1.5">
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#section-${s.id}`} className="text-sm text-amber-600 hover:text-amber-700 hover:underline">
                  {s.id}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(s => (
            <section key={s.id} id={`section-${s.id}`} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-amber-500 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">{s.id}</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-400">
          Questions about these Terms? <Link href="/contact" className="text-amber-600 hover:underline">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
