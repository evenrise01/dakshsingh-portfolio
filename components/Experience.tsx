import React from 'react'
import { AnimatedGradientText } from './magicui/animated-gradient-text'
import { Timeline } from './ui/timeline'

const Experience = () => {
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

  return (
    <section id="experience" className='py-40'>
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
  )
}

export default Experience
