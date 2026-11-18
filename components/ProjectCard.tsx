
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
    <article className="group overflow-hidden rounded-2xl border border-[#e9e9e6] bg-white transition-all duration-300 hover:border-[#c9d0d5] hover:shadow-xl hover:shadow-slate-900/5">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#f1f3f2]">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Project Preview
          </span>
        )}
      </div>

      <div className="p-7">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#6d8599]">
          {category}
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[#f5f5f3] px-3 py-1.5 text-xs text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <details className="mt-7 border-t border-slate-100 pt-5">
          <summary className="cursor-pointer text-sm font-medium text-slate-800">
            Explore Project +
          </summary>

          <div className="mt-5 space-y-4">
            <p className="text-sm leading-7 text-slate-600">
              {details}
            </p>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-700 hover:underline"
              >
                View Source Code ↗
              </a>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
