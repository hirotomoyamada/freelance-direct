import styles from "./Main.module.scss";
import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "../../../../features/root/rootSlice";

import { Command } from "../../../../components/command/Command";

import { Header } from "./components/header/Header";
import { Txt } from "./components/Txt";
import { Feilds } from "./components/Feilds";
import { Period } from "./components/Period";
import { Costs } from "./components/Costs";
import { Times } from "./components/Times";
import { Interviews } from "./components/Interviews";
import { Entry } from "./components/entry/Entry";

export const Main = ({ post, user, entry, handleEntry }) => {
  const load = useSelector(rootSlice.load).root;

  return !load && post.objectID ? (
    <div className={styles.main}>
      <div className={styles.main_inner}>
        <Command post={post} user={user} />

        <Header post={post} user={user} />

        {(post?.handles?.[0] || post?.tools?.[0]) && (
          <div className={styles.main_col}>
            <span className={styles.main_tag}>開発環境</span>
            <Feilds objects={post?.handles} acnt />
            <Feilds objects={post?.tools} />
          </div>
        )}

        <Txt tag="詳細" txt={post?.body} txtarea />

        <Feilds tag="必須" objects={post?.requires} />

        <Feilds tag="尚可" objects={post?.prefers} />

        <Period period={post?.period} />

        <Txt
          tag="場所"
          txt={{ area: post?.location?.area, place: post?.location?.place }}
          location
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
      <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
    </div>
  );
};
