import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root_reducer';

const logger = createLogger();
const enhancer = applyMiddleware(thunk, logger);

const configureStore = function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./root_reducer', () => {
      const nextReducer = require('./root_reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
