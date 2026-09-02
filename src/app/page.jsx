export default function PremiumHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans dir-rtl" dir="rtl">
      
      {/* --- HEADER: Glassmorphism Style --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BUS-GO
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">بلیط اتوبوس</a>
              <a href="#" className="hover:text-blue-600 transition">بلیط هواپیما</a>
              <a href="#" className="hover:text-blue-600 transition">پیشنهادات ویژه</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-sm font-semibold text-gray-700 px-4 py-2">ورود / ثبت‌نام</button>
            <button className="bg-blue-600 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
              پنل کاربری
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION: Modern Search Engine --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#0f172a]">
        {/* Background Decoration (Circles/Glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            سفر خود را <span className="text-blue-400">هوشمندانه</span> شروع کنید
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            بهترین قیمت‌ها، سریع‌ترین مسیرها و راحت‌ترین رزرو بلیط اتوبوس در دستان شماست.
          </p>

          {/* --- SEARCH CARD: The "Bus Booking" Look --- */}
          <div className="bg-white p-2 md:p-4 rounded-[2rem] shadow-2xl shadow-black/50 max-w-5xl mx-auto border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              
              {/* From */}
              <div className="md:col-span-3 relative group">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition">
                  📍
                </div>
                <input 
                  type="text" 
                  placeholder="مبدا" 
                  className="w-full py-5 pr-12 pl-4 bg-gray-50 rounded-2xl text-gray-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              {/* Swap Button (Decorative) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <button className="bg-blue-50 text-blue-600 p-2 rounded-full hover:rotate-180 transition-all duration-500">
                  ⇄
                </button>
              </div>

              {/* To */}
              <div className="md:col-span-3 relative group">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition">
                  🏁
                </div>
                <input 
                  type="text" 
                  placeholder="مقصد" 
                  className="w-full py-5 pr-12 pl-4 bg-gray-50 rounded-2xl text-gray-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              {/* Date */}
              <div className="md:col-span-3 relative group">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition">
                  📅
                </div>
                <input 
                  type="date" 
                  className="w-full py-5 pr-12 pl-4 bg-gray-50 rounded-2xl text-gray-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-2">
                <button className="w-full h-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  جستجو
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION (Placeholder) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">پرطرفدارترین مسیرها</h2>
            <p className="text-gray-500 mt-2">بر اساس جستجوی کاربران در هفته اخیر</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">مشاهده همه</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6">
               <div className="w-full h-32 bg-gray-100 rounded-2xl mb-4"></div>
               <div className="h-4 w-3/4 bg-gray-100 rounded mb-2"></div>
               <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER: Minimal & Clean --- */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black text-blue-600 mb-6">BUS-GO</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              تجربه سفر متفاوت با تکنولوژی روز. ما اینجا هستیم تا مسیر شما را کوتاه و لذت‌بخش کنیم.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">درباره ما</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600">شرایط و قوانین</a></li>
              <li><a href="#" className="hover:text-blue-600">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-blue-600">تماس با ما</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">پشتیبانی</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600">مرکز کمک</a></li>
              <li><a href="#" className="hover:text-blue-600">وضعیت بلیط</a></li>
              <li><a href="#" className="hover:text-blue-600">گزارش خطا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">خبرنامه</h4>
            <div className="flex gap-2">
              <input type="text" placeholder="ایمیل شما" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-blue-500" />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">ثبت</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-50 text-center text-gray-400 text-xs">
          © ۱۴۰۳ تمامی حقوق برای BUS-GO محفوظ است. طراحی شده با ❤️ برای مسافران.
        </div>
      </footer>

    </div>
  );
}
