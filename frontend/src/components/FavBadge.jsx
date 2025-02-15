// frontend/src/components/FavBadge.jsx
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/**
 * isFavPhotoExist could be a boolean or a number. 
 * - If it's a boolean, you can keep it as is.
 * - If it's a number, you can rename the prop to "count" 
 *   and display it in the badge (as shown below).
 */

// Example approach if isFavPhotoExist is a *number*:
const FavBadge = ({ isFavPhotoExist = 0 }) => {
  return (
    <div className="fav-badge">
      {/* Display the icon in "alert" (red) if there's at least 1 favorited photo */}
      <FavIcon displayAlert={isFavPhotoExist > 0} />

      {/* Show the numeric count next to the icon */}
      <span className="fav-badge__count">{isFavPhotoExist}</span>
    </div>
  );
};

export default FavBadge;
