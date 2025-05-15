"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { SparklesCore } from "./ui/sparkles";

const HeroNew = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000); // Reset after 5 seconds
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Staggered text reveal animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const words = ["creative", "frontend", "full-stack", "website"];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black px-4 md:px-6 relative">
      <div className="absolute inset-0 z-0"></div>
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto mt-10 md:mt-20 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

<motion.h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 text-center mb-2 md:mb-2 px-2 leading-tight tracking-wide"
          variants={textVariants}
        >
          Hi, I&apos;m Daksh!
        </motion.h3>

        {/* Main Heading with motion */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mt-4 mb-1 md:mb-2 px-2 tangerine-bold leading-tight"
          variants={textVariants}
        >
          Meet your next{" "}
          <span className="block sm:inline">
            <ContainerTextFlip
              words={words}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center"
            />{" "}
            developer.
          </span>
        </motion.h1>

        <div className="w-full max-w-[60rem] h-40 relative">
          {/* Gradients - made responsive */}
          <div className="absolute inset-x-4 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-5/6 sm:w-3/4 blur-sm" />
          <div className="absolute inset-x-4 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-5/6 sm:w-3/4" />
          <div className="absolute inset-x-12 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/3 sm:w-2/4 blur-sm" />
          <div className="absolute inset-x-12 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/3 sm:w-2/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges - made responsive */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        {/* CTA Buttons with motion - made responsive with better spacing */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center w-full sm:space-x-6 space-y-6 sm:space-y-0 mt-4 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut",
            },
          }}
        >
          {/* Connect Button with hover animation */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <InteractiveHoverButton
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center space-x-2 bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              <span>Let&apos;s Connect</span>
            </InteractiveHoverButton>
          </motion.div>

          {/* Email with copy function and animation - improved for mobile */}
          <motion.div
            className="flex items-center text-gray-300 cursor-pointer hover:text-white transition-colors relative group"
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Copy className="min-w-4 h-4 w-4 sm:h-5 sm:w-5" />
            <motion.span
              className="ml-2 italic text-xs sm:text-sm md:text-base truncate max-w-40 sm:max-w-full"
              animate={{
                opacity: isCopied ? 0 : 1,
                scale: isCopied ? 0.95 : 1,
                x: isCopied ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              dakshsingh.shanu@gmail.com
            </motion.span>
            <motion.span
              className="ml-2 absolute left-6 text-xs sm:text-sm md:text-base text-green-400"
              animate={{
                opacity: isCopied ? 1 : 0,
                scale: isCopied ? 1 : 0.95,
                x: isCopied ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              Copied!
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background animated gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70" />
      </motion.div>

      {/* Contact drawer component */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default HeroNew;
