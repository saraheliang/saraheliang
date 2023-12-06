import Grid from "./Grid";
import portfolioImage from "../Assets/portfolio.png";
import stickerImage from "../Assets/sticker.png";
import smallWinsImage from "../Assets/small-wins.png";
import spotlightImage from "../Assets/spotlight.png";

export default function Projects() {
  const placeholderImages = [
    portfolioImage,
    stickerImage,
    smallWinsImage,
    spotlightImage,
  ];
  const titles = [
    "Personal Portfolio",
    "Sticker Goals",
    "Small Wins",
    "SPOTlight",
  ];
  const portfolioDescription = "ReactJS, JavaScript, JSON Server, Bootstrap";
  const stickerDescription = "React Native, JavaScript, Expo Go, Firebase";
  const smallWinsDescription = "JavaScript, HTML/CSS, PHP, MySQL";
  const spotlightDescription = "JavaScript, HTML/CSS, Spotify API";

  const descriptions = [
    portfolioDescription,
    stickerDescription,
    smallWinsDescription,
    spotlightDescription,
  ];
  return (
    <div>
      <h2>Check out my projects 🤓</h2>
      {/* <p>Check out my projects</p> */}
      <Grid
        images={placeholderImages}
        titles={titles}
        descriptions={descriptions}
      />
    </div>
  );
}
