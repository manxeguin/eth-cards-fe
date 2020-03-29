import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from '../actions/constants';

// The initial state of the App
export const initialGlobalState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialGlobalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
