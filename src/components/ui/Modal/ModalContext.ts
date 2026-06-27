import { createContext, useContext } from "react";

export interface ModalContextValue {
  onClose: () => void;
  titleId: string;
  descriptionId: string;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalContext(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error("Modal subcomponents must be used inside <Modal.Root>");
  return ctx;
}
