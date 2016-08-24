jest.unmock('../local_storage');

import '../__mocks__/local_storage.mock';
import { storage, loadState, saveState } from '../local_storage';

describe('local storage', () => {
  it('should save state', () => {
    saveState({ key: 'value' });

    const savedState = JSON.parse(storage.getItem('state'));

    expect(savedState).toEqual({ key: 'value' });
  });

  it('should load state', () => {
    storage.setItem('state', JSON.stringify({ key: 'value' }));

    const loadedState = loadState();

    expect(loadedState).toEqual({ key: 'value' });
  });
});
