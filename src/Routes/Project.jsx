import { useLoaderData } from "react-router-dom";
import portfolioImage1 from "../Assets/portfolio.png";
import stickerImage1 from "../Assets/sticker.png";
import smallWinsImage1 from "../Assets/small-wins.png";
import spotlightImage1 from "../Assets/spotlight.png";
import { Image } from "react-bootstrap";
import { useEffect } from "react";

export default function Project() {
  const portfolioImage = portfolioImage1;
  const stickerImage = stickerImage1;
  const smallWinsImage = smallWinsImage1;
  const spotlightImage = spotlightImage1;

  const project = useLoaderData();

  useEffect(() => {
    document.title = `${project.title}`;
  }, [project.title]);

  return (
    <>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      {/* insert image here */}
      <Image src={eval(project.imageName)} fluid />
      <p>{project.body}</p>
    </>
  );
}
