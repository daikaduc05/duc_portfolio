"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact me" },
];

export function Header() {
  const [activeItem, setActiveItem] = useState("home");

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveItem(sectionId);
    }
  };

  // Update active item on scroll
  useEffect(() => {
    const handleScrollUpdate = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollUpdate);
    return () => window.removeEventListener("scroll", handleScrollUpdate);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full py-6 px-8 bg-[#0a0a0a]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm font-medium tracking-tight nav-item  ${
                activeItem === item.id
                  ? "text-orange-500 active"
                  : "text-white hover:text-orange-500 "
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

