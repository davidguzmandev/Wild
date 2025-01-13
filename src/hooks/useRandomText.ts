import { useState, useEffect, useCallback } from 'react';

interface UseRandomTextProps {
  texts: string[];
  interval?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  cursor?: string;
}

const texts = [
  "Create.",
  "Code.",
  "Develop.",
  "Design.",
  "Imagine.",
  "Build.",
  "Innovate.",
  "Invent.",
  "Transform.",
  "Craft.",
];

export const useRandomText = ({ 
  texts: customTexts = texts, 
  interval = 3000,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
  cursor = "|"
}: UseRandomTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = customTexts[wordIndex];

  // Add cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleTyping = useCallback(() => {
    setCurrentText(prev => {
      if (isDeleting) {
        if (prev.length === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % customTexts.length);
          return '';
        }
        return prev.slice(0, -1);
      } else {
        if (prev === currentWord) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, delayBetweenWords);
          return prev;
        }
        return currentWord.slice(0, prev.length + 1);
      }
    });
  }, [currentWord, isDeleting, customTexts.length, delayBetweenWords]);

  useEffect(() => {
    if (isWaiting) return;

    const timer = setInterval(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(timer);
  }, [handleTyping, isDeleting, isWaiting, deletingSpeed, typingSpeed]);

  return `${currentText}${showCursor ? cursor : ''}`;
};