import "../styles/PhotoList.scss";
import React from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ samplePhoto }) => (
  <div className="photo-list">
    <PhotoListItem
      key={samplePhoto.id}           // Unique key for list rendering
      photoId={samplePhoto.id}       // Passing the id as photoId prop
      imageSource={samplePhoto.imageSource}
      username={samplePhoto.username}
      location={samplePhoto.location}
      profile={samplePhoto.profile}
    />
  </div>
);

export default PhotoList;
