import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Full Stack Development",
    description: "Building scalable web applications using MERN stack with focus on performance and user experience.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting and deploying cloud-native applications on AWS with serverless and containerized solutions.",
    technologies: ["AWS", "Lambda", "EC2", "S3", 'RDS', 'VPC', 'Cognito'],
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications using React Native and Expo for iOS and Android.",
    technologies: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Backend Engineering",
    description: "Developing robust APIs and backend systems with Laravel, PHP, and managing SQL databases.",
    technologies: ["Laravel", "PHP", "PostgreSQL", "SQL Server"],
  },
];

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
          <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Comprehensive experience across the full development lifecycle, from concept to deployment.
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
