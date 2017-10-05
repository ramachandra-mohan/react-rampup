import React from 'react';
import PropTypes from 'prop-types';

const JobListView = (props) => {

  let jobs = props.jobs.map((job) => {
    return (
      <div className="list-group-item" key={job.name} style={{ 'textAlign': 'left'}} >
          <h5>{job.name} <small>{job.severity}</small> <small>{job.created_date}</small></h5>
          <h6>{job.account.name}</h6>
          <p><small>{job.account.city}, {job.account.state}</small></p>
          <small>{job.account.country}</small>
      </div>
    );
  });

  return (
      <div className="list-group listWrapper">
        {jobs}
      </div>
  );
}

JobListView.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default JobListView;
