"use client";

import { useState, useRef, type ReactNode } from "react";
import { motion, useDragControls, useMotionValue, AnimatePresence } from "framer-motion";

interface WindowProps {
  id: string;
  title: string;
  width: number;
  height: number;
  defaultPos: { x: number; y: number };
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  children: ReactNode;
}

const MIN_W = 320;
const MIN_H = 200;

export default function Window({
  title, width: initW, height: initH, defaultPos,
  isOpen, isMinimized, zIndex,
  onFocus, onClose, onMinimize, children,
}: WindowProps) {
  const dragControls = useDragControls();
  const x = useMotionValue(defaultPos.x);
  const y = useMotionValue(defaultPos.y);
  const [hoverControls, setHoverControls] = useState(false);
  const [size, setSize] = useState({ w: initW, h: initH });

  // Resize state
  const resizing = useRef(false);
  const resizeOrigin = useRef({ mx: 0, my: 0, w: 0, h: 0 });

  const startResize = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    resizing.current = true;
    resizeOrigin.current = { mx: e.clientX, my: e.clientY, w: size.w, h: size.h };

    const onMove = (ev: PointerEvent) => {
      if (!resizing.current) return;
      const dx = ev.clientX - resizeOrigin.current.mx;
      const dy = ev.clientY - resizeOrigin.current.my;
      setSize({
        w: Math.max(MIN_W, resizeOrigin.current.w + dx),
        h: Math.max(MIN_H, resizeOrigin.current.h + dy),
      });
    };
    const onUp = () => {
      resizing.current = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const isVisible = isOpen && !isMinimized;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0}
          style={{ x, y, width: size.w, zIndex, position: "absolute" }}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.16 } }}
          transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.8 }}
          onMouseDown={onFocus}
          className="absolute"
        >
          <div
            className="rounded-xl overflow-hidden flex flex-col"
            style={{
              height: size.h,
              background: "rgba(28,18,14,0.68)",
              backdropFilter: "blur(48px) saturate(2.2)",
              WebkitBackdropFilter: "blur(48px) saturate(2.2)",
              border: "1px solid rgba(191,106,74,0.22)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.42), 0 1px 0 rgba(255,210,180,0.07) inset",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center px-4 shrink-0 cursor-default"
              style={{
                height: 38,
                background: "rgba(255,210,180,0.06)",
                borderBottom: "1px solid rgba(191,106,74,0.15)",
              }}
              onPointerDown={(e) => {
                dragControls.start(e);
              }}
              onMouseEnter={() => setHoverControls(true)}
              onMouseLeave={() => setHoverControls(false)}
            >
              {/* Traffic lights */}
              <div className="flex items-center gap-[6px]">
                <TrafficLight color="#FF5F56" symbol="✕" show={hoverControls} symColor="#8B0000"
                  onClick={(e) => { e.stopPropagation(); onClose(); }} />
                <TrafficLight color="#FFBD2E" symbol="−" show={hoverControls} symColor="#5C3800"
                  onClick={(e) => { e.stopPropagation(); onMinimize(); }} />
                <TrafficLight color="#27C93F" symbol="⤢" show={hoverControls} symColor="#003B00"
                  onClick={(e) => e.stopPropagation()} />
              </div>

              {/* Title */}
              <span className="flex-1 text-center font-instrument text-[12px] text-white/40 pointer-events-none select-none">
                {title}
              </span>
              <div className="w-[54px]" />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative">
              {children}
            </div>

            {/* Resize handle */}
            <div
              onPointerDown={startResize}
              className="absolute bottom-0 right-0 w-5 h-5 cursor-se-resize z-50 flex items-end justify-end pb-1 pr-1"
              style={{ touchAction: "none" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TrafficLight({ color, symbol, show, symColor, onClick }: {
  color: string; symbol: string; show: boolean; symColor: string;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => e.stopPropagation()}
      className="w-3 h-3 rounded-full flex items-center justify-center shrink-0"
      style={{ background: color }}
    >
      {show && <span style={{ color: symColor, fontSize: "7px", lineHeight: 1, fontWeight: 900 }}>{symbol}</span>}
    </button>
  );
}
