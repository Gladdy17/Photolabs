// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favourites, setFavourites, onTopicSelect }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        favourites={favourites}
        topics={topics}
        onTopicSelect={onTopicSelect} // Pass it here
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default HomeRoute;




