import ParticleCanvas from "@/app/components/ParticleCanvas";
import AppWindowMock from "@/app/components/AppWindowMock";

const GITHUB = "https://github.com/TarunVishwakarma1/gotorrent";
const RELEASES = `${GITHUB}/releases`;

/* ── Feature cards ─────────────────────────────────────────── */

const FEATURES = [
  {
    icon: "⚡",
    title: "Goroutine-Powered Downloads",
    desc: "Go's concurrency model downloads multiple chunks simultaneously. Max your bandwidth, every time.",
    accent: "#00d4ff",
  },
  {
    icon: "🖥️",
    title: "Native GUI",
    desc: "Built with Fyne — a beautiful, responsive interface that feels at home on every OS.",
    accent: "#00ff88",
  },
  {
    icon: "🔗",
    title: "Magnet & .torrent",
    desc: "Paste a magnet URI or load a .torrent file. Full DHT, PEX, and tracker support.",
    accent: "#00d4ff",
  },
  {
    icon: "🌐",
    title: "Truly Cross-Platform",
    desc: "One codebase. Native builds for Linux, macOS (Apple Silicon + Intel), and Windows.",
    accent: "#00ff88",
  },
  {
    icon: "📦",
    title: "Lightweight",
    desc: "Small binary, minimal resource footprint. Powerful without being a memory hog.",
    accent: "#00d4ff",
  },
  {
    icon: "🔓",
    title: "Open Source",
    desc: "MIT licensed. No telemetry, no ads, no accounts. Just your downloads.",
    accent: "#00ff88",
  },
];

/* ── Platform download cards ────────────────────────────────── */

const PLATFORMS = [
  {
    icon: "🐧",
    name: "Linux",
    sub: "64-bit · ARM64",
    formats: [".tar.gz", ".deb"],
  },
  {
    icon: "🍎",
    name: "macOS",
    sub: "Apple Silicon · Intel",
    formats: [".dmg", ".pkg"],
  },
  {
    icon: "🪟",
    name: "Windows",
    sub: "64-bit",
    formats: [".exe", ".zip"],
  },
];

/* ── How-it-works steps ─────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "Download & Install",
    desc: "Grab the installer for your platform from GitHub Releases. No runtime, no dependencies — just run it.",
  },
  {
    num: "02",
    title: "Add a Torrent",
    desc: 'Click "Add Torrent" and paste a magnet link or load a .torrent file. GoTorrent fetches metadata instantly.',
  },
  {
    num: "03",
    title: "Watch it Download",
    desc: "Live progress bars, real-time speed, peer counts — all visible in the clean GUI. No terminal needed.",
  },
];

/* ── Stats bar ──────────────────────────────────────────────── */

const STATS = [
  { value: "60+", label: "MB/s avg speed" },
  { value: "3", label: "platforms" },
  { value: "Fyne", label: "GUI framework" },
  { value: "MIT", label: "licensed" },
];

/* ═══════════════════════════════════════════════════════════════
   Page
═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div
      style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}
    >
      <Nav />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

/* ── Nav ──────────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(0,212,255,0.1)",
        backdropFilter: "blur(14px)",
        background: "rgba(5,9,18,0.85)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "linear-gradient(135deg,#00d4ff,#0055ff)",
              display: "grid",
              placeItems: "center",
              fontSize: 18,
              fontWeight: 900,
              color: "#050912",
            }}
          >
            GT
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            GoTorrent
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#download" className="nav-link">Download</a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ padding: "8px 18px", fontSize: 13 }}
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="grid-bg"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ParticleCanvas />
      <div className="scan-line" style={{ top: 0 }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div style={{ animation: "fade-up 0.7s ease forwards" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: 999,
              marginBottom: 28,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--cyan)",
              background: "rgba(0,212,255,0.06)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--green)",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(0,255,136,0.8)",
              }}
            />
            Powered by Go · Fyne GUI · Open Source
          </div>

          <h1 className="hero-title" style={{ color: "#fff", marginBottom: 12 }}>
            <span className="shimmer">Torrents.</span>
            <br />
            <span style={{ color: "#fff" }}>Beautiful.</span>
            <br />
            <span className="glow-cyan">Blazing fast.</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#8a9ab0",
              maxWidth: 460,
              marginTop: 24,
              marginBottom: 40,
            }}
          >
            GoTorrent is a cross-platform desktop torrent client with a sleek
            native GUI. Backed by Go&apos;s concurrency engine for speeds
            that leave the rest behind.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <DownloadIcon />
              Download Free
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GitHubIcon />
              View on GitHub
            </a>
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "var(--muted)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Linux · macOS · Windows &nbsp;·&nbsp; Free forever
          </p>
        </div>

        {/* Right: App window mockup */}
        <div style={{ animation: "fade-up 0.7s 0.15s ease both" }}>
          <AppWindowMock />
        </div>
      </div>
    </section>
  );
}

/* ── Stats bar ────────────────────────────────────────────────── */

function StatsBar() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(0,212,255,0.12)",
        borderBottom: "1px solid rgba(0,212,255,0.12)",
        background: "rgba(0,18,38,0.4)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "28px 24px",
              textAlign: "center",
              borderRight:
                i < STATS.length - 1
                  ? "1px solid rgba(0,212,255,0.1)"
                  : "none",
            }}
          >
            <div
              className="glow-cyan"
              style={{
                fontSize: 32,
                fontWeight: 800,
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "-0.02em",
              }}
            >
              {s.value}
            </div>
            <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Features ─────────────────────────────────────────────────── */

function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: "var(--cyan)",
            fontSize: 12,
            letterSpacing: "0.15em",
            marginBottom: 12,
          }}
        >
          CAPABILITIES
        </p>
        <h2 className="section-title" style={{ color: "#fff" }}>
          Built for everyone.
          <br />
          <span className="glow-green">Engineered for speed.</span>
        </h2>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: 17,
            maxWidth: 500,
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          A desktop app that doesn&apos;t get in your way — and doesn&apos;t
          slow you down.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {FEATURES.map((f, i) => (
          <div key={i} className="card">
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: `${f.accent}12`,
                border: `1px solid ${f.accent}30`,
                display: "grid",
                placeItems: "center",
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 10,
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </h3>
            <p style={{ color: "#8a9ab0", fontSize: 14, lineHeight: 1.7 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── How It Works ─────────────────────────────────────────────── */

function HowItWorksSection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        background: "rgba(0,8,18,0.5)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: "var(--cyan)",
              fontSize: 12,
              letterSpacing: "0.15em",
              marginBottom: 12,
            }}
          >
            QUICKSTART
          </p>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Download anything
            <br />
            <span className="glow-cyan">in 3 steps.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {STEPS.map((step, i) => (
            <div key={i} style={{ position: "relative" }}>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    right: -12,
                    width: 24,
                    height: 1,
                    background:
                      "linear-gradient(90deg,rgba(0,212,255,0.4),rgba(0,212,255,0.1))",
                    zIndex: 1,
                  }}
                />
              )}

              <div className="card" style={{ height: "100%" }}>
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 40,
                    fontWeight: 900,
                    color: "rgba(0,212,255,0.12)",
                    lineHeight: 1,
                    marginBottom: 16,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 14,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#8a9ab0", fontSize: 14, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Download ─────────────────────────────────────────────────── */

function DownloadSection() {
  return (
    <section
      id="download"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: "var(--cyan)",
            fontSize: 12,
            letterSpacing: "0.15em",
            marginBottom: 12,
          }}
        >
          DOWNLOAD
        </p>
        <h2 className="section-title" style={{ color: "#fff" }}>
          Your platform.
          <br />
          <span className="glow-green">Your choice.</span>
        </h2>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: 17,
            maxWidth: 460,
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          Native installers for every major OS. No setup, no dependencies.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 48,
        }}
      >
        {PLATFORMS.map((p, i) => (
          <div
            key={i}
            className="card"
            style={{ textAlign: "center", padding: "40px 28px" }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>{p.icon}</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 13,
                marginBottom: 28,
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {p.sub}
            </p>
            <div
              style={{ display: "flex", gap: 10, justifyContent: "center" }}
            >
              {p.formats.map((fmt) => (
                <a
                  key={fmt}
                  href={RELEASES}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                >
                  <DownloadIcon size={14} />
                  {fmt}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href={RELEASES}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          View all releases on GitHub →
        </a>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.1)",
        background: "rgba(0,5,12,0.8)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 700,
              fontSize: 16,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            GoTorrent
          </div>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            A Go project by{" "}
            <a
              href="https://github.com/TarunVishwakarma1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ color: "var(--cyan)" }}
            >
              TarunVishwakarma1
            </a>
            . MIT Licensed.
          </p>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="footer-link">
            Releases
          </a>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>
            © 2025 GoTorrent
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ── SVG Icons ────────────────────────────────────────────────── */

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function DownloadIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
