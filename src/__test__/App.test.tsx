import App from "@/App";
import { render, screen } from "@testing-library/react";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test("renders portfolio headline", () => {
  render(<App />);
  expect(screen.getByText(/freelance/i)).toBeInTheDocument();
});

test("renders expertise section with h2 heading", () => {
  render(<App />);
  const expertiseHeading = screen.getByRole("heading", {
    name: (name) => name.trim().toLowerCase().endsWith("expertise"),
    level: 2,
  });
  expect(expertiseHeading).toBeInTheDocument();
});

test("renders works section as h2 heading", () => {
  render(<App />);
  const worksHeading = screen.getByRole("heading", {
    name: (name) => name.trim().toLowerCase().endsWith("works"),
    level: 2,
  });
  expect(worksHeading).toBeInTheDocument();
});

test("renders experience section as h2 heading", () => {
  render(<App />);
  const experienceHeading = screen.getByRole("heading", {
    name: (name) => name.trim().toLowerCase().endsWith("experience"),
    level: 2,
  });
  expect(experienceHeading).toBeInTheDocument();
});

test("renders experience section as h2 heading", () => {
  render(<App />);
  const experienceHeading = screen.getByRole("heading", {
    name: (name) => name.trim().toLowerCase().endsWith("blogs"),
    level: 2,
  });
  expect(experienceHeading).toBeInTheDocument();
});

test("renders experience section as h2 heading", () => {
  render(<App />);
  const experienceHeading = screen.getByRole("heading", {
    name: (name) => name.trim().toLowerCase().endsWith("what they say"),
    level: 2,
  });
  expect(experienceHeading).toBeInTheDocument();
});

test("renders experience section as h2 heading", () => {
  render(<App />);
  const experienceHeading = screen.getByRole("heading", {
    name: (name) =>
      name.trim().toLowerCase().endsWith("frequently asked questions"),
    level: 2,
  });
  expect(experienceHeading).toBeInTheDocument();
});

