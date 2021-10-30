import styles from "../Can.module.scss";

export const Matching = () => {
  return (
    <div className={styles.can_container}>
      <div className={styles.can_cnt}>
        <h2 className={styles.can_cnt_ttl}>相性を見てマッチング</h2>

        <p className={styles.can_cnt_desc}>
          知名度や規模だけではなく、
          <br />
          あなたのことを理解してくれる<span>エージェントを</span>
          <br />
          選ぶことが可能です。
          <br />
          <br />
          また、あなたのプロフィールは
          <br />
          エージェントからのリクエストを承認しない限り
          <br />
          個人情報は開示されないので安心です。
        </p>
      </div>

      <figure className={`${styles.can_visual} ${styles.can_matching}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/can_matching.svg`}
          alt=""
          className={styles.can_visual_img}
        />
      </figure>
    </div>
  );
};
