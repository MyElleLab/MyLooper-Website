// Animated mesh-gradient background. Pure CSS — no canvas, no deps.
// Four soft amber blobs drift on independent loops; an SVG grain overlay
// adds cinematic texture; a top vignette improves contrast over the hero.
// `prefers-reduced-motion: reduce` disables all motion via @media in globals.css.
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-mxf-bg"
    >
      <div className="mxf-aurora-stage absolute inset-0">
        <span className="mxf-blob mxf-blob-a" />
        <span className="mxf-blob mxf-blob-b" />
        <span className="mxf-blob mxf-blob-c" />
        <span className="mxf-blob mxf-blob-d" />
      </div>

      {/* Soft top-to-bottom dim so foreground text stays AA-readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-mxf-bg/40 via-transparent to-mxf-bg/70" />

      {/* Film-grain overlay (tiny inline SVG, no extra request) */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}
