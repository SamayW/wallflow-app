import { Dropzone } from "@/components/mockups/Dropzone";
import { DisplayPicker } from "@/components/mockups/DisplayPicker";
import { MenuBarMock } from "@/components/mockups/MenuBarMock";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    index: "01",
    title: "Add your video",
    body: "Import a clip from your Mac, or just drop one onto the window. Anything up to 60 seconds works.",
    visual: <Dropzone />,
  },
  {
    index: "02",
    title: "Pick a screen",
    body: "Each screen can have its own wallpaper. Choose one here, or leave it on All Displays.",
    visual: <DisplayPicker />,
  },
  {
    index: "03",
    title: "Make it your wallpaper",
    body: "Hit Set as Wallpaper and you're done. Wallflow pauses playback whenever nothing is on screen.",
    visual: <MenuBarMock />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps. No settings to fight.</h2>
          <p>The same flow the app walks new users through on first launch.</p>
        </Reveal>

        <div className="how-steps">
          {STEPS.map((step) => (
            <Reveal key={step.index} className="step">
              <div className="step-body">
                <span className="step-index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className="step-visual">{step.visual}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
