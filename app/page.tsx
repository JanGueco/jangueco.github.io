"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Youtube,
  Code2,
  Database,
  Server,
  Braces,
  Terminal,
  Cloud,
  Lightbulb,
  Briefcase,
  Award,
  ExternalLink,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "learning",
        "tech-stack",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const experiences = [
    {
      title: "Junior Data Engineer",
      company: "Cambridge University Press & Assessment",
      period: "2023 - Present",
      description:
        "Supporting the Digital Sustainability team through data engineering and analytics. Focused on automating data pipelines, optimizing ETL processes, and building scalable data solutions to drive digital carbon assessments. Also explored AI and LLM applications to enhance data workflows and insights.",

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
        "Participated in weekly stand-ups and sprint planning meetings within an Agile/Scrum setup",
        "Automated data extraction, transformation, and loading (ETL) processes using Python and later transitioned them into SQL-based workflows for better scalability",
        "Optimized existing data workflows to improve performance, reliability, and reduce manual intervention",
        "Researched methodologies and tools to calculate digital carbon emissions from online and cloud activities",
        "Created documentation, starter packs, and guides to support team onboarding and internal knowledge sharing",
        "Generated and presented carbon assessment reports to platform owners and stakeholders",
        "Prototyped AI/LLM tools using both high-code and low-code environments to enhance data and architecture discovery processes",
        "Reviewed code, mentored peers, and contributed to improving overall team technical standards",
        "Collaborated cross-functionally with teams across regions and traveled to the UK for project presentations, workshops, and conferences",
      ],

      learned: [
        "Collaborating with diverse teams and cultures within a global organization",
        "Working with large datasets and optimizing data workflows for scale and performance",
        "Troubleshooting complex data issues and applying analytical problem-solving skills",
        "Using AI and LLM tools to streamline data engineering and software development tasks",
        "Gaining a deeper understanding of digital sustainability and carbon footprint assessment methodologies",
        "Writing professional reports and presenting findings to both technical and non-technical audiences",
        "Gathering requirements and insights through effective communication and stakeholder engagement",
      ],

      projectSummaries: [
        "Developed Python scripts to automate AWS usage data categorization and carbon calculation, reducing processing time from days to minutes while minimizing human error.",
        "Automated Google Analytics data extraction, categorization, and calculations using Python, significantly reducing manual effort and improving accuracy.",
        "Developed automated webpage assessment tools using Lighthouse, Playwright, and Chrome DevTools to measure and analyze the carbon impact of various digital platforms.",
        "Led yearly carbon assessments for multiple digital platforms, covering data collection, cleaning, analysis, report generation and report presentation to stakeholders.",
        "Built the internal Digital Emissions Calculator (DEC Tool) — a simplified representation of the entire digital product carbon assessment process.",
        "Migrated Python-based AWS scripts into SQL workflows for execution in the cloud data warehouse, improving performance and reliability.",
        "Collaborated on AI-driven workflows using LLM agents integrated with N8N, assisting data and solution architects with discovery and research tasks.",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Direct Sourcing Solutions",
      period: "2021 - 2023",
      description:
        "Developed enterprise and client-facing applications using OutSystems, a rapid low-code development platform. Collaborated with cross-functional teams to deliver scalable solutions for clients such as Coca-Cola and MPTC (Metro Pacific Tollways Corporation).",

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
        "Participated in daily scrums and sprint planning meetings within an Agile/Scrum environment",
        "Implemented new features and resolved bugs across multiple projects using OutSystems",
        "Collaborated with team members to identify, troubleshoot, and resolve technical issues efficiently",
        "Participated in code reviews and contributed to improving overall code quality and maintainability",
        "Wrote and maintained technical documentation for developed features, modules, and workflows",
        "Provided production support by diagnosing and resolving issues in development, staging, and production environments",
        "Handled production deployments and conducted post-deployment verifications to ensure system stability",
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
        "Developed Coca-Cola’s Worker Safety and Compliance Application from the ground up — both web and mobile versions — ensuring compliance tracking, safety audits, and reporting features were delivered seamlessly.",
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

  const projects = [
    {
      title: "Real-time Analytics Dashboard",
      summary:
        "A comprehensive analytics platform processing real-time data streams with interactive visualizations.",
      image: "/modern-analytics-dashboard.png",
      techStack: ["React", "Node.js", "WebSocket", "Redis", "D3.js", "MongoDB"],
      learned: [
        "Implementing efficient WebSocket connections for real-time updates",
        "Optimizing React rendering for large datasets",
        "Designing scalable backend architecture for high-throughput data",
      ],
    },
    {
      title: "Data Pipeline Orchestration System",
      summary:
        "Automated data pipeline framework with monitoring, alerting, and self-healing capabilities.",
      image: "/data-pipeline-workflow-diagram-with-nodes-and-conn.jpg",
      techStack: [
        "Python",
        "Apache Airflow",
        "Docker",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
      ],
      learned: [
        "Building fault-tolerant distributed systems",
        "Implementing comprehensive monitoring and observability",
        "Designing idempotent data processing workflows",
      ],
    },
    {
      title: "Machine Learning Model Deployment Platform",
      summary:
        "End-to-end ML platform for training, versioning, and deploying models at scale.",
      image: "/machine-learning-platform-interface-with-model-met.jpg",
      techStack: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "MLflow",
        "Kubernetes",
        "AWS S3",
      ],
      learned: [
        "Containerizing ML models for production deployment",
        "Implementing A/B testing for model versions",
        "Managing model lifecycle and versioning strategies",
      ],
    },
  ];

  const learningItems = [
    {
      title: "Large Language Models (LLMs) and Agentic Systems",
      description:
        "Exploring how AI agents and large language models can automate complex tasks, streamline workflows, and support data-driven decision-making.",
      progress: "Beginner",
    },
    {
      title: "Full-Stack Web Development with React, TypeScript, and Django",
      description:
        "Building full-fledged web applications using modern front-end frameworks and scalable Django backends, focusing on clean architecture and user experience.",
      progress: "Intermediate",
    },
    {
      title: "Web Servers and Cloud Infrastructure (Nginx, AWS, GCP, Azure)",
      description:
        "Learning to configure web servers, deploy applications, and manage basic cloud infrastructure to understand end-to-end deployment pipelines.",
      progress: "Beginner",
    },
  ];

  const techStack = [
    {
      name: "Python",
      icon: <Code2 className="w-8 h-8" />,
      experience:
        "Extensive experience since university across various domains, including data analysis, API development, scripting, web scraping, and even small game projects.",
    },
    {
      name: "JavaScript & TypeScript",
      icon: <Terminal className="w-8 h-8" />,
      experience:
        "Used JavaScript professionally in web development projects, and currently deepening expertise in TypeScript to build more maintainable and scalable web applications.",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      experience:
        "Applied in both Software Development and Data Engineering roles — designing schemas, optimizing queries, and managing relational databases for production workloads.",
    },
    {
      name: "HTML & CSS",
      icon: <Braces className="w-8 h-8" />,
      experience:
        "Hands-on experience crafting basic web interfaces and maintaining a clean front-end structure and styling.",
    },
    {
      name: "Amazon Web Services (AWS) & Google Cloud Platform (GCP)",
      icon: <Cloud className="w-8 h-8" />,
      experience:
        "Experience using cloud services for data storage, processing, and analytics — including workflow automation and resource management.",
    },
    {
      name: "Nginx",
      icon: <Server className="w-8 h-8" />,
      experience:
        "Practical experience configuring and deploying Nginx to host and serve personal web applications.",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/aws-certification-badge.jpg",
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      image: "/google-cloud-certification-badge.png",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      image: "/kubernetes-certification-badge.png",
    },
  ];

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "learning", label: "Learning" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-card border-2 border-border hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/20"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-accent" />
        ) : (
          <Moon className="w-6 h-6 text-accent" />
        )}
      </button>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-3"
            >
              <div
                className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-accent border-accent scale-125 shadow-lg shadow-accent/50"
                    : "border-muted-foreground hover:border-accent hover:scale-110"
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  activeSection === item.id
                    ? "opacity-100 text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-background">
        <div className="lg:pl-32">
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
              <div className="mb-8 inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-2xl shadow-accent/30 ring-4 ring-accent/20">
                  JD
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tight">
                Jan Michael Vincent Gueco
              </h1>
              <p className="text-xl md:text-2xl text-primary mb-8 font-semibold">
                Software Developer & Data Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                A nice blend of software craftsmanship and data engineering
                expertise, dedicated to building scalable and efficient
                solutions that drive business value.
              </p>
              <a href="#about" className="inline-block">
                <ChevronDown className="w-8 h-8 text-accent animate-bounce" />
              </a>
            </div>
          </section>

          <section id="about" className="py-24 px-4 bg-muted/30 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary"></div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                About Me
              </h2>
              <Card className="bg-card border-2 border-border shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] hover:border-accent/50">
                <CardContent className="p-8">
                  <motion.div
                    key={aboutExpanded ? "expanded" : "collapsed"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {!aboutExpanded ? (
                      <>
                        <p className="text-lg text-card-foreground leading-relaxed mb-4">
                          I've always been fascinated by technology, a passion
                          that started from childhood gaming and grew into
                          building and understanding computers. I earned my BS
                          in Computer Engineering, where I explored programming,
                          hardware, and even joined competitive programming and
                          hackathons that pushed me to think fast and solve
                          complex problems.
                        </p>
                        <p className="text-lg text-card-foreground leading-relaxed">
                          After an internship doing QA testing and IT support, I
                          started as a Software Developer before transitioning
                          into Data Engineering, where I now combine coding and
                          data to build smarter, more efficient systems.
                        </p>
                      </>
                    ) : (
                      <div className="text-card-foreground text-lg leading-relaxed space-y-4">
                        <p>
                          Ever since I was young, I've been fascinated by
                          technology. It all started with playing Game Boy
                          classics, then spending countless hours on
                          Counter-Strike and Warcraft. What began as a love for
                          gaming slowly turned into a curiosity about how
                          computers and software actually work.
                        </p>
                        <p>
                          I pursued this interest by earning a Bachelor's Degree
                          in Computer Engineering, where I studied programming,
                          mathematics, and hardware systems. During university,
                          I participated in competitive programming contests and
                          hackathons, which taught me how to think critically,
                          collaborate under pressure, and find creative
                          solutions to tough problems.
                        </p>
                        <p>
                          I also experimented with Arduino and Raspberry Pi,
                          reinforcing my understanding of how software and
                          hardware connect. Along the way, I explored different
                          operating systems like Linux (trying out distros such
                          as Kali, Ubuntu, and even Arch — which I uninstalled
                          pretty quickly) and MacOS, expanding my perspective on
                          how each system offers a unique environment and
                          workflow.
                        </p>
                        <p>
                          Before finishing university, I completed an internship
                          that exposed me to both QA testing and IT support. I
                          learned how to spot issues quickly, communicate
                          effectively with teams, and adapt to different roles.
                        </p>
                        <p>
                          After graduation, I started my career as a Software
                          Developer, gaining nearly two years of experience
                          building and maintaining software solutions. Later, I
                          transitioned to Data Engineering, where I found the
                          perfect balance between my love for coding and
                          data-driven problem-solving.
                        </p>
                        <p>
                          Outside of work, I'm still that curious tinkerer who
                          enjoys exploring new technologies, experimenting with
                          ideas, and continuously learning something new every
                          day.
                        </p>
                      </div>
                    )}
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      className="mt-8 px-6 py-2.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
                      onClick={() => setAboutExpanded((prev) => !prev)}
                    >
                      {aboutExpanded ? "Show Less" : "Know More"}
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="experience" className="py-24 px-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-primary"></div>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 overflow-hidden hover:border-accent/50 relative group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader
                      className="cursor-pointer hover:bg-accent/5 transition-colors duration-200"
                      onClick={() =>
                        setExpandedExperience(
                          expandedExperience === index ? null : index
                        )
                      }
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-card-foreground mb-2">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-base">
                            {exp.company} • {exp.period}
                          </CardDescription>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-accent transition-transform duration-300 ${
                            expandedExperience === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <p className="text-card-foreground mt-4">
                        {exp.description}
                      </p>
                    </CardHeader>

                    {expandedExperience === index && (
                      <CardContent className="pt-0 animate-fade-in">
                        <div className="space-y-6">
                          {exp.techStack && (
                            <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-accent">
                              <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-accent" />
                                Tech Stack
                              </h4>

                              <div className="flex flex-wrap gap-2">
                                {exp.techStack.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                            <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                              <Terminal className="w-5 h-5 text-primary" />
                              Day-to-Day Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {exp.dayToDay.map((task, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-card-foreground"
                                >
                                  <span className="text-accent mt-1">•</span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                            <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                              <Lightbulb className="w-5 h-5 text-secondary" />
                              What I've Learned
                            </h4>
                            <ul className="space-y-2">
                              {exp.learned.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-card-foreground"
                                >
                                  <span className="text-accent mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {exp.projectSummaries && (
                            <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-accent">
                              <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-accent" />
                                Project Summaries
                              </h4>
                              <ul className="space-y-2">
                                {exp.projectSummaries.map((project, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-card-foreground"
                                  >
                                    <span className="text-accent mt-1">•</span>
                                    <span>{project}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="py-24 px-4 bg-muted/30 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 overflow-hidden hover:border-accent/50 relative group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader
                      className="cursor-pointer hover:bg-accent/5 transition-colors duration-200"
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === index ? null : index
                        )
                      }
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-card-foreground mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-card-foreground text-base mt-2">
                            {project.summary}
                          </CardDescription>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 ${
                            expandedProject === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardHeader>

                    {expandedProject === index && (
                      <CardContent className="pt-0 animate-fade-in">
                        <div className="space-y-6">
                          {/* Project Image */}
                          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-accent/30 ring-4 ring-accent/10">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>

                          <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-accent">
                            <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                              <Code2 className="w-5 h-5 text-accent" />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                            <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                              <Lightbulb className="w-5 h-5 text-primary" />
                              What I Learned
                            </h4>
                            <ul className="space-y-2">
                              {project.learned.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-card-foreground"
                                >
                                  <span className="text-accent mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="learning" className="py-24 px-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary"></div>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                What I'm Currently Learning
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {learningItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105 hover:border-accent/50 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <BookOpen className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-medium">
                          Progress:
                        </span>
                        <span className="text-xs text-accent font-semibold px-2 py-1 bg-accent/10 rounded-full">
                          {item.progress}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="tech-stack" className="py-24 px-4 bg-muted/30 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-primary"></div>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105 hover:border-accent/50 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg shadow-lg">
                          {tech.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {tech.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tech.experience}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="certifications" className="py-24 px-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105 hover:border-accent/50 group cursor-pointer relative overflow-hidden"
                    onClick={() => window.open(cert.image, "_blank")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Award className="w-8 h-8 text-accent flex-shrink-0" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {cert.date}
                      </p>
                      <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <footer
            id="contact"
            className="py-24 px-4 bg-card border-t-2 border-border relative"
          >
            <div className="absolute left-0 top-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary"></div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center">
                Get In Touch
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <a
                  href="mailto:jmv.gueco@gmail.com"
                  className="flex flex-col items-center gap-3 p-6 bg-muted border-2 border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
                >
                  <Mail className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-card-foreground text-sm font-medium">
                    Email
                  </span>
                </a>
                <a
                  href="https://github.com/JanGueco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-muted border-2 border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
                >
                  <Github className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-card-foreground text-sm font-medium">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jan-michael-vincent-gueco-607119198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-muted border-2 border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-card-foreground text-sm font-medium">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/@JanDGueco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-muted border-2 border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
                >
                  <Youtube className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-card-foreground text-sm font-medium">
                    YouTube
                  </span>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-muted rounded-lg p-6 border-l-4 border-accent">
                  <p className="text-accent text-xs uppercase tracking-wider mb-3 font-semibold">
                    Religious
                  </p>
                  <p className="text-card-foreground italic leading-relaxed text-sm">
                    "Do unto others as you would have them do unto you."
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-primary text-xs uppercase tracking-wider mb-3 font-semibold">
                    Professional
                  </p>
                  <p className="text-card-foreground italic leading-relaxed text-sm">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 border-l-4 border-secondary">
                  <p className="text-secondary text-xs uppercase tracking-wider mb-3 font-semibold">
                    Personal
                  </p>
                  <p className="text-card-foreground italic leading-relaxed text-sm">
                    "The only way to do great work is to love what you do."
                  </p>
                </div>
              </div>

              <div className="text-center text-muted-foreground text-sm border-t border-border pt-8">
                <p>
                  © 2025 Jan Gueco. Loose design and initial code by v0.
                  Continued and enhanced in Visual Studio Code.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
