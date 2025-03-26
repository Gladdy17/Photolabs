// HomeRoute.jsx
import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = ({ photos, topics, favourites, setFavourites, onSelectPhoto }) => {
  // Store the selected topic slug instead of an id
  const [selectedTopicSlug, setSelectedTopicSlug] = useState(null);

  // When a topic is selected, store its slug
  const handleTopicSelect = (slug) => {
    setSelectedTopicSlug(slug);
  };

  // Filter photos based on whether the photo URL includes the selected slug
  const filteredPhotos = selectedTopicSlug
    ? photos.filter(photo => photo.urls.full.includes(selectedTopicSlug))
    : photos;

  console.log('Selected Topic Slug:', selectedTopicSlug);
  console.log('Filtered Photos:', filteredPhotos);

  return (
    <div className="home-route">
      <TopNavigationBar 
        favourites={favourites} 
        topics={topics} 
        onTopicSelect={handleTopicSelect} 
      />
      <PhotoList 
        photos={filteredPhotos} 
        favourites={favourites} 
        setFavourites={setFavourites}
        onSelectPhoto={onSelectPhoto} 
      />
    </div>
  );
};

export default HomeRoute;




