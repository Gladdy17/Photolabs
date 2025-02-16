// frontend/src/components/HomeRoute.jsx
import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, setFavourites, onSelectPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favourites={favourites} topics={topics} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        setFavourites={setFavourites}
        onSelectPhoto={onSelectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
