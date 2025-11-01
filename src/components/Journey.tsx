import { useEffect, useRef, useState } from "react";
import { Rocket, Cloud, Smartphone, Settings, Code, Sprout, LucideIcon } from "lucide-react";

const journeyData: Array<{
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    year: "2025",
    title: "Mobile & Cloud Development",
    description: "Started working on React Native, AWS and relevant cloud technologies, expanding into cross-platform mobile development.",
    icon: Smartphone,
  },
  {
    year: "2024",
    title: "Desktop Application Development",
    description: "Started working on VB6 and VB.NET, building enterprise desktop applications and Windows-based solutions.",
    icon: Code,
  },
  {
    year: "2023 March",
    title: "First Professional Role",
    description: "Joined my first job and started working on PHP Laravel and SQL Server, diving into enterprise backend development.",
    icon: Rocket,
  },
  {
    year: "2023 Jan",
    title: "MERN Stack Developer",
    description: "Started working on MERN stack (MongoDB, Express, React, Node.js), building full-stack web applications.",
    icon: Settings,
  },
  {
    year: "2022",
    title: "Started the Journey",
    description: "Began with C++ programming, learning fundamentals and building a strong foundation in software development.",
    icon: Sprout,
  },
];

const Journey = () => {
  const journeyRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!journeyRef.current) return;

      const rect = journeyRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress based on scroll position
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrolled = windowHeight - rect.top;
        const total = windowHeight + sectionHeight;
        const percentage = Math.min(Math.max(scrolled / total, 0), 1);
        setProgress(percentage * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="journey" ref={journeyRef} className="py-20 px-4 gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">My Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          From passionate beginner to experienced full-stack developer - here's how I've grown over the years.
        </p>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent transition-all duration-300 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          {/* Journey items */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 items-center"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.8s ease-out ${index * 0.15}s forwards`
                }}
              >
                {/* Left side (year for odd items on desktop) */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'text-right pr-12' : 'md:order-2 pl-12'}`}>
                  <div className="inline-block">
                    <span className="text-5xl font-bold gradient-text">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-ml-2 z-10 hover:scale-150 transition-transform duration-300" />

                {/* Right side (content) */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'pr-12'}`}>
                  <div className="gradient-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    {/* Mobile year */}
                    <span className="md:hidden text-3xl font-bold gradient-text block mb-2">
                      {item.year}
                    </span>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <span className="text-2xl animate-pulse">✨</span>
            <span className="font-semibold gradient-text">And the journey continues...</span>
            <span className="text-2xl animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
