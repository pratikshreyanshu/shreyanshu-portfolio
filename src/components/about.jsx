import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#050816]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      {/* IMPORTANT: FULL WIDTH CENTERED CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full text-center"
        >
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] font-medium">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-16 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-8">
            A little about my background, interests and passion for
            technology.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="w-full max-w-5xl mx-auto mt-14">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* ================= LEFT CARD ================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-blue-400/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-xl">👨‍💻</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Who I am
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Software Developer
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-slate-400 leading-8">
                <p>
                  I'm an IT student passionate about software development,
                  modern web technologies and building meaningful digital
                  experiences.
                </p>

                <p>
                  I enjoy turning ideas into clean, responsive and
                  user-friendly applications while continuously learning new
                  technologies.
                </p>

                <p>
                  My goal is to build practical software solutions and grow
                  as a professional developer by working on real-world
                  projects.
                </p>
              </div>
            </motion.div>

            {/* ================= RIGHT CARD ================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-purple-400/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    What I do
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    My Interests
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="text-white font-semibold">
                    Web Development
                  </h4>

                  <p className="text-slate-500 text-sm mt-2 leading-6">
                    Building modern and responsive web applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="text-white font-semibold">
                    Frontend Development
                  </h4>

                  <p className="text-slate-500 text-sm mt-2 leading-6">
                    Creating clean and engaging user interfaces.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="text-white font-semibold">
                    MERN Stack
                  </h4>

                  <p className="text-slate-500 text-sm mt-2 leading-6">
                    Developing full-stack applications with MERN.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="text-white font-semibold">
                    Problem Solving
                  </h4>

                  <p className="text-slate-500 text-sm mt-2 leading-6">
                    Learning and solving technical challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-2xl font-bold text-white">MERN</h4>
              <p className="text-xs text-slate-500 mt-1">
                Full Stack
              </p>
            </div>

            <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-2xl font-bold text-white">React</h4>
              <p className="text-xs text-slate-500 mt-1">
                Frontend
              </p>
            </div>

            <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-2xl font-bold text-white">Node.js</h4>
              <p className="text-xs text-slate-500 mt-1">
                Backend
              </p>
            </div>

            <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-2xl font-bold text-white">MongoDB</h4>
              <p className="text-xs text-slate-500 mt-1">
                Database
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;