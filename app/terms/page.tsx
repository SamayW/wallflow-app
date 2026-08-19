import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for downloading and using Wallflow.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="legal-main">
        <div className="wrap legal-content">
          <h1>Terms of Use</h1>
          <p className="legal-updated">Last updated August 19, 2026</p>

          <p>
            These terms cover downloading and using Wallflow from this website. By downloading
            Wallflow, you agree to the terms below.
          </p>

          <h2>The app</h2>
          <ul>
            <li>Wallflow is provided free of charge, as-is, with no warranty of any kind.</li>
            <li>
              Wallflow requires an Apple Silicon Mac running macOS 26.0 or later, and is
              distributed only from this website — it is not available on the Mac App Store.
            </li>
            <li>
              You&rsquo;re responsible for the videos you import and set as wallpapers, and for
              having the rights to use them.
            </li>
          </ul>

          <h2>No warranty</h2>
          <p>
            Wallflow is offered without warranties of any kind, express or implied, including
            fitness for a particular purpose. We are not liable for any damages, including
            battery wear, data loss, or system issues, arising from use of the app, to the
            fullest extent permitted by law.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may not redistribute modified versions of Wallflow, attempt to circumvent its
            licensing, or use it in a way that violates applicable law.
          </p>

          <h2>Changes</h2>
          <p>
            We may update Wallflow or these terms over time. Continuing to use the app after an
            update means you accept the current terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Reach out at <a href="mailto:hello@wallflow.app">hello@wallflow.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
