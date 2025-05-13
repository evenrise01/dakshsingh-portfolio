import React, { useState, useEffect } from "react";
import { motion, Variants, AnimationProps } from "framer-motion";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { outfit } from "@/app/fonts";
import { skillTechnologies } from "@/data";
import Image from "next/image";

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
        delayChildren: 0.3,
      },
    },
  };

  const techItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  // Properly typed title animation
  const titleAnimationProps: AnimationProps = {
    animate: {
      y: [0, -8, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden w-full mt-10 flex h-full flex-col"
    >
      {/* Full-width background wrapper that extends to the sides */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        {/* Background image container */}
        <div className="relative h-full w-full">
          {/* Background image that extends beyond the content area */}
          <Image
            src="/skills-bg.jpg"
            alt="Cosmic background"
            className="object-cover object-center pointer-events-none select-none"
            sizes="100vw"
            quality={90}
            priority
            fill
          />

          {/* Overlay gradients for better text contrast and visual appeal - enhanced for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent sm:via-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 sm:from-black/40 sm:to-black/40"></div>

          {/* Colored accents to match reference - adjusted for mobile visibility */}
          <div className="absolute inset-0 bg-amber-800/5 sm:bg-amber-800/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-purple-900/5 sm:bg-purple-900/10 mix-blend-color-burn"></div>

          {/* Side gradients to blend with page edges - responsive widths */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>

      {/* Content container that keeps your existing layout */}
      <div className="relative z-10 h-[70vh] min-h-[500px] max-h-[800px] w-full">
        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="relative z-10 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm">
              I CONSTANTLY TRY TO IMPROVE
            </p>
            <span className="md:text-6xl text-white">
              <AnimatedGradientText className="tangerine-bold text-6xl pr-2">
                My Tech Stack
              </AnimatedGradientText>
            </span>
          </h2>
        </div>

        {/* Bottom fade to content area */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div> */}
      </div>

      <motion.div
        className="relative z-10 mx-auto mb-16 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`${outfit.className} group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900/90 backdrop-blur-sm px-4 py-1.5 text-sm text-white/80 lg:text-base`}
            variants={techItem}
            onHoverStart={() => isMounted && setHoveredTech(tech.name)}
            onHoverEnd={() => isMounted && setHoveredTech(null)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(40, 40, 40, 0.95)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
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
    <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
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
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default SkillPage;