import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Navbar */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4 rounded-2xl border border-white/10 bg-[#050816]/75 backdrop-blur-xl shadow-2xl">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="text-3xl font-bold tracking-tight"
          >
            <span className="text-white">S</span>
            <span className="text-violet-500">P.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-violet-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 hover:scale-105 transition-all duration-300"
            >
              <HiOutlineDocumentText className="text-lg" />
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-2xl text-white hover:bg-white/[0.08] transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#050816]/95 backdrop-blur-xl p-5 shadow-2xl"
          >

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-2 flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition"
              >
                <HiOutlineDocumentText className="text-lg" />
                Resume
              </a>

            </div>

          </motion.div>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;