import { functions } from "../../../firebase";

export const enableAgree = (state) => {
  const enableAgree = functions.httpsCallable("fd-enableAgree");
  enableAgree().catch((e) => {});
};
