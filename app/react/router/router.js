'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from 'layouts/main_layout';
import Example from 'components/example/example';
import NotFound from 'components/not_found/not_found';

$( () => {
  const root = document.querySelector('#root');

  const routes = (
    <Router history={ browserHistory }>
      <Route component={ MainLayout }>
        <Route path="/" name='example' components={ { yield: Example } } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  );

  render(routes, root);
});
