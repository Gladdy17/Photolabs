// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = ({ photos, topics, favourites, setFavourites, onSelectPhoto }) => {
  return (
    <div className="home-route">
      {/* Pass favourites to TopNavigationBar */}
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


