import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",  // This is the sample id, but we'll override it in each item for uniqueness.
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {
  // Create an array with 3 items.
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      <div className="photo-list">
        {photos.map((_, index) => (
          <PhotoListItem
            key={index}                   // 'key' is a reserved prop in React; it should be unique for each element.
            photoId={index + 1}           // Use a unique photoId for each photo; here we simply use index + 1.
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


