import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "../styles/shopping.css";

const Shopping = () => {
  const { product } = useProduct();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // Changed to show 3 rows of 3 cards

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === null) {
      navigate("/signup");
    }
  }, [navigate]);

  // Calculate pagination values
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = product.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(product.length / cardsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shopping-container">
      <h1 className="page-title">Our Products</h1>
      <div className="shopping-grid">
        {currentCards.map((x) => (
          <Card obj={x} key={x.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="page-info">
            <span>Page {currentPage} of {totalPages}</span>
          </div>

          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
