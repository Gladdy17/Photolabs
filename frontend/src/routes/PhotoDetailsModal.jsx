// frontend/src/routes/PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, favourites = [], setFavourites }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('photo-details-modal__overlay')) {
      onClose();
      console.log('favourites:', favourites);
    }
  };

  // const toggleFav = (e) => {
  //   e.stopPropagation();
  //   if (favourites.includes(photo.id)) {
  //     setFavourites(favourites.filter((id) => id !== photo.id));
  //   } else {
  //     setFavourites([...favourites, photo.id]);
  //   }
  // };

  // const toggleFav = (e) => {
  //   e.stopPropagation();
  //   console.log('Favourites:', favourites);
  //   console.log('ID:', id);
  //   setFavourites(photo.id)

  // };


  // const toggleFav = (e) => {
  //   e.stopPropagation();
  //   console.log('Favourites:', favourites);
  //   console.log('Photo ID:', photo.id); // Use photo.id instead of id
  //   if (favourites.includes(photo.id)) {
  //     setFavourites(favourites.filter((favId) => favId !== photo.id));
  //   } else {
  //     setFavourites([...favourites, photo.id]);
  //   }
  // };

  const mainIsFav = favourites.includes(photo.id);

  const similarPhotos = photo.similar_photos
    ? Object.values(photo.similar_photos)
    : [];

  const toggleSimilarFav = (simPhotoId, e) => {
    // e.stopPropagation();
    // if (favourites.includes(simPhotoId)) {
    //   setFavourites(favourites.filter((id) => id !== simPhotoId));
    // } else {
    //   setFavourites([...favourites, simPhotoId]);
    // }
    console.log(e);
    e.stopPropagation();
    console.log(simPhotoId);
    setFavourites(simPhotoId);
  };


  const toggleFav = (e) => {
    console.log(e);
    // e.stopPropagation();
    console.log(photo.id);
    setFavourites(photo.id);
  };

  return (
    <div className="photo-details-modal__overlay" onClick={handleOverlayClick}>
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close symbol" />
        </button>

        <div className="photo-details-modal__body">
          <div className="photo-details-modal__image-container">
            <img
              src={photo.urls.full}
              alt={`Large photo by ${photo.user.name}`}
              className="photo-details-modal__image"
            />
            <PhotoFavButton
              onClick={(e) => toggleFav(photo.id, e)}
              isFav={favourites.includes(photo.id)}
              className="photo-details-modal__fav-icon"
            />
          </div>

          <div className="photo-details-modal__info-bar">
            <img
              className="photo-details-modal__profile"
              src={photo.user.profile}
              alt={`${photo.user.name}'s profile`}
            />
            <div className="photo-details-modal__profile-info">
              <div className="photo-details-modal__profile-name">
                {photo.user.name}
              </div>
              <div className="photo-details-modal__profile-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>

          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-list">
              {similarPhotos.map((simPhoto) => (
                <div key={simPhoto.id} className="photo-details-modal__similar-item">
                  <div className="photo-details-modal__image-container">
                    <img
                      src={simPhoto.urls.regular}
                      alt={`Similar photo by ${simPhoto.user.name}`}
                      className="photo-details-modal__image"
                    />
                    <PhotoFavButton
                      onClick={(e) => toggleSimilarFav(simPhoto.id, e)}
                      isFav={favourites.includes(simPhoto.id)}
                      className="photo-details-modal__fav-icon"
                    />
                  </div>
                  <div className="photo-details-modal__info-bar">
                    <img
                      className="photo-details-modal__profile"
                      src={simPhoto.user.profile}
                      alt={`${simPhoto.user.name}'s profile`}
                    />
                    <div className="photo-details-modal__profile-info">
                      <div className="photo-details-modal__profile-name">
                        {simPhoto.user.name}
                      </div>
                      <div className="photo-details-modal__profile-location">
                        {simPhoto.location.city}, {simPhoto.location.country}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;







