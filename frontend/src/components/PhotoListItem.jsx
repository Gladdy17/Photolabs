import "../styles/PhotoListItem.scss";

// frontend/src/components/PhotoListItem.jsx
import React from 'react';

const PhotoListItem = ({ photoId, imageSource, username, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div>{username}</div>
      <div>{location.city}, {location.country}</div>
      <img src={profile} alt={`${username}'s profile`} />
    </div>
  );
};

export default PhotoListItem;

