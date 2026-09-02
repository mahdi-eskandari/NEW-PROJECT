"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-2xl w-full max-w-sm shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-cyan-400">ثبت‌نام کاربر</h2>
        <p className="text-center text-xs text-slate-400 mb-6">سامانه تایید پیامکی فروشگاه</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-xs text-slate-300 block mb-1">نام کامل</label>
            <input required type="text" placeholder="مهدی اسکندری" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500" />
          </div>
          <div>
            <label className="text-xs text-slate-300 block mb-1">شماره موبایل</label>
            <input required type="tel" placeholder="0912xxxxxxx" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500" />
          </div>
          <div>
            <label className="text-xs text-slate-300 block mb-1">رمز عبور</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm outline-none focus:border-cyan-500" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium text-sm transition">
            ثبت‌نام و ورود
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-4">
          حساب دارید؟{" "}
          <Link href="/login" className="text-cyan-400 hover:underline">وارد شوید</Link>
        </p>
      </div>
    </main>
  );
}
