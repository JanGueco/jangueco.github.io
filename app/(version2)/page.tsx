"use client";

import { useRef, useState, useCallback } from "react";
import SideRays from "@/components/backgrounds/SideRays/SideRays";
import {
  portfolioAbout,
  portfolioHero,
  portfolioProjects,
} from "@/lib/portfolio-data";
import { V2ContactFooter } from "./components/V2ContactFooter";
import { V2EducationSkillsSection } from "./components/V2EducationSkillsSection";
import { V2ExperienceSection } from "./components/V2ExperienceSection";
import { V2LearningCertificationsSection } from "./components/V2LearningCertificationsSection";
import { V2ProjectCard } from "./components/V2ProjectCard";
import { V2HeroProfile } from "./components/V2HeroProfile";
import { V2RightNav } from "./components/V2RightNav";
import { V2BorderCard } from "./components/V2BorderCard";
import { useSectionObserver } from "./hooks/useSectionObserver";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "education-skills",
  "projects",
  "learning-certifications",
  "contact",
];

export default function V2HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null
  );

  const scrollRefCallback = useCallback((node: HTMLDivElement | null) => {
    scrollRef.current = node;
    setScrollContainer(node);
  }, []);

  const { activeSectionId } = useSectionObserver(scrollRef, SECTION_IDS);

  return (
    <div className="v2-route">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0">
          <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>
      </div>

      <V2RightNav
        activeSectionId={activeSectionId}
        scrollContainer={scrollContainer}
      />

      <div ref={scrollRefCallback} className="v2-scroll">
        <section id="hero" className="v2-section flex flex-col justify-center">
          <div className="v2-section-inner">
            <div className="v2-hero-layout flex flex-col sm:flex-row gap-8">
              <V2HeroProfile />
              <div className="v2-hero-text">
                <h1 className="font-bold tracking-tight mb-3">
                  {portfolioHero.name}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-[#d4d4d4] mb-4">
                  {portfolioHero.title}
                </p>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  {portfolioHero.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="v2-section flex flex-col justify-center">
          <div className="v2-section-inner">
            <h2 className="v2-section-title">About Me</h2>
            <V2BorderCard>
              <div className="v2-card v2-card--glow space-y-4">
                {portfolioAbout.expanded.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </V2BorderCard>
          </div>
        </section>

        <section id="experience" className="v2-section">
          <div className="v2-section-inner">
            <h2 className="v2-section-title">Work Experience</h2>
            <V2ExperienceSection />
          </div>
        </section>

        <section
          id="education-skills"
          className="v2-section flex flex-col justify-center"
        >
          <div className="v2-section-inner">
            <h2 className="v2-section-title">Education & Skills</h2>
            <V2EducationSkillsSection />
          </div>
        </section>

        <section id="projects" className="v2-section">
          <div className="v2-section-inner">
            <h2 className="v2-section-title">Project Highlights</h2>
            <div className="space-y-6">
              {portfolioProjects.map((project) => (
                <V2ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="learning-certifications"
          className="v2-section flex flex-col justify-center"
        >
          <div className="v2-section-inner">
            <h2 className="v2-section-title">Learning & Certifications</h2>
            <V2LearningCertificationsSection />
          </div>
        </section>

        <section id="contact" className="v2-section flex flex-col justify-center">
          <div className="v2-section-inner">
            <h2 className="v2-section-title">Get In Touch</h2>
            <V2ContactFooter />
          </div>
        </section>
      </div>
    </div>
  );
}
