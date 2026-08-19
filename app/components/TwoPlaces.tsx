import { TwinPreview } from "@/components/mockups/TwinPreview";
import { Reveal } from "@/components/Reveal";

export function TwoPlaces() {
  return (
    <section className="section two-places">
      <div className="wrap two-places-grid">
        <Reveal className="two-places-visual">
          <TwinPreview />
        </Reveal>
        <Reveal className="two-places-copy">
          <span className="eyebrow">Rare on macOS</span>
          <h2>Two places, one wallpaper.</h2>
          <p>
            Most live-wallpaper apps stop at the desktop. Wallflow puts the same clip on
            your <strong>lock screen</strong> too, using a system-level hook most apps can&rsquo;t
            reach — with a graceful desktop-only fallback if that path is ever unavailable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
