import React from "react";
import "../navbar/_navbar.scss";

function Navbar({ search, setInput }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div class="container-fluid">
      <navbar class="navbar navbar-expand-lg navbar-light bg-white">
        <section class="collapse navbar-collapse" id="navbarMainToggler">
          <a class="navbar-brand" href="/">
            {" "}
            <i class="fas fa-stroopwafel"></i>&nbsp;PhotoGalery
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggler="collapse"
            data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler"
            aria-expanded="false"
            aria-label="Toggler navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-nav m-auto">
            <a class="nav-link text-dark" aria-current="page" href="/home">
              Home&nbsp;<i class="fas fa-home"></i>
            </a>
            <a
              class="nav-link text-dark ml-5"
              aria-current="page"
              href="/about"
            >
              {" "}
              About{" "}
            </a>
            <a
              class="nav-link text-dark ml-5"
              aria-current="page"
              href="https://www.linkedin.com/in/vitor-diamantino-6573a6105/"
            >
              Contact-us{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        <div class="d-flex">
          <input
            class="form-control me-2"
            onChange={inputHandler}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="button-search"
            class="btn btn-sm btn-outline-secondary"
            onClick={search}
          >
            {" "}
            Search
          </button>{" "}
        </div>{" "}
      </navbar>{" "}
    </div>
  );
}

export default Navbar;
