import React, { useEffect, useState } from "react";
import styles from "./Entry.module.scss";

import { useDispatch } from "react-redux";
import * as userSlice from "features/user/userSlice";

import * as functions from "functions";

import { Body } from "./components/Body";
import { Social } from "./components/Social";
import { User } from "types/user";
import { Matter } from "types/post";

interface PropType {
  index: "matters";
  user: User;
  post: Matter;
  handleClose: () => void;
}

export const Entry: React.FC<PropType> = ({
  index,
  user,
  post,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string | undefined>();
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setValue(functions.formatting.entry({ post }));
  }, [index, post]);

  const handleCopy = (): void => {
    setCopy(true);
    setTimeout(() => setCopy(false), 3000);
  };

  const handleEntry = (): void => {
    const entries: string[] = user?.entries?.length ? user?.entries : [];

    if (entries.indexOf(post.objectID) < 0) {
      dispatch(userSlice.addEntry(post));
    }
  };

  return (
    <div className={styles.entry}>
      <div className={styles.entry_head}>
        <button onClick={handleClose} className={styles.entry_head_cancel}>
          もどる
        </button>
        <p className={styles.entry_head_ttl}>問い合わせをする内容</p>
      </div>

      <div className={styles.entry_inner}>
        <Body
          value={value}
          setValue={setValue}
          copy={copy}
          handleCopy={handleCopy}
          handleEntry={handleEntry}
          user={post.user}
        />

        <Social handleEntry={handleEntry} user={post.user} />
      </div>
    </div>
  );
};
