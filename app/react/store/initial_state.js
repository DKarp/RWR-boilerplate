import { loadState } from './local_storage';
import { getRemoteState } from './remote_state';

const localState = loadState();
const remoteState = getRemoteState();
const initialState = { ...localState, ...remoteState };

export default initialState;
