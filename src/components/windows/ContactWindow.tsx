"use client";

import { useState } from "react";

export default function ContactWindow() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kadianva@msu.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="h-full overflow-y-auto window-scroll px-6 py-5 font-instrument text-[13.5px] leading-relaxed"
      style={{ color: "rgba(255,255,255,0.82)" }}
    >
      <h1 className="font-cormorant text-[26px] font-semibold text-white mb-1 leading-tight">
        let's work together
      </h1>

      <div className="h-px w-full my-4" style={{ background: "rgba(255,255,255,0.08)" }} />

      {/* Contact links */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[16px] shrink-0">📧</span>
          <button
            onClick={copyEmail}
            className="text-left hover:text-white transition-colors flex items-center gap-2 group"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            kadianva@msu.edu
            <span
              className="text-[11px] px-2 py-0.5 rounded transition-all"
              style={{
                background: copied ? "rgba(52,199,89,0.2)" : "rgba(255,255,255,0.08)",
                color: copied ? "#34C759" : "rgba(255,255,255,0.35)",
                border: `1px solid ${copied ? "rgba(52,199,89,0.3)" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              {copied ? "copied!" : "click to copy"}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[16px] shrink-0">💼</span>
          <a
            href="https://linkedin.com/in/vanshika-kadian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            linkedin.com/in/vanshika-kadian
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[16px] shrink-0">🐙</span>
          <a
            href="https://github.com/vanshikadian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            github.com/vanshikadian
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[16px] shrink-0">🌐</span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>vanshikadian.app</span>
        </div>
      </div>

      <div className="h-px w-full mb-5" style={{ background: "rgba(255,255,255,0.08)" }} />

      {/* Details */}
      <div className="space-y-2 mb-6 text-[13px]">
        <div className="flex gap-3">
          <span className="w-24 shrink-0 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>open to</span>
          <span>swe · mle · data engineering</span>
        </div>
        <div className="flex gap-3">
          <span className="w-24 shrink-0 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>start date</span>
          <span>may 2026</span>
        </div>
        <div className="flex gap-3">
          <span className="w-24 shrink-0 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>location</span>
          <span>open to anywhere</span>
        </div>
        <div className="flex gap-3">
          <span className="w-24 shrink-0 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>sponsorship</span>
          <span>requires opt / h-1b</span>
        </div>
      </div>

      <a
        href="mailto:kadianva@msu.edu"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors hover:bg-white/15"
        style={{
          background: "rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        Send Email ↗
      </a>
    </div>
  );
}
