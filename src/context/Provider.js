import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
//import Context from './Context';
import Pictures from '../components/pictures/Pictures';
import Search from '../components/search/Search';


function Provider() {
    const [input, setInput] = useState("");
    const [photos, setPhotos] = useState(null);
    const autentication = "563492ad6f91700001000001a6302b3004b54911be85dfca7876986b";
    const URL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

const search = async url => {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: autentication,
        },
    });
    let parseData = await dataFetch.json();
    setPhotos(parseData.photos);
};

useEffect(() =>{
    search(URL);
}, []);

    return(
        <div>
            <Search
                search={() => {
                  search(searchURL);
                }}
                setInput={setInput}
            />
        <div className="pictures">
          {photos?.map(img => {
            return <Pictures photos={img}
            />;
          })}
        </div>
        <div>
        </div>
        </div>
    )
}

export default Provider;