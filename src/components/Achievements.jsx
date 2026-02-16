import { motion } from "framer-motion";

const achievements = [
  {
    title: "400+ DSA Problems Solved",
    description:
      "Solved 400+ Data Structures & Algorithms problems on LeetCode and GeeksforGeeks.",
  },
  {
    title: "Meta Front-End Developer Certification",
    description:
      "Certified in Front-End Development by Meta (Coursera) - November 2024.",
  },
  {
    title: "NPTEL DBMS Elite Certificate",
    description:
      "Achieved Elite certification in Database Management Systems - March 2025.",
  },
  {
    title: "ER Model Presentation Winner",
    description:
      "Winner of ER Model Presentation Competition at college level.",
  },
  
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Achievements & <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;
