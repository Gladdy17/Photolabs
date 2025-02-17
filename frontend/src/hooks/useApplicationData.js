// frontend/src/hooks/useApplicationData.js
import { useState } from 'react';

export default function useApplicationData() {
  // We store all our application-level data in a single state object.
  // You can add more keys (photos, topics, etc.) as needed.
  const [state, setState] = useState({
    favourites: [],
    selectedPhoto: null
  });

  /**
   * Toggle a photo in/out of favourites.
   * If the photoId is already in favourites, remove it.
   * Otherwise, add it.
   */
  const updateToFavPhotoIds = (photoId) => {
    setState(prev => {
      const isFav = prev.favourites.includes(photoId);
      const newFavourites = isFav
        ? prev.favourites.filter(id => id !== photoId)
        : [...prev.favourites, photoId];

      return { ...prev, favourites: newFavourites };
    });
  };

  /**
   * Set the selectedPhoto in state, e.g. when a user clicks a photo.
   */
  const setPhotoSelected = (photo) => {
    setState(prev => ({ ...prev, selectedPhoto: photo }));
  };

  /**
   * Clear the selectedPhoto from state, effectively closing the modal.
   */
  const onClosePhotoDetailsModal = () => {
    setState(prev => ({ ...prev, selectedPhoto: null }));
  };

  // Return the state and actions so other components (like App) can use them.
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}
