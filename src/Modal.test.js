import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "react-bootstrap";

describe("Modal Component", () => {
  it("renders the modal", () => {
    render(
      <Modal data-testid="modal" show={true} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Email me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>seliang@usc.edu</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );

    // Check modal components being rendered
    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("renders the modal with the correct info", () => {
    render(
      <Modal show={true} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Email me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>seliang@usc.edu</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );

    // Check modal title being rendered
    expect(screen.getByText("Email me!")).toBeInTheDocument();
    //   Check modal email being rendered
    expect(screen.getByText("seliang@usc.edu")).toBeInTheDocument();
  });

  it("modal closes when close button clicked", () => {
    const handleClose = jest.fn();

    render(
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>seliang@usc.edu</Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );

    // force click the close button
    fireEvent.click(screen.getByText("Close"));

    // Check function is actually called
    expect(handleClose).toHaveBeenCalled();
  });

  it("does not render when show is false", () => {
    render(
      <Modal show={false} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Email me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>seliang@usc.edu</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );

    // Check elements of modal not being rendered
    expect(screen.queryByText("Email me!")).not.toBeInTheDocument();
    expect(screen.queryByText("seliang@usc.edu")).not.toBeInTheDocument();
  });
});
