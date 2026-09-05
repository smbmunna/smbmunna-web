import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const location = useLocation(); // Re-runs observer when page route changes

  useEffect(() => {
    // Wait for React DOM render to finish
    const timer = setTimeout(() => {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      };

      const observerOptions = {
        root: null, // Uses the scrollable container automatically
        threshold: 0.15, // Triggers when 15% of element is visible
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const elements = document.querySelectorAll(".reveal");

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-initialize every time route changes
}