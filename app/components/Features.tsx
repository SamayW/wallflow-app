import {
  IconMonitor,
  IconBattery,
  IconShield,
  IconMenuBar,
  IconSparkle,
  IconLock,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: IconMonitor,
    title: "A wallpaper per display",
    body: "Each screen can have its own clip, or leave every display in sync with All Displays.",
  },
  {
    icon: IconBattery,
    title: "Built to sip battery",
    body: "Playback pauses the instant nothing is on screen — on lock, sleep, full-screen apps, window occlusion, Low Power Mode, or thermal throttling. An optional toggle pauses on battery too.",
  },
  {
    icon: IconShield,
    title: "100% local, always",
    body: "Your video never leaves your Mac. Everything is imported, transcoded, and played back on-device — nothing is ever uploaded.",
  },
  {
    icon: IconMenuBar,
    title: "Lives in your menu bar",
    body: "Switch clips, pause, stop, or import a new one from a quick glass panel — no need to open the main window.",
  },
  {
    icon: IconSparkle,
    title: "Liquid Glass, natively",
    body: "Built with macOS 26's newest materials from the ground up — translucent, fast, and unmistakably a Mac app.",
  },
  {
    icon: IconLock,
    title: "Set once, stays put",
    body: "Wallflow restores your wallpaper automatically on login and reboot — even if the app itself isn't running.",
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything a live wallpaper should do.</h2>
          <p>Six things Wallflow gets right so you don&rsquo;t have to think about it again.</p>
        </Reveal>

        <div className="features-grid">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              className={`feature-card panel${i === 0 ? " feature-card--lead" : ""}`}
            >
              <div className="feature-icon" style={{ transitionDelay: `${i * 40}ms` }}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
