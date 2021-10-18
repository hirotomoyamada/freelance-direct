export const addHistory = (state, action) => {
  state.user.history = [
    action.payload.post.objectID,
    ...state.user.history.filter(
      (objectID) => objectID !== action.payload.post.objectID
    ),
  ];
};
