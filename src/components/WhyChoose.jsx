import { useInView } from "../hooks/useInView";

const points = [
  { title: "3 Years of Experience", desc: "Hundreds of hours with students at different levels — I've learned what actually works." },
  { title: "Personalized to You", desc: "Every session is built around your specific gaps, not a generic lesson from a textbook." },
  { title: "Strong Academic Background", desc: "UofT Engineering Science, A+ in university calculus, and 5s on all AP math and physics exams." },
  { title: "High School to University", desc: "Comfortable at any level — from Grade 10 math to first-year university physics." },
  { title: "Real Understanding", desc: "I focus on building lasting understanding so material clicks — not just memorizing steps." },
  { title: "Clear and Patient", desc: "I explain things multiple ways until something lands. No rushing, no judgment." },
];

export default function WhyChoose() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 sm:py-28 bg-[#0f1b3d]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/30 block mb-3">
              Why Alvin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What Makes the Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {points.map((p) => (
              <div key={p.title} className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
                <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
