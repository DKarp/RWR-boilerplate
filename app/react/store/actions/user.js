import { fetchRequest } from 'helpers/fetch';
import { USERS, SESSION } from 'config/constants.endpoints';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from 'config/constants.actions';
import { replace } from 'react-router-redux';

const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = fetchRequest('post', SESSION, (dispatch, data, redirectTo) => {
  dispatch(userLoggedIn(data));
  dispatch(replace(redirectTo));
});

export const logout = fetchRequest('delete', SESSION, (dispatch, data, redirectTo) => {
  dispatch(userLoggedOut());
  dispatch(replace(redirectTo));
});

export const register = fetchRequest('post', USERS, (dispatch, data, redirectTo) => {
  dispatch(replace(redirectTo));
});
