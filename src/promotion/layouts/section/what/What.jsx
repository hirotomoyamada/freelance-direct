import root from "../Section.module.scss";
import styles from "./What.module.scss";

export const What = () => {
  return (
    <section className={`${styles.what} ${root.section}`}>
      <div className={root.section_inner}>
        <h1 className={`${styles.what_ttl} ${root.section_ttl}`}>
          フリーランスダイレクトって
        </h1>
      </div>
    </section>
  );
};
