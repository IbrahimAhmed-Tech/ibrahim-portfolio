import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    title: "Real-Time Analytics Dashboard",
    description: "Data visualization platform with live updates and custom reporting tools.",
    stack: ["React", "D3.js", "WebSocket", "PostgreSQL"],
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer service solution with natural language processing.",
    stack: ["Python", "TensorFlow", "React", "AWS"],
  },
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section 
      id="projects" 
      ref={carouselRef} 
      className="py-20 px-4 opacity-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in building modern, scalable applications.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full glass hover:bg-white/20 transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full glass hover:bg-white/20 transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {getVisibleProjects().map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    index === 1 ? 'scale-105 md:scale-110' : 'scale-95 md:scale-100 opacity-70'
                  }`}
                  style={{
                    transform: index === 1 ? 'translateY(-10px) scale(1.1)' : '',
                  }}
                >
                  <div className="glass p-8 h-full transition-all duration-300 hover:bg-white/10 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground hover:bg-primary/30 transition-colors"
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

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
