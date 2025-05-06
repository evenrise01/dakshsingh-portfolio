"use client";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { ScrollAndSwapText } from "@/components/ui/scroll-and-swap-text";
import { Timeline } from "@/components/ui/timeline";
import { Github, Linkedin, Twitter } from "lucide-react";
import React, { useRef } from "react";
import GitHubCalendar from "./github-calendar";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //TODO: FIll the data later
  const data = [
    {
      jobTitle: "Frontend Engineer",
      companyName: "Vercel",
      companyLogo: "/vercel.svg",
      companyLink: "vercel.com",
      location: "London, UK - Remote",
      time: "2024 - Present",
      companySummary:
        "Roboto Studio is a cutting-edge design agency specializing in building innovative web applications with a focus on user experience and performance.",
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
  // TODO: Card data for the carousel
  const cardData = [
    {
      src: "/coding.jpg",
      title: "I Code",
      category: "Passion",
      content: (
        <div className="prose prose-lg dark:prose-invert">
          <p>
            I specialize in modern web frameworks like React, Next.js, and
            Node.js. My approach to coding combines technical excellence with
            creative problem-solving. I'm constantly exploring new technologies
            and methodologies to enhance my development toolkit.
          </p>
          <p>
            Clean code is more than a practice—it's a philosophy. I believe in
            writing maintainable, efficient, and well-documented code that
            stands the test of time.
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
            Traveling broadens my perspective and fuels my creativity. Each new
            place offers unique insights and experiences that I bring back to my
            work and life.
          </p>
          <p>
            Whether it's exploring bustling cities or serene natural landscapes,
            I find inspiration in the diversity of our world.
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
            Physical fitness is an essential part of my holistic approach to
            life. Regular strength training helps me maintain mental clarity and
            discipline that translates to all aspects of my work.
          </p>
          <p>
            The gym is where I practice persistence, patience, and progressive
            improvement—principles that apply equally well to coding and
            personal growth.
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
      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        <h2 className="relative z-2 mb-10 text-4xl font-medium tracking-tight sm:text-5xl md:mb-12 md:text-6xl text-center">
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
          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-base font-light tracking-wider text-white/70 lg:mx-0 lg:max-w-[550px] lg:text-lg text-center md:text-start">
            <p>
              I'm Daksh, a proactive full-stack developer passionate about
              creating dynamic web experiences. From frontend to backend, I
              thrive on solving complex problems with clean, efficient code. My
              expertise spans React, Next.js, and Node.js, and I'm always eager
              to learn more.
            </p>
            <p>
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </p>
            <p>I believe in waking up each day eager to make a difference!</p>
            <div className="flex gap-3 w-fit mx-auto -mt-4 lg:mx-0">
              <button data-state="closed" data-slot="tooltip-trigger">
                <a
                  href="https://linkedin.com/in/daksh"
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
                  href="https://github.com/daksh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  <span className="sr-only">GitHub</span>
                  <Github />
                </a>
              </button>
              <button data-state="closed" data-slot="tooltip-trigger">
                <a
                  href="https://x.com/daksh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
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
            <span>
              Experience That <br />
              Brings
              <AnimatedGradientText
                speed={2}
                colorFrom="#4ade80"
                colorTo="#06b6d4"
                className="italic"
              >
                {" "}
                Ideas to Life
              </AnimatedGradientText>
            </span>
          </h2>
          <Timeline data={data} />
        </section>

        {/* Github Contributions */}
        <div className="my-20 flex items-center justify-center gap-10 w-full opacity-90 flex-col lg:flex-row">
          <h2 className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-0 md:mb-0 lg:text-left lg:text-5xl">
            <span>Github</span>
            <AnimatedGradientText className="italic block">
              Contributions
            </AnimatedGradientText>
          </h2>
          <GitHubCalendar />
        </div>

        <div className="my-24 flex flex-col items-center justify-center w-full">
          <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-24 md:text-6xl text-center">
            <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
              The Philosophy
            </p>
            <span>
              Philosophy That Brings
              <br />
              <AnimatedGradientText
                speed={2}
                colorFrom="#4ade80"
                colorTo="#06b6d4"
                className="italic"
              >
                {" "}
                Life to Me
              </AnimatedGradientText>
            </span>
          </h2>
          <div className="w-full min-h-screen flex items-center justify-center p-8 bg-background">
            <div className="w-4/6 h-[600px] rounded-3xl border relative">
              <div
                ref={containerRef}
                className="w-full h-full rounded-lg items-center justify-center font-overusedGrotesk p-2 overflow-auto overscroll-auto text-[#E794DA] relative"
              >
                <div className="h-[100%] flex justify-center items-center uppercase relative">
                  <p className="absolute bottom-4 left-4 font-bold text-xl">
                    SCROLL SLOWLY
                  </p>
                  <div className="flex md:text-4xl sm:text-3xl text-lg lg:text-5xl cl:text-6xl justify-center items-center flex-col">
                    <ScrollAndSwapText
                      label="Every day is a journey,"
                      offset={["0 0.15", "0 0.35"]}
                      className="font-bold"
                      containerRef={containerRef}
                    />
                    <ScrollAndSwapText
                      label="and the journey"
                      offset={["0 0.25", "0 0.45"]}
                      className="font-bold"
                      containerRef={containerRef}
                    />
                    <ScrollAndSwapText
                      label="itself is home."
                      offset={["0 0.35", "0 0.55"]}
                      className="font-bold"
                      containerRef={containerRef}
                    />
                  </div>
                </div>
                <div className="h-[30%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
