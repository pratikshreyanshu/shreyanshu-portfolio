import { motion } from "framer-motion";

const education = [
  {
    year: "2022 - Present",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    description:
      "Currently pursuing my degree with a focus on software development, web technologies and computer science fundamentals.",
  },
  {
    year: "2022",
    degree: "Higher Secondary Education",
    field: "Science",
    description:
      "Completed higher secondary education with a strong interest in mathematics, technology and computer science.",
  },
  {
    year: "2020",
    degree: "Secondary Education",
    field: "School Education",
    description:
      "Completed secondary education and developed an early interest in computers and technology.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative w-full min-h-screen flex justify-center items-center px-6 py-24 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* IMPORTANT: CENTERED WRAPPER */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-6xl text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 text-lg">
              My academic background
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white mt-2">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>

            <div className="w-16 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="w-full max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
              My educational journey has helped me develop a strong
              foundation in technology, problem solving and software
              development.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="w-full flex justify-center mt-14">
            <div className="w-full max-w-4xl space-y-5">

              {education.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                    {/* Left */}
                    <div className="w-full md:w-1/2">
                      <p className="text-blue-400 text-sm font-medium">
                        {item.year}
                      </p>

                      <h3 className="text-2xl font-bold text-white mt-2">
                        {item.degree}
                      </h3>

                      <p className="text-purple-400 mt-1">
                        {item.field}
                      </p>
                    </div>

                    {/* Right */}
                    <p className="w-full md:w-1/2 text-slate-400 leading-7">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;