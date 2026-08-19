"use client";

import { useState, type DragEvent } from "react";
import { IconImport } from "@/components/Icons";

export function Dropzone() {
  const [hover, setHover] = useState(false);

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    setHover(true);
  };
  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setHover(false);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <div
      className={`dropzone glass ${hover ? "is-hover" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <IconImport className="icon dropzone-icon" />
      <p>
        Drop a video here, or <span className="dropzone-link">choose a file</span>
      </p>
      <span className="dropzone-hint">Anything up to 60 seconds works</span>
    </div>
  );
}
