import { useEffect, useRef, useState } from "react";

interface ScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollObserver<T extends HTMLElement = HTMLElement>(
  options: ScrollObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    once = false,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [element, setElement] = useState<T | null>(null);
  
  const callbackRef = useRef<IntersectionObserverCallback>((entries) => {
    const [entry] = entries;
    const shouldBeVisible = entry.isIntersecting;
    
    if (once && hasTriggered) return;
    
    if (shouldBeVisible) {
      setIsVisible(true);
      if (once) setHasTriggered(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    if (!element) return;
    
    const observer = new IntersectionObserver(callbackRef.current, {
      threshold,
      rootMargin,
    });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, threshold, rootMargin]);

  // Function to calculate how much of the element is in the viewport (0-1)
  const getVisibilityRatio = () => {
    if (!element) return 0;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate how much of the element is in the viewport
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const elementHeight = rect.height;
    
    return Math.max(0, Math.min(1, visibleHeight / elementHeight));
  };
  
  return { 
    ref: setElement as React.Dispatch<React.SetStateAction<T | null>>, 
    isVisible,
    visibilityRatio: getVisibilityRatio(),
  };
}

// Specialized hook for scroll-based animations between projects
export function useProjectScroll(
  sectionRef: React.RefObject<HTMLElement>,
  totalProjects: number
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      
      // Calculate progress through the section (0-1)
      const progress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      setScrollProgress(progress);
      
      // Calculate which project should be active
      const projectIndex = Math.min(
        totalProjects - 1,
        Math.floor(progress * totalProjects)
      );
      
      setActiveIndex(projectIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef, totalProjects]);
  
  return { activeIndex, scrollProgress };
}