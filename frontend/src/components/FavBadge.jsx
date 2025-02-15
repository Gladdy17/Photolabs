// FavBadge.jsx
import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = ({ count }) => {
  const hasFavourites = count > 0;

  return (
    <div className="fav-badge">
      <span className="fav-badge__icon">
        {hasFavourites ? '❤️' : '🤍'}
      </span>
      {/* Optionally show the count if there's at least one favourite */}
      {hasFavourites && <span className="fav-badge__count">{count}</span>}
    </div>
  );
};

export default FavBadge;
