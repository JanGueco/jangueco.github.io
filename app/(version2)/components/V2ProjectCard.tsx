"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import {
  shouldShowProjectMedia,
  type PortfolioProject,
} from "@/lib/portfolio-data";
import { V2BorderCard } from "./V2BorderCard";
import { V2CollapsiblePanel } from "./V2CollapsiblePanel";
import { V2ImageLightbox } from "./V2ImageLightbox";
import { V2LazyImage } from "./V2LazyImage";
import { V2SkillGlassIcon } from "./V2SkillGlassIcon";

export function V2ProjectCard({ project }: { project: PortfolioProject }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    openKey: number;
  } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ src, alt, openKey: Date.now() });
  };

  return (
    <>
      <V2BorderCard>
        <article className="v2-card v2-card--glow">
          <button
            type="button"
            className="w-full text-left"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="v2-tech-pill">{project.type}</span>
                </div>
                {project.vibeCoded && (
                  <span className="v2-vibe-hint" title="AI-assisted development">
                    <V2SkillGlassIcon
                      className="v2-vibe-glass-icon"
                      icon={<Sparkles className="w-3 h-3" />}
                    />
                    vibe coded
                  </span>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#a3a3a3] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <p className="leading-relaxed">{project.summary}</p>
          </button>

          <V2CollapsiblePanel open={isOpen}>
            <div className="pt-4 border-t border-white/10 mt-4">
              {shouldShowProjectMedia(project) && (
                <V2LazyImage
                  src={project.media}
                  alt={project.title}
                  className="v2-project-media"
                  onEnlarge={(src) => openLightbox(src, project.title)}
                />
              )}
              {project.highlight && (
                <p className="mb-4 text-sm text-[#d4d4d4] border-l-2 border-white/20 pl-3">
                  {project.highlight}
                </p>
              )}
              <div className="v2-tech-pills mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="v2-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className="v2-detail-block"
                style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}
              >
                <h4>What I Built / Learned</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {project.learned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.bonuses.length > 0 && (
                <div className="v2-detail-block">
                  <h4>Bonus Highlights</h4>
                  {project.bonuses.map((bonus) => (
                    <div key={bonus.text} className="v2-bonus-block">
                      <p className="text-sm">{bonus.text}</p>
                      <V2LazyImage
                        src={bonus.media}
                        alt={bonus.text}
                        className="v2-bonus-media"
                        onEnlarge={(src) => openLightbox(src, bonus.text)}
                      />
                    </div>
                  ))}
                </div>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-[#e5e5e5] hover:underline"
                >
                  View repository
                </a>
              )}
            </div>
          </V2CollapsiblePanel>
        </article>
      </V2BorderCard>

      <V2ImageLightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        openKey={lightbox?.openKey}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
