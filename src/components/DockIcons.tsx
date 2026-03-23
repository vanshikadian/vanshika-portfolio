"use client";

// macOS-style app icons — 52×52 rounded-rect dock slots

// Finder — two-tone face (classic mac finder)
export function FinderIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="finder-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#72C8FF" />
          <stop offset="100%" stopColor="#3D9BE9" />
        </linearGradient>
        <linearGradient id="finder-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F80D0" />
          <stop offset="100%" stopColor="#1A5FA8" />
        </linearGradient>
      </defs>
      {/* Left face half */}
      <path d="M4 14 Q4 10 8 10 H28 V42 H8 Q4 42 4 38 Z" fill="url(#finder-l)" />
      {/* Right face half */}
      <path d="M28 10 H44 Q48 10 48 14 V38 Q48 42 44 42 H28 Z" fill="url(#finder-r)" />
      {/* Left eye — solid */}
      <ellipse cx="18" cy="24" rx="4.5" ry="5.5" fill="#1C1C1E" />
      <circle cx="19.5" cy="22.5" r="1.6" fill="white" />
      <circle cx="20.2" cy="21.8" r="0.7" fill="white" />
      {/* Right eye — white with dark pupil */}
      <ellipse cx="35" cy="24" rx="4.5" ry="5.5" fill="#F5F5F7" />
      <ellipse cx="35" cy="24.5" rx="2" ry="2.5" fill="#1C1C1E" />
      <circle cx="36" cy="23.2" r="0.9" fill="white" />
      {/* Smile */}
      <path d="M17 33 Q26 39 35 33" stroke="#1C1C1E" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Outer rounded rect clip */}
      <rect width="52" height="52" rx="12" fill="none" />
    </svg>
  );
}

// Notes — yellow notepad
export function NotesIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="notes-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFED4F" />
          <stop offset="100%" stopColor="#F0C030" />
        </linearGradient>
      </defs>
      <rect width="52" height="52" rx="12" fill="url(#notes-bg)" />
      {/* Notepad lines */}
      <rect x="10" y="14" width="32" height="26" rx="3" fill="white" fillOpacity="0.95" />
      {/* Ruled lines */}
      <line x1="14" y1="20" x2="38" y2="20" stroke="#D0C060" strokeWidth="1.2" />
      <line x1="14" y1="25" x2="38" y2="25" stroke="#D0C060" strokeWidth="1.2" />
      <line x1="14" y1="30" x2="38" y2="30" stroke="#D0C060" strokeWidth="1.2" />
      <line x1="14" y1="35" x2="30" y2="35" stroke="#D0C060" strokeWidth="1.2" />
      {/* Left margin line */}
      <line x1="18" y1="14" x2="18" y2="40" stroke="#F09090" strokeWidth="1" />
      {/* Spiral */}
      <circle cx="26" cy="12" r="2" fill="#B8A020" />
      <circle cx="19" cy="12" r="2" fill="#B8A020" />
      <circle cx="33" cy="12" r="2" fill="#B8A020" />
    </svg>
  );
}

// Terminal — dark with green prompt
export function TerminalIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="12" fill="#1C1C1E" />
      <rect width="52" height="52" rx="12" fill="black" fillOpacity="0.3" />
      <path d="M12 19l7 7-7 7" stroke="#39D353" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="23" y1="33" x2="40" y2="33" stroke="#39D353" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Resume — purple document with download
export function ResumeIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="res-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BF5AF2" />
          <stop offset="100%" stopColor="#9B59B6" />
        </linearGradient>
      </defs>
      <rect width="52" height="52" rx="12" fill="url(#res-bg)" />
      <rect x="13" y="9" width="22" height="28" rx="2" fill="white" fillOpacity="0.92" />
      <path d="M35 9v7h6L35 9z" fill="white" fillOpacity="0.55" />
      <rect x="35" y="16" width="6" height="21" rx="0" fill="white" fillOpacity="0.92" />
      <line x1="17" y1="19" x2="31" y2="19" stroke="#BF5AF2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="24" x2="31" y2="24" stroke="#BF5AF2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="29" x2="25" y2="29" stroke="#BF5AF2" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="38" cy="38" r="10" fill="#9B59B6" />
      <circle cx="38" cy="38" r="10" fill="white" fillOpacity="0.18" />
      <path d="M38 32v8m0 0l-3-3m3 3l3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Photos — colorful flower / wheel (macOS Photos style)
export function PhotosIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="12" fill="white" />
      {/* 8 petals arranged around center */}
      {[
        { color: "#FF3B30", angle: 0 },
        { color: "#FF9500", angle: 45 },
        { color: "#FFCC00", angle: 90 },
        { color: "#34C759", angle: 135 },
        { color: "#00C7BE", angle: 180 },
        { color: "#007AFF", angle: 225 },
        { color: "#5856D6", angle: 270 },
        { color: "#FF2D55", angle: 315 },
      ].map(({ color, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 26 + Math.sin(rad) * 10;
        const cy = 26 - Math.cos(rad) * 10;
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="5.5"
            ry="9"
            fill={color}
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        );
      })}
      {/* Center white circle */}
      <circle cx="26" cy="26" r="7" fill="white" />
      <circle cx="26" cy="26" r="4" fill="#E0E0E0" />
    </svg>
  );
}

// Mail — blue envelope
export function MailIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#147EFB" />
        </linearGradient>
      </defs>
      <rect width="52" height="52" rx="12" fill="url(#mail-bg)" />
      {/* Envelope body */}
      <rect x="8" y="16" width="36" height="24" rx="3" fill="white" fillOpacity="0.95" />
      {/* Envelope flap */}
      <path d="M8 16 L26 30 L44 16" stroke="#147EFB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16 L26 30 L44 16 V16 H8 Z" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

// GitHub — dark with Octocat mark
export function GitHubIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="12" fill="#24292E" />
      <path
        d="M26 10C17.163 10 10 17.163 10 26c0 7.071 4.584 13.063 10.942 15.181.8.147 1.092-.347 1.092-.77 0-.38-.014-1.386-.021-2.72-4.45.967-5.39-2.144-5.39-2.144-.727-1.848-1.776-2.34-1.776-2.34-1.452-.992.11-.972.11-.972 1.606.113 2.452 1.65 2.452 1.65 1.427 2.447 3.744 1.74 4.658 1.33.145-1.034.558-1.74 1.015-2.14-3.553-.403-7.288-1.777-7.288-7.907 0-1.747.624-3.174 1.648-4.292-.165-.404-.714-2.031.157-4.232 0 0 1.344-.43 4.4 1.64a15.31 15.31 0 014.003-.539c1.358.006 2.727.184 4.003.539 3.054-2.07 4.395-1.64 4.395-1.64.874 2.201.324 3.828.16 4.232 1.026 1.118 1.645 2.545 1.645 4.292 0 6.145-3.742 7.5-7.306 7.893.574.495 1.086 1.47 1.086 2.963 0 2.14-.02 3.865-.02 4.39 0 .427.288.924 1.1.768C37.421 39.058 42 33.07 42 26c0-8.837-7.163-16-16-16z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

// LinkedIn — blue with "in"
export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" rx="12" fill="#0A66C2" />
      <text x="10" y="36" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="white">
        in
      </text>
    </svg>
  );
}
