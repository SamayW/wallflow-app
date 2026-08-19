import { Reveal } from "@/components/Reveal";

const VERSION = "0.1.0";
const DMG_PATH = `/downloads/Wallflow-${VERSION}.dmg`;
const DMG_SIZE = "2.5 MB"; // filled in by scripts/build-dmg.sh output
const DMG_SHA256 = "75e8966501a4d5d0c4bab42ef63b761bdb2c7273fc6f3aab2944a6a115f08182"; // filled in by scripts/build-dmg.sh output
const RELEASE_DATE = "August 2026";

export function Download() {
  return (
    <section id="download" className="section">
      <div className="wrap">
        <Reveal className="download-panel glass glass--tinted-accent glass--glow">
          <div className="download-copy">
            <span className="eyebrow">Download</span>
            <h2>Get Wallflow for Mac.</h2>
            <p>
              Download the disk image, open it, then drag Wallflow into your Applications
              folder. That&rsquo;s it — no installer, no account.
            </p>
            <div className="meta-row download-meta">
              <span className="chip">
                <strong>v{VERSION}</strong>
              </span>
              <span className="chip">{DMG_SIZE}</span>
              <span className="chip">macOS 26.0+ · Apple Silicon</span>
              <span className="chip">{RELEASE_DATE}</span>
            </div>
          </div>

          <div className="download-cta">
            <a href={DMG_PATH} className="btn btn-primary" download>
              Download for Mac
            </a>
            <p className="download-checksum">
              SHA-256: <code>{DMG_SHA256}</code>
            </p>

            <details className="disclosure">
              <summary>First time opening it?</summary>
              <ol>
                <li>Open the downloaded .dmg file.</li>
                <li>Drag Wallflow into the Applications folder shown alongside it.</li>
                <li>
                  Open Wallflow from Applications. If macOS flags it as unverified, right-click
                  the app and choose <strong>Open</strong>, then confirm once.
                </li>
              </ol>
            </details>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
