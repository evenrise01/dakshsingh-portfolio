"use client";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ChevronRight, Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";
import { WavyBackground } from "./ui/wavy-background";
import MagicButton from "./ui/magic-button";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000); // Reset after 5 seconds
  };
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden bg-black px-4">
      {/* Main Container with centered content */}
      <WavyBackground>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-20">
        {/* Main Heading */}
        <h1 className="text-6xl text-white font-normal text-center mb-2">
          I help founders turn ideas
        </h1>
        
        {/* Subheading with special typography */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white italic font-light tangerine-regular">
            into seamless digital experiences
          </h2>
        </div>
        
        {/* Introduction */}
        <div className="text-center mb-20">
          <h3 className="text-2xl text-white font-normal">
            Hello, I'm Daksh Singh
          </h3>
          <p className="text-xl text-white font-light italic">
            your next <span className="font-bold">creative developer.</span>
          </p>

        </div>
        
        {/* CTA Buttons */}
        <div className="flex items-center space-x-6 mt-8">
          {/* Connect Button */}
          <InteractiveHoverButton 
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Let's Connect</span>
          </InteractiveHoverButton>
          
          {/* Email with copy function */}
          <div
              className="flex items-center text-gray-300 cursor-pointer hover:text-white transition-colors"
              onClick={handleCopy}
            >
              <Copy />
              <span
                className={`ml-2 italic transition-all duration-300 ${
                  isCopied ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                dakshsingh.shanu@gmail.com
              </span>
              <span
                className={`ml-2 absolute transition-all duration-300 ${
                  isCopied ? "opacity-100 scale-100 ml-10" : "opacity-0 scale-95"
                }`}
              >
                Copied to clipboard!
              </span>
            </div>
        </div>
      </div>
      
      {/* Contact drawer component */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
          </WavyBackground>
    </div>

  );
};

export default Hero;