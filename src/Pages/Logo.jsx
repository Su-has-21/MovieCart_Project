import React from "react";
import movie from "../assets/Images/movie.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="pages home">
      <div id="head">
        <div>
          <h1 id="headline">
            "Your Ultimate Movie Marketplace – Buy, Watch, Enjoy!"
          </h1>
          <p id="homep">
            Explore thousands of movies and own your favorites forever.
          </p>
          <Link to={"/shopping"}>
            <button id="buttonp">Watch Now</button>
          </Link>
        </div>
        <img src={movie} alt="" id="movie" />
      </div>

      <div className="subscribe">
        <h1>"Get exclusive movie deals – Subscribe now!"</h1>
        <input type="text" placeholder="Enter Details" name="" id="inputp" />
      </div>
    </div>
  );
};

export default Logo;
