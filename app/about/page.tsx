"use client";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Timeline } from "@/components/ui/timeline";
import { Github, Linkedin} from "lucide-react";
import React from "react";
import GitHubCalendar from "./github-calendar";
import Contact from "@/components/Contact";
import { Footer } from "@/components/footer";
import Image from "next/image";
import StatBlock from "@/components/ui/stat-block";
import { motion } from "framer-motion";

const AboutPage = () => {

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
            Github is a platform for developers to collaborate and contribute to
            open source projects.
          </p>
          <div className="space-y-3">
            <ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
              <li>
                Engaged with developer communities, collaborating on innovative
                solutions and best practices.
              </li>
              <li>
                Contributed to open-source projects with 15,000+ Github stars,
                improving code quality, feature implementations, and
                documentation.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience-1.jpg"
              alt="Abstract image 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience-2.jpg"
              alt="Abstract image 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">
              NextJS
            </span>
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">
              TypeScript
            </span>
            <span className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300">
              TailwindCSS
            </span>
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
              {[
                "Led 5–10 member cross-functional teams at Wysa to deliver 5+ high-impact projects, aligning product outcomes with company goals to streamline internal operations and enhance user experience.",
                "Optimized 4+ key workflows, reducing stakeholder complaints by 90% and directly contributing to the successful renewal of a major enterprise contract.",
                "Practiced user-first product thinking by identifying friction points through behavioral analytics and qualitative feedback, unlocking actionable solutions for design and engineering teams.",
                "Prioritized stakeholder communication and maintained open, structured channels, ensuring alignment across leadership, product, and delivery functions.",
                "Drove data-informed decisions using user analytics and iterative feedback loops, resulting in meaningful feature enhancements and increased user satisfaction.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatBlock
              number={5}
              suffix="+"
              title="Sprint Cycles Managed"
              subtitle="Utilized Notion to manage specs, documents, and team collaboration at scale."
            />

            <StatBlock
              number={1}
              title="Major Enterprise Contract Renewed"
              subtitle="Directly contributed to client retention through improved workflows, continous development and delivery outcomes."
            />

            <StatBlock
              suffix="%"
              number={90}
              title="Reduction in Stakeholder Complaints"
              subtitle="Resolved key friction points in delivery and communication, leading to stronger cross-functional trust."
            />
            <StatBlock
              suffix="+"
              number={4}
              title="Stakeholder Groups Aligned Continously"
              subtitle="Ensured clear and open communication between leadership, product, analytics, and engineering."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Notion",
              "Figma",
              "Miro",
              "Mentorship & Onboarding",
              "Cross-Functional Leadership",
              "Workflow Optimization",
              "Product Strategy",
              "Agile Methodology",
              "Friction Point Analysis",
              "Feature Enhancement",
              "Iterative Development",
              "Stakeholder Management",
            ].map((skill, index) => (
              <span
                key={index}
                className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300"
              >
                {skill}
              </span>
            ))}
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
              {[
                "Scoped and led content-side initiatives across multiple product and feature launches, managing updates to chatbot conversation flows (JSONs) to ensure alignment with user goals and mental health frameworks.",
                "Collaborated closely with product managers, designers, and engineers to integrate content updates into the development cycle, accelerating go-to-market timelines and improving feature usability.",
                "Oversaw delivery of high-quality chatbot content across 10+ projects by coordinating tasks, reviewing changes, and ensuring adherence to tone, safety, and conversational best practices.",
                "Mentored 5+ new team members on conversation design principles, QA processes, and tooling, enabling faster ramp-up and consistency across deliverables.",
                "Worked cross-functionally to adapt existing content to new use cases, ensuring coherence, accuracy, and therapeutic integrity across evolving product experiences.",
                "Maintained structured documentation in Notion to streamline project tracking, feedback cycles, and onboarding for future content contributors.",
                "Improved 50,000+ AI conversations by identifying and resolving edge cases, ensuring more empathetic and context-aware responses across user journeys.",
                "Boosted model aptness by 20%+ through continuous evaluation, tagging 25+ models for accuracy and performance improvements.",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatBlock
              number={20}
              suffix="+"
              title="Increase in Model Aptness"
              subtitle="Boosted response quality through continuous evaluation and tagging of 25+ AI models."
            />

            <StatBlock
              suffix="+"
              number={5}
              title="Team Members Mentored"
              subtitle="Enabled faster onboarding and consistent delivery by training new hires on conversation design and QA."
            />

            <StatBlock
              suffix="+"
              number={50000}
              title="AI Conversations Improved"
              subtitle="Oversaw high-quality delivery across multiple launches, ensuring adherence to tone, safety, and therapeutic standards."
            />
            <StatBlock
              number={1}
              title="Central Knowledge Hub Created"
              subtitle="Maintained structured Notion documentation for project tracking, feedback loops, and contributor onboarding."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Conversation Design",
              "Content QA",
              "AI/ML Models",
              "Mentorship & Onboarding",
              "Cross-Functional Collaboration",
              "Knowledge Management",
              "User-Centric Design",
              "Empathetic UX",
              "Notion",
            ].map((skill, index) => (
              <span
                key={index}
                className="rounded-md bg-neutral-800 px-3 py-1 font-medium text-xs text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const cardData = [
    {
      src: "/about/about-code.jpg",
      title: "I Code",
      category: "Passion",
      content: (
        <div className="prose prose-lg dark:prose-invert">
          <p>
            I specialize in modern web frameworks like React, Next.js, and
            Node.js. My approach to coding combines technical excellence with
            creative problem-solving. I&apos;m constantly exploring new technologies
            and methodologies to enhance my development toolkit.
          </p>
          <p>
            Clean code is more than a practice—it&apos;s a philosophy. I believe in
            writing maintainable, efficient, and well-documented code that
            stands the test of time.
          </p>
        </div>
      ),
    },
    {
      src: "/about/about-travelling.jpg",
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
            Whether it&apos;s exploring bustling cities or serene natural landscapes,
            I find inspiration in the diversity of our world.
          </p>
        </div>
      ),
    },
    {
      src: "/about/about-gym.jpg",
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
    <main className="min-h-screen bg-black">
      {/* Hero banner with full-bleed background - Similar to bucket-list page */}
      <div className="relative">
        {/* Background container with aspect ratio */}
        <div className="h-[70vh] min-h-[500px] max-h-[800px] w-full relative overflow-hidden">
          {/* Background image */}
          <Image
            src="/about/developer-bg.jpg"
            alt="Developer background"
            className="object-cover object-center pointer-events-none select-none"
            priority
            fill
          />

          {/* Overlay gradients for better text contrast and visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

          {/* Colored accents for visual interest */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>

          {/* Content container */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="relative z-10 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.p
                className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                MORE ABOUT ME
              </motion.p>
              <motion.span
                className="text-white md:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Hi there! I&apos;m
                <br />
                <motion.span
                  className="tangerine-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <AnimatedGradientText
                    speed={2}
                    colorFrom="#4ade80"
                    colorTo="#06b6d4"
                  >
                    Daksh
                  </AnimatedGradientText>
                </motion.span>
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Bottom fade to content area */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 -mt-16 z-10 mb-12">
        {/* Modified layout with carousel on the right */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row mb-12">
          {/* About content - left side */}

          <motion.div
            className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-base font-light tracking-wider text-white/70 lg:mx-0 lg:max-w-[550px] lg:text-lg text-center md:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I&apos;m Daksh, a proactive full-stack developer passionate about
              creating dynamic web experiences. From frontend to backend, I
              thrive on solving complex problems with clean, efficient code. My
              expertise spans React, Next.js, and Product Management, and I&apos;m
              always eager to learn more.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              When I&apos;m not immersed in work, I&apos;m exploring new ideas and staying
              curious. Life&apos;s about balance, and I love embracing every part of
              it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              I believe in waking up each day eager to make a difference!
            </motion.p>
            <motion.div
              className="flex gap-3 w-fit mx-auto -mt-4 lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                data-state="closed"
                data-slot="tooltip-trigger"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <a
                  href="https://www.linkedin.com/in/daksh-singh-25646918a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin />
                </a>
              </motion.button>
              <motion.button
                data-state="closed"
                data-slot="tooltip-trigger"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <a
                  href="https://github.com/evenrise01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  <span className="sr-only">GitHub</span>
                  <Github />
                </a>
              </motion.button>
              {/* <motion.button
                data-state="closed"
                data-slot="tooltip-trigger"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <a
                  href="https://x.com/daksh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a>
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Carousel - right side */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <Carousel items={carouselItems} />
          </div>
        </div>

        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-24 md:text-6xl text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About
            </motion.p>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              The Journey So Far <br />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <AnimatedGradientText
                  speed={2}
                  colorFrom="#4ade80"
                  colorTo="#06b6d4"
                  className="italic tangerine-bold pr-3"
                >
                  {" "}
                  And The Miles to go
                </AnimatedGradientText>
              </motion.div>
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Timeline data={data} />
          </motion.div>
        </motion.section>

        {/* Github Contributions */}
        <motion.div
          className="my-20 flex items-center justify-center gap-10 w-full opacity-90 flex-col lg:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-0 md:mb-0 lg:text-left lg:text-5xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Github <br />
              Contributions
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GitHubCalendar />
          </motion.div>
        </motion.div>

        {/* <div className="my-24 flex flex-col items-center justify-center w-full">
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
                className="tangerine-regular px-2"
              >
                {" "}
                Life to Me
              </AnimatedGradientText>
            </span>
          </h2>
        </div> */}
      </div>
      <Contact />
      <Footer copyright="Copyright © 2025 Daksh Singh. All rights reserved." />
    </main>
  );
};

export default AboutPage;
