import { outfit } from "@/app/fonts";
import React from "react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ChevronRight,  Github, Linkedin } from "lucide-react";
import Image from 'next/image'
const AboutPage = () => {
  return (
    // <div className="w-full overflow-hidden">

    // </div>
    <section id="about" className="relative overflow-hidden px-4 pt-20">
      {/* Full-width background wrapper that extends to the sides */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        {/* Background image container */}
        <div className="relative h-full w-full">
          {/* Background image that extends beyond the content area */}
          <Image
            src="/about-section-bg.jpg"
            alt="Rocky background"
            className="object-cover object-center pointer-events-none select-none"
            sizes="100vw"
            quality={90}
            priority
            fill
          />

          {/* Overlay gradients for better text contrast and visual appeal - enhanced for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent sm:via-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 sm:from-black/40 sm:to-black/40"></div>

          {/* Colored accents to match reference - adjusted for mobile visibility */}
          <div className="absolute inset-0 bg-amber-800/5 sm:bg-amber-800/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-purple-900/5 sm:bg-purple-900/10 mix-blend-color-burn"></div>

          {/* Side gradients to blend with page edges - responsive widths */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
          <p
            className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}
          >
            KNOW ABOUT ME
          </p>
          <span className={outfit.className}>
            Full-Stack Developer and <br />a little bit of{" "}
          </span>{" "}
          <AnimatedGradientText className="tangerine-bold text-7xl">Everything</AnimatedGradientText>
        </h2>
        {/* <div className="relative grid aspect-square w-56 place-content-center overflow-hidden rounded-full lg:mt-20 lg:w-[500px] lg:me-10">
            <img src="/vercel.svg" alt="Daksh Image" className="absolute inset-0  object-cover opacity-[var(--opacity)] blur-[calc(var(--blur)*10px)]"/>
        </div> */}
        <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-white/70 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg">
          <p>
            I&apos;m Daksh — a curious and driven individual who finds joy in both
            building with code and exploring the world. Whether it&apos;s crafting
            intuitive web applications, leveling up at the gym, or diving into a
            new game, I love challenges that spark growth.
          </p>
          <p>
            My passions span coding, traveling, fitness, and gaming — each one
            shaping how I think, create, and connect with people. I thrive in
            environments that reward learning and push boundaries.
          </p>
          <p>
            Every day is a chance to grow, and I&apos;m here to make it count — one
            line of code, one rep, one game, or one adventure at a time.
          </p>
          <div className="flex gap-3 w-fit mx-auto -mt-4 lg:mx-0">
            <button data-state="closed" data-slot="tooltip-trigger">
              <a
                href="https://www.linkedin.com/in/daksh-singh-25646918a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-neutral-100"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
            </button>
            <button data-state="closed" data-slot="tooltip-trigger">
              <a
                href="https://github.com/evenrise01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-neutral-100"
              >
                <span className="sr-only">GitHub</span>
                <Github />
              </a>
            </button>
            {/* <button data-state="closed" data-slot="tooltip-trigger">
              <a
                href="https://x.com/daksh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-neutral-100"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
            </button> */}
          </div>
        </div>
        <a className="group flex items-center justify-center gap-2 text-neutral-300 group-hover:text-neutral-100 mt-10 lg:justify-start z-10" href="/about">
            More about me <ChevronRight/>
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
