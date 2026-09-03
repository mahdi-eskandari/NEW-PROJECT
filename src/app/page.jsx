"use client";

import React, { useState } from "react";
import Link from "next/link";

const MOCK_TRIPS = [
  {
    id: "trip-1",
    origin: "تهران (ترمینال غرب)",
    destination: "اصفهان (ترمینال کاوه)",
    company: "سیر و سفر",
    busType: "VIP تخت‌شو ۲+۱",
    departureTime: "۰۸:۳۰",
    arrivalTime: "۱۴:۰۰",
    price: 240000,
    availableSeats: 9,
    rating: 4.8,
  },
  {
    id: "trip-2",
    origin: "تهران (ترمینال بیهقی)",
    destination: "مشهد (ترمینال امام رضا)",
    company: "ایران پیما",
    busType: "VIP مانیتوردار",
    departureTime: "۱۹:۱۵",
    arrivalTime: "۰۷:۰۰",
    price: 410000,
    availableSeats: 4,
    rating: 4.6,
  },
  {
    id: "trip-3",
    origin: "تهران (ترمینال جنوب)",
    destination: "شیراز (ترمینال کاراندیش)",
    company: "همسفر چابکسواران",
    busType: "VIP تخت‌شو ویژه",
    departureTime: "۲۱:۰۰",
    arrivalTime: "۰۹:۳۰",
    price: 390000,
    availableSeats: 12,
    rating: 4.9,
  },
  {
    id: "trip-4",
    origin: "تهران (ترمینال غرب)",
    destination: "تبریز (ترمینال مرکزی)",
    company: "رویال سفر",
    busType: "کلاسیک ۴۴ نفره",
    departureTime: "۲۲:۳۰",
    arrivalTime: "۰۶:۳۰",
    price: 195000,
    availableSeats: 18,
    rating: 4.4,
  },
];

export default function FullBusLandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [searchForm, setSearchForm] = useState({
    origin: "تهران",
    destination: "اصفهان",
    date: "1403/06/15",
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased" dir="rtl">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-orange-500 text-white p-2 rounded-xl text-lg font-bold">🚌</span>
              <span className="text-xl font-black text-slate-900 tracking-tight">
                مستر<span className="text-orange-500">بلیط</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="#" className="text-orange-500 font-bold">بلیت اتوبوس</Link>
              <Link href="#" className="hover:text-slate-900 transition">بلیت قطار</Link>
              <Link href="#" className="hover:text-slate-900 transition">بلیت هواپیما</Link>
              <Link href="#" className="hover:text-slate-900 transition">رزرو هتل</Link>
              <Link href="#" className="hover:text-slate-900 transition">راهنمای سفر</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-bold text-slate-700 hover:text-orange-500 px-4 py-2 transition">
              ورود مسافران
            </button>
            <button className="text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl shadow-md shadow-orange-200 transition">
              ثبت‌نام سریع
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO & SEARCH */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-14 pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full border border-orange-500/30 mb-4">
            سامانه جامع رزرو آنلاین بلیت اتوبوس
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            خرید آنلاین بلیت اتوبوس به سراسر کشور
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            مقایسه آنلاین شرکت‌های اتوبوس‌رانی، انتخاب شماره صندلی دلخواه و استرداد ۱۰۰٪ آنلاین
          </p>

          {/* Search Box */}
          <div className="bg-white text-slate-800 p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-100 text-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">مبدا</label>
                <input
                  type="text"
                  value={searchForm.origin}
                  onChange={(e) => setSearchForm({ ...searchForm, origin: e.target.value })}
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">مقصد</label>
                <input
                  type="text"
                  value={searchForm.destination}
                  onChange={(e) => setSearchForm({ ...searchForm, destination: e.target.value })}
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">تاریخ حرکت</label>
                <input
                  type="text"
                  value={searchForm.date}
                  onChange={(e) => setSearchForm({ ...searchForm, date: e.target.value })}
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-end">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-xl transition shadow-md shadow-orange-500/30">
                  جستجوی بلیت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TRIPS (TRIP CARDS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 mb-16 relative z-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">سفرهای پیشنهادی و پرتردد</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">بهترین گزینه‌های حرکت برای امروز و فردا</p>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg border border-emerald-200">
              تضمین کمترین قیمت
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {MOCK_TRIPS.map((trip) => (
              <div
                key={trip.id}
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-5 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-2xl transition hover:shadow-md gap-4"
              >
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xl shrink-0">
                    🚌
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900">{trip.company}</h3>
                      <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {trip.busType}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                      <span>{trip.origin}</span>
                      <span>←</span>
                      <span>{trip.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-center gap-8 w-full lg:w-auto border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-200">
                  <div className="text-center">
                    <span className="block text-xs text-slate-400">ساعت حرکت</span>
                    <span className="font-bold text-slate-800 text-base">{trip.departureTime}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-slate-400">رسیدن به مقصد</span>
                    <span className="font-bold text-slate-800 text-base">{trip.arrivalTime}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-slate-400">صندلی خالی</span>
                    <span className="font-bold text-emerald-600 text-sm">{trip.availableSeats} صندلی</span>
                  </div>
                </div>

                <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-200">
                  <div className="text-right lg:text-left">
                    <span className="text-xs text-slate-400 block">قیمت هر صندلی</span>
                    <span className="text-lg font-black text-slate-900">
                      {trip.price.toLocaleString("fa-IR")} <span className="text-xs font-normal text-slate-500">تومان</span>
                    </span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-sm">
                    انتخاب صندلی
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">مراحل ساده خرید بلیت</h2>
          <p className="text-slate-500 text-sm mt-1">تنها در ۳ مرحله بلیت خود را دریافت کنید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "۱", title: "جستجوی مسیر", desc: "مبدا، مقصد و تاریخ سفر خود را انتخاب کرده و لیست سرویس‌ها را مقایسه کنید." },
            { step: "۲", title: "انتخاب صندلی", desc: "از روی نقشه اتوبوس، صندلی دلخواه تکی یا دوبل را مشخص کنید." },
            { step: "۳", title: "صدور آنی بلیت", desc: "پس از پرداخت امن، پیامک و لینک دانلود بلیت فوراً برای شما ارسال می‌شود." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative">
              <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </span>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURES / WHY CHOOSE US */}
      <section className="bg-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">چرا ما را انتخاب کنید؟</h2>
            <p className="text-slate-500 text-sm mt-1">امکانات ویژه برای تجربه یک سفر بی‌دغدغه</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "استرداد ۱۰۰٪ آنلاین", desc: "کنسلی بلیت بدون مراجعه حضوری با کمترین جریمه" },
              { icon: "🛡️", title: "پشتیبانی ۲۴ ساعته", desc: "پاسخگویی در تمام ساعات شبانه‌روز حتی روزهای تعطیل" },
              { icon: "🚌", title: "تمام تعاونی‌های کشور", desc: "پوشش سراسری تمامی شرکت‌های معتبر اتوبوس‌رانی" },
              { icon: "📱", title: "ارسال آنی پیامک بلیت", desc: "دریافت اطلاعات سفر و شماره صندلی بلافاصله پس از خرید" },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:shadow-md transition text-right">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-slate-900 mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">سوالات متداول مسافران</h2>
          <p className="text-slate-500 text-sm mt-1">پاسخ به سوالات پرتکرار شما</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "چگونه بلیت خریداری شده را استرداد یا کنسل کنم؟",
              a: "کافیست وارد بخش پیگیری خرید شوید، شماره همراه و کد پیگیری را وارد کرده و با یک کلیک درخواست استرداد را ثبت کنید. مبلغ طی چند ساعت به حسابتان بازمی‌گردد.",
            },
            {
              q: "آیا برای سوار شدن به اتوبوس چاپ بلیت کاغذی الزامی است؟",
              a: "خیر، پیامک حاوی شماره بلیت و شماره صندلی که پس از خرید دریافت می‌کنید، برای سوار شدن به اتوبوس در ترمینال کافی است.",
            },
            {
              q: "حداکثر میزان بار مجاز برای هر مسافر چقدر است؟",
              a: "طبق قوانین سازمان راهداری، هر مسافر مجاز به حمل ۲۰ کیلوگرم بار در قسمت بار اتوبوس است.",
            },
            {
              q: "آیا امکان انتخاب جنسیت صندلی‌های مجاور وجود دارد؟",
              a: "بله، در نقشه صندلی‌ها وضعیت صندلی‌های پر شده توسط آقایان یا بانوان مشخص شده تا بتوانید با خیال آسوده خرید کنید.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-right p-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span>{faq.q}</span>
                <span className="text-slate-400 text-lg">{activeFaq === i ? "−" : "+"}</span>
              </button>
              {activeFaq === i && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800 text-right">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white p-1.5 rounded-lg text-sm">🚌</span>
                <span className="text-xl font-bold text-white">سامانه بلیت اتوبوس کشور</span>
              </div>
              <p className="text-xs leading-relaxed max-w-md text-slate-400">
                ارائه‌دهنده معتبرترین سرویس‌های سفر بین‌شهری با همکاری تمامی ترمینال‌ها و تعاونی‌های مجاز کشور. خرید امن و آسان با پشتیبانی تمام‌وقت.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">دسترسی سریع</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="#" className="hover:text-white transition">پیگیری و استرداد بلیت</Link></li>
                <li><Link href="#" className="hover:text-white transition">قوانین و مقررات خرید</Link></li>
                <li><Link href="#" className="hover:text-white transition">پرسش‌های متداول</Link></li>
                <li><Link href="#" className="hover:text-white transition">درباره ما</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">تماس و پشتیبانی</h4>
              <p className="text-xs mb-2">تلفن پشتیبانی: ۰۲۱-۸۸۸۸۸۸۸۸</p>
              <p className="text-xs mb-2">پاسخگویی ۲۴ ساعته در ۷ روز هفته</p>
              <p className="text-xs">ایمیل: support@mrticket.ir</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} تمامی حقوق برای سامانه رزرو بلیت مسافرتی محفوظ است.
          </div>
        </div>
      </footer>

    </div>
  );
}
