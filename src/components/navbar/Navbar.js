import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import "../navbar/_navbar.scss"


const Navbar = () => {

    return (        
      <navbar class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="/">Leadster</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/Home">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        </Link>
        <Link to="/about">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About</a>
        </li>
        </Link>
        <li class="nav-item dropdown">
        
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
        <form class="d-flex">
          <Search />
        </form>
    </div>
      </div>
    </navbar>
    );
  };
export default Navbar;