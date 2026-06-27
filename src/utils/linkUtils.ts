export function isExternalUrl(url: string): boolean {
  try {
    return new URL(url).origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function openExternalUrl(url: string): void {
  const tab = window.open(url, "_blank", "noopener,noreferrer");
  if (tab) tab.opener = null;
}

export function formatDisplayUrl(url: string): string {
  try {
    const { host, pathname } = new URL(url);
    const path = pathname === "/" ? "" : pathname;
    return `${host}${path}`;
  } catch {
    return url;
  }
}
