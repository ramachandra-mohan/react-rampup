import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridLayout/>, div);
});

Object.keys(GridLayout._gutters).forEach(function(gutter) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridLayout gutter={gutter}/>, div);
  });
});

Object.keys(GridLayout._alignments).forEach(function(alignment) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridLayout alignment={alignment}/>, div);
  });
});

Object.keys(GridLayout._verticals).forEach(function(vertical) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridLayout vertical={vertical}/>, div);
  });
});

Object.keys(GridLayout._gutters).forEach(function(gutter) {
  Object.keys(GridLayout._alignments).forEach(function(alignment) {
    Object.keys(GridLayout._verticals).forEach(function(vertical) {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GridLayout gutter={gutter} alignment={alignment} vertical={vertical}/>, div);
      });
    });
  });
});
