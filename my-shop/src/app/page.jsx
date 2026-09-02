"use client";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("login"); // login | register | dashboard

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "register") {
      setMode("login");
    } else if (mode === "login") {
      setMode("dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl w-full max-w-sm shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-400">فروشگاه مدرن</h1>
          <p className="text-xs text-slate-400 mt-1">سامانه احراز هویت و خدمات کاربران</p>
        </div>

        {mode === "dashboard" ? (
          <div className="space-y-4 text-center">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-medium">
              ✓ احراز هویت پیامکی با موفقیت تایید شد
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-right space-y-2">
              <h3 className="text-sm font-semibold text-slate-200">وضعیت حساب کاربری</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                سرویس پیامکی و پنل کاربری برای شماره شما فعال است. سفارش‌ها و اعلانات از طریق سامانه پیامکی ارسال خواهند شد.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="text-xs text-slate-300 block mb-1">نام و نام خانوادگی</label>
                <input
                  required
                  type="text"
                  placeholder="مهدی اسکندری"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500"
                />
              </div>
            )}

            <div>
              <label className="text-xs text-slate-300 block mb-1">شماره موبایل</label>
              <input
                required
                type="tel"
                placeholder="0912xxxxxxx"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500 text-left"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1">
                {mode === "login" ? "کد تایید پیامکی (OTP)" : "رمز عبور"}
              </label>
              <input
                required
                type={mode === "login" ? "text" : "password"}
                placeholder={mode === "login" ? "12345" : "••••••••"}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium text-sm transition"
            >
              {mode === "login" ? "ورود به حساب" : "ثبت‌نام"}
            </button>

            <div className="text-center mt-3">
              {mode === "login" ? (
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-xs text-cyan-400 hover:underline"
                >
                  حساب کاربری ندارید؟ ثبت‌نام کنید
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-xs text-cyan-400 hover:underline"
                >
                  قبلاً ثبت‌نام کرده‌اید؟ وارد شوید
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
