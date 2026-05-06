import { useState } from "react";
import { useInView } from "../hooks/useInView";

const tabs = [
  {
    label: "Background",
    content: "I'm a graduate of Burnaby Mountain Secondary school, and current I'm a University of Toronto Engineering Science student offering math and physics tutoring. I've been tutoring for over 3 years, working with students from Pre-Calculus 10 all the way up to university Calculus-Based Physics. Outside of tutoring, I'm currently doing volunteer research at SFU which keeps me close to the material and gives me a real-world perspective on everything I teach.",
  },
  {
    label: "My Approach",
    content: "Most students don't struggle because the material is too hard. They struggle because a small gap in foundational knowledge quietly compounds over time, making everything that builds on it feel impossible. I start every session by figuring out exactly where that gap is. Whether it's a shaky algebra foundation making calculus feel overwhelming, or a conceptual gap in physics nobody has explained clearly, I tailor each session to what you actually need.",
  },
  {
    label: "Why I Tutor",
    content: "Effective tutoring requires genuine passion for the subject. As an engineering student, I see the concepts I teach applied in real time, from the calculus behind signal processing to the physics that govern how systems behave. My goal isn't just to help you pass your course. It's to help you see how fascinating and powerful these subjects really are, because once a student finds the material genuinely interesting, it stops being a chore and becomes a challenge they actually want to take on.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d] mb-8 leading-tight">
            A tutor who actually gets it
          </h2>

          {/* Tab buttons */}
          <div className="flex gap-1 border-b border-slate-200 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                  active === i
                    ? "border-[#0f1b3d] text-[#0f1b3d]"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <p className="text-slate-600 text-base leading-relaxed transition-all duration-300">
            {tabs[active].content}
          </p>
        </div>
      </div>
    </section>
  );
}
