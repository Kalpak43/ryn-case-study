import Button from "@/components/ui/button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Button", () => {
  it("renders children", () => {
    render(<Button variant="default">Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button.className).toMatch(/bg-transparent/);
    expect(button.className).toMatch(/uppercase/);
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button variant="default" onClick={handleClick}>
        Press
      </Button>
    );
    await user.click(screen.getByRole("button", { name: /press/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Button variant="default" disabled>
        Disabled
      </Button>
    );
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it("renders with tag variant styles", () => {
    render(<Button variant="tag">Tag</Button>);
    const button = screen.getByRole("button", { name: /tag/i });
    expect(button.className).toMatch(/text-xs/);
    expect(button.className).toMatch(/uppercase/);
    expect(button.className).toMatch(/leading-full/);
  });

  it("merges custom className", () => {
    render(
      <Button variant="default" className="custom-class">
        Custom
      </Button>
    );
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button.className).toMatch(/custom-class/);
  });

  it("renders as child element when asChild is true", () => {
    render(
      <Button variant="default" asChild>
        <a href="/test">Link</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: /link/i });
    expect(link).toBeInTheDocument();
    expect(link.className).toMatch(/inline-flex/);
  });

  it("passes additional props to button", () => {
    render(
      <Button variant="default" type="submit" data-testid="my-btn">
        Submit
      </Button>
    );
    const button = screen.getByTestId("my-btn");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("forwards props to child when asChild is true", () => {
    render(
      <Button variant="outline" asChild data-testid="child-link">
        <a href="/child">Child Link</a>
      </Button>
    );
    const link = screen.getByTestId("child-link");
    expect(link).toHaveAttribute("href", "/child");
    expect(link.className).toMatch(/bg-transparent/);
  });
});
