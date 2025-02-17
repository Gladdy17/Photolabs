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
          {/* Placeholder for modal content */}
          <div className="photo-details-modal__icon">+</div>
          {/* Favourite icon in the modal */}
          <PhotoFavButton
            onClick={(e) => { e.stopPropagation(); toggleFavourite(); }}
            isFav={isFav}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;



