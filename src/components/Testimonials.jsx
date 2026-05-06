import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "Liam",
    detail: "Grade 11 Student",
    subjects: ["Physics 11", "Pre-Calculus 11"],
    quote:
      "Alvin was a great help for many of my classes such as Physics 11 and Pre-Calculus 11 where he showed diverse ways to complete and understand problems that I could not fully wrap my head around. He is a very personable individual that never makes you feel foolish for not understanding something and always explains to his full ability. I would very much recommend Alvin for any tutoring help you need — a lot of teachers don't work for my learning style but Alvin was able to adapt and work to my educational perspective.",
  },
  {
    name: "Celeste",
    detail: "1st Year University Student",
    subjects: ["Calculus I", "Calculus II"],
    quote: "[ Testimonial coming soon ]",
    placeholder: true,
  },
  {
    name: "Noa",
    detail: "Grade 12 Student",
    subjects: ["Physics 11", "Physics 12"],
    quote: "[ Testimonial coming soon ]",
    placeholder: true,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d]">
              What Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-slate-200 rounded-lg p-7 flex flex-col gap-5">
                {/* Quote */}
                <p className={`text-sm leading-relaxed flex-1 ${t.placeholder ? "text-slate-300 italic" : "text-slate-600"}`}>
                  "{t.quote}"
                </p>

                {/* Attribution */}
                <div className="border-t border-slate-100 pt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0f1b3d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1b3d] text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.detail}</p>
                  </div>
                  <div className="ml-auto flex flex-wrap gap-1 justify-end">
                    {t.subjects.map((s) => (
                      <span key={s} className="text-xs text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
