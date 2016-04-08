import 'config/foundation_init.scss';
import 'index.scss';
import 'config/globals';
import 'foundation-sites';

import RWR from 'react-webpack-rails';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'state/configure_store';
import routes from 'router/router';
import cable from 'config/action_cable';

RWR.run();

const store = configureStore();

$( () => {
  const root = document.querySelector('#root');

  const app = (
    <Provider store={ store } cable={ cable }>
      { routes }
    </Provider>
  );

  render(app, root);
});
