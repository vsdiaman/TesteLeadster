import React, { useState, useEffect } from "react";
//import PropTypes from 'prop-types';
//import Context from './Context';
import Pictures from "../components/pictures/Pictures";
import Navbar from "components/navbar/navbar";

function Provider() {
  const [input, setInput] = useState("");
  const [photos, setPhotos] = useState(null);
  const autentication =
    "563492ad6f91700001000001a6302b3004b54911be85dfca7876986b";
  const API = "https://api.pexels.com/v1/curated?page=1&per_page=21";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=21&page=1`;

  const fetchApiPhotos = async (url) => {
    const result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: autentication,
      },
    }).catch((err) => console.log(err));
    let parseData = await result.json();
    setPhotos(parseData.photos);
  };

  useEffect(() => {
    fetchApiPhotos(API);
  }, []);

  return (
    <div>
      <Navbar
        search={() => {
          fetchApiPhotos(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {photos?.map((img) => {
          return <Pictures photos={img} />;
        })}
      </div>
    </div>
  );
}

export default Provider;
