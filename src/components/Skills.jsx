import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: ["C", "C++", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "JWT Authentication", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {section.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm hover:border-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
