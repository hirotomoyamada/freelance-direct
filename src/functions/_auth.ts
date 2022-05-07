import React from "react";
import {
  auth,
  providerGithub,
  providerGoogle,
  providerTwitter,
} from "libs/firebase";
import {
  getRedirectResult,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { UseFormReturn } from "react-hook-form";
import { OwnDispatch } from "@reduxjs/toolkit";

import { createProfile } from "features/user/actions";

import * as rootSlice from "features/root/rootSlice";

import { Data } from "pages/auth/Auth";

type GetRedirect = {
  dispatch: OwnDispatch;
};

export const getRedirect = ({ dispatch }: GetRedirect): void => {
  void getRedirectResult(auth)
    .then(async (result) => {
      if (result) {
        if (result.user.isAnonymous && result.user.emailVerified) {
          dispatch(
            rootSlice.handleAnnounce({
              success: "認証されました",
            })
          );
        }

        if (!result.user.emailVerified) {
          const currentUser = auth.currentUser;

          if (currentUser) {
            await sendEmailVerification(currentUser, {
              url: `${process.env.REACT_APP_FREELANCE_DIRECT}/login`,
            }).catch(() => {
              dispatch(
                rootSlice.handleAnnounce({
                  error: "再度時間をおいてください",
                })
              );
            });
          }
        }
      }
    })
    .catch((e: FirebaseError): void => {
      if (e.code) {
        dispatch(
          rootSlice.handleAnnounce({
            error:
              e.code === "auth/account-exists-with-different-credential"
                ? "同じメールアドレスのアカウントがすでに存在しています"
                : undefined,
          })
        );
      }
    });
};

type HandleCreate = {
  dispatch: OwnDispatch;
  data: Data;
};

export const handleCreate = ({ dispatch, data }: HandleCreate): void => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const reader = new FileReader();

    reader.onload = async () => {
      if (reader.result) {
        const base64 = window.btoa(
          new Uint8Array(reader.result as ArrayBufferLike).reduce((p, c) => {
            return p + String.fromCharCode(c);
          }, "")
        );

        if (
          !data.name ||
          !data.age ||
          !data.sex ||
          !data.position ||
          !data.location ||
          !data.handles.length ||
          !data.agree ||
          !data.file[0] ||
          !data.file[0].type
        ) {
          dispatch(
            rootSlice.handleAnnounce({
              error: "登録に失敗しました ページを更新してください",
            })
          );

          return;
        }

        const profile = {
          name: data.name,
          age: Number(data.age),
          sex: data.sex,
          position: data.position,
          location: data.location,
          handles: data.handles
            .filter((array) => array.handle)
            .map((array) => array.handle),
          file: base64,
          type: data.file[0].type,
          agree: data.agree,
          provider: currentUser.providerData[0].providerId,

          pend: true,
        };

        await dispatch(createProfile(profile));
      }
    };

    reader.readAsArrayBuffer(data.file[0]);
  }
};

export const handleProvider = async (
  data: "google" | "twitter" | "github"
): Promise<void> => {
  const provider =
    data === "google"
      ? providerGoogle
      : data === "twitter"
      ? providerTwitter
      : data === "github" && providerGithub;

  if (provider) {
    await signInWithRedirect(auth, provider);
  }
};

type HandleResend = {
  dispatch: OwnDispatch;
};

export const handleResend = async ({
  dispatch,
}: HandleResend): Promise<void> => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    await sendEmailVerification(currentUser, {
      url: `${process.env.REACT_APP_FREELANCE_DIRECT}/login`,
    })
      .then(() => {
        dispatch(
          rootSlice.handleAnnounce({
            success: "登録しているメールアドレスに再送信しました",
          })
        );
      })
      .catch(() => {
        dispatch(
          rootSlice.handleAnnounce({
            error: "再度時間をおいてください",
          })
        );
      });
  }
};

type HandleReset = {
  dispatch: OwnDispatch;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data;
};

export const handleReset = async ({
  dispatch,
  reset,
  setReset,
  data,
}: HandleReset): Promise<void> => {
  await sendPasswordResetEmail(auth, data.reset)
    .then(() => {
      setReset(!reset);

      dispatch(
        rootSlice.handleAnnounce({
          success: "登録しているメールアドレスに再送信しました",
        })
      );
    })
    .catch(() => {
      dispatch(
        rootSlice.handleAnnounce({
          error: "メールアドレスが存在しません",
        })
      );
    });
};

type HandleSignIn = {
  dispatch: OwnDispatch;
  methods: UseFormReturn<Data>;
  data: Data;
};

export const handleSignIn = async ({
  dispatch,
  methods,
  data,
}: HandleSignIn): Promise<void> => {
  const { email, password } = data;

  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      methods.reset();
    })
    .catch(() => {
      dispatch(
        rootSlice.handleAnnounce({
          error: "メールアドレスかパスワードが間違っています",
        })
      );

      methods.reset({
        email: email,
        password: undefined,
        verifiedPassword: undefined,
      });
    });
};

type HandleSignUp = {
  dispatch: OwnDispatch;
  methods: UseFormReturn<Data>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data;
};

export const handleSignUp = async ({
  dispatch,
  methods,
  setCreate,
  setEmail,
  data,
}: HandleSignUp): Promise<void> => {
  const { email, password } = data;

  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setCreate(true);
      setEmail(true);
      methods.reset();
    })
    .catch(() => {
      dispatch(
        rootSlice.handleAnnounce({
          error: "アカウントの作成に失敗しました",
        })
      );

      methods.reset({
        email: email,
        password: undefined,
        verifiedPassword: undefined,
      });
    });
};
