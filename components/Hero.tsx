"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";
import { Spotlight } from "./spotlight-new";
import { SingleSpotlight } from "./ui/single-spotlight";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Hero = () => {
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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  // Staggered text reveal animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  // Special animation for the "digital experiences" text
  const highlightTextVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black px-4 md:px-6">
      <motion.div 
        className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-10 md:mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Heading with motion */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-1 md:mb-2 px-2"
          variants={textVariants}
        >
          I help founders turn ideas
        </motion.h1>
        
        {/* Subheading with special typography and animation */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
            variants={textVariants}
          >
            into seamless{" "}
            <motion.span 
              className="tangerine-bold text-6xl lg:text-7xl bg-linear-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text tracking-wide text-transparent"
              variants={highlightTextVariants}
            >
              digital experiences
            </motion.span>
          </motion.h2>
        </div>
        
        {/* Introduction with motion */}
        <motion.div 
          className="text-center mb-10 md:mb-20"
          variants={textVariants}
        >
          <motion.h3 
            className="text-2xl md:text-4xl text-white font-normal"
            variants={textVariants}
          >
            Hello, I'm Daksh Singh
          </motion.h3>
          <motion.p 
            className="text-xl md:text-2xl text-white font-light italic mt-1"
            variants={textVariants}
          >
            your next <span className="font-bold">creative developer.</span>
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons with motion */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-6 sm:space-y-0 mt-4 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              delay: 1.2,
              ease: "easeOut" 
            }
          }}
        >
          {/* Connect Button with hover animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <InteractiveHoverButton 
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
            >
              <span>Let's Connect</span>
            </InteractiveHoverButton>
          </motion.div>
          
          {/* Email with copy function and animation */}
          <motion.div
            className="flex items-center text-gray-300 cursor-pointer hover:text-white transition-colors relative"
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Copy className="min-w-4" />
            <motion.span
              className="ml-2 italic text-sm sm:text-base truncate max-w-32 sm:max-w-full"
              animate={{
                opacity: isCopied ? 0 : 1,
                scale: isCopied ? 0.95 : 1,
                x: isCopied ? -10 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              dakshsingh.shanu@gmail.com
            </motion.span>
            <motion.span
              className="ml-2 absolute left-6 text-sm sm:text-base"
              animate={{
                opacity: isCopied ? 1 : 0,
                scale: isCopied ? 1 : 0.95,
                x: isCopied ? 0 : 10
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
        className="absolute inset-0 pointer-events-none opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30" />
      </motion.div>

      {/* Contact drawer component */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Hero;