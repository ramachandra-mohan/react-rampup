import React from 'react';
import ReactDOM from 'react-dom';
import OptionList from './../../../svmx/components/OptionList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionList options={[{key: 'key1', value: 'value2'}]} selected='key1'/>, div);
});
