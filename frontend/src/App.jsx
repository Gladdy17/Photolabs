// frontend/src/App.jsx
import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const { favourites, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        setFavourites={updateToFavPhotoIds}
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









