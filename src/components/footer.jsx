import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineArrowUp } from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050816] border-t border-white/10 px-6 py-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main centered container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="text-3xl font-bold tracking-tight"
          >
            <span className="text-white">S</span>
            <span className="text-violet-500">P.</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-slate-500 text-center">
            © {currentYear} Shreyanshu Pratik. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* Email */}
            <a
              href="mailto:pratikshreyanshu@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 hover:-translate-y-1 transition-all duration-300"
            >
              <HiOutlineMail className="text-lg" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pratikshreyanshu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-400/30 hover:bg-violet-400/5 hover:-translate-y-1 transition-all duration-300"
            >
              <HiOutlineArrowUp className="text-lg" />
            </a>

          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            Designed & developed with React, Tailwind CSS and Framer Motion.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;