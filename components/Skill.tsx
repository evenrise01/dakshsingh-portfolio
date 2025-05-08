import React from "react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { outfit } from "@/app/fonts";
import { skillTechnologies } from "@/data";

//TODO: Add motion and animate
const SkillPage = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-0 md:px-10"
    >
      <div className="relative mx-auto size-fit overflow-hidden">
        {/* <div className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40">
          <img
            draggable="false"
            alt="skills cover rotating image"
            className="z-10 w-full opacity-65 select-none"
            src="/gpt.webp"
          />
        </div> */}
        <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
          <p
            className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}
          >
            I CONSTANTLY TRY TO IMPROVE
          </p>
          <span className={outfit.className}>My </span>{" "}
          <AnimatedGradientText>Tech Stack</AnimatedGradientText>
        </h2>
      </div>
      {/* <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black"></div> */}
      <div className="mx-auto my-16 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
      {skillTechnologies.map((tech, index) => (
            <div 
              key={index}
              className={`${outfit.className} group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base`} 
            //   style={{
            //     opacity: isActive ? 1 : 0,
            //     transform: isActive ? "none" : "translateY(10px)",
            //     transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
            //     transitionDelay: `${baseDelay + 0.7 + (index * 0.05)}s`
            //   }}
            >
              <img height="18" width="18" alt={tech.name} src={tech.icon} />
              <span className="relative">
            <span className="animate-gradient-x text-colorfull absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {tech.name}
            </span>
            <span className="transition-colors duration-300">{tech.name}</span>
          </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillPage;
