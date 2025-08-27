"use client";
import { BentoFeatureGrid } from "@/components/BentoGrid";
import SkillPage from "@/components/Skill";
import AboutPage from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Footer } from "@/components/footer";
import AnimatedProjects from "@/components/Projects";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center flex-col">
        <div className="w-full">
          {/* <HeroNew/> */}
          <Hero/>
          <BentoFeatureGrid />
          <AnimatedProjects />
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
