"use client";

import { useState } from "react";

const navItems = [
  { id: "about", label: "ABOUT", icon: "👤" },
  { id: "resume", label: "RESUME", icon: "📄" },
  { id: "portfolio", label: "PORTFOLIO", icon: "🎲" },
  { id: "blog", label: "BLOG", icon: "📖" },
  { id: "contact", label: "CONTACT", icon: "📧" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("contact");

  return (
    <div className="flex flex-col gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${
              activeItem === item.id
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }
          `}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

