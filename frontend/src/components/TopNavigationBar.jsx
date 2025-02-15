// frontend/src/components/TopNavigationBar.jsx
import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge'; 
import '../styles/TopNavigationBar.scss';

// Example topic data (you can move this into App.jsx if you prefer)
const topicsData = [
  { id: 1, slug: "topic-1", title: "Nature" },
  { id: 2, slug: "topic-2", title: "Travel" },
  { id: 3, slug: "topic-3", title: "People" },
];

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      {/* Topics in the middle */}
      <TopicList topics={topicsData} />
      
      {/* Favourite Badge on the right */}
      <FavBadge count={3} />
    </div>
  );
};

export default TopNavigation;
