import React from "react";
import styles from "../../HowTo.module.scss";

import { Tag } from "../tag/Tag";

export const Notice: React.FC = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>通知</h1>
      <p className={styles.howto_desc}>最新の案件がメールで通知されます</p>
      <div className={styles.howto_container}>
        <Tag tag="通知を受け取る" />
        <p>
          登録されている
          <span className={styles.howto_container_tag}>メールアドレス</span>
          へ、最新の案件がメールで通知されます。
          <br />
          <br />
          メールの内容には
          <span className={styles.howto_container_tag}>URL</span>
          などが記載されているので、すぐに案件情報を見る・アクセスすることができます。
        </p>
      </div>
    </div>
  );
};
