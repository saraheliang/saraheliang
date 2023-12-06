// import { Link, useLoaderData } from "react-router-dom";
import "../Styling/Index.css";
import profileImage from "../Assets/bunny-rocket.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import Projects from "../Components/Projects";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    document.title = "Sarah's Portfolio";
  }, []);
  return (
    <>
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>
            Hi, I'm <b>Sarah</b>! I'm a <b>software developer</b> interested in
            bridging communities and doing so artistically ✨
          </h1>
          <p>Currently studying at the University of Southern California.</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/saraheliang/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/saraheliang"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="image d-flex justify-content-center">
          <Image src={profileImage} fluid />
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </>
  );
}
