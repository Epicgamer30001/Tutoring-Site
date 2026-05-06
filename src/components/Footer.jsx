export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070e20] py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-base text-white/60 hover:text-white/80 transition-colors"
          >
            Alvin Park
          </button>

          <div className="flex flex-wrap gap-5 justify-center">
            {[["About", "#about"], ["Subjects", "#subjects"], ["Awards", "#awards"], ["Rates", "#rates"], ["Contact", "#contact"]].map(([label, href]) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Alvin Park</p>
        </div>
      </div>
    </footer>
  );
}
