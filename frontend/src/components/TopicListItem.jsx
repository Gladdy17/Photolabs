// frontend/src/components/TopicListItem.jsx
import React from 'react';
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title }) => {
  return (
    <div className="topic-list-item">
      {title}
    </div>
  );
};

export default TopicListItem;

