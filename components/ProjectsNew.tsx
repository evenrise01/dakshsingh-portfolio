"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

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
  },
];

type AnimationType = "fadeIn" | "slideFromLeft" | "slideFromRight";

export default function ProjectsNew() {
  // References for each project to track scroll position
  const projectRefs = useRef([]);
  const sectionHeaderRef = useRef(null);

  // State to track visibility of each project
  const [visibilityState, setVisibilityState] = useState({
    sectionHeader: false,
    projects: projects.map(() => false),
  });

  // Set up refs for each project
  useEffect(() => {
    // Initialize refs array
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, []);

  useEffect(() => {
    // Set up Intersection Observer
    const observerOptions = {
      root: null, // use viewport
      rootMargin: "-10% 0px -10% 0px", // trigger when element is 10% in viewport
      threshold: 0.1, // trigger when 10% of element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        // Update section header visibility
        if (target === sectionHeaderRef.current) {
          setVisibilityState((prev) => ({
            ...prev,
            sectionHeader: isIntersecting,
          }));
          return;
        }

        // Update project visibility
        const projectIndex = projectRefs.current.findIndex(
          (ref) => ref === target
        );
        if (projectIndex !== -1) {
          setVisibilityState((prev) => {
            const updatedProjects = [...prev.projects];
            updatedProjects[projectIndex] = isIntersecting;
            return { ...prev, projects: updatedProjects };
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe section header
    if (sectionHeaderRef.current) observer.observe(sectionHeaderRef.current);

    // Observe each project
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Clean up observer on component unmount
      observer.disconnect();
    };
  }, []);

  // Helper function to generate animation classes
  const getAnimationClass = (
    isVisible: boolean,
    animationType: AnimationType
  ) => {
    const baseClasses = {
      fadeIn: "transition-opacity duration-1000 ease-in-out",
      slideFromLeft: "transition-all duration-1000 ease-out transform",
      slideFromRight: "transition-all duration-1000 ease-out transform",
    };

    const visibleClasses = {
      fadeIn: "opacity-100",
      slideFromLeft: "opacity-100 translate-x-0",
      slideFromRight: "opacity-100 translate-x-0",
    };

    const hiddenClasses = {
      fadeIn: "opacity-0",
      slideFromLeft: "opacity-0 -translate-x-10",
      slideFromRight: "opacity-0 translate-x-10",
    };

    return `${baseClasses[animationType]} ${
      isVisible ? visibleClasses[animationType] : hiddenClasses[animationType]
    }`;
  };

  return (
    <div className="text-white overflow-hidden">
      {/* Project Showcase Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div
            ref={sectionHeaderRef}
            className={`text-center max-w-3xl mx-auto mb-20 ${getAnimationClass(
              visibilityState.sectionHeader,
              "fadeIn"
            )}`}
          >
            <h2 className="relative z-10 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm">
              Featured Work
            </p>
            <span className="md:text-6xl text-white">
              <AnimatedGradientText className="tangerine-bold text-6xl pr-2">
                Curated Work
              </AnimatedGradientText>
            </span>
          </h2>
          </div>

          {/* Projects panels with scroll transitions */}
          <div className="space-y-52 py-20 my-20">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[idx] = el)}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Project description - alternating left and right */}
                <div
                  className={`space-y-6 ${getAnimationClass(
                    visibilityState.projects[idx],
                    idx % 2 === 0 ? "slideFromLeft" : "slideFromRight"
                  )} ${idx % 2 !== 0 ? "order-2" : ""}`}
                >
                  <div
                    className={`inline-block bg-opacity-30 px-3 py-1 rounded-full text-sm font-medium ${
                      project.textColor
                    } bg-${project.textColor.split("-")[1]}-900/30`}
                  >
                    {project.id}
                  </div>
                  <h3 className="text-foreground text-xl sm:text-2xl font-bold">
                    <span className="text-white">{project.title}</span>
                    <span className={project.textColor}> Project</span>
                  </h3>
                  <p className="text-muted-foreground my-2 text-sm sm:text-base font-light">{project.description}</p>
                  <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-sm sm:text-base">
                    {project.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-start text-xs sm:text-sm"
                        style={{
                          transition: "all 500ms ease",
                          transitionDelay: `${featureIdx * 150}ms`,
                          opacity: visibilityState.projects[idx] ? 1 : 0,
                          transform: visibilityState.projects[idx]
                            ? "translateX(0)"
                            : `translateX(${idx % 2 === 0 ? "-" : ""}20px)`,
                        }}
                      >
                        <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                className="mt-1 mr-2 size-4 sm:size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
              </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies used */}
                  <div className="pt-4">
                    <p className="text-sm text-zinc-500 mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <div
                          key={techIdx}
                          className="flex items-center gap-1.5 bg-zinc-800/70 px-2 py-1 rounded text-zinc-300 text-xs"
                          style={{
                            transition: "all 400ms ease",
                            transitionDelay: `${300 + techIdx * 50}ms`,
                            opacity: visibilityState.projects[idx] ? 1 : 0,
                            transform: visibilityState.projects[idx]
                              ? "translateY(0)"
                              : "translateY(10px)",
                          }}
                        >
                          {tech.icon && (
                            <img
                              src={tech.icon}
                              className="w-3 h-3"
                              alt={tech.name}
                            />
                          )}
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div
                    className="flex gap-3 pt-2"
                    style={{
                      transition: "all 600ms ease",
                      transitionDelay: "700ms",
                      opacity: visibilityState.projects[idx] ? 1 : 0,
                      transform: visibilityState.projects[idx]
                        ? "translateY(0)"
                        : "translateY(15px)",
                    }}
                  >
                    <Button
                      className={`bg-opacity-20 hover:bg-opacity-30 border-opacity-30 flex items-center gap-2 ${
                        project.textColor
                      } bg-${project.textColor.split("-")[1]}-600/20 hover:bg-${
                        project.textColor.split("-")[1]
                      }-600/30 border-${
                        project.textColor.split("-")[1]
                      }-600/30`}
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                    >
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Project image */}
                <div
                  className={`relative ${getAnimationClass(
                    visibilityState.projects[idx],
                    idx % 2 === 0 ? "slideFromRight" : "slideFromLeft"
                  )} ${idx % 2 !== 0 ? "order-1" : "order-2"}`}
                >
                  <div
                    className={`absolute -inset-1 rounded-2xl blur opacity-20`}
                    style={{ background: project.bgGradient }}
                  ></div>
                  <div
                    className={`relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl ${project.shadowColor}`}
                  >
                    <div className="h-10 bg-zinc-800/70 flex items-center px-4">
                      <div className="text-sm text-zinc-300">
                        {project.title}
                      </div>
                    </div>
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover"
                        style={{
                          transition: "all 800ms ease",
                          transitionDelay: "300ms",
                          opacity: visibilityState.projects[idx] ? 1 : 0,
                          transform: visibilityState.projects[idx]
                            ? "scale(1)"
                            : "scale(1.1)",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-6 ${
                      idx % 2 === 0 ? "-right-6" : "-left-6"
                    } w-32 h-32 rounded-full blur-xl -z-10`}
                    style={{
                      background: `rgb${
                        project.bgGradient.split("rgb")[1].split(")")[0]
                      })`,
                      opacity: 0.2,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* View all projects button */}
          {/* <div 
                        className={`text-center mt-12 ${getAnimationClass(visibilityState.projects[projects.length - 1], 'fadeIn')}`}
                    >
                        <Button 
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6"
                        >
                            View All Projects
                        </Button>
                    </div> */}
        </div>
      </section>
    </div>
  );
}
