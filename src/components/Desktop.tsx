"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import Window from "./Window";
import BootScreen from "./BootScreen";
import Spotlight from "./Spotlight";
import DesktopIcons from "./DesktopIcons";
import ContextMenu from "./ContextMenu";
import DesktopStickers from "./DesktopStickers";
import AboutWindow from "./windows/AboutWindow";
import NowWindow from "./windows/NowWindow";
import FunFactsWindow from "./windows/FunFactsWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import SkillsWindow from "./windows/SkillsWindow";
import TerminalWindow from "./windows/TerminalWindow";
import ResumeWindow from "./windows/ResumeWindow";
import ContactWindow from "./windows/ContactWindow";

export type WindowId =
  | "about"
  | "now"
  | "funfacts"
  | "projects"
  | "experience"
  | "skills"
  | "terminal"
  | "resume"
  | "contact";

type WinState = {
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
};

const WIN_CONFIG: Record<
  WindowId,
  { title: string; width: number; height: number; defaultPos: { x: number; y: number } }
> = {
  about:      { title: "about.txt",      width: 460, height: 360, defaultPos: { x: 60,  y: 50  } },
  now:        { title: "now.txt",        width: 460, height: 380, defaultPos: { x: 80,  y: 60  } },
  funfacts:   { title: "fun-facts.txt",  width: 440, height: 400, defaultPos: { x: 90,  y: 56  } },
  projects:   { title: "projects/",      width: 620, height: 520, defaultPos: { x: 100, y: 52  } },
  experience: { title: "experience.md",  width: 600, height: 500, defaultPos: { x: 110, y: 54  } },
  skills:     { title: "skills.txt",     width: 560, height: 420, defaultPos: { x: 120, y: 58  } },
  terminal:   { title: "terminal",       width: 580, height: 440, defaultPos: { x: 220, y: 360  } },
  resume:     { title: "resume.pdf",     width: 420, height: 300, defaultPos: { x: 100, y: 90  } },
  contact:    { title: "contact.md",     width: 440, height: 380, defaultPos: { x: 110, y: 80  } },
};

const INITIAL_STATE: Record<WindowId, WinState> = {
  about:      { isOpen: true,  isMinimized: false, zIndex: 11 },
  terminal:   { isOpen: true,  isMinimized: false, zIndex: 12 },
  now:        { isOpen: false, isMinimized: false, zIndex: 10 },
  funfacts:   { isOpen: false, isMinimized: false, zIndex: 9  },
  projects:   { isOpen: false, isMinimized: false, zIndex: 8  },
  experience: { isOpen: false, isMinimized: false, zIndex: 7  },
  skills:     { isOpen: false, isMinimized: false, zIndex: 6  },
  resume:     { isOpen: false, isMinimized: false, zIndex: 5  },
  contact:    { isOpen: false, isMinimized: false, zIndex: 4  },
};

export default function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null);

  // Boot state
  const [booted, setBooted] = useState(false);

  // Window state
  const [windows, setWindows] = useState<Record<WindowId, WinState>>(INITIAL_STATE);
  const [maxZ, setMaxZ] = useState(20);

  // Spotlight
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  // Context menu
  const [ctxMenu, setCtxMenu] = useState<{ x: number; y: number } | null>(null);

  // Keyboard shortcut for Spotlight (cmd+K)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSpotlightOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setSpotlightOpen(false);
        setCtxMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close context menu on click
  useEffect(() => {
    if (!ctxMenu) return;
    const close = () => setCtxMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [ctxMenu]);

  const focusWindow = useCallback(
    (id: WindowId) => {
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], zIndex: newZ, isMinimized: false },
      }));
    },
    [maxZ]
  );

  const openWindow = useCallback(
    (id: WindowId) => {
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setWindows((prev) => ({
        ...prev,
        [id]: { isOpen: true, isMinimized: false, zIndex: newZ },
      }));
    },
    [maxZ]
  );

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
  }, []);

  const handleDockClick = useCallback(
    (id: WindowId) => {
      const state = windows[id];
      if (!state.isOpen || state.isMinimized) {
        openWindow(id);
      } else {
        focusWindow(id);
      }
    },
    [windows, openWindow, focusWindow]
  );

  return (
    <>
      {/* Boot screen */}
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      {/* Main desktop */}
      <div
        ref={desktopRef}
        className="relative overflow-hidden"
        style={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(145deg, #FDFBF8 0%, #F5F0EA 60%, #EDE8E1 100%)",
          opacity: booted ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setCtxMenu({ x: e.clientX, y: e.clientY });
        }}
      >
        {/* Draggable photo stickers */}
        <DesktopStickers />

        {/* Menu bar */}
        <MenuBar
          onSpotlightOpen={() => setSpotlightOpen(true)}
          onWindowOpen={openWindow}
        />

        {/* Desktop file icons (right side) */}
        <DesktopIcons onOpen={openWindow} />

        {/* Windows */}
        {(Object.keys(WIN_CONFIG) as WindowId[]).map((id) => {
          const cfg = WIN_CONFIG[id];
          const state = windows[id];
          return (
            <Window
              key={id}
              id={id}
              title={cfg.title}
              width={cfg.width}
              height={cfg.height}
              defaultPos={cfg.defaultPos}
              isOpen={state.isOpen}
              isMinimized={state.isMinimized}
              zIndex={state.zIndex}
              onFocus={() => focusWindow(id)}
              onClose={() => closeWindow(id)}
              onMinimize={() => minimizeWindow(id)}
            >
              {id === "about"      && <AboutWindow />}
              {id === "now"        && <NowWindow />}
              {id === "funfacts"   && <FunFactsWindow />}
              {id === "projects"   && <ProjectsWindow />}
              {id === "experience" && <ExperienceWindow />}
              {id === "skills"     && <SkillsWindow />}
              {id === "terminal"   && <TerminalWindow isOpen={state.isOpen && !state.isMinimized} />}
              {id === "resume"     && <ResumeWindow />}
              {id === "contact"    && <ContactWindow />}
            </Window>
          );
        })}

        {/* Dock */}
        <Dock windowStates={windows} onDockClick={handleDockClick} />

        {/* Spotlight overlay */}
        <AnimatePresence>
          {spotlightOpen && (
            <Spotlight
              onOpen={(id) => openWindow(id)}
              onClose={() => setSpotlightOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Right-click context menu */}
        {ctxMenu && (
          <ContextMenu
            x={ctxMenu.x}
            y={ctxMenu.y}
            onClose={() => setCtxMenu(null)}
            onOpen={openWindow}
          />
        )}
      </div>
    </>
  );
}
