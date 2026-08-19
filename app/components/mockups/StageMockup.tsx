export function StageMockup() {
  return (
    <div className="mockup-stage glass glass--glow">
      <div className="stage-chrome">
        <span className="stage-dot stage-dot--red" />
        <span className="stage-dot stage-dot--yellow" />
        <span className="stage-dot stage-dot--green" />
        <span className="stage-title">Wallflow — Aurora.mov</span>
      </div>
      <div className="stage-canvas aurora-fill" />
      <div className="stage-toolbar">
        <span className="chip">
          <strong>0:14</strong>&nbsp;/ 0:22
        </span>
        <button type="button" className="btn btn-glass btn-sm">
          Set as Wallpaper
        </button>
      </div>
    </div>
  );
}
