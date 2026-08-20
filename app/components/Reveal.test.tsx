import { beforeEach, describe, expect, it } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { Reveal } from "@/components/Reveal";
import { MockIntersectionObserver } from "@/test/intersection-observer-mock";

beforeEach(() => {
  MockIntersectionObserver.instances = [];
});

describe("Reveal", () => {
  it("renders children hidden (not yet visible) on mount", () => {
    render(
      <Reveal>
        <p>Hello</p>
      </Reveal>
    );
    const node = screen.getByText("Hello").parentElement;
    expect(node).toHaveClass("reveal");
    expect(node).not.toHaveClass("is-visible");
  });

  it("adds is-visible once the element intersects the viewport", () => {
    render(
      <Reveal>
        <p>Hello</p>
      </Reveal>
    );
    const node = screen.getByText("Hello").parentElement!;
    expect(node).not.toHaveClass("is-visible");

    act(() => {
      MockIntersectionObserver.instances[0].trigger([{ isIntersecting: true }]);
    });

    expect(node).toHaveClass("is-visible");
  });

  it("does not add is-visible when the element has not intersected yet", () => {
    render(
      <Reveal>
        <p>Hello</p>
      </Reveal>
    );
    const node = screen.getByText("Hello").parentElement!;

    act(() => {
      MockIntersectionObserver.instances[0].trigger([{ isIntersecting: false }]);
    });

    expect(node).not.toHaveClass("is-visible");
  });

  it("preserves any custom className alongside the reveal classes", () => {
    render(
      <Reveal className="hero-copy">
        <p>Hello</p>
      </Reveal>
    );
    expect(screen.getByText("Hello").parentElement).toHaveClass("reveal", "hero-copy");
  });
});
