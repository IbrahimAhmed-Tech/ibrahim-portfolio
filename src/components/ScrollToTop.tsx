import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="animate-bounce" />
    </button>
  );
};

export default ScrollToTop;
