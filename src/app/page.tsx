import Image from "next/image";
import { Hero } from "@/components/Hero";
import {
  AboutSection,
  SkillsSection,
  CareerSection,
  ProjectsSection,
  AwardsSection,
  ContactSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Section */}
            <div className="order-2 lg:order-1">
              <Hero />
            </div>

            {/* Right: Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Circular Frame */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-800 opacity-50 scale-110"></div>

                {/* Profile Image */}
                <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-gray-700">
                  <Image
                    src="/images/avatar.png"
                    alt="Profile Picture"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Career Section */}
      <CareerSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
