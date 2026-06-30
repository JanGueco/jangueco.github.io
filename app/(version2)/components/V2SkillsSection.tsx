import {
  Braces,
  Cloud,
  Code2,
  Database,
  Server,
  Terminal,
} from "lucide-react";
import { portfolioTechStack } from "@/lib/portfolio-data";
import { V2BorderCard } from "./V2BorderCard";
import { V2SkillGlassIcon } from "./V2SkillGlassIcon";

const iconMap = {
  Code2,
  Terminal,
  Database,
  Braces,
  Cloud,
  Server,
} as const;

export function V2SkillsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {portfolioTechStack.map((tech) => {
        const Icon = iconMap[tech.icon];
        return (
          <V2BorderCard key={tech.name}>
            <div className="v2-card v2-card--glow">
              <div className="flex items-center gap-3 mb-3">
                <V2SkillGlassIcon icon={<Icon className="w-6 h-6" />} />
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
              <p className="text-sm leading-relaxed">{tech.experience}</p>
            </div>
          </V2BorderCard>
        );
      })}
    </div>
  );
}
