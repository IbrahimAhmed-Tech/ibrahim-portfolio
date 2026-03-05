import { useEffect, useRef, useState } from "react";
import { projects, projectsSection } from "@/content";

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(Math.min(4, projects.length));

  const handleView = (project: (typeof projects)[0]) => {
    // Placeholder handler — replace with modal or navigation as needed
    // eslint-disable-next-line no-console
    console.log("View project:", project.title);
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
      { threshold: 0.1 }
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
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl"
              style={{
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.12}s forwards`,
              }}
            >
              <div className="glass p-8 h-full transition-all duration-300 hover:bg-white/10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2 flex-1 min-w-0">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleView(project)}
                        className="px-4 py-2 rounded-full font-semibold shadow-lg transform transition-all duration-300 bg-white/6 hover:bg-white/10"
                      >
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                          {projectsSection.viewButtonText}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* Load more section */}
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
