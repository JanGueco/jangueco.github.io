import { resumeEducation } from "@/lib/resume-data";
import { V2BorderCard } from "./V2BorderCard";
import { V2SkillsSection } from "./V2SkillsSection";

export function V2EducationSkillsSection() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-[#e5e5e5]">Education</h3>
        <div className="space-y-4">
          {resumeEducation.map((edu) => (
            <V2BorderCard key={edu.institution}>
              <div className="v2-card v2-card--glow">
                <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                <p className="text-[#d4d4d4] mb-1">{edu.institution}</p>
                <p className="text-sm text-[#737373] mb-3">{edu.period}</p>
                {edu.description && (
                  <p className="leading-relaxed">{edu.description}</p>
                )}
              </div>
            </V2BorderCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-[#e5e5e5]">Skills</h3>
        <V2SkillsSection />
      </div>
    </div>
  );
}

