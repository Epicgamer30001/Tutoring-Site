export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/20250522_163256.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0f1b3d]/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 w-full">
        <div className="max-w-2xl">
          <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-5 animate-fade-in">
            Math &amp; Physics Tutoring · Summer 2026
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-slide-up">
            Private Tutoring<br />with Alvin
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-d2">
            <button
              onClick={() => scrollTo("#subjects")}
              className="px-7 py-3.5 rounded-lg bg-white text-[#0f1b3d] font-semibold text-sm hover:bg-slate-100 transition-all"
            >
              View Subjects &amp; Rates
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 rounded-lg border border-white/25 text-white/80 font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
