"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Code, Terminal, X, ChevronDown, ChevronUp } from "lucide-react";

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 section-header">About me</h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                I am a third-year Computer Science student at Da Nang University of Science and Technology with a solid foundation in algorithms, demonstrated through extensive participation in Competitive Programming contests. These experiences have sharpened my problem-solving skills, logical thinking, and ability to write efficient, optimized code under time constraints.
              </p>
              {isExpanded && (
                <div className="space-y-4 animate-fadeIn">
                  <p>
                    My journey in competitive programming has been marked by consistent achievements, including multiple awards in national and regional competitions such as ICPC, Vietnam National Olympiad in Informatics, and various university-level contests. Through these challenges, I've developed a deep understanding of data structures, algorithms, and optimization techniques that are crucial for building high-performance systems.
                  </p>
                  <p>
                    My career interests focus on DevOps, Cloud Computing, System Design, Networking, and Security. I am eager to apply my technical knowledge to real-world challenges, while continuously developing skills in designing scalable, reliable, and secure systems. I have hands-on experience with cloud platforms like AWS and Azure, containerization technologies such as Docker, and CI/CD pipelines using GitHub Actions.
                  </p>
                  <p>
                    In addition to my competitive programming background, I have practical experience in backend development using technologies like Django, FastAPI, NestJS, and Go. I've worked on projects involving microservices architecture, message brokers like RabbitMQ, and various database systems including MySQL, PostgreSQL, and MongoDB. My work as a Backend Developer at Madison Technology has allowed me to apply these skills in a professional environment, contributing to real-world applications and learning industry best practices.
                  </p>
                  <p>
                    I am passionate about continuous learning and staying updated with the latest technologies and best practices in software engineering. My goal is to become a well-rounded engineer who can design and implement robust, scalable systems that solve complex problems efficiently.
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-medium"
            >
              {isExpanded ? (
                <>
                  <span>Read less</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Read more</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-gray-800 opacity-50 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700">
                <Image
                  src="/images/avatar.png"
                  alt="About me"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: "Beginner", description: "UI library" },
        { name: "Next.js", level: "Beginner", description: "React framework" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "C++", level: "Advanced", description: "Algorithms & DSA, Memory & Process Management" },
        { name: "Django", level: "Intermediate", description: "Python web framework" },
        { name: "FastAPI", level: "Intermediate", description: "Async Python APIs" },
        { name: "NestJS", level: "Intermediate", description: "Node.js framework" },
        { name: "MySQL", level: "Intermediate", description: "Relational database" },
        { name: "PostgreSQL", level: "Intermediate", description: "Advanced SQL database" },
        { name: "MongoDB", level: "Intermediate", description: "NoSQL database" },
        { name: "Redis", level: "Intermediate", description: "In-memory data store" },
        { name: "RabbitMQ", level: "Intermediate", description: "Message broker" },
        { name: "Microservices", level: "Intermediate", description: "Distributed architecture" },
      ],
    },
    {
      category: "Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS", level: "Intermediate", description: "EC2/VPC/S3/ECS" },
        { name: "Azure", level: "Beginner", description: "Web Services" },
        { name: "Docker", level: "Intermediate", description: "Containerization" },
        { name: "GitHub Actions", level: "Intermediate", description: "CI/CD pipelines" },
        { name: "Load Balancer", level: "Intermediate", description: "Traffic distribution" },
        { name: "Nginx", level: "Intermediate", description: "Web server & reverse proxy" },
        { name: "Ngrok", level: "Intermediate", description: "Tunneling & local development" },
        { name: "Cloudflared", level: "Intermediate", description: "Cloudflare tunnel & zero-trust" },
        { name: "Linux", level: "Intermediate", description: "System administration" },
      ],
    },
    {
      category: "Network",
      icon: "🌐",
      skills: [
        { name: "Network Security", level: "Intermediate", description: "Fundamentals & VPC" },
      ],
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
    },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Beginner":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
            <h2 className="text-4xl font-bold text-white mb-4 section-header">Skills</h2>
        <p className="text-gray-400 mb-12 text-lg">
          My technical expertise and proficiency levels
        </p>
        
        {/* Tech Stack Grid */}
        <div ref={containerRef}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
                variants={itemVariants}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-gray-900/50 rounded-lg p-3 hover:bg-gray-900 transition-colors"
                      variants={itemVariants}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-white font-semibold text-sm">
                          {skill.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CareerSection() {
  const careerEvents: Array<{
    type: string;
    title: string;
    startDate: string;
    endDate: string | null | "now";
    description: string;
    color: string;
    company?: string;
  }> = [
    {
      type: "education",
      title: "University of Science and Technology Danang",
      startDate: "Sep 2023",
      endDate: "now",
      description: "Study Information Technology Bachelor",
      color: "orange",
    },
    {
      type: "work",
      title: "Backend Developer",
      company: "Madison Technology",
      startDate: "Feb 2024",
      endDate: "now",
      description: "Work",
      color: "gray",
    },
    {
      type: "work",
      title: "Cofounder",
      company: "Usitech",
      startDate: "Sep 2025",
      endDate: null,
      description: "Work",
      color: "gray",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getEventColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-orange-500";
      case "gray":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "education":
        return "EDUCATION";
      case "work":
        return "WORK";
      default:
        return "";
    }
  };

  // Calculate timeline years
  const years = ["2023", "2024", "2025", "2026"];
  const currentYear = new Date().getFullYear();

  return (
    <section id="career" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 section-header">Career</h2>
            <p className="text-gray-400 text-lg">A Brief History</p>
          </div>
          
          {/* Legend */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
              <span className="text-white text-sm">WORK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-white text-sm">EDUCATION</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Main Timeline Axis */}
          <div className="relative h-1 bg-gray-700 mb-16">
            {/* Year Markers */}
            {years.map((year, index) => (
              <div
                key={year}
                className="absolute top-0 bottom-0 flex flex-col items-center"
                style={{
                  left: `${(index / (years.length - 1)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="w-px h-8 bg-gray-600"></div>
                <span
                  className="text-gray-400 text-xs mt-2 whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  {year}
                </span>
              </div>
            ))}
          </div>

          {/* Events */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {careerEvents.map((event, index) => {
              const startYear = parseInt(event.startDate.split(" ")[1]);
              const monthMap: Record<string, number> = {
                Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
              };
              const startMonthStr = event.startDate.split(" ")[0];
              const startMonth = monthMap[startMonthStr] ?? 0;
              
              const isOngoing = event.endDate === "now";
              const isSingleEvent = !event.endDate;
              
              const endYear = isOngoing 
                ? currentYear 
                : isSingleEvent 
                ? startYear 
                : parseInt(event.endDate!.split(" ")[1]);
              
              const endMonth = isOngoing 
                ? new Date().getMonth() 
                : isSingleEvent 
                ? startMonth 
                : monthMap[event.endDate!.split(" ")[0]] ?? 0;

              // Calculate positions (0-100%)
              const startPosition = ((startYear - 2023) + (startMonth / 12)) / (2026 - 2023) * 100;
              const endPosition = isOngoing
                ? 100
                : isSingleEvent
                ? startPosition
                : ((endYear - 2023) + (endMonth / 12)) / (2026 - 2023) * 100;

              const lineWidth = Math.max(endPosition - startPosition, 2);

              return (
                <motion.div
                  key={index}
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {/* Event Line */}
                  <div
                    className="absolute top-0 bottom-0"
                    style={{
                      left: `${startPosition}%`,
                      width: `${lineWidth}%`,
                    }}
                  >
                    <div className="relative h-full">
                      {/* Horizontal Line - only show if not single event */}
                      {!isSingleEvent && (
                        <div
                          className={`absolute top-1/2 h-1 ${getEventColor(event.color)}`}
                          style={{ width: "100%", transform: "translateY(-50%)" }}
                        ></div>
                      )}
                      
                      {/* Start Dot */}
                      <div
                        className={`absolute top-1/2 w-4 h-4 rounded-full ${getEventColor(event.color)} border-2 border-[#0a0a0a] shadow-lg`}
                        style={{ left: 0, transform: "translate(-50%, -50%)" }}
                      ></div>
                      
                      {/* End Dot (if not single event and not ongoing) */}
                      {!isSingleEvent && !isOngoing && (
                        <div
                          className={`absolute top-1/2 w-4 h-4 rounded-full ${getEventColor(event.color)} border-2 border-[#0a0a0a] shadow-lg`}
                          style={{ right: 0, transform: "translate(50%, -50%)" }}
                        ></div>
                      )}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div
                    className="relative"
                    style={{ paddingLeft: `${startPosition}%`, marginTop: "8px" }}
                  >
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 max-w-md hover:border-orange-500/50 transition-colors">
                      <h3 className="text-white font-bold mb-1">{event.title}</h3>
                      {event.company && (
                        <p className="text-gray-400 text-sm mb-2">{event.company}</p>
                      )}
                      {event.description && (
                        <p className="text-gray-400 text-sm mb-2">{event.description}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <span>{event.startDate}</span>
                        <span>→</span>
                        <span>{isOngoing ? "now" : isSingleEvent ? "Present" : event.endDate}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const projects = [
    {
      title: "Virtual Network Maker",
      description: "A virtual network application for organizations that simulates LAN network mechanisms, enabling remote connectivity and secure peer-to-peer communication across distributed environments.",
      githubLinks: [
        { name: "Signaling Server", url: "https://github.com/daikaduc05/Signaling-Server" },
        { name: "GO Implementation", url: "https://github.com/daikaduc05/GO" },
      ],
      categories: ["DevOps", "Network Security"],
      icon: "🌐",
      image: "/images/vitural_network.png",
      techStack: ["GO", "FastAPI"],
    },
    {
      title: "Team Planner App",
      description: "A comprehensive team planning and collaboration application designed to streamline project management, task allocation, and team coordination with real-time synchronization and intuitive user interface.",
      githubLinks: [
        { name: "Repository", url: "https://github.com/daikaduc05/SE" },
      ],
      categories: ["App"],
      icon: "📱",
      image: "/images/planify.png",
      techStack: ["NestJS", "Expo Go"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 section-header">Projects</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Some of my recent work and contributions
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-orange-500/50"
            >
              {/* Project Image */}
              {project.image && (
                <div 
                  className="mb-4 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(project.image!)}
                >
                  <div className="relative w-full aspect-[9/16] sm:aspect-[16/9]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{project.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((category, catIndex) => (
                  <span
                    key={catIndex}
                    className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-gray-400 text-xs font-semibold">Tech Stack:</span>
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* GitHub Links */}
              <div className="flex flex-wrap gap-3">
                {project.githubLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors text-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Project preview"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function AwardsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Honorable Mention in ICPC National Vietnam",
      organization: "Danang University of Science and Technology",
      year: "2025",
      month: "Nov 2025",
      description: "Received Honorable Mention recognition at the ICPC National Vietnam competition",
      icon: "🏅",
    },
    {
      title: "Runner Up 1 DUT CodeLeague (Warrior Div)",
      organization: "Danang University of Science and Technology",
      year: "2025",
      month: "Jul 2025",
      description: "Achieved Runner Up position in the Warrior Division of DUT CodeLeague competition",
      icon: "🥈",
    },
    {
      title: "Honorable Mention at the 2024 ICPC Asia Hanoi Regional Contest",
      organization: "Danang University of Science and Technology",
      year: "2024",
      month: "Dec 2024",
      description: "Received Honorable Mention recognition at the prestigious ICPC Asia Hanoi Regional Contest",
      icon: "🏅",
    },
    {
      title: "Second Prize in the Vietnam National Olympiad in Informatics for University Students",
      organization: "Danang University of Science and Technology",
      year: "2024",
      month: "Dec 2024",
      description: "Secured Second Prize in the national-level programming competition for university students",
      icon: "🥈",
    },
    {
      title: "Second Prize in the ICPC Central Vietnamese",
      organization: "Danang University of Science and Technology",
      year: "2024",
      month: "Oct 2024",
      description: "Achieved Second Prize in the ICPC Central Vietnamese regional contest",
      icon: "🥈",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="awards" className="min-h-screen flex items-center py-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 section-header">Awards & Achievements</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-orange-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{award.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {award.title}
                    </h3>
                    <span className="text-orange-500 text-sm font-semibold">
                      {award.month || award.year}
                    </span>
                  </div>
                  <p className="text-orange-400 text-sm mb-2 font-medium">
                    {award.organization}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="text-4xl font-bold text-white mb-4 section-header">Contact me</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Let's work together on your next project
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  Failed to send message. Please try again or contact me directly at danghoaiduc9@gmail.com
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:danghoaiduc9@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  danghoaiduc9@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://leetcode.com/u/daikaduc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  title="LeetCode"
                >
                  <Code className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://codeforces.com/profile/DangHoaiDuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  title="Codeforces"
                >
                  <Terminal className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/duc-dang-hoai-b15647177/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://github.com/daikaduc05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

