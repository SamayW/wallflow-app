"use client";

import { useState } from "react";

type DisplayId = "laptop" | "external";

export function DisplayPicker() {
  const [active, setActive] = useState<Set<DisplayId>>(new Set(["laptop", "external"]));
  const allSelected = active.size === 2;

  const toggleDisplay = (id: DisplayId) => {
    setActive(new Set([id]));
  };

  const toggleAll = (checked: boolean) => {
    setActive(checked ? new Set(["laptop", "external"]) : new Set(["laptop"]));
  };

  return (
    <div className="display-picker">
      <button
        type="button"
        className={`display display--laptop ${active.has("laptop") ? "is-active" : ""}`}
        onClick={() => toggleDisplay("laptop")}
        aria-pressed={active.has("laptop")}
      >
        <span className="display-screen aurora-fill" />
        <span className="display-base" />
        <span className="display-name">Built-in Display</span>
      </button>

      <button
        type="button"
        className={`display display--external ${active.has("external") ? "is-active" : ""}`}
        onClick={() => toggleDisplay("external")}
        aria-pressed={active.has("external")}
      >
        <span className="display-screen aurora-fill" />
        <span className="display-stand" />
        <span className="display-foot" />
        <span className="display-name">Studio Display</span>
      </button>

      <label className="all-displays-toggle">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(e) => toggleAll(e.target.checked)}
        />
        <span>All Displays</span>
      </label>
    </div>
  );
}
