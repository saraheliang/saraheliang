import { Row, Col } from "react-bootstrap";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Recommendations() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a rec!
      </Button>
      <form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recommendation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                aria-describedby="titleHelp"
              ></input>
              <div id="titleHelp" class="form-text">
                TV shows, hiking spots, new music, etc.
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <input
                type="text"
                class="form-control"
                id="description"
                aria-describedby="descriptionHelp"
              ></input>
              <div id="descriptionHelp" class="form-text">
                A short description
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                className="form-control"
                id="details"
                rows="3"
                // value={message}
                // onChange={(event) => {
                //   setMessage(event.target.value.toUpperCase());
                // }}
                aria-describedby="detailsHelp"
              />
              <div id="detailsHelp" class="form-text">
                More details such as ranking, most notable feature, etc.
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </form>

      <PostsGrid
        titles={["Matcha Shop", "Matcha Shop2"]}
        descriptions={["descriptions", "description2"]}
      />
    </>
  );
}

function PostsGrid(props) {
  return (
    <>
      <Row
        xs={props.xs ? props.xs : 1}
        md={props.md ? props.md : 2}
        lg={props.lg}
        xl={props.xl}
        className="g-4"
      >
        {Array.from({ length: props.titles.length }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{props.titles[idx]}</Card.Title>
                <Card.Text>{props.descriptions[idx]}</Card.Text>
                {/* DYNAMIC SEGMENT HERE */}
                <Button variant="primary" href="/">
                  See details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
