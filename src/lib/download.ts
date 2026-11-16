/**
 * A download is only offered when a real, uploaded .mcaddon is linked over HTTPS.
 * Anything else (null, "#", a non-.mcaddon URL) renders the labelled placeholder.
 */
export function isDownloadAvailable(url: string | null | undefined): url is string {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.pathname.toLowerCase().endsWith(".mcaddon");
  } catch {
    return false;
  }
}