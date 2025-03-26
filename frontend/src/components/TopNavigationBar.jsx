// TopNavigationBar.jsx
import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favourites, topics, onTopicSelect }) => {
  const favouriteCount = favourites.length;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Forward onTopicSelect to TopicList */}
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      {favouriteCount > 0 && <FavBadge count={favouriteCount} />}
    </div>
  );
};

export default TopNavigationBar;





