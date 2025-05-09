import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Kbar from "@/components/kbar";
import { Outfit } from 'next/font/google';
import { NavbarApp } from "@/components/NavbarApp";


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
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Kbar>
            <NavbarApp/>
            {children}
          </Kbar>
        </ThemeProvider>
      </body>
    </html>
  );
}