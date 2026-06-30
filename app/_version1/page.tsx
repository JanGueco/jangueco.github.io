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
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion, AnimatePresence } from "framer-motion";
import {
  type PortfolioExperience,
  type PortfolioProject,
  portfolioCertifications,
  portfolioExperiences,
  portfolioLearningItems,
  portfolioProjects,
  shouldShowProjectMedia,
  portfolioTechStack,
  getExperienceGroups,
} from "@/lib/portfolio-data";

const techIconMap = {
  Code2,
  Terminal,
  Database,
  Braces,
  Cloud,
  Server,
} as const;

function ExperienceMotionCard({
  exp,
  index,
  expandedExperience,
  setExpandedExperience,
  variant = "default",
}: {
  exp: PortfolioExperience;
  index: number;
  expandedExperience: number | null;
  setExpandedExperience: (v: number | null) => void;
  variant?:
    | "default"
    | "cambridgeCurrent"
    | "cambridgeJuniorUnder"
    | "emsClientDelivery"
    | "emsInternalConcurrent";
}) {
  const isOpen = expandedExperience === index;
  const branchWrap =
    variant === "cambridgeJuniorUnder" || variant === "emsInternalConcurrent"
      ? "ml-1 border-l-2 border-accent/40 pl-4 md:ml-2 md:pl-5 bg-muted/10 rounded-l-lg"
      : "";

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      className={"relative " + branchWrap}
    >
      <Card className="bg-card border-2 border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 overflow-hidden hover:border-accent/50 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader
          className="cursor-pointer hover:bg-accent/5 transition-colors duration-200"
          onClick={() =>
            setExpandedExperience(isOpen ? null : index)
          }
        >
          {variant === "cambridgeCurrent" && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">
              Current role
            </p>
          )}
          {variant === "cambridgeJuniorUnder" && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Prior role, same organization
            </p>
          )}
          {variant === "emsClientDelivery" && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">
              Client delivery
            </p>
          )}
          {variant === "emsInternalConcurrent" && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Internal security tooling
            </p>
          )}
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
              className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <p className="text-card-foreground mt-4">{exp.description}</p>
        </CardHeader>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key={`experience-expand-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: {
                  duration: 0.42,
                  ease: [0.33, 1, 0.68, 1],
                },
                opacity: {
                  duration: 0.28,
                  ease: "easeOut",
                },
              }}
              style={{ overflow: "hidden" }}
            >
              <CardContent className="pt-0 pb-6 border-0 shadow-none">
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
                      What I&apos;ve Learned
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

                  {exp.highlight && (
                    <blockquote className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary italic text-card-foreground leading-relaxed">
                      {exp.highlight}
                    </blockquote>
                  )}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("intro");
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedBonuses, setExpandedBonuses] = useState<
    Record<number, number | null>
  >({});
  // track media load state by key (project-<i> / bonus-<i>-<bi>)
  const [mediaLoaded, setMediaLoaded] = useState<Record<string, boolean>>({});

  // helper: only treat certain image formats as "animated" for replay (webp, gif, apng)
  const isAnimatedImage = (url?: string) => {
    if (!url) return false;
    return /\.(webp|gif|apng)(?:\?.*)?$/i.test(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use the viewport midpoint to determine the active section (more robust for small sections).
      const sections = [
        "intro",
        "about",
        "experience",
        "projects",
        "learning",
        "tech-stack",
        "certifications",
        "contact",
      ];
      const midpoint = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (midpoint >= offsetTop && midpoint < offsetTop + offsetHeight) {
          setActiveSection(section);
          return;
        }
      }

      // Fallback: if scrolled to (or very near) the bottom, mark last section active
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("contact");
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

  const experiences = portfolioExperiences;
  const projects = portfolioProjects;
  const learningItems = portfolioLearningItems;
  const techStack = portfolioTechStack.map((tech) => ({
    ...tech,
    icon: (() => {
      const Icon = techIconMap[tech.icon];
      return <Icon className="w-8 h-8" />;
    })(),
  }));
  const certifications = portfolioCertifications;

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "learning", label: "Learning" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const markLoaded = (key: string) =>
    setMediaLoaded((prev) => ({ ...prev, [key]: true }));
  const markNotLoaded = (key: string) =>
    setMediaLoaded((prev) => ({ ...prev, [key]: false }));

  const {
    cambridgeCareerPair,
    emsStartIndex,
    emsConcurrentPair,
    experienceSliceStart,
  } = getExperienceGroups(experiences);

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

      {/* Move nav outside the main content */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-3"
            >
              <div
                className={`h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "scale-125 border-accent bg-accent opacity-100 shadow-lg shadow-accent/50"
                    : "border-muted-foreground opacity-70 hover:scale-110 hover:border-accent hover:opacity-100"
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "font-semibold text-accent"
                    : "text-muted-foreground group-hover:text-foreground"
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
        <div className="">
          <section
            id="intro"
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
              <div className="mb-8 inline-block">
                <img
                  src="/Profile Pic.jpeg"
                  alt="Jan Michael Gueco"
                  loading="lazy"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl shadow-accent/30 ring-4 ring-accent/20"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tight">
                Jan Michael Vincent Gueco
              </h1>
              <p className="text-xl md:text-2xl text-primary mb-8 font-semibold">
                Data Engineer & Software Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Data engineer and software developer with 4+ years building data
                pipelines, web apps, and deployment workflows. I work mainly in
                Python, SQL, Laravel, and AWS.
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
                          started as a Software Developer before moving into Data
                          Engineering at Cambridge, where I was promoted to Data
                          Engineer in 2025. I also take on independent full-stack
                          contract work, combining coding, data, and cloud delivery.
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
                          as Kali, Ubuntu, and even Arch (which I uninstalled
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
                          transitioned to Data Engineering at Cambridge
                          University Press & Assessment, where I found a good mix of
                          coding and data-driven problem-solving, and was promoted to Data
                          Engineer in 2025.
                        </p>
                        <p>
                          Alongside that role, I have delivered independent
                          full-stack contract work: Laravel and PHP marketing
                          sites, DNS and CDN configuration, Nginx on AWS EC2, and
                          integrations such as GoHighLevel CRM for lead capture.
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
              <div className="flex flex-col items-center justify-center mb-12 gap-4 text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Experience
                </h2>
                <a
                  href="/Gueco-Resume8.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Download resume
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-6">
                {cambridgeCareerPair && (
                  <div className="rounded-2xl border border-accent/30 bg-gradient-to-b from-muted/25 to-muted/5 p-4 md:p-5 space-y-4 shadow-sm ring-1 ring-accent/10">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-border/70 pb-3">
                      <Briefcase className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-foreground">
                        {experiences[0].company}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Same employer, role progression
                      </span>
                    </div>
                    <ExperienceMotionCard
                      exp={experiences[0]}
                      index={0}
                      expandedExperience={expandedExperience}
                      setExpandedExperience={setExpandedExperience}
                      variant="cambridgeCurrent"
                    />
                    <div
                      className="flex items-center gap-3 pl-2 md:pl-3 py-0.5"
                      aria-hidden
                    >
                      <div className="flex flex-col items-center self-stretch w-5 shrink-0">
                        <span className="block w-px flex-1 min-h-[6px] bg-accent/45 rounded-full" />
                        <span className="my-0.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-accent/50 bg-background" />
                        <span className="block w-px flex-1 min-h-[6px] bg-accent/25 rounded-full" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Then
                      </span>
                    </div>
                    <ExperienceMotionCard
                      exp={experiences[1]}
                      index={1}
                      expandedExperience={expandedExperience}
                      setExpandedExperience={setExpandedExperience}
                      variant="cambridgeJuniorUnder"
                    />
                  </div>
                )}
                {emsConcurrentPair && (
                  <div className="rounded-2xl border border-accent/30 bg-gradient-to-b from-muted/25 to-muted/5 p-4 md:p-5 space-y-4 shadow-sm ring-1 ring-accent/10">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-border/70 pb-3">
                      <Briefcase className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-foreground">
                        {experiences[emsStartIndex].company}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Same employer, concurrent tracks
                      </span>
                    </div>
                    <ExperienceMotionCard
                      exp={experiences[emsStartIndex]}
                      index={emsStartIndex}
                      expandedExperience={expandedExperience}
                      setExpandedExperience={setExpandedExperience}
                      variant="emsClientDelivery"
                    />
                    <div
                      className="flex items-center gap-3 pl-2 md:pl-3 py-0.5"
                      aria-hidden
                    >
                      <div className="flex flex-col items-center self-stretch w-5 shrink-0">
                        <span className="block w-px flex-1 min-h-[6px] bg-accent/45 rounded-full" />
                        <span className="my-0.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2 border-accent/50 bg-background" />
                        <span className="block w-px flex-1 min-h-[6px] bg-accent/25 rounded-full" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Concurrent
                      </span>
                    </div>
                    <ExperienceMotionCard
                      exp={experiences[emsStartIndex + 1]}
                      index={emsStartIndex + 1}
                      expandedExperience={expandedExperience}
                      setExpandedExperience={setExpandedExperience}
                      variant="emsInternalConcurrent"
                    />
                  </div>
                )}
                {experiences
                  .slice(experienceSliceStart)
                  .map((exp, i) => {
                    const index = i + experienceSliceStart;
                    return (
                      <ExperienceMotionCard
                        key={index}
                        exp={exp}
                        index={index}
                        expandedExperience={expandedExperience}
                        setExpandedExperience={setExpandedExperience}
                      />
                    );
                  })}
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
                  <motion.div
                    key={index}
                    layout
                    transition={{
                      layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="relative"
                  >
                  <Card
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
                          <CardTitle className="flex flex-wrap items-center gap-2 text-2xl text-card-foreground mb-2">
                            {project.title} -{" "}
                            <span className="inline-flex items-center gap-1.5 text-xs pt-2">
                              {project.type}
                              {"vibeCoded" in project && project.vibeCoded && (
                                <>
                                  <Sparkles
                                    className="w-3.5 h-3.5 text-accent"
                                    aria-label="AI-assisted"
                                  />
                                  <span className="text-[10px] font-medium lowercase tracking-wide text-muted-foreground">
                                    vibe coded
                                  </span>
                                </>
                              )}
                            </span>
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

                    <AnimatePresence initial={false}>
                      {expandedProject === index && (
                        <motion.div
                          key={`project-expand-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.42,
                              ease: [0.33, 1, 0.68, 1],
                            },
                            opacity: {
                              duration: 0.28,
                              ease: "easeOut",
                            },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <CardContent className="pt-0 pb-6 border-0 shadow-none">
                        <div className="space-y-6">
                          {/* Project Image (supports image or video; videos loop) */}
                          {shouldShowProjectMedia(project) && (
                          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-accent/30 ring-4 ring-accent/10">
                            {project.media.toLowerCase().endsWith(".mp4") ||
                              project.media.toLowerCase().endsWith(".webm") ? (
                                <div className="relative">
                                  {/* media loading overlay */}
                                  {!mediaLoaded[`project-${index}`] && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-card/60">
                                      <div className="w-10 h-10 border-4 border-t-accent border-accent-200 rounded-full animate-spin" />
                                      <span className="text-sm text-card-foreground mt-3">
                                        Loading media...
                                      </span>
                                    </div>
                                  )}
                                  <video
                                    src={project.media}
                                    controls
                                    loop
                                    onLoadedData={() =>
                                      markLoaded(`project-${index}`)
                                    }
                                    className="w-full h-auto object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="relative overflow-hidden">
                                  {!mediaLoaded[`project-${index}`] && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm z-20 transition-opacity duration-500">
                                      <div className="w-8 h-8 border-4 border-t-accent border-muted rounded-full animate-spin" />
                                      <span className="text-sm text-card-foreground mt-2 font-medium">
                                        Loading media...
                                      </span>
                                    </div>
                                  )}
                                  <img
                                    id={`project-img-${index}`}
                                    src={`${project.media}${
                                      project.media.includes("?") ? "&" : "?"
                                    }r=0`}
                                    alt={project.title}
                                    onLoad={() =>
                                      markLoaded(`project-${index}`)
                                    }
                                    className={`w-full h-auto object-cover transition-opacity duration-700 ${
                                      mediaLoaded[`project-${index}`]
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                                  />
                                  {/* replay overlay only for animated image types */}
                                  {isAnimatedImage(project.media) && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        markNotLoaded(`project-${index}`);
                                        const img = document.getElementById(
                                          `project-img-${index}`
                                        ) as HTMLImageElement | null;
                                        if (img) {
                                          img.src =
                                            project.media +
                                            (project.media.includes("?")
                                              ? "&"
                                              : "?") +
                                            Date.now();
                                        }
                                      }}
                                      className="absolute top-2 right-2 bg-accent/80 text-accent-foreground px-2 py-1 rounded z-30"
                                    >
                                      Replay
                                    </button>
                                  )}
                                </div>
                              )}
                          </div>
                          )}

                          {"repoUrl" in project &&
                            typeof (project as { repoUrl?: string }).repoUrl ===
                              "string" &&
                            (project as { repoUrl: string }).repoUrl && (
                              <div className="flex justify-center">
                                <a
                                  href={(project as { repoUrl: string }).repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-card-foreground font-medium hover:border-accent hover:text-accent transition-colors"
                                >
                                  <Github className="w-5 h-5" />
                                  View on GitHub
                                </a>
                              </div>
                            )}

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
                              {project.type === "Professional"
                                ? "Key Contributions"
                                : "What I Learned"}
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

                          {project.highlight && (
                            <blockquote className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary italic text-card-foreground leading-relaxed">
                              {project.highlight}
                            </blockquote>
                          )}

                          {/* Bonuses - collapsible list; media rendered same size as main media */}
                          {project.bonuses && project.bonuses.length > 0 && (
                            <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-accent">
                              <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-accent" />
                                Bonuses
                              </h4>
                              <ul className="space-y-4">
                                {project.bonuses.map((bonus, bi) => {
                                  const isOpen = expandedBonuses[index] === bi;
                                  const imgId = `bonus-img-${index}-${bi}`;
                                  return (
                                    <li
                                      key={bi}
                                      className="border border-border rounded-lg overflow-hidden"
                                    >
                                      <button
                                        className="w-full flex items-center justify-between p-4 bg-card hover:bg-accent/5 transition"
                                        onClick={() =>
                                          setExpandedBonuses((prev) => ({
                                            ...prev,
                                            [index]:
                                              prev[index] === bi ? null : bi,
                                          }))
                                        }
                                      >
                                        <span className="text-card-foreground font-medium">
                                          {bonus.text || "[Bonus title]"}
                                        </span>
                                        <ChevronDown
                                          className={`w-5 h-5 text-accent transform transition-transform ${
                                            isOpen ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>

                                      {isOpen && (
                                        <div className="p-4">
                                          {/* media container - same styling as main media */}
                                          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-accent/30 ring-4 ring-accent/10">
                                            {bonus.media
                                              .toLowerCase()
                                              .endsWith(".mp4") ||
                                            bonus.media
                                              .toLowerCase()
                                              .endsWith(".webm") ? (
                                              <div className="relative overflow-hidden">
                                                {!mediaLoaded[
                                                  `bonus-${index}-${bi}`
                                                ] && (
                                                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm z-20 transition-opacity duration-500">
                                                    <div className="w-8 h-8 border-4 border-t-accent border-muted rounded-full animate-spin" />
                                                    <span className="text-sm text-card-foreground mt-2 font-medium">
                                                      Loading video...
                                                    </span>
                                                  </div>
                                                )}
                                                <video
                                                  src={bonus.media}
                                                  controls
                                                  loop
                                                  onLoadedData={() =>
                                                    markLoaded(
                                                      `bonus-${index}-${bi}`
                                                    )
                                                  }
                                                  className={`w-full h-auto object-cover transition-opacity duration-700 ${
                                                    mediaLoaded[
                                                      `bonus-${index}-${bi}`
                                                    ]
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  }`}
                                                />
                                              </div>
                                            ) : (
                                              <div className="relative overflow-hidden">
                                                {!mediaLoaded[
                                                  `bonus-${index}-${bi}`
                                                ] && (
                                                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm z-20 transition-opacity duration-500">
                                                    <div className="w-8 h-8 border-4 border-t-accent border-muted rounded-full animate-spin" />
                                                    <span className="text-sm text-card-foreground mt-2 font-medium">
                                                      Loading image...
                                                    </span>
                                                  </div>
                                                )}
                                                <img
                                                  id={imgId}
                                                  src={`${bonus.media}${
                                                    bonus.media.includes("?")
                                                      ? "&"
                                                      : "?"
                                                  }r=0`}
                                                  alt={
                                                    bonus.text ||
                                                    `Bonus ${bi + 1}`
                                                  }
                                                  onLoad={() =>
                                                    markLoaded(
                                                      `bonus-${index}-${bi}`
                                                    )
                                                  }
                                                  className={`w-full h-auto object-cover transition-opacity duration-700 ${
                                                    mediaLoaded[
                                                      `bonus-${index}-${bi}`
                                                    ]
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  }`}
                                                />
                                                <button
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    const img =
                                                      document.getElementById(
                                                        imgId
                                                      ) as HTMLImageElement | null;
                                                    if (img) {
                                                      img.src = `${
                                                        bonus.media
                                                      }${
                                                        bonus.media.includes(
                                                          "?"
                                                        )
                                                          ? "&"
                                                          : "?"
                                                      }${Date.now()}`;
                                                    }
                                                  }}
                                                  className="absolute top-2 right-2 bg-accent/80 text-accent-foreground px-2 py-1 rounded"
                                                >
                                                  Replay
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                  </motion.div>
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
                    “Do not fear, for I am with you; do not be dismayed, for I
                    am your God. I will strengthen you and help you; I will
                    uphold you with my righteous right hand.” (Isaiah 41:10)
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-primary text-xs uppercase tracking-wider mb-3 font-semibold">
                    Professional
                  </p>
                  <p className="text-card-foreground italic leading-relaxed text-sm">
                    “When everything seems to be going against you, remember
                    that the airplane takes off against the wind, not with it.”
                    (Henry Ford)
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 border-l-4 border-secondary">
                  <p className="text-secondary text-xs uppercase tracking-wider mb-3 font-semibold">
                    Personal
                  </p>
                  <p className="text-card-foreground italic leading-relaxed text-sm">
                    “Don’t aim to be the best in the world. Aim to be the best
                    for the world.” (Unknown)
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
