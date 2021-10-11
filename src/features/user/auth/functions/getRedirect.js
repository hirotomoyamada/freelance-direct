import { auth } from "../../../../firebase";

import * as rootSlice from "../../../root/rootSlice";

export const getRedirect = ({ dispatch }) => {
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
