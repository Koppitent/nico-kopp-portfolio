import { ExternalLink } from "lucide-react";
import type { Project } from "./projects.data";

function ProjectMediaView({ media }: { media: Project["media"] }) {
  if (media.kind === "iframe") {
    return (
      <iframe
        src={media.src}
        className="w-full h-full border-0"
        title={media.title}
      />
    );
  }

  return (
    <>
      <img
        src={media.src}
        className={`w-full h-full border-0 ${
          media.fit === "cover" ? "object-cover" : ""
        } ${media.rounded ? "rounded-lg" : ""}`}
        title={media.title}
        alt={media.alt}
      />
      {media.overlay && (
        <img
          src={media.overlay.src}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md z-10"
          alt={media.overlay.alt}
        />
      )}
    </>
  );
}

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const Icon = project.icon;

  const mediaColumn = (
    <div
      className={`bg-neutral-900 rounded-lg h-96 flex items-center justify-center relative ${
        project.media.kind === "image" && project.media.overlay
          ? "overflow-visible"
          : "overflow-hidden"
      }`}
    >
      <ProjectMediaView media={project.media} />
    </div>
  );

  const contentColumn = (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="text-indigo-400" size={28} />
        <h2 className="text-3xl font-bold text-indigo-300">
          {project.title}
        </h2>
      </div>
      <p className="text-neutral-300 text-lg">{project.description}</p>
      <div className="flex gap-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded hover:bg-cyan-600 transition-colors duration-200 text-neutral-200"
          >
            {link.icon}
            <span>{link.label}</span>
            <ExternalLink size={18} />
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      {reverse ? (
        <>
          {contentColumn}
          {mediaColumn}
        </>
      ) : (
        <>
          {mediaColumn}
          {contentColumn}
        </>
      )}
    </div>
  );
}
