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

  const toggleFavourite = () => {
    if (favourites.includes(photo.id)) {
      setFavourites(favourites.filter(id => id !== photo.id));
    } else {
      setFavourites([...favourites, photo.id]);
    }
  };

  const isFav = favourites.includes(photo.id);
  const similarPhotos = photo.similar_photos ? Object.values(photo.similar_photos) : [];

  return (
    <div className="photo-details-modal__overlay" onClick={handleOverlayClick}>
      <div className="photo-details-modal__content">

        {/* Close Button positioned via CSS (top-right) */}
        <button
          className="photo-details-modal__close-button"
          onClick={onClose}
        >
          <img
            src={closeSymbol}
            alt="Close symbol"
          />
        </button>

        <div className="photo-details-modal__body">
          {/* Large Photo */}
          <div className="photo-details-modal__large-photo">
            <img
              src={photo.urls.full}
              alt={`Large photo by ${photo.user.name}`}
              className="photo-details-modal__image"
            />
          </div>

          {/* Info Bar: Profile + Name/Location + Heart Icon */}
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

            <div className="photo-details-modal__favourite">
              <PhotoFavButton
                onClick={(e) => { e.stopPropagation(); toggleFavourite(); }}
                isFav={isFav}
              />
            </div>
          </div>

          {/* Similar Photos */}
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-list">
              {similarPhotos.map(simPhoto => (
                <div key={simPhoto.id} className="photo-details-modal__similar-item">
                  <img
                    src={simPhoto.urls.regular}
                    alt={`Similar photo by ${simPhoto.user.name}`}
                    className="photo-details-modal__image"
                  />
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






