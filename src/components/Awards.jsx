import { useInView } from "../hooks/useInView";

const scholarships = [
  { name: "IMES & OIS UBC Entrance Scholarship", amount: "$100,000" },
  { name: "IMAA UofT Entrance Scholarship", amount: "$50,000" },
  { name: "IEES SFU Entrance Scholarship", amount: "$10,000" },
];

const apScores = [
  "AP Calculus AB — 5",
  "AP Calculus BC — 5",
  "AP Physics 1 — 5",
  "AP Physics 2 — 5",
];

const achievements = [
  "Top Student Award — Pre-Calculus 12",
  "Top Student Award — AP Calculus",
  "Top Student Award — Pre-Calculus 12",
  "UofT Engineering — GPA 3.93 out of 4",
  "A+ in University Calculus I & II",
];

export default function Awards() {
  const [ref, inView] = useInView();

  return (
    <section id="awards" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d]">
              Academic Background &amp; Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Education & Awards */}
            <div className="lg:col-span-1 space-y-0">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Education & Awards</h3>
              {achievements.map((a) => (
                <div key={a} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f1b3d] flex-shrink-0 mt-2" />
                  <span className="text-sm text-slate-700">{a}</span>
                </div>
              ))}
            </div>

            {/* Scholarships */}
            <div className="lg:col-span-1 bg-[#0f1b3d] rounded-lg p-6">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-5">Entrance Scholarships</h3>
              <div className="space-y-0">
                {scholarships.map((s) => (
                  <div key={s.name} className="flex items-center justify-between gap-4 py-3 border-b border-white/8 last:border-0">
                    <span className="text-white/65 text-sm">{s.name}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap">{s.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                <span className="text-white/30 text-sm">Total</span>
                <span className="text-white font-bold">$160,000+</span>
              </div>
            </div>

            {/* AP Scores */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">AP Exam Scores</h3>
              <div className="space-y-0">
                {apScores.map((a) => (
                  <div key={a} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <span className="text-sm text-slate-700">{a.split(" — ")[0]}</span>
                    <span className="font-bold text-[#0f1b3d] text-base">{a.split(" — ")[1]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#0f1b3d] rounded-lg px-4 py-3 flex justify-between items-center">
                <span className="text-white/50 text-sm">All AP exams</span>
                <span className="text-white font-bold">4 / 4 perfect scores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
