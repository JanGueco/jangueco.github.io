"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PortfolioExperience } from "@/lib/portfolio-data";
import {
  getExperienceGroups,
  portfolioExperiences,
} from "@/lib/portfolio-data";
import { V2BorderCard } from "./V2BorderCard";
import { V2CollapsiblePanel } from "./V2CollapsiblePanel";

type Variant =
  | "default"
  | "cambridgeCurrent"
  | "cambridgeJuniorUnder"
  | "emsClientDelivery"
  | "emsInternalConcurrent";

function DetailBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="v2-detail-block">
      <h4>{title}</h4>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CollapsibleDetailBlock({
  title,
  items,
  blockKey,
  openKey,
  onToggle,
}: {
  title: string;
  items: string[];
  blockKey: string;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  if (items.length === 0) return null;
  const isOpen = openKey === blockKey;

  return (
    <div className="v2-detail-block v2-detail-block--collapsible">
      <button
        type="button"
        className="v2-detail-toggle"
        onClick={() => onToggle(blockKey)}
        aria-expanded={isOpen}
      >
        <h4>{title}</h4>
        <ChevronDown
          className={`w-4 h-4 text-[#a3a3a3] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <V2CollapsiblePanel open={isOpen}>
        <ul className="list-disc pl-5 space-y-2 text-sm pt-2">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </V2CollapsiblePanel>
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
  variant = "default",
  nested = false,
  expandedExperience,
  setExpandedExperience,
  expandedProjectSummaryKey,
  setExpandedProjectSummaryKey,
}: {
  exp: PortfolioExperience;
  index: number;
  variant?: Variant;
  nested?: boolean;
  expandedExperience: number | null;
  setExpandedExperience: (value: number | null) => void;
  expandedProjectSummaryKey: string | null;
  setExpandedProjectSummaryKey: (key: string | null) => void;
}) {
  const isOpen = expandedExperience === index;
  const branch =
    variant === "cambridgeJuniorUnder" ||
    variant === "emsInternalConcurrent";
  const projectSummaryKey = `exp-${index}-projects`;

  const cardBody = (
    <div
      className={`v2-card ${nested ? "v2-card--nested" : "v2-card--glow"} ${
        branch ? "v2-exp-branch" : ""
      }`}
    >
      <button
        type="button"
        className="w-full text-left"
        onClick={() => setExpandedExperience(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        {variant === "cambridgeCurrent" && (
          <p className="v2-exp-variant">Current role</p>
        )}
        {variant === "cambridgeJuniorUnder" && (
          <p className="v2-exp-variant muted">Prior role, same organization</p>
        )}
        {variant === "emsClientDelivery" && (
          <p className="v2-exp-variant">Client delivery</p>
        )}
        {variant === "emsInternalConcurrent" && (
          <p className="v2-exp-variant muted">Internal security tooling</p>
        )}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-[#d4d4d4] text-sm">
              {exp.company} · {exp.period}
            </p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[#a3a3a3] shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <p className="mt-4 leading-relaxed">{exp.description}</p>
      </button>

      <V2CollapsiblePanel open={isOpen} className="border-t border-white/10">
        <div className="pt-4">
          {exp.highlight && (
            <p className="mb-4 text-sm text-[#d4d4d4] italic border-l-2 border-white/20 pl-3">
              {exp.highlight}
            </p>
          )}
          {exp.techStack && exp.techStack.length > 0 && (
            <div
              className="v2-detail-block"
              style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}
            >
              <h4>Tech Stack</h4>
              <div className="v2-tech-pills">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="v2-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          <DetailBlock title="Day-to-Day Responsibilities" items={exp.dayToDay} />
          <DetailBlock title="What I've Learned" items={exp.learned} />
          {exp.projectSummaries && exp.projectSummaries.length > 0 && (
            <CollapsibleDetailBlock
              title="Project Summaries"
              items={exp.projectSummaries}
              blockKey={projectSummaryKey}
              openKey={expandedProjectSummaryKey}
              onToggle={(key) =>
                setExpandedProjectSummaryKey(
                  expandedProjectSummaryKey === key ? null : key
                )
              }
            />
          )}
        </div>
      </V2CollapsiblePanel>
    </div>
  );

  if (nested) {
    return cardBody;
  }

  return <V2BorderCard>{cardBody}</V2BorderCard>;
}

function GroupConnector({ label }: { label: string }) {
  return <div className="v2-connector">{label}</div>;
}

export function V2ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const [expandedProjectSummaryKey, setExpandedProjectSummaryKey] = useState<
    string | null
  >(null);
  const experiences = portfolioExperiences;
  const {
    cambridgeCareerPair,
    emsStartIndex,
    emsConcurrentPair,
    experienceSliceStart,
  } = getExperienceGroups(experiences);

  const cardProps = {
    expandedExperience,
    setExpandedExperience,
    expandedProjectSummaryKey,
    setExpandedProjectSummaryKey,
  };

  return (
    <div className="space-y-6">
      <a href="/Gueco-Resume8.pdf" download className="v2-resume-link">
        Download resume (PDF)
      </a>

      {cambridgeCareerPair && (
        <V2BorderCard borderRadius={12} className="v2-border-glow--group">
          <div className="v2-group-card v2-group-card--glow">
            <div className="v2-group-header">
              <span className="font-semibold">{experiences[0].company}</span>
              <span className="v2-group-note">Same employer, role progression</span>
            </div>
            <ExperienceCard
              exp={experiences[0]}
              index={0}
              variant="cambridgeCurrent"
              nested
              {...cardProps}
            />
            <GroupConnector label="Then" />
            <ExperienceCard
              exp={experiences[1]}
              index={1}
              variant="cambridgeJuniorUnder"
              nested
              {...cardProps}
            />
          </div>
        </V2BorderCard>
      )}

      {emsConcurrentPair && (
        <V2BorderCard borderRadius={12} className="v2-border-glow--group">
          <div className="v2-group-card v2-group-card--glow">
            <div className="v2-group-header">
              <span className="font-semibold">
                {experiences[emsStartIndex].company}
              </span>
              <span className="v2-group-note">Same employer, concurrent tracks</span>
            </div>
            <ExperienceCard
              exp={experiences[emsStartIndex]}
              index={emsStartIndex}
              variant="emsClientDelivery"
              nested
              {...cardProps}
            />
            <GroupConnector label="Concurrent" />
            <ExperienceCard
              exp={experiences[emsStartIndex + 1]}
              index={emsStartIndex + 1}
              variant="emsInternalConcurrent"
              nested
              {...cardProps}
            />
          </div>
        </V2BorderCard>
      )}

      {experiences.slice(experienceSliceStart).map((exp, i) => {
        const index = i + experienceSliceStart;
        return (
          <ExperienceCard
            key={`${exp.company}-${exp.title}`}
            exp={exp}
            index={index}
            {...cardProps}
          />
        );
      })}
    </div>
  );
}
