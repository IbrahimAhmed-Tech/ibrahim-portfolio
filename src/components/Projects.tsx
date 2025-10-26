import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "PropQwiz",
    description: "PropQwiz – A React-based interactive real-estate web app where users guess property prices to earn entries for prize draws. Deployed on AWS with a RDS Database and Cognito for user authentication and more",
    stack: ["React Native", "TypeScript", "AWS", "Ruby on Rails"],
    url: "https://play.alpha.propqwiz.com/Welcome"
  },
  {
    title: "Golden M International",
    description: "Built a Full Scale Website for Golden M International, a leading supplier of construction materials, featuring product catalogs, contact forms, and responsive design.",
    stack: ["React", "Javascript", "PostgreSQL"],
    url: "https://golden-m-international-frontend.vercel.app/"
  },
  {
    title: "OCM - Medical Lab Management System",
    description: "A Laravel-based medical lab management system with patient records, test management, and reporting features. Currently running in major Government Hospitals across Ireland.",
    stack: ["Laravel", "PHP", "SQL Server", "MySQL", "jQuery"],
    url: "https://github.com/Zyam-1/ocm-old"
  },
  {
    title: "OCM Support - Support Ticketing System",
    description: "A Laravel-based support ticketing system for managing customer inquiries and technical support requests.",
    stack: ["Laravel", "PHP", "MySQL", "jQuery"],
    url: "https://ocmsupport.com/"
  },
  {
    title: "Insider",
    description: "Integrated Insider's API that provided sensors for monitoring player performance in real-time during matches. Developed dashboards for visualizing player stats and performance metrics. ",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Expression Based Book Recommendation System",
    description: "EmotiReads is a web app that uses real-time emotion detection via webcam (OpenCV + Python) to suggest personalized book recommendations, integrating PHP and MySQL for data management and emotion-based book matching.",
    stack: ["PHP", "Python", "MySQL", "OpenCV"],
    url: "https://github.com/Zyam-1/EmotionBasedBookRecommendationSystem"
  },
  {
    title: "Blogspot - Backend",
    description: "Built REST APIs (Express) to support a blog platform, enabling secure multi-role operations (writers, commenters, admins) and streamlining data interactions for front-end clients.",
    stack: ["Node.js", "Javascript", "MongoDB"],
    url: "https://github.com/Zyam-1/Blogspot-Backend"
  },
  {
    title: "Self-Photos - Backend",
    description: "Built REST APIs (Express) to support a platform that allows user to automatically backups photos from their devices to their local computer storage, ensuring secure and organized photo management.",
    stack: ["Node.js", "Typescript", "MongoDB"],
    url: "https://github.com/Zyam-1/Self-Photos-Backend"
  },
  {
    title: "ChatBot",
    description: "An AI ChatBot that utilized Gemini API to provide intelligent responses to user queries, enhancing user engagement and support. The application is created using Laravel for backend management, Blade for templating, and MySQL for data storage.",
    stack: ["Laravel", "PHP", "Blade", "MySQL"],
    url: "https://github.com/Zyam-1/ChatBot"
  },
];

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
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in building modern, scalable applications.
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
                          View
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
              Load more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
