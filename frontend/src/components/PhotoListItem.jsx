// frontend/src/components/PhotoListItem.jsx
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoId, imageSource, username, location, profile }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />

      {/* User details */}
      <div className="photo-list__user-info">{username}</div>
      <div className="photo-list__user-location">
        {location.city}, {location.country}
      </div>
      <img
        className="photo-list__user-profile"
        src={profile}
        alt={`${username}'s profile`}
      />

      {/* Favourite (Like) Button */}
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;



