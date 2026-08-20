import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("shows the current year in the copyright line", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year} Wallflow`))).toBeInTheDocument();
  });

  it("links to the privacy and terms pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
  });

  it("links the product nav to the matching page sections", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute("href", "#features");
    expect(screen.getByRole("link", { name: "How it Works" })).toHaveAttribute(
      "href",
      "#how-it-works"
    );
    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", "#download");
  });
});
