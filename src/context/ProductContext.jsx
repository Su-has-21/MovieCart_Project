import React, { createContext, useContext, useState } from "react";
import JSON from "../assets/Images/api.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [product] = useState(JSON);

  // Generate a consistent random price for each movie based on its title
  const generatePrice = (title) => {
    // Use the title as a seed for consistent price generation
    const seed = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // Generate a price between 250 and 500
    return Math.floor((seed % 251) + 250);
  };

  const toggleCart = (movie) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.Title === movie.Title);
      
      if (existingItem) {
        // Remove from cart if already exists
        return prevCart.filter((item) => item.Title !== movie.Title);
      } else {
        // Add to cart with a consistent random price
        return [...prevCart, { ...movie, price: generatePrice(movie.Title) }];
      }
    });
  };

  return (
    <ProductContext.Provider value={{ cart, toggleCart, product, generatePrice }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export default ProductProvider;
