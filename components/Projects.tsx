"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useInView } from "framer-motion";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { usePathname } from "next/navigation";
import Image from "next/image";
// Project data structure
interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  technologies: Array<{
    name: string;
    icon: string;
  }>;
  image: string;
  bgGradient: string;
  textColor: string;
  shadowColor: string;
  divColor: string;
  iconColors: {
    fill: string;
    text: string;
    bg: string;
  };
}
// Sample projects data
const projects: Project[] = [
  {
    id: "hypermail",
    title: "Hypermail",
    slug: "hypermail",
    description:
      "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "Sanity cms", icon: "https://cdn.simpleicons.org/sanity" },
      { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
      {
        name: "markdown",
        icon: "https://cdn.simpleicons.org/markdown/lightblue",
      },
      { name: "GROQ", icon: "https://cdn.simpleicons.org/zod" },
      { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry/violet" },
    ],
    image: "/hypermail.png",
    bgGradient:
      "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-pink-300",
    shadowColor: "shadow-[0_0_30px_#DB2777]",
    divColor: "bg-pink-600",
    iconColors: {
      fill: "fill-pink-600",
      text: "text-pink-400",
      bg: "bg-pink-600/20",
    },
  },
  {
    id: "gitmind",
    title: "GitMind",
    slug: "gitmind",
    description:
      "A platform connecting students and instructors for enhanced learning experiences.",
    features: [
      "Intelligent matching system pairs students with ideal instructors.",
      "Interactive learning dashboard with progress tracking.",
      "Real-time communication and feedback system.",
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio" },
    ],
    image: "/gitmind.png",
    bgGradient:
      "linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-blue-300",
    shadowColor: "shadow-[0_0_30px_#2932CB]",
    divColor: "bg-blue-600",
    iconColors: {
      fill: "fill-blue-600",
      text: "text-blue-400",
      bg: "bg-blue-600/20",
    },
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    features: [
      "Fast conversion between multiple file formats.",
      "Batch processing for multiple files.",
      "Cloud storage integration for easy file management.",
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "FFMPEG WASM", icon: "https://cdn.simpleicons.org/ffmpeg" },
    ],
    image: "/personal-portfolio-project.png",
    bgGradient:
      "linear-gradient(188.62deg, rgb(8, 57, 38) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-emerald-300",
    shadowColor: "shadow-[0_0_30px_#059669]",
    divColor: "bg-emerald-600",
    iconColors: {
      fill: "fill-emerald-600",
      text: "text-emerald-400",
      bg: "bg-emerald-600/20",
    },
  },
];

const ProjectCard = ({
  project,
  isActive,
  index,
  observer,
}: {
  project: Project;
  isActive: boolean;
  index: number;
  observer: React.RefObject<HTMLDivElement>;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.1 });
  return (
    <div
      ref={cardRef}
      className="flex w-full flex-row"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(40px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="flex flex-col w-full mx-auto sm:mx-2 md:mx-4 lg:mx-10">
        <Link
          href={`/projects/${project.slug}`}
          draggable="false"
          className="relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1 sm:p-1.5 shadow-2xl md:h-[400px] lg:h-[560px] lg:rounded-3xl lg:p-2"
          onClick={(e) => {
            if (!isActive && index !== 0) {
              e.preventDefault();
              observer.current?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
            }}
          ></div>

          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
            <div
              className="absolute inset-0 -z-1"
              style={{ background: project.bgGradient }}
            ></div>

            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
              }}
            ></div>

            <div
              className={`hidden w-full flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 lg:flex ${project.textColor}`}
            >
              <h3 className="max-w-[90%] text-xl sm:text-2xl">
                {project.description}
              </h3>
              <ArrowRight className="size-5 sm:size-6" />
            </div>

            <img
              alt={project.title}
              className={`w-full max-w-[85%] translate-y-2 sm:translate-y-3 lg:translate-y-5 -rotate-2 sm:-rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 ${project.shadowColor}`}
              src={project.image}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ProjectDetails = ({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  // Adjusted to trigger with smaller threshold on mobile
  const isInView = useInView(detailsRef, { once: false, amount: 0.1 });

  return (
    <div
      ref={detailsRef}
      className="flex transition-all duration-500"
      style={{
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      {/* Updated to use project.iconColors.bg instead of fixed bg-pink-600 */}
      <div
        aria-hidden="true"
        className={`my-4 mr-4 h-1 min-w-6 rounded-full ${project.divColor}`}
      ></div>
      <div className="flex flex-col items-start">
        <div
          className="flex items-center gap-3 w-full"
          style={{
            transform:
              isActive && isInView ? "translateY(0)" : "translateY(20px)",
            opacity: isActive && isInView ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            {project.title}
          </h3>
        </div>
        <p
          className="text-muted-foreground my-2 text-sm sm:text-base font-light"
          style={{
            transform:
              isActive && isInView ? "translateY(0)" : "translateY(20px)",
            opacity: isActive && isInView ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            transitionDelay: "0.2s",
          }}
        >
          {project.description}
        </p>
        <ul
          className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-sm sm:text-base"
          style={{
            transform:
              isActive && isInView ? "translateY(0)" : "translateY(20px)",
            opacity: isActive && isInView ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-xs sm:text-sm"
              style={{
                transform:
                  isActive && isInView ? "translateY(0)" : "translateY(20px)",
                opacity: isActive && isInView ? 1 : 0,
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                transitionDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`mt-1 mr-2 size-4 sm:size-5 shrink-0 ${project.iconColors.fill} ${project.iconColors.text} ${project.iconColors.bg} lg:bg-black`}
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div
          className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-2 sm:gap-3"
          style={{
            transform:
              isActive && isInView ? "translateY(0)" : "translateY(20px)",
            opacity: isActive && isInView ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            transitionDelay: "0.7s",
          }}
        >
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl border border-white/[0.14] bg-neutral-900 px-2 py-1 sm:px-3 text-xs sm:text-sm"
              style={{
                opacity: isActive && isInView ? 1 : 0,
                transform: isActive && isInView ? "none" : "translateY(10px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transitionDelay: `${0.8 + index * 0.05}s`,
              }}
            >
              <img height="16" width="16" alt={tech.name} src={tech.icon} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedProjects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll logic to update active project
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || projectRefs.current.length === 0) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollProgress = Math.max(
        0,
        Math.min(1, -sectionTop / (sectionHeight - windowHeight))
      );

      // Calculate which project should be active based on scroll position
      const projectIndex = Math.min(
        projects.length - 1,
        Math.floor(scrollProgress * projects.length)
      );

      setActiveProjectIndex(projectIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  return (
    <div>
      {pathname === '/work' && <div className="h-[80vh] min-h-[500px] max-h-[800px] w-full relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/nasa-Q1p7bh3SHj8-unsplash.jpg"
          alt="Developer background"
          className="object-cover object-center pointer-events-none select-none"
          priority
          fill
        />

        {/* Overlay gradients for better text contrast and visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

        {/* Colored accents for visual interest */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="relative z-10 text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm">
              Featured Projects
            </p>
            <span>Curated</span>{" "}
            <AnimatedGradientText className="tangerine-bold pr-6 text-5xl md:text-6xl lg:text-7xl">
              Work
            </AnimatedGradientText>
          </h2>
        </div>

        {/* Bottom fade to content area */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>}
      <section
        ref={sectionRef}
        id="work"
        className="relative mx-auto mt-16 sm:mt-20 lg:mt-28 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
      >
        {pathname === "/" && (
          <h2 className="relative z-2 mb-12 sm:mb-16 md:mb-20 lg:mb-36 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center">
            <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-normal tracking-widest text-white/70 uppercase">
              FEATURED PROJECTS
            </p>
            <span>Curated</span>{" "}
            <AnimatedGradientText className="tangerine-bold pr-4 text-4xl md:text-6xl lg:text-7xl">
              Work
            </AnimatedGradientText>
          </h2>
        )}

        <div className="mx-auto relative w-full flex flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8 transition-opacity duration-500 
              ${index <= activeProjectIndex ? "opacity-100" : "opacity-30"}`}
            >
              {/* Project Details - on top for mobile, on left for desktop */}
              <div className="w-full lg:w-1/3 order-2 lg:order-1 px-2 sm:px-4">
                <ProjectDetails
                  project={project}
                  isActive={index === activeProjectIndex}
                />
              </div>

              {/* Project Card - on bottom for mobile, on right for desktop */}
              <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <ProjectCard
                  project={project}
                  isActive={index <= activeProjectIndex}
                  index={index}
                  observer={projectRefs.current[index] || null}
                />
              </div>
            </div>
          ))}
        </div>
        {pathname === '/' && <div className="flex items-center justify-center my-12">
        <a className="group flex items-center justify-center gap-2 text-neutral-300 group-hover:text-neutral-100 mt-10 lg:justify-start z-10" href="/work">
            See More Projects <ChevronRight/>
        </a>
        </div>}
      </section>
    </div>
  );
};

export default AnimatedProjects;
