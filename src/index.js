import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./Routes/Index";
import Root from "./Routes/Root";
import Playground from "./Routes/Playground";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Post from "./Routes/Post";
import Project from "./Routes/Project";
import { fetchProjectById, fetchPostById, fetchPosts } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/about",
        element: <About />,
        loader() {
          return fetchPosts();
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recs/:postId",
        // params from react router
        loader({ params }) {
          return fetchPostById(params.postId);
        },
        element: <Post />,
      },
      {
        path: "/projects/:projectId",
        // params from react router
        loader({ params }) {
          return fetchProjectById(params.projectId);
        },
        element: <Project />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
