import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import screenSize from './reducers/screen_size';
import user from './reducers/user';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  screenSize
});

export default rootReducer;
