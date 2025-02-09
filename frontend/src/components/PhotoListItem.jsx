import "../styles/PhotoListItem.scss";

// frontend/src/components/PhotoListItem.jsx
import React from 'react';

const PhotoListItem = ({ photoId, imageSource, username, location, profile }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-info">{username}</div>
      <div className="photo-list__user-location">{location.city}, {location.country}</div>
      <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
    </div>
  );

};

export default PhotoListItem;

