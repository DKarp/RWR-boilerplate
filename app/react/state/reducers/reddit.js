const initialState = {
  posts: []
};

const reddit = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return {
        posts: [ ...action.posts ]
      };

    default:
      return state;
  }
};

export default reddit;
