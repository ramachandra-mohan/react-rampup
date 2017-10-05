import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ResourceListView from './resource-list-view';
import TreeView from 'treeview-react-bootstrap';
import CreateCrewForm from './create-crew-form';
import * as CrewManagerActionCreators from '../actions/crew-manager';

class CrewManager extends Component {

  constructor(props) {

          super(props);
          this.state = { search: '', resources : this.props.resources, filteredResources: this.props.resources };
          this.onCreateCrew = this.onCreateCrew.bind(this);
          this.onNameChange = this.onNameChange.bind(this);
  }

  onCreateCrew(e) {
    console.log('onCreateCrew: ' + e);
  }

  onNameChange(e) {

    this.setState({search : e.target.value.toLowerCase()});

    let matches = this.state.resources.filter(value => value.key.toLowerCase().includes(e.target.value.toLowerCase()) );
    this.setState( {filteredResources: matches} );
  }

  render() {

    const { dispatch, nodes } = this.props;
    const createCrew = bindActionCreators(CrewManagerActionCreators.createCrew, dispatch);

    return (
      <div className="row">
        <div className="col-md-3">
            <p><input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" onChange={this.onNameChange} /></p>
            <ResourceListView resources={this.state.filteredResources}/>
        </div>
        <div className="col-md-9">
          <CreateCrewForm orgmasterdata={nodes} createCrew={createCrew}/>
          <div className="list-group listWrapper">
            <TreeView data={nodes} />
          </div>
        </div>
      </div>
    );
  }
}

CrewManager.propTypes = {
  
  nodes: PropTypes.array.isRequired,
  resources: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    nodes : state.nodes,
});

export default connect(mapStateToProps)(CrewManager);
