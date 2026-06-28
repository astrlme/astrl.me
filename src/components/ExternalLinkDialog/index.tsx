import { SquareArrowOutUpRight, ChevronRight } from "lucide-react";
import { Modal } from "../ui/Modal";
import { formatDisplayUrl } from "../../utils/linkUtils";

interface ExternalLinkDialogProps {
  url: string | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function ExternalLinkDialog({
  url,
  onClose,
  onConfirm,
}: ExternalLinkDialogProps) {
  return (
    <Modal.Root open={!!url} onClose={onClose}>
      <Modal.Title className="flex items-center gap-2 mb-1">
        <SquareArrowOutUpRight className="w-3.5 h-3.5 text-white/40" />
        Leaving this site
      </Modal.Title>

      <Modal.Description className="mb-5">
        You're visiting an external link
      </Modal.Description>

      <div className="border border-white/10 rounded-lg px-3 py-2.5 font-mono text-sm text-white/60 truncate mb-5">
        {url && formatDisplayUrl(url)}
      </div>

      <p className="text-xs text-white/40 mb-6">
        This is an external site. We are not responsible for its content or
        privacy practices.
      </p>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={onConfirm}
          className="w-full flex items-center justify-center gap-1 rounded-lg border border-white/20 py-2.5 text-sm text-white hover:bg-white/5 transition-colors"
        >
          Continue
          <ChevronRight className="w-4" />
        </button>
        <Modal.Close className="w-full rounded-lg py-2.5 text-sm text-white/40 hover:text-white/70 transition-colors">
          Cancel
        </Modal.Close>
      </div>
    </Modal.Root>
  );
}
