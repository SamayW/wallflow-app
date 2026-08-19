import type { Metadata, Viewport } from "next";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/glass.css";
import "./styles/components.css";
import "./styles/sections.css";
import "./styles/mockups.css";
import "./styles/animations.css";

const siteUrl = "https://wallflow.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wallflow — Live Wallpapers for Mac",
    template: "%s — Wallflow",
  },
  description:
    "Turn any video into a live wallpaper for your Mac — running behind your icons on the desktop and lock screen, using almost no battery.",
  keywords: [
    "live wallpaper mac",
    "animated wallpaper macOS",
    "lock screen wallpaper mac",
    "video wallpaper",
    "Wallflow",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Wallflow — Live Wallpapers for Mac",
    description:
      "Turn any video into a live wallpaper for your Mac — desktop and lock screen, running on almost no battery.",
    url: siteUrl,
    siteName: "Wallflow",
    images: [{ url: "/img/og/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallflow — Live Wallpapers for Mac",
    description:
      "Turn any video into a live wallpaper for your Mac — desktop and lock screen, using almost no battery.",
    images: ["/img/og/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
