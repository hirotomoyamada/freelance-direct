import { auth } from "../../firebase";

import { createProfile } from "../../features/user/actions/createProfile";

import * as rootSlice from "../../features/root/rootSlice";

export const handleCreate = async ({ dispatch, data }) => {
  const reader = new FileReader();

  reader.onload = () => {
    const base64 = window.btoa(
      new Uint8Array(reader.result).reduce((p, c) => {
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
          type: "error",
          text: "登録に失敗しました ページを更新してください",
        })
      );

      return;
    }

    const object = {
      name: data.name,
      age: data.age,
      sex: data.sex,
      position: data.position,
      location: data.location,
      handles: data.handles
        .filter((object) => object[Object.keys(object)])
        .map((object) => object[Object.keys(object)]),
      file: base64,
      type: data.file[0].type,
      agree: data.agree,
      provider: auth.currentUser.providerData[0].providerId,

      fetch: true,
    };

    dispatch(createProfile(object));
  };

  reader.readAsArrayBuffer(data.file[0]);
};
