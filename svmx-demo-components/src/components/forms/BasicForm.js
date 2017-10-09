import React, { Component } from 'react';
import Button from '../buttons/Button';
import TextField from '../forms/TextField';
import Checkbox from '../forms/Checkbox';


import './css/style.css';

class BasicForm extends Component {

  render() {

    return (
      <div>
        <form >
          <fieldset className="form-field" style={{"maxWidth" : "400px"}}>
            <legend >Basic Form</legend>
            <ol className="list-bare">
              <li className="form-field">
                <TextField id='firstname' label='Name' type='text' placeholder='First name'/>
              </li>
            <li className="form-field">
              <Checkbox label='No Lastname' handleChange={() => {}}/>
            </li>
            </ol>
            <Button label='Cancel'/>
            <Button type='primary' label='Submit'/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default BasicForm;
