import { ModalRoot } from "./ModalRoot";
import { ModalTitle } from "./ModalTitle";
import { ModalDescription } from "./ModalDescription";
import { ModalClose } from "./ModalClose";

export { ModalRoot, ModalTitle, ModalDescription, ModalClose };

// eslint-disable-next-line react-refresh/only-export-components
export const Modal = {
  Root: ModalRoot,
  Title: ModalTitle,
  Description: ModalDescription,
  Close: ModalClose,
} as const;
