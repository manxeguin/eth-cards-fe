import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loadWeb3, loadSmartContract, loadAllCards } from '../../blockchain';
import { LOAD_WEB3, LOAD_CARDS } from '../actions/constants';
import { makeSelectDbContract } from '../selectors/blockchain';
import {
  blockchainLoaded,
  smartContractLoaded,
  blockchainError,
  cardsLoaded,
} from '../actions/blockchain';

export function* loadBlockchain() {
  try {
    const { accounts, networkId } = yield call(loadWeb3);
    yield put(blockchainLoaded(accounts, networkId));
    const dbzCollectible = yield call(loadSmartContract, networkId);
    yield put(smartContractLoaded(dbzCollectible));
  } catch (err) {
    yield put(blockchainError(err));
  }
}

export function* loadDBCards() {
  try {
    const contract = yield select(makeSelectDbContract());
    const cards = yield call(loadAllCards, contract);
    yield put(cardsLoaded(cards));
  } catch (err) {
    yield put(blockchainError(err));
  }
}

export default function* blockchainData() {
  yield takeLatest(LOAD_WEB3, loadBlockchain);
  yield takeLatest(LOAD_CARDS, loadDBCards);
}
