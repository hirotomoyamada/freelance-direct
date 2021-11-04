import { auth } from "../../../../firebase";
import { createProfile } from "../../actions/createProfile";

export const handleCreate = async ({ dispatch, data }) => {
  const reader = new FileReader();

  reader.onload = () => {
    const base64 = window.btoa(
      new Uint8Array(reader.result).reduce((p, c) => {
        return p + String.fromCharCode(c);
      }, "")
    );

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
