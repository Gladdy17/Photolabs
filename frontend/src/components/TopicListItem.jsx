// frontend/src/components/TopicListItem.jsx
import React from 'react';
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  const handleClick = () => {
    onTopicSelect(topic.id);
  };

  return (
    <div className="topic-list-item" onClick={handleClick}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;


