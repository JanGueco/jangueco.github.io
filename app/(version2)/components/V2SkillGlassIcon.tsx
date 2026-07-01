import "@/components/nav/GlassIcons/GlassIcons.css";
import type { ReactNode } from "react";

type V2SkillGlassIconProps = {
  icon: ReactNode;
  className?: string;
};

export function V2SkillGlassIcon({
  icon,
  className = "v2-skill-glass-icon",
}: V2SkillGlassIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <span className="icon-btn__back" />
      <span className="icon-btn__front">
        <span className="icon-btn__icon">{icon}</span>
      </span>
    </span>
  );
}
