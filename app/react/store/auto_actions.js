import { initialScreenSize, screenResize } from 'store/actions/screen_size';

const initScreenSizeActions = (store) => {
  store.dispatch(initialScreenSize());

  $(window).on('changed.zf.mediaquery', () => {
    store.dispatch(screenResize());
  });
};

const initAutoActions = (store) => {
  initScreenSizeActions(store);
};

export default initAutoActions;
