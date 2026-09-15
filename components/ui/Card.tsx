import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverClasses = hover
    ? "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(11,18,32,0.04),0_16px_32px_-16px_rgba(11,18,32,0.18)]"
    : "";
  return (
    <div
      className={`rounded-2xl border border-surface-border bg-white p-6 shadow-card ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
