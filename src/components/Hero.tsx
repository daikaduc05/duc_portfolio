"use client";

import { Github, Linkedin, Code, Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col justify-center h-full">
      {/* Hi I am */}
      <p className="text-white text-lg mb-2 slide-up" style={{ animationDelay: "0.1s" }}>
        Hi I am Dang Hoai Duc
      </p>

      {/* Name */}
      <h1 
        className="text-5xl font-bold text-white mb-2 glitch-text slide-up"
        data-text="Dang Hoai Duc"
        style={{ animationDelay: "0.3s" }}
      >
        Dang Hoai Duc
      </h1>

      {/* Title */}
      <h2 
        className="text-5xl font-bold text-orange-500 mb-6 glitch-text-once slide-up"
        data-text="Fullstack Software Developer"
        style={{ animationDelay: "0.6s" }}
      >
        Fullstack Software Developer
      </h2>

      {/* Social Icons */}
      <div className="flex gap-4 mb-8 slide-up" style={{ animationDelay: "0.9s" }}>
        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
          title="LeetCode"
        >
          <Code className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://codeforces.com/profile/DangHoaiDuc"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
          title="Codeforces"
        >
          <Terminal className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://github.com/daikaduc05"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
          title="GitHub"
        >
          <Github className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Contact Me Button */}
      <div className="flex justify-center mb-12 slide-up" style={{ animationDelay: "1.2s" }}>
        <button 
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              const headerHeight = 80;
              const elementPosition = element.offsetTop;
              const offsetPosition = elementPosition - headerHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded transition-colors"
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

