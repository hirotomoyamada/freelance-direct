import { functions, auth } from "../../../firebase";

export const editProfile = (state, action) => {
  state.user.icon = action.payload.icon;
  state.user.cover = action.payload.cover;

  state.user.profile.name = action.payload.name;
  state.user.profile.body = action.payload.body;
  state.user.profile.age = action.payload.age;
  state.user.profile.sex = action.payload.sex;
  state.user.profile.position = action.payload.position;
  state.user.profile.location = action.payload.location;
  state.user.profile.period = action.payload.period;

  state.user.profile.handles = action.payload.handles;
  state.user.profile.tools = action.payload.tools;
  state.user.profile.skills = action.payload.skills;
  state.user.profile.urls = action.payload.urls;

  state.user.profile.resident = action.payload.resident;
  state.user.profile.working = action.payload.working;
  state.user.profile.clothes = action.payload.clothes;
  state.user.profile.costs = action.payload.costs;

  const editProfile = functions.httpsCallable("fd-editProfile");
  editProfile(action.payload).catch((e) => {});

  auth.currentUser
    .updateProfile({
      displayName: action.payload.name,
    })
    .catch((e) => {});
};
