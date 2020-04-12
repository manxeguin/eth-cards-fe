/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Card from '../Card';
import { loadCards } from '../../../state/actions/blockchain';
import {
  makeSelectDbContract,
  makeSelectCards,
} from '../../../state/selectors/blockchain';

function CardList({ loadDBCards, contract, cards }) {
  const cardList = cards
    ? cards.map((card, i) => (
        <div className="column is-space-2xl-top">
          <Card card={card} key={i} />
        </div>
      ))
    : 'LOADING';

  useEffect(() => {
    if (contract) {
      loadDBCards();
    }
  }, [contract]);

  return <div className="columns">{cardList}</div>;
}

const mapStateToProps = createStructuredSelector({
  contract: makeSelectDbContract(),
  cards: makeSelectCards(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadDBCards: () => dispatch(loadCards()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CardList);
