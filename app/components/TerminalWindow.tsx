"use client";

import { useEffect, useRef, useState } from "react";

interface Line {
  text: string;
  color: string;
  delay: number;
}

const LINES: Line[] = [
  { text: "$ gotorrent add 'magnet:?xt=urn:btih:a83...'", color: "#00d4ff", delay: 0 },
  { text: "  Fetching metadata from DHT...", color: "#4a5a6e", delay: 700 },
  { text: "  Name    ubuntu-24.04.1-desktop-amd64.iso", color: "#c9d6e3", delay: 1300 },
  { text: "  Size    5.7 GB   Peers  142   Seeds  89", color: "#c9d6e3", delay: 1700 },
  { text: "", color: "", delay: 2200 },
  { text: "$ gotorrent start --watch", color: "#00d4ff", delay: 2500 },
  { text: "  Connecting to 38 peers...", color: "#4a5a6e", delay: 3100 },
  { text: "  [██████░░░░░░░░░░░░░░] 29%   41.2 MB/s", color: "#00ff88", delay: 3700 },
  { text: "  [████████████░░░░░░░░] 58%   53.7 MB/s", color: "#00ff88", delay: 4400 },
  { text: "  [█████████████████░░░] 84%   60.1 MB/s", color: "#00ff88", delay: 5100 },
  { text: "  [████████████████████] 100%  Done ✓", color: "#00ff88", delay: 5800 },
  { text: "", color: "", delay: 6200 },
  { text: "  Saved → ~/Downloads/ubuntu-24.04.1-desktop-amd64.iso", color: "#c9d6e3", delay: 6300 },
  { text: "  Time   1m 47s   Avg speed  58.4 MB/s", color: "#4a5a6e", delay: 6700 },
];

const CYCLE = LINES[LINES.length - 1].delay + 4000;

export default function TerminalWindow() {
  const [count, setCount] = useState(0);
  const gen = useRef(0);

  useEffect(() => {
    const runCycle = () => {
      gen.current++;
      const g = gen.current;
      setCount(0);

      LINES.forEach((line, i) => {
        setTimeout(() => {
          if (gen.current === g) setCount(i + 1);
        }, line.delay + 400);
      });
    };

    runCycle();
    const interval = setInterval(runCycle, CYCLE + 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #0d1525 100%)",
        border: "1px solid rgba(0,212,255,0.28)",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow:
          "0 0 40px rgba(0,212,255,0.08), 0 24px 64px rgba(0,0,0,0.6)",
        fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#111827",
          padding: "11px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#ff5f57",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#febc2e",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#28c840",
            display: "inline-block",
          }}
        />
        <span
          style={{
            marginLeft: 10,
            color: "#4a5a6e",
            fontSize: 12,
            letterSpacing: "0.05em",
          }}
        >
          gotorrent — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: "20px 24px 24px",
          minHeight: "280px",
          fontSize: 13,
          lineHeight: 1.9,
        }}
      >
        {LINES.map((line, i) => (
          <div
            key={i}
            style={{
              color: line.color || "transparent",
              opacity: i < count ? 1 : 0,
              transition: "opacity 0.35s ease",
              whiteSpace: "pre",
              height: "1.9em",
            }}
          >
            {line.text}
          </div>
        ))}
        <span className="cursor" />
      </div>
    </div>
  );
}
