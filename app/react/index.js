import 'config/foundation_init.scss';
import 'config/fonts.css';
import 'index.scss';
import 'styles/index.scss';

import 'config/globals';
import 'whatwg-fetch';
import 'babel-polyfill';
import 'foundation-sites';

import RWR from 'react-webpack-rails';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configure_store';
import Routes from 'router/router';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// init React Webpack Rails integration
RWR.run();

// init Foundation Sites
$(document).foundation();

const root = document.querySelector('#root');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const app = (
  <Provider store={ store }>
    <Routes history={ history } />
  </Provider>
);

render(app, root);
