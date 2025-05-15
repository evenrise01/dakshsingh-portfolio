import {
  Bot,
  Handshake,
  HandshakeIcon,
  HeartHandshake,
  Layout,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { Marquee } from "./magicui/marquee";
import Earth from "./ui/globe";
import { IconCloud } from "./magicui/icon-cloud";
import { files, slugs } from "@/data";
import { useEffect, useState } from "react";
import { ContactCard } from "./ContactCardBentoItem";
import AnimatedGradientBackground from "./ui/animated-gradient-background";

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

const features = [
  {
    Icon: Handshake,
    name: "Collaboration",
    description: "I prioritize client collaboration, fostering open communication",
    href: "#work",
    cta: "View recent work",
    className: "col-span-6 md:col-span-6 lg:col-span-4",
    background: (
      <div className="absolute inset-0 overflow-hidden group">
        {/* Animated gradient background */}
        <AnimatedGradientBackground
          gradientColors={[
            "#000000", // Deep teal/navy (trust & stability)
            "#2C5871", // Muted blue (professionalism)
            "#507D9C", // Soft slate blue (trust & calm)
            "#A98BBF", // Lavender (connection & empathy)
            "#D9A8C4", // Blush pink (warmth, values)
            "#F6C3B3", // Peach (humanity & care)
            "#FFE5EC", // Light rose (gentleness, connection)
          ]}
        />
  
        {/* Subtle animated elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Hover-triggered pulsing circles */}
          <div className="absolute size-64 rounded-full border border-blue-300/20 group-hover:animate-ping transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="absolute size-56 rounded-full border border-purple-300/20 group-hover:animate-ping transition-all duration-300 delay-150 opacity-0 group-hover:opacity-100" />
  
          {/* Centered handshake icon with hover effects */}
          <div className="relative z-10 flex items-center justify-center size-24 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 transition-all duration-500 group-hover:bg-white/15 group-hover:border-white/20">
            <HeartHandshake className="size-12 text-rose-300 drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:text-rose-400 group-hover:drop-shadow-xl" />
          </div>
        </div>
  
      
      </div>
    ),
  },
  {
    Icon: MapPin,
    name: "Remote",
    description: "India - 06:24 pm",
    href: "#contact",
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
    href: "#skills",
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
      <div>
        <ContactCard />
      </div>
    ),
  },
  {
    Icon: Layout,
    name: "Currently building an AI Email SaaS",
    description: "The Inside Scoop",
    href: "#work",
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
            <blockquote className="mt-1 sm:mt-2 text-[10px] sm:text-xs">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function BentoFeatureGrid() {
  const [currentTime, setCurrentTime] = useState("India - Loading...");
  const [copied, setCopied] = useState(false);
  const email = "dakshsingh.shanu@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat("en-IN", options);
      const parts = formatter.formatToParts(new Date());
      const hour = parts.find((part) => part.type === "hour")?.value;
      const minute = parts.find((part) => part.type === "minute")?.value;
      const dayPeriod = parts.find((part) => part.type === "dayPeriod")?.value;
      setCurrentTime(`India - ${hour}:${minute} ${dayPeriod}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const updatedFeatures = features.map((feature) => {
    if (feature.name === "Remote") {
      return {
        ...feature,
        description: currentTime,
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
