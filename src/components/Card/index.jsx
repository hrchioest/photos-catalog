import { Card } from "react-bootstrap";

const CardComponent = ({ photo }) => {
  return (
    <Card>
      <Card.Img variant='top' src={photo.urls.regular} />
    </Card>
  );
};

export default CardComponent;
