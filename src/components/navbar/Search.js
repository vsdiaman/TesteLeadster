import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = e => {
    setInput(e.target.value);
  };
  return (    
    <div class="d-flex">
    <input class="form-control me-2" onChange={inputHandler} type="text" placeholder="Search" aria-label="Search"/>
    <button className="button-search" class="btn btn-outline-primary" onClick={search}>Search</button>
    </div>    
);
}

export default Search;


