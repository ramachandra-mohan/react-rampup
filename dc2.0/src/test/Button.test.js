import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../component/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button label='Default'/>, div);
});
