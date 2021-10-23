import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const Home = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>ホーム</h1>
      <p className={styles.howto_desc}>
        フォローしている営業や案件がタイムライン上に表示されます
      </p>
      <div className={styles.howto_container}>
        <Tag tag="案件" />
        <p>
          ホームでは、フォローしている営業の案件が表示されます。
          <br />
          <br />
          <span className={styles.howto_container_acnt}>
            ※ 最大15名まで、フォローしている営業の投稿が反映されます。
          </span>
          <br />
          <span className={styles.howto_container_acnt}>
            ※
            フォローを15名以上している場合、ホームの設定から表示したい営業をいつでも設定・変更できます。
          </span>
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="フォロー" />
        <p>
          自分がフォローしている一覧が表示されています。営業のプロフィールへアクセスしたり、フォローを解除することができます。
        </p>
      </div>
    </div>
  );
};
