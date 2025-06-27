import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

describe("Accordion", () => {
  it("renders trigger and shows content after click", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    // Content should not be in the DOM initially
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    // Click to open
    const trigger = screen.getByRole("button", { name: /section 1/i });
    await userEvent.click(trigger);
    expect(screen.getByText("Content 1")).toBeVisible();
  });
  it("toggles content visibility on trigger click", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const trigger = screen.getByRole("button", { name: /section 1/i });

    // Content should not be in the DOM initially
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    // Click to open
    await userEvent.click(trigger);
    expect(screen.getByText("Content 1")).toBeVisible();

    // Click to close (since collapsible)
    await userEvent.click(trigger);
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });
});
