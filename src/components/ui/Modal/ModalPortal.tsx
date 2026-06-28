import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { useFocusTrap } from "../../../hooks/useFocusTrap";
import { useScrollLock } from "../../../hooks/useScrollLock";

export interface ModalPortalProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  descriptionId: string;
  children: ReactNode;
  closeOnOverlayClick: boolean;
  closeOnEsc: boolean;
}

export function ModalPortal({
  open,
  onClose,
  titleId,
  descriptionId,
  children,
  closeOnOverlayClick,
  closeOnEsc,
}: ModalPortalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(open);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setVisible(true);
  }

  const closing = visible && !open;

  const handleBackdropAnimationEnd = useCallback(() => {
    if (!open) setVisible(false);
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, closeOnEsc]);

  useScrollLock(open);
  useFocusTrap(panelRef, open);

  if (!visible) return null;

  return createPortal(
    <>
      <div
        data-closing={closing ? "true" : undefined}
        onAnimationEnd={handleBackdropAnimationEnd}
        className="
          fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
          animate-[fadeIn_220ms_ease_forwards]
          data-closing:animate-[fadeOut_220ms_ease_forwards]
        "
        aria-hidden="true"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          data-closing={closing ? "true" : undefined}
          tabIndex={-1}
          className="
            pointer-events-auto
            w-[min(448px,calc(100vw-2rem))]
            rounded-2xl p-6
            bg-[#111] border border-white/10 shadow-2xl
            outline-none
            animate-[modalIn_220ms_cubic-bezier(0.16,1,0.3,1)_forwards]
            data-closing:animate-[modalOut_220ms_cubic-bezier(0.16,1,0.3,1)_forwards]
          "
        >
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
}
