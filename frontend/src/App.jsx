// frontend/src/App.jsx
import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { favourites, selectedPhoto, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
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

