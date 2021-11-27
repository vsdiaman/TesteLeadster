import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route>
          <About path="/About" exact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;