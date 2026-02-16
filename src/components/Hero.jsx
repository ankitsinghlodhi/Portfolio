import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary opacity-20 rounded-full blur-[120px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE - TEXT */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-primary">
              Ankit Singh Lodhi
            </span>
          </motion.h1>

          {/* Typing Effect (Only One Line Now) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-2xl md:text-3xl mt-6 font-semibold text-slate-300"
          >
           <TypeAnimation
  sequence={[
    "Full Stack MERN Developer",
    2000,                 // wait 2 seconds
    "",                   // erase
    500,                  // small delay
  ]}
  speed={50}
  repeat={Infinity}
/>

          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-slate-400 text-lg leading-relaxed max-w-lg"
          >
            I build scalable backend systems and modern frontend applications
            using the MERN stack. Strong foundation in DSA with 400+ problems solved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 flex gap-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition"
            >
              Contact Me
            </a>
          </motion.div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
       
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
  <div className="relative flex items-center justify-center">

    {/* Outer Glow Ring */}
    <div className="absolute w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>

    {/* Profile Image */}
    <img
      src={"./profile.jpeg"}
      alt="Ankit Singh Lodhi"
      className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-xl"
    />
  </div>
</motion.div>


      </div>
    </section>
  );
}

export default Hero;
