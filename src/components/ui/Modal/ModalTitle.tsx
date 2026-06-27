import type { ReactNode } from "react";
import { useModalContext } from "./ModalContext";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function ModalTitle({ children, className = "" }: TitleProps) {
  const { titleId } = useModalContext();
  return (
    <h2
      id={titleId}
      className={`text-sm font-medium text-white/90 ${className}`}
    >
      {children}
    </h2>
  );
}
