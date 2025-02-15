import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList'; 
import '../styles/HomeRoute.scss';

// Sample photo data (you can also pass this in as props from App if you prefer)
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

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList photos={sampleDataForPhotoList} />
    </div>
  );
};

export default HomeRoute;
