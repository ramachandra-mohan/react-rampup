import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../svmx/components/Button';
import OptionList from '../svmx/components/OptionList';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '40%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate( -50%, -50%)'
  }
};

class CreateCrewForm extends Component {

  constructor(props) {

      super(props);

      this.groups = props.orgmasterdata.map((node, index) => {
        return (
          { key: index, value: node.text }
        );
      });

      this.state = {
        name: 'New Crew',
        modalIsOpen: false,
        groups: this.groups,
        subgroup: [],
        selectedGroup: -1,
        selectedSubgroup: -1
      }

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createCrew = this.createCrew.bind(this);
      this.onGroupChange = this.onGroupChange.bind(this);
      this.onSubgroupChange = this.onSubgroupChange.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(e) {
      this.setState({name : e.target.value})
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    createCrew(e) {

      e.preventDefault();

      this.props.createCrew( this.state.name, this.state.selectedGroup, this.state.selectedSubgroup );
      this.setState({ name: 'New Crew', modalIsOpen: false, subgroup: [], selectedGroup: -1, selectedSubgroup: -1});
    }

    onGroupChange(value) {

      let subgroups = [];
      if( this.props.orgmasterdata[value] ) {

        subgroups = this.props.orgmasterdata[value].nodes.map((node, index) => {
          return (
            { key: index, value: node.text }
          );
        });
      }

      this.setState( { subgroups : subgroups, selectedGroup: value } );
    }

    onSubgroupChange(value) {
      this.setState( { selectedSubgroup : value } );
    }

    getSubgroup() {

      return(
        <div className="form-group">
          <label>Subgroup</label>
          <OptionList handleChange={this.onSubgroupChange} options={this.state.subgroups || []} />
        </div>
      );
    }

    render() {
      return (
        <div>
          <p><Button handleClick={this.openModal} label='Create Crew' /></p>
          <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Create Crew" style={customStyles}>
            <h2>Create New Crew</h2>
            <form>
              <div className="form-group">
      					<label>Crew Name</label>
      					<input type="text" id="crewName" className="form-control" value={this.state.name} onChange={this.onNameChange} />
      				</div>

      				<div className="form-group">
      					<label>Crew Group</label>
                <OptionList options={this.state.groups} handleChange={this.onGroupChange}/>
      				</div>
      				{this.getSubgroup()}

      				<Button handleClick={this.createCrew} label='Save'/>
              <Button handleClick={this.closeModal} label='Cancel' />
  			    </form>
          </Modal>
        </div>
      );
    }
}

CreateCrewForm.propTypes = {
    createCrew : PropTypes.func.isRequired,
};

export default CreateCrewForm;
