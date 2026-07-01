"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaExclamationTriangle, FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function ComplaintsClient() {
  const locale = useLocale();
  const t = useTranslations("complaints");
  const isRTL = locale === "ar";

  const [form, setForm] = useState({
    name: "", email: "", phone: "", bookingId: "",
    type: "", description: "", resolution: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const responseTimes = [
    [t("promise1Title"), "24h"],
    [t("promise2Title"), "5 " + (locale === "ar" ? "أيام" : locale === "fr" ? "jours" : locale === "de" ? "Tage" : locale === "es" ? "días" : locale === "it" ? "giorni" : "days")],
    ["Investigation", locale === "ar" ? "2-3 أيام" : locale === "fr" ? "2-3 jours" : locale === "de" ? "2-3 Tage" : locale === "es" ? "2-3 días" : locale === "it" ? "2-3 giorni" : "2-3 working days"],
    [locale === "ar" ? "الاسترداد" : locale === "fr" ? "Remboursement" : locale === "de" ? "Erstattung" : locale === "es" ? "Reembolso" : locale === "it" ? "Rimborso" : "Refund", locale === "ar" ? "7-14 يوم" : locale === "fr" ? "7-14 jours" : locale === "de" ? "7-14 Tage" : locale === "es" ? "7-14 días" : locale === "it" ? "7-14 giorni" : "7-14 working days"],
  ];

  const complaintTypes = [
    locale === "ar" ? "جودة الجولة" : locale === "fr" ? "Qualité de la visite" : locale === "de" ? "Tourqualität" : locale === "es" ? "Calidad del tour" : locale === "it" ? "Qualità del tour" : "Tour quality",
    locale === "ar" ? "سلوك المرشد" : locale === "fr" ? "Conduite du guide" : locale === "de" ? "Verhalten des Guides" : locale === "es" ? "Conducta del guía" : locale === "it" ? "Condotta della guida" : "Guide conduct",
    locale === "ar" ? "مشكلة الإقامة" : locale === "fr" ? "Problème d'hébergement" : locale === "de" ? "Unterkunftsproblem" : locale === "es" ? "Problema de alojamiento" : locale === "it" ? "Problema alloggio" : "Accommodation issue",
    locale === "ar" ? "مشكلة النقل" : locale === "fr" ? "Problème de transport" : locale === "de" ? "Transportproblem" : locale === "es" ? "Problema de transporte" : locale === "it" ? "Problema trasporti" : "Transport problem",
    locale === "ar" ? "نزاع الفوترة" : locale === "fr" ? "Litige de facturation" : locale === "de" ? "Abrechnungsstreit" : locale === "es" ? "Disputa de facturación" : locale === "it" ? "Disputa di fatturazione" : "Billing dispute",
    locale === "ar" ? "الجولة لم تكن كما وُصفت" : locale === "fr" ? "Itinéraire non conforme" : locale === "de" ? "Reiseroute nicht wie beschrieben" : locale === "es" ? "Itinerario no como se describió" : locale === "it" ? "Itinerario non come descritto" : "Itinerary not as described",
    locale === "ar" ? "مخاوف السلامة" : locale === "fr" ? "Problème de sécurité" : locale === "de" ? "Sicherheitsbedenken" : locale === "es" ? "Preocupación de seguridad" : locale === "it" ? "Preoccupazione per la sicurezza" : "Safety concern",
    locale === "ar" ? "خدمة العملاء" : locale === "fr" ? "Service client" : locale === "de" ? "Kundenservice" : locale === "es" ? "Servicio al cliente" : locale === "it" ? "Servizio clienti" : "Customer service",
    locale === "ar" ? "أخرى" : locale === "fr" ? "Autre" : locale === "de" ? "Sonstiges" : locale === "es" ? "Otro" : locale === "it" ? "Altro" : "Other",
  ];

  const selectPlaceholder = locale === "ar" ? "اختر نوع الشكوى" : locale === "fr" ? "Sélectionner le type" : locale === "de" ? "Typ auswählen" : locale === "es" ? "Seleccionar tipo" : locale === "it" ? "Seleziona tipo" : "Select complaint type";
  const descPlaceholder = locale === "ar" ? "يرجى وصف ما حدث بالتفصيل، بما في ذلك التواريخ والأوقات وأسماء الموظفين المعنيين." : locale === "fr" ? "Veuillez décrire ce qui s'est passé en détail, y compris les dates, heures et noms du personnel impliqué." : locale === "de" ? "Bitte beschreiben Sie, was passiert ist, einschließlich Datum, Uhrzeit und Namen der beteiligten Mitarbeiter." : locale === "es" ? "Describa lo que ocurrió con el mayor detalle posible, incluyendo fechas, horas y nombres del personal involucrado." : locale === "it" ? "Si prega di descrivere cosa è successo in dettaglio, includendo date, orari e nomi del personale coinvolto." : "Please describe what happened in as much detail as possible, including dates, times, and names of staff involved.";
  const resolutionPlaceholder = locale === "ar" ? "ما هو الحل الذي تعتبره عادلاً؟" : locale === "fr" ? "Quelle résolution considéreriez-vous juste ?" : locale === "de" ? "Welche Lösung würden Sie als fair betrachten?" : locale === "es" ? "¿Qué resultado consideraría una resolución justa?" : locale === "it" ? "Quale esito riterresti una risoluzione equa?" : "What outcome would you consider a fair resolution? (e.g. refund, apology, replacement service)";

  const phoneLabel = locale === "ar" ? "رقم الهاتف" : locale === "fr" ? "Numéro de téléphone" : locale === "de" ? "Telefonnummer" : locale === "es" ? "Número de teléfono" : locale === "it" ? "Numero di telefono" : "Phone Number";
  const typeLabel = locale === "ar" ? "نوع الشكوى" : locale === "fr" ? "Type de réclamation" : locale === "de" ? "Art der Beschwerde" : locale === "es" ? "Tipo de reclamación" : locale === "it" ? "Tipo di reclamo" : "Complaint Type";
  const descLabel = locale === "ar" ? "الوصف" : locale === "fr" ? "Description" : locale === "de" ? "Beschreibung" : locale === "es" ? "Descripción" : locale === "it" ? "Descrizione" : "Description";
  const resolutionLabel = locale === "ar" ? "الحل المطلوب" : locale === "fr" ? "Résolution souhaitée" : locale === "de" ? "Gewünschte Lösung" : locale === "es" ? "Resolución deseada" : locale === "it" ? "Risoluzione desiderata" : "Desired Resolution";
  const urgentLabel = locale === "ar" ? "مشاكل عاجلة؟" : locale === "fr" ? "Problème urgent ?" : locale === "de" ? "Dringende Probleme?" : locale === "es" ? "¿Problemas urgentes?" : locale === "it" ? "Problemi urgenti?" : "Urgent Issues?";
  const urgentDesc = locale === "ar" ? "للمشاكل التي تتطلب اهتماماً فورياً خلال رحلتك:" : locale === "fr" ? "Pour les problèmes nécessitant une attention immédiate pendant votre voyage :" : locale === "de" ? "Für Probleme, die sofortige Aufmerksamkeit während Ihrer Reise erfordern:" : locale === "es" ? "Para problemas que requieran atención inmediata durante su viaje:" : locale === "it" ? "Per problemi che richiedono attenzione immediata durante il viaggio:" : "For issues requiring immediate attention during your trip:";
  const responseTimesLabel = locale === "ar" ? "أوقات الاستجابة" : locale === "fr" ? "Délais de réponse" : locale === "de" ? "Antwortzeiten" : locale === "es" ? "Tiempos de respuesta" : locale === "it" ? "Tempi di risposta" : "Response Times";
  const refLabel = locale === "ar" ? "رقم المرجع" : locale === "fr" ? "Référence" : locale === "de" ? "Referenz" : locale === "es" ? "Referencia" : locale === "it" ? "Riferimento" : "Your complaint reference is";
  const contactLabel = locale === "ar" ? "سنتصل بك خلال 24 ساعة." : locale === "fr" ? "Nous vous contacterons sous 24 heures." : locale === "de" ? "Wir melden uns innerhalb von 24 Stunden." : locale === "es" ? "Nos pondremos en contacto en 24 horas." : locale === "it" ? "La contatteremo entro 24 ore." : "We will contact you within 24 hours.";

  return (
    <div className="min-h-screen bg-slate-50 pt-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="section-label inline-block mb-4 bg-amber-500/15 border-amber-500/30 text-amber-400">
            {t("pageLabel")}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("pageHeading")}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Info */}
          <div className="space-y-5">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <FaExclamationTriangle className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">{t("promise1Title")}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t("promise1Desc")}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-800 text-sm">{urgentLabel}</h3>
              <p className="text-xs text-slate-500">{urgentDesc}</p>
              <a href="tel:+212524000000" className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700">
                <FaPhone className="w-4 h-4" /> +212 5 24 00 00 00
              </a>
              <a href="mailto:support@eleganttravel.ma" className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700">
                <FaEnvelope className="w-4 h-4" /> support@eleganttravel.ma
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-2">{responseTimesLabel}</h3>
              <div className="space-y-2 text-xs">
                {responseTimes.map(([label, time]) => (
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t("successTitle")}</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto mb-2">
                    {refLabel} <strong className="text-amber-600">CMP-{Math.floor(Math.random() * 900000 + 100000)}</strong>.
                  </p>
                  <p className="text-slate-400 text-sm">{contactLabel}</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-slate-800 mb-6">{t("submitTitle")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "name", label: t("nameLabel"), type: "text", placeholder: t("nameLabel"), required: true },
                        { key: "email", label: t("emailLabel"), type: "email", placeholder: "you@example.com", required: true },
                        { key: "phone", label: phoneLabel, type: "tel", placeholder: "+212 6 00 00 00 00", required: false },
                        { key: "bookingId", label: t("bookingLabel"), type: "text", placeholder: "BK-001", required: false },
                      ].map(({ key, label, type, placeholder, required }) => (
                        <div key={key}>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            {label}{required && " *"}
                          </label>
                          <input
                            type={type}
                            required={required}
                            value={(form as Record<string, string>)[key]}
                            onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                            placeholder={placeholder}
                            dir={isRTL ? "rtl" : "ltr"}
                            className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{typeLabel} *</label>
                      <select
                        required
                        value={form.type}
                        onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                        dir={isRTL ? "rtl" : "ltr"}
                        className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition"
                      >
                        <option value="">{selectPlaceholder}</option>
                        {complaintTypes.map(ct => (
                          <option key={ct}>{ct}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{descLabel} *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.description}
                        onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                        placeholder={descPlaceholder}
                        dir={isRTL ? "rtl" : "ltr"}
                        className="w-full border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{resolutionLabel}</label>
                      <textarea
                        rows={2}
                        value={form.resolution}
                        onChange={e => setForm(p => ({ ...p, resolution: e.target.value }))}
                        placeholder={resolutionPlaceholder}
                        dir={isRTL ? "rtl" : "ltr"}
                        className="w-full border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm"
                    >
                      {t("submitBtn")}
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
