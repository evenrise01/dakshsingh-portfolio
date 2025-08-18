"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";
import { ContainerTextFlip } from "./ui/container-text-flip";
import DarkVeil from "./ui/dark-veil";

const HeroNew = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000);
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
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black px-4 md:px-6">
      {/* Dark veil background, covers full hero */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto mt-10 md:mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 text-center mb-2 px-2 leading-tight tracking-wide"
          variants={textVariants}
        >
          Hi, I&apos;m Daksh!
        </motion.h3>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mt-4 mb-2 px-2 leading-tight"
          variants={textVariants}
        >
          Meet your next{" "}
          <span className="block sm:inline">
            <ContainerTextFlip
              words={words}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center"
            /><br/>
            developer.
          </span>
        </motion.h1>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center w-full sm:space-x-6 space-y-6 sm:space-y-0 mt-6 md:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 1.2, ease: "easeOut" },
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <InteractiveHoverButton
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              <span>Let&apos;s Connect</span>
            </InteractiveHoverButton>
          </motion.div>

          {/* Email Copy */}
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

      {/* Contact drawer */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default HeroNew;
