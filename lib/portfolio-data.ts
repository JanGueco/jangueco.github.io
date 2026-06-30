export type PortfolioExperience = {
  title: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  dayToDay: string[];
  learned: string[];
  projectSummaries?: string[];
  highlight?: string;
};

export type PortfolioProject = {
  title: string;
  type: string;
  summary: string;
  media?: string;
  techStack: string[];
  learned: string[];
  bonuses: Array<{ text: string; media: string }>;
  vibeCoded?: boolean;
  repoUrl?: string;
  highlight?: string;
  hideMedia?: boolean;
};

export type PortfolioTechIcon = "Code2" | "Terminal" | "Database" | "Braces" | "Cloud" | "Server";

export type PortfolioTechStackItem = {
  name: string;
  icon: PortfolioTechIcon;
  experience: string;
};

export type PortfolioLearningItem = {
  title: string;
  description: string;
  progress: string;
};

export type PortfolioCertification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

export const portfolioHero = {
  name: "Jan Michael Vincent Gueco",
  title: "Data Engineer & Software Developer",
  tagline:
    "Data engineer and software developer with 4+ years building data pipelines, web apps, and deployment workflows. I work mainly in Python, SQL, Laravel, and AWS.",
  photo: "/Profile Pic.jpeg",
};

export const portfolioAbout = {
  collapsed: [
    "I've always been fascinated by technology, a passion that started from childhood gaming and grew into building and understanding computers. I earned my BS in Computer Engineering, where I explored programming, hardware, and even joined competitive programming and hackathons that pushed me to think fast and solve complex problems.",
    "After an internship doing QA testing and IT support, I started as a Software Developer before moving into Data Engineering at Cambridge, where I was promoted to Data Engineer in 2025. I also take on independent full-stack contract work, combining coding, data, and cloud delivery.",
  ],
  expanded: [
    "Ever since I was young, I've been fascinated by technology. It all started with playing Game Boy classics, then spending countless hours on Counter-Strike and Warcraft. What began as a love for gaming slowly turned into a curiosity about how computers and software actually work.",
    "I pursued this interest by earning a Bachelor's Degree in Computer Engineering, where I studied programming, mathematics, and hardware systems. During university, I participated in competitive programming contests and hackathons, which taught me how to think critically, collaborate under pressure, and find creative solutions to tough problems.",
    "I also experimented with Arduino and Raspberry Pi, reinforcing my understanding of how software and hardware connect. Along the way, I explored different operating systems like Linux (trying out distros such as Kali, Ubuntu, and even Arch (which I uninstalled pretty quickly) and MacOS, expanding my perspective on how each system offers a unique environment and workflow.",
    "Before finishing university, I completed an internship that exposed me to both QA testing and IT support. I learned how to spot issues quickly, communicate effectively with teams, and adapt to different roles.",
    "After graduation, I started my career as a Software Developer, gaining nearly two years of experience building and maintaining software solutions. Later, I transitioned to Data Engineering at Cambridge University Press & Assessment, where I found a good mix of coding and data-driven problem-solving, and was promoted to Data Engineer in 2025.",
    "Alongside that role, I have delivered independent full-stack contract work: Laravel and PHP marketing sites, DNS and CDN configuration, Nginx on AWS EC2, and integrations such as GoHighLevel CRM for lead capture.",
    "Outside of work, I'm still that curious tinkerer who enjoys exploring new technologies, experimenting with ideas, and continuously learning something new every day.",
  ],
};

export const portfolioExperiences: PortfolioExperience[] = [
    {
      title: "Data Engineer",
      company: "Cambridge University Press & Assessment",
      period: "2025 - Present",
      description:
        "Promoted from Junior Data Engineer in 2025. I deepen Digital Sustainability delivery with PySpark validation, SQL-first pipeline optimization, and AI-assisted discovery, including a proof-of-concept RAG system and carbon reporting for executives.",

      techStack: [
        "Python",
        "PySpark",
        "Pandas",
        "Matplotlib",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Hue",
        "Impala",
        "Lighthouse",
        "React",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "N8N",
        "REST APIs",
      ],

      dayToDay: [
        "Own Digital Sustainability delivery in an Agile and Scrum environment after promotion to Data Engineer",
        "Led R&D for a Quick Carbon Calculator using Python for automated API ingestion and Matplotlib visualizations for executive reporting",
        "Built data quality gates with PySpark, including automated validation checks for alignment and integrity between raw and transformed datasets",
        "Optimized the Digital Sustainability pipeline by simplifying legacy processes and SQL transformations to improve carbon assessment speed and accuracy",
        "Delivered a proof-of-concept RAG system that ingested Confluence documentation into an AI knowledge base using Python, n8n workflow orchestration, and a React front end",
        "Authored technical methodologies and documentation for scripts and assessment findings to support scalability and team alignment",
        "Generated carbon assessment reports for platform owners and stakeholders; reviewed code and mentored peers",
        "Collaborated across regions and traveled to the UK for presentations, workshops, and conferences",
      ],

      learned: [
        "Stepping into broader ownership after promotion, from design through stakeholder communication",
        "Combining PySpark, SQL, and Python for trustworthy validation at scale",
        "Shipping RAG and LLM-adjacent workflows that fit enterprise knowledge and security expectations",
        "Writing methodologies and documentation that stay useful as teams and platforms grow",
        "Balancing deep technical work with mentoring and code review",
      ],

      projectSummaries: [
        "Quick Carbon Calculator R&D with automated API pipelines and Matplotlib reporting for executives.",
        "RAG proof of concept for Confluence-backed knowledge discovery with React and n8n.",
        "Pipeline and SQL modernization work that improved carbon assessment speed and accuracy.",
      ],
    },
    {
      title: "Junior Data Engineer",
      company: "Cambridge University Press & Assessment",
      period: "2023 - 2025",
      description:
        "Supported the Digital Sustainability team through data engineering and analytics: automating pipelines, optimizing ETL, and building scalable solutions for digital carbon assessments, plus early AI and LLM experiments to improve data workflows.",

      techStack: [
        "Python",
        "Pandas",
        "Playwright",
        "Lighthouse",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Hue",
        "Impala",
        "N8N",
        "REST APIs",
      ],

      dayToDay: [
        "Participated in weekly stand-ups and sprint planning in an Agile and Scrum setup",
        "Automated ETL processes in Python and transitioned workloads into SQL-based workflows for scalability",
        "Optimized data workflows to improve performance, reliability, and reduce manual intervention",
        "Researched methodologies and tools for digital carbon emissions from online and cloud activity",
        "Created documentation, starter packs, and guides for onboarding and internal knowledge sharing",
        "Generated and presented carbon assessment reports to platform owners and stakeholders",
        "Prototyped AI and LLM tools in high-code and low-code environments to improve data and architecture discovery",
        "Reviewed code, mentored peers, and helped raise team technical standards",
        "Collaborated cross-functionally across regions and traveled to the UK for project presentations, workshops, and conferences",
      ],

      learned: [
        "Collaborating with diverse teams and cultures within a global organization",
        "Working with large datasets and optimizing data workflows for scale and performance",
        "Troubleshooting complex data issues and applying analytical problem-solving skills",
        "Using AI and LLM tools to speed up data engineering and discovery",
        "Gaining a deeper understanding of digital sustainability and carbon footprint assessment methodologies",
        "Writing professional reports and presenting findings to both technical and non-technical audiences",
        "Gathering requirements and insights through effective communication and stakeholder engagement",
      ],

      projectSummaries: [
        "Python automation for AWS usage categorization and carbon calculation, cutting processing from days to minutes.",
        "Automated Google Analytics extraction, categorization, and calculations in Python to reduce manual effort and errors.",
        "Automated webpage assessment tooling with Lighthouse, Playwright, and Chrome DevTools for platform carbon impact analysis.",
        "Led yearly carbon assessments across data collection, cleaning, analysis, reporting, and stakeholder presentation.",
        "Built the internal Digital Emissions Calculator (DEC Tool) as a simplified view of the full digital product carbon assessment process.",
        "Migrated Python-based AWS scripts into SQL warehouse workflows for performance and reliability.",
        "Collaborated on AI-driven workflows using LLM agents integrated with N8N for architect discovery and research.",
      ],
    },
    {
      title: "Full Stack Developer (Contractual - Independent)",
      company: "Enterprise Management Solutions",
      period: "2025 - 2026",
      description:
        "Independent contract work: marketing sites, deployment pipelines, and CRM automation for clients. I handled design through Laravel/PHP development, DNS, deployment, and GoHighLevel workflow automation.",

      techStack: [
        "Laravel",
        "PHP",
        "Blade",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Nginx",
        "Amazon Web Services (AWS)",
        "Amazon EC2",
        "Cloudflare",
        "GoDaddy (DNS)",
        "GoHighLevel (GHL)",
        "REST APIs",
        "Python",
        "requests",
        "Cursor AI",
        "Google Gemini",
        "Claude",
      ],

      dayToDay: [
        "Built marketing websites with Laravel, PHP, and Blade, using custom HTML, CSS, and JavaScript to match client branding",
        "Set up full deployments: DNS through GoDaddy and Cloudflare, TLS, and Nginx on AWS EC2",
        "Integrated GoHighLevel (GHL) CRM for lead capture and built third-party workflows including food ordering and financial services connections",
        "Built a Python automation tool that provisions GoHighLevel intake calendars and notification workflows for Freedom Health Systems across 17 sub-account locations, replacing manual per-location setup",
      ],

      learned: [
        "Turning client brand requirements into polished, maintainable Laravel and Blade front ends",
        "Owning DNS/CDN and reverse-proxy configuration for production hosting on cloud VMs",
        "Shipping CRM-backed funnels and complex external API integrations under contract timelines",
        "Designing config-driven automation so the same workflow can be rolled out consistently across many client locations",
        "Used Cursor AI for in-editor development and Gemini and Claude for research, debugging, and prompt work. I picked the right tool for each task instead of relying on just one.",
      ],

      projectSummaries: [
        "Built Laravel marketing sites with custom UI and deployed them on Nginx in EC2.",
        "Connected GHL CRM and other APIs for lead capture and workflows like food ordering and financial services.",
        "Built a GoHighLevel CRM automation tool for Freedom Health Systems that provisions round-robin intake calendars and notification rules across 17 behavioral health locations from shared templates.",
      ],
    },
    {
      title: "Security & Internal Tooling (Concurrent)",
      company: "Enterprise Management Solutions",
      period: "2025 - 2026",
      description:
        "The Chief Security Officer asked me to build internal security tooling: AWS vulnerability reporting and a security findings dashboard. The CTO asked for a mail ingestion service (Virtual Mailroom). I did this alongside client contract work, using Cursor, Gemini, and Claude.",

      techStack: [
        "Django",
        "Django REST Framework",
        "FastAPI",
        "React",
        "TypeScript",
        "PostgreSQL",
        "SQLAlchemy",
        "Gmail API",
        "Google Pub/Sub",
        "Google Gemini",
        "Google OAuth",
        "boto3",
        "AWS S3",
        "AWS Inspector2",
        "Prowler",
        "pandas",
        "pytest",
        "Gunicorn",
        "Cron",
        "Cursor AI",
        "Claude",
      ],

      dayToDay: [
        "Worked with the Chief Security Officer and CTO on what each needed, then built the tooling. I chose the tech stack and how each solution was implemented",
        "Designed and built a Django + React security findings dashboard that ingests monthly AWS Inspector and Prowler scans and surfaces prioritized remediation actions",
        "Built a FastAPI-based Virtual Mailroom service at the CTO's request that automatically captures email attachments via Gmail, stores them in AWS S3, and extracts searchable text using AI-powered OCR",
        "Automated a monthly AWS security reporting pipeline (Python, boto3, cron) exporting vulnerability and compliance scan data to S3",
        "Built supporting tools (an AWS security checklist app and a standalone report generator) to track audit runbooks and analyze scan findings for executive reporting",
      ],

      learned: [
        "Designing event-driven systems (Gmail Pub/Sub webhooks, cron-based pipelines) that process data reliably without manual intervention",
        "Building internal tools from ingestion and database design through to a deployed, access-controlled frontend",
        "Applying security-conscious patterns in practice: IAM instance-profile auth, domain-restricted OAuth, least-privilege access, and audit-friendly data handling",
        "Balancing internal security tooling work alongside client delivery commitments",
        "Built five internal tools using Cursor AI for day-to-day coding and Gemini and Claude for architecture, security research, and prompting",
      ],

      projectSummaries: [
        "Built an internal security findings dashboard (Django + React) that ingests monthly AWS Inspector and Prowler scans, tracks vulnerabilities over time, and surfaces prioritized remediation actions for the security team.",
        "Developed a Virtual Mailroom service (FastAPI) at the CTO's request that automatically captures email attachments via Gmail, stores them in AWS S3, extracts text with AI-powered OCR, and makes them searchable internally.",
        "Automated a monthly AWS security reporting pipeline (Python, boto3, cron) that exports vulnerability and compliance scan data to S3 for downstream analysis.",
        "Built an internal AWS security checklist app (329 tracked tasks across 7 runbooks) and a standalone report generator analyzing 1,700+ combined security findings, surfacing patterns like a 556-entry SQL injection cluster.",
      ],

      highlight:
        "Our Chief Security Officer asked for the security dashboard, reporting pipeline, checklist app, and report generator. Our CTO asked for the mail automation (Virtual Mailroom). I built all five, chose the tech for each, and kept up with client work at the same time.",
    },
    {
      title: "Junior Software Developer / OutSystems Developer",
      company: "Direct Sourcing Solutions",
      period: "2021 - 2023",
      description:
        "Developed and implemented enterprise-grade OutSystems applications for Coca-Cola and MPTC, handling deployments from development through production and authoring user-facing documentation.",

      techStack: [
        "OutSystems",
        "JavaScript",
        "CSS",
        "SQL",
        "HTML",
        "REST APIs",
        "Webhooks",
        "WebSockets",
      ],

      dayToDay: [
        "Built and enhanced enterprise-grade web applications for Coca-Cola and MPTC on the OutSystems platform to meet large-scale client requirements",
        "Ran end-to-end deployment workflows from development to production with troubleshooting and production support",
        "Collaborated in Agile teams (daily scrums, sprint commitments) and authored user manuals to make handovers smoother and improve the end-user experience",
        "Implemented features, resolved bugs across multiple projects, and participated in code reviews",
        "Maintained technical documentation for modules and workflows; verified production releases post-deployment",
      ],

      learned: [
        "Gained strong familiarity with Agile/Scrum workflows and sprint-based delivery",
        "Enhanced communication and collaboration skills within a distributed development team",
        "Applied best practices for software design, coding standards, and version control",
        "Improved understanding of system architecture, modular design, and performance optimization",
        "Developed real-world problem-solving skills through complex, business-critical projects",
        "Acquired hands-on experience with the OutSystems platform and its integration with APIs and external systems",
        "Strengthened knowledge of the full software development lifecycle from design to deployment",
      ],

      projectSummaries: [
        "Contributed to MPTC’s mobile app, MPT DriveHub, used by millions of drivers for toll payments, balance management, and account monitoring. Responsibilities included implementing new features, fixing production bugs, and enhancing user experience.",
        "Collaborated on Coca-Cola’s Distribution Management System (DMS), improving logistics operations by adding new modules, fixing bugs, and optimizing performance for high-volume data handling.",
        "Assisted in Coca-Cola’s Learning Management System (LMS) project, performing QA testing, unit tests, and writing comprehensive user manuals for training and onboarding materials.",
        "Developed Coca-Cola's Worker Safety and Compliance Application from the ground up for both web and mobile, ensuring compliance tracking, safety audits, and reporting features shipped on schedule.",
      ],
    },
    {
      title: "IT Support and QA Intern",
      company: "Beepo Inc.",
      period: "2019",
      description:
        "Provided IT support and conducted QA testing for newly developed websites as part of my university internship requirement.",

      dayToDay: [
        "Checked and monitored website accessibility to ensure uptime and functionality",
        "Compared live websites with their wireframe designs to identify inconsistencies and UI issues",
        "Resolved employee support tickets related to faulty devices and software issues",
        "Reformatted and prepared computers for newly hired employees or reassignment",
      ],

      learned: [
        "Professional behavior and communication within a corporate environment",
        "How to effectively approach and assist people with technical concerns",
        "Hands-on experience in troubleshooting and maintaining computer systems",
        "Observed and learned common IT practices and how efficient teams operate",
      ],
    },
  ];

export const portfolioProjects: PortfolioProject[] = [
    {
      title: "GHL Round Robin Calendar Automation",
      type: "Professional",
      vibeCoded: true,
      summary:
        "A Python CLI tool built for Freedom Health Systems that automates GoHighLevel intake calendar setup across agency sub-accounts. It provisions round-robin calendars, staff availability, and notification rules from shared templates instead of manual per-location configuration.",
      techStack: [
        "Python",
        "GoHighLevel API v2",
        "requests",
        "python-dotenv",
        "JSON Templating",
      ],
      learned: [
        "Built a config-driven pipeline that provisions 3 round-robin calendars (Video, Phone, In Person) per location, with auto-resolved staff schedules and 24 notification rules per calendar",
        "Designed bulk multi-location rollout (17 agencies) with per-agency config overlays, dry-run validation, and error-tolerant batch execution",
        "Solved GHL API quirks (field-name mismatches, create-vs-update notification behavior) through deduplication and workaround logic",
      ],
      highlight:
        "Automated calendar onboarding for 17 Freedom Health Systems sub-accounts: staff availability, schedule associations, and about 72 notification rules per location. What used to be fully manual setup is now config-driven.",
      bonuses: [],
    },
    {
      title: "Security Findings Dashboard",
      type: "Professional",
      vibeCoded: true,
      summary:
        "An internal Django + React web application that ingests monthly AWS Inspector and Prowler security scan exports, normalizes findings, and visualizes month-over-month deltas, repo-level vulnerabilities, and prioritized action items for a security team.",
      techStack: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "TypeScript",
        "PostgreSQL",
        "AWS S3",
        "Google OAuth",
        "Gunicorn",
        "Nginx",
      ],
      learned: [
        "Built the full system: ingestion pipeline for AWS Inspector/Prowler exports, REST API, and React dashboard",
        "Implemented stable-ID delta tracking (new / carried / \"no longer observed\") instead of naive resolved/unresolved status",
        "Built an insights layer with severity-based health scoring (A–F grading), OWASP Top 10 mapping, and plain-English fix recommendations",
        "Added Google OAuth with domain-restricted access, role-based admin panel, and policy acknowledgment workflow",
        "Deployed to production on EC2 (Gunicorn/Nginx/PostgreSQL) with an automated deploy script",
        "Covered ingest, API, and insights logic with ~68 backend tests",
      ],
      highlight:
        "I handled all 7 commits on this one. Built the ingestion, API, and React dashboard so the security team had a place to review findings instead of digging through raw scan exports.",
      bonuses: [],
    },
    {
      title: "Virtual Mailroom",
      type: "Professional",
      vibeCoded: true,
      summary:
        "An event-driven FastAPI service that automatically ingests PDF/DOCX email attachments from a monitored Gmail inbox via Pub/Sub, stores them in AWS S3, extracts searchable text using Gemini OCR, and exposes the results through an internal intranet API. The Legal team uses it most for searching and retrieving OCR'd text from incoming mail attachments.",
      techStack: [
        "Python",
        "FastAPI",
        "Gmail API",
        "Google Pub/Sub",
        "AWS S3",
        "PostgreSQL",
        "SQLAlchemy",
        "Google Gemini",
        "pytest",
      ],
      learned: [
        "Built the full ingestion pipeline: Gmail webhook → attachment download → S3 storage → OCR → database",
        "Solved Gmail history-cursor edge cases to prevent missed or duplicate message syncs, with automatic watch renewal every ~7 days",
        "Implemented idempotent attachment processing to prevent duplicate records on retries",
        "Built a token-secured intranet REST API for paginated search across messages and OCR'd text",
        "Wrote 35 unit/integration tests covering webhook, database, OCR, and S3 logic",
        "Delivered a production tool adopted by the Legal team for searching and retrieving OCR'd text from incoming mail attachments",
      ],
      highlight:
        "Built automatic Gmail watch renewal and history-cursor recovery so mail sync stays reliable without someone babysitting it. A lot of simple Gmail integrations skip that.",
      bonuses: [],
    },
    {
      title: "Cybersecurity Exports",
      type: "Professional",
      vibeCoded: true,
      summary:
        "A cron-scheduled pipeline on AWS EC2 that runs monthly security data collection. It exports AWS Inspector2 vulnerability findings and Prowler cloud audit results to S3 as standardized JSON for the dashboard to ingest.",
      techStack: [
        "Python",
        "Bash",
        "boto3",
        "AWS Inspector2",
        "Prowler",
        "AWS S3",
        "KMS",
        "Cron",
      ],
      learned: [
        "Built Python export scripts for AWS Inspector2 (filtered to CRITICAL/HIGH active findings) and a Prowler CLI runner, both uploading standardized JSON to S3",
        "Designed a resilient orchestrator script that continues running remaining steps even if one export fails",
        "Implemented IAM instance-profile-only authentication (no static AWS keys) for security best practice",
        "Wrote an idempotent cron installer and a prerequisites checker script to validate environment setup before runs",
        "Documented an extensibility guide for adding new security data sources to the pipeline",
      ],
      highlight:
        "Built this pipeline to feed the Security Findings Dashboard. The export side and the dashboard are meant to work together as one internal security toolchain.",
      bonuses: [],
    },
    {
      title: "AWS Security Checklist App",
      type: "Professional",
      vibeCoded: true,
      summary:
        "A zero-dependency internal web app for tracking recurring AWS security audit and hardening procedures as interactive, checkable runbooks. Covers Security Hub, Prowler, Inspector, Gitleaks, and S3 archiving workflows.",
      techStack: [
        "Python (stdlib)",
        "Vanilla JavaScript",
        "HTML/CSS",
        "localStorage",
      ],
      learned: [
        "Built a lightweight Python HTTP server and vanilla JS frontend with zero external dependencies",
        "Designed a Markdown-to-JSON compiler so checklists can be authored in plain Markdown and converted into structured runbooks",
        "Implemented dual persistence (localStorage + server file sync) so audit progress survives browser refreshes and can be backed up",
        "Authored 7 operational runbook templates covering 329 total tracked tasks across AWS security workflows",
      ],
      highlight:
        "Built with zero dependencies: no frameworks, no package managers. The idea was to keep it easy to run anywhere internally.",
      bonuses: [],
    },
    {
      title: "AWS Security Report Generator",
      type: "Professional",
      vibeCoded: true,
      summary:
        "A set of Python scripts and static HTML dashboards that transform raw AWS Inspector and Prowler scan exports into readable executive summaries and repo-level remediation reports.",
      techStack: ["Python", "pandas", "JavaScript", "HTML/CSS"],
      learned: [
        "Built a CLI analysis tool that summarizes severity breakdowns, top CVEs/detectors, and combined \"immediate attention\" findings from Inspector and Prowler exports",
        "Developed ETL scripts to flatten deeply nested Inspector/Prowler JSON into flat CSV for easier analysis",
        "Generated static HTML dashboards (no backend required) for executive-level and repo-level vulnerability reporting",
        "Processed and surfaced insights from 1,700+ combined Prowler and Inspector findings in sample runs, including identifying a recurring 556-entry SQL injection pattern",
      ],
      highlight:
        "Found a recurring SQL injection pattern across 556 findings and turned a pile of raw scan output into a prioritized remediation list.",
      bonuses: [],
    },
    {
      title: "GreenConvert",
      type: "Personal",
      vibeCoded: true,
      hideMedia: true,
      summary:
        "A full-stack image and video converter to WebP and WebM with a dark eco-themed UI and estimates of energy and CO₂ savings from smaller file sizes. FastAPI backend (Pillow, ffmpeg) and a React (Vite) plus Tailwind frontend.",
      media: "/green-image-converter-placeholder.svg",
      repoUrl: "https://github.com/JanGueco/green-image-converter",
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "Pillow",
        "ffmpeg",
      ],
      learned: [
        "Designing async conversion jobs with status polling and downloadable results",
        "Handling large multipart uploads and binary responses between SPA and API",
        "Connecting media processing in Python to a modern React workflow",
        "Framing sustainability metrics so users see impact from format choices",
      ],
      bonuses: [],
    },
    {
      title: "Shapes",
      type: "Personal",
      summary:
        "A simple yet challenging game built with Python and Pygame where players control a shape to dodge oncoming obstacles. Later integrated NEAT for AI-driven autonomous gameplay.",
      media: "/Shapes.webp",
      techStack: ["Python", "Pygame", "NEAT"],
      learned: [
        "Game loop design and responsive event handling",
        "Collision detection and animation logic",
        "Applied NEAT (NeuroEvolution of Augmenting Topologies) for AI-based learning and automation",
      ],
      bonuses: [
        {
          text: "Implemented NEAT to evolve an AI capable of playing the game autonomously",
          media: "/Shapes-Neat.webp",
        },
      ],
    },
    {
      title: "Double Pendulum Simulation",
      type: "Personal",
      summary:
        "A physics-based simulation of a double pendulum created using the Processing framework in Python. The setup includes a 'pen' attached to visualize the pendulum’s chaotic motion over time.",
      media: "/Double Pendulum.webp",
      techStack: ["Python", "Processing"],
      learned: [
        "How small changes in initial conditions cause drastically different results (chaos theory in action!)",
        "Mathematical modeling of motion and gravity",
        "Using Processing for creating real-time physics visualizations",
      ],
      bonuses: [
        {
          text: "Making a mistake in the equation",
          media: "/Double Pendulum mistake.webp",
        },
        {
          text: "Playing with the mistakes",
          media: "/Double Pendulum mistake 2.webp",
        },
      ],
    },
    {
      title: "Pysort",
      type: "Personal",
      summary:
        "A simple automation script that organizes files in a directory into folders based on their file types. It was my first real taste of using Python to simplify daily tasks.",
      media: "/Pysort.webp",
      techStack: ["Python", "OS Module"],
      learned: [
        "File handling and directory management in Python",
        "How automation can simplify repetitive tasks",
        "Understanding the importance of clean, organized systems",
      ],
      bonuses: [],
    },
    {
      title: "YouTube to MP3 Converter",
      type: "Personal",
      summary:
        "A desktop application that converts YouTube videos to MP3 using Pytube and PyQt6. The app has a simple graphical interface and handles downloads and file conversions in the background.",
      media: "/YouTubeToMp3.webp",
      techStack: ["Python", "Pytube", "PyQt6", "ffmpeg"],
      learned: [
        "How GUI applications work and how event loops drive them",
        "Integrating multiple Python libraries to create cohesive apps",
        "Designing user-friendly interfaces and managing background processes",
      ],
      bonuses: [],
    },
    {
      title: "Mini Project - REST API Blogsite",
      type: "Personal",
      summary:
        "Originally started as a job interview exercise, later expanded into a complete blogsite with authentication, CRUD features, and token-based security using Django REST Framework.",
      media: "/API endpoints.png",
      techStack: ["Python", "Django", "Django REST Framework", "MySQL", "Knox"],
      learned: [
        "Understanding RESTful architecture and CRUD design",
        "Building and securing APIs with authentication tokens",
        "Writing utility scripts for database setup and migrations",
        "Applying modular design patterns for scalability and maintainability",
      ],
      bonuses: [
        {
          text: "The Entity Relationship Diagram of the API",
          media: "/ERD.png",
        },
      ],
    },
  ];

export function shouldShowProjectMedia(
  project: Pick<PortfolioProject, "media" | "hideMedia">
): boolean {
  return Boolean(project.media && !project.hideMedia);
}

export const portfolioLearningItems: PortfolioLearningItem[] = [
    {
      title: "LLMs, RAG, and agentic workflows",
      description:
        "Applying RAG, workflow orchestration (n8n), and AI-assisted tooling in production data and internal apps.",
      progress: "Intermediate",
    },
    {
      title: "Full-stack delivery (React, TypeScript, Django, FastAPI)",
      description:
        "Shipping end-to-end apps: REST APIs, React dashboards, OAuth, testing, and EC2/Nginx deployment.",
      progress: "Advanced",
    },
    {
      title: "Cloud security pipelines (AWS, Inspector, Prowler, S3)",
      description:
        "Building export pipelines and dashboards for vulnerability findings, IAM practices, and reliable ops.",
      progress: "Intermediate",
    },
    {
      title: "Event-driven integrations (Gmail, Pub/Sub, Gemini OCR)",
      description:
        "Webhook-driven services with idempotent processing, object storage, and searchable document APIs.",
      progress: "Intermediate",
    },
  ];

export const portfolioTechStack: PortfolioTechStackItem[] = [
    {
      name: "Python",
      icon: 'Code2',
      experience:
        "Extensive experience since university across various domains, including data analysis, API development, scripting, web scraping, and even small game projects.",
    },
    {
      name: "JavaScript & TypeScript",
      icon: 'Terminal',
      experience:
        "Used JavaScript professionally in web development projects, and currently deepening expertise in TypeScript to build more maintainable and scalable web applications.",
    },
    {
      name: "SQL",
      icon: 'Database',
      experience:
        "Applied in both Software Development and Data Engineering roles: designing schemas, optimizing queries, and managing relational databases for production workloads.",
    },
    {
      name: "HTML & CSS",
      icon: 'Braces',
      experience:
        "Hands-on experience crafting basic web interfaces and maintaining a clean front-end structure and styling.",
    },
    {
      name: "Amazon Web Services (AWS) & Google Cloud Platform (GCP)",
      icon: 'Cloud',
      experience:
        "Experience using cloud services for data storage, processing, and analytics, including workflow automation and resource management.",
    },
    {
      name: "Nginx",
      icon: 'Server',
      experience:
        "Practical experience configuring and deploying Nginx to host and serve personal web applications.",
    },
  ];

export const portfolioCertifications: PortfolioCertification[] = [
    {
      title: "Scientific Computing with Python",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "/FreeCodeCamp_Scientific_Python.png",
    },
    {
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "/FreeCodeCamp_Data_Analysis.png",
    },
    {
      title: "OutSystems Tradition Web Development(Associate)",
      issuer: "OutSystems",
      date: "2021",
      image: "/OutSystems_Cert.pdf",
    },
  ];

export type ExperienceGroups = {
  cambridgeCareerPair: boolean;
  emsStartIndex: number;
  emsConcurrentPair: boolean;
  experienceSliceStart: number;
};

export function getExperienceGroups(
  experiences: PortfolioExperience[] = portfolioExperiences
): ExperienceGroups {
  const cambridgeCareerPair =
    experiences.length >= 2 &&
    experiences[0].company === experiences[1].company &&
    experiences[0].title === "Data Engineer" &&
    experiences[1].title === "Junior Data Engineer";

  const emsStartIndex = cambridgeCareerPair ? 2 : 0;
  const emsConcurrentPair =
    experiences.length >= emsStartIndex + 2 &&
    experiences[emsStartIndex].company === "Enterprise Management Solutions" &&
    experiences[emsStartIndex + 1].company === "Enterprise Management Solutions" &&
    experiences[emsStartIndex].period === experiences[emsStartIndex + 1].period &&
    experiences[emsStartIndex].title === "Full Stack Developer (Contractual - Independent)" &&
    experiences[emsStartIndex + 1].title === "Security & Internal Tooling (Concurrent)";

  const experienceSliceStart =
    (cambridgeCareerPair ? 2 : 0) + (emsConcurrentPair ? 2 : 0);

  return {
    cambridgeCareerPair,
    emsStartIndex,
    emsConcurrentPair,
    experienceSliceStart,
  };
}
