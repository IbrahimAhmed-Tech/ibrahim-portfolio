import { motion, useReducedMotion } from "framer-motion";
import { contactSection } from "@/content";
import { FiMail, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

const Contact = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="py-20 px-4"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="gradient-border rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
            {contactSection.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {contactSection.description}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.a
              href="mailto:ibrahimahmed9578@gmail.com"
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg"
              variants={staggerItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <FiMail size={20} />
              Send Email
            </motion.a>

            <motion.a
              href="https://github.com/ibrahimahmed-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-primary/30 text-foreground font-semibold flex items-center justify-center gap-2 hover:border-primary/60 hover:bg-white/5 transition-all"
              variants={staggerItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <FiGithub size={20} />
              View GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ibrahim-ahmed-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-primary/30 text-foreground font-semibold flex items-center justify-center gap-2 hover:border-primary/60 hover:bg-white/5 transition-all"
              variants={staggerItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <FaLinkedin size={20} />
              View LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
