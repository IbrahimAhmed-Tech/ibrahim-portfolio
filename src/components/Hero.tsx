import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block mb-4">Hi, I'm a</span>
            <span className="gradient-text animate-float">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting scalable web applications with MERN stack, cloud solutions with AWS, 
            and mobile experiences with React Native. Specialized in building robust backend 
            systems with Laravel, PHP, and SQL databases.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full glass hover:bg-white/10 text-foreground font-semibold transition-all hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
