// app/fonts.ts
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

// Load Outfit from Google Fonts
export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Load NyghtSerif locally (since it's not available on Google Fonts)
export const nyghtSerif = localFont({
  src: [
    {
      path: '../public/fonts/NyghtSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NyghtSerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add more weights if needed
  ],
  display: 'swap',
  variable: '--font-nyght-serif',
});