"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 4);
      mouseY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    };

    const handleDown = () => setIsDown(true);
    const handleUp = () => setIsDown(false);
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ x, y }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isDown ? 2.5 : 1,
      }}
      transition={{ scale: { duration: 0.1 }, opacity: { duration: 0.2 } }}
    >
      <div
        className="w-2 h-2 rounded-full bg-sienna"
        style={{ mixBlendMode: "multiply" }}
      />
    </motion.div>
  );
}
