"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 10) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 10) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop nav — floating pill */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-parchment/80 backdrop-blur-md border border-near-black/10 shadow-sm">
          <span className="font-cormorant italic text-near-black font-semibold text-sm px-3 mr-1 border-r border-near-black/10 pr-4">
            VK
          </span>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-3 py-1.5 rounded-full text-sm font-instrument transition-colors duration-200 ${
                  isActive
                    ? "bg-near-black text-parchment"
                    : "text-near-black/60 hover:text-near-black"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile nav — floating bottom pill */}
      <motion.nav
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-near-black/90 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => {
            const icons: Record<string, string> = {
              Work: "◈",
              About: "◉",
              Experience: "◎",
              Skills: "◐",
              Contact: "◈",
            };
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-instrument transition-colors duration-200 ${
                  isActive ? "bg-parchment text-near-black" : "text-parchment/50 hover:text-parchment"
                }`}
              >
                {icons[link.label]} {link.label}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
