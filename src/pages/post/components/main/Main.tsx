import React from "react";
import styles from "./Main.module.scss";
import { Grid } from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Command } from "components/command/Command";

import { Header } from "./components/header/Header";
import { Txt } from "./components/Txt";
import { Feilds } from "./components/Feilds";
import { Period } from "./components/Period";
import { Costs } from "./components/Costs";
import { Times } from "./components/Times";
import { Interviews } from "./components/Interviews";
import { Entry } from "./components/entry/Entry";

import { Matter } from "types/post";
import { User } from "types/user";

interface PropType {
  post: Matter;
  user: User;
  entry: boolean;
  handleEntry: () => void;
}

export const Main: React.FC<PropType> = ({
  post,
  user,
  entry,
  handleEntry,
}) => {
  const load = useSelector(rootSlice.load).root;

  return !load && post.objectID ? (
    <div className={styles.main}>
      <div className={styles.main_inner}>
        <Command post={post} user={user} />

        <Header post={post} />

        {(post?.handles?.[0] || post?.tools?.[0]) && (
          <div className={styles.main_col}>
            <span className={styles.main_tag}>開発環境</span>
            <Feilds array={post?.handles} acnt />
            <Feilds array={post?.tools} />
          </div>
        )}

        <Txt tag="詳細" txt={post?.body} txtarea />

        <Feilds tag="必須" array={post?.requires} />

        <Feilds tag="尚可" array={post?.prefers} />

        <Period period={post?.period} />

        <Txt
          tag="場所"
          txt={{ area: post?.location?.area, place: post?.location?.place }}
        />

        <Txt tag="リモート" txt={post?.remote} />

        <Times times={post?.times} />

        <Txt tag="精算" txt={post?.adjustment} />

        <Costs costs={post?.costs} />

        <Txt tag="商流" txt={post?.distribution} />

        <Txt tag="支払いサイト" txt={post?.span} end="日" />

        <Interviews
          interviews={post?.interviews}
          none={post?.note ? false : true}
        />

        <Txt tag="備考" txt={post?.note} none txtarea />

        <Entry
          post={post}
          user={user}
          entry={entry}
          handleEntry={handleEntry}
        />
      </div>
    </div>
  ) : (
    <div className={styles.main_load}>
      <Grid color="#1d9bf0" height={56} width={56} />
    </div>
  );
};
