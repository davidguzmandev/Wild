import { useState, useEffect } from "react";

export const useIntersectionObserver = (threshold: number = 1, id: string): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);  // Estado para evitar que la animación se repita

  useEffect(() => {
    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting");
            if (!hasAnimated) {  // Solo activa la animación si no se ha animado ya
              console.log("Si lo veo");
              setIsVisible(true);
              setHasAnimated(true);  // Marca que la animación ya se ejecutó
            }
          } else {
            console.log("No Intersecting");
            setIsVisible(false);
              // Se establece a false cuando el elemento deja de ser visible
          }
        });
      },
      { threshold }  // Umbral de visibilidad (porcentaje de la sección visible)
    );

    // Obtener el elemento por su id
    const section: Element | null = document.getElementById(id);
    if (section) {
      
      setTimeout(() => {
        console.log(section);
          observer.observe(section);
      }, 500); // Retrasa la observación 100 milisegundos
    }

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      if (section) {
        console.log("limpiando observer");
        observer.unobserve(section);  // Deja de observar el elemento
      }
    };
  }, [threshold]); 

  return isVisible;  // Devuelve el estado de visibilidad del elemento
};
