import produce from 'immer';

import { CHANGE_LOCALE } from '../actions/constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialLanguageState = {
  locale: DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialLanguageState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });

export default languageProviderReducer;
