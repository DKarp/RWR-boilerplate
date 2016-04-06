import { combineReducers } from 'redux';
import clicks from './reducers/clicks';
import reddit from './reducers/reddit';

const rootReducer = combineReducers({
  clicks,
  reddit
});

export default rootReducer;
