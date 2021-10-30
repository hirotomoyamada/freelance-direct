import root from "../Section.module.scss";
import styles from "./Target.module.scss";

export const Target = () => {
  return (
    <section className={`${styles.target} ${root.section}`}>
      <div className={root.section_inner}>
        <h1 className={`${styles.target_ttl} ${root.section_ttl}`}>
          ご利用いただける方
        </h1>
      </div>
    </section>
  );
};
