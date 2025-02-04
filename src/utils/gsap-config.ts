// utils/gsap-config.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Registra el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const setupGSAP = () => {
  // Configura ScrollTrigger para trabajar con el scroll
  ScrollTrigger.defaults({
    toggleActions: "play none none reset", // Define cómo se comportan las animaciones
  });
};