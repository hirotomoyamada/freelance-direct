import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const Entries = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>お問い合わせ</h1>
      <p className={styles.howto_desc}>
        案件にたいして、問い合わせることが可能です
      </p>
      <div className={styles.howto_container}>
        <Tag tag="問い合わせする" />
        <p>
          <span className={styles.howto_container_tag}>案件</span>
          に問い合わせることが可能です。
          <span className={styles.howto_container_tag}>案件</span>
          の詳細から、
          <span className={styles.howto_container_tag}>問い合わせをする</span>
          を選択すると、メールや投稿した営業のSNSに直接問い合わせすることができます。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="問い合わせしたリスト" />
        <p>
          一度問い合わせた
          <span className={styles.howto_container_tag}>案件</span>は、
          <span className={styles.howto_container_tag}>お問い合わせ</span>
          リストへ格納されます。過去に自分が問い合わせた
          <span className={styles.howto_container_tag}>案件</span>
          をチェックすることが可能です。
        </p>
      </div>
    </div>
  );
};
