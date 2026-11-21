
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SmoothLink from "@/components/SmoothLink";
import ThemeToggle from "@/components/ThemeToggle";

const linkedin =
  "https://www.linkedin.com/in/maseeh-sallah-4723253a2";

const github = "https://github.com/MaseehSallah";

const projects = [
  {
    title: "Offline Afghan Tutor",
    category: "Artificial Intelligence / Educational Technology",
    description:
      "An offline AI-powered educational application designed to help Afghan girls study the national curriculum for Grades 7–12.",
    technologies: [
      "Gemma 4 E2B",
      "EmbeddingGemma",
      "RAG",
      "Offline AI",
    ],
    details:
      "A collaborative thesis project designed for mobile and desktop learning, combining local language-model inference with curriculum-based information retrieval to support education without a continuous internet connection.",
  },
  {
    title: "Afghanistan Child Vulnerability Intelligence System",
    image: "/projects/Screenshot 2026-11-19 195813.png",
    category: "Data Science / Machine Learning",
    description:
      "Interactive analytics and predictive modeling to explore child vulnerability indicators using synthetic data.",
    technologies: [
      "Power BI",
      "Python",
      "Machine Learning",
    ],
    details:
      "A five-page intelligence dashboard using 150,000 synthetic records, featuring vulnerability analysis, education disruption predictions, and model evaluation. This is a demonstration project, not an official UNICEF product or endorsement.",
  },
  {
    title: "Python & Software Development",
    category: "Programming / Software Development",
    description:
      "A showcase of programming knowledge, problem-solving techniques, and software development skills developed through academic study and practical exercises.",
    technologies: [
      "Python",
      "C++",
      "Algorithms",
      "Problem Solving",
    ],
    details:
      "My programming background includes academic coursework, programming competitions, and practical exercises. This section highlights my technical capabilities rather than representing a single completed software product.",
    github: "https://github.com/MaseehSallah",
  },
];

const services = [
  {
    number: "01",
    title: "Data Analytics",
    description:
      "Transform raw data into clear, meaningful insights through data cleaning, exploration, and statistical analysis.",
    tools: "Python · SQL · Excel",
  },
  {
    number: "02",
    title: "Business Intelligence",
    description:
      "Develop interactive dashboards and visual reports that support informed, data-driven decision-making.",
    tools: "Power BI · Tableau",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Develop applied AI prototypes, predictive models, and intelligent applications for practical challenges.",
    tools: "Python · Machine Learning · LLMs",
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Build responsive, modern websites and web applications with clean design and practical functionality.",
    tools: "Next.js · React · TypeScript",
  },
  {
    number: "05",
    title: "Application Development",
    description:
      "Create practical desktop and mobile application solutions tailored to specific requirements.",
    tools: "Python · Application Development",
  },
  {
    number: "06",
    title: "Automation & Data Processing",
    description:
      "Simplify repetitive tasks and improve efficiency through automated scripts and structured data workflows.",
    tools: "Python · Data Transformation",
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Python", "C++", "TypeScript"],
  },
  {
    title: "Data Analytics",
    items: [
      "Data Cleaning",
      "Data Manipulation",
      "Data Transformation",
      "Exploratory Data Analysis",
      "SQL",
      "Excel",
    ],
  },
  {
    title: "Visualization & BI",
    items: [
      "Power BI",
      "Tableau",
      "Dashboard Development",
      "Data Storytelling",
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      "Machine Learning",
      "Predictive Modeling",
      "Model Evaluation",
      "Feature Engineering",
      "Large Language Models",
      "RAG",
    ],
  },
  {
    title: "Web & Software Development",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Tkinter",
      "JSON",
      "Git",
      "GitHub",
    ],
  },
];

const navigation = [
  { title: "Projects", href: "#projects" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about" },
  { title: "Credentials", href: "#credentials" },
  { title: "Skills", href: "#skills" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:px-6">

          {/* MS BRANDING */}

          <SmoothLink
            href="#home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-sm font-bold tracking-[-0.08em] text-text-primary shadow-sm transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
              MS
            </span>

            <span className="text-base font-bold tracking-tight text-text-primary sm:text-lg">
              Maseeh Sallah
              <span className="text-secondary">.</span>
            </span>
          </SmoothLink>

          {/* DESKTOP LINKS */}

          <div className="hidden items-center gap-6 text-sm font-medium text-text-secondary lg:flex">
            {navigation.map((item) => (
              <SmoothLink
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-text-primary"
              >
                {item.title}
              </SmoothLink>
            ))}
          </div>

          {/* THEME SWITCH AND CONTACT BUTTON */}

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />

            <SmoothLink
              href="#contact"
              className="hidden shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-text-light transition hover:opacity-90 sm:inline-flex"
            >
              Let&apos;s Talk ↗
            </SmoothLink>
          </div>

        </nav>

        {/* MOBILE NAVIGATION */}

        <div className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-3 text-xs font-medium text-text-secondary">
            {navigation.map((item) => (
              <SmoothLink
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap transition hover:text-text-primary"
              >
                {item.title}
              </SmoothLink>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="scroll-mt-32 bg-primary text-text-light"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[250px_1fr] lg:gap-20 lg:py-28">

          {/* PROFILE PHOTO */}

          <div className="mx-auto w-full max-w-[205px] md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_22px_55px_rgba(0,0,0,0.25)]">
              <Image
                src="/profile.jpeg"
                alt="Maseeh Sallah"
                fill
                sizes="205px"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>

            <div className="mt-4 h-[2px] w-full rounded-full bg-accent" />

            <p className="mt-4 text-center text-xs tracking-wide text-[#A8C8E0]">
              Programmer · Data Scientist
            </p>
          </div>

          {/* INTRODUCTION */}

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />

              <span className="text-xs tracking-wide text-[#DCE8F0]">
                Programmer & Data Scientist
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-5xl lg:text-[65px]">
              Building software.
              <br />
              Finding meaning
              <br />

              <span className="font-serif font-normal italic text-[#A8C8E0]">
                in data.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#D1DFEC] sm:text-base">
              I develop practical applications and transform
              complex data into meaningful insights through
              programming, analytics, and artificial intelligence.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <SmoothLink
                href="#projects"
                className="rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:bg-surface-muted"
              >
                Explore Projects ↗
              </SmoothLink>

              <SmoothLink
                href="#services"
                className="rounded-full border border-accent/60 px-6 py-3.5 text-sm font-medium transition hover:bg-white/10"
              >
                Explore Services
              </SmoothLink>
            </div>

            {/* DATA SCIENCE WORKFLOW */}

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-xs tracking-wide text-[#CBD9E6]">
              <span>Data</span>
              <span className="text-accent">→</span>

              <span>Analysis</span>
              <span className="text-accent">→</span>

              <span>Intelligence</span>
              <span className="text-accent">→</span>

              <span className="font-semibold text-text-light">
                Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION STRIP */}

      <div className="border-b border-border bg-surface-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-xs font-semibold tracking-wide text-text-primary">
          <span>DATA SCIENCE</span>

          <span className="hidden text-secondary sm:inline">
            ✦
          </span>

          <span>SOFTWARE ENGINEERING</span>

          <span className="hidden text-secondary sm:inline">
            ✦
          </span>

          <span>ARTIFICIAL INTELLIGENCE</span>
        </div>
      </div>

      {/* PROJECTS SECTION */}

      <section
        id="projects"
        className="scroll-mt-32 bg-background py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                01 / Selected Work
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Featured Projects
                <span className="text-secondary">.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary">
                Exploring the intersection of software engineering,
                data science, and artificial intelligence through
                practical projects.
              </p>
            </div>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-secondary hover:underline"
            >
              Explore GitHub ↗
            </a>
          </div>

          {/* INDEPENDENT PROJECT COLUMNS */}

          <div className="grid items-start gap-6 md:grid-cols-2">

            {/* LEFT COLUMN */}

            <div className="flex flex-col gap-6">
              {projects
                .filter((_, index) => index % 2 === 0)
                .map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                  />
                ))}
            </div>

            {/* RIGHT COLUMN */}

            <div className="flex flex-col gap-6">
              {projects
                .filter((_, index) => index % 2 === 1)
                .map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                  />
                ))}
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}

      <section
        id="services"
        className="scroll-mt-32 border-y border-border bg-surface-soft py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              02 / What I Offer
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Expertise & Services
              <span className="text-secondary">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary">
              Combining analytical thinking, intelligent technology,
              and software development to create practical,
              purposeful solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition duration-300 hover:border-secondary hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-green font-mono text-sm font-semibold text-secondary">
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-accent transition-colors group-hover:text-secondary"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-medium leading-6 text-secondary">
                    {service.tools}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* SERVICES CALL TO ACTION */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-background p-7 sm:p-9">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Let&apos;s discuss how data and technology can
                help bring your ideas to life.
              </p>
            </div>

            <SmoothLink
              href="#contact"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-text-light transition hover:opacity-90"
            >
              Start a Conversation ↗
            </SmoothLink>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        className="scroll-mt-32 bg-surface-green py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              03 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              A little about me.
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-accent" />
          </div>

          <div>
            <p className="text-base leading-8 text-text-secondary">
              I&apos;m Maseeh Sallah, a programmer and aspiring
              data scientist with a background in Information
              Technology. I enjoy building software, analyzing
              complex information, and exploring intelligent
              systems that solve real problems.
            </p>

            <p className="mt-5 text-base leading-8 text-text-secondary">
              My interests lie at the intersection of data,
              artificial intelligence, and software development.
              I believe technology is most valuable when it
              creates meaningful and practical solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-secondary/40 bg-surface px-4 py-2 text-xs font-medium">
                2× Programming Award Recipient
              </span>

              <span className="rounded-full border border-secondary/40 bg-surface px-4 py-2 text-xs font-medium">
                Data Management Experience
              </span>
            </div>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block text-sm font-semibold text-text-primary hover:underline"
            >
              More on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* COMPACT PROFESSIONAL CREDENTIALS */}

      <section
        id="credentials"
        className="scroll-mt-32 border-y border-border bg-surface-soft py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Professional Background
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience & Credentials
              <span className="text-secondary">.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Practical experience, technical training, and
              professional achievements behind my work.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">

            {/* EXPERIENCE */}

            <details className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden sm:p-6 [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="text-base font-semibold">
                    Professional Experience
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    TEDx Shar e Naw
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-secondary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
                <p className="text-sm font-semibold">
                  Data Manager
                </p>

                <p className="mt-1 text-xs text-text-secondary">
                  December 2024 – August 2026
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary">
                  Managed and organized event data, maintained
                  accurate records, supported data cleaning,
                  and collaborated with teams across four TEDx events.
                </p>
              </div>
            </details>

            {/* TECHNICAL TRAINING */}

            <details className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden sm:p-6 [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="text-base font-semibold">
                    Technical Training
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    UNICEF Skills & Livelihood Data Science Program
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-secondary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
                <p className="text-sm font-semibold">
                  Data Science Program
                </p>

                <p className="mt-1 text-xs text-text-secondary">
                  May – November 2026
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary">
                  Technical training & implementation in Python, data cleaning,
                  data transformation, Power BI, machine learning,
                  deep learning, and applied data analysis.
                </p>
              </div>
            </details>

            {/* CERTIFICATIONS */}

            <details className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden sm:p-6 [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="text-base font-semibold">
                    Certifications
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Google · University of Cambridge
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-secondary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="space-y-5 border-t border-border px-5 pb-6 pt-5 sm:px-6">

                <div>
                  <p className="text-sm font-semibold">
                    Google Data Analytics Professional Certificate
                  </p>

                  <a
                    href="https://coursera.org/verify/WYEBQJ1IF663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-secondary hover:underline"
                  >
                    Verify Certificate ↗
                  </a>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">
                    Qualitative Research Method — University of Cambridge
                  </p>

                  <a
                    href="https://credentials.ice.cam.ac.uk/c4c96a4e-59ea-47e7-8926-589a2655175f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-secondary hover:underline"
                  >
                    View Credential ↗
                  </a>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">
                    Global History — University of Cambridge
                  </p>

                  <a
                    href="https://credentials.ice.cam.ac.uk/ea50d8e3-0b7d-42d2-a8d6-0c7d326db4ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-secondary hover:underline"
                  >
                    View Credential ↗
                  </a>
                </div>

              </div>
            </details>

            {/* AWARDS AND EDUCATION */}

            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:hidden sm:p-6 [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="text-base font-semibold">
                    Awards & Education
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Programming · Networking · Kardan University
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-secondary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="space-y-5 border-t border-border px-5 pb-6 pt-5 sm:px-6">

                <div>
                  <p className="text-sm font-semibold">
                    Competitive Programmer Awards
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    2023 & 2024
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">
                    IT Network Competition Winner
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    2025
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">
                    Bachelor of Computer Science
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Kardan University, Kabul
                  </p>
                </div>

              </div>
            </details>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section
        id="skills"
        className="scroll-mt-32 bg-background py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            04 / Technical Toolkit
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills & Technologies
            <span className="text-secondary">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary">
            The programming languages, analytical tools,
            and technologies behind my work.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-surface p-7 transition duration-300 hover:border-secondary hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="mb-6 text-base font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-surface-green px-3 py-2 text-xs font-medium text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* LANGUAGES */}

            <div className="rounded-2xl bg-primary p-7 text-text-light">
              <h3 className="mb-6 text-base font-semibold">
                Languages
              </h3>

              <div className="flex flex-wrap gap-2">
                {["English", "Dari", "Pashto", "Urdu"].map(
                  (language) => (
                    <span
                      key={language}
                      className="rounded-lg bg-white/15 px-3 py-2 text-xs text-text-light"
                    >
                      {language}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}

      <section
        id="blog"
        className="scroll-mt-32 border-y border-border bg-surface-soft py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            05 / Writing
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Notes & Insights
            <span className="text-secondary">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary">
            Technical articles, project breakdowns, and lessons
            learned from exploring data science, artificial
            intelligence, and software engineering.
          </p>

          <div className="mt-9 rounded-2xl border border-border bg-background p-8">
            <div className="mb-4 h-[2px] w-10 bg-accent" />

            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Coming Soon
            </p>

            <p className="mt-3 text-sm font-medium text-text-secondary">
              First article coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="scroll-mt-32 bg-primary py-16 text-text-light sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8C8E0]">
              06 / Contact
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s connect.
            </h2>

            <div className="mt-5 h-[2px] w-16 bg-accent" />

            <p className="mt-6 max-w-md text-sm leading-7 text-[#D1DFEC]">
              Interested in collaborating, developing a project,
              or discussing a professional opportunity?
              I&apos;d be happy to hear from you.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="mb-1 text-xs text-[#A8C8E0]">
                  Email
                </p>

                <a
                  href="mailto:sydsallah@gmail.com"
                  className="break-all transition hover:text-[#A8C8E0]"
                >
                  sydsallah@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs text-[#A8C8E0]">
                  Phone
                </p>

                <a
                  href="tel:+93783192349"
                  className="transition hover:text-[#A8C8E0]"
                >
                  +93 783 192 349
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#A8C8E0]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#A8C8E0]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="min-w-0 rounded-2xl border border-accent/30 bg-background p-5 text-text-primary sm:p-9">
            <h3 className="mb-7 text-lg font-semibold">
              Send a message
            </h3>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-primary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-[#CBD9E6]">
          <p>© 2026 Maseeh Sallah</p>

          <p>Programmer & Data Scientist</p>

          <SmoothLink
            href="#home"
            className="transition hover:text-[#A8C8E0]"
          >
            Back to Top ↑
          </SmoothLink>
        </div>
      </footer>

    </main>
  );
}
