import React, { Component } from 'react';


import Box from './Box';
import Tree from './Tree';
import Inbox from './Inbox';
import Label from './Label';
import Toggle from './Toggle';
import Button from './Button';
import FlexBox from './FlexBox';
import Spinner from './Spinner';
import Typeahead from './Typeahead';
import AlertMessage from './AlertMessage';
import DatetimeField from './DatetimeField';
import DatetimePicker from './DatetimePicker';
import CalendarPicker from './CalendarPicker';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';


class ScheduleComponent extends Component {

  render() {
    return (
      <div>
        <Inbox>
          <div className="flex flex--col flex--left flex--top">
            <FlexBox>

              <Box>
                <Label label="important" type="important"/>
                <Label label="warning" type="warning"/>
                <Label label="error" type="error"/>
                <Label label="information" type="information"/>
                <Label label="unknown" type="unknown"/>
                <Label label="healthy" type="healthy"/>
              </Box>

              <Box> <Spinner /><Spinner size="50"/><Spinner size="25"/><Spinner size="5"/> </Box>
              <Box><Tree /></Box>
              <Box> <Button/> <Button label='Primary' type='primary'/> </Box>

              <Box>
                <AlertMessage autodismiss="5000" type="information" title="Well done!" message="Alert information autodismiss=5000." />
                <AlertMessage type="important" title="Well done!" message="Alert important." />
                <AlertMessage type="error" title="Well done!" message="Alert error hide-severity." hide-severity/>
                <AlertMessage type="warning" title="Well done!" message="Alert warning hide-badge." hide-badge/>
              </Box>

            </FlexBox>

            <FlexBox>
              <Box> <CalendarPicker /> </Box>
              <Box> <DatetimeField /> <br/> <DatetimePicker /> </Box>
              <Box> <Toggle /> </Box>
              <Box>
                <Typeahead />
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
                <Checkbox label='Disabled' id='checkbox3' disabled handleChange={()=>{}}/>
              </Box>
            </FlexBox>

          </div>
        </Inbox>
      </div>
    );
  }
}

export default ScheduleComponent;
