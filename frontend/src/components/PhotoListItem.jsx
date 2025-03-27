// PhotoListItem.jsx
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, onSelectPhoto, favourites = [], setFavourites }) => {
  const { id, urls, user, location } = photo;

  const handleClick = () => {
    onSelectPhoto(photo);
  };

  const toggleFav = (e) => {
    e.stopPropagation();
    console.log('Favourites:', favourites);
    console.log('ID:', id);
    setFavourites(id)
    // if (favourites.includes(id)) {
    //   setFavourites(favourites.filter(favId => favId !== id));
    // } else {
    //   setFavourites([...favourites, id]);
    // }
  };

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <img className="photo-list__image" src={urls.regular} alt={`Photo by ${user.name}`} />

      {/* User details */}
      <div className="photo-list__user-info">{user.name}</div>
      <div className="photo-list__user-location">
        {location.city}, {location.country}
      </div>
      <img
        className="photo-list__user-profile"
        src={user.profile}
        alt={`${user.name}'s profile`}
      />

      {/* Favourite (Like) Button */}
      <PhotoFavButton 
        onClick={toggleFav} 
        isFav={favourites.includes(id)}
      />
    </div>
  );
};

export default PhotoListItem;







