"use client";
import { useState } from "react";
import { Sparkles } from "./ui/sparkles";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Copy } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000); // Reset after 5 seconds
  };
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-black">
      <div className="relative h-screen w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#5F4B8B,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-[85%] after:aspect-[1/0.6] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
        {/* Add the white glow above the curvature */}
        <div className="absolute -left-1/2 top-[80%] aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          size={1.7}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Main Heading */}
          <div className="mb-8 text-center">
            <h1 className="mb-1 text-5xl  text-white md:text-6xl">
              I help founders turn ideas
            </h1>
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white md:text-6xl tangerine-regular">
                into seamless
              </h1>
              <h1 className="ml-4 text-5xl font-light italic text-white md:text-6xl tangerine-regular">
                digital experiences
              </h1>
            </div>
          </div>
          {/* Introduction centered with different lighting */}
          <div className="mb-12 flex items-center justify-center">
            <h2 className="text-center text-xl text-gray-300">
              Hello, I'm Daksh Singh <br />
              <span className="font-light italic">
                your next creative developer.
              </span>
            </h2>
          </div>

          {/* CTA Buttons */}

          <div className="flex items-center space-x-4">
            <InteractiveHoverButton className="" onClick={() => setIsDrawerOpen(true)}>
              Let&apos;s Connect
            </InteractiveHoverButton>
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
      </div>
      {/* Contact drawer component */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Hero;