import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FAQ } from "@/components/FAQ";

describe("FAQ", () => {
  it("renders every question as a closed disclosure by default", () => {
    render(<FAQ />);

    const questions = [
      "Is Wallflow free?",
      "Will it hurt my battery life?",
      "Does it upload my videos anywhere?",
      "Does it work on Intel Macs?",
      "Why isn't this on the Mac App Store?",
      "Is it safe to open?",
    ];

    for (const question of questions) {
      const summary = screen.getByText(question);
      expect(summary.closest("details")).not.toHaveAttribute("open");
    }
  });

  it("opens a question and reveals its answer when its summary is clicked", () => {
    render(<FAQ />);

    const summary = screen.getByText("Is Wallflow free?");
    const details = summary.closest("details")!;
    expect(details).not.toHaveAttribute("open");

    summary.click();

    expect(details).toHaveAttribute("open");
    expect(
      screen.getByText(/free to download and use, with no account or subscription required/i)
    ).toBeInTheDocument();
  });
});
