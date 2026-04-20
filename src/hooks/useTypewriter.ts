import { useState, useEffect, useRef, useCallback } from 'react';

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPause = useCallback(() => {
    if (pauseRef.current !== null) {
      clearTimeout(pauseRef.current);
      pauseRef.current = null;
    }
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      pauseRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
      return clearPause;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setText(isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [words, wordIndex, text, isDeleting, pauseDuration, typingSpeed, deletingSpeed, clearPause]);

  useEffect(() => clearPause, [clearPause]);

  return { text };
}