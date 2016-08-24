import { createActions } from 'redux-actions';

const actions = createActions('INITIAL_SCREEN_SIZE', 'SCREEN_RESIZE');

export const { initialScreenSize, screenResize } = actions;
