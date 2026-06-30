"use client";

import GlassIcons from "@/components/nav/GlassIcons/GlassIcons";
import {
  FiBook,
  FiBookOpen,
  FiBriefcase,
  FiFolder,
  FiHome,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { scrollToSection } from "../hooks/useSectionObserver";

const NAV_ITEMS = [
  { sectionId: "hero", label: "Home", icon: FiHome },
  { sectionId: "about", label: "About", icon: FiUser },
  { sectionId: "experience", label: "Experience", icon: FiBriefcase },
  {
    sectionId: "education-skills",
    label: "Education",
    icon: FiBook,
  },
  { sectionId: "projects", label: "Projects", icon: FiFolder },
  {
    sectionId: "learning-certifications",
    label: "Learning",
    icon: FiBookOpen,
  },
  { sectionId: "contact", label: "Contact", icon: FiMail },
] as const;

type V2RightNavProps = {
  activeSectionId: string;
  scrollContainer: HTMLElement | null;
};

export function V2RightNav({
  activeSectionId,
  scrollContainer,
}: V2RightNavProps) {
  const items = NAV_ITEMS.map((item) => {
    const Icon = item.icon;
    return {
      icon: <Icon size="1.15em" color="#ffffff" />,
      color: "white",
      label: item.label,
      isActive: activeSectionId === item.sectionId,
      onClick: () => {
        if (scrollContainer) {
          scrollToSection(scrollContainer, item.sectionId);
        }
      },
    };
  });

  return (
    <nav className="v2-nav" aria-label="Section navigation">
      <GlassIcons
        items={items}
        className="glass-icons--white glass-icons--compact glass-icons--horizontal v2-nav-icons"
      />
    </nav>
  );
}
