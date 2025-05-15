"use client";

import { useState } from "react";

import { MagneticButton } from "./ui/magnetic-button";
import { TextShimmer } from "./ui/text-shimmer";
import AnimatedTextCycle from "./ui/animated-text-cycle";
import ContactDrawer from "./ui/contact-drawer";
import AnimatedGradientBackground from "./ui/animated-gradient-background";

export default function Contact() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section id="contact" className="relative z-0 mt-40 flex w-full justify-center overflow-hidden px-4 py-36">
      {/* Background implementation */}
      <div className="absolute inset-0 z-0">
        {/* Dark base background */}
        <AnimatedGradientBackground gradientColors={[
  "#000000",  // Very dark navy – foundation for depth
  "#1F1A2E",  // Deep muted purple – conveys mystery and value
  "#342A4D",  // Soft violet – emotional connection
  "#5A4E72",  // Lavender grey – empathy and trust
  "#8E709C",  // Muted mauve – warmth and approachability
  "#C492B1",  // Blush pink – complements your pink icon
  "#F1D9E0"   // Very soft rose – gentle finish, lightens the base
]}/>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 text-center lg:mx-0">
        <h2 className="relative z-2 mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:mb-12 md:text-6xl text-center uppercase">
            <p
              className="text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm"
            >
              CONTACT ME
            </p>
        </h2>
        <h1 className="text-4xl md:text-6xl mb-4 tracking-tight uppercase">
          From{" "}
          <AnimatedTextCycle words={["concept", "vision", "dream", "idea"]} />{" "}
          to <span className="font-bold">creation</span>
        </h1>
        <h2 className="text-3xl md:text-5xl mb-16 uppercase">Let&apos;s make it <span className="font-bold">happen!</span></h2>

        <MagneticButton onClick={() => setIsDrawerOpen(true)} className="mb-16">
          Get in touch
        </MagneticButton>

        <div className="flex flex-col items-center justify-center">
          <TextShimmer className="tracking-wide text-base font-semibold lg:text-2xl">
            I&apos;m available for full-time roles & freelance projects.
          </TextShimmer>
          <p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
            I thrive on crafting dynamic web applications, and <br/>delivering seamless
            user experiences.
          </p>
        </div>
      </div>

      {/* Contact drawer component */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
    </section>
  );
}