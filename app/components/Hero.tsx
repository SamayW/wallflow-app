import { StageMockup } from "@/components/mockups/StageMockup";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">macOS 26 · Apple Silicon</span>
          <h1>
            Turn any video into a <span className="text-accent">live wallpaper</span> for
            your Mac.
          </h1>
          <p className="hero-sub">
            Running behind your icons, on the desktop and the lock screen — using almost no
            battery.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              Download for Mac
            </a>
            <a href="#how-it-works" className="btn btn-glass">
              See how it works
            </a>
          </div>
          <div className="meta-row hero-meta">
            <span className="chip">Free</span>
            <span className="chip">
              <strong>v0.1.0</strong>
            </span>
            <span className="chip">macOS 26.0+</span>
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <StageMockup />
        </Reveal>
      </div>
    </section>
  );
}
