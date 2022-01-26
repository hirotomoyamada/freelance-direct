import { functions } from "../../../firebase";

export const enableAgree = (state) => {
  state.agree = "enable";

  const enableAgree = functions.httpsCallable("fd-enableAgree");
  enableAgree()
    .then(() => {
      window.location.reload();
    })
    .catch((e) => {});
};
