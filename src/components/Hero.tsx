import { useEffect, useRef } from "react";
import { heroContent } from "@/content";

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
      { threshold: 0.1 },
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE - TEXT */}

          {/* RIGHT SIDE - IMAGE */}
          <div className="flex justify-center">
              <div className="flex justify-center">
          <img
            src={heroContent.image}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>
          </div>
          <div className="text-center md:text-left space-y-8">
            <h1 className="font-bold leading-tight mt-12">
              <span className="block text-2xl md:text-3xl mb-2 text-muted-foreground">
                {heroContent.greeting}
              </span>

              <span className="block text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {heroContent.name}
              </span>

              <span className="block mt-2 text-xl md:text-2xl text-muted-foreground">
                {heroContent.title}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-8">
              <a
                href={heroContent.buttons.getInTouch.href}
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
              >
                {heroContent.buttons.getInTouch.text}
              </a>

              <a
                href={heroContent.buttons.viewProjects.href}
                className="px-8 py-3 rounded-full glass hover:bg-white/10 text-foreground font-semibold transition-all hover:scale-105"
              >
                {heroContent.buttons.viewProjects.text}
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
