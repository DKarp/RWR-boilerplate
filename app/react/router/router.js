import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from 'layouts/main_layout';
import ExampleContainer from 'components/example/example_container';
import NotFound from 'components/not_found/not_found';

const routes = (
  <Router history={ browserHistory }>
    <Route component={ MainLayout }>
      <Route path="/" components={ { yield: ExampleContainer } } />
    </Route>
    <Route path="*" component={ NotFound } />
  </Router>
);

export default routes;
