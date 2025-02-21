// PhotoFavButton.jsx
import React from 'react';
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ onClick, isFav, className = "" }) => {
  return (
    <div className={`photo-list__fav-icon ${className}`}>
      <button
        onClick={onClick}
        className={`photo-list__fav-icon-svg ${isFav ? 'active' : ''}`}
        aria-label="Toggle Favourite"
      >
        {isFav ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default PhotoFavButton;


