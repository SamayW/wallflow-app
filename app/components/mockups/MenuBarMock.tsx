"use client";

import { useState } from "react";
import {
  IconMenuBar,
  IconPlay,
  IconPause,
  IconStop,
  IconImport,
} from "@/components/Icons";

export function MenuBarMock() {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="menubar-mock">
      <button
        type="button"
        className="menubar-bar"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <IconMenuBar className="icon menubar-bar-icon" />
        <span className="chip">Wallflow</span>
      </button>

      {open && (
        <div className="menubar-popover glass glass--strong">
          <span className="menubar-caret" />
          <div className="menubar-current">
            <span className="menubar-swatch aurora-fill" />
            <div>
              <p className="menubar-name">Aurora</p>
              <p className="menubar-sub">
                {playing ? "Playing" : "Paused"} on Built-in Display
              </p>
            </div>
          </div>
          <div className="menubar-rows">
            <button
              type="button"
              className={`menubar-row ${playing ? "is-active" : ""}`}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? <IconPause /> : <IconPlay />}
              <span>{playing ? "Pause" : "Play"}</span>
            </button>
            <button type="button" className="menubar-row">
              <IconStop />
              <span>Stop</span>
            </button>
            <button type="button" className="menubar-row">
              <IconImport />
              <span>Import Video…</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
