import Contact from "@/components/Contact";
import { Footer } from "@/components/footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Spotlight } from "@/components/spotlight-new";
import { Button } from "@/components/ui/button";
import { links } from "@/data";
import React from "react";


const LinksPage = () => {
  return (
    <>
      {/* <NavbarApp/> */}
        <section
          id="links"
          className="mx-auto w-full max-w-7xl overflow-x-hidden py-20"
        >
          <Spotlight />
          <div className="relative mx-auto min-h-screen max-w-lg overflow-x-hidden px-4">
            {/* Small Intro */}
            <div className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden pt-24 pb-10">
              <h1 className="text-xl font-semibold">Daksh Singh</h1>
              <p className="text-white/50">
                Developer | Freelancer | Product Manager
              </p>
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <Button
                className="relative overflow-hidden"
                size="lg"
                variant="outline"
              >
                <a href="/website-link">Website</a>

                <BorderBeam
                  size={40}
                  initialOffset={20}
                  className="from-transparent via-pink-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                />
              </Button>
            </div>
            {/* Links */}
            <div className="flex flex-col gap-4 py-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <div className="absolute left-8">
                    <link.logo className="h-5 w-5" />
                  </div>
                  <div className="text-zinc-100">{link.name}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Contact/>
        <Footer
            copyright="Copyright © 2025 Daksh Singh. All rights reserved."
          />
    </>
  );
};

export default LinksPage;
