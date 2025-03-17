// frontend/src/routes/PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, favourites, setFavourites }) => {
  console.log('Selected photo data:', photo);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('photo-details-modal__overlay')) {
      onClose();
    }
  };

  // Toggle favourite for the main photo
  const toggleMainFav = (e) => {
    e.stopPropagation();
    if (favourites.includes(photo.id)) {
      setFavourites(favourites.filter((id) => id !== photo.id));
    } else {
      setFavourites([...favourites, photo.id]);
    }
  };

  const mainIsFav = favourites.includes(photo.id);

  // Convert similar_photos object to an array
  const similarPhotos = photo.similar_photos
    ? Object.values(photo.similar_photos)
    : [];

  // Toggle favourite for a similar photo
  const toggleSimilarFav = (simPhotoId, e) => {
    e.stopPropagation();
    if (favourites.includes(simPhotoId)) {
      setFavourites(favourites.filter((id) => id !== simPhotoId));
    } else {
      setFavourites([...favourites, simPhotoId]);
    }
  };

  return (
    <div className="photo-details-modal__overlay" onClick={handleOverlayClick}>
      <div className="photo-details-modal__content">
        
        {/* Close Button (Top-Right) */}
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close symbol" />
        </button>

        <div className="photo-details-modal__body">
          
          {/* Main photo container */}
          <div className="photo-details-modal__image-container">
            <img
              src={photo.urls.full}
              alt={`Large photo by ${photo.user.name}`}
              className="photo-details-modal__image"
            />

            {/* Heart icon overlay for the main photo */}
            <PhotoFavButton
              onClick={toggleMainFav}
              isFav={mainIsFav}
              className="photo-details-modal__fav-icon"
            />
          </div>

          {/* Main photo user info */}
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

          {/* Similar Photos */}
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-list">
              {similarPhotos.map((simPhoto) => {
                const simIsFav = favourites.includes(simPhoto.id);

                return (
                  <div key={simPhoto.id} className="photo-details-modal__similar-item">
                    
                    {/* Similar photo container */}
                    <div className="photo-details-modal__image-container">
                      <img
                        src={simPhoto.urls.regular}
                        alt={`Similar photo by ${simPhoto.user.name}`}
                        className="photo-details-modal__image"
                      />

                      {/* Heart icon overlay for the similar photo */}
                      <PhotoFavButton
                        onClick={(e) => toggleSimilarFav(simPhoto.id, e)}
                        isFav={simIsFav}
                        className="photo-details-modal__fav-icon"
                      />
                    </div>

                    {/* Photographer info for the similar photo */}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;







