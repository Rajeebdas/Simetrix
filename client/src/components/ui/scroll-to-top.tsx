import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    const scrollToTop = () => {
      console.log(`Scrolling to top for route: ${location}`);
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        // Try smooth scrolling first, fallback to instant scroll
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, 0);
        }
      });
    };

    // Disable browser's scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Small delay to ensure route transition is complete
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
} 