import ProfileCard from "@/components/effects/ProfileCard/ProfileCard";
import { portfolioHero } from "@/lib/portfolio-data";

export function V2HeroProfile() {
  return (
    <ProfileCard
      className="v2-hero-profile"
      avatarUrl={portfolioHero.photo}
      name={portfolioHero.name}
      title={portfolioHero.title}
      showUserInfo={false}
      enableTilt={true}
      enableMobileTilt={false}
      behindGlowEnabled={true}
      behindGlowColor="rgba(150, 200, 255, 0.35)"
      behindGlowSize="60%"
      innerGradient="linear-gradient(145deg, rgba(10,10,10,0.95) 0%, rgba(150,200,255,0.12) 100%)"
    />
  );
}
