"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTripadvisor,
  FaShieldAlt,
  FaHeadset,
  FaCompass,
  FaMap,
  FaBed,
  FaQuestion,
  FaUsers,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FormState {
  name: string;
  email: string;
  phone: string;
  travelFrom: string;
  travelTo: string;
  groupSize: string;
  subject: string;
  message: string;
  callback: boolean;
}

const groupSizeOptions = ["1", "2", "3-5", "6-10", "10+"];

const inputCls =
  "w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition bg-white";

const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  travelFrom: "",
  travelTo: "",
  groupSize: "",
  subject: "",
  message: "",
  callback: false,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ContactClient() {
  const t = useTranslations("contact");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [activeTopic, setActiveTopic] = useState("");

  const topics = [
    { label: t("topicTourEnquiry"), icon: FaCompass },
    { label: t("topicCustomItinerary"), icon: FaMap },
    { label: t("topicGroupTravel"), icon: FaUsers },
    { label: t("topicHotelRiad"), icon: FaBed },
    { label: t("topicOther"), icon: FaQuestion },
  ];

  const handleTopicSelect = (label: string) => {
    setActiveTopic(label);
    setForm((prev) => ({ ...prev, subject: label }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — Hero                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: "url('/tours/sahara-3day-marrakech.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1c1005 75%, #78350f 100%)",
            opacity: 0.88,
          }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 text-center py-16">
          <span className="section-label inline-block mb-5 bg-amber-500/15 border border-amber-500/30 text-amber-400">
            {t("heroLabel")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            {t("heroHeading")}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            {t("heroSubtitle")}
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-amber-300 font-medium">
              <FaClock className="w-4 h-4 shrink-0" />
              {t("trustReply")}
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-amber-300 font-medium">
              <FaShieldAlt className="w-4 h-4 shrink-0" />
              {t("trustSecure")}
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-amber-300 font-medium">
              <FaWhatsapp className="w-4 h-4 shrink-0" />
              {t("trustWhatsApp")}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — Topic Picker                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">
            {t("topicPickerLabel")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map(({ label, icon: Icon }) => {
              const isActive = activeTopic === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleTopicSelect(label)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition
                    ${
                      isActive
                        ? "bg-amber-500 border-amber-500 text-white shadow-md shadow-amber-500/20"
                        : "bg-white border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — 2-column: Form + Info                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ---- Left: Form (2/3) ---------------------------------------- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t("successTitle")}</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    {t("successMessage")}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-slate-800 mb-6">{t("formHeading")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelCls}>{t("labelName")}</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t("placeholderName")}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelCls}>{t("labelEmail")}</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t("placeholderEmail")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Travel Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="phone" className={labelCls}>{t("labelPhone")}</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+212 6 00 00 00 00"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="travelFrom" className={labelCls}>{t("labelTravelFrom")}</label>
                        <input
                          id="travelFrom"
                          name="travelFrom"
                          type="date"
                          value={form.travelFrom}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="travelTo" className={labelCls}>{t("labelTravelTo")}</label>
                        <input
                          id="travelTo"
                          name="travelTo"
                          type="date"
                          value={form.travelTo}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Row 3: Group Size + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="groupSize" className={labelCls}>{t("labelGroupSize")}</label>
                        <select
                          id="groupSize"
                          name="groupSize"
                          value={form.groupSize}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">{t("groupSizePlaceholder")}</option>
                          {groupSizeOptions.map((o) => (
                            <option key={o} value={o}>
                              {o} {o === "1" ? t("groupSizePerson") : t("groupSizePeople")}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelCls}>{t("labelSubject")}</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">{t("subjectPlaceholder")}</option>
                          {topics.map(({ label }) => (
                            <option key={label} value={label}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelCls}>{t("labelMessage")}</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("placeholderMessage")}
                        className="w-full border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition resize-none"
                      />
                    </div>

                    {/* Callback checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        name="callback"
                        type="checkbox"
                        checked={form.callback}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-amber-500 rounded cursor-pointer"
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-800 transition">
                        {t("callbackLabel")}
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
                    >
                      {t("submitButton")}
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ---- Right: Info sidebar (1/3) -------------------------------- */}
          <div className="lg:col-span-1 space-y-6">

            {/* Talk to Us */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-4">{t("talkToUs")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      12 Rue Youssef Ibn Tachfin, Marrakech 40000
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <FaPhone className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">+212 5 24 00 00 00</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t("officeHours")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <FaEnvelope className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">info@eleganttravel.ma</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t("emailReply")}</p>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/212524000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition shadow-md shadow-green-500/20 text-sm"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                {t("whatsAppCta")}
                <HiArrowRight className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>

            {/* Our Offices */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-4">{t("ourOffices")}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Marrakech{" "}
                      <span className="text-xs font-normal text-amber-600 ml-1">{t("mainOffice")}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Rue Youssef Ibn Tachfin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Fes{" "}
                      <span className="text-xs font-normal text-slate-400 ml-1">{t("northOffice")}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Quartier Zitoun, Fes Medina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                {t("followUs")}
              </p>
              <div className="flex gap-3">
                {(
                  [
                    { Icon: FaInstagram, label: "Instagram" },
                    { Icon: FaFacebookF, label: "Facebook" },
                    { Icon: FaTripadvisor, label: "TripAdvisor" },
                  ] as { Icon: React.ComponentType<{ className?: string }>; label: string }[]
                ).map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 text-slate-500 hover:text-amber-600 rounded-xl flex items-center justify-center transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <FaClock className="w-4 h-4 text-amber-600 shrink-0" />
                <p className="text-sm font-bold text-amber-800">{t("responseTimeTitle")}</p>
              </div>
              <p className="text-xs text-amber-700 mb-3">
                {t("responseTimeDesc")}
              </p>
              {/* Response bar indicator */}
              <div className="relative h-2 bg-amber-200 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-amber-500 rounded-full"
                  style={{ width: "20%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-amber-600 mt-1 font-medium">
                <span>{t("responseTimeUnder")}</span>
                <span>{t("responseTimeMax")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — Map Placeholder                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pb-16">
        <div className="h-64 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-400 overflow-hidden relative">
          {/* Grid lines for map feel */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,116,139,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-semibold text-slate-600">
              12 Rue Youssef Ibn Tachfin, Marrakech
            </p>
            <p className="text-xs text-slate-400">Morocco</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — Why Book With Us                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label inline-block mb-4 bg-amber-500/10 border-amber-500/25 text-amber-600">
              {t("whyChooseLabel")}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              {t("whyChooseHeading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <FaShieldAlt className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 mb-2">{t("card1Title")}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("card1Desc")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <FaHeadset className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 mb-2">{t("card2Title")}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("card2Desc")}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 mb-2">{t("card3Title")}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("card3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
