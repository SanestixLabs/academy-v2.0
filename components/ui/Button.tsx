import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-deep text-white shadow-[0_2px_10px_rgba(4,67,44,0.15)] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(4,67,44,0.25)] active:translate-y-0 active:shadow-sm border border-brand-deep",
  secondary:
    "bg-white text-ink border border-surface-border shadow-sm hover:border-ink/20 hover:bg-surface-alt hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink hover:bg-surface-alt hover:text-ink active:scale-95",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap";

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({ href, variant = "primary", children, className = "", external }: LinkButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
