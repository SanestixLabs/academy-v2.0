type IconProps = {
  name: "build" | "ship" | "sell" | "grow" | "play" | "arrow-right";
  className?: string;
};

const paths: Record<IconProps["name"], JSX.Element> = {
  build: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </>
  ),
  ship: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4.5 7.5L12 12l7.5-4.5M12 12v9" strokeLinecap="round" />
    </>
  ),
  sell: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
      <path d="M16 8a3 3 0 110-6M22 20c0-2.8-2.2-5.2-5-5.8" strokeLinecap="round" />
    </>
  ),
  grow: (
    <>
      <path d="M4 19h16" strokeLinecap="round" />
      <rect x="6" y="13" width="3" height="6" />
      <rect x="11" y="9" width="3" height="10" />
      <rect x="16" y="5" width="3" height="14" />
    </>
  ),
  play: <path d="M8 5v14l11-7-11-7z" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
