import React from "react";
import Provider from "./context/Provider";
import "../src/styles/style.css";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import About from "./pages/About";
import "./styles/style.css"
import {
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Provider>
        <Route path="/" exact><Homepage /></Route>
        <Route><About path="/About" exact /></Route>
      </ Provider>
      < Footer />   
    </div>
  );
}

export default App;