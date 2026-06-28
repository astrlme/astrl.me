import { AlertTriangle, ChevronRight } from "lucide-react";
import { Modal } from "../ui/Modal";
import { openExternalUrl } from "../../utils/linkUtils";

interface LabsDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LabsDialog({ open, onClose }: LabsDialogProps) {
  const handleConfirm = () => {
    openExternalUrl("https://labs.astrl.me");
    onClose();
  };

  return (
    <Modal.Root open={open} onClose={onClose}>
      <Modal.Title className="flex items-center gap-2 mb-1">
        <AlertTriangle className="w-4 text-yellow-500" />
        It's too dangerous to go there!
      </Modal.Title>

      <Modal.Description className="mb-5">
        astrl.me labs is currently under construction
      </Modal.Description>

      <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-lg px-3 py-2.5 font-mono text-sm text-yellow-500/80 mb-5 space-y-1">
        <div>$ status --check labs.astrl.me</div>
        <div className="text-white/60">status: coming_soon</div>
        <div className="text-white/60">hazard: radioactive_pixels</div>
      </div>

      <p className="text-xs text-white/40 mb-6">
        {/*<AlertTriangle className="w-4 text-yellow-500" />*/}
        Proceed at your own risk. We are not responsible for lost socks or
        sanity in the labs zone.
      </p>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full flex items-center justify-center gap-1 rounded-lg border border-white/20 py-2.5 text-sm text-white hover:bg-white/5 transition-colors"
        >
          Enter anyway
          <ChevronRight className="w-4" />
        </button>
        <Modal.Close className="w-full rounded-lg py-2.5 text-sm text-white/40 hover:text-white/70 transition-colors">
          Cancel
        </Modal.Close>
      </div>
    </Modal.Root>
  );
}
