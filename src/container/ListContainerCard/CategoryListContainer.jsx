import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { api_search } from "../../service";
import { useParams } from "react-router-dom";

const searchPhotos = (search) => {
  return fetch(api_search.replace("[search]", search)).then((respuesta) => {
    return respuesta.json();
  });
};

const CategoryListContainer = () => {
  const [category, setCategory] = useState([]);

  const { keyword } = useParams();

  useEffect(() => {
    searchPhotos(keyword).then((data) => {
      setCategory(data.results);
    });
  }, [keyword]);

  return (
    <div style={{ marginTop: "10px" }}>
      <ListCard photos={category} />
    </div>
  );
};

export default CategoryListContainer;
