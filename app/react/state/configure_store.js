import { createStore } from 'redux';
import rootReducer from './root_reducer';

const configureStore = function (initialState) {
  const store = createStore(rootReducer, initialState);

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
