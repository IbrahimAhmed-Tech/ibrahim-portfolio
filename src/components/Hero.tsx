import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/content";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      variants={revealUp}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* LEFT SIDE - TEXT */}

          {/* RIGHT SIDE - IMAGE */}
          <motion.div className="flex justify-center" variants={staggerItem}>
            <div className="flex justify-center">
          <img
            src={heroContent.image}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500/30 shadow-2xl hover:scale-105 transition duration-300"
          />
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left space-y-8"
            variants={staggerContainer}
          >
            <motion.h1
              className="font-bold leading-tight mt-12"
              variants={staggerItem}
            >
              <span className="block text-2xl md:text-3xl mb-2 text-muted-foreground">
                {heroContent.greeting}
              </span>

              <span className="block text-5xl md:text-7xl font-extrabold tracking-tight heading-primary">
                {heroContent.name}
              </span>

              <span className="block mt-2 text-xl md:text-2xl text-muted-foreground">
                {heroContent.title}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
              variants={staggerItem}
            >
              {heroContent.description}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start pt-8" variants={staggerItem}>
              <a
                href={heroContent.buttons.getInTouch.href}
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-lg"
              >
                {heroContent.buttons.getInTouch.text}
              </a>

              <a
                href={heroContent.buttons.viewProjects.href}
                className="px-8 py-3 rounded-full border border-primary/30 text-foreground font-semibold hover:border-primary/60 hover:bg-white/5 transition-all"
              >
                {heroContent.buttons.viewProjects.text}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
