import React, { useEffect, useRef, useState } from "react";
import { AuroraText } from "./magicui/aurora-text";
import { outfit } from "../app/fonts"; // Import your fonts
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";

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
    description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization."
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "Sanity cms", icon: "https://cdn.simpleicons.org/sanity" },
      { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
      { name: "markdown", icon: "https://cdn.simpleicons.org/markdown/lightblue" },
      { name: "GROQ", icon: "https://cdn.simpleicons.org/zod" },
      { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry/violet" }
    ],
    image: "/hypermail.png",
    bgGradient: "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-pink-300",
    shadowColor: "shadow-[0_0_30px_#DB2777]"
  },
  {
    id: "gitmind",
    title: "GitMind",
    slug: "gitmind",
    description: "A platform connecting students and instructors for enhanced learning experiences.",
    features: [
      "Intelligent matching system pairs students with ideal instructors.",
      "Interactive learning dashboard with progress tracking.",
      "Real-time communication and feedback system."
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio" }
    ],
    image: "/gitmind.png",
    bgGradient: "linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-blue-300",
    shadowColor: "shadow-[0_0_30px_#2932CB]"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description: "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    features: [
      "Fast conversion between multiple file formats.",
      "Batch processing for multiple files.",
      "Cloud storage integration for easy file management."
    ],
    technologies: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "FFMPEG WASM", icon: "https://cdn.simpleicons.org/ffmpeg" }
    ],
    image: "/path/to/fluxLura.jpg",
    bgGradient: "linear-gradient(188.62deg, rgb(8, 57, 38) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 93.88%, rgb(249, 215, 147) 113.5%)",
    textColor: "text-emerald-300",
    shadowColor: "shadow-[0_0_30px_#059669]"
  }
];

const ProjectCard = ({ 
  project, 
  isActive, 
  index, 
  observer 
}: { 
  project: Project, 
  isActive: boolean, 
  index: number,
  observer: React.RefObject<HTMLDivElement>
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  
  return (
    <div 
      ref={cardRef}
      className="project-card flex w-full flex-row" 
      style={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "scale(0.8)",
        transition: "opacity 0.6s ease-out, transform 0.8s ease-out"
      }}
    >
      <div className="flex flex-col lg:mx-10 lg:w-full">
        <Link 
          href={`/projects/${project.slug}`}
          draggable="false" 
          className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"
          onClick={(e) => {
            if (!isActive && index !== 0) {
              e.preventDefault();
              observer.current?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div 
            className="absolute inset-x-0 top-0 h-px" 
            style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}
          ></div>
          
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
            <div className="absolute inset-0 -z-1" style={{ background: project.bgGradient }}></div>
            
            <div 
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" 
              style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}
            ></div>
            
            <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex ${project.textColor}`}>
              <h3 className="max-w-[90%] text-2xl">{project.description}</h3>
              <ArrowRight className="size-6" />
            </div>
            
            <img 
              alt={project.title} 
              className={`lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 ${project.shadowColor}`}
              src={project.image}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ProjectDetails = ({ project, isActive }: { project: Project, isActive: boolean }) => {
  // Animation delay values for staggered entrance
  const baseDelay = 0.1;
  
  return (
    <div 
      className={`flex transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transition: 'opacity 0.5s ease-out',
      }}
    >
      <div aria-hidden="true" className="my-4 mr-4 h-1 min-w-6 rounded-full bg-pink-600"></div>
      <div className="flex flex-col items-start">
        <div 
          className="flex items-center gap-3 w-full"
          style={{
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            opacity: isActive ? 1 : 0,
            transition: `transform 0.6s ease-out, opacity 0.6s ease-out`,
            transitionDelay: `${baseDelay}s`
          }}
        >
          <h3 className={`${outfit.className} text-foreground text-2xl font-bold`}>{project.title}</h3>
        </div>
        <p 
          className={`${outfit.className} text-muted-foreground my-2 text-base font-light`}
          style={{
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            opacity: isActive ? 1 : 0,
            transition: `transform 0.6s ease-out, opacity 0.6s ease-out`,
            transitionDelay: `${baseDelay + 0.1}s`
          }}
        >
          {project.description}
        </p>
        <ul 
          className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base"
          style={{
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            opacity: isActive ? 1 : 0,
            transition: `transform 0.6s ease-out, opacity 0.6s ease-out`,
            transitionDelay: `${baseDelay + 0.2}s`
          }}
        >
          {project.features.map((feature, index) => (
            <li 
              key={index} 
              className={`${outfit.className} flex items-center text-sm`}
              style={{
                transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                opacity: isActive ? 1 : 0,
                transition: `transform 0.6s ease-out, opacity 0.6s ease-out`,
                transitionDelay: `${baseDelay + 0.3 + (index * 0.1)}s`
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div 
          className="mt-10 flex flex-wrap gap-3 text-sm"
          style={{
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            opacity: isActive ? 1 : 0,
            transition: `transform 0.6s ease-out, opacity 0.6s ease-out`,
            transitionDelay: `${baseDelay + 0.6}s`
          }}
        >
          {project.technologies.map((tech, index) => (
            <div 
              key={index}
              className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} 
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "none" : "translateY(10px)",
                transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
                transitionDelay: `${baseDelay + 0.7 + (index * 0.05)}s`
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
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll logic to update active project
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || projectRefs.current.length === 0) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      
      // Calculate which project should be active based on scroll position
      const projectIndex = Math.min(
        projects.length - 1,
        Math.floor(scrollProgress * projects.length)
      );
      
      setActiveProjectIndex(projectIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative mx-auto mt-28 w-full max-w-7xl py-10"
    >
      <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
        <p className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}>
          FEATURED CASE STUDIES
        </p>
        <span className={outfit.className}>Curated</span> <AuroraText>work</AuroraText>
      </h2>

      <div className="mx-auto relative w-full flex flex-col gap-y-12 md:gap-y-32">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            className={`flex flex-col lg:flex-row items-start gap-8 transition-opacity duration-500 
              ${index <= activeProjectIndex ? 'opacity-100' : 'opacity-30'}`}
          >
            {/* Project Details - on left for desktop, on top for mobile */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1 px-4">
              {index === activeProjectIndex && (
                <ProjectDetails project={project} isActive={true} />
              )}
            </div>
            
            {/* Project Card - on right for desktop, on bottom for mobile */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <ProjectCard 
                project={project} 
                isActive={index <= activeProjectIndex} 
                index={index}
                observer={projectRefs.current[index] || projectsContainerRef}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedProjects;