// frontend/src/components/HomeRoute.jsx
import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, setFavourites, onTopicSelect, onSelectPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        favourites={favourites}
        topics={topics}
        onTopicSelect={onTopicSelect}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        setFavourites={setFavourites}
        onSelectPhoto={onSelectPhoto} // Pass it here
      />
    </div>
  );
};

export default HomeRoute;
