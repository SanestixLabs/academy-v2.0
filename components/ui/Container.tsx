import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Container({ as: Tag = "div", className = "", children }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-content px-5 md:px-8 ${className}`}>{children}</Tag>;
}
