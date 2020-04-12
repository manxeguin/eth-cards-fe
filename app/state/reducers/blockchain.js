import produce from 'immer';
import {
  LOAD_WEB3,
  LOAD_BLOCKCHAIN,
  LOAD_SMART_CONTRACTS,
  LOAD_BLOCKCHAIN_ERROR,
  LOAD_CARDS,
  LOADED_CARDS,
} from '../actions/constants';

export const initialGlobalState = {
  accounts: null,
  networkId: null,
  dbzCollectible: null,
  blockchainError: null,
  cards: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialGlobalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BLOCKCHAIN:
        draft.accounts = action.accounts;
        draft.networkId = action.networkId;
        break;

      case LOAD_SMART_CONTRACTS:
        draft.dbzCollectible = action.dbzCollectible;
        break;

      case LOAD_WEB3:
        break;

      case LOAD_CARDS:
        break;

      case LOADED_CARDS:
        draft.cards = action.cards;
        break;

      case LOAD_BLOCKCHAIN_ERROR:
        draft.blockchainError = action.blockchainError;
        break;
    }
  });

export default appReducer;
