import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form class="d-flex">
        <input class="form-control me-2" onChange={inputHandler} type="text" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" onClick={search}>Search</button>
    </form>
);
}

export default Search;
