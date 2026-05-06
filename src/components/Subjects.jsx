import { useInView } from "../hooks/useInView";

const subjects = [
  {
    level: "High School",
    title: "Pre-Calculus 10, 11 & 12",
    desc: "Building strong foundations in functions, polynomials, and trigonometry — everything that sets you up for calculus.",
  },
  {
    level: "AP / Advanced",
    title: "AP Calculus AB & BC",
    desc: "Scored 5 on both exams. I know what the test looks for and how to get there, whether you're aiming for a 4 or pushing for a 5.",
  },
  {
    level: "University",
    title: "University Calculus I & II",
    desc: "A and A+ at UofT Engineering. Limits, derivatives, integrals, sequences, series — and how to handle the pace of university math.",
  },
  {
    level: "High School",
    title: "Physics 11 & 12",
    desc: "Kinematics, dynamics, energy, waves — building conceptual clarity alongside the math so physics stops feeling like guesswork.",
  },
  {
    level: "University",
    title: "Calculus-Based University Physics",
    desc: "Scored 5 on AP Physics 1 and 2. I'll help you bridge the gap between high school physics and the calculus-heavy university version.",
  },
];

export default function Subjects() {
  const [ref, inView] = useInView();

  return (
    <section id="subjects" className="py-20 sm:py-28 bg-[#0f1b3d]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/30 block mb-3">
              Subjects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What I Teach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 block mb-3">
                  {s.level}
                </span>
                <h3 className="font-bold text-[#0f1b3d] text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
