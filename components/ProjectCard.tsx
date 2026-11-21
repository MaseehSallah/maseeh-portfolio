
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  details: string;
  github?: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  category,
  technologies,
  details,
  github,
  image,
}: ProjectCardProps) {
  return (
    <article className="group flex h-fit flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/5">

      {/* PROJECT IMAGE */}

      {image ? (
        <div className="relative aspect-[2.8/1] overflow-hidden border-b border-border bg-surface-muted">

          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
          />

        </div>
      ) : (
        <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-surface-muted">

          <div className="flex flex-col items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-secondary">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m8 6-6 6 6 6" />
                <path d="m16 6 6 6-6 6" />
                <path d="m14 4-4 16" />
              </svg>

            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
              Technical Project
            </span>

          </div>
        </div>
      )}

      {/* PROJECT CONTENT */}

      <div className="flex flex-1 flex-col p-7">

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-secondary">
          {category}
        </p>

        <h3 className="text-xl font-semibold tracking-tight text-text-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-text-secondary">
          {description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="mt-6 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface-soft px-3 py-1.5 text-xs font-medium text-text-primary"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* PROJECT DETAILS */}

        <div className="pt-7">

          <details className="group/details border-t border-border pt-5">

            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-secondary transition-colors hover:text-text-primary [&::-webkit-details-marker]:hidden">

              <span>Explore Project</span>

              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-muted text-lg font-normal transition-transform duration-300 group-open/details:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>

            </summary>

            <div className="mt-5 space-y-4">

              <p className="text-sm leading-7 text-text-secondary">
                {details}
              </p>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-secondary hover:underline"
                >
                  View Source Code ↗
                </a>
              )}

            </div>

          </details>

        </div>

      </div>

    </article>
  );
}
