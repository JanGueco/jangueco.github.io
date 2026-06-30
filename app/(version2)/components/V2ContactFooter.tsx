import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import {
  resumeExternalUrl,
  resumeProfile,
} from "@/lib/resume-data";
import { V2BorderCard } from "./V2BorderCard";
import { V2SkillGlassIcon } from "./V2SkillGlassIcon";

const quotes = [
  {
    label: "Religious",
    text: "“Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.” (Isaiah 41:10)",
  },
  {
    label: "Professional",
    text: "“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” (Henry Ford)",
  },
  {
    label: "Personal",
    text: "“Don't aim to be the best in the world. Aim to be the best for the world.” (Unknown)",
  },
];

const links = [
  {
    label: "Email",
    href: `mailto:${resumeProfile.contact.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: resumeExternalUrl(resumeProfile.contact.github),
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: resumeExternalUrl(resumeProfile.contact.linkedin),
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@JanDGueco",
    icon: Youtube,
  },
] as const;

export function V2ContactFooter() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <V2BorderCard key={link.label}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="v2-card v2-card--glow v2-contact-link"
              >
                <V2SkillGlassIcon icon={<Icon className="w-6 h-6" />} />
                <span className="text-sm font-medium text-[#e5e5e5]">
                  {link.label}
                </span>
              </a>
            </V2BorderCard>
          );
        })}
      </div>


      <div>

        <h3 className="text-lg font-semibold mb-4 text-[#e5e5e5]">

          Favorite Quotes

        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {quotes.map((quote) => (

            <V2BorderCard key={quote.label}>

              <div className="v2-card v2-card--glow">

                <p className="v2-label mb-3">{quote.label}</p>

                <p className="text-sm italic leading-relaxed text-[#a3a3a3]">

                  {quote.text}

                </p>

              </div>

            </V2BorderCard>

          ))}

        </div>

      </div>



      <p className="text-sm text-[#737373] border-t border-white/10 pt-6">
        © 2026 Jan Gueco. Vibe coded in Cursor.
      </p>

    </div>

  );

}


