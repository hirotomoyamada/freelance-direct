import { auth } from "../../../../firebase";
import * as rootSlice from "../../../root/rootSlice";

export const getRedirect = ({ dispatch }) => {
  auth
    .getRedirectResult()
    .then((result) => {
      if (result.credential && result.user.emailVerified) {
        dispatch(
          rootSlice.handleAnnounce({
            type: "success",
            text: "認証されました",
          })
        );
      }

      if (!result.user.emailVerified) {
        auth.currentUser
          .sendEmailVerification({
<<<<<<< HEAD:src/features/user/auth/functions/getRedirect.js
            url: "https://freelance-direct/login",
          })
          .catch((e) => {
            dispatch(
              userSlice.handleAnnounce({
=======
            url: "https://ses-hub.app/login",
          })
          .catch((e) => {
            dispatch(
              rootSlice.handleAnnounce({
>>>>>>> 475322e74532d2b5ac22ecdc1f52b1a264662dd4:src/features/user/functions/auth/getRedirect.js
                type: "error",
                text: "再度時間をおいてください",
              })
            );
          });
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
};
