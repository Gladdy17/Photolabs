// frontend/src/App.jsx
import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the modal
import './App.scss';

const App = () => {
  const { state, setPhotoSelected, onLoadTopic, updateToFavPhotoIds, onClosePhotoDetailsModal } = useApplicationData();

  return (
    <div className="app">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favourites={state.favourites}
        setFavourites={updateToFavPhotoIds}
        onTopicSelect={onLoadTopic}
        onSelectPhoto={setPhotoSelected} // Pass it here
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          favourites={state.favourites}
          setFavourites={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;

