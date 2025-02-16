// TopNavigationBar.jsx
import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favourites, topics }) => {
  const favouriteCount = favourites.length;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {favouriteCount > 0 && <FavBadge count={favouriteCount} />}
    </div>
  );
};

export default TopNavigationBar;



