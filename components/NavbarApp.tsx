"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect, SetStateAction } from "react";
import { useKBar } from "kbar"; // Import useKBar hook
import { CommandIcon } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { usePathname } from "next/navigation"; // Import to get current path
import ContactDrawer from "./ui/contact-drawer";

export function NavbarApp() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Resume",
      link: "#contact",
      isButton: true,
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname(); // Get current pathname

  // Get query function from kbar
  const { query } = useKBar();

  // Handle command bar button click
  const handleCommandButtonClick = () => {
    query.toggle(); // Toggle the kbar command palette
  };

  // Initialize active section based on pathname and handle hash changes
  useEffect(() => {
    // First check if the current path matches any nav item
    const pathItem = navItems.find(item => 
      !item.link.startsWith('#') && 
      (item.link === pathname || (item.link === '/' && pathname === ''))
    );

    if (pathItem) {
      setActiveSection(pathItem.link);
    } else {
      // Check if there's a hash in the URL
      const hash = window.location.hash;
      if (hash) {
        const hashItem = navItems.find(item => item.link === hash);
        if (hashItem) {
          setActiveSection(hashItem.link);
        }
      }
    }
  }, [pathname, navItems]);

  // Handle scroll and update active section for hash-based navigation
  useEffect(() => {
    const handleScroll = () => {
      // Only process hash-based sections
      const hashSections = navItems
        .filter(item => item.link.startsWith('#'))
        .map(item => item.link.replace('#', ''));

      if (hashSections.length === 0) return;

      // Check if we're already on a path-based page
      const currentPathItem = navItems.find(item => 
        !item.link.startsWith('#') && 
        (item.link === pathname || (item.link === '/' && pathname === ''))
      );

      // If we're on a specific page that's not the homepage, don't change active section based on scroll
      if (currentPathItem && currentPathItem.link !== '/') return;

      // Find the section currently in view
      let currentSection = null;
      let minDistance = Infinity;

      for (const sectionId of hashSections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);
          
          // Find the section closest to the top of the viewport
          if (distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            currentSection = '#' + sectionId;
          }
        }
      }

      if (currentSection && (!currentPathItem || currentPathItem.link === '/')) {
        setActiveSection(currentSection);
      } else if (currentPathItem) {
        setActiveSection(currentPathItem.link);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navItems]);

  // Handle navigation item click
  const handleNavItemClick = (link: SetStateAction<string>) => {
    setActiveSection(link);
    setIsMobileMenuOpen(false);
  };

  // Custom NavItems component with active section highlighting
  const CustomNavItems = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative flex items-center space-x-1">
        {navItems.map((item, idx) => {
          // Special case for Contact item
          if (item.name === "Contact") {
            return (
              <NavbarButton
                key={`nav-item-${idx}`}
                onClick={() => setIsDrawerOpen(true)}
                variant="primary"
                className="ml-3"
              >
                {item.name}
              </NavbarButton>
            );
          }
          
          // Regular button items (with border beam effect)
          else if (item.isButton) {
            return (
              <NavbarButton
                key={`nav-item-${idx}`}
                href={item.link}
                onClick={() => handleNavItemClick(item.link)}
                variant="secondary"
                className="ml-3"
              >
                <BorderBeam
                  duration={4}
                  size={50}
                  className="from-transparent via-green-500 to-transparent"
                />
                {item.name}
              </NavbarButton>
            );
          } 
          // Regular navigation links
          else {
            return (
              <a
                key={`nav-item-${idx}`}
                href={item.link}
                onClick={() => handleNavItemClick(item.link)}
                className={`relative px-4 py-2 ${
                  activeSection === item.link
                    ? "text-black font-medium dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {activeSection === item.link && (
                  <div className="absolute inset-0 bg-gray-100 rounded-full dark:bg-neutral-800" />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          }
        })}
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <CustomNavItems />
          <div className="flex items-center">
            <NavbarButton
              variant="secondary"
              onClick={handleCommandButtonClick}
              className="flex items-center gap-2"
            >
              <CommandIcon size={18} />
              <span className="hidden sm:inline-block">Command</span>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              // Special case for Contact item
              if (item.name === "Contact") {
                return (
                  <NavbarButton
                    key={`mobile-button-${idx}`}
                    onClick={() => setIsDrawerOpen(true)}
                    variant="primary"
                    className="w-full"
                  >
                    {item.name}
                  </NavbarButton>
                );
              }
              // Regular button items (with border beam effect)
              else if (item.isButton) {
                return (
                  <NavbarButton
                    key={`mobile-button-${idx}`}
                    href={item.link}
                    onClick={() => handleNavItemClick(item.link)}
                    variant="secondary"
                    className="w-full"
                  >
                    <BorderBeam
                      duration={4}
                      size={100}
                      reverse
                      className="from-transparent via-green-500 to-transparent"
                    />
                    {item.name}
                  </NavbarButton>
                );
              } 
              // Regular navigation links
              else {
                return (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => handleNavItemClick(item.link)}
                    className={`relative w-full py-2 ${
                      activeSection === item.link
                        ? "text-black font-medium dark:text-white"
                        : "text-neutral-600 dark:text-neutral-300"
                    }`}
                  >
                    <span className="block">{item.name}</span>
                  </a>
                );
              }
            })}
            <NavbarButton
              onClick={handleCommandButtonClick}
              variant="secondary"
              className="w-full flex items-center justify-center gap-2"
            >
              <CommandIcon size={18} /> Command
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}