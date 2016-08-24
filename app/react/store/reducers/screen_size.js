import { handleActions } from 'redux-actions';
import { initialScreenSize, screenResize } from 'store/actions/screen_size';

const initialState = null;

const reducer = handleActions({
  [initialScreenSize]: (state, action) => Foundation.MediaQuery.current,
  [screenResize]: (state, action) => Foundation.MediaQuery.current
}, initialState);

export default reducer;
