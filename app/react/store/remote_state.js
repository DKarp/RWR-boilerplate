export const getRemoteState = () => {
  const remoteState = window.__INITIAL_STATE__;

  return typeof remoteState === 'object' ? remoteState : {};
};
