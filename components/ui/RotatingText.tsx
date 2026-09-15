"use client";

import { useState, useEffect } from "react";

export function RotatingText({ words, className = "" }: { words: string[], className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  // Find the longest word to set the container width
  const longestWord = [...words].sort((a, b) => b.length - a.length)[0];

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
      {/* Invisible spacer to maintain layout width and height */}
      <span className="invisible whitespace-pre">
        {longestWord}
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          className={`absolute left-0 top-0 whitespace-pre transition-all duration-500 ease-in-out ${
            i === index
              ? "opacity-100 translate-y-0"
              : i === (index - 1 + words.length) % words.length
              ? "opacity-0 -translate-y-8"
              : "opacity-0 translate-y-8"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
