/* eslint-disable indent */
/* eslint-disable dot-notation */
import { createSelector } from 'reselect';
import { initialGlobalState } from '../reducers/blockchain';
import { metadataMap } from '../../blockchain/cardmetadata';

const selectGlobal = state => state.blockchain || initialGlobalState;

const makeSelectDbContract = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.dbzCollectible,
  );

const makeSelectCards = () =>
  createSelector(
    selectGlobal,
    globalState =>
      globalState.cards
        ? globalState.cards.map(card =>
            Object.assign(
              {},
              {
                birthTime: card['birthTime'],
                cardType: card['cardType'],
                price: card['price'],
              },
              metadataMap[card['cardType']],
            ),
          )
        : null,
  );

export { makeSelectDbContract, makeSelectCards };
