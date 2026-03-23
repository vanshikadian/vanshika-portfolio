"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WindowId } from "./Desktop";

const ITEMS: { id: WindowId; label: string; emoji: string; desc: string }[] = [
  { id: "about",      label: "about.txt",      emoji: "📝", desc: "About Vanshika" },
  { id: "now",        label: "now.txt",         emoji: "📋", desc: "What I'm doing right now" },
  { id: "funfacts",   label: "fun-facts.txt",   emoji: "🎉", desc: "Things that don't fit on a resume" },
  { id: "projects",   label: "projects/",       emoji: "📁", desc: "Portfolio projects" },
  { id: "experience", label: "experience.md",   emoji: "💼", desc: "Work experience & internships" },
  { id: "skills",     label: "skills.txt",      emoji: "⚡", desc: "Technical skills" },
  { id: "terminal",   label: "terminal",        emoji: "⌨️", desc: "Interactive terminal" },
  { id: "resume",     label: "resume.pdf",      emoji: "📄", desc: "Download resume" },
  { id: "contact",    label: "contact.md",      emoji: "✉️", desc: "Get in touch" },
];

interface SpotlightProps {
  onOpen: (id: WindowId) => void;
  onClose: () => void;
}

export default function Spotlight({ onOpen, onClose }: SpotlightProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : ITEMS;

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 60);
  }, []);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      onOpen(filtered[selected].id);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[500] flex items-start justify-center"
      style={{ paddingTop: "18vh", background: "rgba(0,0,0,0.38)", backdropFilter: "blur(3px)" }}
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -8 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-[580px] rounded-2xl overflow-hidden"
        style={{
          background: "rgba(26,26,30,0.96)",
          backdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 28px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: filtered.length > 0 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none font-instrument text-[16px] text-white"
            placeholder="Search windows..."
            style={{ caretColor: "white" }}
            spellCheck={false}
          />
          <kbd
            className="font-instrument text-[11px] px-2 py-0.5 rounded"
            style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
          >
            esc
          </kbd>
        </div>

        {/* Results */}
        {filtered.length > 0 && (
          <div className="py-1.5 max-h-[340px] overflow-y-auto window-scroll">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 px-5 py-2.5 cursor-pointer transition-colors"
                style={{ background: i === selected ? "rgba(255,255,255,0.07)" : "transparent" }}
                onMouseEnter={() => setSelected(i)}
                onClick={() => { onOpen(item.id); onClose(); }}
              >
                <span className="text-[18px] shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-instrument text-[14px] text-white">{item.label}</p>
                  <p className="font-instrument text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>{item.desc}</p>
                </div>
                {i === selected && (
                  <kbd
                    className="font-instrument text-[11px] px-2 py-0.5 rounded shrink-0"
                    style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
                  >
                    ↵
                  </kbd>
                )}
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="px-5 py-8 text-center">
            <p className="font-instrument text-[14px]" style={{ color: "rgba(255,255,255,0.28)" }}>
              No results for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
