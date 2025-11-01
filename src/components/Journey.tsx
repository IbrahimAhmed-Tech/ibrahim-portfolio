import { useEffect, useRef, useState } from "react";

const journeyData = [
  {
    year: "2024",
    title: "Full Stack Excellence",
    description: "Mastering modern cloud architectures and leading complex full-stack projects with AWS and microservices.",
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Cloud Native Development",
    description: "Specialized in serverless architectures, containerization, and scalable cloud solutions on AWS.",
    icon: "☁️",
  },
  {
    year: "2022",
    title: "Mobile Development",
    description: "Expanded expertise to cross-platform mobile development with React Native and Expo.",
    icon: "📱",
  },
  {
    year: "2021",
    title: "Backend Engineering",
    description: "Deepened backend skills with Laravel, PHP, and advanced database management systems.",
    icon: "⚙️",
  },
  {
    year: "2020",
    title: "MERN Stack Developer",
    description: "Built robust web applications using MongoDB, Express, React, and Node.js stack.",
    icon: "💻",
  },
  {
    year: "2019",
    title: "Started the Journey",
    description: "Began professional development career, learning fundamentals and building first projects.",
    icon: "🌱",
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
                      <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
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
