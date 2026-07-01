import type { Metadata } from "next";
import Link from "next/link";
import { FaLock, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Privacy Policy | Elegant Travel Service Morocco",
  description:
    "Read our privacy policy to understand how Elegant Travel Service collects, uses and protects your personal data.",
  alternates: { canonical: "https://www.eleganttravelservice.com/privacy" },
};

const sections = [
  {
    id: "1",
    title: "Who We Are",
    content: `Elegant Travel Service ("we", "our", "us") is a travel agency based in Marrakech, Morocco. Our registered office is at 12 Rue Youssef Ibn Tachfin, Marrakech 40000.

We operate the website eleganttravel.ma and associated booking platform. We are the data controller for personal data collected through this site. Contact us at privacy@eleganttravel.ma for any data-related enquiries.`,
  },
  {
    id: "2",
    title: "What Data We Collect",
    content: `We collect the following categories of personal data:

Identity data: Name, username, date of birth, nationality.
Contact data: Email address, phone number, postal address.
Booking data: Tour selections, travel dates, group size, special requirements, dietary or medical information you provide.
Financial data: Payment card details (processed by our secure payment provider; we do not store full card numbers).
Technical data: IP address, browser type, device identifiers, cookies, and usage data.
Communications data: Emails, chat messages, and enquiry forms submitted through our platform.

We collect this data when you register an account, make a booking, submit an enquiry, sign up for our newsletter, or browse our website.`,
  },
  {
    id: "3",
    title: "How We Use Your Data",
    content: `We use your personal data for the following purposes:

• To process and manage your bookings and payments
• To communicate booking confirmations, itinerary details, and pre-trip information
• To send marketing emails (only with your consent, and you can unsubscribe at any time)
• To respond to enquiries and provide customer support
• To improve our website and service through analytics
• To comply with legal obligations
• To detect and prevent fraud

Our legal basis for processing includes: contract performance (booking), legitimate interests (analytics, fraud prevention), legal obligation (financial records), and consent (marketing communications).`,
  },
  {
    id: "4",
    title: "Sharing Your Data",
    content: `We share your personal data with third parties only where necessary:

Tour operators and guides: To fulfil your booked experience, we share relevant itinerary and contact details with the guide or operator assigned to your tour.
Accommodation providers: We share guest names, dates, and special requirements with hotels and riads.
Payment processors: Payment data is handled by our PCI-DSS certified payment partner.
Technology providers: We use cloud services (hosting, email, analytics) whose providers access data only as processors under contract.
Legal obligations: We may disclose data to law enforcement or regulators where required by applicable law.

We do not sell your personal data to any third party.`,
  },
  {
    id: "5",
    title: "International Transfers",
    content: `As a Moroccan company working with international partners, some of your data may be transferred outside Morocco. Where we transfer data to countries without an equivalent level of data protection, we put in place appropriate safeguards (such as standard contractual clauses) to ensure your data is protected.`,
  },
  {
    id: "6",
    title: "Data Retention",
    content: `We retain your personal data for as long as necessary to fulfil the purposes we collected it for, including:

• Booking records: 7 years (legal/accounting obligation)
• Marketing preferences: Until you unsubscribe or request erasure
• Account data: For the duration of your account plus 2 years after inactivity
• Payment records: 7 years

After the applicable retention period, data is securely deleted or anonymised.`,
  },
  {
    id: "7",
    title: "Cookies",
    content: `We use the following types of cookies:

Strictly necessary cookies: Required for the website and booking system to function. Cannot be disabled.
Analytical cookies: Help us understand how visitors use our site (e.g. Google Analytics). We anonymise IP addresses.
Marketing cookies: Used to track the effectiveness of our advertising. Only placed with your consent.

You can manage cookie preferences in your browser settings or via our cookie banner. Disabling certain cookies may affect your ability to use parts of our site.`,
  },
  {
    id: "8",
    title: "Your Rights",
    content: `Under applicable data protection law, you have the following rights:

• Right of access: Request a copy of the personal data we hold about you
• Right to rectification: Ask us to correct inaccurate or incomplete data
• Right to erasure: Ask us to delete your data in certain circumstances
• Right to restrict processing: Ask us to temporarily stop processing your data
• Right to data portability: Receive your data in a machine-readable format
• Right to object: Object to processing based on legitimate interests, including marketing
• Right to withdraw consent: At any time, where processing is based on consent

To exercise any of these rights, email privacy@eleganttravel.ma. We will respond within 30 days.`,
  },
  {
    id: "9",
    title: "Security",
    content: `We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, loss, or destruction.

These measures include SSL/TLS encryption, access controls, regular security reviews, and staff training. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

If we become aware of a data breach that affects your rights and freedoms, we will notify you and the relevant supervisory authority as required by law.`,
  },
  {
    id: "10",
    title: "Contact & Complaints",
    content: `If you have questions about this Privacy Policy or how we handle your data, please contact our Privacy team:

Email: privacy@eleganttravel.ma
Address: 12 Rue Youssef Ibn Tachfin, Marrakech 40000, Morocco

If you are not satisfied with our response, you have the right to lodge a complaint with the Moroccan data protection authority (CNDP) or your local supervisory authority if you are based in the EU/UK.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            How we collect, use, and protect your personal data when you use our services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs">
            <FaCalendarAlt className="w-3.5 h-3.5" />
            Last updated: June 2025
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Trust box */}
        <div className="bg-slate-900 rounded-2xl p-6 flex gap-4 mb-10 text-white">
          <FaLock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm mb-1">Your Privacy Matters</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We do not sell your data. We only use it to provide and improve our services. You can request deletion of your data at any time by contacting us at{" "}
              <a href="mailto:privacy@eleganttravel.ma" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                <FaEnvelope className="w-3 h-3" /> privacy@eleganttravel.ma
              </a>.
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
          <h2 className="font-bold text-slate-700 text-sm uppercase tracking-widest mb-3">Contents</h2>
          <ol className="space-y-1.5">
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#priv-${s.id}`} className="text-sm text-amber-600 hover:text-amber-700 hover:underline">
                  {s.id}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(s => (
            <section key={s.id} id={`priv-${s.id}`} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-amber-500 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">{s.id}</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-400">
          Questions? <Link href="/contact" className="text-amber-600 hover:underline">Contact our Privacy team</Link>
        </div>
      </div>
    </div>
  );
}
