// frontend/src/hooks/useApplicationData.js
import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload.photoId)
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [],
    selectedPhoto: null,
    photoData: [],
    topicData: []
  });

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: { photoId }
      });
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { photoId }
      });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Fetch photos for a specific topic using the correct endpoint
  const onLoadTopic = (topicId) => {
    fetch(`/api/topics/${topicId}/photos`) // Correct the endpoint if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((err) => console.error("Error loading topic photos:", err));
  };

  // Initial fetch of all photos
  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(err => console.error("Error fetching photos:", err));
  }, []);

  // Initial fetch of all topics
  useEffect(() => {
    fetch("/api/topics")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(err => console.error("Error fetching topics:", err));
  }, []);

  return {
    state,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    setPhotoSelected,
    onLoadTopic
  };
}



