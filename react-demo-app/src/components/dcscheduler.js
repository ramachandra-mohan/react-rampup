import React, {Component} from 'react';
import JobListView from './job-list-view';
import ResourceListView from './resource-list-view';
import JobList from '../data/jobs';

class DCScheduler extends Component {

  constructor(props) {

      super(props);

      this.state = { search: '', jobs : JobList, filteredJobs: JobList };
      this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {

    this.setState({search : e.target.value.toLowerCase()});

    let matches = this.state.jobs.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()) );
    this.setState( {filteredJobs: matches} );
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <p><input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" onChange={this.onNameChange} /></p>
          </div>
          <JobListView jobs={this.state.filteredJobs}/>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-3">
              <p><button type="submit" className="btn">Create Event</button></p>
              <ResourceListView resources={this.props.resources}/>
            </div>
            <div className="col-md-9">
              <div className="gantt-container">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DCScheduler;
