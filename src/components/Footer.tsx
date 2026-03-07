import { FiMail, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { navigationLinks, personalInfo } from "@/content";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/60 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>

         

          <div className="flex items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FiMail size={25} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FiGithub size={25} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
