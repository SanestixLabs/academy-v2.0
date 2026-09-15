"use client";

import { useState, useEffect } from "react";

export function FomoTimer() {
  // 2 days from now in milliseconds
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return (
      <div className="flex items-center justify-center gap-2 text-brand-cyan mt-1 mb-4">
        <span className="flex flex-col items-center">
          <span className="text-xl font-bold font-display leading-none">{days.toString().padStart(2, '0')}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Days</span>
        </span>
        <span className="text-xl font-bold pb-3">:</span>
        <span className="flex flex-col items-center">
          <span className="text-xl font-bold font-display leading-none">{hours.toString().padStart(2, '0')}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Hrs</span>
        </span>
        <span className="text-xl font-bold pb-3">:</span>
        <span className="flex flex-col items-center">
          <span className="text-xl font-bold font-display leading-none">{minutes.toString().padStart(2, '0')}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Mins</span>
        </span>
        <span className="text-xl font-bold pb-3">:</span>
        <span className="flex flex-col items-center">
          <span className="text-xl font-bold font-display leading-none">{seconds.toString().padStart(2, '0')}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Secs</span>
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs font-bold text-red-500 uppercase tracking-widest animate-pulse">Offer expires in:</span>
      {formatTime(timeLeft)}
    </div>
  );
}
