import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Provider from "../context/Provider";

const Homepage = () => {
  return (    
    <Provider>
      <Header />,
      <Footer />
    </Provider>

  );
};

export default Homepage;