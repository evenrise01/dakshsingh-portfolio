"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { useKBar } from "kbar"; // Import useKBar hook
import { CommandIcon } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

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
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Resume",
      link: "#contact",
      isButton: true,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Get query function from kbar
  const { query } = useKBar();

  // Handle command bar button click
  const handleCommandButtonClick = () => {
    query.toggle(); // Toggle the kbar command palette
  };

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Handle navigation item click
  const handleNavItemClick = (sectionId: string) => {
    setActiveSection(sectionId.replace("#", ""));
    setIsMobileMenuOpen(false);
  };

  // Custom NavItems component with active section highlighting
  const CustomNavItems = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative flex items-center space-x-1">
        {navItems.map((item, idx) =>
          item.isButton ? (
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
                reverse
                className="from-transparent via-green-500 to-transparent"
              />
              {item.name}
            </NavbarButton>
          ) : (
            <a
              key={`nav-item-${idx}`}
              href={item.link}
              onClick={() => handleNavItemClick(item.link)}
              className={`relative px-4 py-2 ${
                activeSection === item.link.replace("#", "")
                  ? "text-black font-medium dark:text-white"
                  : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {activeSection === item.link.replace("#", "") && (
                <div className="absolute inset-0 bg-gray-100 rounded-full dark:bg-neutral-800" />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          )
        )}
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
            {navItems.map((item, idx) =>
              item.isButton ? (
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
              ) : (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => handleNavItemClick(item.link)}
                  className={`relative w-full py-2 ${
                    activeSection === item.link.replace("#", "")
                      ? "text-black font-medium dark:text-white"
                      : "text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  <span className="block">{item.name}</span>
                </a>
              )
            )}
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
    </div>
  );
}
