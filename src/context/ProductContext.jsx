import React, { createContext, useState } from "react";
import JSON from "../assets/Images/api.json";

export let ProductContext = createContext();
const ProductProvider = ({ children }) => {
  let [product, setProduct] = useState(JSON);

  let [cart, setCart] = useState([]);

  let toggleCart = (product) => {
    let isInCart = cart.find((item) => item.Title == product.Title);
    if (isInCart) {
      setCart((prevCart) =>
        prevCart.filter((item) => item.Title != product.Title)
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <ProductContext.Provider value={{ product, cart, toggleCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
