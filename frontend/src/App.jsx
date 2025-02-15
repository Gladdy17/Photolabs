// frontend/src/App.jsx
import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  // Global state for favourited photos (an array of photo IDs)
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default App;






