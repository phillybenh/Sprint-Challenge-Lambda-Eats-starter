import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export default function Home() {



    return (
      <div className="home-wrapper">
        
        <Link to="/pizza">
          <button className="md-button shop-button">Pizza!</button>
        </Link>
      </div>
    );
}
