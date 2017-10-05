import React from 'react';
import './index.css';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';
import DispatchConsole from './dispatch-console';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <DispatchConsole />
  </Provider>,
  document.getElementById('root')
);
