// frontend/src/components/TopNavigationBar.jsx
import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Pass the topics prop down to TopicList */}
      <TopicList topics={topics} />
      <FavBadge count={3} />
    </div>
  );
};

export default TopNavigationBar;

