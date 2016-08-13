import { loadState } from './local_storage';

const localState = loadState();
const remoteState = window.__INITIAL_STATE__;
const initialState = { ...localState, ...remoteState };

export default initialState;
