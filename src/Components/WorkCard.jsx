import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import placeholderImage from "./Assets/mockup.png";
// can you make this card into a cooler ui (maybe a sticky note?) in the future?
export default function WorkCard(props) {
  let hasButton = true;
  if (props.hasButton === false) {
    hasButton = false;
  }
  return (
    <Card>
      <Card.Img
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {hasButton && (
          <Button variant="primary" href={`/projects/${props.projectIdx}`}>
            See more
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
