import "@/components/nav/GlassIcons/GlassIcons.css";
import type { ReactNode } from "react";

type V2SkillGlassIconProps = {
  icon: ReactNode;
};

export function V2SkillGlassIcon({ icon }: V2SkillGlassIconProps) {
  return (
    <span className="v2-skill-glass-icon" aria-hidden="true">
      <span
        className="icon-btn__back"
        style={{
          background:
            "linear-gradient(hsla(0, 0%, 100%, 0.16), hsla(0, 0%, 100%, 0.06))",
        }}
      />
      <span className="icon-btn__front">
        <span className="icon-btn__icon">{icon}</span>
      </span>
    </span>
  );
}
