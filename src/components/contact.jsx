import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex justify-center items-center px-6 py-24 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* IMPORTANT: CENTERED WRAPPER */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-6xl text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 font-medium mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Let's Connect
            </h2>

            <p className="w-full max-w-2xl mx-auto mt-5 text-slate-400 text-base sm:text-lg leading-8">
              I'm always open to discussing new projects, creative ideas,
              opportunities and ways we can work together.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="w-full flex justify-center mt-14">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">

              {/* EMAIL */}
              <motion.a
                href="mailto:pratikshreyanshu@gmail.com"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group text-left p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <HiOutlineMail className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl font-semibold text-white mt-5">
                  Email
                </h3>

                <p className="text-slate-400 text-sm mt-2 break-all">
                  pratikshreyanshu@gmail.com
                </p>

                <p className="text-blue-400 text-sm mt-5">
                  Send me an email →
                </p>
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/pratikshreyanshu"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group text-left p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <FaGithub className="text-2xl text-purple-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl font-semibold text-white mt-5">
                  GitHub
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  github.com/pratikshreyanshu
                </p>

                <p className="text-purple-400 text-sm mt-5">
                  Visit GitHub →
                </p>
              </motion.a>

            </div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mt-14"
          >
            <p className="text-slate-600 text-sm">
              Have a project in mind? I'd love to hear about it.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;