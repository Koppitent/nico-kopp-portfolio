import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.data";

export function Projects() {
  return (
    <section className="min-h-[80vh] bg-neutral-800 px-4 md:px-8">
      <div className="text-center pt-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
          <span className="text-indigo-200">{"{ "}</span>
          Projekte
          <span className="text-indigo-200">{" }"}</span>
        </h1>
      </div>
      <div className="mt-10 pb-10 space-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
