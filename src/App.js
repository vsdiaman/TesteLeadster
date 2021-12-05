import React from "react";
import Provider from "./context/Provider";
import "../src/styles/style.css";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar"
import About from "./pages/About";
import "./styles/style.css"
import {
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider>
        <Route path="/" exact><Homepage /></Route>
        <Route><About path="/About" exact /></Route>
      </ Provider>
      < Footer />   
    </div>
  );
}

export default App;