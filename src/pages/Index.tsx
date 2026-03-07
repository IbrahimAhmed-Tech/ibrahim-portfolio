import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
