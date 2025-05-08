import { outfit } from "@/app/fonts";
import React from "react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

const AboutPage = () => {
  return (
    // <div className="w-full overflow-hidden">
      
    // </div>
    <section id="about" className="relative overflow-hidden px-4">
        <div className="flex flex-col items-center justify-center">
        <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
          <p
            className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}
          >
            KNOW ABOUT ME
          </p>
          <span className={outfit.className}>Full-Stack Developer and <br/>a little bit of </span>{" "}
          <AnimatedGradientText>everything</AnimatedGradientText>
        </h2>
        </div>

    </section>
  );
};

export default AboutPage;
