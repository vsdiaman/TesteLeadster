
import React from "react";
import Provider from "./Services/api.js";
import "../src/styles/style.css";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import "./styles/style.css"
import {
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Route path="/" exact><Homepage /></Route>
        <Route><About path="/About" exact /></Route>
      </ Provider>
      < Footer />   
    </div>
  );
}

export default App;