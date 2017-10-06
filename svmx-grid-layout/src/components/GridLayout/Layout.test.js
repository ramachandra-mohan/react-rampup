import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout/>, div);
});

Object.keys(Layout._verticals).forEach(function(vertical) {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout vertical={vertical}/>, div);
  });
});

for( let i = 1; i < 6; i++ ) {
  for( let j = i; j <= 6; j++ ) {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Layout width={`${i}/${j}`}/>, div);
    });
  }
}
