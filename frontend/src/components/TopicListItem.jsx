// TopicListItem.jsx
import React from 'react';
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  const handleClick = () => {
    // Pass the slug, not the ID
    onTopicSelect(topic.slug);
  };

  return (
    <div className="topic-list-item" onClick={handleClick}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;




