export const addFollow = (state, action) => {
  if (state.posts.home.companys.posts.length) {
    state.posts.home.companys.posts = [
      action.payload,
      ...state.posts.home.companys.posts,
    ];
  }

  state.posts.home.matters.control = true;
};

export const removeFollow = (state, action) => {
  state.posts.home.companys.posts = state.posts.home.companys.posts.filter(
    (post) => post.uid !== action.payload
  );

  state.posts.home.matters.posts = state.posts.home.matters.posts.filter(
    (post) => post.uid !== action.payload
  );
};
