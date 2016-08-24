import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import screenSize from './screen_size';

const rootReducer = combineReducers({
  routing: routerReducer,
  screenSize
});

export default rootReducer;
