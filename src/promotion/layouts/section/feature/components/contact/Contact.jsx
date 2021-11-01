import root from "../../Feature.module.scss";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={`${root.feature_container} ${styles.contact}`}>
      <figure className={`${root.feature_figure} ${styles.contact_figure}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/feature_contact_pop.png`}
          alt=""
          className={styles.contact_figure_pop}
        />

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/feature_contact.png`}
          alt=""
          className={styles.contact_figure_mockup}
        />
      </figure>

      <div className={root.feature_cnt}>
        <span className={root.feature_cnt_ttl}>問い合わせ</span>

        <p className={root.feature_cnt_desc}>
          検索した案件から、<span>すぐに問い合わせできる設計に。</span>
          <br />
          <br />
          「問い合わせをスムーズに」をコンセプトに、
          <span>クリップボードにコピーできる機能や</span>
          <br />
          あなたが普段使っているSNSなどでも問い合わせできる機能で
          <br />
          <br />
          案件担当とコミュニケーションも
          <span>迅速に正確に行うことができます。</span>
        </p>
      </div>
    </div>
  );
};
