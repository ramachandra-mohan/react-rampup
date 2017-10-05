import React from 'react';
import PropTypes from 'prop-types';

const ResourceListView = (props) => {

  return (
    <div className="list-group listWrapper">
      {props.resources}
    </div>
  );
}

ResourceListView.propTypes = {
  resources: PropTypes.array.isRequired,
};

export default ResourceListView;
