import React from "react";
import Search from "./Search";

import "../navbar/_navbar.scss"

const Navbar = () => {

    return (       
      <navbar class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
      <p href="/" className="title-photo">PhotoGalery</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">        
        <li class="nav-item">
          <a class="nav-link text-dark" aria-current="page" href="/home">Home&nbsp;<i class="fas fa-home"></i></a>
        </li>   
        <li class="nav-item">
          <a class="nav-link text-dark ml-5" aria-current="page" href="/about">About</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link text-dark ml-5" aria-current="page" href="/contactus">Contact-us</a>
        </li>
      </ul>
        <div>
        <form class="d-flex">
          <Search />
        </form>
        </div>
    </div>
      </div>
    </navbar>
    );
  };
export default Navbar;