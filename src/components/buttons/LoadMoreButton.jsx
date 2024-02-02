import React from "react";
import "../styles/buttons/LoadMoreButton.css";

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="load-more-container">
      <button onClick={onClick} className="load-more-button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
