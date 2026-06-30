export function isVideoMedia(url?: string): boolean {
  if (!url) return false;
  return /\.(mp4|webm)(?:\?.*)?$/i.test(url);
}

export function isAnimatedImage(url?: string): boolean {
  if (!url) return false;
  return /\.(webp|gif|apng)(?:\?.*)?$/i.test(url);
}

export function isReplayableMedia(url?: string): boolean {
  return isVideoMedia(url) || isAnimatedImage(url);
}

export function withCacheBust(url: string, token?: number | string): string {
  const t = token ?? Date.now();
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${t}`;
}
