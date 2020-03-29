import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import ListItem from 'components/ListItem';
import { makeSelectCurrentUser } from '../../state/selectors';

export function RepoListItem(props) {
  const { item } = props;
  let nameprefix = '';

  if (item.owner.login !== props.currentUser) {
    nameprefix = `${item.owner.login}/`;
  }

  const content = (
    <article className="post is-space-s">
      <h4 className="title is-5">{nameprefix + item.name}</h4>
      <div className="media">
        <div className="media-left">
          <p className="image is-32x32">
            <img
              alt="asdfsdf"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </p>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <a href={item.html_url} target="_blank">
                {item.html_url}
              </a>
            </p>
          </div>
        </div>
        <div className="media-right">
          <span className="has-text-grey-light">
            <i className="fa fa-comments" />{' '}
            <FormattedNumber value={item.open_issues_count} />
          </span>
        </div>
      </div>
    </article>
  );

  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
