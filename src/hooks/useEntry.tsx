import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { User } from "types/user";

export const useEntry = (
  user: User,
  objectID?: string
): [entry: boolean, handleEntry: () => void] => {
  const dispatch = useDispatch();

  const [entry, setEntry] = useState(false);

  const handleEntry = () => {
    dispatch(rootSlice.handleModal({ type: "entry" }));
  };

  useEffect(() => {
    if (!objectID) return;

    const entries: string[] = user?.entries ? user.entries : [];

    setEntry(entries.indexOf(objectID) >= 0 ? true : false);
  }, [objectID, user.entries]);

  return [entry, handleEntry];
};
