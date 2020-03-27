import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pizza">Build Your Own</NavLink>
          </div>
        </nav>
        <img
          className="home-image"
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
          alt="Pizza"
        />
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
