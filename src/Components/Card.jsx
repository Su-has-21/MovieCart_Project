import React, { useContext } from "react";
import star from "../assets/Images/star-solid.svg";
import { ProductContext } from "../context/ProductContext";

const Card = (props) => {
  // let { Poster, Title, Genre, imdbRating, Year } = props.obj;
  let { Poster, Title, Year, Genre, imdbRating } = props.obj;
  let { cart, toggleCart } = useContext(ProductContext);

  let isInCart = cart.some((item) => item.Title == Title);

  let handleChanges = () => {
    toggleCart(props.obj);
  };

  return (
    <div className="card">
      <div className="img-wrap">
        <img src={Poster} alt="" className="img" />
      </div>
      <div className="info">
        <h3 id="title">{Title}</h3>
        <div>
          <p id="genre">{Genre}</p>
          <div id="year">
            <p>{Year}</p>

            <div className="ratings">
              <p className="rate">{imdbRating}</p>
              <img src={star} alt="" style={{ height: "15px" }} />
            </div>
          </div>
        </div>

        <button onClick={handleChanges}>
          {isInCart ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
