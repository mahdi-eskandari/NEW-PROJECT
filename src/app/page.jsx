"use client";

import React, { useState } from "react";
import Link from "next/link";

const ARTICLES = [
  {
    id: 1,
    title: "راهنمای جامع سفر اقتصادی و نکات مهم در سفرهای بین‌شهری",
    category: "گردشگری",
    date: "۱۴ شهریور ۱۴۰۳",
    readTime: "۵ دقیقه",
    summary: "بررسی راهکارهای کاهش هزینه‌های سفر، انتخاب مناسب‌ترین وسیله نقلیه و مدیریت زمان در مسافرت‌های طولانی.",
  },
  {
    id: 2,
    title: "بررسی فناوری‌های نوین در حوزه سیستم‌های حمل‌ونقل هوشمند",
    category: "تکنولوژی",
    date: "۱۲ شهریور ۱۴۰۳",
    readTime: "۷ دقیقه",
    summary: "چگونه هوش مصنوعی و اینترنت اشیاء در حال دگرگونی ساختار ناوبری و لجستیک جاده‌ای در جهان هستند.",
  },
  {
    id: 3,
    title: "معرفی زیباترین مقاصد طبیعت‌گردی ایران در فصل پاییز",
    category: "ایران‌گردی",
    date: "۱۰ شهریور ۱۴۰۳",
    readTime: "۴ دقیقه",
    summary: "آشنایی با مقاصد بکر پاییزی از جنگل‌های هیرکانی شمال تا کویرهای مرکزی و جاذبه‌های کمتر شناخته‌شده.",
  },
  {
    id: 4,
    title: "امنیت داده‌ها و احراز هویت دومرحله‌ای در وب‌سایت‌های مدرن",
    category: "امنیت وب",
    date: "۸ شهریور ۱۴۰۳",
    readTime: "۶ دقیقه",
    summary: "اهمیت پیامک‌های یکبار مصرف (OTP) در حفاظت از حساب کاربری و جلوگیری از نفوذ به سامانه‌های اطلاعاتی.",
  },
];

export default function BlogLanding() {
  const [mobile, setMobile] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (mobile.length === 11) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased" dir="rtl">
      {/* 1. Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-blue-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">مجله</span>
              <span className="font-extrabold text-slate-900 text-lg">پایگاه خبری و وبلاگ دانش سفر</span>
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
              <Link href="#" className="text-blue-600">صفحه نخست</Link>
              <Link href="#articles" className="hover:text-slate-900 transition">تازه‌ترین مقالات</Link>
              <Link href="#newsletter" className="hover:text-slate-900 transition">عضویت در خبرنامه</Link>
              <Link href="#about" className="hover:text-slate-900 transition">درباره ما</Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#newsletter"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
            >
              عضویت رایگان
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            مرجع مقالات تخصصی گردشگری و فناوری
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
            جدیدترین تحلیل‌ها، اخبار و راهنماهای کاربردی
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            ارائه محتوای آموزشی، اخبار به‌روز حوزه سفر و مقالات تکنولوژی برای علاقه‌مندان و پژوهشگران.
          </p>
        </div>
      </section>

      {/* 3. Main Content: Articles & Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Articles Feed */}
          <div className="lg:col-span-2 space-y-5" id="articles">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-300">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              جدیدترین مطالب منتشر شده
            </h2>

            {ARTICLES.map((art) => (
              <article
                key={art.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition text-right"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>زمان مطالعه: {art.readTime}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition mb-2">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {art.summary}
                </p>
                <div className="flex justify-end">
                  <span className="text-xs text-blue-600 font-bold hover:underline cursor-pointer">
                    ادامه مطالعه مطلب ←
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar: Newsletter & OTP */}
          <aside className="space-y-6">
            
            {/* Newsletter Box (OTP Trigger) */}
            <div id="newsletter" className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm text-right">
              <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm">
                <span>📩</span>
                <h3>عضویت در خبرنامه پیامکی</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                برای دریافت خلاصه‌مقالات برگزیده و اطلاعیه‌های جدید، شماره همراه خود را وارد کنید:
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">شماره تلفن همراه</label>
                  <input
                    type="text"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-center font-mono outline-none focus:border-blue-600"
                    maxLength={11}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition"
                >
                  ارسال کد تایید عضویت
                </button>
              </form>

              {subscribed && (
                <div className="mt-3 p-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-xs text-center">
                  کد تایید به شماره {mobile} ارسال شد.
                </div>
              )}
            </div>

            {/* About Box */}
            <div id="about" className="bg-white p-5 rounded-xl border border-slate-200 text-right">
              <h3 className="font-bold text-slate-900 text-sm mb-2">درباره این وبگاه</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                این پایگاه اینترنتی یک وبلاگ تخصصی و رسانه آنلاین غیرتجاری است که با هدف ارتقای دانش عمومی در حوزه‌های گردشگری، حمل‌ونقل و فناوری اطلاعات فعالیت می‌کند.
              </p>
            </div>

          </aside>
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} وبلاگ و پایگاه خبری دانش سفر | تمامی حقوق محتوا محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
}
