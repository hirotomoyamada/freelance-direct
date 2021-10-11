export const addFollow = (state, action) => {
  if (state.home.companys.posts.length) {
    state.home.companys.posts = [action.payload, ...state.home.companys.posts];
  }

  state.home.matters.control = true;
};

export const removeFollow = (state, action) => {
  state.home.companys.posts = state.home.companys.posts.filter(
    (post) => post.uid !== action.payload
  );

  state.home.matters.posts = state.home.matters.posts.filter(
    (post) => post.uid !== action.payload
  );
};
