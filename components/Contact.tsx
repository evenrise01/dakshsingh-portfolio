"use client";

import { useState } from "react";
import {
  Send,
  Linkedin,
  Github,
  Twitter,
  Mail,
  LucideCalendar,
} from "lucide-react";

import { MagneticButton } from "./ui/magnetic-button";
import { TextShimmer } from "./ui/text-shimmer";
import AnimatedTextCycle from "./ui/animated-text-cycle";
import ContactDrawer from "./ui/contact-drawer";

export default function Contact() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section id="contact" className="relative z-0 mt-40 flex w-full justify-center overflow-hidden px-4 py-36">
      {/* Background implementation */}
      <div className="absolute inset-0 z-0">
        {/* Dark base background */}
        <div className="absolute inset-0 bg-black/90"></div>
        
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 z-1 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black"></div>
        
        {/* Accent gradients */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
        
        {/* Light beam effects */}
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
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
        <h2 className="text-3xl md:text-5xl mb-16 uppercase">Let's make it <span className="font-bold">happen!</span></h2>

        <MagneticButton onClick={() => setIsDrawerOpen(true)} className="mb-16">
          Get in touch
        </MagneticButton>

        <div className="flex flex-col items-center justify-center">
          <TextShimmer className="tracking-wide text-base font-semibold lg:text-2xl">
            I'm available for full-time roles & freelance projects.
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