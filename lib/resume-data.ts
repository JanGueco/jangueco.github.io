export type ResumeExperience = {
  period: string;
  title: string;
  company: string;
  description?: string;
  bullets: string[];
};

export type ResumeEducation = {
  period: string;
  degree: string;
  institution: string;
  description?: string;
  isPlaceholder?: boolean;
};

export type ResumeProjectHighlight = {
  name: string;
  category?: "Professional" | "Personal";
  summary: string;
  techStack: string;
  bullets: string[];
};

export const resumeProfile = {
  name: "Jan Michael Vincent Gueco",
  title: "Data Engineer & Software Developer",
  photo: "/Profile Pic.jpeg",
  about:
    "Data engineer and software developer with 4+ years building data pipelines, web apps, and deployment workflows. I work mainly in Python, SQL, Laravel, and AWS. Experienced across digital sustainability analytics, enterprise OutSystems delivery, independent full-stack contract work, and internal security tooling.",
  contact: {
    email: "jmv.gueco@gmail.com",
    phone: "+63 935 863 5866",
    location: "San Fernando, Pampanga, Philippines",
    linkedin: "linkedin.com/in/jan-michael-vincent-gueco-607119198",
    github: "github.com/JanGueco",
    portfolio: "jangueco.github.io",
  },
};

/** Absolute https URL for mailto/tel/external links (print PDF + screen). */
export function resumeExternalUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

export function resumePhoneUrl(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const resumeExperience: ResumeExperience[] = [
  {
    period: "2025 - Present",
    title: "Data Engineer",
    company: "Cambridge University Press & Assessment",
    description:
      "Promoted from Junior Data Engineer in 2025. Digital Sustainability delivery with PySpark validation, SQL-first pipeline optimization, and AI-assisted discovery.",
    bullets: [
      "Led R&D for a Quick Carbon Calculator using Python for automated API ingestion and Matplotlib visualizations for executive reporting",
      "Built data quality gates with PySpark, including automated validation checks between raw and transformed datasets",
      "Delivered a proof-of-concept RAG system that ingested Confluence documentation using Python, n8n, and a React front end",
      "Generated carbon assessment reports for platform owners and stakeholders; reviewed code and mentored peers",
    ],
  },
  {
    period: "2023 - 2025",
    title: "Junior Data Engineer",
    company: "Cambridge University Press & Assessment",
    description:
      "Supported the Digital Sustainability team through data engineering and analytics: automating pipelines, optimizing ETL, and building solutions for digital carbon assessments.",
    bullets: [
      "Automated ETL processes in Python and transitioned workloads into SQL-based workflows for scalability",
      "Python automation for AWS usage categorization and carbon calculation, cutting processing from days to minutes",
      "Built the internal Digital Emissions Calculator (DEC Tool) for digital product carbon assessment",
      "Led yearly carbon assessments across data collection, cleaning, analysis, reporting, and stakeholder presentation",
    ],
  },
  {
    period: "2025 - 2026",
    title: "Full Stack Developer (Contractual - Independent)",
    company: "Enterprise Management Solutions",
    description:
      "Independent contract work: marketing sites, deployment pipelines, and CRM automation for clients.",
    bullets: [
      "Built marketing websites with Laravel, PHP, and Blade; set up DNS, Cloudflare, TLS, and Nginx on AWS EC2",
      "Integrated GoHighLevel (GHL) CRM for lead capture and third-party workflows",
      "Built a Python automation tool for Freedom Health Systems that provisions GoHighLevel intake calendars across 17 sub-account locations",
    ],
  },
  {
    period: "2025 - 2026",
    title: "Security & Internal Tooling (Concurrent)",
    company: "Enterprise Management Solutions",
    description:
      "Internal tooling alongside contract work. CSO-requested security dashboard and reporting; CTO-requested Virtual Mailroom.",
    bullets: [
      "Built a Django + React security findings dashboard ingesting monthly AWS Inspector and Prowler scans",
      "Built a FastAPI Virtual Mailroom service at the CTO's request (Gmail, S3, Gemini OCR) for the Legal team",
      "Automated a monthly AWS security reporting pipeline (Python, boto3, cron) and supporting checklist/report tools",
    ],
  },
  {
    period: "2021 - 2023",
    title: "Junior Software Developer / OutSystems Developer",
    company: "Direct Sourcing Solutions",
    description:
      "Enterprise-grade OutSystems applications for Coca-Cola and MPTC, from development through production.",
    bullets: [
      "Contributed to MPT DriveHub, used by millions of drivers for toll payments and account management",
      "Collaborated on Coca-Cola's Distribution Management System (DMS) for high-volume logistics data",
      "Developed Coca-Cola's Worker Safety and Compliance Application for web and mobile",
    ],
  },
  {
    period: "2019",
    title: "IT Support and QA Intern",
    company: "Beepo Inc.",
    bullets: [
      "Conducted QA testing and compared live websites against wireframe designs",
      "Provided IT support and resolved employee hardware and software tickets",
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    period: "2015 - 2020",
    degree: "Bachelor in Computer Engineering",
    institution: "Holy Angel University",
    description:
      "Studied programming, mathematics, and hardware systems. Participated in competitive programming contests and hackathons.",
  },
];

export const resumeSkills: string[] = [
  "Python",
  "SQL",
  "PySpark",
  "Pandas",
  "JavaScript",
  "TypeScript",
  "React",
  "Laravel",
  "PHP",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "OutSystems",
  "PostgreSQL",
  "MySQL",
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Nginx",
  "Docker",
  "Git",
  "REST APIs",
  "Playwright",
  "Lighthouse",
  "N8N",
  "boto3",
  "GoHighLevel (GHL)",
];

/**
 * Professional + personal project highlights (condensed from portfolio).
 * Omitted: AWS Security Checklist App, smaller hobby projects (Shapes, Pysort, etc.).
 */
export const resumeProjectHighlights: ResumeProjectHighlight[] = [
  {
    name: "Security Findings Dashboard",
    category: "Professional",
    summary:
      "Internal Django + React app that ingests monthly AWS Inspector and Prowler exports and visualizes month-over-month deltas for the security team.",
    techStack:
      "Python, Django, Django REST Framework, React, TypeScript, PostgreSQL, AWS S3, Google OAuth, Gunicorn, Nginx",
    bullets: [
      "Built the full system: ingestion pipeline, REST API, and React dashboard with stable-ID delta tracking",
      "Deployed on EC2 with ~68 backend tests covering ingest, API, and insights logic",
    ],
  },
  {
    name: "GHL Round Robin Calendar Automation",
    category: "Professional",
    summary:
      "Python CLI for Freedom Health Systems that automates GoHighLevel intake calendar setup across 17 agency sub-accounts.",
    techStack:
      "Python, GoHighLevel API v2, requests, python-dotenv, JSON Templating",
    bullets: [
      "Config-driven pipeline: 3 round-robin calendars per location with 24 notification rules each",
      "Bulk multi-location rollout with per-agency config overlays and dry-run validation",
    ],
  },
  {
    name: "Virtual Mailroom",
    category: "Professional",
    summary:
      "FastAPI service that ingests Gmail attachments via Pub/Sub, stores files in S3, runs Gemini OCR, and exposes searchable results. Used primarily by Legal.",
    techStack:
      "Python, FastAPI, Gmail API, Google Pub/Sub, AWS S3, PostgreSQL, SQLAlchemy, Google Gemini, pytest",
    bullets: [
      "Full pipeline: Gmail webhook, S3 storage, OCR, and token-secured intranet REST API",
      "Gmail watch renewal and history-cursor recovery; 35 unit/integration tests",
    ],
  },
  {
    name: "Cybersecurity Exports",
    category: "Professional",
    summary:
      "Cron-scheduled pipeline on AWS EC2 that exports AWS Inspector2 and Prowler results to S3 as standardized JSON.",
    techStack: "Python, Bash, boto3, AWS Inspector2, Prowler, AWS S3, KMS, Cron",
    bullets: [
      "Resilient orchestrator with IAM instance-profile-only auth (no static AWS keys)",
      "Feeds the Security Findings Dashboard as part of an internal security toolchain",
    ],
  },
  {
    name: "AWS Security Report Generator",
    category: "Professional",
    summary:
      "Python scripts and static HTML dashboards that turn raw Inspector and Prowler exports into executive and repo-level reports.",
    techStack: "Python, pandas, JavaScript, HTML/CSS",
    bullets: [
      "ETL scripts flatten nested JSON into CSV; static HTML dashboards need no backend",
      "Surfaced a recurring SQL injection pattern across 556 findings from 1,700+ combined scan results",
    ],
  },
  {
    name: "GreenConvert",
    category: "Personal",
    summary:
      "Full-stack image and video converter to WebP and WebM with an eco-themed UI and estimates of CO₂ savings from smaller file sizes. FastAPI backend and React (Vite) frontend.",
    techStack: "React, Vite, Tailwind CSS, Python, FastAPI, Pillow, ffmpeg",
    bullets: [
      "Async conversion jobs with status polling, multipart uploads, and downloadable results",
      "Connects Python media processing (Pillow, ffmpeg) to a modern React SPA workflow",
    ],
  },
  {
    name: "REST API Blogsite",
    category: "Personal",
    summary:
      "Django REST Framework blogsite with authentication, CRUD, and token-based security. Started as an interview exercise and expanded into a full project.",
    techStack: "Python, Django, Django REST Framework, MySQL, Knox",
    bullets: [
      "Built and secured REST APIs with Knox token authentication and modular CRUD design",
      "Utility scripts for database setup, migrations, and maintainable project structure",
    ],
  },
];
