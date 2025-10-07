"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Youtube,
  Code2,
  Database,
  Server,
  Layers,
  Terminal,
  Cloud,
  Lightbulb,
  Briefcase,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "tech-stack", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable microservices and data pipelines for enterprise clients.",
      techStack: ["Python", "React", "AWS", "Docker", "PostgreSQL", "Apache Kafka"],
      dayToDay: [
        "Design and implement microservices architecture",
        "Optimize data processing pipelines for performance",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with product team on technical requirements",
      ],
      learned: [
        "Advanced patterns for distributed system design",
        "Effective strategies for scaling applications under high load",
        "Leadership skills through mentoring and team collaboration",
      ],
      projectSummaries: [
        "Led migration of monolithic application to microservices, reducing deployment time by 70%",
        "Implemented real-time data processing pipeline handling 1M+ events per day",
        "Architected multi-region deployment strategy improving system reliability to 99.99%",
      ],
    },
    {
      title: "Data Engineer",
      company: "DataFlow Analytics",
      period: "2020 - 2022",
      description: "Built and maintained ETL pipelines processing millions of records daily.",
      techStack: ["Python", "Apache Spark", "Airflow", "Snowflake", "dbt", "Kubernetes"],
      dayToDay: [
        "Develop and maintain ETL workflows using Airflow",
        "Optimize SQL queries and data models",
        "Monitor data quality and pipeline performance",
        "Implement data governance best practices",
      ],
      learned: [
        "Deep understanding of data warehouse optimization techniques",
        "Best practices for ensuring data quality and consistency",
        "Orchestration patterns for complex data workflows",
      ],
      projectSummaries: [
        "Built automated data quality framework reducing data issues by 85%",
        "Optimized ETL processes cutting processing time from 6 hours to 45 minutes",
        "Designed dimensional data models supporting analytics for 500+ business users",
      ],
    },
  ]

  const projects = [
    {
      title: "Real-time Analytics Dashboard",
      summary: "A comprehensive analytics platform processing real-time data streams with interactive visualizations.",
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
      summary: "Automated data pipeline framework with monitoring, alerting, and self-healing capabilities.",
      image: "/data-pipeline-workflow-diagram-with-nodes-and-conn.jpg",
      techStack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Prometheus", "Grafana"],
      learned: [
        "Building fault-tolerant distributed systems",
        "Implementing comprehensive monitoring and observability",
        "Designing idempotent data processing workflows",
      ],
    },
    {
      title: "Machine Learning Model Deployment Platform",
      summary: "End-to-end ML platform for training, versioning, and deploying models at scale.",
      image: "/machine-learning-platform-interface-with-model-met.jpg",
      techStack: ["Python", "FastAPI", "TensorFlow", "MLflow", "Kubernetes", "AWS S3"],
      learned: [
        "Containerizing ML models for production deployment",
        "Implementing A/B testing for model versions",
        "Managing model lifecycle and versioning strategies",
      ],
    },
  ]

  const techStack = [
    {
      name: "Python",
      icon: <Code2 className="w-8 h-8" />,
      experience: "5+ years building backend services, data pipelines, and ML applications",
    },
    {
      name: "JavaScript/TypeScript",
      icon: <Terminal className="w-8 h-8" />,
      experience: "4+ years developing modern web applications with React and Node.js",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      experience: "6+ years designing schemas and optimizing queries for PostgreSQL, MySQL, Snowflake",
    },
    {
      name: "Docker/Kubernetes",
      icon: <Layers className="w-8 h-8" />,
      experience: "3+ years containerizing applications and orchestrating deployments",
    },
    {
      name: "AWS/Cloud",
      icon: <Cloud className="w-8 h-8" />,
      experience: "4+ years architecting cloud infrastructure with AWS services",
    },
    {
      name: "Apache Spark",
      icon: <Server className="w-8 h-8" />,
      experience: "3+ years processing large-scale data with distributed computing",
    },
  ]

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#64b5f6] border-[#64b5f6] scale-125"
                    : "border-[#7f8caa] hover:border-[#b8cfce]"
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  activeSection === item.id ? "opacity-100 text-[#64b5f6]" : "text-[#7f8caa]"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      <div className="lg:pl-32">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#7f8caa]/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-[#64b5f6]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#b8cfce]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8 inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7f8caa] to-[#64b5f6] mx-auto mb-6 flex items-center justify-center text-[#eaefef] text-4xl font-bold shadow-lg shadow-[#7f8caa]/50">
                JD
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#eaefef] tracking-tight">John Developer</h1>
            <p className="text-xl md:text-2xl text-[#b8cfce] mb-8 font-light">Software Engineer & Data Architect</p>
            <p className="text-lg text-[#7f8caa] max-w-2xl mx-auto mb-12 leading-relaxed">
              Building scalable systems and transforming data into insights
            </p>
            <a href="#about" className="inline-block">
              <ChevronDown className="w-8 h-8 text-[#64b5f6] animate-bounce" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#eaefef] text-center">About Me</h2>
            <Card className="bg-[#333446] border-[#7f8caa]/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#7f8caa]/20 hover:scale-[1.02]">
              <CardContent className="p-8">
                <p className="text-lg text-[#b8cfce] leading-relaxed mb-4">
                  I'm a passionate software engineer with a strong focus on building robust, scalable applications and
                  data infrastructure. With over 5 years of experience in the tech industry, I specialize in full-stack
                  development and data engineering.
                </p>
                <p className="text-lg text-[#b8cfce] leading-relaxed">
                  My expertise lies in designing efficient data pipelines, developing microservices architectures, and
                  creating intuitive user interfaces. I thrive on solving complex problems and continuously learning new
                  technologies to deliver innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#eaefef] text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-[#333446] border-[#7f8caa]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#7f8caa]/20 overflow-hidden"
                >
                  <CardHeader
                    className="cursor-pointer hover:bg-[#7f8caa]/10 transition-colors duration-200"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-[#eaefef] mb-2">{exp.title}</CardTitle>
                        <CardDescription className="text-[#7f8caa] text-base">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-[#64b5f6] transition-transform duration-300 ${
                          expandedExperience === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p className="text-[#b8cfce] mt-4">{exp.description}</p>
                  </CardHeader>

                  {expandedExperience === index && (
                    <CardContent className="pt-0 animate-fade-in">
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-[#64b5f6]" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#7f8caa] text-[#eaefef] rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Day to Day */}
                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-[#64b5f6]" />
                            Day-to-Day Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.dayToDay.map((task, i) => (
                              <li key={i} className="flex items-start gap-2 text-[#b8cfce]">
                                <span className="text-[#64b5f6] mt-1">•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-[#64b5f6]" />
                            What I've Learned
                          </h4>
                          <ul className="space-y-2">
                            {exp.learned.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[#b8cfce]">
                                <span className="text-[#64b5f6] mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-[#64b5f6]" />
                            Project Summaries
                          </h4>
                          <ul className="space-y-2">
                            {exp.projectSummaries.map((project, i) => (
                              <li key={i} className="flex items-start gap-2 text-[#b8cfce]">
                                <span className="text-[#64b5f6] mt-1">•</span>
                                <span>{project}</span>
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

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#eaefef] text-center">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-[#333446] border-[#7f8caa]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#7f8caa]/20 overflow-hidden"
                >
                  <CardHeader
                    className="cursor-pointer hover:bg-[#7f8caa]/10 transition-colors duration-200"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-[#eaefef] mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-[#b8cfce] text-base mt-2">{project.summary}</CardDescription>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-[#64b5f6] transition-transform duration-300 flex-shrink-0 ${
                          expandedProject === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>

                  {expandedProject === index && (
                    <CardContent className="pt-0 animate-fade-in">
                      <div className="space-y-6">
                        {/* Project Image */}
                        <div className="rounded-lg overflow-hidden shadow-lg border border-[#7f8caa]/20">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-[#64b5f6]" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#7f8caa] text-[#eaefef] rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* What I Learned */}
                        <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/20">
                          <h4 className="font-semibold text-[#eaefef] mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-[#64b5f6]" />
                            What I Learned
                          </h4>
                          <ul className="space-y-2">
                            {project.learned.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[#b8cfce]">
                                <span className="text-[#64b5f6] mt-1">•</span>
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

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#eaefef] text-center">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <Card
                  key={index}
                  className="bg-[#333446] border-[#7f8caa]/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#7f8caa]/20 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#7f8caa] text-[#eaefef] rounded-lg">{tech.icon}</div>
                      <h3 className="text-xl font-semibold text-[#eaefef]">{tech.name}</h3>
                    </div>
                    <p className="text-[#b8cfce] text-sm leading-relaxed">{tech.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="py-24 px-4 bg-[#333446] border-t border-[#7f8caa]/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#eaefef] text-center">Get In Touch</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <a
                href="mailto:john.developer@email.com"
                className="flex flex-col items-center gap-3 p-6 bg-[#1a1b26] border border-[#7f8caa]/30 rounded-lg hover:border-[#64b5f6] hover:shadow-lg hover:shadow-[#64b5f6]/20 transition-all duration-300 group"
              >
                <Mail className="w-8 h-8 text-[#7f8caa] group-hover:text-[#64b5f6] transition-colors" />
                <span className="text-[#b8cfce] text-sm font-medium">Email</span>
              </a>
              <a
                href="https://github.com/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-[#1a1b26] border border-[#7f8caa]/30 rounded-lg hover:border-[#64b5f6] hover:shadow-lg hover:shadow-[#64b5f6]/20 transition-all duration-300 group"
              >
                <Github className="w-8 h-8 text-[#7f8caa] group-hover:text-[#64b5f6] transition-colors" />
                <span className="text-[#b8cfce] text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-[#1a1b26] border border-[#7f8caa]/30 rounded-lg hover:border-[#64b5f6] hover:shadow-lg hover:shadow-[#64b5f6]/20 transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 text-[#7f8caa] group-hover:text-[#64b5f6] transition-colors" />
                <span className="text-[#b8cfce] text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/@johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-[#1a1b26] border border-[#7f8caa]/30 rounded-lg hover:border-[#64b5f6] hover:shadow-lg hover:shadow-[#64b5f6]/20 transition-all duration-300 group"
              >
                <Youtube className="w-8 h-8 text-[#7f8caa] group-hover:text-[#64b5f6] transition-colors" />
                <span className="text-[#b8cfce] text-sm font-medium">YouTube</span>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/30">
                <p className="text-[#64b5f6] text-xs uppercase tracking-wider mb-3 font-semibold">Religious</p>
                <p className="text-[#b8cfce] italic leading-relaxed text-sm">
                  "Do unto others as you would have them do unto you."
                </p>
              </div>

              <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/30">
                <p className="text-[#64b5f6] text-xs uppercase tracking-wider mb-3 font-semibold">Professional</p>
                <p className="text-[#b8cfce] italic leading-relaxed text-sm">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
              </div>

              <div className="bg-[#1a1b26] rounded-lg p-6 border border-[#7f8caa]/30">
                <p className="text-[#64b5f6] text-xs uppercase tracking-wider mb-3 font-semibold">Personal</p>
                <p className="text-[#b8cfce] italic leading-relaxed text-sm">
                  "The only way to do great work is to love what you do."
                </p>
              </div>
            </div>

            <div className="text-center text-[#7f8caa] text-sm border-t border-[#7f8caa]/20 pt-8">
              <p>© 2025 John Developer. Built with React & Tailwind CSS.</p>
            </div>
          </div>
        </footer>
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
    </div>
  )
}
