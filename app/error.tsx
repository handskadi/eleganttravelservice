"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaRedo, FaHome } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-500 mb-6">
          <FaExclamationTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Something went wrong</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          We hit an unexpected error. Our team has been notified. Please try again or return home.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition shadow-lg shadow-amber-500/25 text-sm"
          >
            <FaRedo className="w-3.5 h-3.5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition text-sm"
          >
            <FaHome className="w-3.5 h-3.5" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
