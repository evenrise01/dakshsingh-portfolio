"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import { NavbarApp } from "@/components/NavbarApp";
import { BentoFeatureGrid } from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import SkillPage from "@/components/Skill";

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center flex-col overflow-hidden bg-black">
        <div className="w-full">
          <NavbarApp/>
          <Hero />
          <BentoFeatureGrid/>
          <Projects/>
          <SkillPage/>
        </div>
      </main>
    </>
  );
}
