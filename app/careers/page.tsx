import type { Metadata } from "next";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowRight, FaUsers, FaGlobeAfrica, FaHeart, FaStar } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Elegant Travel Service Morocco",
  description:
    "Join the Elegant Travel Service team. We're looking for passionate people to help us deliver world-class Morocco travel experiences.",
  alternates: { canonical: "https://www.eleganttravelservice.com/careers" },
};

const jobs = [
  {
    id: 1,
    title: "Senior Tour Guide — High Atlas & Desert",
    department: "Operations",
    location: "Marrakech / Field",
    type: "Full-time",
    level: "Senior",
    description: "Lead multi-day trekking and desert tours for international guests. Minimum 5 years guiding experience required. ONMT certification mandatory.",
    requirements: ["ONMT licensed guide", "Fluent English + French", "5+ years field experience", "First aid certified"],
  },
  {
    id: 2,
    title: "Travel Sales Consultant",
    department: "Sales",
    location: "Marrakech (Office)",
    type: "Full-time",
    level: "Mid",
    description: "Convert inbound leads into bookings via phone, WhatsApp, and email. Build personalised itineraries and upsell experiences to international travellers.",
    requirements: ["Tourism background preferred", "Excellent communication skills", "CRM experience", "Fluent English"],
  },
  {
    id: 3,
    title: "Social Media & Content Manager",
    department: "Marketing",
    location: "Remote / Marrakech",
    type: "Full-time",
    level: "Mid",
    description: "Manage Instagram, TikTok, YouTube, and Facebook across all brand accounts. Create Reels, write blog content, and run paid campaigns targeting UK, US, and EU markets.",
    requirements: ["2+ years social media experience", "Photography / video editing", "Canva or Adobe", "Analytics-driven mindset"],
  },
  {
    id: 4,
    title: "Luxury Experience Coordinator",
    department: "Operations",
    location: "Marrakech",
    type: "Full-time",
    level: "Mid",
    description: "Handle VIP bookings, private villa arrangements, private chef coordination, and bespoke experiences. Detail-obsessed and discreet.",
    requirements: ["Luxury hospitality background", "Attention to detail", "Strong supplier network", "French speaking preferred"],
  },
  {
    id: 5,
    title: "Web Developer (Next.js / TypeScript)",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Maintain and expand our booking platform. Work on new features, payment integrations, and performance improvements using Next.js 15 and TypeScript.",
    requirements: ["Next.js 15 proficiency", "TypeScript", "Tailwind CSS", "Prisma / Supabase experience a plus"],
  },
  {
    id: 6,
    title: "Customer Support Specialist",
    department: "Support",
    location: "Remote / Marrakech",
    type: "Part-time",
    level: "Junior",
    description: "Handle customer enquiries, resolve booking issues, and ensure every guest has a seamless pre and post-trip experience via chat, email, and WhatsApp.",
    requirements: ["Excellent written English", "Patient and empathetic", "Travel industry knowledge a plus", "Available evenings/weekends"],
  },
];

const perks = [
  { icon: FaGlobeAfrica, title: "Free Morocco Trips", desc: "All team members get one complimentary tour per year." },
  { icon: FaHeart, title: "Wellbeing Budget", desc: "MAD 3,000/year for gym, therapy, or wellness activities." },
  { icon: FaUsers, title: "International Team", desc: "Work with people from Morocco, UK, France, and beyond." },
  { icon: FaStar, title: "Performance Bonuses", desc: "Quarterly bonuses tied to company and personal targets." },
];

const DEPT_COLORS: Record<string, string> = {
  Operations: "bg-amber-50 text-amber-700 border-amber-200",
  Sales: "bg-blue-50 text-blue-700 border-blue-200",
  Marketing: "bg-purple-50 text-purple-700 border-purple-200",
  Technology: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Support: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">We&apos;re Hiring</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Join the Elegant Travel Team</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Help us create unforgettable experiences across Morocco. We&apos;re a passionate, growing team looking for people who love travel as much as we do.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        {/* Perks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Jobs */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-1">Open Positions</h2>
          <p className="text-sm text-slate-500">{jobs.length} roles currently available</p>
        </div>

        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 p-6 transition group">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${DEPT_COLORS[job.department] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                      {job.department}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">{job.level}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-800 mb-1 group-hover:text-amber-600 transition">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="w-3 h-3 text-amber-400" />{job.location}</span>
                    <span className="flex items-center gap-1"><FaClock className="w-3 h-3 text-amber-400" />{job.type}</span>
                    <span className="flex items-center gap-1"><FaBriefcase className="w-3 h-3 text-amber-400" />{job.department}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map(r => (
                      <span key={r} className="text-[11px] bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">{r}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/contact?subject=Job Application — ${encodeURIComponent(job.title)}`}
                  className="shrink-0 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-3 rounded-xl transition shadow-md shadow-amber-500/20 whitespace-nowrap self-start"
                >
                  Apply Now <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-extrabold text-white mb-2">Don&apos;t see your role?</h3>
          <p className="text-slate-400 text-sm mb-4 max-w-md mx-auto">We love meeting talented people proactively. Send us your CV and tell us how you&apos;d add value to the team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-6 py-3 rounded-xl transition">
            Send Spontaneous Application <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
