import { motion, useReducedMotion } from "framer-motion";
import { skills, skillsSection } from "@/content";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="py-20 px-4"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 heading-primary">
          {skillsSection.title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {skillsSection.description}
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card group relative"
              variants={staggerItem}
            >
              <div className="glass rounded-2xl p-5 md:p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base md:text-lg font-semibold leading-snug">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
