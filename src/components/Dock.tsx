"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { WindowId } from "./Desktop";
import {
  FinderIcon, TerminalIcon, NotesIcon, ResumeIcon,
  PhotosIcon, MailIcon, GitHubIcon, LinkedInIcon,
} from "./DockIcons";

type DockItemDef = {
  id: WindowId | "github" | "linkedin";
  label: string;
  Icon: React.FC;
  href?: string;
};

const DOCK_ITEMS: DockItemDef[] = [
  { id: "projects",  label: "Finder",   Icon: FinderIcon },
  { id: "terminal",  label: "Terminal", Icon: TerminalIcon },
  { id: "now",       label: "Notes",    Icon: NotesIcon },
  { id: "resume",    label: "Resume",   Icon: ResumeIcon },
  { id: "funfacts",  label: "Photos",   Icon: PhotosIcon },
  { id: "contact",   label: "Mail",     Icon: MailIcon },
  { id: "linkedin",  label: "LinkedIn", Icon: LinkedInIcon, href: "https://linkedin.com/in/vanshika-kadian" },
  { id: "github",    label: "GitHub",   Icon: GitHubIcon,   href: "https://github.com/vanshikadian" },
];

const BASE = 52;
const MAGNIFIED = 74;
const SPREAD = 92;

interface DockProps {
  windowStates: Record<string, { isOpen: boolean; isMinimized: boolean }>;
  onDockClick: (id: WindowId) => void;
}

export default function Dock({ windowStates, onDockClick }: DockProps) {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const getScale = (i: number): number => {
    if (mouseX === null || !dockRef.current) return 1;
    const rect = dockRef.current.getBoundingClientRect();
    const iconCenter = rect.left + 16 + i * (BASE + 10) + BASE / 2;
    const dist = Math.abs(mouseX - iconCenter);
    if (dist > SPREAD) return 1;
    const t = 1 - dist / SPREAD;
    return 1 + (MAGNIFIED / BASE - 1) * t * t;
  };

  return (
    <div className="absolute bottom-3 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="relative pointer-events-auto">
        {/* Floating label */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 -top-9 px-3 py-1 rounded-lg font-instrument text-[12px] font-medium whitespace-nowrap pointer-events-none select-none"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.1)",
              color: "rgba(0,0,0,0.75)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {hovered}
          </motion.div>
        )}

        {/* Dock shelf */}
        <div
          ref={dockRef}
          className="flex items-end gap-2.5 px-4 pt-3 pb-2 rounded-2xl"
          style={{
            background: "rgba(220,215,210,0.55)",
            backdropFilter: "blur(28px) saturate(1.8)",
            WebkitBackdropFilter: "blur(28px) saturate(1.8)",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
          onMouseMove={(e) => setMouseX(e.clientX)}
          onMouseLeave={() => { setMouseX(null); setHovered(null); }}
        >
          {DOCK_ITEMS.map((item, i) => {
            const scale = getScale(i);
            const isWindow = !item.href;
            const isActive =
              isWindow &&
              windowStates[item.id]?.isOpen &&
              !windowStates[item.id]?.isMinimized;

            return (
              <motion.div
                key={item.id}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 420, damping: 26, mass: 0.35 }}
                style={{ originY: 1, width: BASE, height: BASE }}
                className="relative flex-shrink-0 cursor-pointer"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (item.href) {
                    window.open(item.href, "_blank", "noopener,noreferrer");
                  } else {
                    onDockClick(item.id as WindowId);
                  }
                }}
              >
                <div
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.45))" }}
                >
                  <item.Icon />
                </div>

                {/* Active dot */}
                {isActive && (
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
