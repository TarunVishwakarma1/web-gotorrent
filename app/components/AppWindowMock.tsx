"use client";

import { useEffect, useRef, useState } from "react";

interface Torrent {
  name: string;
  size: string;
  progress: number;
  speed: string;
  peers: number;
  status: "downloading" | "seeding" | "paused" | "done";
}

const INITIAL_TORRENTS: Torrent[] = [
  { name: "ubuntu-24.04.1-desktop-amd64.iso", size: "5.7 GB", progress: 100, speed: "—", peers: 0, status: "seeding" },
  { name: "archlinux-2025.04-x86_64.iso", size: "1.1 GB", progress: 73, speed: "48.2 MB/s", peers: 34, status: "downloading" },
  { name: "debian-12.9.0-amd64-DVD-1.iso", size: "3.9 GB", progress: 31, speed: "61.7 MB/s", peers: 58, status: "downloading" },
];

const STATUS_COLOR: Record<string, string> = {
  downloading: "#00d4ff",
  seeding: "#00ff88",
  paused: "#4a5a6e",
  done: "#00ff88",
};

const STATUS_LABEL: Record<string, string> = {
  downloading: "Downloading",
  seeding: "Seeding",
  paused: "Paused",
  done: "Done",
};

export default function AppWindowMock() {
  const [torrents, setTorrents] = useState<Torrent[]>(INITIAL_TORRENTS);
  const [totalDown, setTotalDown] = useState(109.9);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    tickRef.current = setInterval(() => {
      setTorrents((prev) =>
        prev.map((t) => {
          if (t.status !== "downloading") return t;
          const delta = Math.random() * 2.5;
          const newProgress = Math.min(100, t.progress + delta * 0.3);
          return {
            ...t,
            progress: newProgress,
            speed: `${(45 + Math.random() * 25).toFixed(1)} MB/s`,
            status: newProgress >= 100 ? "seeding" : "downloading",
          };
        })
      );
      setTotalDown((d) => parseFloat((d + Math.random() * 0.4).toFixed(1)));
    }, 800);

    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const downloadingCount = torrents.filter(
    (t) => t.status === "downloading"
  ).length;

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0f1520 0%, #0d1828 100%)",
        border: "1px solid rgba(0,212,255,0.28)",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow:
          "0 0 50px rgba(0,212,255,0.08), 0 30px 80px rgba(0,0,0,0.7)",
        fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        userSelect: "none",
      }}
    >
      {/* ── Title bar ──────────────────────────────── */}
      <div
        style={{
          background: "#111827",
          padding: "11px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,212,255,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
        </div>
        <span style={{ color: "#6b7a8d", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
          GoTorrent
        </span>
        <span style={{ width: 60 }} />
      </div>

      {/* ── Toolbar ────────────────────────────────── */}
      <div
        style={{
          background: "#0d1520",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid rgba(0,212,255,0.08)",
        }}
      >
        <button
          style={{
            background: "linear-gradient(135deg,#00d4ff,#0055ff)",
            color: "#050912",
            border: "none",
            borderRadius: 6,
            padding: "6px 14px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span>＋</span> Add Torrent
        </button>
        <button
          style={{
            background: "rgba(0,212,255,0.08)",
            color: "#6b7a8d",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 6,
            padding: "6px 12px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          ⏸ Pause All
        </button>

        {/* right side stats */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
          <span style={{ fontSize: 11, color: "#4a5a6e" }}>
            ↓{" "}
            <span style={{ color: "#00d4ff" }}>
              {torrents
                .filter((t) => t.status === "downloading")
                .reduce((s, t) => s + parseFloat(t.speed), 0)
                .toFixed(1)}{" "}
              MB/s
            </span>
          </span>
          <span style={{ fontSize: 11, color: "#4a5a6e" }}>
            ↑ <span style={{ color: "#00ff88" }}>2.3 MB/s</span>
          </span>
        </div>
      </div>

      {/* ── Torrent list ───────────────────────────── */}
      <div style={{ padding: "6px 0" }}>
        {torrents.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "12px 16px",
              borderBottom:
                i < torrents.length - 1
                  ? "1px solid rgba(0,212,255,0.06)"
                  : "none",
              background: i === 1 ? "rgba(0,212,255,0.04)" : "transparent",
            }}
          >
            {/* Name row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 7,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#c9d6e3",
                  maxWidth: 340,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: STATUS_COLOR[t.status],
                  fontWeight: 600,
                  marginLeft: 16,
                  whiteSpace: "nowrap",
                }}
              >
                {STATUS_LABEL[t.status]}
              </span>
            </div>

            {/* Progress bar */}
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                height: 4,
                overflow: "hidden",
                marginBottom: 7,
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 4,
                  width: `${t.progress}%`,
                  background:
                    t.status === "seeding"
                      ? "linear-gradient(90deg,#00ff88,#00cc66)"
                      : "linear-gradient(90deg,#00d4ff,#0055ff)",
                  transition: "width 0.8s ease",
                  boxShadow:
                    t.status === "seeding"
                      ? "0 0 6px rgba(0,255,136,0.5)"
                      : "0 0 6px rgba(0,212,255,0.5)",
                }}
              />
            </div>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                gap: 20,
                fontSize: 11,
                color: "#4a5a6e",
              }}
            >
              <span>{t.size}</span>
              <span>{t.progress.toFixed(1)}%</span>
              {t.status === "downloading" && (
                <>
                  <span style={{ color: "#00d4ff" }}>{t.speed}</span>
                  <span>{t.peers} peers</span>
                </>
              )}
              {t.status === "seeding" && (
                <span style={{ color: "#00ff88" }}>Complete</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Status bar ─────────────────────────────── */}
      <div
        style={{
          background: "#0a0f1a",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(0,212,255,0.08)",
          fontSize: 11,
          color: "#4a5a6e",
        }}
      >
        <span>
          {downloadingCount} downloading · {torrents.length} total
        </span>
        <span>
          Downloaded:{" "}
          <span style={{ color: "#c9d6e3" }}>{totalDown.toFixed(1)} GB</span>
        </span>
      </div>
    </div>
  );
}
