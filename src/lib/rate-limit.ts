const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 3;

export function rateLimit(ip: string): { success: boolean } {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove expired timestamps
  const validTimestamps = timestamps.filter((t) => now - t < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS) {
    rateLimitMap.set(ip, validTimestamps);
    return { success: false };
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return { success: true };
}
