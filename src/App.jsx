import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from "./components/Contact";
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-darkBg text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
