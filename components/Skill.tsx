import React, { useState, useEffect } from "react";
import { motion, Variants, AnimationProps } from "framer-motion";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { outfit } from "@/app/fonts";
import { skillTechnologies } from "@/data";

const SkillPage = () => {
  // Use clientSideOnly rendering to avoid hydration errors
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  // Only run client-side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Stagger animation for tech cards
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const techItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    }
  };

  // Properly typed title animation
  const titleAnimationProps: AnimationProps = {
    animate: { 
      y: [0, -8, 0] 
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="skills"
      className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-0 md:px-10"
    >
      <motion.div 
        className="relative mx-auto size-fit overflow-hidden pt-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center"
          animate={titleAnimationProps.animate}
          transition={titleAnimationProps.transition}
        >
          <motion.p
            className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I CONSTANTLY TRY TO IMPROVE
          </motion.p>
          <AnimatedGradientText className="tangerine-bold text-6xl pr-2">My Tech Stack</AnimatedGradientText>
        </motion.h2>
      </motion.div>

      <motion.div 
        className="mx-auto my-16 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillTechnologies.map((tech, index) => (
          <motion.div 
            key={index}
            className={`${outfit.className} group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base`}
            variants={techItem}
            onHoverStart={() => isMounted && setHoveredTech(tech.name)}
            onHoverEnd={() => isMounted && setHoveredTech(null)}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(40, 40, 40, 0.95)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            }}
          >
            <motion.img 
              height="18" 
              width="18" 
              alt={tech.name} 
              src={tech.icon}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative">
              {/* Gradient text effect on hover using Tailwind classes */}
              <span className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {isMounted && <ParticlesBackground />}
    </section>
  );
};

// Create a subtle particles background effect
const ParticlesBackground = () => {
  // Create an array of particles
  const particleCount = 15;
  const particles = Array.from({ length: particleCount });
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => {
        // Randomize particle properties for more natural look
        const size = Math.random() * 6 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/10"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
              scale: [1, 1.2, 0.8]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default SkillPage;