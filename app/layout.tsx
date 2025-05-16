import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Kbar from "@/components/kbar";
import { Outfit } from 'next/font/google';
import { NavbarApp } from "@/components/NavbarApp";
import { Tangerine } from 'next/font/google'; // Replace Meow_Script with Tangerine
import { Analytics } from "@vercel/analytics/next"
// Remove Meow_Script and add Tangerine instead
const tangerine = Tangerine({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Tangerine has both regular (400) and bold (700) weights
  variable: '--font-tangerine',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Daksh's Portfolio",
  description: "Modern & Minimalist Cosmic inspired portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.className} ${tangerine.variable}`}>
      <body className={`${outfit.className} antialiased relative h-full selection:bg-purple-600/20 selection:text-purple-400 dark:bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Kbar>
            <NavbarApp/>
            {children}
            <Analytics/>
          </Kbar>
        </ThemeProvider>
      </body>
    </html>
  );
}