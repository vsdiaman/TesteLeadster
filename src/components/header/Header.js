import React from "react";
import { Link } from "react-router-dom";
import "../header/_header.scss"
import logoleadster from './assets/logoleadster.jpeg'

const header = () => {
  return (
    <header className="header">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
      </ul>
      <div className="logo-Leadster">
          <img src={logoleadster} alt="Logo" />
      </div>
    </header>
  );
};

export default header;