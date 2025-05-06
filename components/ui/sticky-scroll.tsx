import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  // Setup scroll event listener to track active card
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollPos = ref.current.scrollTop;
      const containerHeight = ref.current.scrollHeight - ref.current.clientHeight;
      const scrollPercentage = scrollPos / containerHeight;
      
      // Calculate active section based on scroll position and total sections
      const sectionHeight = containerHeight / cardLength;
      const activeIndex = Math.min(
        Math.floor(scrollPos / sectionHeight),
        cardLength - 1
      );
      
      setActiveCard(activeIndex);
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cardLength]);

  return (
    <div
      ref={ref}
      className="h-full overflow-y-auto overflow-x-hidden rounded-md relative scrollbar-hide"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - sticky container for text content */}
          <div className="w-full lg:w-2/5 sticky top-0 h-screen flex flex-col justify-start p-6">
            <div className="mt-20">
              {content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0,
                    y: activeCard === index ? 0 : 20,
                    display: activeCard === index ? "block" : "none"
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mb-8">
                    {item.description}
                  </p>
                  
                  {/* Content now appears below text on the left side on large screens */}
                  <div className="hidden lg:block">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - scrollable content for mobile view */}
          <div className="w-full lg:hidden">
            {content.map((item, index) => (
              <div
                key={index}
                className="min-h-screen flex items-center justify-center py-20"
              >
                <div className={cn("w-full", contentClassName)}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};