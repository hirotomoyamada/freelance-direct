import styles from "../Can.module.scss";

export const Contact = () => {
  return (
    <div className={styles.can_container}>
      <div className={styles.can_cnt}>
        <h2 className={styles.can_cnt_ttl}>案件元に直接問合せ</h2>

        <p className={styles.can_cnt_desc}>
          あなたが関心を持った<span>案件を保有する​エージェントに</span>
          <br />
          直接問合せすることができます。
          <br />
          <br />
          エージェントは、自分のSNSやメールアドレスを公開しています。
          <br />
          あなたが、よく使うSNSで連絡を取ることもできます。
        </p>
      </div>

      <figure className={`${styles.can_visual} ${styles.can_contact}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/can_contact.svg`}
          alt=""
          className={styles.can_visual_img}
        />
      </figure>
    </div>
  );
};