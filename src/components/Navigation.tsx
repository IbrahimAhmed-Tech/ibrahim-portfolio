import { useState, useEffect } from "react";
import { navigationLinks, personalInfo, navigationContent } from "@/content";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl font-bold gradient-text">
            {personalInfo.portfolioTitle}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={navigationContent.hireMeHref}
            className="hidden md:block px-6 py-2 rounded-full glass hover:bg-white/10 font-semibold transition-all hover:scale-105"
          >
            {navigationContent.hireMeText}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
