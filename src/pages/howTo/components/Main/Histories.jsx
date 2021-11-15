import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const Histories = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>閲覧履歴</h1>
      <p className={styles.howto_desc}>
        あなたが閲覧した過去の案件が表示されます
      </p>
      <div className={styles.howto_container}>
        <Tag tag="表示" />
        <p>
          最大<span className={styles.howto_container_tag}>100件</span>
          まで表示されます。
          <br />
          <br />
          <span className={styles.howto_container_tag}>100件</span>
          を超える場合、古い
          <span className={styles.howto_container_tag}>案件</span>
          から自動的に削除されていきます。
          <br />
          <br />
          一度見たけど、あの案件なんだっけ。そんなときは閲覧履歴を活用しましょう。
        </p>
      </div>
    </div>
  );
};
