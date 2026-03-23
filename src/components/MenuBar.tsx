"use client";

import { useEffect, useState } from "react";
import type { WindowId } from "./Desktop";

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
      <path d="M7.5 9a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" />
      <path d="M4.5 7c.8-.8 1.9-1.3 3-1.3s2.2.5 3 1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M2 4.5c1.4-1.5 3.4-2.4 5.5-2.4S11.6 3 13 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
      <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="2" width="14" height="8" rx="1.5" fill="currentColor" />
      <path d="M20 4v4c1-0.5 1-3.5 0-4z" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <path d="M6.5 1a4 4 0 014 4v3l1 1.5H1.5L2.5 8V5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M5 11.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

interface MenuBarProps {
  onSpotlightOpen: () => void;
  onWindowOpen: (id: WindowId) => void;
}

const DIM = "rgba(0,0,0,0.42)";
const DIMMER = "rgba(0,0,0,0.28)";
const SEP = "rgba(0,0,0,0.1)";

export default function MenuBar({ onSpotlightOpen, onWindowOpen }: MenuBarProps) {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleString("en-US", {
        weekday: "short", month: "short", day: "numeric",
        hour: "numeric", minute: "2-digit", hour12: true,
      });
    setTime(fmt());
    const iv = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 z-50 h-7 flex items-center justify-between px-4"
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        borderBottom: `1px solid ${SEP}`,
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="font-cormorant italic text-[14px] font-semibold tracking-wide hover:opacity-70 transition-opacity"
          style={{ color: "rgba(0,0,0,0.78)" }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          Vanshika Kadian
        </button>

        <div className="hidden md:flex items-center gap-3">
          {(["about", "projects", "experience", "contact"] as WindowId[]).map((id) => (
            <button
              key={id}
              className="font-instrument text-[12px] font-medium hover:opacity-60 transition-opacity capitalize"
              style={{ color: DIM }}
              onClick={() => onWindowOpen(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3.5">
        {/* Open to Work */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          <span className="font-instrument text-[11.5px] font-medium" style={{ color: "rgba(0,0,0,0.6)" }}>
            Open to Work
          </span>
        </div>

        <div className="h-3.5 w-px" style={{ background: SEP }} />

        <button className="flex items-center hover:opacity-60 transition-opacity" style={{ color: DIM }} title="Notifications">
          <BellIcon />
        </button>
        <span style={{ color: DIM }}><WifiIcon /></span>
        <span style={{ color: DIM }}><BatteryIcon /></span>

        <div className="h-3.5 w-px" style={{ background: SEP }} />

        <button
          className="font-instrument text-[11px] px-1.5 py-0.5 rounded hover:bg-black/5 transition-colors"
          style={{ color: DIMMER, border: `1px solid ${SEP}` }}
          onClick={onSpotlightOpen}
          title="Spotlight Search (⌘K)"
        >
          ⌘K
        </button>

        <span className="font-instrument text-[12px] tabular-nums" style={{ color: DIM }}>
          {time}
        </span>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-7 left-3 z-10 py-1.5 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(24px)",
            border: `1px solid ${SEP}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            minWidth: "200px",
          }}
        >
          {(["about", "now", "funfacts"] as WindowId[]).map((id) => {
            const labels: Record<string, string> = { about: "About This Portfolio", now: "Now", funfacts: "Fun Facts" };
            return (
              <button
                key={id}
                className="w-full text-left px-4 py-1.5 font-instrument text-[13px] hover:bg-black/5 transition-colors"
                style={{ color: "rgba(0,0,0,0.75)" }}
                onClick={() => { onWindowOpen(id); setMenuOpen(false); }}
              >
                {labels[id]}
              </button>
            );
          })}
          <div className="mx-3 my-1" style={{ height: "1px", background: SEP }} />
          <button
            className="w-full text-left px-4 py-1.5 font-instrument text-[13px] hover:bg-black/5 transition-colors"
            style={{ color: DIMMER }}
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      )}
    </div>
  );
}
