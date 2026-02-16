import { motion } from "framer-motion";

const projects = [
  {
    title: "StudyJS - EdTech Platform",
    description:
      "A MERN-stack E-learning platform with JWT authentication, role-based dashboards, Cloudinary media upload and Razorpay payment integration.",
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "JWT", "Razorpay"],
    github: "https://github.com/Ankitsinghlodhi", // update with repo link
  },
  {
    title: "CodeExpert - Coding Platform",
    description:
      "Online coding platform for practicing DSA problems with premium access via Razorpay and integrated AI-based chatbot support.",
    tech: ["React", "Node", "MongoDB", "Express", "AI Chatbot", "Razorpay"],
    github: "https://github.com/Ankitsinghlodhi",
  },
  {
    title: "CollegeCube - ERP System",
    description:
      "Full-stack ERP system for managing students, faculty, attendance, notes and fee workflows with role-based access control.",
    tech: ["React", "Node", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Ankitsinghlodhi",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-primary transition duration-300 group"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub →
                </a>

                {/* <span className="text-xs text-slate-500">
                  Live Demo - Coming Soon
                </span> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
