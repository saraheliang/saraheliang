import { Button, Image, Modal } from "react-bootstrap";
import sunsetImage from "../Assets/sunset.jpg";
import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deletePost, fetchPosts, savePost, updatePost } from "../api";
import { ToastContainer, toast } from "react-toastify";

import "../Styling/About.css";

export default function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  const loadedPosts = useLoaderData();

  const [posts, setPosts] = useState(loadedPosts);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>Learn more about me in the form of how I find joy 😙</h1>
          <p>
            <b>Currently listening to</b> the{" "}
            <i>Hunger Games: Ballad of Songbird & Snakes</i> audiobook & Spotify
            playlist. <b>Currently watching</b> too much analysis on the series.
          </p>
          {/* <Spotify
            wide
            link="https://open.spotify.com/playlist/37i9dQZF1DWT3BGkpbwZZs?si=77f75ffccc6a4541"
          /> */}
        </div>
        <div className="sunset-image d-flex justify-content-center">
          <Image src={sunsetImage} fluid />
        </div>
      </div>
      <h2>Recs 👀</h2>
      <p>
        These are my recommendations for all things movies/shows, recipes,
        music, wellness, mindset, outdoor-sy activities, matcha shops, study
        spots, and more.
      </p>
      <ToastContainer position="bottom-left" autoClose={5000} />
      <Button
        type="button"
        className="add-btn btn"
        variant="primary"
        onClick={handleShow}
      >
        + Add Rec
      </Button>
      {show ? (
        <BlankModalForm
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          onSave={() => {
            fetchPosts().then((posts) => {
              console.log(posts);
              setPosts(posts);
            });
          }}
        />
      ) : null}
      <div>
        {posts.map((post) => {
          return (
            <PostCard
              post={post}
              key={post.id}
              onDelete={() => {
                fetchPosts().then((posts) => {
                  console.log(posts);
                  setPosts(posts);
                });
              }}
              onEdit={() => {
                fetchPosts().then((posts) => {
                  console.log(posts);
                  setPosts(posts);
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function PostCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          By {props.post.user.name}
        </h6>
        <p className="card-text">
          {props.post.description.substring(0, 100)}...
        </p>
        <Link to={`/recs/${props.post.id}`} className="card-link">
          More details
        </Link>
        <div className="edit-delete-container">
          {/* SHOULD BE A HANDLE EDIT AND ALL FORM FIELDS SHOULD BE FILLED */}
          <Button
            type="button"
            className="edit-btn btn"
            variant="outline-primary"
            size="sm"
            onClick={() => {
              console.log("clicked edit!");
              handleShow();
            }}
          >
            edit
          </Button>
          {show ? (
            <ModalForm
              post={props.post}
              key={props.post.id}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              onEdit={props.onEdit}
            />
          ) : null}
          <Button
            type="button"
            className="delete-btn btn"
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              deletePost(props.post.id).then(
                () => {
                  toast.success("You successfully deleted the post.");
                  props.onDelete();
                },
                () => {
                  toast.error("Oops! Something went wrong. Please try again.");
                }
              );
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}

// FOR UPDATING
function ModalForm(props) {
  const [title, setTitle] = useState(props.post.title || "");
  const [description, setDescription] = useState(props.post.description || "");
  const [details, setDetails] = useState(props.post.body || "");

  // validation state
  // const [isValidated, setIsValidated] = useState(true);
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <form
          novalidate
          className="needs-validation"
          onSubmit={(event) => {
            // the form should be stopped frombeing able to submit
            event.preventDefault();
            // update the post now
            updatePost(props.post.id, {
              userId: "1",
              title: title,
              description: description,
              body: details,
            }).then(
              () => {
                toast.success("Yay! You updated a post.");
                props.onEdit();
              },
              () => {
                toast.error("Oops! Something went wrong. Please try again.");
              }
            );
            console.log("you pressed submit for an edit modal");
            props.handleClose();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Recommendation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="title"
                aria-describedby="titleHelp"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
              {title ? (
                <div
                  id="titleHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                <div id="titleHelp" className="form-text">
                  You must provide a title!
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="description"
                aria-describedby="descriptionHelp"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></input>
              {description ? (
                <div
                  id="descriptionHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                // set isValidated to false somewhere around here to prevent the form from being able to be submitted
                <div id="descriptionHelp" className="form-text">
                  You must provide a description!
                </div>
              )}
              {/* <div id="descriptionHelp" className="form-text">
                Error handling for description.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                required
                className="form-control"
                id="details"
                rows="3"
                aria-describedby="detailsHelp"
                value={details}
                onChange={(event) => {
                  setDetails(event.target.value);
                }}
              />
              {details ? (
                <div
                  id="detailsHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                // set isValidated to false somewhere around here to prevent the form from being able to be submitted
                <div id="detailsHelp" className="form-text">
                  You must provide details!
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="secondary btn"
              onClick={props.handleClose}
            >
              Close
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

// FOR CREATING/POSTING
function BlankModalForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <form
          novalidate
          onSubmit={(event) => {
            event.preventDefault();
            // save the post now
            savePost({
              userId: "1",
              title: title,
              description: description,
              body: details,
            }).then(
              () => {
                // then empty out text area
                setTitle("");
                setDescription("");
                setDetails("");
                toast.success("Yay! You made a post.");
                props.onSave();
              },
              () => {
                toast.error("Oops! Something went wrong. Please try again.");
              }
            );
            console.log("you pressed submit");
            props.handleClose();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Recommendation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="title"
                aria-describedby="titleHelp"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
              {title ? (
                <div
                  id="titleHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                // set isValidated to false somewhere around here to prevent the form from being able to be submitted
                <div id="titleHelp" className="form-text">
                  You must provide a title!
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="description"
                aria-describedby="descriptionHelp"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></input>
              {description ? (
                <div
                  id="descriptionHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                // set isValidated to false somewhere around here to prevent the form from being able to be submitted
                <div id="descriptionHelp" className="form-text">
                  You must provide a description!
                </div>
              )}
              {/* <div id="descriptionHelp" className="form-text">
                Error handling for description.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                required
                className="form-control"
                id="details"
                rows="3"
                aria-describedby="detailsHelp"
                value={details}
                onChange={(event) => {
                  setDetails(event.target.value);
                }}
              />
              {details ? (
                <div
                  id="detailsHelp"
                  className="form-text"
                  style={{ color: "green" }}
                >
                  Looks good!
                </div>
              ) : (
                // set isValidated to false somewhere around here to prevent the form from being able to be submitted
                <div id="detailsHelp" className="form-text">
                  You must provide details!
                </div>
              )}
              {/* <div id="detailsHelp" className="form-text">
                Error handling for details.
              </div> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="secondary btn"
              onClick={props.handleClose}
            >
              Close
            </Button>
            <Button type="submit" variant="primary btn">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
