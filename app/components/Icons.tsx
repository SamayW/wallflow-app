// Small hand-drawn icon set (stroke-based, currentColor) — used across
// feature cards and mockups. No external icon library dependency.

type IconProps = { className?: string };

export function IconMonitor({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function IconBattery({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="7" width="17" height="10" rx="2" />
      <path d="M22 10v4" />
      <path d="M6 11.5l2-2.5-1 3 2-2.5" />
    </svg>
  );
}

export function IconLock({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function IconShield({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconMenuBar({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="4" rx="1.5" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M6 13h12M6 17h8" />
    </svg>
  );
}

export function IconSparkle({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  );
}

export function IconImport({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 4v11" />
      <path d="M7.5 10.5L12 15l4.5-4.5" />
      <path d="M4 18v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
    </svg>
  );
}

export function IconPlay({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M7 4.5v15l13-7.5-13-7.5z" />
    </svg>
  );
}

export function IconPause({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="6" y="4.5" width="4.5" height="15" rx="1" />
      <rect x="13.5" y="4.5" width="4.5" height="15" rx="1" />
    </svg>
  );
}

export function IconStop({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
  );
}

export function IconChevronDown({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconApple({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" stroke="none">
      <path d="M16.365 1.43c0 1.14-.437 2.06-1.31 2.98-.86.9-2.06 1.55-3.1 1.46-.13-1.1.44-2.14 1.28-2.98.86-.86 2.16-1.5 3.13-1.46zM20.6 17.06c-.34.79-.74 1.53-1.2 2.22-.63.94-1.15 1.6-1.55 1.97-.62.6-1.29.9-2 .93-.51.02-1.13-.14-1.85-.44-.72-.3-1.38-.44-1.98-.44-.63 0-1.31.14-2.04.44-.73.3-1.32.46-1.77.47-.68.03-1.36-.28-2.03-.94-.44-.4-.99-1.09-1.65-2.06-.7-1.04-1.28-2.25-1.74-3.63-.49-1.5-.73-2.94-.73-4.34 0-1.6.35-2.99 1.04-4.14A6.1 6.1 0 0 1 5.35 4.9a5.9 5.9 0 0 1 2.98-.84c.55 0 1.28.17 2.21.51.93.34 1.52.51 1.79.51.2 0 .87-.2 1.98-.6 1.05-.37 1.94-.53 2.66-.47 1.97.16 3.45.94 4.44 2.34-1.76 1.07-2.63 2.56-2.62 4.49.01 1.5.55 2.75 1.6 3.74.48.45 1.01.8 1.6 1.05-.13.37-.27.73-.42 1.08z" />
    </svg>
  );
}
