// frontend/src/components/PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}              // React requires a unique key for each list item
          photoId={photo.id}
          imageSource={photo.imageSource}
          username={photo.username}
          location={photo.location}
          profile={photo.profile}
        />
      ))}
    </div>
  );
};

export default PhotoList;


