import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Verificar si ya hay desplazamiento al cargar la página
    handleScroll(); // Esto verifica inmediatamente el estado al cargar

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};