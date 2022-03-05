import React, { useEffect, useState } from "react";
import styles from "./Load.module.scss";

import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";

export const Root: React.FC = () => {
  const load = useSelector(rootSlice.load).root;

  const [none, setNone] = useState(true);

  useEffect(() => {
    !none && setNone(load);
  }, [load, none]);

  useEffect(() => {
    !load && setTimeout(() => setNone(false), 700);
  }, [load]);

  return (
    <div
      className={`${styles.load} 
      ${!load && styles.load_opacity} 
      ${!none && styles.load_none}
      `}
    >
      <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
    </div>
  );
};

export const Fetch: React.FC = () => {
  const load = useSelector(rootSlice.load).fetch;
  const user = useSelector(userSlice.user).uid;

  const [none, setNone] = useState(true);

  useEffect(() => {
    !none && setNone(load);
  }, [load, none]);

  useEffect(() => {
    !load && setTimeout(() => setNone(false), 700);
  }, [load]);

  return (
    <div
      className={`${styles.load} ${styles.load_fetch} ${
        !user && styles.load_fetch_auth
      }
      ${!load && styles.load_opacity} 
      ${!none && styles.load_none}
      `}
    >
      <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
    </div>
  );
};
