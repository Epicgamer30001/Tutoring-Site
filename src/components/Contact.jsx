import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1b3d] mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-500 max-w-lg text-base leading-relaxed">
              If you or someone you know is looking for a tutor, feel free to reach out. I'm happy
              to chat about rates, scheduling, and what kind of help you're looking for.
            </p>
          </div>

          <div className="space-y-5 max-w-md">
            <div className="border-t border-slate-100 pt-6">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email</p>
              <a
                href="mailto:alvinpark7412@gmail.com"
                className="text-[#0f1b3d] font-medium text-lg hover:text-slate-500 transition-colors"
              >
                alvinpark7412@gmail.com
              </a>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Location</p>
              <p className="text-[#0f1b3d] font-medium">Online / Vancouver / Toronto</p>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Availability</p>
              <p className="text-[#0f1b3d] font-medium">Summer 2025 — open for bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
