import { useEffect, useRef } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={contactRef} 
      className="py-20 px-4"
      style={{ 
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out 0.2s forwards'
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="gradient-border rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="group px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/50 relative overflow-hidden"
            >
              <span className="relative z-10">Send Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold transition-all hover:scale-110 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">View GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
