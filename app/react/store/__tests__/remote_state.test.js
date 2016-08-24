jest.unmock('../remote_state');

import { getRemoteState } from '../remote_state';

describe('remote state', () => {
  it('should be object', () => {
    window.__INITIAL_STATE__ = undefined;
    expect(getRemoteState()).toEqual({});

    window.__INITIAL_STATE__ = 'string';
    expect(getRemoteState()).toEqual({});

    window.__INITIAL_STATE__ = () => {};
    expect(getRemoteState()).toEqual({});

    window.__INITIAL_STATE__ = { some: 'state' };
    expect(getRemoteState()).toEqual({ some: 'state' });
  });
});
