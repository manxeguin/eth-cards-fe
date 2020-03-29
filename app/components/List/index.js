import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    content = <ComponentToRender />;
  }

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
