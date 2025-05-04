"use client";
import {
  type Action,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar";
import { motion, AnimatePresence } from "framer-motion";
import RenderResults from "./render-results";
import { IoSearch } from "react-icons/io5";


export default function KBar({ children }: { children: React.ReactNode }) {

  const actions: Action[] = [
    //Navigation Section
    {
      id: "home",
      name: "Home",
      subtitle: "Welcome to my forever work-in-progress!",
      shortcut: ["h"],
      keywords: "home, main, landing, page, start, welcome, dashboard",
      section: "Navigation",
      perform: () => {
        // Navigate to home
      },
    },
    {
      id: "projects",
      name: "Projects",
      subtitle: "Showcase of my projects",
      shortcut: ["p"],
      keywords: "projects, portfolio, work, showcase, examples, demos",
      section: "Navigation",
      perform: () => {
        // Navigate to projects
      },
    },
    {
      id: "links",
      name: "Links",
      subtitle: "All my links are here",
      shortcut: ["l"],
      keywords: "links, resources, bookmarks, urls, websites, references",
      section: "Navigation",
      perform: () => {
        // Navigate to links
      },
    },
    {
      id: "about",
      name: "About",
      subtitle: "Learn more about me!",
      shortcut: ["a"],
      keywords: "about, bio, profile, information, personal, background, story",
      section: "Navigation",
      perform: () => {
        // Navigate to about
      },
    },
    
    //General Section
    {
      id: "resume",
      name: "Resume",
      subtitle: "View my resume",
      shortcut: ["r"],
      keywords: "resume, cv, curriculum vitae, experience, qualifications, job, career",
      section: "General",
      perform: () => {
        // Open resume
      },
    },
    
    //Social Section
    {
      id: "viewGithub",
      name: "Github",
      subtitle: "View my Github profile",
      shortcut: ["g", "h"],
      keywords: "github, git, code, repository, source, projects, development, open source",
      section: "Social",
      perform: () => {
        // Open GitHub profile
      },
    },
    {
      id: "viewLinkedIn",
      name: "LinkedIn",
      subtitle: "View my LinkedIn profile",
      shortcut: ["g", "l"],
      keywords: "linkedin, social, professional, network, career, job, profile, connect",
      section: "Social",
      perform: () => {
        // Open LinkedIn profile
      },
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <ActualComponent>{children}</ActualComponent>
    </KBarProvider>
  );
}

const ActualComponent = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/70 !p-0 backdrop-blur-sm">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-12 w-full max-w-xl"
            >
              <KBarAnimator className="relative overflow-hidden rounded-lg border border-gray-800 bg-[#151515] shadow-2xl">
                <div>
                  <div className="relative">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-500">
                      <IoSearch/>
                    </div>
                    <KBarSearch
                      className="w-full border-b border-none border-gray-800 bg-[#151515] py-3.5 pr-6 pl-12 text-sm text-gray-300 placeholder-gray-500 outline-none focus:ring-0 focus:outline-none"
                      placeholder="Type a command or search..."
                    />
                    <div className="absolute top-1/2 right-4 flex -translate-y-1/2 transform items-center space-x-2 text-gray-500">
                      <kbd className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                        ⌘
                      </kbd>
                      <kbd className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                        K
                      </kbd>
                    </div>
                  </div>
                  <RenderResults />
                  <div className="flex justify-between border-t border-gray-800 bg-[#151515] px-3 py-2.5 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <kbd className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                          ↑
                        </kbd>
                        <kbd className="ml-1 rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                          ↓
                        </kbd>
                      </div>
                      <span>to navigate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <kbd className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                        ↵
                      </kbd>
                      <span>to select</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <kbd className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">
                        Esc
                      </kbd>
                      <span>to close</span>
                    </div>
                  </div>
                </div>
              </KBarAnimator>
            </motion.div>
          </AnimatePresence>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </>
  );
};