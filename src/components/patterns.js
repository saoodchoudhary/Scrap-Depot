import { cx, CornerFrame } from "./ui";

/**
 * Hand-built SVG compositions used in place of stock photography.
 * They are deterministic, weightless and theme-consistent. Swap any
 * <ArtPanel /> for a <next/image> once real facility photography exists.
 */

/* ------------------------------------------------------------ Hero field */

export function HeroField({ className }) {
  return (
    <svg
      className={cx("h-full w-full", className)}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="hf-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B3327" />
          <stop offset="52%" stopColor="#08251B" />
          <stop offset="100%" stopColor="#061710" />
        </linearGradient>
        <radialGradient id="hf-glow" cx="72%" cy="26%" r="58%">
          <stop offset="0%" stopColor="#268361" stopOpacity=".55" />
          <stop offset="60%" stopColor="#0F4232" stopOpacity=".15" />
          <stop offset="100%" stopColor="#08251B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hf-gold" cx="24%" cy="78%" r="46%">
          <stop offset="0%" stopColor="#C4A24B" stopOpacity=".22" />
          <stop offset="100%" stopColor="#C4A24B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hf-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C4A24B" stopOpacity="0" />
          <stop offset="45%" stopColor="#D7BB70" stopOpacity=".75" />
          <stop offset="100%" stopColor="#C4A24B" stopOpacity="0" />
        </linearGradient>
        <pattern id="hf-dots" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.05" fill="#6FC29E" opacity=".16" />
        </pattern>
      </defs>

      <rect width="1440" height="900" fill="url(#hf-sky)" />
      <rect width="1440" height="900" fill="url(#hf-dots)" />
      <rect width="1440" height="900" fill="url(#hf-glow)" />
      <rect width="1440" height="900" fill="url(#hf-gold)" />

      {/* Sweeping orbital arcs — the recycling loop, abstracted */}
      <g fill="none" strokeLinecap="round">
        <circle cx="1140" cy="330" r="268" stroke="url(#hf-arc)" strokeWidth="1.2" />
        <circle cx="1140" cy="330" r="352" stroke="#3FA37C" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="1140" cy="330" r="196" stroke="#C4A24B" strokeOpacity=".26" strokeWidth="1" />
        <path d="M872 330a268 268 0 0 1 268-268" stroke="#D7BB70" strokeOpacity=".65" strokeWidth="2" />
        <path d="M1408 330a268 268 0 0 1-268 268" stroke="#6FC29E" strokeOpacity=".5" strokeWidth="2" />
      </g>

      {/* Skyline of stacked bales / material stratum */}
      <g opacity=".5">
        <path
          d="M0 742h118v-58h96v40h132v-74h108v96h146v-52h124v66h158v-88h122v110h180v-40h156v140H0z"
          fill="#0F4232"
        />
        <path
          d="M0 812h164v-38h140v54h188v-30h172v46h176v-58h156v70h244v56H0z"
          fill="#0B3327"
        />
      </g>

      {/* Fine measurement ticks — the weighbridge motif */}
      <g stroke="#C4A24B" strokeOpacity=".3">
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={60 + i * 34}
            y1={862}
            x2={60 + i * 34}
            y2={i % 5 === 0 ? 840 : 852}
            strokeWidth="1"
          />
        ))}
      </g>
      <line x1="60" y1="862" x2="1386" y2="862" stroke="#C4A24B" strokeOpacity=".35" strokeWidth="1" />
    </svg>
  );
}

/* ------------------------------------------------------------- Art panels */

function ArtCircuit() {
  return (
    <>
      <defs>
        <linearGradient id="ac-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F4232" />
          <stop offset="100%" stopColor="#071A13" />
        </linearGradient>
      </defs>
      <rect width="600" height="440" fill="url(#ac-bg)" />
      <g fill="none" stroke="#3FA37C" strokeOpacity=".45" strokeWidth="1.3" strokeLinecap="square">
        <path d="M40 90h120l40 40h150M40 160h80l60 60h210M40 250h180l50-50h190" />
        <path d="M120 400V300l50-50M300 400V330h120M420 400v-60l60-60h80" />
        <path d="M560 120h-90l-45 45v90" />
      </g>
      <g fill="none" stroke="#C4A24B" strokeOpacity=".7" strokeWidth="1.5">
        <path d="M40 340h140l45-45h120l55 55h160" />
        <rect x="238" y="168" width="128" height="96" rx="4" />
        <path d="M238 196h-22M238 218h-22M238 240h-22M366 196h22M366 218h22M366 240h22" />
        <path d="M266 168v-20M298 168v-20M330 168v-20M266 264v20M298 264v20M330 264v20" />
      </g>
      <g fill="#C4A24B" fillOpacity=".85">
        {[[160, 90], [350, 130], [140, 220], [270, 200], [480, 280], [180, 300], [420, 330], [520, 340]].map(
          ([x, y], i) => <circle key={i} cx={x} cy={y} r="4" />
        )}
      </g>
      <g fill="#6FC29E" fillOpacity=".5">
        {[[80, 160], [230, 250], [300, 400], [420, 400], [470, 165]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" />
        ))}
      </g>
    </>
  );
}

function ArtStrata() {
  return (
    <>
      <defs>
        <linearGradient id="as-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B3327" />
          <stop offset="100%" stopColor="#08251B" />
        </linearGradient>
      </defs>
      <rect width="600" height="440" fill="url(#as-bg)" />
      {[
        { y: 60, h: 46, c: "#C4A24B", o: 0.8 },
        { y: 112, h: 30, c: "#D7BB70", o: 0.45 },
        { y: 148, h: 62, c: "#268361", o: 0.7 },
        { y: 216, h: 24, c: "#6FC29E", o: 0.4 },
        { y: 246, h: 54, c: "#14543F", o: 0.9 },
        { y: 306, h: 34, c: "#A8DCC3", o: 0.28 },
        { y: 346, h: 58, c: "#0F4232", o: 1 },
      ].map((band, i) => (
        <g key={i}>
          <rect x="0" y={band.y} width="600" height={band.h} fill={band.c} opacity={band.o} />
          <rect
            x="0"
            y={band.y}
            width="600"
            height="1"
            fill="#FBF9F4"
            opacity=".12"
          />
        </g>
      ))}
      {/* Vertical core-sample cut */}
      <g>
        <rect x="392" y="20" width="118" height="400" fill="#071A13" opacity=".55" />
        <rect x="392" y="20" width="118" height="400" fill="none" stroke="#C4A24B" strokeOpacity=".6" strokeWidth="1.2" />
        <g stroke="#C4A24B" strokeOpacity=".45" strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1="392" y1={44 + i * 24} x2={i % 4 === 0 ? 420 : 406} y2={44 + i * 24} />
          ))}
        </g>
      </g>
    </>
  );
}

function ArtOrbit() {
  return (
    <>
      <defs>
        <radialGradient id="ao-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#14543F" />
          <stop offset="100%" stopColor="#071A13" />
        </radialGradient>
      </defs>
      <rect width="600" height="440" fill="url(#ao-bg)" />
      <g transform="translate(300 220)" fill="none">
        {[190, 156, 122, 88].map((r, i) => (
          <circle
            key={r}
            r={r}
            stroke={i % 2 ? "#C4A24B" : "#3FA37C"}
            strokeOpacity={i % 2 ? 0.5 : 0.35}
            strokeWidth="1.1"
            strokeDasharray={i === 1 ? "4 10" : undefined}
          />
        ))}
        {/* Three-arrow recycle mark, drawn as arcs */}
        {[0, 120, 240].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path
              d="M0 -142 A142 142 0 0 1 123 71"
              stroke="#D7BB70"
              strokeOpacity=".85"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path d="M110 52 L134 78 L104 92" stroke="#D7BB70" strokeOpacity=".85" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
        <circle r="44" fill="#08251B" stroke="#C4A24B" strokeOpacity=".6" strokeWidth="1.2" />
        <circle r="8" fill="#C4A24B" />
      </g>
    </>
  );
}

function ArtStack() {
  const bale = (x, y, w, h, fill, stroke) => (
    <g>
      <path d={`M${x} ${y} l${w / 2} ${-h / 3} l${w / 2} ${h / 3} l${-w / 2} ${h / 3} z`} fill={fill} opacity=".95" />
      <path d={`M${x} ${y} l0 ${h * 0.55} l${w / 2} ${h / 3} l0 ${-h * 0.55} z`} fill={stroke} opacity=".85" />
      <path d={`M${x + w} ${y} l0 ${h * 0.55} l${-w / 2} ${h / 3} l0 ${-h * 0.55} z`} fill={stroke} opacity=".55" />
    </g>
  );
  return (
    <>
      <defs>
        <linearGradient id="ast-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F4232" />
          <stop offset="100%" stopColor="#071A13" />
        </linearGradient>
      </defs>
      <rect width="600" height="440" fill="url(#ast-bg)" />
      <g stroke="#3FA37C" strokeOpacity=".16" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="0" y1={40 + i * 34} x2="600" y2={40 + i * 34} />
        ))}
      </g>
      <g transform="translate(90 130)">
        {bale(0, 210, 200, 96, "#C4A24B", "#8A6A20")}
        {bale(110, 158, 200, 96, "#D7BB70", "#A9842C")}
        {bale(220, 210, 200, 96, "#C4A24B", "#8A6A20")}
        {bale(55, 106, 200, 96, "#6FC29E", "#268361")}
        {bale(165, 54, 200, 96, "#A8DCC3", "#3FA37C")}
      </g>
      <g stroke="#C4A24B" strokeOpacity=".5" strokeWidth="1" fill="none">
        <path d="M40 400h520" />
        <path d="M40 400v-14M300 400v-22M560 400v-14" />
      </g>
    </>
  );
}

function ArtFlow() {
  return (
    <>
      <rect width="600" height="440" fill="#08251B" />
      <defs>
        <linearGradient id="af-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3FA37C" stopOpacity=".1" />
          <stop offset="50%" stopColor="#C4A24B" stopOpacity=".8" />
          <stop offset="100%" stopColor="#3FA37C" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#af-l)" strokeWidth="1.6">
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M-20 ${70 + i * 38} C 160 ${40 + i * 38}, 300 ${140 + i * 30}, 620 ${90 + i * 34}`}
          />
        ))}
      </g>
      <g fill="none" stroke="#6FC29E" strokeOpacity=".3" strokeWidth="1" strokeDasharray="2 8">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M-20 ${88 + i * 38} C 180 ${60 + i * 38}, 320 ${160 + i * 30}, 620 ${110 + i * 34}`} />
        ))}
      </g>
      <g>
        <rect x="234" y="150" width="132" height="140" rx="6" fill="#071A13" stroke="#C4A24B" strokeOpacity=".6" />
        <path d="M262 220h76M262 196h76M262 244h48" stroke="#6FC29E" strokeOpacity=".7" strokeWidth="1.4" />
        <circle cx="300" cy="176" r="8" fill="#C4A24B" />
      </g>
    </>
  );
}

function ArtGrid() {
  const hex = (cx0, cy0, r) => {
    const pts = Array.from({ length: 6 }).map((_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${(cx0 + r * Math.cos(a)).toFixed(1)},${(cy0 + r * Math.sin(a)).toFixed(1)}`;
    });
    return pts.join(" ");
  };
  const cells = [];
  const r = 30;
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 13; col++) {
      const x = col * dx + (row % 2 ? dx / 2 : 0) - 20;
      const y = row * dy - 10;
      const on = (row * 13 + col * 7) % 11 < 3;
      cells.push({ x, y, on, key: `${row}-${col}` });
    }
  }
  return (
    <>
      <rect width="600" height="440" fill="#0B3327" />
      <g>
        {cells.map((c) => (
          <polygon
            key={c.key}
            points={hex(c.x, c.y, r - 3)}
            fill={c.on ? "#C4A24B" : "none"}
            fillOpacity={c.on ? 0.16 : 0}
            stroke={c.on ? "#C4A24B" : "#3FA37C"}
            strokeOpacity={c.on ? 0.55 : 0.18}
            strokeWidth="1"
          />
        ))}
      </g>
      <rect width="600" height="440" fill="url(#ag-fade)" />
      <defs>
        <radialGradient id="ag-fade" cx="50%" cy="45%" r="62%">
          <stop offset="55%" stopColor="#0B3327" stopOpacity="0" />
          <stop offset="100%" stopColor="#071A13" stopOpacity=".85" />
        </radialGradient>
      </defs>
    </>
  );
}

const variants = {
  circuit: ArtCircuit,
  strata: ArtStrata,
  orbit: ArtOrbit,
  stack: ArtStack,
  flow: ArtFlow,
  grid: ArtGrid,
};

export function ArtPanel({ variant = "orbit", className, ratio = "aspect-[4/3]" }) {
  const V = variants[variant] ?? ArtOrbit;
  return (
    <svg
      viewBox="0 0 600 440"
      preserveAspectRatio="xMidYMid slice"
      className={cx("h-full w-full", ratio, className)}
      aria-hidden
    >
      <V />
    </svg>
  );
}

/* ------------------------------------------------------------ Framed art */

export function ArtFrame({ variant, caption, className, ratio = "aspect-[4/3]" }) {
  return (
    <figure className={cx("relative overflow-hidden rounded-sm bg-forest-950", className)}>
      <div className={cx("relative overflow-hidden", ratio)}>
        <ArtPanel variant={variant} ratio="" className="absolute inset-0 h-full w-full" />
        <span className="pointer-events-none absolute inset-3 border border-brass-500/25" aria-hidden />
        <CornerFrame className="inset-3" />
      </div>
      {caption ? (
        <figcaption className="flex items-center gap-3 border-t border-brass-500/20 bg-forest-950 px-5 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-forest-100/60">
          <span className="h-px w-5 bg-brass-500/70" aria-hidden />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------- Section topper */

export function TopoDivider({ className, flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={cx("block h-8 w-full sm:h-12", flip && "rotate-180", className)}
      aria-hidden
    >
      <path d="M0 60V26c180 22 300-14 480-14s300 34 480 34 300-30 480-30v44z" fill="currentColor" />
    </svg>
  );
}
