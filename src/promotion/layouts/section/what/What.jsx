import root from "../Section.module.scss";
import styles from "./What.module.scss";

export const What = () => {
  return (
    <section className={`${styles.what} ${root.section}`}>
      <div className={`${root.section_inner} ${root.section_inner_content}`}>
        <h1 className={`${styles.what_ttl} ${root.section_ttl}`}>
          フリーランスダイレクトって
        </h1>

        <div className={styles.what_main}>
          <p className={styles.what_main_txt}>
            フリーランスエンジニアが
            <span>自由に案件を探せる営業支援アプリです。</span>
            <br />
            <br />
            数ある案件を手軽に検索ができ、
            <span>フリーランスが案件元に直接コンタクトできます。</span>
            <br />
            <br />
            自分から問い合わせするも良し、
            <span>エージェントからのスカウトで案件を選ぶも良し、</span>
            <br />
            あなたに合ったスタイルで<span>案件と巡りあえます。</span>
          </p>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/what.png`}
          alt=""
          className={styles.what_img}
        />
      </div>
    </section>
  );
};
