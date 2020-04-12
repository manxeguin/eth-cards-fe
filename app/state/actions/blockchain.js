import {
  LOAD_WEB3,
  LOAD_BLOCKCHAIN,
  LOAD_SMART_CONTRACTS,
  LOAD_BLOCKCHAIN_ERROR,
  LOADED_CARDS,
  LOAD_CARDS,
} from './constants';

export function loadWeb3() {
  return {
    type: LOAD_WEB3,
  };
}

export function loadCards() {
  return {
    type: LOAD_CARDS,
  };
}

export function blockchainLoaded(accounts, networkId) {
  return {
    type: LOAD_BLOCKCHAIN,
    accounts,
    networkId,
  };
}

export function smartContractLoaded(dbzCollectible) {
  return {
    type: LOAD_SMART_CONTRACTS,
    dbzCollectible,
  };
}

export function cardsLoaded(cards) {
  return {
    type: LOADED_CARDS,
    cards,
  };
}

export function blockchainError(errorMsg) {
  return {
    type: LOAD_BLOCKCHAIN_ERROR,
    errorMsg,
  };
}
