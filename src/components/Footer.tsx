import { FiMail, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/content";
import { motion, useReducedMotion } from "framer-motion";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

const Footer = () => {
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-border bg-background/60 py-10"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>

         

          <motion.div
            className="flex items-center justify-center gap-4"
            variants={staggerContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-foreground/80 hover:text-foreground transition-colors"
              variants={staggerItem}
            >
              <FiMail size={25} />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/80 hover:text-foreground transition-colors"
              variants={staggerItem}
            >
              <FiGithub size={25} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/80 hover:text-foreground transition-colors"
              variants={staggerItem}
            >
              <FaLinkedin size={25} />
            </motion.a>
          </motion.div>
        </div>

        
      </div>
    </motion.footer>
  );
};

export default Footer;
