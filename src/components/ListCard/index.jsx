import CardComponent from "../Card";
import { CardColumns } from "react-bootstrap";

const ListCard = ({ photos }) => {
  return (
    <CardColumns>
      {photos.map((photo, index) => (
        <CardComponent key={index} photo={photo} />
      ))}
    </CardColumns>
  );
};

export default ListCard;
