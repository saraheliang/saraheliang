import { useEffect, useState } from "react";
// import "../Styling/Contact.css";
import profileImage from "../Assets/bunny-escape-plan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Image, Modal, Button } from "react-bootstrap";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="parent index-page d-flex align-items-center">
      <div className="image d-flex justify-content-center">
        <Image src={profileImage} fluid />
      </div>
      <div className="child">
        <h1>Get in touch ✨</h1>
        <p>Currently studying at the University of Southern California.</p>
        <div className="social-media">
          <a href="#" onClick={handleShow}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Email me!</Modal.Title>
            </Modal.Header>
            <Modal.Body>seliang@usc.edu</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <a
            href="https://www.linkedin.com/in/saraheliang/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://drive.google.com/file/d/1UpJfuPcvthXwpV8kV6Av1SHGbRLmeIn2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} size="2x" />
          </a>
        </div>
      </div>
      {/* <div className="image d-flex justify-content-center">
        <Image src={profileImage} fluid />
      </div> */}
    </div>
  );
}
