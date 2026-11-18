
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SmoothLink from "@/components/SmoothLink";

const linkedin =
  "https://www.linkedin.com/in/maseeh-sallah-4723253a2";

const github = "https://github.com/MaseehSallah";

const projects = [
  {
    title: "Afghanistan Child Vulnerability Intelligence System",
    category: "Data Science / Machine Learning",
    description:
      "Interactive analytics and predictive modeling to explore child vulnerability indicators.",
    technologies: ["Power BI", "Python", "Machine Learning"],
    details:
      "A five-page intelligence dashboard using 150,000 synthetic records, featuring vulnerability analysis, education disruption predictions, and model evaluation.",
  },
  {
    title: "Python Banking Management System",
    category: "Software Engineering",
    description:
      "A desktop banking application with authentication, transactions, and account management.",
    technologies: ["Python", "Tkinter", "JSON"],
    details:
      "A desktop application supporting registration, login, deposits, withdrawals, and persistent account data.",
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Python", "C++"],
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
    title: "Machine Learning",
    items: [
      "Predictive Modeling",
      "Model Evaluation",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "Tkinter", "JSON"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F4F1] text-[#17283F]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#DCE3E8] bg-[#F2F4F1]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <SmoothLink
            href="#home"
            className="text-lg font-bold tracking-tight"
          >
            Maseeh Sallah
            <span className="text-[#48769A]">.</span>
          </SmoothLink>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#617286] md:flex">
            <SmoothLink href="#projects" className="hover:text-[#17283F]">
              Projects
            </SmoothLink>

            <SmoothLink href="#about" className="hover:text-[#17283F]">
              About
            </SmoothLink>

            <SmoothLink href="#skills" className="hover:text-[#17283F]">
              Skills
            </SmoothLink>

            <SmoothLink href="#blog" className="hover:text-[#17283F]">
              Blog
            </SmoothLink>

            <SmoothLink href="#contact" className="hover:text-[#17283F]">
              Contact
            </SmoothLink>
          </div>

          <SmoothLink
            href="#contact"
            className="rounded-full bg-[#17283F] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#345F85]"
          >
            Let&apos;s Talk ↗
          </SmoothLink>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="bg-[#17283F] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[250px_1fr] lg:gap-20 lg:py-28">
          {/* REFINED PROFILE PHOTO */}
          <div className="mx-auto w-full max-w-[205px] md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_22px_55px_rgba(0,0,0,0.25)]">
              <Image
                src="/profile.jpeg"
                alt="Maseeh Sallah"
                fill
                sizes="205px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                priority
              />
            </div>

            {/* FULL-WIDTH PHOTO UNDERLINE */}
            <div className="mt-4 h-[2px] w-full rounded-full bg-gradient-to-r from-[#A8C8E0] via-[#6E9ABB] to-[#A8C8E0]" />
          </div>

          {/* INTRODUCTION */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#92C9B3]" />
              <span className="text-xs text-[#CFDDE9]">
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

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#C3D1DE] sm:text-base">
              I develop practical applications and transform
              complex data into meaningful insights through
              programming, analytics, and machine learning.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <SmoothLink
                href="#projects"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17283F] transition hover:bg-[#DCE8F0]"
              >
                Explore Projects ↗
              </SmoothLink>

              <SmoothLink
                href="#contact"
                className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium transition hover:bg-white/10"
              >
                Contact Me
              </SmoothLink>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION STRIP */}
      <div className="border-b border-[#DCE3E8] bg-[#DCE8F0]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs font-semibold tracking-wide text-[#345F85]">
          <span>SOFTWARE ENGINEERING</span>
          <span className="hidden text-[#93AFC3] sm:inline">✦</span>
          <span>DATA ANALYTICS</span>
          <span className="hidden text-[#93AFC3] sm:inline">✦</span>
          <span>MACHINE LEARNING</span>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#48769A]">
                01 / Selected Work
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Featured Projects
                <span className="text-[#48769A]">.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#617286]">
                A selection of software and data science
                projects built to solve practical problems.
              </p>
            </div>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#345F85] hover:underline"
            >
              Explore GitHub ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 bg-[#DCE8F0] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#48769A]">
              02 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              A little about me.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#435A70]">
              I&apos;m Maseeh Sallah, a programmer and aspiring
              data scientist with a background in Information
              Technology. I enjoy building software, analyzing
              complex information, and exploring intelligent
              systems that solve real problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#B9CFDE] px-4 py-2 text-xs font-medium">
                2× Programming Award Recipient
              </span>

              <span className="rounded-full border border-[#B9CFDE] px-4 py-2 text-xs font-medium">
                Data Management Experience
              </span>
            </div>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block text-sm font-semibold text-[#345F85] hover:underline"
            >
              More on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#48769A]">
            03 / Technical Toolkit
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Skills & Technologies.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[#D9E1E6] bg-white/80 p-7 transition duration-300 hover:border-[#8DAEC6] hover:shadow-lg hover:shadow-[#17283F]/5"
              >
                <h3 className="mb-6 text-base font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[#EAF0F4] px-3 py-2 text-xs font-medium text-[#435A70]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-[#17283F] p-7 text-white">
              <h3 className="mb-6 text-base font-semibold">
                Languages
              </h3>

              <div className="flex flex-wrap gap-2">
                {["English", "Dari", "Pashto", "Urdu"].map(
                  (language) => (
                    <span
                      key={language}
                      className="rounded-lg bg-white/10 px-3 py-2 text-xs text-[#DCE8F0]"
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

      {/* BLOG */}
      <section
        id="blog"
        className="scroll-mt-20 border-y border-[#DCE3E8] bg-[#E6ECEF] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#48769A]">
            04 / Writing
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Notes & Insights.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#617286]">
            Technical articles, project breakdowns,
            and lessons learned along the way.
          </p>

          <div className="mt-9 rounded-2xl border border-[#CEDAE1] bg-white/70 p-8">
            <p className="text-sm font-medium text-[#435A70]">
              First article coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#17283F] py-24 text-white"
      >
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8C8E0]">
              05 / Contact
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#C3D1DE]">
              Interested in collaborating or discussing
              a professional opportunity? I&apos;d be happy
              to hear from you.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="mb-1 text-xs text-[#93AFC3]">
                  Email
                </p>

                <a
                  href="mailto:sydsallah@gmail.com"
                  className="hover:text-[#A8C8E0]"
                >
                  sydsallah@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs text-[#93AFC3]">
                  Phone
                </p>

                <a
                  href="tel:+93783192349"
                  className="hover:text-[#A8C8E0]"
                >
                  +93 783 192 349
                </a>
              </div>

              <div className="flex gap-6 pt-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A8C8E0]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A8C8E0]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F2F4F1] p-7 text-[#17283F] sm:p-9">
            <h3 className="mb-7 text-lg font-semibold">
              Send a message
            </h3>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#17283F]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-[#93AFC3]">
          <p>© 2026 Maseeh Sallah</p>
          <p>Programmer & Data Scientist</p>

          <SmoothLink href="#home" className="hover:text-white">
            Back to Top ↑
          </SmoothLink>
        </div>
      </footer>
    </main>
  );
}
