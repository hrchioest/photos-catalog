import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { api_photos, api_search } from "../../service";
import { useParams } from "react-router-dom";

const searchPhotos = (search) => {
  return fetch(api_search.replace("[search]", search)).then((respuesta) => {
    return respuesta.json();
  });
};

const SearchListContainer = () => {
  const [search, setSearch] = useState([]);

  const { searchWord } = useParams();

  useEffect(() => {
    searchPhotos(searchWord).then((data) => {
      setSearch(data.results);
    });
  }, [searchWord]);

  return (
    <div style={{ marginTop: "10px" }}>
      search ? <ListCard photos={search} />
    </div>
  );
};

export default SearchListContainer;
