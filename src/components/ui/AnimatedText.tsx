'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedTextProps {
  words: string[];
  pauseDuration?: number; // how long to hold a full word before animating to next
  className?: string; // optional class to style the text (font, color, etc.)
  symbols?: string[]; // optional custom characters used during scramble
}

// Ramsina sample text split into characters (spaces removed)
const RAMSINA_SYMBOLS = 'フルスタックおよびビデオゲームプログラマー'//'ܟܠ ܒܪܢܫܐ ܒܪܝܠܗ ܚܐܪܐ ܘܒܪܒܪ ܓܘ ܐܝܩܪܐ ܘܙܕܩܐ'
  .split('')
  .filter(c => c !== ' ');

// default characters used for the scrambling effect (Ramsina)
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

  // use provided symbols array or fall back to default
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
        // once full word is shown, wait then move to next
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
    // start with first word
    scrambleTo(words[wordIndex.current]);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words]);

  // merge provided className for flexibility (e.g. use allkin-regular)
  const classes = ['font-mono', 'text-primary', 'inline-block', className]
    .filter(Boolean)
    .join(' ');
  return <span className={classes}>{display}</span>;
}
