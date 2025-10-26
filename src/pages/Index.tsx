import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <ProjectsCarousel />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
