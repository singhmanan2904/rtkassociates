/**
 * Small line-art SVGs in the site's navy/gold palette — kept as inline
 * components (not image files) so they inherit currentColor and stay crisp
 * at any size.
 */
import type { ReactNode } from "react";

export function SkylineIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" fill="none" className={className} aria-hidden>
      <rect x="18" y="70" width="46" height="110" rx="2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="76" y="40" width="54" height="140" rx="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="142" y="16" width="60" height="164" rx="2" className="text-gold-500" stroke="currentColor" strokeWidth="1.5" />
      <rect x="214" y="55" width="48" height="125" rx="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="272" y="90" width="34" height="90" rx="2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />

      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <rect
            key={`b-${row}-${col}`}
            x={152 + col * 16}
            y={32 + row * 30}
            width="8"
            height="12"
            className="text-gold-500"
            fill="currentColor"
            fillOpacity="0.5"
          />
        )),
      )}

      {Array.from({ length: 6 }).map((_, row) => (
        <rect key={`m-${row}`} x={88} y={54 + row * 20} width="10" height="10" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      ))}
      {Array.from({ length: 6 }).map((_, row) => (
        <rect key={`m2-${row}`} x={106} y={54 + row * 20} width="10" height="10" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      ))}

      <line x1="4" y1="180" x2="316" y2="180" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
    </svg>
  );
}

export function DocumentStackIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <rect x="22" y="14" width="64" height="82" rx="3" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="14" y="24" width="64" height="82" rx="3" fill="var(--color-sand-50)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="26" y1="42" x2="66" y2="42" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="26" y1="54" x2="66" y2="54" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="26" y1="66" x2="52" y2="66" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="66" cy="86" r="12" className="text-gold-500" stroke="currentColor" strokeWidth="1.5" />
      <path d="M61 86l3.5 3.5L72 82" className="text-gold-500" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const serviceIconPaths: Record<number, ReactNode> = {
  0: <path d="M4 6h16M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6M9 6V4h6v2M9 12h6M9 16h4" />,
  1: <path d="M12 21c4-2 4-6 4-9V6l-4-2-4 2v6c0 3 0 7 4 9Z M8 8h8 M9 11l1.5 1.5L15 8.5" />,
  2: <path d="M12 3v18M7 8h10M7 16h10M5 8c0-2 1.5-3 2-3h10c.5 0 2 1 2 3M5 16c0 2 1.5 3 2 3h10c.5 0 2-1 2-3" />,
  3: <path d="M4 11l8-7 8 7M6 10v9h12v-9M10 19v-5h4v5" />,
  4: <path d="M6 4h12v16H6V4Z M9 8h6M9 12h6M15 16l2 2 4-4" />,
  5: <path d="M6 20V4h9l3 3v13H6Z M15 4v3h3 M9 12h6M9 16h6M9 8h3" />,
  6: <path d="M12 3v4M9 7h6M8 21h8l1-8H7l1 8Z M10 13h4" />,
  7: <path d="M7 4l5 5 5-5 M12 9v11 M7 20h10 M4 4h3 M17 4h3" />,
  8: <path d="M7 3h8l4 4v14H7V3Z M15 3v4h4 M10 12h6 M10 16h4" />,
};

export function ServiceIcon({ index, className }: { index: number; className?: string }) {
  const path = serviceIconPaths[index] ?? serviceIconPaths[0];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {path}
    </svg>
  );
}
