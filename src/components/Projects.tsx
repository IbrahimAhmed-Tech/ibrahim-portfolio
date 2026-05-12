import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, projectsSection } from "@/content";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { revealUp, staggerContainer } from "@/lib/motion";

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(
    Math.min(4, projects.length),
  );

  const handleView = (project: (typeof projects)[0]) => {
    window.open(project.url, "_blank");
  };

  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      ref={projectsRef}
      className="py-20 px-4"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 heading-primary">
          {projectsSection.title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {projectsSection.description}
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              projectsSection={projectsSection}
              handleView={handleView}
            />
          ))}
        </motion.div>

        {projects.length > visibleCount && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setVisibleCount(projects.length)}
              variant="default"
              size="lg"
            >
              {projectsSection.loadMoreText}
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
