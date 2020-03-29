import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  CHANGE_LOCALE,
} from './constants';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
