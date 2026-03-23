"use client";

import { useState } from "react";
import type { WindowId } from "./Desktop";

const ICONS: { id: WindowId; label: string; emoji: string }[] = [
  { id: "about",    label: "about.txt",  emoji: "📝" },
  { id: "projects", label: "projects/",  emoji: "📁" },
  { id: "resume",   label: "resume.pdf", emoji: "📄" },
  { id: "terminal", label: "terminal",   emoji: "⌨️" },
];

interface DesktopIconsProps {
  onOpen: (id: WindowId) => void;
}

export default function DesktopIcons({ onOpen }: DesktopIconsProps) {
  const [lastClick, setLastClick] = useState<{ id: string; time: number } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (id: WindowId) => {
    const now = Date.now();
    setSelected(id);

    if (lastClick?.id === id && now - lastClick.time < 500) {
      // Double click
      onOpen(id);
      setLastClick(null);
      setSelected(null);
    } else {
      setLastClick({ id, time: now });
    }
  };

  return (
    <div className="absolute top-10 right-4 flex flex-col gap-3 z-10 pt-3 pointer-events-auto">
      {ICONS.map(({ id, label, emoji }) => (
        <div
          key={id}
          className="flex flex-col items-center gap-1.5 cursor-default select-none"
          style={{ width: "68px" }}
          onClick={() => handleClick(id)}
        >
          {/* Icon box */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] transition-opacity active:opacity-60"
            style={{
              background: selected === id ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.55)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${selected === id ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.08)"}`,
              boxShadow: selected === id ? "0 0 0 2px rgba(30,120,255,0.5)" : "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {emoji}
          </div>

          {/* Label */}
          <span
            className="font-instrument text-[11px] text-center leading-tight px-1.5 py-0.5 rounded"
            style={{
              background: selected === id ? "rgba(30,100,220,0.75)" : "rgba(255,255,255,0.75)",
              color: selected === id ? "white" : "rgba(0,0,0,0.72)",
              backdropFilter: "blur(4px)",
              maxWidth: "64px",
              wordBreak: "break-word",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
