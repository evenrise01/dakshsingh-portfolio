import { Bot, HeartHandshake, Layout, MapPin } from "lucide-react";

export const heroWords = [
    {
      text: "Meet",
    },
    {
      text: "Your",
    },
    {
      text: "Next",
    },
    {
      text: "Creative",
      className: "break-words text-[#38B6FF]",
    },
    {
      text: "Developer.",
      className: "break-words text-[#38B6FF]",
    },
  ]

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },

  ];

  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];

  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];


  export const gridItems = [
    {
      id: 1,
      title: "Collaboration",
      description: "I prioritize client collaboration, fostering open communication",
      className: "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-4",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      // img: "/b1.svg",
      // spareImg: "",
      icon: HeartHandshake,
      iconProps: { size: 40 },
      cta: "Book a call"
    },
    {
      id: 2,
      title: "Remote",
      description: "India - Current Time",
      className: "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      icon: MapPin,
      iconProps: { size: 40 },
      cta: "Connect now"
    },
    {
      id: 3,
      title: "Tech enthusiast with a passion for development.",
      description: "I constantly try to improve",
      className: "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
      icon: Bot,
      iconProps: { size: 40 },
      cta: "Know more"
    },
    {
      id: 4,
      title: "",
      description: "",
      className: "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently building an AI Email SaaS",
      description: "The Inside Scoop",
      className: "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-6 lg:col-span-4",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      icon: Layout,
      iconProps: { size: 40 },
      cta: "View recent work"
      // img: "/b5.svg",
      // spareImg: "/grid.svg",
    },
    ,
  ];

  export const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  export const testimonials = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
      href: "https://twitter.com/emmaai"
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "https://twitter.com/davidtech"
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
    }
  ]

  export const skillTechnologies = [
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" }, 
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
    { name: "Shadcn", icon: "https://cdn.simpleicons.org/shadcnui/white" },
    { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/darkgreen" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/darkgreen" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/sky" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/blue" },
    { name: "Zod", icon: "https://cdn.simpleicons.org/zod/purple" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "Github", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
    { name: "npm", icon: "https://cdn.simpleicons.org/npm" },
    { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/white" },
    { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
    { name: "markdown", icon: "https://cdn.simpleicons.org/markdown/lightblue" },
    { name: "GROQ", icon: "https://cdn.simpleicons.org/zod" },
    { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry/violet" }
  ]