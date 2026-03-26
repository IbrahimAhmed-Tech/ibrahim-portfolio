import { motion, useReducedMotion } from "framer-motion";
import { experiences, experienceSection } from "@/content";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="py-20 px-4 gradient-bg"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 heading-primary">
          {experienceSection.title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {experienceSection.description}
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item gradient-border rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold mb-4 heading-primary">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium glass"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
