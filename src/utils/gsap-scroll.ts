// utils/gsap-scroll.ts
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const setupGsapScroll = () => {
  useEffect(() => {
    // Registra el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para cada sección
    gsap.utils.toArray(".section").forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // La animación comienza cuando el elemento está al 80% del viewport
          end: "bottom 20%",
          scrub: true, // Hace que la animación siga el scroll
        },
      });
    });

    // Limpia las animaciones si es necesario
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};