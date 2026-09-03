"use client";

import React, { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "سامانه رزرو آنلاین بلیت",
    tech: "Next.js, Tailwind, MongoDB",
    desc: "پروژه فول‌استک با قابلیت انتخاب آنلاین صندلی و پرداخت تستی.",
  },
  {
    title: "فروشگاه اینترنتی مدرن",
    tech: "React, Node.js, Express",
    desc: "پیاده‌سازی سبد خرید، درگاه پرداخت تستی و احراز هویت پیامکی.",
  },
  {
    title: "پلتفرم پرسش و پاسخ آنلاین",
    tech: "Next.js, REST API",
    desc: "سیستم مدیریت سوالات و پاسخ کاربران با اعتبارسنجی OTP.",
  },
];

export default function PortfolioLanding() {
  const [mobile, setMobile] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 11) setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans" dir="rtl">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-orange-500">پورتفولیو و پلتفرم پروژه‌ها</span>
          <nav className="flex gap-4 text-xs sm:text-sm text-slate-400">
            <Link href="#projects" className="hover:text-white">پروژه‌ها</Link>
            <Link href="#auth" className="hover:text-white">تست احراز هویت</Link>
            <Link href="#about" className="hover:text-white">درباره سیستم</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20">
          سامانه توسعه نرم‌افزار و وب‌اپلیکیشن
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-3 text-white">
          آزمایشگاه توسعه نرم‌افزار و سرویس‌های تحت وب
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
          این پلتفرم برای معرفی، تست و ارزیابی پروژه‌های متن‌باز و سیستم‌های احراز هویت پیامکی (OTP) طراحی شده است.
        </p>

        {/* Demo OTP Section */}
        <div id="auth" className="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-md mx-auto text-right">
          <h2 className="text-base font-bold text-white mb-2">تست ورود / ثبت‌نام سریع (دمو)</h2>
          <p className="text-xs text-slate-400 mb-4">برای بررسی عملکرد ارسال پیامک کد تایید، شماره موبایل را وارد کنید:</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-center font-mono outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 rounded-xl transition"
            >
              دریافت کد تایید
            </button>
          </form>

          {sent && (
            <p className="text-xs text-emerald-400 text-center mt-3">
              درخواست کد تایید برای شماره {mobile} ثبت شد.
            </p>
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800">
        <h3 className="text-lg font-bold mb-6 text-slate-200">نمونه پروژه‌های پیاده‌سازی شده</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
              <span className="text-[11px] text-orange-400 font-mono block mb-2">{item.tech}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        وب‌سایت شخصی و آزمایشگاهی توسعه نرم‌افزار | بدون فعالیت تجاری مستقیم
      </footer>
    </div>
  );
}
