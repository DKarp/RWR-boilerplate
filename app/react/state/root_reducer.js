import { combineReducers } from 'redux';
import clicks from './reducers/clicks';

const rootReducer = combineReducers({
  clicks
});

export default rootReducer;
