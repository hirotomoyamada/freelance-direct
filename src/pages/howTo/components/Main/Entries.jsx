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
          案件に問い合わせることが可能です。案件の詳細から、「問い合わせをする」を選択すると、メールや投稿した営業のSNSに直接問い合わせすることができます。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="問い合わせしたリスト" />
        <p>
          一度問い合わせた投稿は、案件・人材別に「お問い合わせ」リストへ格納されます。過去に自分が問い合わせた投稿をチェックすることが可能です。
        </p>
      </div>
    </div>
  );
};
