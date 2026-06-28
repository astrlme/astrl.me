import type { ReactNode } from "react";
import { useModalContext } from "./ModalContext";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function ModalTitle({ children, className = "" }: TitleProps) {
  const { titleId } = useModalContext();
  return (
    <h2 id={titleId} className={`text-lg text-white ${className}`}>
      {children}
    </h2>
  );
}
