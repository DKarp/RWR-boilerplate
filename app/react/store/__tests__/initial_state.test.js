jest.unmock('../initial_state');

import initialState from '../initial_state';
import { loadState } from '../local_storage';
import { getRemoteState } from '../remote_state';

describe('initial state', () => {
  it('should be object', () => {
    expect(initialState).toEqual(jasmine.any(Object));
  });

  it('should load remote state', () => {
    expect(getRemoteState).toBeCalled();
    expect(getRemoteState.mock.calls.length).toBe(1);
  });

  it('should load cached state', () => {
    expect(loadState).toBeCalled();
    expect(loadState.mock.calls.length).toBe(1);
  });
});
