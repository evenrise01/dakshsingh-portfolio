import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { GradientText } from "@/components/ui/gradient-text";
import { LampDemo } from "@/components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import React from "react";

const AboutPage = () => {
    const data = [
        {
          title: "2024",
          content: (
            <div>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/templates/startup-1.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/templates/startup-2.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/templates/startup-3.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/templates/startup-4.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Early 2023",
          content: (
            <div>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                I usually run out of copy, but when I see content this big, I try to
                integrate lorem ipsum.
              </p>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Lorem ipsum is for people who are too lazy to write copy. But we are
                not. Here are some more example of beautiful designs I built.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Changelog",
          content: (
            <div>
              <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Deployed 5 new components on Aceternity today
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Card grid component
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Random file upload lol
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </div>
            </div>
          ),
        },
      ];
  // Card data for the carousel
  const cardData = [
    {
      src: "/coding.jpg",
      title: "I Code",
      category: "Passion",
      content: (
        <div className="prose prose-lg dark:prose-invert">
          <p>
            I specialize in modern web frameworks like React, Next.js, and Node.js. My approach to coding combines technical excellence with creative problem-solving. I'm constantly exploring new technologies and methodologies to enhance my development toolkit.
          </p>
          <p>
            Clean code is more than a practice—it's a philosophy. I believe in writing maintainable, efficient, and well-documented code that stands the test of time.
          </p>
        </div>
      ),
    },
    {
      src: "/travel.jpg",
      title: "I Travel",
      category: "Adventure",
      content: (
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Traveling broadens my perspective and fuels my creativity. Each new place offers unique insights and experiences that I bring back to my work and life.
          </p>
          <p>
            Whether it's exploring bustling cities or serene natural landscapes, I find inspiration in the diversity of our world.
          </p>
        </div>
      ),
    },
    {
      src: "/fitness.jpg",
      title: "I Lift",
      category: "Lifestyle",
      content: (
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Physical fitness is an essential part of my holistic approach to life. Regular strength training helps me maintain mental clarity and discipline that translates to all aspects of my work.
          </p>
          <p>
            The gym is where I practice persistence, patience, and progressive improvement—principles that apply equally well to coding and personal growth.
          </p>
        </div>
      ),
    },
  ];

  // Create card components for the carousel
  const carouselItems = cardData.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ));

  return (
    <main>
      {/* <LampDemo/> */}
      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-24 md:text-6xl text-center">
          <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
            More About Me
          </p>
          <span>Hi there! I&apos;m</span>{" "}
          <AnimatedGradientText
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
            className="italic"
          >
            Daksh
          </AnimatedGradientText>
        </h2>
        
        {/* Modified layout with carousel on the right */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row mb-12">
          {/* About content - left side */}
          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-base font-light tracking-wider text-white/70 lg:mx-0 lg:max-w-[550px] lg:text-lg">
            <p>
              I'm Daksh, a proactive full-stack developer passionate about creating dynamic web experiences. 
              From frontend to backend, I thrive on solving complex problems with clean, efficient code. 
              My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </p>
            <p>
              When I'm not immersed in work, I'm exploring new ideas and staying curious. 
              Life's about balance, and I love embracing every part of it.
            </p>
            <p>
              I believe in waking up each day eager to make a difference!
            </p>
            <div className="flex gap-3 w-fit">
              <button data-state="closed" data-slot="tooltip-trigger">
                <a href="https://linkedin.com/in/daksh" target="_blank" rel="noopener noreferrer" className="text-neutral-300 transition-colors hover:text-neutral-100">
                  <span className="sr-only">LinkedIn</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </button>
              <button data-state="closed" data-slot="tooltip-trigger">
                <a href="https://github.com/daksh" target="_blank" rel="noopener noreferrer" className="text-neutral-300 transition-colors hover:text-neutral-100">
                  <span className="sr-only">GitHub</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </button>
              <button data-state="closed" data-slot="tooltip-trigger">
                <a href="https://x.com/daksh" target="_blank" rel="noopener noreferrer" className="text-neutral-300 transition-colors hover:text-neutral-100">
                  <span className="sr-only">Twitter</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
          
          {/* Carousel - right side */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <Carousel items={carouselItems} />
          </div>
        </div>
    
        <section id="experience">
        <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-24 md:text-6xl text-center">
          <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
            The Experience
          </p>
          <span>Experience That <br/>Brings<AnimatedGradientText
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
            className="italic"
          > Ideas to Life
          </AnimatedGradientText></span>
          
        </h2>
            <Timeline data={data}/>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;