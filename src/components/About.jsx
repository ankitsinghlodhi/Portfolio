import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            I am a passionate Full Stack MERN Developer focused on building
            scalable backend architectures and modern frontend interfaces.
            I enjoy designing secure authentication systems, optimized APIs,
            and production-level web applications.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Alongside full-stack development, I have a strong interest in
            Data Structures and Algorithms, which continuously improves my
            logical thinking and approach to solving complex problems.
            This foundation helps me build efficient, clean, and scalable applications.
         </p>


          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["React", "Node.js", "MongoDB", "Express", "JWT", "REST APIs"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm hover:border-primary transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Animated Counters */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="bg-slate-900 p-8 rounded-xl text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-primary">5+</h3>
            <p className="text-slate-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-primary">2+</h3>
            <p className="text-slate-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-primary">10+</h3>
            <p className="text-slate-400 mt-2">Technologies Used</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-primary">100%</h3>
            <p className="text-slate-400 mt-2">Commitment</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
