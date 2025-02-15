// frontend/src/App.jsx
import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
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

const topicsData = [
  { id: 1, slug: "topic-1", title: "Nature" },
  { id: 2, slug: "topic-2", title: "Travel" },
  { id: 3, slug: "topic-3", title: "People" },
];

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <TopicList topics={topicsData} />
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default App;





