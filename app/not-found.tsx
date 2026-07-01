"use client";

import Link from "next/link";
import { FaCompass, FaHome, FaSearch, FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-100 text-amber-600 mb-6">
          <FaCompass className="w-10 h-10" />
        </div>

        <h1 className="text-8xl font-black text-slate-900 mb-2 tracking-tight">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Lost in the Desert?</h2>
        <p className="text-slate-500 text-base leading-relaxed mb-8">
          This page doesn&apos;t exist — but Morocco&apos;s most breathtaking adventures are just one click away.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition shadow-lg shadow-amber-500/25 text-sm"
          >
            <FaHome className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition text-sm"
          >
            <FaSearch className="w-4 h-4" />
            Browse Tours
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 pt-10 border-t border-slate-200">
          <p className="text-xs text-slate-400 mb-4 font-medium uppercase tracking-widest">Popular pages</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/destinations", label: "Destinations" },
              { href: "/activities", label: "Activities" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1 text-xs text-slate-600 bg-white border border-slate-200 hover:border-amber-300 hover:text-amber-600 px-4 py-2 rounded-full transition"
              >
                <FaStar className="w-2.5 h-2.5 text-amber-400" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
