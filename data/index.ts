import { Blocks, Calendar, CodeXml, Codepen, CreditCard, Github, Handshake, Link, Linkedin, LucideUser, PenBoxIcon, Scale, Webhook } from "lucide-react";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },

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
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/green" },
    { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/blue" },
    { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry/violet" }
  ]

  // export const footerBranding = {
  //   name: "Daksh Singh",
  //   description: "Help you create experiences where aesthetics & functionality seamlessly come together.",
  // }

  // export const footerSocialLinks = [
  //   {
  //     name: "Twitter",
  //     href: "https://x.com/raymethula",
  //   },
  //   {
  //     name: "Github",
  //     href: "https://github.com/serafimcloud",
  //   },
  //   {
  //     name: "LinkedIn",
  //     href: "#",
  //   },
  // ]

  // export const footerColumns = [
  //   {
  //     title: "General",
  //     links: [
  //       {
  //         name: "Home",
  //         Icon: Blocks,
  //         href: "#features",
  //       },
  //       {
  //         name: "About",
  //         Icon: LucideUser,
  //         href: "#pricing",
  //       },
  //       {
  //         name: "Projects",
  //         Icon: Webhook,
  //         href: "#integrations",
  //       },
      
  //     ],
  //   },
  //   {
  //     title: "The Website",
  //     links: [
  //       {
  //         name: "Bucket List",
  //         Icon: PenBoxIcon,
  //         href: "/compare/plausible",
  //       },
  //       {
  //         name: "Links",
  //         Icon: Link,
  //         href: "/compare/matomo",
  //       },
  //       {
  //         name: "Book a call",
  //         Icon: Calendar,
  //         href: "/compare/google-analytics",
  //       },
  //     ],
  //   },
  // ]

  export const links = [
    {
      name: "LinkedIn",
      logo: Linkedin,
      href: "https://www.linkedin.com/in/daksh-singh-25646918a/",
    },
    { name: "Github", logo: Github, href: "https://github.com/evenrise01" },
    { name: "Codepen", logo: Codepen, href: "https://codepen.io/evenrise01" },
  ];
  
  export const files = [
    {
      name: "User Dashboard",
      body: "The user dashboard provides a personalized overview of key information, such as usage stats, recent activity, and access to essential tools. It's the first impression and main interaction hub for users.",
    },
    {
      name: "Email Client",
      body: "An integrated email client allows users to communicate directly from within the platform. Features often include threading, filtering, tagging, and rich-text editing, enabling seamless internal and external correspondence.",
    },
    {
      name: "Command Bar",
      body: "The command bar boosts efficiency by allowing users to navigate and perform actions using keyboard shortcuts or fuzzy search. It's essential for power users and improving workflow speed.",
    },
    {
      name: "Analytics & Insights",
      body: "Analytics modules track user behavior, feature usage, and system metrics. Visual dashboards and customizable reports help stakeholders make informed decisions and improve the product iteratively.",
    },
    {
      name: "AI Integration",
      body: "AI features enhance the user experience with intelligent automation, predictive suggestions, chat assistants, and natural language processing, enabling smarter workflows across the platform.",
    },
    {
      name: "Authentication & Authorization",
      body: "Secure login, registration, multi-factor authentication, and role-based access control are foundational for managing who can access what within the SaaS platform.",
    },
    {
      name: "Billing & Subscriptions",
      body: "This module handles pricing plans, payment gateways, invoicing, and user subscriptions. It ensures monetization is smooth and transparent for both users and the business.",
    },
    {
      name: "Onboarding Experience",
      body: "A smooth onboarding experience, with tooltips, guides, and tutorials, ensures users quickly understand the value of the platform and reach their first 'aha!' moment with minimal friction.",
    },
    {
      name: "Admin Panel",
      body: "The admin panel allows internal teams to manage users, content, configurations, and system health. It’s critical for moderation, support, and platform control.",
    },
    {
      name: "Notifications System",
      body: "A flexible notification system supports email, in-app, and push alerts. It keeps users informed about updates, actions, and reminders without overwhelming them.",
    },
    {
      name: "File Storage & Management",
      body: "This component supports file uploads, previews, sharing, and storage using cloud integrations like AWS S3. It’s essential for content-heavy SaaS apps.",
    },
  ];