import React, { useEffect, useRef } from "react";
import { AuroraText } from "./magicui/aurora-text";
import { outfit } from "../app/fonts"; // Import your fonts
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="work"
      className="relative mx-auto mt-28 w-full max-w-7xl py-10"
    >
      <h2 className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center">
        <p className={`${outfit.className} mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm`}>
          FEATURED CASE STUDIES
        </p>
        <span className={outfit.className}>Curated</span> <AuroraText>work</AuroraText>
      </h2>

      <div className="mx-auto relative w-full flex">
        <div className="mx-auto flex max-w-2xl flex-col gap-y-6 md:gap-y-24 lg:max-w-[65%]">
          <div className="project-card flex w-full flex-row" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col lg:mx-10 lg:w-full">
              <Link href="/projects/next-venture" draggable="false" className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}></div>
                <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                  <div className="absolute inset-0 -z-1" style={{ background: "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)" }}></div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                  <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-pink-300`}>
                    <h3 className="max-w-[90%] text-2xl">A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.</h3>
                    <ArrowRight className="size-6" />
                  </div>
                  <img 
                    alt="Next Ventures" 
                    className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]" 
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnext-venture.9ff457d3.webp&amp;w=1200&amp;q=75" 
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="project-card flex w-full flex-row" style={{ opacity: 0, transform: "scale(0.8)" }}>
            <div className="flex flex-col lg:mx-10 lg:w-full">
              <Link href="/projects/zenith-minds" draggable="false" className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}></div>
                <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                  <div className="absolute inset-0 -z-1" style={{ background: "linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)" }}></div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                  <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-blue-300`}>
                    <h3 className="max-w-[90%] text-2xl">A platform connecting students and instructors for enhanced learning experiences.</h3>
                    <ArrowRight className="size-6" />
                  </div>
                  <img 
                    alt="Zenith Minds" 
                    className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#2932CB]" 
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenith.9208c264.jpg&amp;w=1200&amp;q=75" 
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="project-card flex w-full flex-row" style={{ opacity: 0, transform: "scale(0.8)" }}>
            <div className="flex flex-col lg:mx-10 lg:w-full">
              <Link href="/projects/flux-lura" draggable="false" className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}></div>
                <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                  <div className="absolute inset-0 -z-1" style={{ background: "linear-gradient(188.62deg, rgb(8, 57, 38) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 93.88%, rgb(249, 215, 147) 113.5%)" }}></div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                  <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-emerald-300`}>
                    <h3 className="max-w-[90%] text-2xl">Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!</h3>
                    <ArrowRight className="size-6" />
                  </div>
                  <img 
                    alt="FLux Lura" 
                    className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#059669]" 
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfluxLura.b9d6b72f.jpg&amp;w=1200&amp;q=75" 
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="project-card flex w-full flex-row" style={{ opacity: 0, transform: "scale(0.8)" }}>
            <div className="flex flex-col lg:mx-10 lg:w-full">
              <Link href="/projects/portfolio" draggable="false" className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}></div>
                <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                  <div className="absolute inset-0 -z-1" style={{ background: "linear-gradient(188.62deg, rgb(61, 26, 122) 49.9%, rgb(126, 34, 206) 81.7%, rgb(192, 132, 252) 93.88%, rgb(249, 215, 147) 113.5%)" }}></div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                  <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-purple-300`}>
                    <h3 className="max-w-[90%] text-2xl">Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX</h3>
                    <ArrowRight className="size-6" />
                  </div>
                  <img 
                    alt="Personal Portfolio" 
                    className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#7E22CE]" 
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.5816691c.webp&amp;w=1200&amp;q=75" 
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="project-card flex w-full flex-row" style={{ opacity: 0, transform: "scale(0.8)" }}>
            <div className="flex flex-col lg:mx-10 lg:w-full">
              <Link href="/projects/star-forge" draggable="false" className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)" }}></div>
                <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                  <div className="absolute inset-0 -z-1" style={{ background: "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)" }}></div>
                  <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                  <div className={`${outfit.className} hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-pink-300`}>
                    <h3 className="max-w-[90%] text-2xl">A sleek AI SaaS landing page with a user-friendly design that enhances engagement.</h3>
                    <ArrowRight className="size-6" />
                  </div>
                  <img 
                    alt="StarForge" 
                    className="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]" 
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsaas-landing.d39d4d1a.webp&amp;w=1200&amp;q=75" 
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
          <div className="sticky top-40">
            <div className="flex">
              <div aria-hidden="true" className="my-4 mr-4 h-1 min-w-6 rounded-full bg-pink-600"></div>
              <div className="flex flex-col items-start lg:h-[500px]">
                <div className="flex items-center gap-3">
                  <h3 className={`${outfit.className} text-foreground text-2xl font-bold`}>Next Ventures</h3>
                </div>
                <p className={`${outfit.className} text-muted-foreground my-2 text-base font-light`}>
                  A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.
                </p>
                <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
                  <li className={`${outfit.className} flex items-center text-sm`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black">
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Leveraged Partial Prerendering and After for faster loading.
                  </li>
                  <li className={`${outfit.className} flex items-center text-sm`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black">
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Simplified idea submission with a clean, intuitive design.
                  </li>
                  <li className={`${outfit.className} flex items-center text-sm`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black">
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Enhanced browsing with seamless performance optimization.
                  </li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-3 text-sm">
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Next.js" src="https://cdn.simpleicons.org/nextdotjs/white" />
                    Next.js
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="React" src="https://cdn.simpleicons.org/react" />
                    React
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Tailwind CSS" src="https://cdn.simpleicons.org/tailwindcss" />
                    Tailwind CSS
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="TypeScript" src="https://cdn.simpleicons.org/typescript" />
                    TypeScript
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Framer Motion" src="https://cdn.simpleicons.org/framer" />
                    Framer Motion
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Sanity cms" src="https://cdn.simpleicons.org/sanity" />
                    Sanity cms
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Auth.js" src="https://cdn.simpleicons.org/nextdns" />
                    Auth.js
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="markdown" src="https://cdn.simpleicons.org/markdown/lightblue" />
                    markdown
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="GROQ" src="https://cdn.simpleicons.org/zod" />
                    GROQ
                  </div>
                  <div className={`${outfit.className} flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm`} style={{ opacity: 1, transform: "none" }}>
                    <img height="16" width="16" alt="Sentry" src="https://cdn.simpleicons.org/sentry/violet" />
                    Sentry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;