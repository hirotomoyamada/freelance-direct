import React from "react";
import styles from "../../HowTo.module.scss";

import { Tag } from "../tag/Tag";

export const Likes: React.FC = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>いいね</h1>

      <p className={styles.howto_desc}>
        あなたが気になる案件にいいねができます
      </p>

      <div className={styles.howto_container}>
        <Tag tag="いいねする" />

        <p>
          案件を<span className={styles.howto_container_tag}>いいね</span>
          リストに格納しておくことができます。再度案件を見たいときなど、幅広い用途でお使いいただけます。
        </p>
      </div>

      <div className={styles.howto_container}>
        <Tag tag="いいねを解除する" />

        <p>
          <span className={styles.howto_container_tag}>いいね</span>
          している投稿は、再度アイコンをタップすることで自動的に解除されます。
        </p>
      </div>
    </div>
  );
};
