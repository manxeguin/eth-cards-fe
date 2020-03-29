import { createSelector } from 'reselect';
import { initialGlobalState } from '../reducers/global';
import { initialLanguageState } from '../reducers/language';

const selectGlobal = state => state.global || initialGlobalState;

const selectRouter = state => state.router || initialGlobalState;

const selectLanguage = state => state.language || initialLanguageState;

const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  selectLanguage,
  makeSelectLocale,
};
