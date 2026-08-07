import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-slate-300",
    bg: "bg-white/5",
    border: "border-white/10",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
    bg: "bg-white/5",
    border: "border-white/10",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#050816]"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= MAIN CENTERED CONTAINER ================= */}

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
            My technical toolkit
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="w-16 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-8">
            Technologies and tools I use to build modern, responsive
            and scalable web applications.
          </p>
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <div className="w-full max-w-5xl mx-auto mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`group w-full rounded-2xl border ${skill.border} bg-white/[0.03] p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-all duration-300`}
              >
                {/* Icon */}

                <div
                  className={`w-16 h-16 rounded-2xl ${skill.bg} border ${skill.border} flex items-center justify-center`}
                >
                  <span
                    className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </span>
                </div>

                {/* Name */}

                <h3 className="text-sm font-medium text-slate-300 mt-4 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= STACK SUMMARY ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="w-full max-w-5xl mx-auto mt-10"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
              Primary Stack
            </p>

            <p className="text-lg md:text-xl text-slate-300 mt-3">
              MongoDB
              <span className="text-violet-500 mx-2">•</span>
              Express.js
              <span className="text-violet-500 mx-2">•</span>
              React
              <span className="text-violet-500 mx-2">•</span>
              Node.js
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;