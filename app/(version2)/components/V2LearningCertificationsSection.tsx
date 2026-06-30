import { ExternalLink } from "lucide-react";
import { portfolioCertifications, portfolioLearningItems } from "@/lib/portfolio-data";
import { V2BorderCard } from "./V2BorderCard";

export function V2LearningCertificationsSection() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-[#e5e5e5]">Learning</h3>
        <div className="space-y-4">
          {portfolioLearningItems.map((item) => (
            <V2BorderCard key={item.title}>
              <div className="v2-card v2-card--glow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <span className="v2-tech-pill">{item.progress}</span>
                </div>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </V2BorderCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-[#e5e5e5]">
          Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {portfolioCertifications.map((cert) => (
            <V2BorderCard key={cert.title} className="h-full">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-card v2-card--glow v2-cert-card hover:bg-white/[0.05] transition-colors"
              >
                <h4 className="text-base font-semibold mb-2 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-sm text-[#d4d4d4] mb-1">{cert.issuer}</p>
                <p className="text-xs text-[#737373] mb-4">{cert.date}</p>
                <span className="v2-cert-cta">
                  View certificate
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
            </V2BorderCard>
          ))}
        </div>
      </div>
    </div>
  );
}
