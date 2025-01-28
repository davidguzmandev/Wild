import { useState, useEffect } from 'react';

interface UseRandomTextProps {
  words: string[];
  interval?: number;
  typingSpeed?: number;
  eraseSpeed?: number;
}

interface UseRandomTextReturn {
  currentWord: string;
  cursor: string;
}

const useRandomText = ({
  words,
  interval = 1000,
  typingSpeed = 50,
  eraseSpeed = 30,
}: UseRandomTextProps): UseRandomTextReturn => {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [cursor, setCursor] = useState<string>('|');

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((prev) => (prev === '|' ? '' : '|'));
    }, 500); // Cambia el estado del cursor cada 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  // Efecto para la escritura y borrado
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Escribir la palabra
        if (currentWord.length < words[currentIndex].length) {
          setCurrentWord((prev) => prev + words[currentIndex][currentWord.length]);
        } else {
          // Cambiar a modo borrado después de un intervalo
          setTimeout(() => {
            setIsTyping(false);
            setIsErasing(true);
          }, interval);
        }
      } else if (isErasing) {
        // Borrar la palabra
        if (currentWord.length > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
        } else {
          // Cambiar a la siguiente palabra y volver a modo escritura
          setIsErasing(false);
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isTyping ? typingSpeed : eraseSpeed); // Velocidad de escritura o borrado

    return () => clearInterval(typingInterval);
  }, [currentWord, currentIndex, isTyping, isErasing, words, interval, typingSpeed, eraseSpeed]);

  return { currentWord, cursor };
};

export default useRandomText;