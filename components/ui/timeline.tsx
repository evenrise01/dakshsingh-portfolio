"use client";
import { MapPin } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
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
  console.log("Container ref", containerRef)

  useEffect(() => {
    if (ref.current) {
      console.log("Current ref", ref.current)
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
    <div
      className="w-full font-sans px-4 md:px-8"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-20 md:gap-8"
          >
            {/* Left side - Company details (sticky on desktop) */}
            <div className="sticky hidden md:flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <div className="md:pl-20">
                <div className="mt-2 flex flex-col items-start gap-y-2 text-sm">
                  <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                    {item.time}
                  </span>
                  <p className="text-lg font-semibold text-black dark:text-white/90">
                    {item.jobTitle}
                  </p>
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    <img
                      src={item.companyLogo}
                      alt={`${item.companyName} Logo`}
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                    <span>{item.companyName}</span>
                  </a>
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content (mobile shows company details here) */}
            <div className="relative pr-4 pl-20 md:pl-4 w-full">
              {/* Mobile-only company details */}
              <div className="md:hidden mb-4 text-2xl block">
                <div className="mt-2 flex flex-col items-start gap-y-2 text-sm font-light">
                  <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                    {item.time}
                  </span>
                  <p className="text-lg font-semibold text-black dark:text-white/90">
                    {item.jobTitle}
                  </p>
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    <img
                      src={item.companyLogo}
                      alt={`${item.companyName} Logo`}
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                    <span>{item.companyName}</span>
                  </a>
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {item.content}
              </div>
            </div>
          </div>
        ))}

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
    </div>
  );
};
