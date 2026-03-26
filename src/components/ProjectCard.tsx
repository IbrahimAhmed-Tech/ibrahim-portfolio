import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerItem } from "@/lib/motion";

export function ProjectCard({ project, projectsSection, handleView }) {
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const prevImage = () =>
    setActiveImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % project.images.length);

  return (
    <motion.div
      className="project-card group relative overflow-hidden rounded-2xl"
      variants={staggerItem}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
    >
      <div className="glass h-full transition-all duration-300 hover:bg-white/10 relative flex flex-col">
        {/* ── Image Carousel ── */}
        {project.images?.length > 0 && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
            {/* Slides */}
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Prev / Next buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            ></button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            ></button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === activeImage
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Card Content ── */}
        <div className="relative z-10 flex flex-col flex-1 p-8">
          {/* Decorative corner blob */}

          {/* Title & description */}
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-5 flex-1">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom row: timeframe + view button */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">
              {project.timeframe}
            </span>
            <button
              onClick={() => handleView(project)}
              className="px-4 py-2 rounded-full font-semibold text-primary hover:text-primary/80 border border-primary/30 hover:border-primary/60 transition-all"
            >
              {projectsSection.viewButtonText}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
