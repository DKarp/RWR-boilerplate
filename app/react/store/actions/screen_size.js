import { INITIAL_SCREEN_SIZE, SCREEN_RESIZE } from 'config/constants.actions';

export const initialScreenSize = () => ({
  type: INITIAL_SCREEN_SIZE
});

export const screenResize = () => ({
  type: SCREEN_RESIZE
});
