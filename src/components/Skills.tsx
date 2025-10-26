import { useEffect, useRef } from "react";

const skills = [
  { name: "MongoDB", category: "Database" },
  { name: "Express.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "TypeScript", category: "Language" },
];

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Proficient in modern technologies and frameworks, delivering robust solutions
          from frontend to backend, mobile to cloud.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 group relative"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
