"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Linkedin,
  Github,
  Twitter,
  Mail,
  LucideCalendar,
} from "lucide-react";

import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { BorderBeam } from "./magicui/border-beam";
import { MagneticButton } from "./ui/magnetic-button";
import { TextShimmer } from "./ui/text-shimmer";
import AnimatedTextCycle from "./ui/animated-text-cycle";

export default function ModernContactSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"connect" | "message">("connect");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // Rotating text phrases
  const conceptTexts = ["CONCEPT", "IDEA", "VISION", "DREAM"];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        setIsDrawerOpen(false);
      }, 3000);
    }, 800);
  };


  return (
    <section className="relative z-0 mt-40 flex w-full justify-center overflow-x-hidden bg-[url('/cta.avif')] bg-cover bg-center px-4 py-20">
      {/* Background with subtle texture/pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center lg:mx-0">
        <h1 className="text-4xl md:text-6xl  mb-4 tracking-tight">
          From <AnimatedTextCycle words={["concept", "vision" ,"dream","idea"]}/> to creation
        </h1>
        <h2 className="text-3xl md:text-5xl mb-16">
          Let's make it happen!
        </h2>

        <MagneticButton onClick={() => setIsDrawerOpen(true)} className="mb-8">
          Get in touch
        </MagneticButton>

        <TextShimmer className="tracking-wide text-base font-semibold lg:text-2xl">I'm available for full-time roles & freelance projects.</TextShimmer>
        <p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
          I thrive on crafting dynamic web applications, and delivering seamless
          user experiences.
        </p>

        
        {/* <InteractiveHoverButton
          onClick={() => setIsDrawerOpen(true)}
          className="text-lg transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </InteractiveHoverButton> */}
      </div>

      {/* Contact drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 w-full md:w-[600px] md:left-1/2 md:-translate-x-1/2 z-50 bg-neutral-900 border rounded-t-[10px] p-6 pb-8"
            >
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-pink-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                className="from-transparent via-green-500 to-transparent"
              />
              <div className="w-full flex justify-center mb-4">
                <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              {/* Tab navigation */}
              <div className="text-muted-foreground h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-2 bg-neutral-800/50">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "connect"}
                  aria-controls="connect-content"
                  data-state={activeTab === "connect" ? "active" : "inactive"}
                  className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 ${
                    activeTab === "connect"
                      ? "dark:data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30"
                      : "dark:text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("connect")}
                  tabIndex={0}
                >
                  Quick connect
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "message"}
                  aria-controls="message-content"
                  data-state={activeTab === "message" ? "active" : "inactive"}
                  className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 ${
                    activeTab === "message"
                      ? "dark:data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30"
                      : "dark:text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("message")}
                  tabIndex={0}
                >
                  Send a message
                </button>
              </div>

              {/* Quick connect content */}
              {activeTab === "connect" && (
                <div className="flex-1 outline-none mt-6 focus-visible:outline-none">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                      className="group block overflow-hidden rounded-lg border border-neutral-700/50 bg-neutral-800/30 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-900/5"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email Daksh Singh"
                      href="mailto:dakshsingh.shanu@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
                    >
                      <div className="flex gap-x-3 border-b border-neutral-700/30 bg-gradient-to-r to-transparent p-4 from-blue-900/20">
                        <Mail />
                        <h3 className="mb-1 text-base font-medium text-white">
                          Email
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
                          dakshsingh.shanu@gmail.com
                        </div>
                        <p className="mt-2 text-sm text-neutral-400">
                          Send me an email directly
                        </p>
                      </div>
                    </a>

                    <a
                      className="group block overflow-hidden rounded-lg border border-neutral-700/50 bg-neutral-800/30 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-900/5"
                      target="/cal"
                      rel="noopener noreferrer"
                      aria-label="Book a call"
                    >
                      <div className="flex gap-x-3 border-b border-neutral-700/30 bg-gradient-to-r to-transparent p-4 from-purple-900/20">
                        <LucideCalendar />
                        <h3 className="mb-1 text-base font-medium text-white">
                          Schedule
                        </h3>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
                          Book a time slot
                        </div>
                        <p className="mt-2 text-sm text-neutral-400">
                          Book a call on my calendar
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Status indicator - now outside the grid and full width */}
                  <div className="mt-4 w-full flex items-center justify-center rounded-md border border-green-900/30 bg-green-900/10 p-2.5 text-center">
                    <div className="mr-2 flex h-3 w-3 items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></div>
                    </div>
                    <p className="text-sm text-green-300">
                      Currently available for new opportunities
                    </p>
                  </div>
                </div>
              )}

              {/* Message form */}
              {activeTab === "message" && (
                <div>
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-64 flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-blue-400 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-gray-400">
                        I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 my-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <label
                            htmlFor="name"
                            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive text-neutral-300"
                          >
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-neutral-700 bg-neutral-800/50 text-white placeholder:text-neutral-500 focus-visible:ring-blue-500"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label
                            htmlFor="email"
                            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive text-neutral-300"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-neutral-700 bg-neutral-800/50 text-white placeholder:text-neutral-500 focus-visible:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="message"
                            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive text-neutral-300"
                          >
                            Message
                          </label>
                        </div>
                        <div className="relative">
                          <Textarea
                            id="message"
                            placeholder="What would you like to discuss?"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            required
                            className="min-h-32 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                            {formData.message.length}/1000
                          </div>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 font-normal text-white transition-all duration-300 hover:from-blue-500 hover:to-indigo-500"
                      >
                        <Send className="mr-2 h-4 w-4" /> Send message
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
