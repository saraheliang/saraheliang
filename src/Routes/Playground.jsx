// import { Spotify } from "react-spotify-embed";

import picnicPalsImage from "../Assets/mockup.png";
import cookBakeImage from "../Assets/foodAct.png";
import artImage from "../Assets/art.png";
import notionImage from "../Assets/notion.png";
import Grid from "../Components/Grid";
import { useEffect } from "react";

export default function Playground() {
  useEffect(() => {
    document.title = "Playground";
  }, []);
  const placeholderImages = [
    picnicPalsImage,
    cookBakeImage,
    artImage,
    notionImage,
  ];
  const titles = [
    "Picnic Pals!",
    "@sarahcoreeats 🤰🏻",
    "@sarahtonindraws",
    "Elaborate Notion pages",
  ];
  const picnicPalsDescription =
    "A 2D geometric puzzle game I made using Unity, Procreate, and Figma";
  const cookBakeDescription = "Stuff I make that I can eat 🤰🏻";
  const artDescription = "Stuff I draw";
  const notionDescription = "My brain in digital form";

  const descriptions = [
    picnicPalsDescription,
    cookBakeDescription,
    artDescription,
    notionDescription,
  ];

  return (
    <div>
      <h1>This is my Playground! 🛝</h1>
      <p>Check out what I'm creating when I'm not coding 🤓</p>
      <Grid
        images={placeholderImages}
        titles={titles}
        descriptions={descriptions}
        hasButton={false}
      />
      <br></br>
      {/* <div className="justify-content-center" style={{ marginTop: "5%" }}>
        <div>
          <div style={{ textAlign: "center" }}>
            <p>Playing...</p>
          </div>
          <Spotify
            wide
            link="https://open.spotify.com/episode/4TUM7gWyA2lsrJCrOyqEeU?si=5b1ce8b3c1524ff8"
          />
        </div>
      </div> */}
    </div>
  );
}
