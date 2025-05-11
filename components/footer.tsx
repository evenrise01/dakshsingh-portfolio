"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Blocks, Calendar, Codepen, Github, Link, Linkedin, LucideIcon, LucideUser, Mail, PenBoxIcon, Webhook } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  copyright: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, copyright, ...props }, ref) => {
    const brand = {
      name: "Daksh Singh",
      description: "Help you create experiences where aesthetics & functionality seamlessly come together.",
    }
    
    const socialLinks = [
      {
        name: "Github",
        href: "https://github.com/evenrise01",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/daksh-singh-25646918a/",
      },
    ]
    
    const columns = [
      {
        title: "General",
        links: [
          {
            name: "Home",
            Icon: Blocks,
            href: "/",
          },
          {
            name: "About",
            Icon: LucideUser,
            href: "/about",
          },
          {
            name: "Projects",
            Icon: Webhook,
            href: "/projects",
          },
        
        ],
      },
      {
        title: "The Website",
        links: [
          {
            name: "Bucket List",
            Icon: PenBoxIcon,
            href: "/bucket-list",
          },
          {
            name: "Links",
            Icon: Link,
            href: "/links",
          },
          {
            name: "Book a call",
            Icon: Calendar,
            href: "/calendar",
          },
        ],
      },
    ]
    return (
      <div
        ref={ref}
        className={cn("pt-16", className)}
        {...props}
      >
        <div className="h-px w-full bg-gradient-to-r from-black via-neutral-600 to-black"></div>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0">
            <div className="lg:col-span-4">
              <h2 className="text-xl font-semibold">
                {brand.name}
              </h2>
              <p className="text-sm text-foreground/60 mt-2">
                {brand.description}
              </p>

              <p className="text-sm font-light text-foreground/55 mt-4">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-foreground/90 transition-colors"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-8 gap-x-4 gap-y-10">
              {columns.map(({ title, links }) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-3">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group flex items-center"
                        >
                          <Icon className="stroke-2 h-4 w-4 mr-2 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                          <span className="relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-semibold mb-4">Contact</h3>
                <p className="text-sm text-foreground/70">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                <div className="mt-3 flex items-center gap-2 text-blue-500">
                  <Mail className="h-4 w-4" />
                  <a 
                    className="text-sm after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100" 
                    href="mailto:dakshsingh.shanu@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!" 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    dakshsingh.shanu@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {copyright && (
            <div className="mt-12 border-t pt-6">
              <p className="text-xs text-foreground/55">{copyright}</p>
            </div>
          )}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-black via-neutral-600 to-black"></div>
      </div>
    );
  }
);

Footer.displayName = "Footer";