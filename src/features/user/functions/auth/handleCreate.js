import { auth } from "../../../../firebase";
import { createProfile } from "../../actions/createProfile";
import * as rootSlice from "../../../root/rootSlice";

export const handleCreate = async ({ dispatch, data }) => {
  const object = {
    name: data.name,
    age: data.age,
    sex: data.sex,
    position: data.position,
    location: data.location,
    handles: data.handles
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    agree: data.agree,
    provider: auth.currentUser.providerData[0].providerId,
  };
  try {
    dispatch(createProfile(object));
  } catch (e) {
    dispatch(
      rootSlice.handleAnnounce({
        type: "error",
        text: "更新に失敗しました",
      })
    );
  }
};
