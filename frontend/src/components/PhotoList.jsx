// PhotoList.jsx (example snippet)
import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onSelectPhoto, favourites, setFavourites }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onSelectPhoto={onSelectPhoto}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ))}
    </div>
  );
};

export default PhotoList;





