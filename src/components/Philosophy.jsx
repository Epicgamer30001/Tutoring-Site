import { useInView } from "../hooks/useInView";

export default function Philosophy() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              My Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d]">
              Teaching Philosophy
            </h2>
          </div>

          <div className="space-y-5 text-slate-600 text-base leading-relaxed max-w-2xl">
            <p className="text-xl font-semibold text-[#0f1b3d] leading-relaxed">
              What sets my tutoring apart is that I don't just help students get through the next test —
              I make sure they actually understand the material so it sticks.
            </p>
            <p>
              Whether you're struggling with limits and derivatives for the first time, preparing for
              the AP exam, or trying to survive a university physics course — I've been in your shoes,
              and I know what it actually takes to do well.
            </p>
            <p>
              My sessions are focused and structured. We diagnose where you're getting stuck, address
              the root cause, and build from there — so you leave each session with more clarity and
              confidence than when you came in.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-[#0f1b3d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              A
            </div>
            <div>
              <p className="font-semibold text-[#0f1b3d] text-sm">Alvin Park</p>
              <p className="text-slate-400 text-xs">UofT Engineering Science · Math & Physics Tutor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
