// frontend/src/App.jsx
import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; // Import the custom hook
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  // Destructure the state and actions from the custom hook
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  // If you need to store or pass photos/topics, you can do so directly here
  // or integrate them into your custom hook as well.
  const favourites = state.favourites;
  const selectedPhoto = state.selectedPhoto;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        setFavourites={updateToFavPhotoIds}  // Use the hook’s function to toggle favourites
        onSelectPhoto={setPhotoSelected}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          favourites={favourites}
          setFavourites={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;









