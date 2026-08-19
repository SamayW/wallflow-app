import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Wallflow's privacy policy — what data the app does (and doesn't) collect.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main" className="legal-main">
        <div className="wrap legal-content">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated August 19, 2026</p>

          <p>
            Wallflow is designed around a simple rule: your videos and your wallpaper choices
            never leave your Mac. This page explains exactly what that means.
          </p>

          <h2>What Wallflow does on your device</h2>
          <ul>
            <li>
              Any video you import is read, transcoded, and stored locally on your Mac, inside
              your own user library — never uploaded to a server.
            </li>
            <li>
              Wallpaper playback (on the desktop and lock screen) happens entirely on-device
              through macOS&rsquo;s own system frameworks.
            </li>
            <li>
              Your display setup, wallpaper assignments, and preferences are stored locally in
              standard macOS app preferences.
            </li>
          </ul>

          <h2>What Wallflow does not do</h2>
          <ul>
            <li>It does not upload, transmit, or share your videos with anyone, including us.</li>
            <li>It does not require an account, sign-in, or internet connection to function.</li>
            <li>It does not include analytics, tracking, or advertising SDKs.</li>
            <li>It does not collect or transmit any personal data.</li>
          </ul>

          <h2>This website</h2>
          <p>
            This website does not use analytics or tracking cookies. Downloading the app from
            this site is handled by your browser like any other file download; we don&rsquo;t
            log or store anything about that beyond standard web server access logs kept by our
            hosting provider.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, the &ldquo;last updated&rdquo; date above will change with
            it. Material changes will be reflected here before they take effect.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach out at{" "}
            <a href="mailto:hello@wallflow.app">hello@wallflow.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
