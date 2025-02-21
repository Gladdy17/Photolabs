# PhotoLabs

PhotoLabs is a full-stack photo gallery application that allows users to explore photos by topic, mark their favourite photos, and view detailed information about each photo in a modal view. The project is built with React (using Vite) on the front-end and Node.js with PostgreSQL on the back-end.

## Features

- **Photo Exploration:** Browse a collection of photos retrieved from the API.
- **Topic Navigation:** Click on topics in the top navigation to load photos for a specific category.
- **Favourites:** Mark/unmark photos as favourites. The global state tracks favourite photos and displays a count in the navigation.
- **Photo Details Modal:** Click on any photo to open a modal with a larger view, photographer details, and similar photos.
- **Custom Hooks & useReducer:** Application state is managed using a custom hook with `useReducer`, ensuring clean separation of concerns.
- **Responsive Design:** The UI is designed to work across various screen sizes.

## Technologies Used

- **Front-end:** React, Vite, Sass
- **Back-end:** Node.js, Express, PostgreSQL
- **State Management:** Custom hooks (useReducer)
- **API:** RESTful endpoints for photos and topics

## Setup & Installation

### Prerequisites

- Node.js (v14 or later)
- npm
- PostgreSQL (for the back-end)


