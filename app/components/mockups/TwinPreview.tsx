export function TwinPreview() {
  return (
    <div className="twin-preview">
      <div className="twin-frame">
        <div className="twin-canvas aurora-fill" />
        <span className="twin-label">Desktop</span>
      </div>
      <div className="twin-frame">
        <div className="twin-canvas aurora-fill" />
        <div className="lock-clock">9:41</div>
        <span className="twin-label">Lock Screen</span>
      </div>
    </div>
  );
}
