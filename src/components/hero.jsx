import { motion } from "framer-motion";

import {
  FaGithub,
  FaReact,
  FaJs,
  FaHtml5,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

import {
  HiOutlineArrowDown,
  HiOutlineDownload,
} from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden bg-[#050816]"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Blue glow */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px]" />

        {/* Violet glow */}
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >

            {/* ================= AVAILABLE BADGE ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-emerald-400">
                Open to opportunities
              </span>
            </motion.div>

            {/* ================= GREETING ================= */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-lg text-slate-400 mb-3"
            >
              Hello, I'm
            </motion.p>

            {/* ================= NAME ================= */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              <span className="text-white">
                Shreyanshu
              </span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Pratik
              </span>
            </motion.h1>

            {/* ================= ROLE ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-6"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">
                Software Developer
              </h2>

              <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">

                <div className="h-px w-10 bg-blue-500" />

                <p className="text-sm text-slate-500">
                  Building modern web experiences
                </p>

              </div>
            </motion.div>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="mt-7 max-w-xl mx-auto lg:mx-0 text-slate-400 leading-8 text-base sm:text-lg"
            >
              I'm an IT student passionate about software development,
              modern web technologies and creating clean, responsive
              and engaging digital experiences.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9"
            >

              {/* Resume */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-slate-200 hover:-translate-y-1 transition-all duration-300"
              >
                <HiOutlineDownload className="text-lg group-hover:-translate-y-0.5 transition-transform" />

                Download Resume
              </a>

              {/* Contact */}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>

            </motion.div>

            {/* ================= GITHUB ================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="flex items-center justify-center lg:justify-start gap-3 mt-9"
            >

              <span className="text-xs text-slate-600 mr-2">
                Find me
              </span>

              <a
                href="https://github.com/pratikshreyanshu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT SIDE — PROFESSIONAL AVATAR
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
            className="relative flex justify-center items-center min-h-[430px]"
          >

            {/* ================= OUTER ROTATING RING ================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-blue-500/20"
            />

            {/* ================= SECOND ROTATING RING ================= */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[270px] h-[270px] sm:w-[380px] sm:h-[380px] rounded-full border border-violet-500/10"
            />

            {/* ================= PROFESSIONAL AVATAR ================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-purple-600/20 border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-500/10"
            >

              {/* Image */}

              <div className="w-[230px] h-[230px] sm:w-[295px] sm:h-[295px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-[#101936]">

                <img
                  src="/profile-avatar.jpg"
                  alt="Shreyanshu Pratik - Software Developer"
                  className="w-full h-full object-cover object-top"
                />

              </div>

            </motion.div>

            {/* =====================================================
                FLOATING TECH ICONS
            ===================================================== */}

            {/* ================= HTML ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-0 sm:right-8 w-14 h-14 rounded-2xl bg-[#0d132b] border border-white/10 flex items-center justify-center shadow-xl"
            >
              <FaHtml5 className="text-2xl text-orange-500" />
            </motion.div>

            {/* ================= REACT ================= */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-0 sm:left-8 w-14 h-14 rounded-2xl bg-[#0d132b] border border-white/10 flex items-center justify-center shadow-xl"
            >
              <FaReact className="text-2xl text-cyan-400" />
            </motion.div>

            {/* ================= JAVASCRIPT ================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-16 right-0 sm:right-3 w-14 h-14 rounded-2xl bg-[#0d132b] border border-white/10 flex items-center justify-center shadow-xl"
            >
              <FaJs className="text-2xl text-yellow-400" />
            </motion.div>

            {/* ================= TAILWIND ================= */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-0 sm:left-3 w-14 h-14 rounded-2xl bg-[#0d132b] border border-white/10 flex items-center justify-center shadow-xl"
            >
              <SiTailwindcss className="text-2xl text-cyan-400" />
            </motion.div>

          </motion.div>

        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition"
        >

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <HiOutlineArrowDown className="text-lg" />
          </motion.div>

        </motion.a>

      </div>
    </section>
  );
}

export default Hero;