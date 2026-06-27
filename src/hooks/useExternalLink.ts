import { useState, useCallback } from "react";
import { openExternalUrl } from "../utils/linkUtils";

interface UseExternalLinkReturn {
  pendingUrl: string | null;
  openDialog: (url: string) => void;
  closeDialog: () => void;
  confirm: () => void;
}

export function useExternalLink(): UseExternalLinkReturn {
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const openDialog = useCallback((url: string) => {
    setPendingUrl(url);
  }, []);

  const closeDialog = useCallback(() => {
    setPendingUrl(null);
  }, []);

  const confirm = useCallback(() => {
    if (pendingUrl) openExternalUrl(pendingUrl);
    setPendingUrl(null);
  }, [pendingUrl]);

  return { pendingUrl, openDialog, closeDialog, confirm };
}
