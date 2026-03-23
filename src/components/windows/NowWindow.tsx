"use client";

export default function NowWindow() {
  return (
    <div
      className="h-full overflow-y-auto window-scroll px-6 py-5 font-instrument text-[13.5px] leading-relaxed"
      style={{ color: "rgba(255,255,255,0.82)" }}
    >
      <h1 className="font-cormorant text-[28px] font-semibold text-white mb-1 leading-tight">
        now.txt
      </h1>

      {/* Currently */}
      <div className="mb-6">
        <p className="text-[10.5px] uppercase tracking-[0.14em] font-medium mb-3" style={{ color: "rgba(255,255,255,0.32)" }}>
          currently
        </p>
        <div className="h-px w-full mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
        <ul className="space-y-2">
          <li>🎓&nbsp; finishing senior year @ msu</li>
          <li>💼&nbsp; finishing kohler co. capstone: multi-agent AI for supply chain</li>
          <li>📬&nbsp; actively applying to full-time roles (may 2026 start)</li>
          <li>📍&nbsp; east lansing · open to relocating after graduation</li>
        </ul>
      </div>

      {/* Lately */}
      <div className="mb-6">
        <p className="text-[10.5px] uppercase tracking-[0.14em] font-medium mb-3" style={{ color: "rgba(255,255,255,0.32)" }}>
          lately
        </p>
        <div className="h-px w-full mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="space-y-2">
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>running</span>
            <span>just started - 5K training</span>
          </div>
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>reading</span>
            <span>thinking fast and slow - kahneman</span>
          </div>
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>learning</span>
            <span>figma - turns out design is fun</span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div>
        <p className="text-[10.5px] uppercase tracking-[0.14em] font-medium mb-3" style={{ color: "rgba(255,255,255,0.32)" }}>
          status
        </p>
        <div className="h-px w-full mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span>open to work · available may 2026</span>
          </div>
          <a href="mailto:kadianva@msu.edu" className="block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            📧&nbsp; kadianva@msu.edu
          </a>
        </div>
      </div>
    </div>
  );
}
