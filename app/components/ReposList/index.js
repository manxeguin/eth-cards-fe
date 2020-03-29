import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return (
      <div className="box content is-space-m">
        <List component={LoadingIndicator} />
      </div>
    );
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return (
      <div className="box content is-space-m">
        <List component={ErrorComponent} />
      </div>
    );
  }

  if (repos !== false) {
    return (
      <div className="box content is-space-m">
        <List items={repos} component={RepoListItem} />
      </div>
    );
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
