export const addHistory = (state, action) => {
  state.user.histories = [
    action.payload.post.objectID,
    ...state.user.histories.filter(
      (objectID) => objectID !== action.payload.post.objectID
    ),
  ];
};
