import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useModalContext } from "./ModalContext";

interface CloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ModalClose({
  children,
  className = "",
  onClick,
  ...rest
}: CloseProps) {
  const { onClose } = useModalContext();
  return (
    <button
      type="button"
      className={className}
      aria-label="Close dialog"
      onClick={(e) => {
        onClose();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
