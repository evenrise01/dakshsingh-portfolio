"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import Earth from "./globe";
import { ChevronRight, Link, LucideProps } from "lucide-react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { slugs, testimonials } from "@/data";
import { IconCloud } from "../magicui/icon-cloud";
import { TestimonialsSection } from "../testimonials-with-marquee";
import { BorderBeam } from "../magicui/border-beam";
import { ConfettiButton } from "../magicui/confetti";
import { AnimatedBeamDemo } from "../magicui/animated-beam-demo";
import { ShineBorder } from "../magicui/shine-border";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  icon: Icon,
  iconProps,
  cta,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  icon?: React.ComponentType<LucideProps>;
  iconProps?: LucideProps;
  cta?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.shanu@gmail.com");
    setCopied(true);
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        className
      )}
      style={{
        background: "rgb(10,10,15)",
        backgroundColor:
          "linear-gradient(90deg, rgba(10,10,15,1) 0%, rgba(30,30,40,1) 50%, rgba(70,70,80,1) 100%)",
      }}
    >
      {/* Image & Background */}
      <div className={`${id === 6 && "flex justify-center"} h-full relative`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Special components for specific items */}
        {id === 1 && (
          <div className="inset-0 flex justify-center items-center">
            <AnimatedBeamDemo />
          </div>
        )}

        {/* Special heading for id === 2 */}
        {id === 2 && (
          <h3 className="absolute top-4 w-full px-4 text-center text-2xl leading-[100%] font-bold tracking-tighter text-balance select-none z-20 md:top-12">
            I'm very flexible with time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#edeffd] to-[#7b9cda] italic">
              zone communications
            </span>
          </h3>
        )}

        {/* Earth component for id === 2 */}
        {id === 2 && (
          <div className="flex items-center justify-center absolute w-full h-full">
            <div className="max-w-7xl w-full relative overflow-hidden h-[500px] px-4">
              <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-40" />
              <div className="absolute w-full h-full bottom-0 top-6 right-1 transform translate-y-8 scale-100">
                <Earth scale={1.1} dark={1} />
              </div>
            </div>
          </div>
        )}

        {/* Tech stack list */}
        {id === 3 && (
          <div className="inset-0 relative w-full h-full scale-125 top-8 right-4">
            <IconCloud images={images} />
          </div>
        )}

        {id === 4 && (
          <div className="flex flex-col items-center justify-center w-full h-full rounded-lg p-6 text-center">
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-pink-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              className="from-transparent via-cyan-500 to-transparent"
            />
            <AnimatedShinyText className="text-3xl font-bold text-gray-300 mb-6">
              Let's work together
              <br />
              on your next project!
            </AnimatedShinyText>
            <button
              className="items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90 flex w-full justify-center rounded-xl px-10 shadow-[inset_0_3px_10px_#ffffff3f]"
              // onClick={handleCopyEmail}
            >
              dakshsingh.shanu@gmail.com
            </button>
          </div>
        )}

        {id === 5 && (
          <div className="absolute inset-0 flex justify-center items-center w-full h-full overflow-hidden hover:cursor-pointer hover:[&_.animate-marquee]:pause">
            <TestimonialsSection testimonials={testimonials} className="py-0" />
          </div>
        )}

        {/* Content container fixed to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 flex flex-col">
          <div className="flex flex-col space-y-1 transform transition-all duration-300 group-hover:-translate-y-3">
            {/* Icon positioned above title with scaling that keeps position */}
            {Icon && (
              <div className="mb-1 flex items-center">
                <div className="transform transition-transform duration-300 group-hover:scale-75 origin-left">
                  <Icon
                    {...iconProps}
                    className={cn("", iconProps?.className)}
                  />
                </div>
              </div>
            )}

            {/* Text content */}
            <div className={cn(titleClassName, "transition-all duration-300")}>
              <p className="max-w-lg text-neutral-400">{title}</p>
              {description && (
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {description}
                </h3>
              )}
            </div>
          </div>

          {/* CTA button that appears on hover */}
          {cta && (
            <div className="opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 mt-1">
              <button className="px-2 -ml-2 rounded-md text-neutral-300 text-sm font-sm bg-opacity-20 bg-transparent backdrop-blur-sm flex items-center hover:bg-opacity-80 transition-all duration-200">
                {cta}
                <span className="inline-block">
                  <ChevronRight />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
