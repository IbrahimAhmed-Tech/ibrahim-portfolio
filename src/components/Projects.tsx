import { useEffect, useRef, useState } from "react";
import { projects, projectsSection } from "@/content";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(
    Math.min(4, projects.length),
  );

  const handleView = (project: (typeof projects)[0]) => {
    window.open(project.url, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-up");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{projectsSection.title}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {projectsSection.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
  {projects.slice(0, visibleCount).map((project, index) => (
    <ProjectCard
      key={index}
      project={project}
      index={index}
      projectsSection={projectsSection}
      handleView={handleView}
    />
  ))}
</div>

        {projects.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(projects.length)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold shadow-xl transition-transform hover:scale-105"
            >
              {projectsSection.loadMoreText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
