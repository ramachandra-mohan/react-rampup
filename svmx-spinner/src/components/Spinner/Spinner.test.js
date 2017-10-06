import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner/>, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner size={50}/>, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner finished={true}/>, div);
});
