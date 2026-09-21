/**
 * Single-source icon set. All icons are 24x24, stroke-based, currentColor.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const paths = {
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" />
    </>
  ),
  lamp: (
    <>
      {/* Linear fluorescent tube with end caps */}
      <rect x="2.6" y="9.4" width="18.8" height="5.2" rx="2.6" />
      <path d="M5.6 9.4v5.2M18.4 9.4v5.2" />
      <path d="M8.6 12h6.8" />
      <path d="M12 3.2v2.6M7.4 4.6l1.3 2.2M16.6 4.6l-1.3 2.2" />
    </>
  ),
  desk: (
    <>
      {/* Workstation: monitor on a desk */}
      <rect x="6.4" y="3.6" width="11.2" height="7.4" rx="1.2" />
      <path d="M12 11v2.2M9.6 13.2h4.8" />
      <path d="M2.5 14.4h19" />
      <path d="M4.6 14.4V20M19.4 14.4V20" />
      <path d="M4.6 17.6h5.2" />
    </>
  ),
  ingot: (
    <>
      <path d="M3 16.5 6 11h12l3 5.5z" />
      <path d="M6 11 8 7h8l2 4" />
      <path d="M9.5 16.5 11 11M14.5 16.5 13 11" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10.5l5 3v-3l5 3V8l5.5 3.2V20z" />
      <path d="M3 20h18" />
      <path d="M7.5 16.5v1.5M12 16.5v1.5M16.5 16.5v1.5" />
      <path d="M18.5 8V4h-2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.2 2.9 7.6 7 9.3 4.1-1.7 7-5.1 7-9.3V5.8z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </>
  ),
  certificate: (
    <>
      <rect x="3.5" y="3.5" width="17" height="12" rx="1.5" />
      <path d="M7 7.5h6M7 11h4" />
      <circle cx="16.5" cy="17.5" r="3" />
      <path d="M14.6 20v3.2l1.9-1.1 1.9 1.1V20" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v17M7 20h10" />
      <path d="M5 7h14" />
      <path d="M5 7 2.5 13h5zM19 7l-2.5 6h5z" />
      <path d="M2.5 13a2.5 2.5 0 0 0 5 0M16.5 13a2.5 2.5 0 0 0 5 0" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v9h-11z" />
      <path d="M13.5 9.5h3.6l3.4 3.1v2.9h-7z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M8.8 17.5h6.4" />
    </>
  ),
  document: (
    <>
      <path d="M6 2.5h7.5L18 7v14.5H6z" />
      <path d="M13.5 2.5V7H18" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2" />
    </>
  ),
  recycle: (
    <>
      <path d="M7.6 5.6 9.9 2l2.3 3.6" />
      <path d="M9.9 2v7.5" />
      <path d="M17.9 12.4 22 12l-1.9 3.9" />
      <path d="m20.1 15.9-6.5-3.7" />
      <path d="M4.5 18.6 2 15.4l4.3-.6" />
      <path d="m6.3 14.8 6.5 3.8" />
      <circle cx="12" cy="12" r="9.2" strokeDasharray="2 3" opacity=".4" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5.5-14 16-14 0 9-5 14-11.5 14C6 20 4 20 4 20z" />
      <path d="M4.5 19.5C8 16 12 13 16.5 11" />
    </>
  ),
  phone: (
    <>
      <path d="M6.2 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.8 5.8l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6.2 9-6.2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.1 7-11.2A7 7 0 0 0 5 10.3c0 5.1 7 11.2 7 11.2z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  close: <path d="M5.5 5.5l13 13m0-13-13 13" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h11" />,
  quote: (
    <path
      d="M9.4 5.5C6.2 7 4.5 9.6 4.5 13.2v5.3h6.2v-6.2H7.5c0-2 .8-3.6 2.7-4.6zm10 0C16.2 7 14.5 9.6 14.5 13.2v5.3h6.2v-6.2h-3.2c0-2 .8-3.6 2.7-4.6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  star: (
    <path
      d="m12 3 2.6 5.6 6 .8-4.4 4.3 1.1 6.1L12 16.9 6.7 19.8l1.1-6.1L3.4 9.4l6-.8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  whatsapp: (
    <path
      d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 1.9a8.1 8.1 0 0 1 6.9 12.4l-.3.5.7 2.5-2.6-.7-.5.3A8.1 8.1 0 1 1 12 3.9zm-3.6 4c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.2s1 2.6 1.2 2.8c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3l-.6-.3-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1a7.9 7.9 0 0 1-2.4-1.5c-.9-.8-1.5-1.8-1.6-2-.2-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function Icon({ name, className = "h-5 w-5", strokeWidth }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg {...base} strokeWidth={strokeWidth ?? base.strokeWidth} className={className}>
      {d}
    </svg>
  );
}

export const iconNames = Object.keys(paths);
