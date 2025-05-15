"use client";
import { MapPin } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  Variants
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  time: string;
  companyName: string;
  companyLink: string;
  companyLogo: string;
  location: string;
  jobTitle: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const entryRef = useRef(null);
  const isInView = useInView(entryRef, { once: true, amount: 0.2 });
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const textContentVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      className="w-full font-sans px-4 md:px-8"
      ref={containerRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {

          return (
          <motion.div
            key={index}
            ref={entryRef}
            variants={itemVariants}
            className="flex justify-start pt-12 md:pt-20 md:gap-8"
          >
            {/* Left side - Company details (sticky on desktop) */}
            <motion.div 
              className="sticky hidden md:flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full"
              variants={textContentVariants}
            >
              <motion.div 
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.div 
                  className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                />
              </motion.div>
              <div className="md:pl-20">
                <motion.div 
                  className="mt-2 flex flex-col items-start gap-y-2 text-sm"
                  variants={textContentVariants}
                >
                  <motion.span 
                    className="text-xs text-muted-foreground font-medium tracking-wide uppercase"
                    variants={textContentVariants}
                  >
                    {item.time}
                  </motion.span>
                  <motion.p 
                    className="text-lg font-semibold text-black dark:text-white/90"
                    variants={textContentVariants}
                  >
                    {item.jobTitle}
                  </motion.p>
                  <motion.a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    variants={textContentVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={item.companyLogo}
                      alt={`${item.companyName} Logo`}
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                    <span>{item.companyName}</span>
                  </motion.a>
                  <motion.div 
                    className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm"
                    variants={textContentVariants}
                  >
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content (mobile shows company details here) */}
            <motion.div 
              className="relative pr-4 pl-20 md:pl-4 w-full"
              variants={textContentVariants}
            >
              {/* Mobile-only company details */}
              <motion.div 
                className="md:hidden mb-4 text-2xl block"
                variants={textContentVariants}
              >
                <motion.div 
                  className="mt-2 flex flex-col items-start gap-y-2 text-sm font-light"
                  variants={textContentVariants}
                >
                  <motion.span 
                    className="text-xs text-muted-foreground font-medium tracking-wide uppercase"
                    variants={textContentVariants}
                  >
                    {item.time}
                  </motion.span>
                  <motion.p 
                    className="text-lg font-semibold text-black dark:text-white/90"
                    variants={textContentVariants}
                  >
                    {item.jobTitle}
                  </motion.p>
                  <motion.a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    variants={textContentVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={item.companyLogo}
                      alt={`${item.companyName} Logo`}
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                    <span>{item.companyName}</span>
                  </motion.a>
                  <motion.div 
                    className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm"
                    variants={textContentVariants}
                  >
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="prose prose-sm dark:prose-invert max-w-none"
                variants={textContentVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {item.content}
              </motion.div>
            </motion.div>
          </motion.div>
        )})}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-pink-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};