'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// More gentle spring config for stickier movement
const SPRING_CONFIG = { damping: 50, stiffness: 200 };

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "distance"> {
  children: React.ReactNode;
  distance?: number;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(({ 
  children, 
  distance = 0.6,
  className,
  onClick,
  ...rest 
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const combinedRef = (node: HTMLButtonElement) => {
    buttonRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    // Track if the cursor is near the button even when not hovering
    const isNearButton = (mouseX: number, mouseY: number, rect: DOMRect, threshold: number = 100) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < threshold;
    };

    let magnetismTimeoutId: NodeJS.Timeout | null = null;
    let isSticky = false;

    const calculateDistance = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Active magnetism when hovered or in sticky mode
        if (isHovered || isSticky) {
          x.set(distanceX * distance);
          y.set(distanceY * distance);
          
          // When mouse leaves the hover state, set a timeout to maintain stickiness
          if (!isHovered && isSticky) {
            // Check if cursor is still near the button
            if (!isNearButton(e.clientX, e.clientY, rect, 150)) {
              isSticky = false;
              x.set(0);
              y.set(0);
            }
          }
        } else if (isNearButton(e.clientX, e.clientY, rect, 100)) {
          // Slight pull even when not directly hovering but nearby
          x.set(distanceX * distance * 0.3);
          y.set(distanceY * distance * 0.3);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    const handleMouseLeave = () => {
      // Set sticky mode when mouse leaves
      isSticky = true;
      
      // Clear any existing timeout
      if (magnetismTimeoutId) {
        clearTimeout(magnetismTimeoutId);
      }
      
      // Set timeout to remove stickiness after 800ms
      magnetismTimeoutId = setTimeout(() => {
        isSticky = false;
        x.set(0);
        y.set(0);
      }, 800);
    };

    document.addEventListener('mousemove', calculateDistance);
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (magnetismTimeoutId) {
        clearTimeout(magnetismTimeoutId);
      }
    };
  }, [distance, isHovered, x, y]);

  return (
    <motion.button
      ref={combinedRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: springX,
        y: springY
      }}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-3 px-8 text-center font-semibold text-lg",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight size={20} />
      </div>
    </motion.button>
  );
});

MagneticButton.displayName = "MagneticButton";

export { MagneticButton };