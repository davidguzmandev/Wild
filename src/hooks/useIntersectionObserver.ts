import { useState, useEffect } from "react";

export const useIntersectionObserver = (threshold: number = 0.5, id): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );
    // Obtener el elemento por su id
    const section = document.querySelector(`#${id}`);
    if (section && !isMobile) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, [threshold, isMobile]);

  return isMobile ? true : isVisible;
};
