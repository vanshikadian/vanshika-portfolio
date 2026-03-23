"use client";

import { useEffect, useState, useRef } from "react";

type Line = { type: "prompt" | "output" | "error" | "blank"; text: string };

// Auto-play intro sequence
const INTRO: Array<{ type: "cmd" | "out" | "blank"; text?: string }> = [
  { type: "cmd",  text: "whoami" },
  { type: "out",  text: "vanshika kadian" },
  { type: "out",  text: "cs + cognitive science @ michigan state · honors college" },
  { type: "blank" },
  { type: "cmd",  text: "cat status.txt" },
  { type: "out",  text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "out",  text: "status:      open to work ✓" },
  { type: "out",  text: "graduating:  may 2026" },
  { type: "out",  text: "seeking:     swe · mle · data engineering" },
  { type: "out",  text: "location:    east lansing → open to relocate" },
  { type: "out",  text: "sponsorship: requires opt / h-1b" },
  { type: "out",  text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  { type: "blank" },
  { type: "cmd",  text: "ls internships/" },
  { type: "out",  text: "bosch/          waggoner-financial/" },
  { type: "out",  text: "elsamex/        kohler-capstone/" },
  { type: "blank" },
  { type: "cmd",  text: "ls projects/" },
  { type: "out",  text: "multi-agent-ai/     model-serving-api/" },
  { type: "out",  text: "similarity-search/  nfl-draft-prediction/" },
  { type: "out",  text: "vehicle-classifier/" },
  { type: "blank" },
  { type: "cmd",  text: "cat contact.txt" },
  { type: "out",  text: "email:    kadianva@msu.edu" },
  { type: "out",  text: "linkedin: linkedin.com/in/vanshika-kadian" },
  { type: "out",  text: "github:   github.com/vanshikadian" },
  { type: "blank" },
];

function buildFrames() {
  const frames: Array<{ snapshot: Line[]; delay: number }> = [];
  let cur: Line[] = [];
  let delay = 600;
  for (const item of INTRO) {
    if (item.type === "blank") {
      cur = [...cur, { type: "blank", text: "" }];
      frames.push({ snapshot: cur, delay });
      delay += 100;
    } else if (item.type === "out") {
      cur = [...cur, { type: "output", text: item.text! }];
      frames.push({ snapshot: cur, delay });
      delay += 55;
    } else {
      const full = "$ " + item.text!;
      delay += 250;
      for (let i = 0; i <= full.length; i++) {
        const snap = [...cur, { type: "prompt" as const, text: full.slice(0, i) }];
        frames.push({ snapshot: snap, delay });
        delay += i === 0 ? 0 : 52;
      }
      cur = [...cur, { type: "prompt", text: full }];
      delay += 260;
    }
  }
  return frames;
}

const FRAMES = buildFrames();

// Simple command responses
const RESPONSES: Record<string, string[]> = {
  help: [
    "available commands:",
    "  whoami        — who am i",
    "  skills        — what i know",
    "  contact       — reach me",
    "  clear         — clear terminal",
    "  cat resume    — resume summary",
    "  echo <text>   — say something",
    "  ls            — list stuff",
  ],
  skills: [
    "ml & ai    PyTorch · TensorFlow · FAISS · LLMs · Multi-Agent AI · RAG",
    "backend    FastAPI · Nest.js · GraphQL · Django · React · TypeScript",
    "data/infra PostgreSQL · Redis · Docker · Azure · Databricks · CI/CD",
    "languages  Python · C++ · SQL · JavaScript · R",
  ],
  contact: [
    "email    kadianva@msu.edu",
    "github   github.com/vanshikadian",
    "linkedin linkedin.com/in/vanshika-kadian",
  ],
  "cat resume": [
    "Vanshika Kadian — Systems Engineer",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Education   B.S. CS + Cog Sci @ MSU · GPA 3.8 · May 2026",
    "Experience  Bosch · Waggoner Financial · Kohler · Elsamex",
    "            ML pipelines · GraphQL APIs · Multi-Agent AI",
    "Status      Open to full-time · OPT/H-1B required",
  ],
  ls: [
    "about.txt    experience.md    projects/    skills.txt    resume.pdf",
  ],
  "ls -la": [
    "total 5",
    "drwxr-xr-x  about.txt       2.1K  Mar 2026",
    "drwxr-xr-x  experience.md   4.3K  Mar 2026",
    "drwxr-xr-x  projects/       <DIR>",
    "drwxr-xr-x  skills.txt      1.8K  Mar 2026",
    "-rw-r--r--  resume.pdf      897K  Mar 2026",
  ],
};

interface TerminalWindowProps {
  isOpen: boolean;
}

export default function TerminalWindow({ isOpen }: TerminalWindowProps) {
  const [lines, setLines] = useState<Line[]>([]);
  const [introDone, setIntroDone] = useState(false);
  const [input, setInput] = useState("");
  const [historyIdx, setHistoryIdx] = useState(-1);
  const cmdHistory = useRef<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-play intro
  useEffect(() => {
    if (!isOpen) {
      setLines([]);
      setIntroDone(false);
      return;
    }
    const timeouts = FRAMES.map(({ snapshot, delay }, i) =>
      setTimeout(() => {
        setLines(snapshot);
        if (i === FRAMES.length - 1) setIntroDone(true);
      }, delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && introDone) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, introDone]);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Save history
    cmdHistory.current = [cmd, ...cmdHistory.current.slice(0, 49)];
    setHistoryIdx(-1);

    // Echo the command
    const newLine: Line = { type: "prompt", text: "$ " + cmd };

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    let response: Line[];
    if (cmd.startsWith("echo ")) {
      response = [{ type: "output", text: cmd.slice(5) }];
    } else if (RESPONSES[cmd]) {
      response = RESPONSES[cmd].map((t) => ({ type: "output" as const, text: t }));
    } else if (cmd === "whoami") {
      response = [{ type: "output", text: "vanshika kadian — cs + cognitive science @ msu" }];
    } else if (cmd === "date") {
      response = [{ type: "output", text: new Date().toLocaleString() }];
    } else if (cmd === "pwd") {
      response = [{ type: "output", text: "/Users/vanshika/portfolio" }];
    } else {
      response = [{ type: "error", text: `command not found: ${cmd}. type 'help' for commands.` }];
    }

    setLines((prev) => [...prev, newLine, ...response, { type: "blank", text: "" }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.current.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory.current[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : cmdHistory.current[next] ?? "");
    }
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{ background: "#0D1117", fontFamily: "ui-monospace, 'SF Mono', Monaco, monospace" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Output area */}
      <div className="flex-1 overflow-y-auto window-scroll px-4 pt-3 pb-1 text-[13px] leading-[1.7]">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === "prompt" && (
              <span style={{ color: "#39D353" }}>{line.text}</span>
            )}
            {line.type === "output" && (
              <span style={{ color: "rgba(57,211,83,0.65)" }}>{line.text}</span>
            )}
            {line.type === "error" && (
              <span style={{ color: "#FF453A" }}>{line.text}</span>
            )}
            {line.type === "blank" && <span>&nbsp;</span>}
          </div>
        ))}

        {/* Blinking cursor when waiting for intro */}
        {!introDone && (
          <span className="inline-block w-2 h-[14px] align-middle" style={{ background: "#39D353", animation: "blink 1s step-end infinite" }} />
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      {introDone && (
        <div
          className="flex items-center px-4 py-2 shrink-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-[13px] mr-2 shrink-0" style={{ color: "#39D353", fontFamily: "inherit" }}>$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-[13px] caret-green-400"
            style={{
              color: "#39D353",
              fontFamily: "inherit",
              caretColor: "#39D353",
            }}
            placeholder="type 'help' for commands..."
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
      )}

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        input::placeholder { color: rgba(57,211,83,0.25); }
      `}</style>
    </div>
  );
}
