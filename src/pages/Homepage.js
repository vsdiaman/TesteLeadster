import React from "react";
import { Navbar } from "reactstrap";
import Footer from "../components/footer/Footer";
import Provider from "../Services/api.js";

function Homepage() {
  return (
    <Provider>
      <Navbar />
      <Footer />
    </Provider>
  );
};

export default Homepage;