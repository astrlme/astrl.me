import { useState, useLayoutEffect } from "react";

export function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = (e: MediaQueryListEvent | MediaQueryList) =>
      setMobile(e.matches);
    sync(mq);
    mq.addEventListener("change", sync as (e: MediaQueryListEvent) => void);
    return () =>
      mq.removeEventListener(
        "change",
        sync as (e: MediaQueryListEvent) => void,
      );
  }, []);

  return mobile;
}
