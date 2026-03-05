import { useEffect, useRef } from "react";
import { contactSection } from "@/content";
import { FiMail, FiGithub } from "react-icons/fi";

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
      { threshold: 0.1 },
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
        animation: "fadeIn 0.8s ease-out 0.2s forwards",
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="gradient-border rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{contactSection.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {contactSection.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactSection.buttons.sendEmail.href}
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <FiMail size={20} />
              {contactSection.buttons.sendEmail.text}
            </a>

            <a
              href={contactSection.buttons.viewGitHub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <FiGithub size={20} />
              {contactSection.buttons.viewGitHub.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
