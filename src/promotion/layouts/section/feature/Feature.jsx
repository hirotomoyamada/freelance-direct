import root from "../Section.module.scss";
import styles from "./Feature.module.scss";

export const Feature = () => {
  return (
    <section className={`${styles.feature} ${root.section}`}>
      <div className={root.section_inner}>
        <h1 className={`${styles.feature_ttl} ${root.section_ttl}`}>機能</h1>
      </div>
    </section>
  );
};
