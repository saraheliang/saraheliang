import { render, screen } from "@testing-library/react";
import Card from "react-bootstrap/Card";

function WorkCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

describe("WorkCard Component", () => {
  const exampleProps = {
    title: "Title here",
    description: "Description here",
  };

  it("renders the WorkCard component with correct props", () => {
    render(<WorkCard {...exampleProps} />);

    // Check info rendered
    expect(screen.getByText("Title here")).toBeInTheDocument();
    expect(screen.getByText("Description here")).toBeInTheDocument();
  });

  it("does not render info when no props", () => {
    render(<WorkCard />);

    // Check title and description are not rendered
    expect(screen.queryByText("Title here")).not.toBeInTheDocument();
    expect(screen.queryByText("Description here")).not.toBeInTheDocument();
  });
});
