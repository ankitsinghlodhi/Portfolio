import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 150 &&
        window.scrollY < sectionTop + sectionHeight - 150
      ) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-darkBg/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="text-2xl font-bold text-primary">
          @Ankit
        </a>

        <ul className="hidden md:flex space-x-8 text-slate-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative transition ${
                  active === item.id ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.label}

                {active === item.id && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
