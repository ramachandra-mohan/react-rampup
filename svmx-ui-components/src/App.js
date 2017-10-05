import React, { Component } from 'react';
import Spinner from './components/spinner/Spinner';
import ProgressBar from './components/progress-bar/ProgressBar';
import Button from './components/buttons/Button';
import Tile from './components/tile/Tile';
import Box from './components/layout/Box';
import FlexBox from './components/layout/FlexBox';
import Flag from './components/layout/Flag';
import TextField from './components/forms/TextField';
import RadioButton from './components/forms/RadioButton';
import Checkbox from './components/forms/Checkbox';
import BasicForm from './components/forms/BasicForm';
import ListView from './components/list/ListView';
import Toggle from './components/toggle/Toggle';
import BrandingBar from './components/branding/BrandingBar';
import Table from './components/table/Table';

import './theme/css/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrandingBar title='Dispatch Console 2.0'/>
        <ProgressBar />
        <Box> FlexBox
          <FlexBox>
            <Box> Tile <Tile title='Sample Title' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur'/></Box>
            <Box>
              <TextField label='DefaultLabel'/>
              <TextField label='Warning Label' validation='warning' placeholder='warning'/>
              <TextField label='Error Label' validation='error' placeholder='error'/>
              <TextField label='Success Label' validation='success' placeholder='succcess'/>
            </Box>
            <Box>
              <TextField label='Disabled Label' placeholder='disabled' disabled/>
              <TextField label='Password Label' placeholder='Enter a password' type='password'/>
            </Box>
              <Box>
                <Spinner />
                <Spinner size={50} />
                <Spinner size={25} />
                <Spinner size={5} />
              </Box>
              <Box>
                <Button /><br/><br/>
                <Button type='primary' label='Primaty'/><br/><br/>
                <Button label='Disabled' disabled />
              </Box>
              <Box>
                <RadioButton label='Option 1' id='option1'/>
                <RadioButton label='Option 2' id='option2'/>
                <RadioButton label='Option 3' id='option3' selected/>
                <RadioButton label='Disabled' id='' disabled/>
              </Box>
              <Box>
                <Checkbox label='Checkbox 1' id='checkbox1' handleChange={()=>{}}/>
                <Checkbox label='Checkbox 2' id='checkbox2' selected handleChange={()=>{}}/>
                <Checkbox label='Disabled 1' id='checkbox3' disabled handleChange={()=>{}}/>
              </Box>

              <Box>
                <Toggle id='example'/><br/>
                <Toggle id='disabled' disabled />
              </Box>
          </FlexBox>
        </Box>
        <FlexBox>
          <Box><Flag caption='Sample Flag'/></Box>
        </FlexBox><br/>
        <FlexBox>
          <BasicForm />
          <Box><ListView /></Box>
        </FlexBox>
        <Table />
      </div>
    );
  }
}

export default App;
