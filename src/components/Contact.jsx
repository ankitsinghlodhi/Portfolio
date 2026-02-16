import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 border-t border-slate-800 py-16 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto text-center w-full">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-4"
        >
          Contact
        </motion.h2>

        <p className="text-slate-400 mb-8">
          Open to opportunities, collaborations, and tech discussions.
        </p>

        {/* Direct Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-slate-300">

          <a
            href="mailto:ankitsinghlodhi01@gmail.com"
            className="hover:text-primary transition"
          >
            📧 ankitsinghlodhi01@gmail.com
          </a>


        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/Ankitsinghlodhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ankit-singh-lodhi-0906b0290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
