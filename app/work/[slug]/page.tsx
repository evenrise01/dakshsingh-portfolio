import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowUpRightFromCircleIcon,
  ArrowUpRightFromSquare,
  Github,
  Info,
  Server,
  Code,
  Globe,
  Calendar,
  Zap,
  Layers,
} from "lucide-react";

// Define the project data interface
interface ProjectData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  backgroundUrl: string;
  date: string;
  technologies: string[];
  sections: {
    whatIs: string;
    needFor: string;
    features: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
    techStack: {
      category: string;
      items: string[];
      icon: React.ReactNode;
    }[];
  };
}

// Sample project data - in a real app, this would come from an API or CMS
const PROJECTS_DATA: Record<string, ProjectData> = {
  "hypermail": {
    id: "1",
    name: "Hypermail",
    slug: "hypermail",
    tagline: "A full-stack startup pitch platform built using cutting-edge Next.js 15 features, Sanity CMS, and a sleek UI/UX experience.",
    description: "Next Venture empowers entrepreneurs to showcase their startup ideas with speed, elegance, and full-stack power. Built to scale and pitch-ready.",
    githubUrl: "https://github.com/username/hypermail",
    liveUrl: "https://hypermail-demo.vercel.app",
    imageUrl: "/hypermail.png",
    backgroundUrl: "/hypermail.png",
    date: "3/1/2024",
    technologies: ["NextJS 15", "TailwindCSS", "React", "Framer Motion", "Shadcn UI"],
    sections: {
      whatIs: "A dynamic platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
      needFor: "Entrepreneurship is evolving rapidly, yet the tools for sharing and discovering startup ideas remain fragmented and often lack the polish needed to make a strong first impression. Hypermail fills this gap by providing a centralized, visually stunning platform where founders can showcase their visions and connect with potential collaborators or investors.",
      features: [
        {
          title: "Real-time collaboration",
          description: "Work together with team members on pitch decks and presentations simultaneously, with changes reflecting instantly across all devices.",
          icon: <Zap className="size-5 text-yellow-500" />
        },
        {
          title: "Interactive dashboards",
          description: "Visualize key metrics and user engagement through intuitive and customizable dashboard interfaces.",
          icon: <Layers className="size-5" />
        },
        {
          title: "Global discovery",
          description: "Connect with entrepreneurs and investors worldwide through our advanced matchmaking algorithm.",
          icon: <Globe className="size-5" />
        },
        {
          title: "Responsive design",
          description: "Experience flawless performance across all devices, from mobile to desktop, with adaptive layouts that showcase your content perfectly.",
          icon: <Code className="size-5 text-purple-500" />
        }
      ],
      techStack: [
        {
          category: "Frontend",
          items: ["Next.js 15", "React", "TailwindCSS", "Framer Motion"],
          icon: <Code className="size-5" />
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "MongoDB", "Sanity CMS"],
          icon: <Server className="size-5" />
        },
        {
          category: "DevOps",
          items: ["Vercel", "GitHub Actions", "Docker"],
          icon: <Layers className="size-5" />
        }
      ]
    }
  },
  "bucket-list": {
    id: "2",
    name: "Bucket List",
    slug: "bucket-list",
    tagline: "A collaborative platform for creating and sharing bucket lists with friends and family.",
    description: "Track your life goals and adventures with this beautiful, social bucket list application.",
    githubUrl: "https://github.com/username/bucket-list",
    liveUrl: "https://bucket-list-app.vercel.app",
    imageUrl: "/bucket-list.png",
    backgroundUrl: "/bucket-list-bg.jpg",
    date: "1/15/2024",
    technologies: ["NextJS 14", "MongoDB", "React", "Tailwind", "Prisma"],
    sections: {
      whatIs: "Bucket List is a social platform that helps users document, plan, and achieve their life goals. Whether it's traveling to exotic destinations, learning new skills, or experiencing unique adventures, Bucket List provides the tools to turn dreams into reality.",
      needFor: "While many people have aspirations and goals, they often lack structured ways to track progress and stay motivated. Bucket List addresses this challenge by combining goal setting with social accountability, creating a supportive environment for personal achievement.",
      features: [
        {
          title: "Collaborative lists",
          description: "Create shared bucket lists with friends and family for group adventures and goals.",
          icon: <Zap className="size-5" />
        },
        {
          title: "Progress tracking",
          description: "Monitor your progress with visual indicators and milestone celebrations.",
          icon: <Layers className="size-5" />
        },
        {
          title: "Location discovery",
          description: "Explore popular bucket list items based on your location and interests.",
          icon: <Globe className="size-5" />
        },
        {
          title: "Memory journal",
          description: "Document your experiences with photos, notes, and timestamps as you complete each item.",
          icon: <Calendar className="size-5" />
        }
      ],
      techStack: [
        {
          category: "Frontend",
          items: ["Next.js 14", "React", "TailwindCSS", "SWR"],
          icon: <Code className="size-5" />
        },
        {
          category: "Backend",
          items: ["Node.js", "MongoDB", "Prisma", "NextAuth"],
          icon: <Server className="size-5" />
        },
        {
          category: "DevOps",
          items: ["Vercel", "MongoDB Atlas", "GitHub Actions"],
          icon: <Layers className="size-5" />
        }
      ]
    }
  }
};

const ProjectDetailsPage = ({ params }: { params: { slug: string } }) => {
  // Get project data based on slug
  const projectData = PROJECTS_DATA[params.slug] || PROJECTS_DATA["hypermail"]; // Default to hypermail if slug not found
  
  return (
    <main className="relative mx-auto w-full">
      <div className="relative">
        {/* Background container with aspect ratio */}
        <div className="h-[50vh] min-h-[300px] max-h-[800px] w-full relative overflow-hidden">
          {/* Background image */}
          <Image
            src={projectData.backgroundUrl}
            alt="Cosmic background"
            className="object-cover object-center pointer-events-none select-none"
            priority
            fill
          />

          {/* Overlay gradients for better text contrast and visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

          {/* Colored accents to match reference */}
          {/* <div className="absolute inset-0 bg-amber-800/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div> */}

          {/* Bottom fade to content area */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
      <div className="pt-60 relative"></div>
      <main
        id="project-document"
        className="flex flex-1 flex-row"
      >
        <div
          id="project-document-page"
          className="flex w-full min-w-0 flex-col"
        >
          <article className="flex w-full flex-1 flex-col gap-6 px-4 pt-8 md:px-6 md:pt-12 xl:px-12 xl:mx-auto max-w-[860px] mx-auto">
            <header className="flex flex-col gap-y-4">
              <div className="flex flex-col justify-between gap-y-4 md:flex-row">
                <h1 className="text-3xl font-bold md:text-4xl">{projectData.name}</h1>
                <div className="flex w-fit gap-x-2 max-sm:flex-row-reverse md:text-sm">
                  {/* Hrefs should be for the selected project */}
                  <a
                    target="_blank"
                    className="translate-y-px cursor-pointer rounded-full p-2 hover:bg-zinc-900"
                    rel="noopener noreferrer"
                    href={projectData.githubUrl}
                  >
                    <Github />
                  </a>
                  <a
                    href={projectData.liveUrl}
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 opacity-90 dark:bg-white dark:text-black"
                  >
                    <span className="pl-4 text-base font-light">
                      Check it out
                    </span>
                    <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                      <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                        <ArrowUpRight className="lucide lucide-arrow-up-right size-5" />
                        <ArrowUpRight className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-400 md:text-base">
                {projectData.tagline}
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
                {/* Map over the technologies used in the project */}
                {projectData.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-sm bg-gray-100/80 px-1.5 py-0.5 text-gray-700 dark:bg-neutral-800/60 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="gap-px text-sm">
                <time className="text-xs text-neutral-400">{projectData.date}</time>
              </div>
            </header>
            <div>
              <div className="my-6 flex flex-row gap-2 rounded-lg border border-s-2 bg-zinc-900 p-3 text-sm text-fd-card-foreground shadow-md border-s-blue-500/50">
                <Info />
                <div className="min-w-0 flex-1">
                  {/* Text to be different for selected project */}
                  <p className="not-prose mb-2 font-medium ">
                    🚀 Fueling Founders
                  </p>
                  <div className="prose-no-margin text-neutral-400 md:text-base">
                    <p>
                      {projectData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project screenshot image */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:p-2">
                <Image
                  src={projectData.imageUrl}
                  height={753}
                  width={1203}
                  loading="lazy"
                  decoding="async"
                  alt={`${projectData.name} screenshot`}
                  className="!my-0 rounded-[8px] lg:my-0"
                />
              </div>

              {/* What is the project section */}
              <h2 className="flex scroll-m-28 flex-row items-center gap-2 mt-8 text-2xl py-4">
                <a>What is {projectData.name}?</a>
              </h2>
              <p className="text-lg text-neutral-400">
                {projectData.sections.whatIs}
              </p>

              {/* The need for the project section */}
              <h2 className="flex scroll-m-28 flex-row items-center gap-2 mt-8 text-2xl py-4">
                <a>The need for {projectData.name}</a>
              </h2>
              <p className="text-lg text-neutral-400">
                {projectData.sections.needFor}
              </p>

              {/* Features section */}
              <h2 className="flex scroll-m-28 flex-row items-center gap-2 mt-8 text-2xl py-4">
                <a>Features</a>
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projectData.sections.features.map((feature, index) => (
                  <div key={index} className="block rounded-lg border bg-[#191919] p-4 text-[#fafafa] shadow-md transition-colors @max-lg:col-span-full">
                    <div className="flex items-center gap-3">
                      <div className="not-prose mb-2 w-fit rounded-md border bg-[#191919] p-1.5 text-fd-muted-foreground [&_svg]:size-4">
                        {feature.icon}
                      </div>
                      <h3 className="not-prose mb-1 text-sm font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground prose-no-margin">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack section */}
              <h2 className="flex scroll-m-28 flex-row items-center gap-2 text-2xl py-4 mt-8">
                <a>Tech Stack</a>
              </h2>
              <div className="space-y-6">
                {projectData.sections.techStack.map((category, index) => (
                  <div key={index} className="block rounded-lg border bg-[#191919] p-4 text-[#fafafa] shadow-md transition-colors @max-lg:col-span-full">
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h3 className="not-prose mb-1 text-sm font-medium">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex} 
                          className="rounded-full bg-white/10 px-4 py-2 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to action section */}
              {/* <div className="mt-12 flex flex-col rounded-lg border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to explore {projectData.name}?</h3>
                <p className="mb-6 text-lg text-neutral-300">Check out the live demo or explore the codebase on GitHub</p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <a
                    href={projectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Globe className="size-5" />
                    Visit Live Site
                  </a>
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-neutral-800 px-6 py-3 text-white hover:bg-neutral-700 transition-colors"
                  >
                    <Github className="size-5" />
                    View Source Code
                  </a>
                </div>
              </div> */}
            </div>
          </article>
        </div>
      </main>
    </main>
  );
};

export default ProjectDetailsPage;