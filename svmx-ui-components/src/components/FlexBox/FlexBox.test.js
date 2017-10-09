import React from 'react';
import ReactDOM from 'react-dom';
import FlexBox from './FlexBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FlexBox/>, div);
});

Object.keys(FlexBox._directions).forEach(function(direction) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlexBox direction={direction}/>, div);
  });
});

Object.keys(FlexBox._alignments).forEach(function(alignment) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlexBox alignment={alignment}/>, div);
  });
});

Object.keys(FlexBox._justifys).forEach(function(justify) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlexBox justify={justify}/>, div);
  });
});

Object.keys(FlexBox._directions).forEach(function(direction) {
  Object.keys(FlexBox._alignments).forEach(function(alignment) {
    Object.keys(FlexBox._justifys).forEach(function(justify) {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FlexBox direction={direction} alignment={alignment} justify={justify}/>, div);
      });
    });
  });
});
