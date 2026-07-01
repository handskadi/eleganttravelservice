"use client";

import { useState } from "react";
import { FaExclamationTriangle, FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function ComplaintsClient() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", bookingId: "",
    type: "", description: "", resolution: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">We Care</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Complaints & Feedback</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We strive to exceed every expectation. If something went wrong, please let us know and we&apos;ll make it right.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Info */}
          <div className="space-y-5">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <FaExclamationTriangle className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Our Commitment</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every complaint is acknowledged within 24 hours and resolved within 5 working days. We take all feedback seriously and use it to improve our service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-800 text-sm">Urgent Issues?</h3>
              <p className="text-xs text-slate-500">For issues requiring immediate attention during your trip:</p>
              <a href="tel:+212524000000" className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700">
                <FaPhone className="w-4 h-4" /> +212 5 24 00 00 00
              </a>
              <a href="mailto:support@eleganttravel.ma" className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700">
                <FaEnvelope className="w-4 h-4" /> support@eleganttravel.ma
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-2">Response Times</h3>
              <div className="space-y-2 text-xs">
                {[
                  ["Acknowledgement", "Within 24 hours"],
                  ["Investigation", "2–3 working days"],
                  ["Resolution", "Within 5 working days"],
                  ["Refund (if applicable)", "7–14 working days"],
                ].map(([label, time]) => (
                  <div key={label} className="flex justify-between text-slate-600">
                    <span>{label}</span>
                    <span className="font-semibold text-amber-600">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Complaint Received</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto mb-2">
                    Your complaint reference is <strong className="text-amber-600">CMP-{Date.now().toString().slice(-6)}</strong>.
                  </p>
                  <p className="text-slate-400 text-sm">We will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-slate-800 mb-6">Submit a Complaint</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                        { key: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                        { key: "phone", label: "Phone Number", type: "tel", placeholder: "+212 6 00 00 00 00", required: false },
                        { key: "bookingId", label: "Booking Reference", type: "text", placeholder: "e.g. BK-001", required: false },
                      ].map(({ key, label, type, placeholder, required }) => (
                        <div key={key}>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}{required && " *"}</label>
                          <input
                            type={type}
                            required={required}
                            value={(form as Record<string, string>)[key]}
                            onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                            placeholder={placeholder}
                            className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Complaint Type *</label>
                      <select
                        required
                        value={form.type}
                        onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                        className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition"
                      >
                        <option value="">Select complaint type</option>
                        <option>Tour quality</option>
                        <option>Guide conduct</option>
                        <option>Accommodation issue</option>
                        <option>Transport problem</option>
                        <option>Billing dispute</option>
                        <option>Itinerary not as described</option>
                        <option>Safety concern</option>
                        <option>Customer service</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.description}
                        onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                        placeholder="Please describe what happened in as much detail as possible, including dates, times, and names of staff involved."
                        className="w-full border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Desired Resolution</label>
                      <textarea
                        rows={2}
                        value={form.resolution}
                        onChange={e => setForm(p => ({ ...p, resolution: e.target.value }))}
                        placeholder="What outcome would you consider a fair resolution? (e.g. refund, apology, replacement service)"
                        className="w-full border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
                    >
                      Submit Complaint
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
