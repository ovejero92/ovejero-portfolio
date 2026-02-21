'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedTextProps {
  words: string[];
  pauseDuration?: number; 
  className?: string; 
  symbols?: string[]; 
}

const RAMSINA_SYMBOLS = 'フルスタックおよびビデオゲームプログラマー'//'ܟܠ ܒܪܢܫܐ ܒܪܝܠܗ ܚܐܪܐ ܘܒܪܒܪ ܓܘ ܐܝܩܪܐ ܘܙܕܩܐ'
  .split('')
  .filter(c => c !== ' ');

const DEFAULT_SYMBOLS = RAMSINA_SYMBOLS;

export default function AnimatedText({
  words,
  pauseDuration = 2000,
  className,
  symbols,
}: AnimatedTextProps) {
  const [display, setDisplay] = useState('');
  const wordIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pool = symbols && symbols.length > 0 ? symbols : DEFAULT_SYMBOLS;

  const scrambleTo = (target: string) => {
    const length = target.length;
    let iteration = 0;

    const step = () => {
      let result = '';
      for (let i = 0; i < length; i++) {
        if (i < iteration) {
          result += target[i];
        } else {
          result += pool[Math.floor(Math.random() * pool.length)];
        }
      }
      setDisplay(result);

      if (iteration < length) {
        iteration += 1;
        timeoutRef.current = setTimeout(step, 50);
      } else {
        timeoutRef.current = setTimeout(nextWord, pauseDuration);
      }
    };

    step();
  };

  const nextWord = () => {
    wordIndex.current = (wordIndex.current + 1) % words.length;
    scrambleTo(words[wordIndex.current]);
  };

  useEffect(() => {
    scrambleTo(words[wordIndex.current]);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words]);

  const classes = ['font-mono', 'text-primary', 'inline-block', className]
    .filter(Boolean)
    .join(' ');
  return <span className={classes}>{display}</span>;
}
