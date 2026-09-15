import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "neutral";
  className?: string;
};

export function Badge({ children, tone = "brand", className = "" }: BadgeProps) {
  const toneClasses =
    tone === "brand"
      ? "bg-brand-50 text-brand-blue"
      : "bg-surface-alt text-ink-soft";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
