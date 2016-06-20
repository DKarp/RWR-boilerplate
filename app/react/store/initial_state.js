import { loadState } from './local_storage';
import { assign } from 'lodash';

const localState = loadState();
const remoteState = window.__INITIAL_STATE__;
const initialState = assign({}, localState, remoteState);

export default initialState;
