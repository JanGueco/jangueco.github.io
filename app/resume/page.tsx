import Image from "next/image";
import {
  resumeProfile,
  resumeExperience,
  resumeEducation,
  resumeSkills,
  resumeProjectHighlights,
  resumeExternalUrl,
  resumePhoneUrl,
} from "@/lib/resume-data";
import { ResumePrintButton } from "./ResumePrintButton";
import { ResumePageSpacers } from "./ResumePageSpacers";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.includes("—");
}

export default function ResumePage() {
  const { contact } = resumeProfile;
  const hasEducationPlaceholder = resumeEducation.some((e) => e.isPlaceholder);

  return (
    <div className="resume-page">
      <ResumePrintButton />
      <ResumePageSpacers sheetId="resume-sheet" />

      <div className="resume-preview-wrap">
        <article id="resume-sheet" className="resume-sheet" aria-label="Resume">
          <header className="resume-header">
            <Image
              src={resumeProfile.photo}
              alt=""
              width={52}
              height={52}
              className="resume-photo"
              priority
            />
            <div className="resume-header-text">
              <h1 className="resume-name">{resumeProfile.name}</h1>
              <p className="resume-role">{resumeProfile.title}</p>
              <div className="resume-contact-row">
                <a
                  className={`resume-contact-item resume-contact-link${isPlaceholder(contact.phone) ? " resume-contact-placeholder" : ""}`}
                  href={resumePhoneUrl(contact.phone)}
                >
                  <IconPhone />
                  {contact.phone}
                </a>
                <a
                  className="resume-contact-item resume-contact-link"
                  href={`mailto:${contact.email}`}
                >
                  <IconMail />
                  {contact.email}
                </a>
                <span
                  className={`resume-contact-item${isPlaceholder(contact.location) ? " resume-contact-placeholder" : ""}`}
                >
                  <IconMapPin />
                  {contact.location}
                </span>
                <a
                  className="resume-contact-item resume-contact-link"
                  href={resumeExternalUrl(contact.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLink />
                  {contact.linkedin}
                </a>
                <a
                  className="resume-contact-item resume-contact-link"
                  href={resumeExternalUrl(contact.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLink />
                  {contact.github}
                </a>
                <a
                  className="resume-contact-item resume-contact-link"
                  href={resumeExternalUrl(contact.portfolio)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLink />
                  {contact.portfolio}
                </a>
              </div>
            </div>
          </header>

          <section className="resume-section">
            <h2 className="resume-section-bar">About Me</h2>
            <p className="resume-about">{resumeProfile.about}</p>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-bar">Work Experience</h2>
            {resumeExperience.map((job) => (
              <div key={`${job.company}-${job.title}-${job.period}`} className="resume-entry">
                <div className="resume-entry-date">{job.period}</div>
                <div>
                  <h3 className="resume-entry-title">
                    {job.title}
                    <span className="resume-entry-company">
                      {" "}
                      · {job.company}
                    </span>
                  </h3>
                  {job.description && (
                    <p className="resume-entry-desc">{job.description}</p>
                  )}
                  <ul className="resume-bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section resume-section-education">
            <h2 className="resume-section-bar">Education</h2>
            {hasEducationPlaceholder && (
              <p className="resume-education-placeholder resume-no-print">
                Placeholder: add your university name, graduation year, and
                location/phone in lib/resume-data.ts before printing your final
                PDF.
              </p>
            )}
            {resumeEducation.map((edu) => (
              <div
                key={`${edu.degree}-${edu.institution}`}
                className="resume-entry"
              >
                <div className="resume-entry-date">{edu.period}</div>
                <div>
                  <h3 className="resume-entry-title">
                    {edu.degree}
                    <span className="resume-entry-company">
                      {" "}
                      · {edu.institution}
                    </span>
                  </h3>
                  {edu.description && (
                    <p className="resume-entry-desc">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </section>

          <div className="resume-page-break-after" aria-hidden="true" />

          <section className="resume-section resume-section-skills">
            <h2 className="resume-section-bar">Skills</h2>
            <ul className="resume-skills-grid">
              {resumeSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section resume-section-projects">
            <h2 className="resume-section-bar">Project Highlights</h2>
            {resumeProjectHighlights.map((project) => (
              <div key={project.name} className="resume-project">
                <h3 className="resume-project-name">
                  {project.name}
                  {project.category === "Personal" && (
                    <span className="resume-project-category"> · Personal</span>
                  )}
                </h3>
                <p className="resume-project-summary">{project.summary}</p>
                <p className="resume-project-tech">{project.techStack}</p>
                <ul className="resume-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}
