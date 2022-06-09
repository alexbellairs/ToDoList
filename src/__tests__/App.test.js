import { render, screen } from "@testing-library/react";
import App from "../App";

describe("header tests", () => {
  test("should find the text of the header", () => {
    render(<App />);
    const headerElement = screen.getByText(/To Do List/i);
    expect(headerElement).toBeInTheDocument();
  });
  it("should find the element of header", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { name: "To Do List" });
    expect(headingElement).toBeInTheDocument();
  });
  it("should have a h1 tag as main header element", () => {
    render(<App />);
    const headerElementTag = screen.getByText(/To Do List/i);
    expect(headerElementTag).toContainHTML("h1");
  });
});
