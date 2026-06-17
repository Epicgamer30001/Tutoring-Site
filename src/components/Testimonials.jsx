import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "Liam",
    detail: "Grade 11 Student",
    subjects: ["Physics 11", "Pre-Calculus 11"],
    quote:
      "Alvin was a great help for many of my classes such as Physics 11 and Pre-Calculus 11 where he showed diverse ways to complete and understand problems that I could not fully wrap my head around. He is a very personable individual that never makes you feel foolish for not understanding something and always explains to his full ability. I would very much recommend Alvin for any tutoring help you need, a lot of teachers don't work for my learning style but Alvin was able to adapt and work to my educational perspective.",
  },
  {
    name: "Greg",
    detail: "Grade 11 Student",
    subjects: ["Pre-Calculus 11"],
    quote:
      "I started working with Alvin for Pre-Calculus 11 because I was having trouble keeping up with the pace of the class. He was really easy to work with and had a knack for explaining things in a simpler way than what we were getting in class. He also helped me realize that some of my confusion was coming from things I hadn't fully learned before, which made a big difference once we addressed it. My confidence and my grades both improved a lot.",
  },
  {
    name: "Celeste",
    detail: "1st Year University Student",
    subjects: ["Calculus I", "Calculus II"],
    quote:
      "As someone who has always struggled with math, but needed to take calculus for my major, Alvin was an absolute blessing. His tutoring brought me from barely understanding foundational math to receiving an A- in Calculus 1. He is a constructive and patient communicator who takes the time to go in depth on topics that most math teachers would quickly skip over. He has a very clear and intuitive way of laying out material, and clearly has an elegant understanding of calculus himself. Could not recommend any calculus tutor more highly.",
  },
  {
    name: "Noa",
    detail: "Grade 12 Student",
    subjects: ["Physics 11", "Physics 12"],
    quote:
      "Alvin is literally the only reason I passed physics. My Unit 1 grade was a 35% (before tutoring) and my Unit 2 was a 95% ALL THANKS TO ALVIN. He also tutored me in math and explained everything perfectly. If you're NOT getting Alvin as a tutor you're basically asking to fail.",
  },
  {
    name: "Jacob",
    detail: "Grade 10 Student",
    subjects: ["Physics 11"],
    quote:
      "Alvin is an excellent physics tutor with a strong understanding of all areas of physics. He explains concepts clearly and breaks down complex topics in a way that is easy to understand. His teaching style is engaging, patient, and effective, which helped me build both my knowledge and confidence in the subject. I highly recommend Alvin to anyone looking for a knowledgeable and supportive physics tutor.",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d]">
              What Students Say
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontally scrollable row — bleeds to edge */}
      <div className="flex gap-4 overflow-x-auto px-5 sm:px-8 pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:#0f1b3d_#e2e8f0] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-slate-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0f1b3d] [&::-webkit-scrollbar-thumb]:rounded-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="snap-start flex-shrink-0 w-80 sm:w-96 border border-slate-200 rounded-lg p-7 flex flex-col gap-5"
          >
            <p className={`text-sm leading-relaxed flex-1 ${t.placeholder ? "text-slate-300 italic" : "text-slate-600"}`}>
              "{t.quote}"
            </p>

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
    </section>
  );
}
