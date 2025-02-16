// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onSelectPhoto }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onSelectPhoto={onSelectPhoto}
        />
      ))}
    </div>
  );
};

export default PhotoList;




