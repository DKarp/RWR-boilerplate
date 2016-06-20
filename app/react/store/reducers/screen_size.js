import { INITIAL_SCREEN_SIZE, SCREEN_RESIZE } from 'config/constants.actions';

const initialState = null;

const screenSize = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_SCREEN_SIZE:
    case SCREEN_RESIZE:
      return Foundation.MediaQuery.current;

    default:
      return state;
  }
};

export default screenSize;
