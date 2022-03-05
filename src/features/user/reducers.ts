import { PayloadAction } from "@reduxjs/toolkit";
import { functions, auth } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { updateProfile, updateEmail } from "firebase/auth";

import { initialState, State } from "features/user/initialState";
import { User } from "types/user";
import { Matter, Company } from "types/post";

import { Login } from "features/user/actions";
import { Profile, Provider } from "features/user/userSlice";
import { FetchPost } from "features/post/actions";

export const login = (
  state: State,
  action: PayloadAction<Login["data"]>
): void => {
  if (action.payload && action.payload.user) {
    (state.user as User).uid = action.payload.user.uid;
    (state.user as User).icon = action.payload.user.icon;
    (state.user as User).cover = action.payload.user.cover;
    (state.user as User).provider = action.payload.user.provider;
    (state.user as User).profile = action.payload.user.profile;
    (state.user as User).agree = action.payload.user.agree;
    (state.user as User).createAt = action.payload.user.createAt;
    (state.user as User).updateAt = action.payload.user.updateAt;
    (state.user as User).likes = action.payload.user.likes;
    (state.user as User).entries = action.payload.user.entries;
    (state.user as User).requests = action.payload.user.requests;
    (state.user as User).histories = action.payload.user.histories;
    (state.user as User).resume = action.payload.user.resume;
    (state.user as User).follows = action.payload.user.follows;
    (state.user as User).home = action.payload.user.home;
  }
};

export const logout = (): State => {
  return initialState;
};

export const addProvider = (
  state: State,
  action: PayloadAction<Provider>
): void => {
  (state.user as User).provider = [
    action.payload.provider,
    ...(state.user as User).provider,
  ];

  if (action.payload.email) {
    (state.user as User).profile.email = action.payload.email;
  }

  const addProvider: HttpsCallable<
    { provider: string; email?: string },
    unknown
  > = httpsCallable(functions, "fd-addProvider");

  void addProvider({
    provider: action.payload.provider,
    email: action.payload.email,
  });
};

export const changeEmail = (
  state: State,
  action: PayloadAction<string>
): void => {
  (state.user as User).profile.email = action.payload;

  const changeEmail: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-changeEmail"
  );

  void changeEmail(action.payload).then(() => {
    if (auth.currentUser) {
      void updateEmail(auth.currentUser, action.payload);
    }
  });
};

export const changeState = (
  state: State,
  action: PayloadAction<string>
): void => {
  (state.user as User).profile.state = action.payload;

  const changeState: HttpsCallable = httpsCallable(functions, "fd-changeState");

  void changeState(action.payload);
};

export const editProfile = (
  state: State,
  action: PayloadAction<Profile>
): void => {
  (state.user as User).icon = action.payload.icon;
  (state.user as User).cover = action.payload.cover;

  (state.user as User).profile.nickName = action.payload.nickName;
  (state.user as User).profile.body = action.payload.body;
  (state.user as User).profile.age = action.payload.age;
  (state.user as User).profile.sex = action.payload.sex;
  (state.user as User).profile.position = action.payload.position;
  (state.user as User).profile.location = action.payload.location;
  (state.user as User).profile.period = action.payload.period;

  (state.user as User).profile.handles = action.payload.handles;
  (state.user as User).profile.tools = action.payload.tools;
  (state.user as User).profile.skills = action.payload.skills;
  (state.user as User).profile.urls = action.payload.urls;

  (state.user as User).profile.resident = action.payload.resident;
  (state.user as User).profile.working = action.payload.working;
  (state.user as User).profile.clothes = action.payload.clothes;
  (state.user as User).profile.costs = action.payload.costs;

  const editProfile: HttpsCallable<Profile, unknown> = httpsCallable(
    functions,
    "fd-editProfile"
  );

  void editProfile(action.payload);

  if (auth.currentUser) {
    void updateProfile(auth.currentUser, {
      displayName: action.payload.nickName,
    });
  }
};

export const uploadResume = (
  state: State,
  action: PayloadAction<string>
): void => {
  (state.user as User).resume.url = action.payload;
};

export const deleteResume = (state: State): void => {
  (state.user as User).resume.key = null;
  (state.user as User).resume.url = null;

  const deleteResume: HttpsCallable<unknown, unknown> = httpsCallable(
    functions,
    "fd-deleteResume"
  );

  void deleteResume();
};

export const addLike = (state: State, action: PayloadAction<Matter>): void => {
  (state.user as User).likes = [
    action.payload.objectID,
    ...(state.user as User).likes,
  ];

  const addLike: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-addLike"
  );

  void addLike(action.payload.objectID);
};

export const removeLike = (
  state: State,
  action: PayloadAction<Matter>
): void => {
  (state.user as User).likes = (state.user as User).likes.filter(
    (objectID) => objectID !== action.payload.objectID
  );

  const removeLike: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-removeLike"
  );

  void removeLike(action.payload.objectID);
};

export const addEntry = (state: State, action: PayloadAction<Matter>): void => {
  (state.user as User).entries = [
    action.payload.objectID,
    ...(state.user as User).entries,
  ];

  const addEntry: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-addEntry"
  );

  void addEntry(action.payload.objectID);
};

export const addFollow = (
  state: State,
  action: PayloadAction<Company>
): void => {
  (state.user as User).follows = [
    action.payload.uid,
    ...(state.user as User).follows,
  ];

  if ((state.user as User).home.length < 15) {
    (state.user as User).home = [
      action.payload.uid,
      ...(state.user as User).home,
    ];
  }

  const addFollow: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-addFollow"
  );

  void addFollow(action.payload.uid);
};

export const removeFollow = (
  state: State,
  action: PayloadAction<Company>
): void => {
  (state.user as User).follows = (state.user as User).follows.filter(
    (uid) => uid !== action.payload.uid
  );

  if ((state.user as User).home.length <= 15) {
    (state.user as User).home = (state.user as User).home.filter(
      (uid) => uid !== action.payload.uid
    );
  }

  const removeFollow: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-removeFollow"
  );

  void removeFollow(action.payload.uid);
};

export const enableRequest = (
  state: State,
  action: PayloadAction<Company>
): void => {
  Object.keys((state.user as User).requests).forEach((type) => {
    if (type === "enable") {
      (state.user as User).requests[type] = [
        action.payload.uid,
        ...(state.user as User).requests[type],
      ];
    }

    if (type === "hold" || type === "disable") {
      (state.user as User).requests[type] = (state.user as User).requests[
        type
      ].filter((uid) => uid !== action.payload.uid);
    }
  });

  const enableRequest: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-enableRequest"
  );

  void enableRequest(action.payload.uid);
};

export const disableRequest = (
  state: State,
  action: PayloadAction<Company>
): void => {
  Object.keys((state.user as User).requests).forEach((type) => {
    if (type === "disable") {
      (state.user as User).requests[type] = [
        action.payload.uid,
        ...(state.user as User).requests[type],
      ];
    }

    if (type === "hold" || type === "enable") {
      (state.user as User).requests[type] = (state.user as User).requests[
        type
      ].filter((uid) => uid !== action.payload.uid);
    }
  });

  const disableRequest: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "fd-disableRequest"
  );

  void disableRequest(action.payload.uid);
};

export const updateHome = (
  state: State,
  action: PayloadAction<string[]>
): void => {
  (state.user as User).home = action.payload;

  const updateHome: HttpsCallable<string[], unknown> = httpsCallable(
    functions,
    "fd-updateHome"
  );

  void updateHome(action.payload);
};

export const addHistory = (
  state: State,
  action: PayloadAction<FetchPost["data"]>
): void => {
  (state.user as User).histories = [
    action.payload.post.objectID,
    ...(state.user as User).histories.filter(
      (objectID) => objectID !== action.payload.post.objectID
    ),
  ];
};

export const fetchUser = (
  state: State,
  action: PayloadAction<Company>
): void => {
  state.selectUser = action.payload;
};
