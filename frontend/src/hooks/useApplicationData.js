// frontend/src/hooks/useApplicationData.js
import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
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
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [],
    selectedPhoto: null
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

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}

