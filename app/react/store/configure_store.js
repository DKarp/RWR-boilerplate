import { createStore } from 'redux';
import rootReducer from './root_reducer';
import initialState from './initial_state';
import enhancer from './configure_enhancer';
import { saveState } from './local_storage';
import initAutoActions from './auto_actions';
import { throttle } from 'lodash';

const configureStore = () => {
  const store = createStore(rootReducer, initialState, enhancer);

  store.subscribe(throttle( () => {
    const state = store.getState();

    saveState({
      // user: state.user
    });
  }, 1000));

  initAutoActions(store);

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
