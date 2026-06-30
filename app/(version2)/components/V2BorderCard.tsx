import BorderGlow from "@/components/effects/BorderGlow/BorderGlow";
import type { ReactNode } from "react";

type V2BorderCardProps = {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
};

export function V2BorderCard({
  children,
  className = "",
  borderRadius = 10,
}: V2BorderCardProps) {
  return (
    <BorderGlow
      className={`v2-border-glow ${className}`.trim()}
      glowColor="0 0 100"
      colors={["#f8fafc", "#96c8ff", "#ffffff"]}
      backgroundColor="#0D0D0D"
      borderRadius={borderRadius}
      glowRadius={24}
      glowIntensity={0.5}
      coneSpread={22}
      edgeSensitivity={0}
      fillOpacity={0.2}
      animated={false}
    >
      {children}
    </BorderGlow>
  );
}
