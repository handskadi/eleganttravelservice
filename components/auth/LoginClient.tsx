"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  FaEye, FaEyeSlash, FaGoogle, FaLock, FaUser,
  FaCompass, FaStar, FaShieldAlt, FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/contexts/AuthContext";

function AuthForm() {
  const t = useTranslations("login");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, register, user } = useAuth();

  const [mode, setMode] = useState<"login" | "signup">(
    searchParams.get("mode") === "signup" ? "signup" : "login"
  );
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]       = useState("");
  const [showPw, setShowPw]   = useState(false);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      if (user.role === "admin" || user.role === "agent") router.replace("/admin");
      else router.replace("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    if (mode === "login") {
      const result = await login(email, password);
      setLoading(false);
      if (result.success) {
        setSuccess(t("successLogin"));
        const dest = (result.role === "admin" || result.role === "agent") ? "/admin" : "/dashboard";
        setTimeout(() => router.push(dest), 800);
      } else {
        setError(result.message);
      }
    } else {
      const result = await register(name, email, password);
      setLoading(false);
      if (result.success) {
        setSuccess(t("successSignup"));
        setTimeout(() => router.push("/dashboard"), 800);
      } else {
        setError(result.message);
      }
    }
  };

  return (
    <div className="w-full max-w-md" dir={isRTL ? "rtl" : "ltr"}>
      {/* Logo on mobile */}
      <div className="flex items-center gap-2.5 mb-8 lg:hidden">
        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
          <FaCompass className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-extrabold text-slate-900 leading-none text-lg">ElegantTravel</p>
          <p className="text-amber-500 text-[10px] font-bold tracking-widest uppercase">Morocco</p>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
          {mode === "login" ? t("welcome") : t("joinTitle")}
        </h1>
        <p className="text-slate-500 mt-2 text-[15px]">
          {mode === "login" ? t("signinSub") : t("signupSub")}
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex bg-slate-100 rounded-2xl p-1 mb-8 gap-1">
        {(["login", "signup"] as const).map(m => (
          <button
            key={m}
            type="button"
            onClick={() => { setMode(m); setError(""); setSuccess(""); }}
            className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
              mode === m ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {m === "login" ? t("signinTab") : t("signupTab")}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t("fullName")}</label>
            <div className="relative">
              <FaUser className={`absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5`} />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                required
                dir={isRTL ? "rtl" : "ltr"}
                className={`w-full border border-slate-200 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-amber-400 transition bg-white`}
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t("emailAddress")}</label>
          <div className="relative">
            <HiMail className={`absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4`} />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
              dir="ltr"
              className={`w-full border border-slate-200 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-amber-400 transition bg-white`}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-slate-700">{t("password")}</label>
            {mode === "login" && (
              <button type="button" className="text-xs text-amber-600 font-medium hover:underline">
                {t("forgotPassword")}
              </button>
            )}
          </div>
          <div className="relative">
            <FaLock className={`absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5`} />
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              dir="ltr"
              className={`w-full border border-slate-200 ${isRTL ? "pr-10 pl-11" : "pl-10 pr-11"} py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-amber-400 transition bg-white`}
            />
            <button
              type="button"
              onClick={() => setShowPw(p => !p)}
              className={`absolute ${isRTL ? "left-3.5" : "right-3.5"} top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition`}
            >
              {showPw ? <FaEyeSlash className="w-3.5 h-3.5" /> : <FaEye className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
            <FaShieldAlt className="w-3.5 h-3.5 shrink-0" />
            {error}
          </div>
        )}
        {success && (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-sm text-emerald-700 font-medium">
            <FaCheckCircle className="w-3.5 h-3.5 shrink-0" />
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !!success}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold rounded-xl transition shadow-lg shadow-amber-500/25 text-sm tracking-wide"
        >
          {loading ? t("pleaseWait") : mode === "login" ? t("signinBtn") : t("signupBtn")}
        </button>

        <div className="relative flex items-center gap-3 py-1">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">{t("orWith")}</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <button
          type="button"
          className="w-full py-3 flex items-center justify-center gap-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
        >
          <FaGoogle className="w-4 h-4 text-red-500" />
          {t("continueGoogle")}
        </button>
      </form>

      {/* Back + switch mode */}
      <div className="mt-8 flex items-center justify-between text-sm">
        <Link href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition font-medium">
          <FaArrowLeft className="w-3 h-3" />
          {t("backToSite")}
        </Link>
        <p className="text-slate-400">
          {mode === "login" ? t("noAccount") : t("haveAccount")}{" "}
          <button
            type="button"
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); setSuccess(""); }}
            className="text-amber-600 font-bold hover:underline"
          >
            {mode === "login" ? t("signupFree") : t("signinLink")}
          </button>
        </p>
      </div>
    </div>
  );
}

// ─── Left panel (brand + trust + testimonial) ─────────────────────────────────

function LeftPanel() {
  const t = useTranslations("login");

  const trustItems = [
    { value: "20,000+", label: t("trustHappy") },
    { value: "12 yrs",  label: t("trustYears") },
    { value: "4.9",     label: t("trustRating") },
    { value: "100+",    label: t("trustTours") },
  ];

  return (
    <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] relative flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/tours/sahara-3day-marrakech.jpg"
          alt="Morocco Sahara Desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-amber-900/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-10 xl:p-14">
        <Link href="/" className="flex items-center gap-3 w-fit">
          <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/30">
            <FaCompass className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-extrabold text-white text-xl leading-none">ElegantTravel</p>
            <p className="text-amber-400 text-[11px] font-bold tracking-widest uppercase mt-0.5">Service — Morocco</p>
          </div>
        </Link>

        <div>
          <h2 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
            {t("heroHeading")}
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-sm">
            {t("heroSub")}
          </p>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {trustItems.map(item => (
              <div key={item.label} className="text-center">
                <p className="text-amber-400 font-extrabold text-xl xl:text-2xl leading-none">{item.value}</p>
                <p className="text-white/50 text-[11px] mt-1 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5 text-amber-400" />
              ))}
            </div>
            <p className="text-white/90 text-sm leading-relaxed italic mb-3">
              &ldquo;{t("testimonialQuote")}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-xs">
                S
              </div>
              <div>
                <p className="text-white font-semibold text-xs">{t("testimonialName")}</p>
                <p className="text-white/50 text-[10px]">{t("testimonialOrigin")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/40 text-[11px]">
          <span className="flex items-center gap-1.5">
            <FaShieldAlt className="w-3 h-3 text-white/30" />
            {t("secureLogin")}
          </span>
          <span>·</span>
          <span>{t("dataProtected")}</span>
          <span>·</span>
          <span>{t("topAgency")}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Exported page shell ──────────────────────────────────────────────────────

export default function LoginClient() {
  return (
    <div className="min-h-screen flex">
      <LeftPanel />
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 xl:px-16 bg-white overflow-y-auto">
        <Suspense fallback={null}>
          <AuthForm />
        </Suspense>
      </div>
    </div>
  );
}
