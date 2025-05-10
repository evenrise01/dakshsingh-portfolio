'use client'
import React, { ReactNode } from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  imageUrl: string;
  imageAlt?: string;
  overlayColor?: 'cosmic' | 'blue' | 'green' | 'purple' | 'warm';
  height?: 'small' | 'medium' | 'large' | 'full';
  children?: ReactNode;
  contentPosition?: 'top' | 'center' | 'bottom';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageUrl,
  imageAlt = "Background image",
  overlayColor = 'cosmic',
  height = 'medium',
  children,
  contentPosition = 'center',
}) => {
  // Define height variations
  const heightClasses = {
    small: 'h-[40vh] min-h-[300px] max-h-[400px]',
    medium: 'h-[60vh] min-h-[400px] max-h-[700px]',
    large: 'h-[80vh] min-h-[500px] max-h-[900px]',
    full: 'h-screen',
  };

  // Define color overlay variations
  const colorOverlays = {
    cosmic: (
      <>
        <div className="absolute inset-0 bg-amber-800/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
      </>
    ),
    blue: (
      <>
        <div className="absolute inset-0 bg-blue-900/15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
      </>
    ),
    green: (
      <>
        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
      </>
    ),
    purple: (
      <>
        <div className="absolute inset-0 bg-violet-900/15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-fuchsia-900/10 mix-blend-multiply"></div>
      </>
    ),
    warm: (
      <>
        <div className="absolute inset-0 bg-orange-800/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply"></div>
      </>
    ),
  };

  // Define content positioning
  const contentPositionClasses = {
    top: 'justify-start pt-32',
    center: 'justify-center',
    bottom: 'justify-end pb-24',
  };

  return (
    <div className="relative">
      {/* Background container with dynamic height */}
      <div className={`${heightClasses[height]} w-full relative overflow-hidden`}>
        {/* Background image */}
        <Image 
          src={imageUrl} 
          alt={imageAlt}
          className="object-cover object-center pointer-events-none select-none"
          priority
          fill
        />
        
        {/* Base overlay gradients for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
        {/* Color overlay based on theme */}
        {colorOverlays[overlayColor]}
        
        {/* Content container */}
        <div className={`absolute inset-0 flex flex-col items-center ${contentPositionClasses[contentPosition]} text-center px-4`}>
          {children}
        </div>
        
        {/* Bottom fade to content area */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroBackground;