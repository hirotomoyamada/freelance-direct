import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions, auth } from "libs/firebase";
import { updateProfile, User as CurrentUser } from "firebase/auth";
import { httpsCallable, HttpsCallable } from "firebase/functions";

import { Company } from "types/post";
import { User, Data } from "types/user";
import { Profile } from "features/user/userSlice";

export interface Login {
  req: {
    emailVerified: CurrentUser["emailVerified"];
    providerData: CurrentUser["providerData"];
  };

  data: {
    user: User;

    data: Data;

    demo: boolean;
  };
}

export const login = createAsyncThunk(
  "user/login",
  async (arg: CurrentUser): Promise<Login["data"]> => {
    const login: HttpsCallable<Login["req"], Login["data"]> = httpsCallable(
      functions,
      "fd-login"
    );

    const { data } = await login({
      emailVerified: arg.emailVerified,
      providerData: arg.providerData,
    });

    return data;
  }
);

export interface CreateProfile {
  arg: {
    name: string;
    age: number;
    sex: string;
    position: string;
    location: string;
    handles: string[];
    file: string;
    type: string;
    agree: string;
    provider: string;
    pend: boolean;
  };

  data: {
    displayName: string;
  };
}

export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (arg: CreateProfile["arg"]): Promise<void> => {
    const createProfile: HttpsCallable<
      CreateProfile["arg"],
      CreateProfile["data"]
    > = httpsCallable(functions, "fd-createProfile");

    await createProfile(arg).then(async ({ data }) => {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: data.displayName,
        });
      }
    });
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (arg: Profile): Promise<Profile> => {
    const editProfile: HttpsCallable<Profile, unknown> = httpsCallable(
      functions,
      "fd-editProfile"
    );

    await editProfile(arg);

    return arg;
  }
);

export interface UploadResume {
  arg: {
    type: string;
    file: string;
  };

  data: string;
}

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (arg: UploadResume["arg"]): Promise<UploadResume["data"]> => {
    const uploadResume: HttpsCallable<
      UploadResume["arg"],
      UploadResume["data"]
    > = httpsCallable(functions, "fd-uploadResume");

    const { data } = await uploadResume({ type: arg.type, file: arg.file });

    return data;
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (arg: string): Promise<Company> => {
    const fetchUser: HttpsCallable<string, Company> = httpsCallable(
      functions,
      "fd-fetchUser"
    );

    const { data } = await fetchUser(arg);

    return data;
  }
);
