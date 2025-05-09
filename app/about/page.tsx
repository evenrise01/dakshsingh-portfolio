"use client";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { ScrollAndSwapText } from "@/components/ui/scroll-and-swap-text";
import { Timeline } from "@/components/ui/timeline";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import React, { useRef } from "react";
import GitHubCalendar from "./github-calendar";
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import { Footer } from "@/components/footer";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //TODO: FIll the data later
  const data = [
    {
      jobTitle: "Open Source Github Contributor",
      companyName: "Github",
      companyLogo: "/github_dark.svg",
      companyLink: "https://www.wysa.com/",
      location: "India - Remote",
      time: "Dec 2024 - PRESENT",
      content: (
        <div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
          <p>
          Github is a platform for developers to collaborate and contribute to open source projects.
          </p>
          <div className="space-y-3">
            <ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
              <li>
              Engaged with developer communities, collaborating on innovative solutions and best practices.
              </li>
              <li>
              Contributed to open-source projects with 15,000+ Github stars, improving code quality, feature implementations, and documentation.
              </li>
            </ul>
          </div>
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
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">NextJS</span>
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">TypeScript</span>
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">TailwindCSS</span>
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">NextJS</span>
          </div>
        </div>
      ),
    },
    {
      jobTitle: "Product/Project Manager",
      companyName: "Wysa",
      companyLogo: "/wysa-logo.png",
      companyLink: "https://www.wysa.com/",
      location: "Bengaluru, India - Remote",
      time: "2023 - 2024",
      content: (
        <div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
          <p>
            Wysa is an AI-powered mental wellness platform and app that offers
            early intervention for stress, anxiety, and low mood through an AI
            chatbot, self-help tools, and messaging-based support from human
            coaches. It provides a confidential and accessible way to manage
            mental health, available 24/7.
          </p>
          <div className="space-y-3">
            <ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
              <li>
                Led 5–10 member cross-functional teams at Wysa to deliver 5+
                high-impact projects, aligning product outcomes with company
                goals to streamline internal operations and enhance user
                experience.
              </li>
              <li>
                Optimized 4+ key workflows, reducing stakeholder complaints by
                90% and directly contributing to the successful renewal of a
                major enterprise contract.
              </li>
              <li>
                Practiced user-first product thinking by identifying friction
                points through behavioral analytics and qualitative feedback,
                unlocking actionable solutions for design and engineering teams.
              </li>
              <li>
                Prioritized stakeholder communication and maintained open,
                structured channels, ensuring alignment across leadership,
                product, and delivery functions.
              </li>
              <li>
                Drove data-informed decisions using user analytics and iterative
                feedback loops, resulting in meaningful feature enhancements and
                increased user satisfaction.
              </li>
              <li>
                Employed Agile methodologies while leveraging Notion and Figma
                to manage sprints, document product specs, and facilitate design
                collaboration at scale.
              </li>
            </ul>
          </div>
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
      jobTitle: "AI Training Intern",
      companyName: "Wysa",
      companyLogo: "/wysa-logo.png",
      companyLink: "https://www.wysa.com/",
      location: "Bengaluru, India - Remote",
      time: "2023 - 2024",
      content: (
        <div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
          <p>
            Wysa is an AI-powered mental wellness platform and app that offers
            early intervention for stress, anxiety, and low mood through an AI
            chatbot, self-help tools, and messaging-based support from human
            coaches. It provides a confidential and accessible way to manage
            mental health, available 24/7.
          </p>
          <div className="space-y-3">
            <ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
              <li>
                Scoped and led content-side initiatives across multiple product
                and feature launches, managing updates to chatbot conversation
                flows (JSONs) to ensure alignment with user goals and mental
                health frameworks.
              </li>
              <li>
                Collaborated closely with product managers, designers, and
                engineers to integrate content updates into the development
                cycle, accelerating go-to-market timelines and improving feature
                usability.
              </li>
              <li>
                Oversaw delivery of high-quality chatbot content across 10+
                projects by coordinating tasks, reviewing changes, and ensuring
                adherence to tone, safety, and conversational best practices.
              </li>
              <li>
                Mentored 5+ new team members on conversation design principles,
                QA processes, and tooling, enabling faster ramp-up and
                consistency across deliverables.
              </li>
              <li>
                Worked cross-functionally to adapt existing content to new use
                cases, ensuring coherence, accuracy, and therapeutic integrity
                across evolving product experiences.
              </li>
              <li>
                Maintained structured documentation in Notion to streamline
                project tracking, feedback cycles, and onboarding for future
                content contributors.
              </li>
              <li>
                Improved 50,000+ AI conversations by identifying and resolving
                edge cases, ensuring more empathetic and context-aware responses
                across user journeys.
              </li>
              <li>
                Boosted model aptness by 20%+ through continuous evaluation,
                tagging 25+ models for accuracy and performance improvements.
              </li>
            </ul>
          </div>
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
        <div className="flex items-center justify-center">
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
        </div>

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

          <div className="min-h-screen place-content-center place-items-center">
            <CardCurtainReveal className="h-[560px] w-96 border border-zinc-100 bg-zinc-950 text-zinc-50 shadow">
              <CardCurtainRevealBody className="">
                <CardCurtainRevealTitle className="text-3xl font-medium tracking-tight">
                  Behind <br />
                  the Curtain
                </CardCurtainRevealTitle>
                <CardCurtainRevealDescription className="my-4 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium voluptate, eum quia temporibus fugiat rerum
                    nobis modi dolor, delectus laboriosam, quae adipisci
                    reprehenderit officiis quidem iure ducimus incidunt officia.
                    Magni, eligendi repellendus. Fugiat, natus aut?
                  </p>
                </CardCurtainRevealDescription>
                <Button
                  variant={"secondary"}
                  size={"icon"}
                  className="aspect-square rounded-full"
                >
                  <ArrowUpRight />
                </Button>

                <CardCurtain className=" bg-zinc-50" />
              </CardCurtainRevealBody>

              <CardCurtainRevealFooter className="mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width="100%"
                  height="100%"
                  alt="Tokyo street"
                  className=""
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </CardCurtainRevealFooter>
            </CardCurtainReveal>
          </div>

          {/* <div className="w-full min-h-screen flex items-center justify-center p-8 bg-background">
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
          </div> */}
        </div>
      </div>
      <Contact/>
      <Footer
            copyright="Copyright © 2025 Daksh Singh. All rights reserved."
          />
    </main>
  );
};

export default AboutPage;
