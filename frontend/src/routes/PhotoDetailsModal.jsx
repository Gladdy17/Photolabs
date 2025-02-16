// frontend/src/routes/PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose }) => {
  // Close if user clicks on the overlay (outside the content box)
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('photo-details-modal')) {
      onClose();
    }
  };

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
          {/* A plus sign (or any placeholder) to indicate blank content */}
          <div className="photo-details-modal__icon">+</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;


