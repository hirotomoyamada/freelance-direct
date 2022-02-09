import { auth } from "../../../../../firebase";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as rootSlice from "../../../../../features/root/rootSlice";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const methods = useForm();

  useEffect(() => {
    auth
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          dispatch(
            rootSlice.handleAnnounce({
              type: "success",
              text: "認証されました",
            })
          );

          history.push("/signup");
        }
      })
      .catch((e) => {
        if (e.code) {
          dispatch(
            rootSlice.handleAnnounce({
              type: "error",
              text:
                e.code === "auth/account-exists-with-different-credential" &&
                "同じメールアドレスのアカウントがすでに存在しています",
            })
          );
        }
      });
  }, [dispatch, history]);

  const handleSignUp = async (data) => {
    const { email, password } = data;

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (e) => {
        await auth.currentUser
          .sendEmailVerification({
            url: `${process.env.REACT_APP_FREELANCE_DIRECT}/signup`,
          })
          .then(() => {
            history.push("/signup");

            methods.reset();
          })
          .catch((e) => {
            dispatch(
              rootSlice.handleAnnounce({
                type: "error",
                text: "再度時間をおいてください",
              })
            );
          });
      })
      .catch((e) => {
        dispatch(
          rootSlice.handleAnnounce({
            type: "error",
            text: "アカウントの作成に失敗しました",
          })
        );

        methods.reset({
          email: data.email,
          password: "",
          verifiedPassword: "",
        });
      });
  };

  return [methods, handleSignUp];
};
