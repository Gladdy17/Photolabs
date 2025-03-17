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
        {isFav ? (
          <svg viewBox="0 0 24 24" className="heart-icon">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="heart-icon">
            <path d="M16.5,3c-1.74,0-3.41,0.81-4.5,2.09C10.91,3.81,9.24,3,7.5,3C4.42,3,2,5.42,2,8.5c0,3.78,3.4,6.86,8.55,11.54
                     L12,21.35l1.45-1.32C18.6,15.36,22,12.28,22,8.5C22,5.42,19.58,3,16.5,3z M12.1,18.55l-0.1,0.1l-0.1-0.1
                     C7.14,14.24,4,11.39,4,8.5C4,6.5,5.5,5,7.5,5c1.54,0,3.04,1,3.57,2.36h1.87C13.46,6,14.96,5,16.5,5C18.5,5,20,6.5,20,8.5
                     C20,11.39,16.86,14.24,12.1,18.55z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PhotoFavButton;



