"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <Image src="/img/icon-source.png" alt="" width={26} height={26} priority />
          Wallflow
        </a>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it Works</a>
          </li>
          <li>
            <a href="#requirements">Requirements</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <a href="#download" className="btn btn-primary btn-sm">
          Download
        </a>
      </div>
    </nav>
  );
}
