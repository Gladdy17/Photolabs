// frontend/src/components/PhotoFavButton.jsx
import React, { useState } from 'react';
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    console.log("Favourite clicked:", !liked);
  };

  return (
    <div className="photo-list__fav-icon">
      <button
        onClick={handleClick}
        className={`photo-list__fav-icon-svg ${liked ? 'active' : ''}`}
        aria-label="Toggle Favourite"
      >
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default PhotoFavButton;

