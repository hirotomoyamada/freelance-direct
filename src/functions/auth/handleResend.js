import { auth } from "../../firebase";

import * as rootSlice from "../../features/root/rootSlice";

export const handleResend = async ({ dispatch }) => {
  await auth.currentUser
    .sendEmailVerification({
      url: `${process.env.REACT_APP_FREELANCE_DIRECT}/login`,
    })
    .then(() => {
      dispatch(
        rootSlice.handleAnnounce({
          type: "success",
          text: "登録しているメールアドレスに再送信しました",
        })
      );
    })
    .catch((e) => {
      dispatch(
        rootSlice.handleAnnounce({
          type: "error",
          text: "再度時間をおいてください",
        })
      );
    });
};