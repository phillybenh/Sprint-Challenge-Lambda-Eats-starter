import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home"
import Form from "./Components/Form"

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>

          <h1>Lambda Eats: Pizza</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza">Build Your Own</Link>
          </div>
        </nav>

      </header>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
