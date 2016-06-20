import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { replace } from 'react-router-redux';
import { UserAuthWrapper as authWrapper } from 'redux-auth-wrapper';

import Main from 'layouts/main';
import HomePage from 'components/views/home_page/home_page';
import NotFound from 'components/not_found/not_found';

const userIsAuthenticated = authWrapper({
  authSelector: (state) => state.user,
  predicate: (user) => user.id,
  failureRedirectPath: '/auth/login',
  redirectAction: replace
});

const userIsNotAuthenticated = authWrapper({
  authSelector: (state) => state.user,
  predicate: (user) => !user.id,
  failureRedirectPath: '/',
  redirectAction: replace,
  allowRedirectBack: false
});

const routes = (
  <Route path="/" component={ Main }>
    <IndexRoute components={ { yield: HomePage } } />
    <Route path="*" components={ { yield: NotFound } } />
  </Route>
);

const Routes = (props) => (
  <Router history={ props.history } routes={ routes } />
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
