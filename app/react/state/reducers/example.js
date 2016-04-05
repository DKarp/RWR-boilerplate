const initialState = {
  clicks: 10
};

const example = function (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_CLICKS':
      const newState = { ...state };

      newState.clicks++;

      return newState;

    default:
      return state;
  }
};

export default example;
