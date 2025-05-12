import {
  Bot,
  HeartHandshake,
  Layout,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeamDemo } from "./magicui/animated-beam-demo";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { Marquee } from "./magicui/marquee";
import Earth from "./ui/globe";
import { BorderBeam } from "./magicui/border-beam";
import { IconCloud } from "./magicui/icon-cloud";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { slugs } from "@/data";
import { useEffect, useState } from "react";

const files = [
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


const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const features = [
  {
    Icon: HeartHandshake,
    name: "Collaboration",
    description: "I prioritize client collaboration, fostering open communication",
    href: "#",
    cta: "View recent work",
    className: "col-span-6 md:col-span-6 lg:col-span-4",
    background: (
      <div className="absolute inset-0 flex justify-center items-center">
        <AnimatedBeamDemo />
      </div>
    ),
  },
  {
    Icon: MapPin,
    name: "Remote",
    description: "India - 06:24 pm",
    href: "#",
    cta: "Connect now",
    className: "col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2",
    background: (
      <div>
        <h3 className="absolute top-4 w-full px-4 text-center text-lg sm:text-xl md:text-2xl leading-[100%] font-bold tracking-tighter text-balance select-none z-20 md:top-12">
          I'm very flexible with time{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#edeffd] to-[#7b9cda] italic">
            zone communications
          </span>
        </h3>
        <div className="flex items-center justify-center absolute w-full h-full">
          <div className="max-w-7xl w-full relative overflow-hidden h-[200px] sm:h-[300px] md:h-[500px] px-4">
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-40" />
            <div className="absolute w-full h-full bottom-0 top-0 sm:top-6 right-0 sm:right-1 transform translate-y-0 sm:translate-y-8 scale-[0.7] sm:scale-100">
              <Earth scale={1.1} dark={1} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Bot,
    name: "Tech Enthusiast",
    description: "Passionate about cutting edge technologies",
    href: "#",
    cta: "Know more",
    className: "col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2",
    background: (
      <div className="absolute inset-0 w-full h-full scale-100 sm:scale-125 sm:top-8 sm:right-4">
        <IconCloud images={images} />
      </div>
    ),
  },
  {
    className: "col-span-6 md:col-span-3 lg:col-span-2",
    href: "N/A",
    background: (
      <div className="flex flex-col items-center justify-center w-full h-full rounded-lg p-4 sm:p-8 text-center">
        <BorderBeam
          duration={6}
          size={250}
          className="from-transparent via-pink-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={250}
          className="from-transparent via-cyan-500 to-transparent"
        />
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 relative z-10 my-4 sm:my-8">
          <AnimatedShinyText className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
            Let's work together
            <br />
            on your next project!
          </AnimatedShinyText>
          <button
            className="items-center gap-2 py-2 sm:py-3 mt-2 sm:mt-4 text-sm sm:text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90 flex w-full justify-center rounded-xl px-4 sm:px-10 shadow-[inset_0_3px_10px_#ffffff3f] max-w-xs mx-auto"
          >
            dakshsingh.shanu@gmail.com
          </button>
        </div>
      </div>
    ),
  },
  {
    Icon: Layout,
    name: "Currently building an AI Email SaaS",
    description: "The Inside Scoop",
    href: "#",
    cta: "View recent work",
    className: "col-span-6 md:col-span-6 lg:col-span-4",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-4 sm:top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-24 sm:w-32 cursor-pointer overflow-hidden rounded-xl border p-2 sm:p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-xs sm:text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-1 sm:mt-2 text-[10px] sm:text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function BentoFeatureGrid() {
  const [currentTime, setCurrentTime] = useState('India - Loading...');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      const parts = formatter.formatToParts(new Date());
      const hour = parts.find(part => part.type === 'hour')?.value;
      const minute = parts.find(part => part.type === 'minute')?.value;
      const dayPeriod = parts.find(part => part.type === 'dayPeriod')?.value;
      setCurrentTime(`India - ${hour}:${minute} ${dayPeriod}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const updatedFeatures = features.map(feature => {
    if (feature.name === "Remote") {
      return {
        ...feature,
        description: currentTime
      };
    }
    return feature;
  });

  return (
    <BentoGrid className="py-10 sm:py-20 px-4 sm:px-40">
      {updatedFeatures.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}