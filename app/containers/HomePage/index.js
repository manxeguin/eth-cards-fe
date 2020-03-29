import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import ReposList from 'components/ReposList';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from '../../state/selectors';
import messages from './messages';
import { loadRepos } from '../../state/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from '../../state/sagas';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js application homepage" />
      </Helmet>
      <div>
        <section>
          <div className="container is-space-m">
            <div className="section-heading has-text-centered">
              <h3 className="title is-2 ">
                <FormattedMessage {...messages.trymeHeader} />
              </h3>
              <h4 className="subtitle is-5">
                <FormattedMessage {...messages.trymeMessage} />
              </h4>
              <div className="container has-text-centered">
                <form onSubmit={onSubmitForm}>
                  <label htmlFor="username">
                    <span>
                      <FormattedMessage {...messages.trymeAtPrefix} />
                    </span>
                    <input
                      id="username"
                      type="text"
                      placeholder="mxstbr"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </label>
                </form>
              </div>
            </div>
            <ReposList {...reposListProps} />
          </div>
        </section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
