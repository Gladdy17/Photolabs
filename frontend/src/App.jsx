// App.jsx
import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: { city: "Montreal", country: "Canada" },
  // Just use a leading slash if the files are in public/
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: "/profile-1.jpg"
};

const App = () => {
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      <div className="photo-list">
        {photos.map((_, index) => (
          <PhotoListItem
            key={index}
            photoId={index + 1}
            imageSource={sampleDataForPhotoListItem.imageSource}
            username={sampleDataForPhotoListItem.username}
            location={sampleDataForPhotoListItem.location}
            profile={sampleDataForPhotoListItem.profile}
          />
        ))}
      </div>
    </div>
  );
};

export default App;



