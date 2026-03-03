import { useState, useEffect, useCallback } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function useTextScramble(finalText: string, options?: {
  speed?: number;
  delay?: number;
  trigger?: boolean;
}) {
  const { speed = 40, delay = 0, trigger = true } = options || {};
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalLength = finalText.length;

    const interval = setInterval(() => {
      setText(
        finalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return finalText[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= totalLength) {
        clearInterval(interval);
        setText(finalText);
        setIsComplete(true);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, speed]);

  useEffect(() => {
    if (!trigger) return;

    const timeout = setTimeout(() => {
      const cleanup = scramble();
      return cleanup;
    }, delay);

    return () => clearTimeout(timeout);
  }, [trigger, delay, scramble]);

  return { text, isComplete };
}
