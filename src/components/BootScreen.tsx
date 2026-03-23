"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 500);
        }, 250);
      }
    };

    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
          style={{ background: "#000" }}
        >
          <div className="flex flex-col items-center gap-6 select-none">
            {/* Apple-style logo — just a circle glyph */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="font-nunito text-white text-[26px] leading-none">V</span>
            </div>

            <p
              className="font-nunito text-white text-[26px] font-light tracking-[0.18em]"
              style={{ letterSpacing: "0.22em" }}
            >
              Vanshika OS
            </p>

            {/* Progress bar */}
            <div
              className="w-52 h-[3px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "rgba(255,255,255,0.75)",
                  transition: "width 16ms linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
