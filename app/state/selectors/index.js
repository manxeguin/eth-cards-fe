import { createSelector } from 'reselect';
import { initialLanguageState } from '../reducers/language';

const selectRouter = state => state.router;

const selectLanguage = state => state.language || initialLanguageState;

const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation, selectLanguage, makeSelectLocale };
