import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions, auth } from "libs/firebase";
import { updateProfile, User as CurrentUser } from "firebase/auth";
import { httpsCallable, HttpsCallable } from "firebase/functions";

import { Company } from "types/post";
import { User, Data } from "types/user";

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
  async (org: CurrentUser): Promise<Login["data"]> => {
    const login: HttpsCallable<Login["req"], Login["data"]> = httpsCallable(
      functions,
      "fd-login"
    );

    const { data } = await login({
      emailVerified: org.emailVerified,
      providerData: org.providerData,
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
    fetch: boolean;
  };

  data: {
    displayName: string;
  };
}

export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (org: CreateProfile["arg"]): Promise<void> => {
    const createProfile: HttpsCallable<
      CreateProfile["arg"],
      CreateProfile["data"]
    > = httpsCallable(functions, "fd-createProfile");

    await createProfile(org).then(async ({ data }) => {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: data.displayName,
        });
      }
    });
  }
);

export interface UploadResume {
  org: {
    type: string;
    file: string;
    fetch?: true;
  };

  data: string;
}

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (org: UploadResume["org"]): Promise<UploadResume["data"]> => {
    const uploadResume: HttpsCallable<
      UploadResume["org"],
      UploadResume["data"]
    > = httpsCallable(functions, "fd-uploadResume");

    const { data } = await uploadResume({ type: org.type, file: org.file });

    return data;
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (org: string): Promise<Company> => {
    const fetchUser: HttpsCallable<string, Company> = httpsCallable(
      functions,
      "fd-fetchUser"
    );

    const { data } = await fetchUser(org);

    return data;
  }
);
