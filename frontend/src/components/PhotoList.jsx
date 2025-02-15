// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          // Match the property names from your mock data:
          imageSource={photo.urls.regular}
          username={photo.user.name}    // or photo.user.username
          location={photo.location}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};

export default PhotoList;



