import { useState, useEffect } from 'react';

interface Word {
  text: string;
}

interface CarouselProps {
  words: Word[];
}

export const useVerticalCarousel = ({ words }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Cambia el intervalo a tu gusto

    return () => clearInterval(interval);
  }, [words]);

  const currentWord = words[currentIndex];

  return {
    currentWord,
  };
};