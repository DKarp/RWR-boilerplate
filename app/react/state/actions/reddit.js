const receivePosts = function (json) {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.data.children.map(child => child.data)
  };
};

export function fetchPosts() {
  return function (dispatch) {
    return fetch('http://www.reddit.com/r/frontend.json')
      .then( response => response.json() )
      .then( json => dispatch(receivePosts(json)) )
      .catch( error => console.error(error) );
  };
}
