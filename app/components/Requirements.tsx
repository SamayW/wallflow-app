import { Reveal } from "@/components/Reveal";
import { IconApple, IconMonitor, IconShield, IconSparkle } from "@/components/Icons";

const REQUIREMENTS = [
  { icon: IconApple, label: "macOS 26.0 or later" },
  { icon: IconMonitor, label: "Apple Silicon Mac (M-series)" },
  { icon: IconSparkle, label: "Free — no account, no subscription" },
  { icon: IconShield, label: "Direct download, not on the Mac App Store" },
];

export function Requirements() {
  return (
    <section id="requirements" className="section section--tight">
      <div className="wrap requirements-row">
        <Reveal className="requirements-copy">
          <span className="eyebrow">System requirements</span>
          <h2>Built for the newest Macs.</h2>
          <p>
            Wallflow leans on macOS 26&rsquo;s newest materials and system hooks, so it
            targets current Apple Silicon hardware rather than trying to support everything
            at once.
          </p>
        </Reveal>
        <Reveal>
          <ul className="requirements-list">
            {REQUIREMENTS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon className="icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
