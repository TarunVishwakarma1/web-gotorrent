import ParticleCanvas from "@/app/components/ParticleCanvas";
import AppWindowMock from "@/app/components/AppWindowMock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
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
        className="w-full max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between"
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
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#download" className="nav-link">Download</a>
          <Button
            nativeButton={false}
            render={<Link href={GITHUB} target="_blank" rel="noopener noreferrer" />}
            variant="outline"
            className="border-[rgba(0,212,255,0.35)] text-[var(--cyan)] hover:bg-[rgba(0,212,255,0.08)] hover:text-[var(--cyan)] shadow-[0_0_25px_rgba(0,212,255,0)] hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] transition-all"
          >
            <GitHubIcon />
            GitHub
          </Button>
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
        className="relative max-w-[1200px] mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
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

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Button
              nativeButton={false}
              render={<Link href={RELEASES} target="_blank" rel="noopener noreferrer" />}
              className="bg-gradient-to-br from-[#00d4ff] to-[#0055ff] text-[#020813] font-bold py-6 px-8 rounded-lg hover:scale-105 transition-transform hover:shadow-[0_15px_40px_rgba(0,212,255,0.5)] border-none"
            >
              <DownloadIcon />
              Download Free
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={GITHUB} target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              className="border-[rgba(0,212,255,0.35)] text-[var(--cyan)] py-6 px-8 rounded-lg hover:bg-[rgba(0,212,255,0.08)] hover:text-[var(--cyan)] hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] bg-transparent transition-all"
            >
              <GitHubIcon />
              View on GitHub
            </Button>
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
        className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className={`py-8 px-6 text-center ${
              i % 2 === 0 ? "border-r" : ""
            } md:border-r border-[rgba(0,212,255,0.1)] last:border-r-0`}
          >
            <div
              className="glow-cyan text-[32px] font-extrabold font-mono -tracking-wider"
            >
              {s.value}
            </div>
            <div className="text-[var(--muted)] text-[13px] mt-1">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FEATURES.map((f, i) => (
          <Card key={i} className="bg-[rgba(0,18,38,0.55)] border-[rgba(0,212,255,0.15)] backdrop-blur-sm hover:border-[rgba(0,212,255,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.12),inset_0_0_20px_rgba(0,212,255,0.03)] hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="pb-2">
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl mb-2"
                style={{ background: `${f.accent}12`, border: `1px solid ${f.accent}30` }}
              >
                {f.icon}
              </div>
              <CardTitle className="text-lg font-bold text-white -tracking-tight">
                {f.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#8a9ab0] text-sm leading-relaxed">
                {f.desc}
              </p>
            </CardContent>
          </Card>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-[28px] -right-[16px] w-[32px] h-[1px] bg-gradient-to-r from-[rgba(0,212,255,0.4)] to-[rgba(0,212,255,0.1)] z-10"
                />
              )}

              <Card className="h-full bg-[rgba(0,18,38,0.55)] border-[rgba(0,212,255,0.15)] backdrop-blur-sm hover:border-[rgba(0,212,255,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.12),inset_0_0_20px_rgba(0,212,255,0.03)] hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6">
                  <div
                    className="font-mono text-[40px] font-black text-[rgba(0,212,255,0.12)] leading-none mb-4 -tracking-wider"
                  >
                    {step.num}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#8a9ab0] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {PLATFORMS.map((p, i) => (
          <Card
            key={i}
            className="text-center px-6 py-10 bg-[rgba(0,18,38,0.55)] border-[rgba(0,212,255,0.15)] backdrop-blur-sm hover:border-[rgba(0,212,255,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.12),inset_0_0_20px_rgba(0,212,255,0.03)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{p.icon}</div>
            <h3
              className="text-[22px] font-bold text-white mb-2"
            >
              {p.name}
            </h3>
            <p
              className="text-[var(--muted)] text-[13px] mb-7 font-mono"
            >
              {p.sub}
            </p>
            <div
              className="flex flex-wrap gap-2 justify-center"
            >
              {p.formats.map((fmt) => (
                <Button
                  key={fmt}
                  nativeButton={false}
                  render={<Link href={RELEASES} target="_blank" rel="noopener noreferrer" />}
                  variant="outline"
                  className="bg-[rgba(0,212,255,0.05)] border-[rgba(0,212,255,0.3)] text-[var(--cyan)] hover:bg-[rgba(0,212,255,0.13)] hover:text-[var(--cyan)] hover:border-[var(--cyan)] hover:shadow-[0_0_18px_rgba(0,212,255,0.2)] transition-all h-9 px-4"
                >
                  <DownloadIcon size={14} />
                  {fmt}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <Button
          nativeButton={false}
          render={<Link href={RELEASES} target="_blank" rel="noopener noreferrer" />}
          variant="outline"
          className="border-[rgba(0,212,255,0.35)] text-[var(--cyan)] py-6 px-8 rounded-lg hover:bg-[rgba(0,212,255,0.08)] hover:text-[var(--cyan)] hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] bg-transparent transition-all"
        >
          View all releases on GitHub &rarr;
        </Button>
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
        className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="text-center md:text-left">
          <div
            className="font-mono font-bold text-base text-white mb-2"
          >
            GoTorrent
          </div>
          <p className="text-[var(--muted)] text-[13px]">
            A Go project by{" "}
            <a
              href="https://github.com/TarunVishwakarma1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] hover:text-white transition-colors"
            >
              TarunVishwakarma1
            </a>
            . MIT Licensed.
          </p>
        </div>

        <div className="flex gap-6 items-center flex-wrap justify-center">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="footer-link hover:text-[var(--cyan)] transition-colors text-[13px]">
            GitHub
          </a>
          <a href={RELEASES} target="_blank" rel="noopener noreferrer" className="footer-link hover:text-[var(--cyan)] transition-colors text-[13px]">
            Releases
          </a>
          <span className="text-[var(--muted)] text-[13px]">
            &copy; 2025 GoTorrent
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
