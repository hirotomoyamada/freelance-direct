import { auth } from "libs/firebase";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect } from "react";
import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as rootSlice from "../features/root/rootSlice";
import { FirebaseError } from "firebase/app";

export type Data = {
  email: string;
  password: string;
  verifiedPassword: string;
};

export const useSignUp = (): [
  methods: UseFormReturn<Data>,
  handleSignUp: SubmitHandler<Data>
] => {
  const dispatch = useDispatch();
  const history = useHistory();
  const methods = useForm<Data>();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user.isAnonymous) {
          dispatch(
            rootSlice.handleAnnounce({
              success: "認証されました",
            })
          );

          history.push("/signup");
        }
      })
      .catch((e: FirebaseError) => {
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
  }, [dispatch, history]);

  const handleSignUp: SubmitHandler<Data> = async (data): Promise<void> => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (): Promise<void> => {
        const currentUser = auth.currentUser;

        if (currentUser) {
          await sendEmailVerification(currentUser, {
            url: `${process.env.REACT_APP_FREELANCE_DIRECT}/signup`,
          })
            .then((): void => {
              history.push("/signup");

              methods.reset();
            })
            .catch((): void => {
              dispatch(
                rootSlice.handleAnnounce({
                  error: "再度時間をおいてください",
                })
              );
            });
        }
      })
      .catch((): void => {
        dispatch(
          rootSlice.handleAnnounce({
            error: "アカウントの作成に失敗しました",
          })
        );

        methods.reset({
          email: data.email,
          password: undefined,
          verifiedPassword: undefined,
        });
      });
  };

  return [methods, handleSignUp];
};
