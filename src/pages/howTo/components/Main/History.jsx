import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const History = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>履歴</h1>
      <p className={styles.howto_desc}>
        あなたが閲覧した過去の案件が表示されます
      </p>
      <div className={styles.howto_container}>
        <Tag tag="表示" />
        <p>
          最大
          100件まで表示されます。100件を超える場合、古い案件から自動的に削除されていきます。一度見たけど、あの案件なんだっけ。そんなときは履歴を活用しましょう。
        </p>
      </div>
    </div>
  );
};
