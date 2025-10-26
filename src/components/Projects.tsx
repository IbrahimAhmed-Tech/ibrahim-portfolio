import { useEffect, useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online marketplace with real-time inventory, payment integration, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Cloud-Native SaaS",
    description: "Scalable multi-tenant application deployed on AWS with microservices architecture.",
    stack: ["React", "AWS Lambda", "PostgreSQL", "Docker"],
  },
  {
    title: "Mobile Social App",
    description: "Cross-platform social networking application with real-time chat and media sharing.",
    stack: ["React Native", "Expo", "Firebase", "Node.js"],
  },
  {
    title: "Enterprise CMS",
    description: "Content management system with role-based access control and RESTful API.",
    stack: ["Laravel", "Vue.js", "MySQL", "Redis"],
  },
];

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

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
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in building modern, scalable applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl"
              style={{ 
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.15}s forwards`
              }}
            >
              <div className="glass p-8 h-full transition-all duration-300 hover:bg-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
