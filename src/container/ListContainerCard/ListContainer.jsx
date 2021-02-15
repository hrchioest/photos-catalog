import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { api_photos, api_search } from "../../service";
import { useParams } from "react-router-dom";

const getPhotos = () => {
  return fetch(api_photos).then((respuesta) => {
    return respuesta.json();
  });
};
const searchPhotos = (search) => {
  return fetch(api_search.replace("[search]", search)).then((respuesta) => {
    return respuesta.json();
  });
};

const ListContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState([]);

  const { keyword } = useParams();
  const { searchWord } = useParams();

  console.log("searchw", searchWord);

  useEffect(() => {
    getPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  useEffect(() => {
    searchPhotos(keyword).then((data) => {
      setCategory(data.results);
    });
  }, [keyword]);

  useEffect(() => {
    searchPhotos(searchWord).then((data) => {
      setSearch(data.results);
    });
  }, [searchWord]);

  return (
    <div style={{ marginTop: "10px" }}>
      {category ? <ListCard photos={category} /> : <ListCard photos={photos} />}
      {/* {search ? <ListCard photos={search} />: } */}
    </div>
  );
};

export default ListContainer;
