import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "Is Wallflow free?",
    a: "Yes. Wallflow is free to download and use, with no account or subscription required.",
  },
  {
    q: "Will it hurt my battery life?",
    a: "It's built to avoid that. Playback automatically pauses on lock, sleep, full-screen apps, window occlusion, Low Power Mode, and thermal throttling — and you can optionally have it pause whenever you're on battery power.",
  },
  {
    q: "Does it upload my videos anywhere?",
    a: "No. Every video you import is transcoded and played back entirely on your Mac. Nothing is ever sent anywhere.",
  },
  {
    q: "Does it work on Intel Macs?",
    a: "No — Wallflow currently requires an Apple Silicon Mac running macOS 26 or later.",
  },
  {
    q: "Why isn't this on the Mac App Store?",
    a: "Reaching the lock screen with a live wallpaper requires a system-level hook that Apple doesn't expose to App Store apps. Wallflow uses it responsibly, with a safe desktop-only fallback if it's ever unavailable — which means direct download is the only way to distribute it.",
  },
  {
    q: "Is it safe to open?",
    a: "Yes. If macOS shows a first-run warning because the app isn't yet notarized, right-click the app in Applications and choose Open once — see the download section above for the full steps.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Good to know.</h2>
        </Reveal>

        <div className="faq-list">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
