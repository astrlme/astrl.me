import type { ReactNode } from "react";
import { useModalContext } from "./ModalContext";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export function ModalDescription({
  children,
  className = "",
}: DescriptionProps) {
  const { descriptionId } = useModalContext();
  return (
    <p id={descriptionId} className={`text-xs text-white/40 ${className}`}>
      {children}
    </p>
  );
}
