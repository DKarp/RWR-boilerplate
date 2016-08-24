jest.unmock('../local_storage');

import { loadState, saveState } from '../local_storage';

describe('local storage', () => {
  it('loadState method should return `{}` if `window.localStorage` is not available', () => {
    const loadedState = loadState();

    expect(loadedState).toEqual({});
  });

  it('saveState method should not throw if `window.localStorage` is not available', () => {
    const save = () => saveState({ key: 'value' });

    expect(save).not.toThrow();
  });
});
