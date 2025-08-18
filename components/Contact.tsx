"use client";

import { useState } from "react";

import { TextShimmer } from "./ui/text-shimmer";
import AnimatedTextCycle from "./ui/animated-text-cycle";
import ContactDrawer from "./ui/contact-drawer";
import Orb from "./ui/Orb";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Contact() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative z-0 mt-32 flex w-full justify-center overflow-hidden px-6 py-32"
    >
      {/* Background Orb - softened for minimal UI */}
      <div className="absolute inset-0 z-0 h-[500px] w-full opacity-40">
        <Orb />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center space-y-8">
        
        {/* Section Label */}
        <p className="text-xs font-medium tracking-widest text-white/60 uppercase md:text-sm">
          Contact Me
        </p>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          From{" "}
          <AnimatedTextCycle words={["concept", "vision", "dream", "idea"]} />{" "}
          to <span className="font-bold">creation</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white/90">
          Let&apos;s make it <span className="font-bold">happen!</span>
        </h2>

        {/* Call-to-Action Button */}
        <Button
          size="lg"
          className="group relative flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          onClick={() => setIsDrawerOpen(true)}
        >
          Get in touch
          <ChevronRight
            size={18}
            strokeWidth={2}
            className="transition-transform group-hover:translate-x-1"
          />
        </Button>

        {/* Availability */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <TextShimmer className="tracking-wide text-base font-semibold lg:text-xl">
            I&apos;m available for full-time roles & freelance projects.
          </TextShimmer>
          <p className="max-w-xl text-sm font-light leading-relaxed tracking-wide opacity-75 lg:text-lg">
            I thrive on crafting dynamic web applications and delivering
            seamless user experiences.
          </p>
        </div>
      </div>

      {/* Contact Drawer */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}
