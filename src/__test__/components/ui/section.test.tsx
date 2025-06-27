import { render, screen } from "@testing-library/react";
import Section from "@/components/ui/section";

describe("Section", () => {
  it("renders children", () => {
    render(
      <Section>
        <div>Test Content</div>
      </Section>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Section className="custom-class" aria-label="Test Section">
        <span>Child</span>
      </Section>
    );
    const section = screen.getByRole("region", { name: "Test Section" });
    expect(section).toHaveClass("custom-class");
  });
});
