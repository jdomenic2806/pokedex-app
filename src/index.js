import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PokedexApp } from './PokedexApp';
import { store } from './store/store';
import './styles/styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <PokedexApp />
  </Provider>,
  document.getElementById('root')
);
