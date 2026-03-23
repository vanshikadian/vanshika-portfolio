"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface Sticker {
  id: string;
  src: string;
  width: string;
  rotate: number;
  top: string;
  left: string;
  delay: number;
}

const STICKERS: Sticker[] = [
  { id: "strawberry", src: "/stickers/strawberry.png", width: "32vw", rotate: -9, top: "15%", left: "20%", delay: 0.05 },
  { id: "lily",       src: "/stickers/lily.png",       width: "37vw", rotate:  8, top:  "5%", left: "50%", delay: 0.07 },
  { id: "matcha",     src: "/stickers/matcha.png",     width: "28vw", rotate:  4, top: "65%", left: "50%", delay: 0.10 },
  { id: "dog",        src: "/stickers/dog.png",        width: "29vw", rotate: -5, top: "48%", left: "76%", delay: 0.15 },
];

type Constraints = { left: number; right: number; top: number; bottom: number };

function DraggableSticker({ s }: { s: Sticker }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const [constraints, setConstraints] = useState<Constraints>({ left: -9999, right: 9999, top: -9999, bottom: 9999 });

  useEffect(() => {
    const calc = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      if (rect.width === 0) return;
      setConstraints({
        left:   -rect.left,
        right:  window.innerWidth  - rect.right,
        top:    -rect.top,
        bottom: window.innerHeight - rect.bottom,
      });
    };

    // delaying until after entry animation finishes so rect is measured at scale:1
    const timer = setTimeout(calc, (s.delay + 0.5) * 1000 + 100);
    window.addEventListener("resize", calc);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calc);
    };
  }, [s.delay]);

  return (
    <motion.img
      ref={imgRef}
      src={s.src}
      alt=""
      drag
      dragConstraints={constraints}
      dragMomentum={true}
      dragElastic={0.18}
      dragTransition={{ power: 0.3, timeConstant: 300, bounceStiffness: 60, bounceDamping: 12 }}
      style={{
        x,
        y,
        position: "absolute",
        top: s.top,
        left: s.left,
        width: s.width,
        height: "auto",
        rotate: s.rotate,
        cursor: "grab",
        touchAction: "none",
        userSelect: "none",
        pointerEvents: "auto",
        zIndex: 50,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.10))",
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: s.delay, duration: 0.4, ease: "easeOut" }}
      whileDrag={{ cursor: "grabbing", zIndex: 999 }}
      draggable={false}
    />
  );
}

export default function DesktopStickers() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" }}>
      {STICKERS.map((s) => (
        <DraggableSticker key={s.id} s={s} />
      ))}
    </div>
  );
}
