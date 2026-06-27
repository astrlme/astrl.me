import { type ReactNode, useId, useState } from "react";
import { Drawer } from "vaul";
import { ModalPortal } from "./ModalPortal";
import { ModalContext, type ModalContextValue } from "./ModalContext";
import { useIsMobile } from "./useIsMobile";

export interface RootProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export function ModalRoot({
  open,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: RootProps) {
  const titleId = useId();
  const descriptionId = useId();
  const isMobile = useIsMobile();

  const [snapshot, setSnapshot] = useState<ReactNode>(children);
  if (open && snapshot !== children) setSnapshot(children);
  const stableChildren = open ? children : snapshot;

  const ctx: ModalContextValue = { onClose, titleId, descriptionId };

  if (isMobile) {
    return (
      <ModalContext.Provider value={ctx}>
        <Drawer.Root
          open={open}
          onOpenChange={(o) => !o && onClose()}
          dismissible={closeOnOverlayClick}
        >
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
            <Drawer.Content
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className="
                fixed bottom-0 left-0 right-0 z-50
                flex flex-col
                h-auto max-h-[96%]
                rounded-t-3xl pb-10 pt-4 px-6
                bg-[#111] border-t border-white/10
                outline-none
              "
            >
              <Drawer.Handle className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/20" />
              <Drawer.Title className="sr-only">Dialog</Drawer.Title>
              {stableChildren}
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </ModalContext.Provider>
    );
  }

  return (
    <ModalContext.Provider value={ctx}>
      <ModalPortal
        open={open}
        onClose={onClose}
        titleId={titleId}
        descriptionId={descriptionId}
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEsc={closeOnEsc}
      >
        {stableChildren}
      </ModalPortal>
    </ModalContext.Provider>
  );
}
