import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as rootSlice from "../../../features/root/rootSlice";

export const useEntry = (user, objectID) => {
  const dispatch = useDispatch();

  const [entry, setEntry] = useState(false);

  const handleEntry = () => {
    dispatch(rootSlice.handleModal({ type: "entry" }));
  };

  useEffect(() => {
    setEntry(user.entries?.indexOf(objectID) >= 0 ? true : false);
  }, [objectID, user.entries]);

  return [entry, handleEntry];
};
