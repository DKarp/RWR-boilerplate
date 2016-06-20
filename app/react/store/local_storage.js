const storage = window.localStorage;

export const loadState = () => {
  try {
    const serializedState = storage.getItem('state');

    return serializedState && JSON.parse(serializedState);
  } catch (error) {
    // ignore localStorage errors...
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    storage.setItem('state', serializedState);
  } catch (error) {
    // ignore localStorage errors...
  }
};
