import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navigation Component", () => {
  it("renders navigation links names", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    // Check nav link names are rendered
    expect(screen.getByText("Sarah Liang")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Playground")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
