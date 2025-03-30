import React from "react";
import { useProduct } from "../context/ProductContext";
import "../styles/card.css";

const Card = ({ obj }) => {
  const { Poster, Title, Year, Genre, imdbRating } = obj;
  const { cart, toggleCart, generatePrice } = useProduct();

  const isInCart = cart.some((item) => item.Title === Title);

  const handleCartToggle = () => {
    toggleCart(obj);
  };

  // Get the price from cart if item exists, otherwise generate a new price
  const price = cart.find(item => item.Title === Title)?.price || generatePrice(Title);

  return (
    <div className="card" role="article">
      <div className="img-wrap">
        <img src={Poster} alt={`${Title} movie poster`} className="img" />
        <div className="card-overlay">
          <button 
            className="preview-btn"
            aria-label={`Preview ${Title}`}
          >
            <i className="fas fa-play"></i>
          </button>
        </div>
      </div>
      <div className="info">
        <h3 id="title">{Title}</h3>
        <div className="movie-details">
          <p id="genre">
            <i className="fas fa-film" aria-hidden="true"></i> {Genre}
          </p>
          <div id="year">
            <p>
              <i className="fas fa-calendar" aria-hidden="true"></i> {Year}
            </p>
            <div className="ratings">
              <i className="fas fa-star" aria-hidden="true"></i>
              <span className="rate">{imdbRating}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="price">
            <i className="fas fa-tag" aria-hidden="true"></i>
            <span>₹{price}</span>
          </div>
          <button 
            className={`cart-btn ${isInCart ? 'in-cart' : ''}`}
            onClick={handleCartToggle}
            aria-label={isInCart ? `Remove ${Title} from cart` : `Add ${Title} to cart`}
          >
            <i className={`fas ${isInCart ? 'fa-check' : 'fa-shopping-cart'}`} aria-hidden="true"></i>
            {isInCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
