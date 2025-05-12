"use client";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000); // Reset after 5 seconds
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black px-4 md:px-6">
      <WavyBackground>
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-10 md:mt-20">
          {/* Main Heading - responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal text-center mb-1 md:mb-2 px-2">
            I help founders turn ideas
          </h1>
          
          {/* Subheading with special typography - responsive text sizes */}
          <div className="text-center mb-8 md:mb-16 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white italic font-light tangerine-regular">
              into seamless digital experiences
            </h2>
          </div>
          
          {/* Introduction - responsive text sizes */}
          <div className="text-center mb-10 md:mb-20">
            <h3 className="text-xl md:text-2xl text-white font-normal">
              Hello, I'm Daksh Singh
            </h3>
            <p className="text-lg md:text-xl text-white font-light italic mt-1">
              your next <span className="font-bold">creative developer.</span>
            </p>
          </div>
          
          {/* CTA Buttons - stack on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-6 sm:space-y-0 mt-4 md:mt-8">
            {/* Connect Button */}
            <InteractiveHoverButton 
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center space-x-2 bg-black text-white px-5 sm:px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Let's Connect</span>
            </InteractiveHoverButton>
            
            {/* Email with copy function - more compact on mobile */}
            <div
              className="flex items-center text-gray-300 cursor-pointer hover:text-white transition-colors relative"
              onClick={handleCopy}
            >
              <Copy className="min-w-4" />
              <span
                className={`ml-2 italic transition-all duration-300 text-sm sm:text-base truncate max-w-32 sm:max-w-full ${
                  isCopied ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                dakshsingh.shanu@gmail.com
              </span>
              <span
                className={`ml-2 absolute left-6 transition-all duration-300 text-sm sm:text-base ${
                  isCopied ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                Copied!
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