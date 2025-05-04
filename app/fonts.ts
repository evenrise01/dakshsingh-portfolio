// app/fonts.ts
import { Outfit } from 'next/font/google';

// Load Outfit from Google Fonts
export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});
