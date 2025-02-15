// frontend/src/App.jsx
import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList'; // <-- Add this line
import './App.scss';

const sampleDataForPhotoList = [
  {
    id: "1",
    location: { city: "Montreal", country: "Canada" },
    imageSource: "/Image-1-Regular.jpeg",
    username: "Joe Example",
    profile: "/profile-1.jpg",
  },
  {
    id: "2",
    location: { city: "Toronto", country: "Canada" },
    imageSource: "/Image-2-Regular.jpeg",
    username: "Jane Doe",
    profile: "/profile-2.jpg",
  },
  {
    id: "3",
    location: { city: "Vancouver", country: "Canada" },
    imageSource: "/Image-3-Regular.jpeg",
    username: "Sam Smith",
    profile: "/profile-3.jpg",
  },
];

const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default App;





