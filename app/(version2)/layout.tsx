import type { Metadata } from "next";
import "./version2.css";
import {
  portfolioAbout,
  portfolioCertifications,
  portfolioExperiences,
  portfolioHero,
  portfolioLearningItems,
  portfolioProjects,
  portfolioTechStack,
} from "@/lib/portfolio-data";
import { resumeEducation, resumeProfile } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Jan Gueco — Data Engineer & Software Developer",
  description:
    "Jan Michael Vincent Gueco: data engineer and full-stack developer. Python, SQL, AWS, React, Django, FastAPI. Cambridge, EMS, and independent contract work.",
  openGraph: {
    title: "Jan Gueco — Data Engineer & Software Developer",
    description:
      "Portfolio: data pipelines, web apps, security tooling, and cloud delivery.",
  },
};

function V2CrawlableContent() {
  return (
    <aside className="v2-crawl-content" aria-label="Portfolio full text">
      <h2>{portfolioHero.name}</h2>
      <p>{portfolioHero.title}</p>
      <p>{portfolioHero.tagline}</p>
      {portfolioAbout.expanded.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {portfolioExperiences.map((exp) => (
        <section key={`${exp.company}-${exp.title}`}>
          <h3>
            {exp.title} at {exp.company} ({exp.period})
          </h3>
          <p>{exp.description}</p>
          <ul>
            {exp.dayToDay.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {exp.projectSummaries?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>
      ))}
      {resumeEducation.map((edu) => (
        <p key={edu.institution}>
          {edu.degree}, {edu.institution}, {edu.period}
        </p>
      ))}
      {portfolioTechStack.map((tech) => (
        <p key={tech.name}>
          {tech.name}: {tech.experience}
        </p>
      ))}
      {portfolioProjects.map((project) => (
        <section key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </section>
      ))}
      {portfolioLearningItems.map((item) => (
        <p key={item.title}>
          {item.title} ({item.progress}): {item.description}
        </p>
      ))}
      {portfolioCertifications.map((cert) => (
        <p key={cert.title}>
          {cert.title}, {cert.issuer}, {cert.date}
        </p>
      ))}
      <p>
        Contact: {resumeProfile.contact.email}, {resumeProfile.contact.github},{" "}
        {resumeProfile.contact.linkedin}
      </p>
    </aside>
  );
}

export default function Version2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <V2CrawlableContent />
    </>
  );
}
