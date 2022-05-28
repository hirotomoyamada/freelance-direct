import React, { useEffect, useState } from "react";
import styles from "./Load.module.scss";

import { Grid } from "react-loader-spinner";

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
      <Grid color="#1d9bf0" height={56} width={56} />
    </div>
  );
};

export const Pending: React.FC = () => {
  const load = useSelector(rootSlice.load).pend;
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
      className={`${styles.load} ${styles.load_pend} ${
        !user && styles.load_pend_auth
      }
      ${!load && styles.load_opacity} 
      ${!none && styles.load_none}
      `}
    >
      <Grid color="#1d9bf0" height={56} width={56} />
    </div>
  );
};
