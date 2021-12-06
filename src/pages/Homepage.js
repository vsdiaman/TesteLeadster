import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Provider from "../context/APIcontext";

const Homepage = () => {
  return (    
    <Provider>
      <Navbar />
      <Footer />
    </Provider>

  );
};

export default Homepage;