// frontend/src/routes/PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, favourites, setFavourites }) => {
  console.log('Selected photo data:', photo);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('photo-details-modal')) {
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

  // Convert similar_photos object to an array (if it exists)
  const similarPhotos = photo.similar_photos ? Object.values(photo.similar_photos) : [];

  return (
    <div className="photo-details-modal" onClick={handleOverlayClick}>
      <div className="photo-details-modal__content">
        <button
          className="photo-details-modal__close-button"
          onClick={onClose}
        >
          <img src={closeSymbol} alt="Close symbol" />
        </button>
        <div className="photo-details-modal__body">
          {/* Display the larger version of the selected photo */}
          <div className="photo-details-modal__large-photo">
            <img
              src={photo.urls.full}
              alt={`Large photo by ${photo.user.name}`}
            />
          </div>
          {/* Favourite button in the modal */}
          <div className="photo-details-modal__favourite">
            <PhotoFavButton
              onClick={(e) => { e.stopPropagation(); toggleFavourite(); }}
              isFav={isFav}
            />
          </div>
          {/* Display similar photos below */}
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-list">
              {similarPhotos.map(simPhoto => (
                <div key={simPhoto.id} className="photo-details-modal__similar-item">
                  <img
                    src={simPhoto.urls.regular}
                    alt={`Similar photo by ${simPhoto.user.name}`}
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




