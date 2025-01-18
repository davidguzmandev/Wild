import { useState, useEffect } from "react";

// Definir el tipo para el estado de visibilidad
export const useIntersectionObserver = (threshold: number = 0.5): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
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

    const section = document.querySelector("#services");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold]);

  return isVisible;
};
