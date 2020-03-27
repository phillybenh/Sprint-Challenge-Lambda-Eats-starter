import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export default function Home() {



    return (
      <div className="home-wrapper">
        <img
          className="home-image"
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
          alt="Pizza"
        />
        <Link to="/pizza">
          <button className="md-button shop-button">Pizza!</button>
        </Link>
      </div>
    );
}
