// frontend/src/App.jsx
import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // The modal component
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  // Global state for favourited photos (an array of photo IDs)
  const [favourites, setFavourites] = useState([]);
  // State for the currently selected photo (for the modal)
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Handler to open the modal with a specific photo
  const handleSelectPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        setFavourites={setFavourites}
        onSelectPhoto={handleSelectPhoto}
      />
      {/* Conditionally render the modal if a photo is selected */}
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;







