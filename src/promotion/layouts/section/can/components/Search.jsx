import styles from "../Can.module.scss";

export const Search = ({ option }) => {
  return (
    <div className={styles.can_container}>
      <div className={styles.can_cnt}>
        <h2 className={styles.can_cnt_ttl}>
          {!option ? "案件を見る" : "フリーランスを探す"}
        </h2>

        {!option ? (
          <p className={styles.can_cnt_desc}>
            掲載されている案件は
            <br />
            業務委託案件を保有する元請け、<span>2次請けまでがメイン。</span>
            <br />
            <br />
            よくあるカテゴリーで選択して検索なんて、時代遅れです。
            <br />
            全文検索のたった「一つ」の検索バーだけで
            <span>「すべて」取得できます。</span>
            <br />
            <br />
            また、エンジニアが気になる情報も詳しく掲載！
            <br />
            問い合わせ前の​不安を軽減します。
          </p>
        ) : (
          <p className={styles.can_cnt_desc}>
            掲載されているフリーランスは、
            <br />
            幅広い分野で活躍するプロフェッショナルばかり。
            <br />
            <br />
            よくあるカテゴリーで選択して検索なんて、時代遅れです。
            <br />
            全文検索のたった「一つ」の検索バーだけで
            <span>「すべて」取得できます。</span>
            <br />
            <br />
            また、フリーランスのプロフィールも充実しているので
            <br />
            的確にアプローチすることができます。
          </p>
        )}
      </div>

      <figure className={`${styles.can_visual} ${styles.can_search}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/can_search.svg`}
          alt=""
          className={styles.can_visual_img}
        />
      </figure>
    </div>
  );
};
