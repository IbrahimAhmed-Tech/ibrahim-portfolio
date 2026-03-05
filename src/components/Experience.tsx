import { useEffect, useRef } from "react";
import { experiences, experienceSection } from "@/content";

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".experience-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={experienceRef} className="py-20 px-4 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{experienceSection.title}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {experienceSection.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item gradient-border rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              style={{ 
                opacity: 0,
                animation: `fadeIn 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium glass"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
