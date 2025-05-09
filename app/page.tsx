"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import { NavbarApp } from "@/components/NavbarApp";
import { BentoFeatureGrid } from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import SkillPage from "@/components/Skill";
import AboutPage from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center flex-col overflow-hidden bg-black">
        <div className="w-full">
          {/* <NavbarApp /> */}
          <Hero />
          <BentoFeatureGrid />
          <Projects />
          {/* <Experience/> */}
          <SkillPage />
          <AboutPage />
          <Testimonials />
          <Contact />
          <Footer
            copyright="Copyright © 2025 Daksh Singh. All rights reserved."
          />
        </div>
      </main>
    </>
  );
}
