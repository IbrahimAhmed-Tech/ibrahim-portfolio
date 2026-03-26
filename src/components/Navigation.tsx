import { useState, useEffect } from "react";
import { navigationLinks, personalInfo, navigationContent } from "@/content";
import { motion, useReducedMotion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl font-bold heading-primary">
            {/* {personalInfo.portfolioTitle} */}
            
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
            className="hidden md:block px-6 py-2 rounded-full border border-primary/30 text-foreground font-semibold hover:border-primary/60 hover:bg-white/5 transition-all"
          >
            {navigationContent.hireMeText}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
