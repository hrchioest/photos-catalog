import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { api_photos } from "../../service";

const getPhotos = () => {
  return fetch(api_photos).then((respuesta) => {
    return respuesta.json();
  });
};

const ListContainer = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <ListCard photos={photos} />
    </div>
  );
};

export default ListContainer;
