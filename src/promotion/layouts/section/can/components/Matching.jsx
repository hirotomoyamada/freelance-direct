import styles from "../Can.module.scss";

export const Matching = ({ option }) => {
  return (
    <div className={styles.can_container}>
      <div className={styles.can_cnt}>
        <h2 className={styles.can_cnt_ttl}>
          {!option ? "相性を見てマッチング" : "すぐにマッチング"}
        </h2>

        {!option ? (
          <p className={styles.can_cnt_desc}>
            案件担当の所属する企業の知名度や規模だけではなく、
            <br />
            あなたのことを理解してくれる担当者を
            <br />
            選ぶことが可能です。
            <br />
            <br />
            また、あなたのプロフィールは
            <br />
            案件担当からのリクエストを承認しない限り
            <br />
            個人情報は開示されないので安心です。
          </p>
        ) : (
          <p className={styles.can_cnt_desc}>
            フリーランスとマッチングすると
            <br />
            あなたに通知が届き、プロフィールを見ることができます。
            <br />
            <br />
            フリーランスのプロフィールには、
            <br />
            連絡先も記載されているので
            <br />
            すぐにコミニュケーションをスタートできます。
          </p>
        )}
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
