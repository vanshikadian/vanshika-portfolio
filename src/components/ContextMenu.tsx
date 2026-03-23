"use client";

import { useEffect, useRef } from "react";
import type { WindowId } from "./Desktop";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onOpen: (id: WindowId) => void;
}

export default function ContextMenu({ x, y, onClose, onOpen }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    const onDown = () => onClose();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Adjust position so menu stays on screen
  const adjustedX = Math.min(x, window.innerWidth - 200);
  const adjustedY = Math.min(y, window.innerHeight - 160);

  const items: Array<
    | { type: "item"; label: string; action: () => void; disabled?: boolean }
    | { type: "divider" }
  > = [
    { type: "item", label: "Get Info",         action: () => {}, disabled: true },
    { type: "item", label: "Change Wallpaper",  action: () => {}, disabled: true },
    { type: "divider" },
    {
      type: "item",
      label: "About Vanshika",
      action: () => { onOpen("about"); onClose(); },
    },
    {
      type: "item",
      label: "Open Contact",
      action: () => { onOpen("contact"); onClose(); },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-[400] py-1 rounded-xl"
      style={{
        left: adjustedX,
        top: adjustedY,
        background: "rgba(28,28,32,0.96)",
        backdropFilter: "blur(28px) saturate(1.8)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.06)",
        minWidth: "186px",
      }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {items.map((item, i) =>
        item.type === "divider" ? (
          <div key={i} className="mx-3 my-1" style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
        ) : (
          <button
            key={i}
            disabled={item.disabled}
            className="w-full text-left px-4 py-1.5 font-instrument text-[13px] transition-colors"
            style={{
              color: item.disabled ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.85)",
              cursor: item.disabled ? "default" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (!item.disabled) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
            onClick={item.action}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );
}
