import React from "react";
import styles from "../../HowTo.module.scss";

import { Tag } from "../tag/Tag";

export const Requests: React.FC = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>リクエスト</h1>

      <p className={styles.howto_desc}>営業からのリクエストを管理します</p>

      <div className={styles.howto_container}>
        <Tag tag="リクエスト" />

        <p>
          あなたの
          <span className={styles.howto_container_tag}>プロフィール</span>
          の一部は営業には公開されていません。
          <br />
          <br />
          営業があなたの
          <span className={styles.howto_container_tag}>プロフィール</span>
          をすべて見る場合、リクエストをする必要があります。
          <br />
          <br />
          リクエストがあると、未承認にリクエストをした営業が表示されます。
          <br />
          営業の
          <span className={styles.howto_container_tag}>プロフィール</span>
          などを見たりして、承認・ブロックを行ってください。
        </p>
      </div>

      <div className={styles.howto_container}>
        <Tag tag="未承認" />

        <p>
          営業がリクエストをしたら未承認の状態になり、あなたの未承認の一覧に表示されます。
          <br />
          <br />
          あなたが<span className={styles.howto_container_tag}>承認</span>
          <span className={styles.howto_container_tag}>ブロック</span>
          をしない限り、次のアクションはおきません。
        </p>
      </div>

      <div className={styles.howto_container}>
        <Tag tag="承認する" />

        <p>
          あなたが承認すると、営業にリクエストを承認した通知が送られます。
          <br />
          <br />
          承認した営業には、あなたの
          <span className={styles.howto_container_tag}>プロフィール</span>
          のすべての情報が開示されます。
          <br />
          <br />
          営業から、きっと良い案件が飛び込んでくるかもしれません。
        </p>
      </div>

      <div className={styles.howto_container}>
        <Tag tag="ブロックする" />

        <p>
          あなたがブロックすると、
          <span className={styles.howto_container_tag}>ブロック</span>
          一覧へ移動します。ブロックした営業を再度承認することも可能です。
          <br />
          <br />
          <span className={styles.howto_container_acnt}>
            ※ ブロックをしても営業には通知がいきません。
          </span>
        </p>
      </div>
    </div>
  );
};
