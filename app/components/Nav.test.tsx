import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Nav } from "@/components/Nav";

function scrollTo(y: number) {
  Object.defineProperty(window, "scrollY", { value: y, writable: true, configurable: true });
  fireEvent.scroll(window);
}

describe("Nav", () => {
  it("renders the primary links and brand", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: /wallflow/i })).toHaveAttribute("href", "#top");
    expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute("href", "#features");
    expect(screen.getByRole("link", { name: "How it Works" })).toHaveAttribute(
      "href",
      "#how-it-works"
    );
    expect(screen.getByRole("link", { name: "Requirements" })).toHaveAttribute(
      "href",
      "#requirements"
    );
    expect(screen.getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "#faq");
    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", "#download");
  });

  it("is not marked as scrolled before any scroll happens", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation")).not.toHaveClass("is-scrolled");
  });

  it("adds the is-scrolled class once the page scrolls past the threshold", () => {
    render(<Nav />);

    scrollTo(40);

    expect(screen.getByRole("navigation")).toHaveClass("is-scrolled");
  });

  it("removes the is-scrolled class when scrolled back to the top", () => {
    render(<Nav />);

    scrollTo(40);
    expect(screen.getByRole("navigation")).toHaveClass("is-scrolled");

    scrollTo(0);
    expect(screen.getByRole("navigation")).not.toHaveClass("is-scrolled");
  });
});
