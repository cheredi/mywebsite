export default function Arrow({ dir = "right" }: { dir?: "right" | "left" | "up" | "out" }) {
  const rotate = { right: 0, left: 180, up: -90, out: -45 }[dir];
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
