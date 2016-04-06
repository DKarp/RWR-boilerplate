const initialState = 10;

const clicks = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CLICKS':
      return state + 1;

    default:
      return state;
  }
};

export default clicks;
