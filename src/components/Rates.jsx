import { useInView } from "../hooks/useInView";

export default function Rates() {
  const [ref, inView] = useInView();

  return (
    <section id="rates" className="py-20 sm:py-28 bg-[#0f1b3d]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Rates */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/30 block mb-3">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
                Rates
              </h2>

              <div className="divide-y divide-white/10 border-t border-white/10">
                <div className="py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                  <div className="sm:w-28 flex-shrink-0">
                    <span className="text-3xl font-extrabold text-white">$40</span>
                    <span className="text-white/30 text-sm font-medium">/hour</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">High School Regular</p>
                    <ul className="space-y-1">
                      {["Pre-Calculus 10, 11 & 12", "Physics 11 & 12"].map((s) => (
                        <li key={s} className="text-white/50 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                  <div className="sm:w-28 flex-shrink-0">
                    <span className="text-3xl font-extrabold text-white">$50</span>
                    <span className="text-white/30 text-sm font-medium">/hour</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Advanced / AP / University</p>
                    <ul className="space-y-1">
                      {["AP Calculus AB & BC", "University Calculus I & II", "Calculus-Based University Physics"].map((s) => (
                        <li key={s} className="text-white/50 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/25 text-sm mt-4">
                Feel free to message me to discuss scheduling and goals.
              </p>
            </div>

            {/* Right — Contact */}
            <div id="contact">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/30 block mb-3">
                Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
                Get in Touch
              </h2>

              <p className="text-white/50 text-base leading-relaxed mb-8">
                If you or someone you know is looking for a tutor, feel free to reach out. I'm
                happy to chat about rates, scheduling, and what kind of help you're looking for.
              </p>

              <div className="space-y-0 border-t border-white/10">
                <div className="py-5 border-b border-white/10">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:alvinpark7412@gmail.com"
                    className="text-white font-medium text-base hover:text-white/60 transition-colors"
                  >
                    alvinpark7412@gmail.com
                  </a>
                </div>
                <div className="py-5 border-b border-white/10">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">Surrey, BC — flexible with location/online sessions</p>
                </div>
                <div className="py-5">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Availability</p>
                  <p className="text-white font-medium">Open for bookings</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
