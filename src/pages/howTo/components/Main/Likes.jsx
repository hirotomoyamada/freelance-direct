import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const Likes = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>いいね</h1>
      <p className={styles.howto_desc}>
        あなたが気になる案件に「いいね」ができます
      </p>
      <div className={styles.howto_container}>
        <Tag tag="いいねする" />
        <p>
          案件を「いいね」リストに格納しておくことができます。再度案件を見たいときなど、幅広い用途でお使いいただけます。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="いいねを解除する" />
        <p>
          「いいね」している投稿は、再度アイコンをタップすることで自動的に解除されます。
        </p>
      </div>
    </div>
  );
};
